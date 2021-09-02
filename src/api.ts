import HttpRequest from '@/utils/request'
// @ts-ignore
import qs from 'qs'

const env = import.meta.env

export enum NftApiCode {
  success = 0,
}
const apiHttp = new HttpRequest(env.VITE_WalletApi).request
const nftHttp = new HttpRequest(env.VITE_NftApi).request
export const GetToken = (params: object) => {
  return apiHttp.post('/showmoney/oauth2/oauth/token', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    transformRequest: [
      function (data: object) {
        return qs.stringify(data)
      },
    ],
  })
}

export const QueryFindMetaData = (params: string) => {
  return apiHttp.get(`/showMANDB/api/v1/query/queryFindMetaData/${params}`)
}

export const QueryFindMetaDataForPost = (params: any) => {
  return apiHttp.post(`/showMANDB/api/v1/query/queryFindMetaDataForPost`, {
    data: {
      query: btoa(JSON.stringify(params)),
    },
  })
}

export const GetTxData = (txId: string) => {
  return QueryFindMetaDataForPost({
    find: {
      txId,
    },
    skip: 0,
  })
}

export const GetProductList = (params: {
  pageSize: number
  page: number
  classifyName?: string
}): Promise<GetProductListResponstData> => {
  return nftHttp.post(`/api/v2/product/productList`, params)
}

export const GetProductClassifyList = (params: {
  pageSize: number
  page: number
  classifyName?: string
}): Promise<GetProductListResponstData> => {
  return nftHttp.post(`/api/v2/product/classify`, params)
}

export const GetNftDetail = (params: {
  tokenId: string
}): Promise<GetProductDetailResponstData> => {
  return nftHttp.post(`/api/v2/product/productDetails`, params)
}

export const TransactionRecord = (params: {
  tokenId: string
}): Promise<TransactionRecordResponstData> => {
  return nftHttp.post(`/api/v2/productTransaction/transactionRecord`, params)
}

export const CreateNft = (params: CreateNftParams): Promise<CreateNftResponstData> => {
  return nftHttp.post(`/api/v2/found/foundNft`, params)
}

export const MyNfts = (params: Pagination): Promise<MyNftsResponstData> => {
  return nftHttp.post(`/api/v2/product/myProduct`, params)
}

export const SaleNft = (params: {
  sellValidTime: number
  amount: number | string
  tokenId: string
  sellTxId: string
}): Promise<SaleNftResponstData> => {
  return nftHttp.post(`/api/v2/productTransaction/sell`, params)
}

export const Upload = (params: FormData): Promise<string> => {
  return nftHttp.post(`/api/v2/oss/upload`, params)
}

export const GetSeries = (params: { pageSize: number; page: number }): Promise<GetSeriestData> => {
  return nftHttp.post(`/api/v2/series/getSeries`, params)
}

export const Search = (params: { likeName: string }): Promise<GetProductListResponstData> => {
  return nftHttp.post(`/api/v2/product/productLike`, params)
}

export const GetClassies = (): Promise<GetClassiesData> => {
  return nftHttp.post(`/api/v2/classify/classifyList`)
}

export const OffSale = (params: { tokenId: string }): Promise<apiResponse> => {
  return nftHttp.post(`/api/v2/productTransaction/unshelve`, params)
}

export const BuyNft = (params: {
  tokenId: string
  payMentAddress: string
  collectionAddress: string
  payTxId: string
  amount: number
}): Promise<apiResponse> => {
  return nftHttp.post(`/api/v2/productTransaction/transactionProduct`, params)
}

export const GetTxStatus = (params: { txId: string }): Promise<GetTxStatusData> => {
  return nftHttp.post(`/api/v2/found/getNftStatus`, params)
}

export const CreateSerice = (params: {
  name: string
  count: number
  codeHash: string
  genesis: string
  genesisTxId: string
  sensibleId: string
}): Promise<GetTxStatusData> => {
  return nftHttp.post(`/api/v2/series/foundSeries`, params)
}

