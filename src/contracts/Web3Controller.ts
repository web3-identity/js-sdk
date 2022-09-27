
export const WEB3_CONTROLLER_ABI = [
    'constructor(address _base, address _prices, uint256 _minCommitmentAge, uint256 _maxCommitmentAge, address _reverseRegistrar, address _nameWrapper)',
    'error CommitmentTooNew(bytes32 commitment)',
    'error CommitmentTooOld(bytes32 commitment)',
    'error DurationTooShort(uint256 duration)',
    'error InsufficientValue()',
    'error MaxCommitmentAgeTooHigh()',
    'error MaxCommitmentAgeTooLow()',
    'error NameNotAvailable(string name)',
    'error ResolverRequiredWhenDataSupplied()',
    'error Unauthorised(bytes32 node)',
    'error UnexpiredCommitmentExists(bytes32 commitment)',
    'event NameRegistered(string name, bytes32 indexed label, address indexed owner, uint256 baseCost, uint256 premium, uint256 expires)',
    'event NameRenewed(string name, bytes32 indexed label, uint256 cost, uint256 expires)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'function MIN_REGISTRATION_DURATION() view returns (uint256)',
    'function available(string name) view returns (bool)',
    'function commit(bytes32 commitment)',
    'function commitments(bytes32) view returns (uint256)',
    'function makeCommitment(string name, address owner, uint256 duration, bytes32 secret, address resolver, bytes[] data, bool reverseRecord, uint32 fuses, uint64 wrapperExpiry) pure returns (bytes32)',
    'function maxCommitmentAge() view returns (uint256)',
    'function minCommitmentAge() view returns (uint256)',
    'function nameWrapper() view returns (address)',
    'function owner() view returns (address)',
    'function prices() view returns (address)',
    'function recoverFunds(address _token, address _to, uint256 _amount)',
    'function register(string name, address owner, uint256 duration, bytes32 secret, address resolver, bytes[] data, bool reverseRecord, uint32 fuses, uint64 wrapperExpiry) payable',
    'function registerWithFiat(string name, address owner, uint256 duration, bytes32 secret, address resolver, bytes[] data, bool reverseRecord, uint32 fuses, uint64 wrapperExpiry)',
    'function renew(string name, uint256 duration) payable',
    'function renewWithFiat(string name, uint256 duration, uint32 fuses, uint64 wrapperExpiry)',
    'function renewWithFuses(string name, uint256 duration, uint32 fuses, uint64 wrapperExpiry) payable',
    'function renounceOwnership()',
    'function rentPrice(string name, uint256 duration) view returns (tuple(uint256 base, uint256 premium) price)',
    'function reverseRegistrar() view returns (address)',
    'function setCommitmentAge(uint256 _minCommitmentAge, uint256 _maxCommitmentAge)',
    'function supportsInterface(bytes4 interfaceID) pure returns (bool)',
    'function transferOwnership(address newOwner)',
    'function valid(string name) pure returns (bool)',
    'function withdraw()'
];