var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "finger safe spike forget club vast pudding betray spice alter poem cream";

module.exports = {
  // migrations_directory: "./src/migrations",
  // contracts_directory: "./src/contracts/",
  networks: {
    // default
    development: {
      host: "localhost",
      port: 7545,
      network_id: 5777,
    },

    ropsten: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 3,
      gas: 5500000
    },

    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4, // 1,2, 3, 42, 1337, * (Match any network id)
      gas: 5500000, //may be 21000 - 3000000
      gasPrice: 20000000000
    },

    // main net. Specify by --network live
    live: {
      host: "mainnet.infura.io",
      port: 80,
      network_id: 1,
    },
    ropsteninfura: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/lSJ4YysdSiZidnj2U2oO")
        },
        network_id: 5,
        gas: 4700000,
        gasPrice: 20000000000
    },
    rinkebyinfura: {
        provider: function() {
            return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/lSJ4YysdSiZidnj2U2oO")
        },
        network_id: 6,
        gas: 4700000,
        gasPrice: 20000000000
    },
    maininfura: {
        provider: function() {
            return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/lSJ4YysdSiZidnj2U2oO")
        },
        network_id: 7,
        gas: 4700000
    },


    // test chains
    // ropsten: {
    //   provider: new HDWalletProvider("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat", "https://ropsten.infura.io/"),
    //   network_id: 3
    // },
    // rinkeby: {
    //   provider: new HDWalletProvider("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat", "https://rinkeby.infura.io/"), // lol someone funded this account!
    //   network_id: 3
    // },
    // kovan: {
    //   provider: new HDWalletProvider("candy maple clay sugar pudding cream honey rich smooth crumble sweet treat", "https://kovan.infura.io/"),
    //   network_id: 42
    // },
  },

  solc: {
    optimizer: {
      enabled: false,
    }
  },
}