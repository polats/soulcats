import { expect } from "chai";
import { ethers } from "hardhat";
import { DropERC721 } from "../typechain-types";
import { Address } from "hardhat-deploy/types";

describe("DropERC721", function () {
  // We define a fixture to reuse the same setup in every test.

  let dropERC721: DropERC721;
  let owner: Address;
  before(async () => {
    const [signer] = await ethers.getSigners();
    owner = signer.address;
    const contractFactory = await ethers.getContractFactory("DropERC721");
    dropERC721 = (await contractFactory.deploy()) as DropERC721;
    await dropERC721.deployed();
  });

  describe("Deployment", function () {
    it("Should have 0 supply on deploy", async function () {
      expect(await dropERC721.totalSupply()).to.equal(0);
    });

    it("Should be initializable with a name and symbol", async function () {
      console.log(owner);

      expect(await dropERC721.initialize(owner, "TestERC721", "TST", "", [owner], owner, owner, 0, 0, owner));
    });

    // it("Should allow setting a new message", async function () {
    //   const newGreeting = "Learn Scaffold-ETH 2! :)";

    //   await yourContract.setGreeting(newGreeting);
    //   expect(await yourContract.greeting()).to.equal(newGreeting);
    // });
  });
});
