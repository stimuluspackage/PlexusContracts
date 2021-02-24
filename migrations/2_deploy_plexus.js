const Wrapper = artifacts.require("wrapper");
const TokenRewards = artifacts.require("tokenrewards");
const Oracle = artifacts.require("oracle");
const Tier1Staking = artifacts.require("tier1Staking");
const Core = artifacts.require("core");
const Tier2Farm = artifacts.require("tier2Farm");

module.exports = async (deployer) => {

    await deployer.deploy(Wrapper, {overwrite: false});
    await deployer.deploy(TokenRewards, {overwrite: false});
    await deployer.deploy(Oracle, {overwrite: false});
    await deployer.deploy(Tier1Staking, {overwrite: false});
    await deployer.deploy(Core, {overwrite: false});
    await deployer.deploy(Tier2Farm, {overwrite: false});

};