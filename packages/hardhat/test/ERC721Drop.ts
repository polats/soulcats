import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC721Drop } from "../typechain-types";
import { Address } from "hardhat-deploy/types";
import { PromiseOrValue } from "../typechain-types/common";

import type {
  BigNumberish,
  BytesLike,
} from "ethers";

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

    it("Should allow admin to set a claim condition", async function () {

    const claimCondition = {
      startTimestamp: 0, // Example value
      maxClaimableSupply: 2, // Example value
      supplyClaimed: 0, // Example value
      quantityLimitPerWallet: 2, // Example value
      merkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000", // Example value
      pricePerToken: 0, // Example value
      currency: "0x0000000000000000000000000000000000000000", // Example value
      metadata: "" // Example value
    };
      expect(await 
        contract.setClaimConditions(claimCondition, false))
        .to.emit(contract, "ClaimConditionUpdated");

    });

    it("Should allow admin to mint a cat", async function () {

      expect(await
        contract.lazyMint(100, "", []))
        .to.emit(contract, "TokensLazyMinted");

    });

    it("should allow a user to claim a token", async function () {

      type AllowlistProofStruct = {
        proof: PromiseOrValue<BytesLike>[];
        quantityLimitPerWallet: PromiseOrValue<BigNumberish>;
        pricePerToken: PromiseOrValue<BigNumberish>;
        currency: PromiseOrValue<string>;
      };
      
      const [owner, addr1, addr2] = await ethers.getSigners();

    
      const allowListProof : AllowlistProofStruct =
      {
        proof: [],
        quantityLimitPerWallet: 1,
        pricePerToken: 0,
        currency: "0x0000000000000000000000000000000000000000"
      }

      expect(await
        contract.claim(
          owner.address, //receiver
          2, // quantity
          "0x0000000000000000000000000000000000000000", // currency
          0, // pricePerToken
          allowListProof, // allowlistProof,
          [] // data
        ))
        .to.emit(contract, "TokensClaimed");

    });

    

    // it("Should allow setting a new message", async function () {
    //   const newGreeting = "Learn Scaffold-ETH 2! :)";

    //   await yourContract.setGreeting(newGreeting);
    //   expect(await yourContract.greeting()).to.equal(newGreeting);
    // });
  });
});
