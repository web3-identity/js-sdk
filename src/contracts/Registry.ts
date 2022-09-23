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

export const REGISTRY_ABI = [
    'constructor()',
    'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
    'event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner)',
    'event NewResolver(bytes32 indexed node, address resolver)',
    'event NewTTL(bytes32 indexed node, uint64 ttl)',
    'event Transfer(bytes32 indexed node, address owner)',
    'function isApprovedForAll(address owner, address operator) view returns (bool)',
    'function owner(bytes32 node) view returns (address)',
    'function recordExists(bytes32 node) view returns (bool)',
    'function resolver(bytes32 node) view returns (address)',
    'function setApprovalForAll(address operator, bool approved)',
    'function setOwner(bytes32 node, address owner)',
    'function setRecord(bytes32 node, address owner, address resolver, uint64 ttl)',
    'function setResolver(bytes32 node, address resolver)',
    'function setSubnodeOwner(bytes32 node, bytes32 label, address owner) returns (bytes32)',
    'function setSubnodeRecord(bytes32 node, bytes32 label, address owner, address resolver, uint64 ttl)',
    'function setTTL(bytes32 node, uint64 ttl)',
    'function ttl(bytes32 node) view returns (uint64)'
];