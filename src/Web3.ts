import { Conflux, Contract } from 'js-conflux-sdk'
import { 
    DEFAULT_BASE_REGISTRAR_ADDRESS,
    DEFAULT_NAME_WRAPPER_ADDRESS,
    DEFAULT_PUBLIC_RESOLVER_ADDRESS,
    DEFAULT_REGISTRY_ADDRESS,
    DEFAULT_REVERSE_REGISTRAR_ADDRESS,
    DEFAULT_WEB3_CONTROLLER_ADDRESS,
    REGISTRY_ABI,
    PUBLIC_RESOLVER_ABI,
    REVERSE_REGISTRAR_ABI,
    WEB3_BASE_REGISTRAR_ABI,
    WEB3_CONTROLLER_ABI,
    NAME_WRAPPER_ABI,
    Registry,
    Web3BaseRegistrar,
} from './contracts/index'

export interface Web3DomainInitOption {
    client: Conflux;
    registryAddress?: string;
    reverseRegistrarAddress?: string;
    baseRegistrarAddress?: string;
    web3ControllerAddress?: string;
    nameWrapperAddress?: string;
    publicResolverAddress?: string;
}

export default class Web3Domain {
    client: Conflux;
    Registry: Registry;
    ReverseRegistrar: Contract;
    Web3BaseRegistrar: Web3BaseRegistrar;
    Web3Controller: Contract;
    NameWrapper: Contract;
    PublicResolver: Contract;

    constructor(option: Web3DomainInitOption) {
        this.client = option.client
        this.Registry = this.client.Contract({
            abi: REGISTRY_ABI,
            address: option.registryAddress || DEFAULT_REGISTRY_ADDRESS,
        })
        this.ReverseRegistrar = this.client.Contract({
            abi: REVERSE_REGISTRAR_ABI,
            address: option.reverseRegistrarAddress || DEFAULT_REVERSE_REGISTRAR_ADDRESS,
        })
        this.Web3BaseRegistrar = this.client.Contract({
            abi: WEB3_BASE_REGISTRAR_ABI,
            address: option.baseRegistrarAddress || DEFAULT_BASE_REGISTRAR_ADDRESS,
        })
        this.Web3Controller = this.client.Contract({
            abi: WEB3_CONTROLLER_ABI,
            address: option.web3ControllerAddress || DEFAULT_WEB3_CONTROLLER_ADDRESS,
        })
        this.NameWrapper = this.client.Contract({
            abi: NAME_WRAPPER_ABI,
            address: option.nameWrapperAddress || DEFAULT_NAME_WRAPPER_ADDRESS,
        })
        this.PublicResolver = this.client.Contract({
            abi: PUBLIC_RESOLVER_ABI,
            address: option.publicResolverAddress || DEFAULT_PUBLIC_RESOLVER_ADDRESS,
        })
    }

    getResoverContract(address:string){
        if(!address) return this.PublicResolver
        return this.client.Contract({
            abi: PUBLIC_RESOLVER_ABI,
            address: address,
        })
    }
}