## Plexus Smart Contracts Tests

The testing for the plexus contracts is done using Truffle for sandbox deployment, Mocha for unit-testing and Chai for assertions.

### Contract Deployment

The plexus contracts should be deployed as follows,

1. `wrapper.sol` is the ERC20 swap contract via Uniswap and should be deployed first. Currently it's mainnet address is [0x1d17f9007282f9388bc9037688ade4344b2cc49b](https://etherscan.io/address/0x1d17f9007282f9388bc9037688ade4344b2cc49b#code)
    - This contract contains the logic for swapping ERC 20 tokens using uniswap.

2. `wrapperSushi.sol` is the ERC20 swap contract via Sushiswap. You should only deploy this contract when you want to use Sushiswap for the swap's instead of Uniswap and also update its addresss in the `core.sol` contract below.
    - This contract contains the logic for swapping ERC 20 tokens using Sushiswap.  

3. `tokenrewards.sol` should be the 3rd contract to deploy. It's current mainnet address is [0x2AE7b37AB144b5F8c803546b83e81ad297D8c2c4](https://etherscan.io/address/0x2AE7b37AB144b5F8c803546b83e81ad297D8c2c4#code)
    
4. `oracle.sol` should be the 4th contract to deploy. It's current mainnet address is [0xBDfF00110c97D0FE7Fefbb78CE254B12B9A7f41f](https://etherscan.io/address/0xBDfF00110c97D0FE7Fefbb78CE254B12B9A7f41f#code)
    - After deploying this contract, call the function `updateRewardAddress` to set the token reward address to the address of the `tokenrewards.sol` address above

5. `tier1Staking.sol` should be the 5th contract to deploy. It's current mainnet address is [0x97b00db19bAe93389ba652845150CAdc597C6B2F](https://etherscan.io/address/0x97b00db19bAe93389ba652845150CAdc597C6B2F#code)
    - After deploying this contract, call the `updateOracleAddress` function and then set it to the address of the `tokenrewards.sol`  above, if necessary.

6. `core.sol` is the core contract and should be the 6th to deploy. Currently it's mainnet address is [0x7a72b2C51670a3D77d4205C2DB90F6ddb09E4303](https://etherscan.io/address/0x7a72b2c51670a3d77d4205c2db90f6ddb09e4303#code)
    - After deployment, call the `setOracleAddress` and then set it to the address of the `oracle.sol` contract above, otherwise contract won't function correctly.
    - After deployment also, call the `setStakingAddress` and then set it to the address of the `tier1Staking.sol` contract above, otherwise contract won't function correctly.
    - Finally call the `updateCoreAddress` function in the `oracle.sol` contract, to set the address of the `core.sol` contract from the deployment
    - Currently this contract is hardcoded to point to the current `wrapper.sol` address for the token swaps.

7. Finally after all the above contracts have been deployed, you can deploy the specific farming `tier2....` contractss i.e. `tier2Aave.sol`, `tier2Farm.sol` e.t.c
    - For example the `tier2Farm.sol` contract could be deployed, so that users can send tokens to the contract for Harvest.Finance farming e.t.c

