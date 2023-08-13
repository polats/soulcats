const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Care: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultAdmin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_primarySaleRecipient",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newSoulCatAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "condition",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "resetEligibility",
                  type: "bool",
                },
              ],
              name: "ClaimConditionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "prevURI",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newURI",
                  type: "string",
                },
              ],
              name: "ContractURIUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "prevOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "PrimarySaleRecipientUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimer",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "startTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityClaimed",
                  type: "uint256",
                },
              ],
              name: "TokensClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "mintedTo",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityMinted",
                  type: "uint256",
                },
              ],
              name: "TokensMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burnFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "claim",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "claimCondition",
              outputs: [
                {
                  internalType: "uint256",
                  name: "startTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxClaimableSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "supplyClaimed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quantityLimitPerWallet",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "merkleRoot",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "pricePerToken",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
              ],
              name: "getSupplyClaimedByWallet",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mintTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              name: "multicall",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "results",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "primarySaleRecipient",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "_condition",
                  type: "tuple",
                },
                {
                  internalType: "bool",
                  name: "_resetClaimEligibility",
                  type: "bool",
                },
              ],
              name: "setClaimConditions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "setContractURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_saleRecipient",
                  type: "address",
                },
              ],
              name: "setPrimarySaleRecipient",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
              ],
              name: "verifyClaim",
              outputs: [
                {
                  internalType: "bool",
                  name: "isOverride",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Knowledge: {
          address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultAdmin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_primarySaleRecipient",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newSoulCatAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "condition",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "resetEligibility",
                  type: "bool",
                },
              ],
              name: "ClaimConditionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "prevURI",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newURI",
                  type: "string",
                },
              ],
              name: "ContractURIUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "prevOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "PrimarySaleRecipientUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimer",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "startTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityClaimed",
                  type: "uint256",
                },
              ],
              name: "TokensClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "mintedTo",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityMinted",
                  type: "uint256",
                },
              ],
              name: "TokensMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burnFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "claim",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "claimCondition",
              outputs: [
                {
                  internalType: "uint256",
                  name: "startTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxClaimableSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "supplyClaimed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quantityLimitPerWallet",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "merkleRoot",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "pricePerToken",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
              ],
              name: "getSupplyClaimedByWallet",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mintTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              name: "multicall",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "results",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "primarySaleRecipient",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "_condition",
                  type: "tuple",
                },
                {
                  internalType: "bool",
                  name: "_resetClaimEligibility",
                  type: "bool",
                },
              ],
              name: "setClaimConditions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "setContractURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_saleRecipient",
                  type: "address",
                },
              ],
              name: "setPrimarySaleRecipient",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
              ],
              name: "verifyClaim",
              outputs: [
                {
                  internalType: "bool",
                  name: "isOverride",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Love: {
          address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultAdmin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_primarySaleRecipient",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newCareAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newRespectAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newResponsibilityAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newKnowledgeAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency3",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency4",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  indexed: false,
                  internalType:
                    "struct ISoulCatsClaimCondition.SoulCatsClaimCondition",
                  name: "condition",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "resetEligibility",
                  type: "bool",
                },
              ],
              name: "ClaimConditionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "prevURI",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newURI",
                  type: "string",
                },
              ],
              name: "ContractURIUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "prevOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "PrimarySaleRecipientUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimer",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "startTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityClaimed",
                  type: "uint256",
                },
              ],
              name: "TokensClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "mintedTo",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityMinted",
                  type: "uint256",
                },
              ],
              name: "TokensMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burnFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_currency2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_currency3",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_currency4",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency3",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency4",
                      type: "address",
                    },
                  ],
                  internalType:
                    "struct ISoulCatsDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "claim",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "claimCondition",
              outputs: [
                {
                  internalType: "uint256",
                  name: "startTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxClaimableSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "supplyClaimed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quantityLimitPerWallet",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "merkleRoot",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "pricePerToken",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "currency1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "currency2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "currency3",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "currency4",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
              ],
              name: "getSupplyClaimedByWallet",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mintTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              name: "multicall",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "results",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "primarySaleRecipient",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency3",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "currency4",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  internalType:
                    "struct ISoulCatsClaimCondition.SoulCatsClaimCondition",
                  name: "_condition",
                  type: "tuple",
                },
                {
                  internalType: "bool",
                  name: "_resetClaimEligibility",
                  type: "bool",
                },
              ],
              name: "setClaimConditions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "setContractURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_saleRecipient",
                  type: "address",
                },
              ],
              name: "setPrimarySaleRecipient",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_currency2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_currency3",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_currency4",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
              ],
              name: "verifyClaim",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Respect: {
          address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultAdmin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_primarySaleRecipient",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newSoulCatAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "condition",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "resetEligibility",
                  type: "bool",
                },
              ],
              name: "ClaimConditionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "prevURI",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newURI",
                  type: "string",
                },
              ],
              name: "ContractURIUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "prevOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "PrimarySaleRecipientUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimer",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "startTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityClaimed",
                  type: "uint256",
                },
              ],
              name: "TokensClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "mintedTo",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityMinted",
                  type: "uint256",
                },
              ],
              name: "TokensMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burnFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "claim",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "claimCondition",
              outputs: [
                {
                  internalType: "uint256",
                  name: "startTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxClaimableSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "supplyClaimed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quantityLimitPerWallet",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "merkleRoot",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "pricePerToken",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
              ],
              name: "getSupplyClaimedByWallet",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mintTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              name: "multicall",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "results",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "primarySaleRecipient",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "_condition",
                  type: "tuple",
                },
                {
                  internalType: "bool",
                  name: "_resetClaimEligibility",
                  type: "bool",
                },
              ],
              name: "setClaimConditions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "setContractURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_saleRecipient",
                  type: "address",
                },
              ],
              name: "setPrimarySaleRecipient",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
              ],
              name: "verifyClaim",
              outputs: [
                {
                  internalType: "bool",
                  name: "isOverride",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Responsibility: {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultAdmin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_primarySaleRecipient",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newSoulCatAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "condition",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "resetEligibility",
                  type: "bool",
                },
              ],
              name: "ClaimConditionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "prevURI",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newURI",
                  type: "string",
                },
              ],
              name: "ContractURIUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "prevOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "PrimarySaleRecipientUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimer",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "startTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityClaimed",
                  type: "uint256",
                },
              ],
              name: "TokensClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "mintedTo",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityMinted",
                  type: "uint256",
                },
              ],
              name: "TokensMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burnFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "claim",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "claimCondition",
              outputs: [
                {
                  internalType: "uint256",
                  name: "startTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxClaimableSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "supplyClaimed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quantityLimitPerWallet",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "merkleRoot",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "pricePerToken",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
              ],
              name: "getSupplyClaimedByWallet",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mintTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              name: "multicall",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "results",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "primarySaleRecipient",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "_condition",
                  type: "tuple",
                },
                {
                  internalType: "bool",
                  name: "_resetClaimEligibility",
                  type: "bool",
                },
              ],
              name: "setClaimConditions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "setContractURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_saleRecipient",
                  type: "address",
                },
              ],
              name: "setPrimarySaleRecipient",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
              ],
              name: "verifyClaim",
              outputs: [
                {
                  internalType: "bool",
                  name: "isOverride",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        SoulCats: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultAdmin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_royaltyRecipient",
                  type: "address",
                },
                {
                  internalType: "uint128",
                  name: "_royaltyBps",
                  type: "uint128",
                },
                {
                  internalType: "address",
                  name: "_primarySaleRecipient",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ApprovalCallerNotOwnerNorApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "ApprovalQueryForNonexistentToken",
              type: "error",
            },
            {
              inputs: [],
              name: "ApprovalToCurrentOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "ApproveToCaller",
              type: "error",
            },
            {
              inputs: [],
              name: "BalanceQueryForZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "MintToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "MintZeroQuantity",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "OperatorNotAllowed",
              type: "error",
            },
            {
              inputs: [],
              name: "OwnerQueryForNonexistentToken",
              type: "error",
            },
            {
              inputs: [],
              name: "TransferCallerNotOwnerNorApproved",
              type: "error",
            },
            {
              inputs: [],
              name: "TransferFromIncorrectOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "TransferToNonERC721ReceiverImplementer",
              type: "error",
            },
            {
              inputs: [],
              name: "TransferToZeroAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "URIQueryForNonexistentToken",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  indexed: false,
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "condition",
                  type: "tuple",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "resetEligibility",
                  type: "bool",
                },
              ],
              name: "ClaimConditionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "prevURI",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newURI",
                  type: "string",
                },
              ],
              name: "ContractURIUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "newRoyaltyRecipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newRoyaltyBps",
                  type: "uint256",
                },
              ],
              name: "DefaultRoyalty",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "bool",
                  name: "restriction",
                  type: "bool",
                },
              ],
              name: "OperatorRestriction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "prevOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "PrimarySaleRecipientUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "royaltyRecipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "royaltyBps",
                  type: "uint256",
                },
              ],
              name: "RoyaltyForToken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "revealedURI",
                  type: "string",
                },
              ],
              name: "TokenURIRevealed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimer",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "startTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "quantityClaimed",
                  type: "uint256",
                },
              ],
              name: "TokensClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "startTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "endTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "baseURI",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "encryptedBaseURI",
                  type: "bytes",
                },
              ],
              name: "TokensLazyMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "OPERATOR_FILTER_REGISTRY",
              outputs: [
                {
                  internalType: "contract IOperatorFilterRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "claim",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "claimCondition",
              outputs: [
                {
                  internalType: "uint256",
                  name: "startTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxClaimableSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "supplyClaimed",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quantityLimitPerWallet",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "merkleRoot",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "pricePerToken",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes",
                  name: "key",
                  type: "bytes",
                },
              ],
              name: "encryptDecrypt",
              outputs: [
                {
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "encryptedData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getBaseURICount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getBatchIdAtIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDefaultRoyaltyInfo",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_batchId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "_key",
                  type: "bytes",
                },
              ],
              name: "getRevealURI",
              outputs: [
                {
                  internalType: "string",
                  name: "revealedURI",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "getRoyaltyInfoForToken",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
              ],
              name: "getSupplyClaimedByWallet",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_batchId",
                  type: "uint256",
                },
              ],
              name: "isEncryptedBatch",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_baseURIForTokens",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "lazyMint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "batchId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              name: "multicall",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "results",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nextTokenIdToClaim",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nextTokenIdToMint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "operatorRestriction",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "primarySaleRecipient",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "_key",
                  type: "bytes",
                },
              ],
              name: "reveal",
              outputs: [
                {
                  internalType: "string",
                  name: "revealedURI",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "salePrice",
                  type: "uint256",
                },
              ],
              name: "royaltyInfo",
              outputs: [
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "royaltyAmount",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "startTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxClaimableSupply",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyClaimed",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "merkleRoot",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                  ],
                  internalType: "struct IClaimCondition.ClaimCondition",
                  name: "_condition",
                  type: "tuple",
                },
                {
                  internalType: "bool",
                  name: "_resetClaimEligibility",
                  type: "bool",
                },
              ],
              name: "setClaimConditions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_uri",
                  type: "string",
                },
              ],
              name: "setContractURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_royaltyRecipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_royaltyBps",
                  type: "uint256",
                },
              ],
              name: "setDefaultRoyaltyInfo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bool",
                  name: "_restriction",
                  type: "bool",
                },
              ],
              name: "setOperatorRestriction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_saleRecipient",
                  type: "address",
                },
              ],
              name: "setPrimarySaleRecipient",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_bps",
                  type: "uint256",
                },
              ],
              name: "setRoyaltyInfoForToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_subscription",
                  type: "address",
                },
              ],
              name: "subscribeToRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_quantity",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_pricePerToken",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32[]",
                      name: "proof",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "quantityLimitPerWallet",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "pricePerToken",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "currency",
                      type: "address",
                    },
                  ],
                  internalType: "struct IDropSinglePhase.AllowlistProof",
                  name: "_allowlistProof",
                  type: "tuple",
                },
              ],
              name: "verifyClaim",
              outputs: [
                {
                  internalType: "bool",
                  name: "isOverride",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
