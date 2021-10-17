require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember mistake heavy argue sure skull'; 
let testAccounts = [
"0xbcfb22153317d0d2a9ef94a70375599c5c840cfd1bf6d93d4a6d01ccc72f3eb0",
"0x18bc475de54d08c6271ab5458b8220f6527227c149f7f3457271e4b4101fa8a4",
"0xcf72803c323638f15d5103db7b5832fa22a99f4129bab7bf7984ac7485b0c0ee",
"0xce13a2f405648ead76b0f95b02893090b59672de26bf8b058ba533da576e01d5",
"0x136126747f94707fa21f34e262920ef9e6c32d8709c6d373740cb152e1e39b8b",
"0xe3f3775fbad238261d51367c06584a0efcafd88e66556d5b5ad00478590b8bdd",
"0xc2f7e362f3224582cc3329102233d92fe34b727a28bad83c3188ded7bbefc6fe",
"0x7545a547d9a7b5260af64c269cfa60d5eb6867575091b71908074d04ea3805f1",
"0xfe789d9629a4f71ab667ea4d0804683e284cc00b33912495821a7150d659e10a",
"0xba24db81f6048b4322281849476a6f1efbe168272acf9d8d2087f7f98a9a0e0f"
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

