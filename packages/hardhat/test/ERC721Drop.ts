import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC721Drop } from "../typechain-types";
import { Address } from "hardhat-deploy/types";

describe("DropERC721", function () {
  // We define a fixture to reuse the same setup in every test.

  let contract: ERC721Drop;
  let owner: Address;
  before(async () => {
    const [signer] = await ethers.getSigners();
    owner = signer.address;
    const contractFactory = await ethers.getContractFactory("ERC721Drop");
    contract = (await contractFactory.deploy(
      owner,          // _defaultAdmin
      "TestERC721",   // _name
      "TST",          // _symbol
      owner,          // _royaltyRecipient
      0,              // _royaltyBps
      owner           // _primarySaleRecipient
    )) as ERC721Drop;
    await contract.deployed();
  });

  describe("Deployment", function () {
    it("Should have 0 supply on deploy", async function () {
      expect(await contract.totalSupply()).to.equal(0);
    });

    it("Should have test name and symbol", async function () {
      expect(await contract.name()).to.equal("TestERC721");
      expect(await contract.symbol()).to.equal("TST");
    });

    // it("Should allow setting a new message", async function () {
    //   const newGreeting = "Learn Scaffold-ETH 2! :)";

    //   await yourContract.setGreeting(newGreeting);
    //   expect(await yourContract.greeting()).to.equal(newGreeting);
    // });
  });
});
