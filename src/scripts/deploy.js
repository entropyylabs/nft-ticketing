const hre = require("hardhat");

async function main() {
  const NFTicket = await hre.ethers.getContractFactory("NFTicket");
  const nftTicket = await NFTicket.deploy();
  await nftTicket.deployed();
  console.log("nfTicket deployed to:", nftTicket.address);

  const NFTReferal = await hre.ethers.getContractFactory("NFTicketReferral");
  const nftReferal = await NFTReferal.deploy();
  await nftReferal.deployed();
  console.log("nfTicketReferral deployed to:", nftReferal.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
