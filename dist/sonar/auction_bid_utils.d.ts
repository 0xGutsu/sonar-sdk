import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Aptos_token from "../aptos_token";
import * as Stdlib from "../stdlib";
import * as Auction_listing_utils from "./auction_listing_utils";
export declare const packageName = "Sonar";
export declare const moduleAddress: HexString;
export declare const moduleName = "auction_bid_utils";
export declare const EBID_ID_EXISTS: U64;
export declare const EBID_NOT_EXIST: U64;
export declare const EBUY_FROM_EXPIRED_LISTING: U64;
export declare const EBUY_FROM_NOT_STARTED_LISTING: U64;
export declare const EBUY_NON_INSTANT_SALE_LISTING: U64;
export declare const ECANNOT_DRAW_FUND_BEFORE_EXPIRATION_TIME: U64;
export declare const ELISTING_EXPIRED: U64;
export declare const ELISTING_ID_NOT_MATCH: U64;
export declare const ELISTING_NOT_STARTED: U64;
export declare const ENO_SUFFICIENT_FUND: U64;
export declare const ETOKEN_AMOUNT_NOT_MATCH: U64;
export declare const ETOKEN_ID_NOT_MATCH: U64;
export declare class Bid {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    id: BidId;
    coin: Stdlib.Coin.Coin;
    offer_price: U64;
    expiration_sec: U64;
    config: Aptos_token.Property_map.PropertyMap;
    constructor(proto: any, typeTag: TypeTag);
    static BidParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Bid;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class BidEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    offer_price: U64;
    bid_id: BidId;
    expiration_sec: U64;
    constructor(proto: any, typeTag: TypeTag);
    static BidEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BidEvent;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class BidId {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bidder: HexString;
    listing_id: Stdlib.Guid.ID;
    constructor(proto: any, typeTag: TypeTag);
    static BidIdParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BidId;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class BidRecords {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    records: Stdlib.Table.Table;
    bid_event: Stdlib.Event.EventHandle;
    withdraw_bid_event: Stdlib.Event.EventHandle;
    order_executed_event: Stdlib.Event.EventHandle;
    increase_bid_event: Stdlib.Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static BidRecordsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BidRecords;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<BidRecords>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<BidRecords>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class IncreaseBidEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    new_price: U64;
    bid_id: BidId;
    constructor(proto: any, typeTag: TypeTag);
    static IncreaseBidEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): IncreaseBidEvent;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class OrderExecutedEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    buyer: HexString;
    lister_address: HexString;
    listing_creation_number: U64;
    executed_price: U64;
    market_place_address: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static OrderExecutedEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): OrderExecutedEvent;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class WithdrawBidEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    bid_id: BidId;
    constructor(proto: any, typeTag: TypeTag);
    static WithdrawBidEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): WithdrawBidEvent;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function assert_bid_parameters_(token_id: Aptos_token.Token.TokenId, offer_price: U64, token_amount: U64, entry: Auction_listing_utils.Listing, bid_time: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function bid_(bidder: HexString, token_id: Aptos_token.Token.TokenId, token_amount: U64, offer_price: U64, entry: Auction_listing_utils.Listing, expiration_sec: U64, keys: Stdlib.String.String[], values: U8[][], types: Stdlib.String.String[], $c: AptosDataCache, $p: TypeTag[]): Promise<BidId>;
export declare function buy_from_listing_with_fee_(buyer: HexString, entry: Auction_listing_utils.Listing, market_fund_address: HexString, fee_numerator: U64, fee_denominator: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buy_from_owner_with_fee_(buyer: HexString, lister_address: HexString, listing_creation_number: U64, market_fee_address: HexString, fee_numerator: U64, fee_denominator: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_buy_from_owner_with_fee(lister_address: HexString, listing_creation_number: U64, market_fee_address: HexString, fee_numerator: U64, fee_denominator: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function clear_bid_(bid: Bid, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Coin.Coin>;
export declare function create_bid_id_(bidder: HexString, listing_id: Stdlib.Guid.ID, $c: AptosDataCache): Promise<BidId>;
export declare function deduct_fee_(total_coin: Stdlib.Coin.Coin, fee_numerator: U64, fee_denominator: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Coin.Coin>;
export declare function emit_order_executed_event_(buyer: HexString, lister_address: HexString, listing_creation_number: U64, executed_price: U64, market_place_address: HexString, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function execute_listing_bid_(bid_id: BidId, entry: Auction_listing_utils.Listing, market_fund_address: HexString, fee_numerator: U64, fee_denominator: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function get_bid_id_address_(bid_id: BidId, $c: AptosDataCache): Promise<HexString>;
export declare function get_bid_id_listing_id_(bid_id: BidId, $c: AptosDataCache): Promise<Stdlib.Guid.ID>;
export declare function get_bid_info_(bid_id: BidId, $c: AptosDataCache, $p: TypeTag[]): Promise<[U64, U64]>;
export declare function increase_bid_(bidder: HexString, bid_id: BidId, price_delta: U64, entry: Auction_listing_utils.Listing, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function initialize_bid_records_(bidder: HexString, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function withdraw_coin_from_bid_(bidder: HexString, lister_addr: HexString, listing_creation_number: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_withdraw_coin_from_bid(lister_addr: HexString, listing_creation_number: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function withdraw_coin_from_bid_with_address_(bidder_address: HexString, lister_addr: HexString, listing_creation_number: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Bid(): typeof Bid;
    get BidEvent(): typeof BidEvent;
    get BidId(): typeof BidId;
    get BidRecords(): typeof BidRecords;
    loadBidRecords(owner: HexString, $p: TypeTag[], /* <CoinType> */ loadFull?: boolean, fillCache?: boolean): Promise<BidRecords>;
    get IncreaseBidEvent(): typeof IncreaseBidEvent;
    get OrderExecutedEvent(): typeof OrderExecutedEvent;
    get WithdrawBidEvent(): typeof WithdrawBidEvent;
    payload_buy_from_owner_with_fee(lister_address: HexString, listing_creation_number: U64, market_fee_address: HexString, fee_numerator: U64, fee_denominator: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    buy_from_owner_with_fee(_account: AptosAccount, lister_address: HexString, listing_creation_number: U64, market_fee_address: HexString, fee_numerator: U64, fee_denominator: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_withdraw_coin_from_bid(lister_addr: HexString, listing_creation_number: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    withdraw_coin_from_bid(_account: AptosAccount, lister_addr: HexString, listing_creation_number: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=auction_bid_utils.d.ts.map