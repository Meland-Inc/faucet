/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTFactory, NFTFactoryInterface } from "../NFTFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC721",
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "operationTime",
        type: "uint256",
      },
    ],
    name: "NFTSupportCreate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC721",
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "operationTime",
        type: "uint256",
      },
    ],
    name: "NFTSupportRemove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "GM_ROLE",
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
    inputs: [],
    name: "UPGRADER_ROLE",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    name: "supportNFTs",
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
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "nft",
        type: "address",
      },
    ],
    name: "newSupport",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "nft",
        type: "address",
      },
    ],
    name: "removeSupport",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506124f0806100206000396000f3fe6080604052600436106100e85760003560e01c80634f1ef2861161008a578063a217fddf11610059578063a217fddf146102cf578063d547741f146102fa578063dca2cec914610323578063f72c0d8b14610360576100e8565b80634f1ef2861461023657806353366cd6146102525780638129fc1c1461027b57806391d1485414610292576100e8565b806330c7be2c116100c657806330c7be2c146101905780633160d63b146101bb57806336568abe146101e45780633659cfe61461020d576100e8565b806301ffc9a7146100ed578063248a9ca31461012a5780632f2ff15d14610167575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f919061195e565b61038b565b60405161012191906119a6565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c91906119f7565b610405565b60405161015e9190611a33565b60405180910390f35b34801561017357600080fd5b5061018e60048036038101906101899190611aac565b610425565b005b34801561019c57600080fd5b506101a561044e565b6040516101b29190611a33565b60405180910390f35b3480156101c757600080fd5b506101e260048036038101906101dd9190611b2a565b610472565b005b3480156101f057600080fd5b5061020b60048036038101906102069190611aac565b610532565b005b34801561021957600080fd5b50610234600480360381019061022f9190611b57565b6105b5565b005b610250600480360381019061024b9190611cca565b6105dc565b005b34801561025e57600080fd5b5061027960048036038101906102749190611b2a565b6105f5565b005b34801561028757600080fd5b506102906106be565b005b34801561029e57600080fd5b506102b960048036038101906102b49190611aac565b610808565b6040516102c691906119a6565b60405180910390f35b3480156102db57600080fd5b506102e4610873565b6040516102f19190611a33565b60405180910390f35b34801561030657600080fd5b50610321600480360381019061031c9190611aac565b61087a565b005b34801561032f57600080fd5b5061034a60048036038101906103459190611b2a565b6108a3565b60405161035791906119a6565b60405180910390f35b34801561036c57600080fd5b506103756108c3565b6040516103829190611a33565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103fe57506103fd826108e7565b5b9050919050565b600060656000838152602001908152602001600020600101549050919050565b61042e82610405565b61043f8161043a610951565b610959565b61044983836109f6565b505050565b7ff5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f544981565b7ff5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f54496104a48161049f610951565b610959565b60fb60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690557f381ee98130a293c382d3877721784727e2c45da082bc73b8efe279df5e10b46d82334260405161052693929190611dad565b60405180910390a15050565b61053a610951565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e90611e67565b60405180910390fd5b6105b18282610ad7565b5050565b6105be81610bb9565b6105d981604051806020016040528060008152506000610bef565b50565b6105e582610bb9565b6105f182826001610bef565b5050565b7ff5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f544961062781610622610951565b610959565b600160fb60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f9fdcf8b1692f0a16e9281aafbc74bc889afdf88918e43a409b67b390987cff598233426040516106b293929190611dad565b60405180910390a15050565b600060019054906101000a900460ff16806106e4575060008054906101000a900460ff16155b610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071a90611ef9565b60405180910390fd5b60008060019054906101000a900460ff161590508015610773576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61077b610dc0565b610783610ea9565b6107906000801b33610f9a565b6107ba7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e333610f9a565b6107e47ff5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f544933610f9a565b80156108055760008060016101000a81548160ff0219169083151502179055505b50565b60006065600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b61088382610405565b6108948161088f610951565b610959565b61089e8383610ad7565b505050565b60fb6020528060005260406000206000915054906101000a900460ff1681565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e381565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b6109638282610808565b6109f2576109888173ffffffffffffffffffffffffffffffffffffffff166014610fa8565b6109968360001c6020610fa8565b6040516020016109a792919061202b565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e9919061209e565b60405180910390fd5b5050565b610a008282610808565b610ad35760016065600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610a78610951565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610ae18282610808565b15610bb55760006065600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b5a610951565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3610beb81610be6610951565b610959565b5050565b6000610bf96111e4565b9050610c048461123b565b600083511180610c115750815b15610c2257610c2084846112f4565b505b6000610c507f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b6113d8565b90508060000160009054906101000a900460ff16610db95760018160000160006101000a81548160ff021916908315150217905550610d1c8583604051602401610c9a91906120c0565b6040516020818303038152906040527f3659cfe6000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112f4565b5060008160000160006101000a81548160ff021916908315150217905550610d426111e4565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610daf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da69061214d565b60405180910390fd5b610db8856113e2565b5b5050505050565b600060019054906101000a900460ff1680610de6575060008054906101000a900460ff16155b610e25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1c90611ef9565b60405180910390fd5b60008060019054906101000a900460ff161590508015610e75576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610e7d611431565b610e8561150a565b8015610ea65760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680610ecf575060008054906101000a900460ff16155b610f0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0590611ef9565b60405180910390fd5b60008060019054906101000a900460ff161590508015610f5e576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610f666115e3565b610f6e6116bc565b610f76611795565b8015610f975760008060016101000a81548160ff0219169083151502179055505b50565b610fa482826109f6565b5050565b606060006002836002610fbb919061219c565b610fc591906121f6565b67ffffffffffffffff811115610fde57610fdd611b9f565b5b6040519080825280601f01601f1916602001820160405280156110105781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106110485761104761224c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106110ac576110ab61224c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026110ec919061219c565b6110f691906121f6565b90505b6001811115611196577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106111385761113761224c565b5b1a60f81b82828151811061114f5761114e61224c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061118f9061227b565b90506110f9565b50600084146111da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d1906122f1565b60405180910390fd5b8091505092915050565b60006112127f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61186e565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61124481611878565b611283576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127a90612383565b60405180910390fd5b806112b07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61186e565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606112ff83611878565b61133e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133590612415565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611366919061247c565b600060405180830381855af49150503d80600081146113a1576040519150601f19603f3d011682016040523d82523d6000602084013e6113a6565b606091505b50915091506113ce82826040518060600160405280602781526020016124946027913961188b565b9250505092915050565b6000819050919050565b6113eb8161123b565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600060019054906101000a900460ff1680611457575060008054906101000a900460ff16155b611496576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148d90611ef9565b60405180910390fd5b60008060019054906101000a900460ff1615905080156114e6576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156115075760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611530575060008054906101000a900460ff16155b61156f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156690611ef9565b60405180910390fd5b60008060019054906101000a900460ff1615905080156115bf576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156115e05760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611609575060008054906101000a900460ff16155b611648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163f90611ef9565b60405180910390fd5b60008060019054906101000a900460ff161590508015611698576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156116b95760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806116e2575060008054906101000a900460ff16155b611721576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171890611ef9565b60405180910390fd5b60008060019054906101000a900460ff161590508015611771576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156117925760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806117bb575060008054906101000a900460ff16155b6117fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f190611ef9565b60405180910390fd5b60008060019054906101000a900460ff16159050801561184a576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b801561186b5760008060016101000a81548160ff0219169083151502179055505b50565b6000819050919050565b600080823b905060008111915050919050565b6060831561189b578290506118eb565b6000835111156118ae5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e2919061209e565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61193b81611906565b811461194657600080fd5b50565b60008135905061195881611932565b92915050565b600060208284031215611974576119736118fc565b5b600061198284828501611949565b91505092915050565b60008115159050919050565b6119a08161198b565b82525050565b60006020820190506119bb6000830184611997565b92915050565b6000819050919050565b6119d4816119c1565b81146119df57600080fd5b50565b6000813590506119f1816119cb565b92915050565b600060208284031215611a0d57611a0c6118fc565b5b6000611a1b848285016119e2565b91505092915050565b611a2d816119c1565b82525050565b6000602082019050611a486000830184611a24565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a7982611a4e565b9050919050565b611a8981611a6e565b8114611a9457600080fd5b50565b600081359050611aa681611a80565b92915050565b60008060408385031215611ac357611ac26118fc565b5b6000611ad1858286016119e2565b9250506020611ae285828601611a97565b9150509250929050565b6000611af782611a6e565b9050919050565b611b0781611aec565b8114611b1257600080fd5b50565b600081359050611b2481611afe565b92915050565b600060208284031215611b4057611b3f6118fc565b5b6000611b4e84828501611b15565b91505092915050565b600060208284031215611b6d57611b6c6118fc565b5b6000611b7b84828501611a97565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bd782611b8e565b810181811067ffffffffffffffff82111715611bf657611bf5611b9f565b5b80604052505050565b6000611c096118f2565b9050611c158282611bce565b919050565b600067ffffffffffffffff821115611c3557611c34611b9f565b5b611c3e82611b8e565b9050602081019050919050565b82818337600083830152505050565b6000611c6d611c6884611c1a565b611bff565b905082815260208101848484011115611c8957611c88611b89565b5b611c94848285611c4b565b509392505050565b600082601f830112611cb157611cb0611b84565b5b8135611cc1848260208601611c5a565b91505092915050565b60008060408385031215611ce157611ce06118fc565b5b6000611cef85828601611a97565b925050602083013567ffffffffffffffff811115611d1057611d0f611901565b5b611d1c85828601611c9c565b9150509250929050565b6000819050919050565b6000611d4b611d46611d4184611a4e565b611d26565b611a4e565b9050919050565b6000611d5d82611d30565b9050919050565b6000611d6f82611d52565b9050919050565b611d7f81611d64565b82525050565b611d8e81611a6e565b82525050565b6000819050919050565b611da781611d94565b82525050565b6000606082019050611dc26000830186611d76565b611dcf6020830185611d85565b611ddc6040830184611d9e565b949350505050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611e51602f83611de4565b9150611e5c82611df5565b604082019050919050565b60006020820190508181036000830152611e8081611e44565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611ee3602e83611de4565b9150611eee82611e87565b604082019050919050565b60006020820190508181036000830152611f1281611ed6565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000611f5a601783611f19565b9150611f6582611f24565b601782019050919050565b600081519050919050565b60005b83811015611f99578082015181840152602081019050611f7e565b83811115611fa8576000848401525b50505050565b6000611fb982611f70565b611fc38185611f19565b9350611fd3818560208601611f7b565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000612015601183611f19565b915061202082611fdf565b601182019050919050565b600061203682611f4d565b91506120428285611fae565b915061204d82612008565b91506120598284611fae565b91508190509392505050565b600061207082611f70565b61207a8185611de4565b935061208a818560208601611f7b565b61209381611b8e565b840191505092915050565b600060208201905081810360008301526120b88184612065565b905092915050565b60006020820190506120d56000830184611d85565b92915050565b7f45524331393637557067726164653a207570677261646520627265616b73206660008201527f7572746865722075706772616465730000000000000000000000000000000000602082015250565b6000612137602f83611de4565b9150612142826120db565b604082019050919050565b600060208201905081810360008301526121668161212a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006121a782611d94565b91506121b283611d94565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156121eb576121ea61216d565b5b828202905092915050565b600061220182611d94565b915061220c83611d94565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122415761224061216d565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061228682611d94565b9150600082141561229a5761229961216d565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b60006122db602083611de4565b91506122e6826122a5565b602082019050919050565b6000602082019050818103600083015261230a816122ce565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b600061236d602d83611de4565b915061237882612311565b604082019050919050565b6000602082019050818103600083015261239c81612360565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b60006123ff602683611de4565b915061240a826123a3565b604082019050919050565b6000602082019050818103600083015261242e816123f2565b9050919050565b600081519050919050565b600081905092915050565b600061245682612435565b6124608185612440565b9350612470818560208601611f7b565b80840191505092915050565b6000612488828461244b565b91508190509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208e2204374665b69e4770daffb4d9295c98dd888a5218db5c23489ea109bfdf8764736f6c634300080a0033";

export class NFTFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTFactory> {
    return super.deploy(overrides || {}) as Promise<NFTFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTFactory {
    return super.attach(address) as NFTFactory;
  }
  connect(signer: Signer): NFTFactory__factory {
    return super.connect(signer) as NFTFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTFactoryInterface {
    return new utils.Interface(_abi) as NFTFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTFactory {
    return new Contract(address, _abi, signerOrProvider) as NFTFactory;
  }
}