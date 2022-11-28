import { formatsByCoinType } from "@web3identity/address-encoder";
import Web3Domain, { Web3DomainInitOption } from "./Web3";
import { namehash } from "./index";
import { EMPTY_ADDRESS } from "./constant";
import { address } from "js-conflux-sdk";

export class Name {
  web3domain: Web3Domain;
  name: string;
  constructor(name: string, options: Web3DomainInitOption) {
    this.web3domain = new Web3Domain(options);
    this.name = name;
  }
  async getAddress(coinId?: number) {
    coinId = coinId || 503;
    const nh = namehash(this.name);
    const { coinType, encoder } = formatsByCoinType[coinId];
    try {
      const resolverAddr = (this.web3domain.Registry as any).resolver(nh)
      const resolverContract = this.web3domain.getResoverContract(resolverAddr)
      const addr = await (resolverContract as any).addr(
        nh,
        coinType
      );
      return encoder(addr);
    } catch (error) {
      console.warn("Error getting addr on the resolver contract");
      return EMPTY_ADDRESS;
    }
  }
}

export default class CNS {
  web3domain: Web3Domain;
  options: Web3DomainInitOption;
  constructor(options: Web3DomainInitOption) {
    this.web3domain = new Web3Domain(options);
    this.options = options;
  }

  name(name: string) {
    return new Name(name, this.options);
  }

  // addr - hex address or conflux base32 address
  reverseName(addr: string) {
    if (address.hasNetworkPrefix(addr)) {
        const { hexAddress } = address.decodeCfxAddress(addr);
        return `${hexAddress.toString('hex')}.addr.reverse`;
    }
    if (address.isValidHexAddress(addr)) {
        const bareAddr = addr.toLowerCase().replace("0x", "");
        return `${bareAddr}.addr.reverse`;
    }
    throw new Error("Invalid address");
  }

  // addr - hex address or conflux base32 address
  // will return a empty string if not found
  async getName(address: string, checkForward: boolean = false) {
    try {
      const reverseName = this.reverseName(address);
      const node = namehash(reverseName);
      const name = await (this.web3domain.PublicResolver as any).name(node);
      if (!name) throw new Error("Name not found");
      if (!checkForward) return name;
      // check if the name is resolve to this address
      const addr = await this.name(name).getAddress();
      if (this.reverseName(addr) !== reverseName) {
        throw new Error("Name is not resolve to this address");
      }
      return name;
    } catch (error) {
      console.warn(
        `Error getting name for reverse record of ${address}`,
        error
      );
      return "";
    }
  }
}
