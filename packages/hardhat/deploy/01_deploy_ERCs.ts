import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { PromiseOrValue } from "../typechain-types/common";
import {
  BigNumberish,
  BytesLike,
  BigNumber
} from "ethers";

const deployAndInitializeERCContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const UINT256_MAX = 
  BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935");

  // Deploy SoulCats - ERC721
  await deploy("SoulCats", {
    from: deployer,
    // Contract constructor arguments
    args: [
      deployer,       // _defaultAdmin
      "SoulCats",   // _name
      "😽",          // _symbol
      deployer,       // _royaltyRecipient
      0,              // _royaltyBps
      deployer        // _primarySaleRecipient
    ],
    log: true,
    autoMine: true,
  });

  const soulCatsContract = await hre.ethers.getContract("SoulCats", deployer);

  const claimCondition = {
    startTimestamp: 0, // Example value
    maxClaimableSupply: UINT256_MAX, // Example value
    supplyClaimed: 0, // Example value
    quantityLimitPerWallet: UINT256_MAX, // Example value
    merkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000", // Example value
    pricePerToken: 0, // Example value
    currency: "0x0000000000000000000000000000000000000000", // Example value
    metadata: "" // Example value
  };

  await soulCatsContract.setClaimConditions(claimCondition, false);

  // lazy mint some cats
  const baseURI = "https://bafybeigffbj6neldyewn5vs445pk4qlav6m4rwevp5en22qrthkgumsa3e.ipfs.nftstorage.link/"
  await soulCatsContract.lazyMint(
    2000,baseURI, []);

  const GIFT_DATA = [

    {
      contractName: "Care",
      name: "CARE",
      symbol: "💗"
    },
    {
      contractName: "Respect",
      name: "RESPECT",
      symbol: "💙"
    },
    {
      contractName: "Responsibility",
      name: "RESPONSIBILITY",
      symbol: "💜"
    },
    {
      contractName: "Knowledge",
      name: "KNOWLEDGE",
      symbol: "🧡"
    },
  ]
 
  for (let i = 0; i < GIFT_DATA.length; i++) {

    await deploy(GIFT_DATA[i].contractName, {
      from: deployer,
      // Contract constructor arguments
      args: [
        deployer,       // _defaultAdmin
        GIFT_DATA[i].name,   // _name
        GIFT_DATA[i].symbol,   // _symbol
        deployer,       // _royaltyRecipient
        soulCatsContract.address // _soulCatAddress
      ],
      log: true,
      autoMine: true,
    });
  
  }

  const careContract = await hre.ethers.getContract("Care", deployer);
  const respectContract = await hre.ethers.getContract("Respect", deployer);
  const responsibilityContract = await hre.ethers.getContract("Responsibility", deployer);
  const knowledgeContract = await hre.ethers.getContract("Knowledge", deployer);

    // Deploy 💖LOVE💖 - ERC20
    await deploy("Love", {
      from: deployer,
      // Contract constructor arguments
      args: [
        deployer,       // _defaultAdmin
        "💖LOVE💖",   // _name
        "💖",          // _symbol
        deployer,        // _primarySaleRecipient
        careContract.address, 
        respectContract.address, 
        responsibilityContract.address, 
        knowledgeContract.address         
      ],
      log: true,
      autoMine: true,
    });

  const loveContract = await hre.ethers.getContract("Love", deployer);


  // add LOVE claim condition
  const loveClaimCondition = {
    startTimestamp: 0, 
    maxClaimableSupply: UINT256_MAX, 
    supplyClaimed: 0,
    quantityLimitPerWallet: UINT256_MAX, 
    merkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000",
    pricePerToken: BigNumber.from(1).mul(BigNumber.from(10).pow(18)) , 
    currency1: careContract.address,
    currency2: respectContract.address, 
    currency3: responsibilityContract.address, 
    currency4: knowledgeContract.address,
    metadata: ""
  };

  await loveContract.setClaimConditions(loveClaimCondition, false);

  // mint test gifts to deployer
  await careContract.mintTo(deployer, 1);
  await respectContract.mintTo(deployer, 1);
  await responsibilityContract.mintTo(deployer, 1);
  await knowledgeContract.mintTo(deployer, 1);

  type AllowlistProofStruct = {
    proof: PromiseOrValue<BytesLike>[];
    quantityLimitPerWallet: PromiseOrValue<BigNumberish>;
    pricePerToken: PromiseOrValue<BigNumberish>;
    currency1: PromiseOrValue<string>;
    currency2: PromiseOrValue<string>;
    currency3: PromiseOrValue<string>;
    currency4: PromiseOrValue<string>;
  };

  const allowListProof : AllowlistProofStruct =
  {
    proof: [],
    quantityLimitPerWallet: UINT256_MAX,
    pricePerToken: BigNumber.from(1).mul(BigNumber.from(10).pow(18)),
    currency1: careContract.address,
    currency2: respectContract.address,
    currency3: responsibilityContract.address,
    currency4: knowledgeContract.address,
  }

  // attempt to claim LOVE
  await loveContract.claim(
    deployer,                       //_receiver
    1,                              //_quantity
    careContract.address,           // _currency1
    respectContract.address,        // _currency2
    responsibilityContract.address, //_currency3
    knowledgeContract.address,      // _currency4
    BigNumber.from(1).mul(BigNumber.from(10).pow(18)),   // _pricePerToken
    allowListProof,                 // _allowlistProof
    []                              // _data
    );

  // Get the deployed contract
  // const yourContract = await hre.ethers.getContract("YourContract", deployer);
};

export default deployAndInitializeERCContracts;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployAndInitializeERCContracts.tags = ["ERC721Drop", "ERC1155Base", "ERC20Drop"];


// await deploy("ERC1155Base", {
//   from: deployer,
//   // Contract constructor arguments
//   args: [
//     deployer,       // _defaultAdmin
//     "SoulCatGifts",   // _name
//     "🎁",          // _symbol
//     deployer,       // _royaltyRecipient
//     0              // _royaltyBps
//   ],
//   log: true,
//   autoMine: true,
// });


// // mint 5 Care, Respect, Responsibility and Knowledge to deployer
// const soulCatGiftsContract = await hre.ethers.getContract("ERC1155Base", deployer);
// const baseURI = "https://bafybeigffbj6neldyewn5vs445pk4qlav6m4rwevp5en22qrthkgumsa3e.ipfs.nftstorage.link/"
// const UINT256_MAX = 
// BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935");

// const mintTx = await soulCatGiftsContract.batchMintTo(
//   deployer, // to
//   [UINT256_MAX, UINT256_MAX, UINT256_MAX, UINT256_MAX], // tokenIds
//   [5, 5, 5, 5], // amounts
//   baseURI, // baseURI    
// )
