import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Stdlib from "../stdlib";
import * as Token from "./token";
export declare const packageName = "AptosToken";
export declare const moduleAddress: HexString;
export declare const moduleName = "token_coin_swap";
export declare const ENOT_ENOUGH_COIN: U64;
export declare const ETOKEN_ALREADY_LISTED: U64;
export declare const ETOKEN_AMOUNT_NOT_MATCH: U64;
export declare const ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME: U64;
export declare const ETOKEN_LISTING_NOT_EXIST: U64;
export declare const ETOKEN_MIN_PRICE_NOT_MATCH: U64;
export declare const ETOKEN_NOT_IN_ESCROW: U64;
export declare class TokenCoinSwap {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    token_amount: U64;
    min_price_per_token: U64;
    constructor(proto: any, typeTag: TypeTag);
    static TokenCoinSwapParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenCoinSwap;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenEscrow {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    token: Token.Token;
    locked_until_secs: U64;
    constructor(proto: any, typeTag: TypeTag);
    static TokenEscrowParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenEscrow;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenListingEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    token_id: Token.TokenId;
    amount: U64;
    min_price: U64;
    locked_until_secs: U64;
    coin_type_info: Stdlib.Type_info.TypeInfo;
    constructor(proto: any, typeTag: TypeTag);
    static TokenListingEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenListingEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenListings {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    listings: Stdlib.Table.Table;
    listing_events: Stdlib.Event.EventHandle;
    swap_events: Stdlib.Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static TokenListingsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenListings;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<TokenListings>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<TokenListings>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenStoreEscrow {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    token_escrows: Stdlib.Table.Table;
    constructor(proto: any, typeTag: TypeTag);
    static TokenStoreEscrowParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenStoreEscrow;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<TokenStoreEscrow>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<TokenStoreEscrow>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenSwapEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    token_id: Token.TokenId;
    token_buyer: HexString;
    token_amount: U64;
    coin_amount: U64;
    coin_type_info: Stdlib.Type_info.TypeInfo;
    constructor(proto: any, typeTag: TypeTag);
    static TokenSwapEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenSwapEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function cancel_token_listing_(token_owner: HexString, token_id: Token.TokenId, token_amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function deposit_token_to_escrow_(token_owner: HexString, token_id: Token.TokenId, tokens: Token.Token, locked_until_secs: U64, $c: AptosDataCache): Promise<void>;
export declare function does_listing_exist_(token_owner: HexString, token_id: Token.TokenId, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function exchange_coin_for_token_(coin_owner: HexString, coin_amount: U64, token_owner: HexString, creators_address: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, token_amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function initialize_token_listing_(token_owner: HexString, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function initialize_token_store_escrow_(token_owner: HexString, $c: AptosDataCache): Promise<void>;
export declare function list_token_for_swap_(token_owner: HexString, creators_address: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, token_amount: U64, min_coin_per_token: U64, locked_until_secs: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_list_token_for_swap(creators_address: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, token_amount: U64, min_coin_per_token: U64, locked_until_secs: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function withdraw_token_from_escrow_(token_owner: HexString, token_id: Token.TokenId, amount: U64, $c: AptosDataCache): Promise<Token.Token>;
export declare function withdraw_token_from_escrow_internal_(token_owner_addr: HexString, token_id: Token.TokenId, amount: U64, $c: AptosDataCache): Promise<Token.Token>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get TokenCoinSwap(): typeof TokenCoinSwap;
    get TokenEscrow(): typeof TokenEscrow;
    get TokenListingEvent(): typeof TokenListingEvent;
    get TokenListings(): typeof TokenListings;
    loadTokenListings(owner: HexString, $p: TypeTag[], /* <CoinType> */ loadFull?: boolean, fillCache?: boolean): Promise<TokenListings>;
    get TokenStoreEscrow(): typeof TokenStoreEscrow;
    loadTokenStoreEscrow(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<TokenStoreEscrow>;
    get TokenSwapEvent(): typeof TokenSwapEvent;
    payload_list_token_for_swap(creators_address: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, token_amount: U64, min_coin_per_token: U64, locked_until_secs: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    list_token_for_swap(_account: AptosAccount, creators_address: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, token_amount: U64, min_coin_per_token: U64, locked_until_secs: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=token_coin_swap.d.ts.map