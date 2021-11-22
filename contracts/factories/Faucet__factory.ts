/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Faucet, FaucetInterface } from "../Faucet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "limit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
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
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20MELD",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20MELD",
        name: "_token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052606460675534801561001557600080fd5b50610ffc806100256000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a4d66daf1161005b578063a4d66daf146100b4578063c4d66de8146100d2578063f2fde38b146100ee578063fc0c546a1461010a5761007d565b806335897cad14610082578063715018a61461008c5780638da5cb5b14610096575b600080fd5b61008a610128565b005b610094610386565b005b61009e61040e565b6040516100ab9190610a4f565b60405180910390f35b6100bc610438565b6040516100c99190610a83565b60405180910390f35b6100ec60048036038101906100e79190610ae1565b61043e565b005b61010860048036038101906101039190610b3a565b610561565b005b610112610659565b60405161011f9190610bc6565b60405180910390f35b606754606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016101869190610a4f565b602060405180830381865afa1580156101a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c79190610c0d565b11610207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fe90610c97565b60405180910390fd5b61021d620151804261067f90919063ffffffff16565b606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541061029d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029490610d03565b60405180910390fd5b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336067546040518363ffffffff1660e01b81526004016102fc929190610d23565b6020604051808303816000875af115801561031b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033f9190610d84565b5042606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b61038e610695565b73ffffffffffffffffffffffffffffffffffffffff166103ac61040e565b73ffffffffffffffffffffffffffffffffffffffff1614610402576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f990610dfd565b60405180910390fd5b61040c600061069d565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60655481565b600060019054906101000a900460ff1680610464575060008054906101000a900460ff16155b6104a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049a90610e8f565b60405180910390fd5b60008060019054906101000a900460ff1615905080156104f3576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6104fb610763565b81606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550801561055d5760008060016101000a81548160ff0219169083151502179055505b5050565b610569610695565b73ffffffffffffffffffffffffffffffffffffffff1661058761040e565b73ffffffffffffffffffffffffffffffffffffffff16146105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490610dfd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561064d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064490610f21565b60405180910390fd5b6106568161069d565b50565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000818361068d9190610f70565b905092915050565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff1680610789575060008054906101000a900460ff16155b6107c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bf90610e8f565b60405180910390fd5b60008060019054906101000a900460ff161590508015610818576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61082061084c565b610828610925565b80156108495760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680610872575060008054906101000a900460ff16155b6108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890610e8f565b60405180910390fd5b60008060019054906101000a900460ff161590508015610901576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156109225760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff168061094b575060008054906101000a900460ff16155b61098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190610e8f565b60405180910390fd5b60008060019054906101000a900460ff1615905080156109da576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6109ea6109e5610695565b61069d565b8015610a0b5760008060016101000a81548160ff0219169083151502179055505b50565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a3982610a0e565b9050919050565b610a4981610a2e565b82525050565b6000602082019050610a646000830184610a40565b92915050565b6000819050919050565b610a7d81610a6a565b82525050565b6000602082019050610a986000830184610a74565b92915050565b600080fd5b6000610aae82610a2e565b9050919050565b610abe81610aa3565b8114610ac957600080fd5b50565b600081359050610adb81610ab5565b92915050565b600060208284031215610af757610af6610a9e565b5b6000610b0584828501610acc565b91505092915050565b610b1781610a2e565b8114610b2257600080fd5b50565b600081359050610b3481610b0e565b92915050565b600060208284031215610b5057610b4f610a9e565b5b6000610b5e84828501610b25565b91505092915050565b6000819050919050565b6000610b8c610b87610b8284610a0e565b610b67565b610a0e565b9050919050565b6000610b9e82610b71565b9050919050565b6000610bb082610b93565b9050919050565b610bc081610ba5565b82525050565b6000602082019050610bdb6000830184610bb7565b92915050565b610bea81610a6a565b8114610bf557600080fd5b50565b600081519050610c0781610be1565b92915050565b600060208284031215610c2357610c22610a9e565b5b6000610c3184828501610bf8565b91505092915050565b600082825260208201905092915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000610c81601483610c3a565b9150610c8c82610c4b565b602082019050919050565b60006020820190508181036000830152610cb081610c74565b9050919050565b7f4f6e636520706572206163636f756e7420666f7220323420686f757273000000600082015250565b6000610ced601d83610c3a565b9150610cf882610cb7565b602082019050919050565b60006020820190508181036000830152610d1c81610ce0565b9050919050565b6000604082019050610d386000830185610a40565b610d456020830184610a74565b9392505050565b60008115159050919050565b610d6181610d4c565b8114610d6c57600080fd5b50565b600081519050610d7e81610d58565b92915050565b600060208284031215610d9a57610d99610a9e565b5b6000610da884828501610d6f565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610de7602083610c3a565b9150610df282610db1565b602082019050919050565b60006020820190508181036000830152610e1681610dda565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000610e79602e83610c3a565b9150610e8482610e1d565b604082019050919050565b60006020820190508181036000830152610ea881610e6c565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610f0b602683610c3a565b9150610f1682610eaf565b604082019050919050565b60006020820190508181036000830152610f3a81610efe565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f7b82610a6a565b9150610f8683610a6a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fbb57610fba610f41565b5b82820190509291505056fea264697066735822122013c1a796274d800e831f8ed964d8b96ec770b6c7abe8ededab6f68cdf81dcfdd64736f6c634300080a0033";

export class Faucet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Faucet> {
    return super.deploy(overrides || {}) as Promise<Faucet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Faucet {
    return super.attach(address) as Faucet;
  }
  connect(signer: Signer): Faucet__factory {
    return super.connect(signer) as Faucet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FaucetInterface {
    return new utils.Interface(_abi) as FaucetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Faucet {
    return new Contract(address, _abi, signerOrProvider) as Faucet;
  }
}
