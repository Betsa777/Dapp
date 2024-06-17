const hre = require('hardhat');

async function main(){

    const Chai= await hre.ethers.getContractFactory("Chai");
    const chai = await Chai.deploy();

    await chai.getDeployedCode();

    console.log('contract adress ',await chai.getAddress());
}

//0xE42379bDF97C5924A0196f4E64E8fCA16543ad07

main()
.catch(error =>{
    console.log(error);
    process.exitCode=1;
})