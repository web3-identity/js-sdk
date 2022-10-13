// @ts-ignore
export { BaseRegistrarImplementation as WEB3_BASE_REGISTRAR_ABI } from '@web3identity/cns-contracts'
import ContractMethod from "js-conflux-sdk/dist/types/contract/method/ContractMethod";

export interface Web3BaseRegistrar {
    GRACE_PERIOD(): Promise<number>;
    addController(controller: string): ContractMethod;
    approve(to: string, tokenId: number): ContractMethod;
    available(tokenId: number): Promise<boolean>;
    balanceOf(account: string): Promise<number>;
    baseNode(): Promise<string>;
    controllers(): Promise<string[]>;
    ens(): Promise<string>;
    getApproved(tokenId: number): Promise<string>;
    isApprovedForAll(owner: string, operator: string): Promise<boolean>;
    name(): Promise<string>;
    nameExpires(tokenId: number): Promise<number>;
    owner(): Promise<string>;
    ownerOf(tokenId: number): Promise<string>;
    reclaim(tokenId: number, name: string): ContractMethod;
    register(tokenId: number, name: string, duration: number): ContractMethod;
    registerOnly(tokenId: number, name: string, duration: number): Promise<number>;
    removeController(controller: string): ContractMethod;
    renew(tokenId: number, duration: number): ContractMethod;
    safeTransferFrom(from: string, to: string, tokenId: number): ContractMethod;
    safeTransferFrom(from: string, to: string, tokenId: number, data: string): ContractMethod;
    setApprovalForAll(operator: string, approved: boolean): ContractMethod;
    symbol(): Promise<string>;
    tokenURI(tokenId: number): Promise<string>;
    transferFrom(from: string, to: string, tokenId: number): ContractMethod;
    setResolver(resolver: string): ContractMethod;
    transferOwnership(newOwner: string): ContractMethod;
    renounceOwnership(): ContractMethod;
}
