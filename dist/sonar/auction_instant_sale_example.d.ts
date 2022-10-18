import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "Sonar";
export declare const moduleAddress: HexString;
export declare const moduleName = "auction_instant_sale_example";
export declare class Config {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    market_fee_numerator: U64;
    market_fee_denominator: U64;
    fee_address: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static ConfigParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Config;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Config>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Config>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Listings {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    all_active_Listings: Stdlib.Table.Table;
    constructor(proto: any, typeTag: TypeTag);
    static ListingsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Listings;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Listings>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Listings>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function buy_listing_(buyer: HexString, lister_address: HexString, listing_creation_number: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_buy_listing(lister_address: HexString, listing_creation_number: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function creat_listing_(owner: HexString, creator: HexString, collection_name: Stdlib.String.String, token_name: Stdlib.String.String, property_version: U64, amount: U64, min_price: U64, start_sec: U64, expiration_sec: U64, withdraw_expiration_sec: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_creat_listing(creator: HexString, collection_name: Stdlib.String.String, token_name: Stdlib.String.String, property_version: U64, amount: U64, min_price: U64, start_sec: U64, expiration_sec: U64, withdraw_expiration_sec: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function initialize_market_(account: HexString, market_fee_numerator: U64, market_fee_denominator: U64, fee_address: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_initialize_market(market_fee_numerator: U64, market_fee_denominator: U64, fee_address: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Config(): typeof Config;
    loadConfig(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Config>;
    get Listings(): typeof Listings;
    loadListings(owner: HexString, $p: TypeTag[], /* <CoinType> */ loadFull?: boolean, fillCache?: boolean): Promise<Listings>;
    payload_buy_listing(lister_address: HexString, listing_creation_number: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    buy_listing(_account: AptosAccount, lister_address: HexString, listing_creation_number: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_creat_listing(creator: HexString, collection_name: Stdlib.String.String, token_name: Stdlib.String.String, property_version: U64, amount: U64, min_price: U64, start_sec: U64, expiration_sec: U64, withdraw_expiration_sec: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    creat_listing(_account: AptosAccount, creator: HexString, collection_name: Stdlib.String.String, token_name: Stdlib.String.String, property_version: U64, amount: U64, min_price: U64, start_sec: U64, expiration_sec: U64, withdraw_expiration_sec: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_initialize_market(market_fee_numerator: U64, market_fee_denominator: U64, fee_address: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    initialize_market(_account: AptosAccount, market_fee_numerator: U64, market_fee_denominator: U64, fee_address: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=auction_instant_sale_example.d.ts.map