const ACoconutRenAdapter = artifacts.require("ACoconutRenAdapter");

module.exports = function(deployer) {
    const registry = "0xe80d347df1209a76dd9d2319d62912ba98c54ddd";
    const acSwap = "0x73FddFb941c11d16C827169Bb94aCC227841C396"
    deployer.deploy(ACoconutRenAdapter, registry, acSwap);
};
