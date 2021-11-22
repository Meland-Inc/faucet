/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NFTStoreStorageInterface extends ethers.utils.Interface {
  functions: {
    "GM_ROLE()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "UPGRADER_ROLE()": FunctionFragment;
    "acceptedToken()": FunctionFragment;
    "foundationWallet()": FunctionFragment;
    "itemByNFT(address)": FunctionFragment;
    "limitPool(address,address)": FunctionFragment;
    "officialWallet()": FunctionFragment;
    "ownerCutPerMillion()": FunctionFragment;
    "tokenIdsByNFT(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "GM_ROLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPGRADER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "foundationWallet",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "itemByNFT", values: [string]): string;
  encodeFunctionData(
    functionFragment: "limitPool",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "officialWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerCutPerMillion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenIdsByNFT",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "GM_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPGRADER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "foundationWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "itemByNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limitPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "officialWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerCutPerMillion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenIdsByNFT",
    data: BytesLike
  ): Result;

  events: {
    "ChangedOwnerCutPerMillion(uint256)": EventFragment;
    "NFTBuyed(uint256,address,address,uint256)": EventFragment;
    "NFTCreated(uint256,address,address,uint256)": EventFragment;
    "NFTDelete(uint256,address,address)": EventFragment;
    "NFTIdPoolUpdate(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedOwnerCutPerMillion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTBuyed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTDelete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTIdPoolUpdate"): EventFragment;
}

export class NFTStoreStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NFTStoreStorageInterface;

  functions: {
    GM_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    UPGRADER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    acceptedToken(overrides?: CallOverrides): Promise<[string]>;

    foundationWallet(overrides?: CallOverrides): Promise<[string]>;

    itemByNFT(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, boolean, BigNumber, BigNumber, number, string] & {
        id: BigNumber;
        seller: string;
        tokenIdPool: boolean;
        priceInWei: BigNumber;
        sellsCount: BigNumber;
        limit: number;
        description: string;
      }
    >;

    limitPool(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    officialWallet(overrides?: CallOverrides): Promise<[string]>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenIdsByNFT(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  GM_ROLE(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  UPGRADER_ROLE(overrides?: CallOverrides): Promise<string>;

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  foundationWallet(overrides?: CallOverrides): Promise<string>;

  itemByNFT(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, boolean, BigNumber, BigNumber, number, string] & {
      id: BigNumber;
      seller: string;
      tokenIdPool: boolean;
      priceInWei: BigNumber;
      sellsCount: BigNumber;
      limit: number;
      description: string;
    }
  >;

  limitPool(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  officialWallet(overrides?: CallOverrides): Promise<string>;

  ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

  tokenIdsByNFT(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    GM_ROLE(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    UPGRADER_ROLE(overrides?: CallOverrides): Promise<string>;

    acceptedToken(overrides?: CallOverrides): Promise<string>;

    foundationWallet(overrides?: CallOverrides): Promise<string>;

    itemByNFT(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, boolean, BigNumber, BigNumber, number, string] & {
        id: BigNumber;
        seller: string;
        tokenIdPool: boolean;
        priceInWei: BigNumber;
        sellsCount: BigNumber;
        limit: number;
        description: string;
      }
    >;

    limitPool(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    officialWallet(overrides?: CallOverrides): Promise<string>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    tokenIdsByNFT(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    ChangedOwnerCutPerMillion(
      ownerCutPerMillion?: null
    ): TypedEventFilter<[BigNumber], { ownerCutPerMillion: BigNumber }>;

    NFTBuyed(
      id?: BigNumberish | null,
      buyer?: string | null,
      nftAddress?: null,
      priceInWei?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber],
      {
        id: BigNumber;
        buyer: string;
        nftAddress: string;
        priceInWei: BigNumber;
      }
    >;

    NFTCreated(
      id?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null,
      priceInWei?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber],
      {
        id: BigNumber;
        seller: string;
        nftAddress: string;
        priceInWei: BigNumber;
      }
    >;

    NFTDelete(
      id?: BigNumberish | null,
      seller?: string | null,
      nftAddress?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { id: BigNumber; seller: string; nftAddress: string }
    >;

    NFTIdPoolUpdate(
      id?: BigNumberish | null,
      nft?: string | null,
      length?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { id: BigNumber; nft: string; length: BigNumber }
    >;
  };

  estimateGas: {
    GM_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    UPGRADER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;

    foundationWallet(overrides?: CallOverrides): Promise<BigNumber>;

    itemByNFT(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    limitPool(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    officialWallet(overrides?: CallOverrides): Promise<BigNumber>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

    tokenIdsByNFT(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GM_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPGRADER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    foundationWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    itemByNFT(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    limitPool(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    officialWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerCutPerMillion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenIdsByNFT(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
