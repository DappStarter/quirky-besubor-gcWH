require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name raise noise huge give knee metal genuine'; 
let testAccounts = [
"0xd9f186dfb80514bd0109ba04d5e6a71cd6ecc6552d37a01ebc1947623fc0f2df",
"0x0405b88fa629644ab372b9c839f8100c738eb7f07df1b3f93b891e1a8a79c147",
"0x3ef587c6f7ba56b72fbc4860ff4d7203ded9a734ae501ea242cfa277e9b7cfbd",
"0x83a46185026b6b9008080e31e47d96ec188d4d65716ce6ef41ef1060d124d5d3",
"0xf8c7a1cd93288a8f07934eb83d236f20f339611d3dca5c5d8c898e510ce26eb2",
"0xfd7d08e00d2c2a37f4486c3520801b0ee8bc85d85f87fa80fcf3b99ede842fe5",
"0x5989236bd018186a6e207e6cacf6334e3234a83d9de7d4dd726c9871c6b8b41f",
"0xe553569619d7e5dca1eddba9ae2f88f9851850c5cf972e21ea6fb0eacc84126c",
"0x18b5f775bfab73f663bd4bb97db5cc78d4727177ba47d7a93f461df807c86522",
"0x6092fdcefed3bd7e19daee7f36fb830c940b261593f3593d6fc21ad6b3630e14"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

