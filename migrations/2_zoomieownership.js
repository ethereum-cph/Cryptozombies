var Migrations = artifacts.require("./zombieownership.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
