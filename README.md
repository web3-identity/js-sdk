# web3ns

## Install

To use this SDK, `js-conflux-sdk` is also required.

```bash
$ npm install web3ns js-conflux-sdk
```

## How to use

```js
const { Conflux } = require('js-conflux-sdk');
const { Web3Domain, namehash } = require('web3ns');

const conflux = new Conflux({
    url: 'https://test.confluxrpc.com',
    networkId: 1,
});

const web3domain = new Web3Domain({
    client: conflux,
    registryAddress: 'cfxtest:acen57mpbzvs774tk6kffcsbkef3m4mn5eh0nxy4jx',
    ...
});

async function main() {
    const owner = await web3domain.Registry.ownerOf(namehash('conflux.web3'));
    console.log(`Owner of ${'conflux.web3'} is : ${owner}`);
}

main().catch(console.error);
```

## Web3Domain sub fields(contract)

* Registry
* ReverseRegistrar
* Web3BaseRegistrar
* Web3Controller
* NameWrapper
* PublicResolver

## Utilities

* namehash
* labelhash
* dnsNameNotationDecode

## Constants

* WEB3_NAMEHASH
* REVERSE_NAMEHASH
* ROOT_NODE

## Related Library

* [erc165 id calbulator](https://github.com/blockful-io/erc165)