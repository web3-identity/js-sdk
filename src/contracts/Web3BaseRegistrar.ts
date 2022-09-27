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

export const WEB3_BASE_REGISTRAR_ABI = [
    'constructor(address _ens, bytes32 _baseNode)',
    'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
    'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
    'event ControllerAdded(address indexed controller)',
    'event ControllerRemoved(address indexed controller)',
    'event NameMigrated(uint256 indexed id, address indexed owner, uint256 expires)',
    'event NameRegistered(uint256 indexed id, address indexed owner, uint256 expires)',
    'event NameRenewed(uint256 indexed id, uint256 expires)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
    'function GRACE_PERIOD() view returns (uint256)',
    'function addController(address controller)',
    'function approve(address to, uint256 tokenId)',
    'function available(uint256 id) view returns (bool)',
    'function balanceOf(address owner) view returns (uint256)',
    'function baseNode() view returns (bytes32)',
    'function controllers(address) view returns (bool)',
    'function ens() view returns (address)',
    'function getApproved(uint256 tokenId) view returns (address)',
    'function isApprovedForAll(address owner, address operator) view returns (bool)',
    'function name() view returns (string)',
    'function nameExpires(uint256 id) view returns (uint256)',
    'function owner() view returns (address)',
    'function ownerOf(uint256 tokenId) view returns (address)',
    'function reclaim(uint256 id, address owner)',
    'function register(uint256 id, address owner, uint256 duration) returns (uint256)',
    'function registerOnly(uint256 id, address owner, uint256 duration) returns (uint256)',
    'function removeController(address controller)',
    'function renew(uint256 id, uint256 duration) returns (uint256)',
    'function renounceOwnership()',
    'function safeTransferFrom(address from, address to, uint256 tokenId)',
    'function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)',
    'function setApprovalForAll(address operator, bool approved)',
    'function setResolver(address resolver)',
    'function supportsInterface(bytes4 interfaceID) view returns (bool)',
    'function symbol() view returns (string)',
    'function tokenURI(uint256 tokenId) view returns (string)',
    'function transferFrom(address from, address to, uint256 tokenId)',
    'function transferOwnership(address newOwner)'
];