import { formatsByCoinType } from "@web3identity/address-encoder";
import Web3Domain, { Web3DomainInitOption } from "./Web3";
import { namehash } from "./index";
import { EMPTY_ADDRESS } from "./constant";

export class Name {
  web3domain: Web3Domain;
  name: string;
  constructor(name: string, options: Web3DomainInitOption) {
    this.web3domain = new Web3Domain(options);
    this.name = name;
  }
  async getAddress(coinId: number) {
    const nh = namehash(this.name);
    const { coinType, encoder } = formatsByCoinType[coinId];
    try {
      const addr = await (this.web3domain.PublicResolver as any).addr(
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

  async getName(address: string) {
    try {
      const node = await (this.web3domain.ReverseRegistrar as any).node(
        address
      );
      const name = await (this.web3domain.PublicResolver as any).name(node);
      return name;
    } catch (error) {
      console.warn(
        `Error getting name for reverse record of ${address}`,
        error
      );
    }
  }
}