export const GetNFTOwnerAddress = (params: { tokenId: string }): Promise<apiResponse> => {
  return nftHttp.post(`/api/v2/productTransaction/ownerAddress`, params)
}

export const GetDeadlineTime = (params: { genesis: string, codeHash: string, tokenIndex: string}): Promise<apiResponse> => {
  return nftHttp.post(`/api/v2/productTransaction/getShelvesTime`, params)
}

export const SetDeadlineTime = (params: { genesis: string, codeHash: string, tokenIndex: string, deadlineTime: number }): Promise<apiResponse> => {
  return nftHttp.post(`/api/v2/productTransaction/setShelvesTime`, params)
}

export const RemoveDeadlineTime = (params: { genesis: string, codeHash: string, tokenIndex: string, deadlineTime: number }): Promise<apiResponse> => {
  return nftHttp.post(`/api/v2/productTransaction/removeShelvesTime`, params)
}


export const GetNftIssue = (params: {
  genesisId: string
  tokenId: string
}): Promise<GetNftIssueRes> => {
  return apiHttp.post(`/aggregation/v2/app/sensible/getNftIssue`, params)
}
export const GetNftIssueyTxId = (params: { txId: string }): Promise<GetNftIssueyTxIdRes> => {
  return apiHttp.post(`/aggregation/v2/app/sensible/getNftIssueByTxId`, params)
}

export const GetMySelledNfts = (params: Pagination): Promise<MyNftsResponstData> => {
  return nftHttp.post(`/api/v2/product/myShelvesProduct`, params)
}

export const GetMyNftSummaryList = (params: GetMyNftSummaryListParams): Promise<GetMyNftSummaryListRes> => {
  return apiHttp.post(`/aggregation/v2/app/sensible/getMyNftSummaryListV2`, params)
}



export const GetMyOnSellNftList = (params: GetMyOnSellNftListParams): Promise<GetMyOnSellNftListRes> => {
  return apiHttp.post(`/aggregation/v2/app/nftOnShow/getMyNftOnShowList`, params)
}



export const GetAllOnSellNftList = (params: {
  PageSize: string,
  Page: string
}): Promise<GetMyOnSellNftListRes> => {
  return apiHttp.post(`/aggregation/v2/app/nftOnShow/getAllNftOnShowList`, params)
}

export const GetNftOnShowListByClassify = (params: {
  PageSize: string,
  Page: string,
  classify: string
}): Promise<GetMyOnSellNftListRes> => {
  return apiHttp.post(`/aggregation/v2/app/nftOnShow/getNftOnShowListByClassify`, params)
}



export const GetNftOnShowListBySearch = (params: {
  PageSize: string,
  Page: string,
  SearchWord: string
}): Promise<GetMyOnSellNftListRes> => {
  return apiHttp.post(`/aggregation/v2/app/nftOnShow/getNftOnShowListBySearch`, params)
}


export const GetSeriesNftList = (params: {
  Page: string,
  PageSize: string,
  Address: string,
  codehash: string
  genesis: string
}): Promise<GetSeriesNftListRes> => {
  return apiHttp.post(`/aggregation/v2/app/sensible/getMyNftSummaryDetailList`, params)
}


export const NFTApiGetNFTDetail = (params: {
  tokenIndex: string,
  codehash: string
  genesis: string
}): Promise<NFTApiGetNFTDetailRes> => {
  return apiHttp.post(`/aggregation/v2/app/sensible/getOneNftSummaryDetail`, params)
}


export const GetRecommendOnSellNftList = (params: {
  PageSize: string,
  Page: string
}): Promise<GetMyOnSellNftListRes> => {
  return apiHttp.post(`/aggregation/v2/app/nftOnShow/getRecommendNftOnShowList`, params)
}

export enum Langs  {
  CN = 'cn',
  EN = 'en'
}
export const GetMyNftEligibility = (params: {
  MetaId: string
  IssueMetaId: string
  lang: Langs
}): Promise<apiResponse> => {
  return apiHttp.get(`/aggregation/v2/app/nftOnShow/getMyNftEligibility/${params.MetaId}//${params.IssueMetaId}/${params.lang}`)
}