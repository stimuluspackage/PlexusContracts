const CoreContract = artifacts.require("core");

contract('CoreContract', async accounts => {

    let coreContract = "";
    
    before(async () => {
        coreContract = await CoreContract.deployed()
    });

    it('Core contract should have been deployed correctly', ()=> {

        console.log(ampContract.address);

        assert(ampContract.address != '');

    });

});