var Migrations = artifacts.require("./ZombieOwnership.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
