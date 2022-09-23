
export const REVERSE_REGISTRAR_ABI = [
    'constructor(address ensAddr)',
    'event ControllerChanged(address indexed controller, bool enabled)',
    'event DefaultResolverChanged(address indexed resolver)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event ReverseClaimed(address indexed addr, bytes32 indexed node)',
    'function claim(address owner) returns (bytes32)',
    'function claimForAddr(address addr, address owner, address resolver) returns (bytes32)',
    'function claimWithResolver(address owner, address resolver) returns (bytes32)',
    'function controllers(address) view returns (bool)',
    'function defaultResolver() view returns (address)',
    'function ens() view returns (address)',
    'function node(address addr) pure returns (bytes32)',
    'function owner() view returns (address)',
    'function renounceOwnership()',
    'function setController(address controller, bool enabled)',
    'function setDefaultResolver(address resolver)',
    'function setName(string name) returns (bytes32)',
    'function setNameForAddr(address addr, address owner, address resolver, string name) returns (bytes32)',
    'function transferOwnership(address newOwner)'
];