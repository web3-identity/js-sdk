// @ts-ignore
export { CNS as REGISTRY_ABI } from '@web3identity/cns-contracts'
import ContractMethod from "js-conflux-sdk/dist/types/contract/method/ContractMethod";

export interface Registry {
    isApprovedForAll(owner: string, operator: string): Promise<boolean>;
    owner(node: string|Buffer): Promise<string>;
    recordExists(node: string|Buffer): Promise<boolean>;
    resolver(node: string|Buffer): Promise<string>;
    ttl(node: string|Buffer): Promise<number>;
    setSubnodeRecord(node: string|Buffer, label: string|Buffer, owner: string, resolver: string, ttl: number): ContractMethod;
    setRecord(node: string|Buffer, owner: string, resolver: string, ttl: number): ContractMethod;
    setOwner(node: string|Buffer, owner: string): ContractMethod;
    setApprovalForAll(operator: string, approved: boolean): ContractMethod;
    setResolver(node: string|Buffer, resolver: string): ContractMethod;
    setSubnodeOwner(node: string|Buffer, label: string|Buffer, owner: string): ContractMethod;
    setTTL(node: string|Buffer, ttl: number): ContractMethod;
}