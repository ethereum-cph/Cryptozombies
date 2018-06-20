# Cryptozombies
- Coding session on getting started with cryptozombies
https://www.meetup.com/Copenhagen-Ethereum-Meetup/events/249664436/
- We will go through the tutorial:
https://cryptozombies.io/
- The content of the tutorial is described here:
https://sphere.social/hello/blogs/view/4717/create-cryptozombies-and-learn-solidity
- Great guide in the web3 implementation
https://medium.com/coinmonks/solidity-and-web3-js-141115b0f8c5

## Development tools:

- Install Ganache http://truffleframework.com/ganache/
- Install node & npm https://nodejs.org/en/ (version 8 or 9 is fine)
- Install truffle from the command line: `npm install -g truffle`
- Install a text editor https://confluence.jetbrains.com/display/WI/WebStorm+EAP
- Install a local webserver: npm i http-server

If you would like to use Infura to not sync a local node use a HD wallet
http://truffleframework.com/tutorials/using-infura-custom-provider
- Install HDwallet to use infura nodes: npm i truffle-hdwallet-provider
- Note windows users if you get a MSBUILD error you have to install: npm install -g windows-build-tools

## Debugging the contracts
- truffle development - launches a local blockchain
Note windows users should type "truffle.cmd"

- You can deploy your contracts by using command "migrate"
- The contract can be debugged as described here:
http://truffleframework.com/docs/getting_started/debugging
- The contract can be tested as described here:
http://truffleframework.com/docs/getting_started/javascript-tests
- Note, if you get and error while migrating, please delete files in folder /build/contracts

## Deploying the contract
- Deploy to rinkeby:
truffle migrate --network rinkebyinfura
- Deploy to local ganache blockchain
truffle migrate --network development

## Testing frontend
- launch web-server with command: http-server
- Visit url with browser having metamask installed, unlocked and connected to it to Rinkeby network
- In the console create your first zombie bt typing: createRandomZombie("SOME NAME")

Display zombies
getZombiesByOwner(userAccount)
            .then(displayZombies);
            
Create zombie
createRandomZombie("TEST NANE")

Find zombie id
getZombiesByOwner(userAccount)

Transfer zombie
transferZombie('0xf64e39c5911d22f0f87d35c0ab70fa105bab2ec3',4)