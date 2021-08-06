
import { ProtocolOptions } from "metaidjs";

export interface ConstructorOptionsTypes {
    baseUri?: string;
    oauthSettings: OauthSettingsTypes;
    onLoaded?: Function;
    onError?: Function;
}
export interface OauthSettingsTypes {
    clientId: string;
    redirectUri: string;
    clientSecret?: string;
    scope?: string;
    responseType?: string;
}
export interface ProtocolParamsTypes extends ProtocolOptions, BaseParamsType {
  accessToken: string;
  handlerId?: string;
}
export interface BaseParamsType {
    accessToken: string;
    callback?: Function;
    onCancel?: Function;
}

export interface appMetaIdJsParams {
    accessToken: string;
    data: any;
    onCancel?: Function;
}

export interface NftFunParams { 
    accessToken: string
}

export interface CreateMetaFileFunParams extends NftFunParams{
    data: {
        name: string,
        data: string,
        encrypt: string,
        data_type: string
    }
}
export interface MetaIdJsRes extends NftFunParams{
    code: number,
    data: any,
    status: string,
    handlerId: string
}
export interface SdkGenesisNFTRes extends MetaIdJsRes{
    data: {
        codehash: string
        genesisId: string
        genesisTxid: string
        sensibleId: string
    }
}

export interface SendMetaDataTxRes extends MetaIdJsRes{
    data: {
        txId: string
    }
}

export interface CreateNftFunParams extends NftFunParams{
    data: CreateNftParams
}

export enum SdkCallBackCodes {
    success = 200
}


export interface SdkCallBack {
    code: SdkCallBackCodes
    data: any,
    status: string
}

export interface IssueNFTResData extends MetaIdJsRes {
    data:{
      metaTdid: string
      nftId: string
      tokenId: string
      txId: string
      tokenIndex: string
    }
}

export interface NFTCancelResData extends MetaIdJsRes {
    data: {
        tx: any
        txHex: string
        txid: string
    }
}

export interface NftBuyResData extends MetaIdJsRes {
    data:{
        tx: any
        txHex: string
        txid: string
    }
}

export interface NftSellResData extends MetaIdJsRes {
    data:{
        sellTxHex: string
        sellTxId: string
        txHex: string
        txId: string
    }
}

export interface CreateNFTParams extends NftDataProtocolParams{
    nftTotal?: string
}

export interface NftDataProtocolParams {
    type: number,
    name: string, // nft名称
    intro: string, // nft描述
    cover: MetaFile, // nft封面 MetaFile协议地址
    originalFile?: MetaFile, // nft原文件 MetaFile协议地址
    txId?: string // 使用txId创建时的txId
}

export interface CreateNFTRes extends MetaIdJsRes {
    data: {
        // IssueNFTResData
        metaTdid: string
        nftId: string
        tokenId: string
        txId: string
        tokenIndex: string
        // SdkGenesisNFTRes
        codehash: string
        genesisId: string
        genesisTxid: string
        sensibleId: string
    }
}

export interface NftBuyParams {
    codehash: string
    genesis: string
    tokenIndex: string
    txId: string
    opreturnData: string
    genesisTxid: string
}


export interface CreateNftBuyProtocolParams {
    txId: string // nft bug txId
    txHex: string  // sell的utxo
    sellTxId: string // sell txId
    codehash: string // nft codehash
    genesis: string // nft genesis
    genesisTxid: string // nft genesisTxid
    tokenIndex: string // nft tokenIndex
    satoshisPrice: number // 出售的价格，单位聪
    opreturnData: string  // buy 备注信息
    createdAt: number // 创建时间
    buyerMetaId: string // 购买者metaId
}

export interface BuyNFTParams extends NftBuyParams{
    amount: number
}

export interface NftSellParams {
    codehash: string
    genesis: string
    tokenIndex: string,
    satoshisPrice: number,
    opreturnData: string
    genesisTxid: string
}

export interface SellNFTParams extends NftSellParams {
    
}

export interface CreateNftSellProtocolParams extends NftSellParams{
    txid: string // sell交易tx
    sellTxId: string // sellUtxoTxId
    sellTxHex: any  // sell的utxo
    createdAt: number // 创建时间
}

export interface NftCancelParams {
    codehash: string
    genesis: string
    tokenIndex: string
    txId: string
    opreturnData: string,
    genesisTxid: string,
    satoshis: number
}
export interface CancelSellNFTParams extends NftCancelParams {
    sellTxId: string
    satoshisPrice: number
}