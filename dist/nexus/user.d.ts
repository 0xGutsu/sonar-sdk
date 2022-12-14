import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Stdlib from "../stdlib";
import * as Critbit from "./critbit";
import * as Open_table from "./open_table";
import * as Registry from "./registry";
export declare const packageName = "nexus";
export declare const moduleAddress: HexString;
export declare const moduleName = "user";
export declare const ASK: boolean;
export declare const BID: boolean;
export declare const COIN_ASSET_TRANSFER: U64;
export declare const E_DEPOSIT_OVERFLOW_ASSET_CEILING: U64;
export declare const E_EXISTS_MARKET_ACCOUNT: U64;
export declare const E_NOT_COIN_ASSET: U64;
export declare const E_NOT_ENOUGH_ASSET_AVAILABLE: U64;
export declare const E_NOT_GENERIC_ASSET: U64;
export declare const E_NOT_IN_MARKET_PAIR: U64;
export declare const E_NO_MARKET_ACCOUNT: U64;
export declare const E_NO_MARKET_ACCOUNTS: U64;
export declare const E_NO_ORDERS: U64;
export declare const E_OVERFLOW_ASSET_IN: U64;
export declare const E_OVERFLOW_ASSET_OUT: U64;
export declare const E_PRICE_0: U64;
export declare const E_SIZE_0: U64;
export declare const E_TICKS_OVERFLOW: U64;
export declare const E_UNAUTHORIZED_CUSTODIAN: U64;
export declare const E_UNREGISTERED_CUSTODIAN_ID: U64;
export declare const FIRST_64: U8;
export declare const HI_64: U64;
export declare const IN: boolean;
export declare const NO_CUSTODIAN: U64;
export declare const OUT: boolean;
export declare const PURE_COIN_PAIR: U64;
export declare class Collateral {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    map: Open_table.OpenTable;
    constructor(proto: any, typeTag: TypeTag);
    static CollateralParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Collateral;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Collateral>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Collateral>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class MarketAccount {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    base_type_info: Stdlib.Type_info.TypeInfo;
    quote_type_info: Stdlib.Type_info.TypeInfo;
    generic_asset_transfer_custodian_id: U64;
    asks: Critbit.CritBitTree;
    bids: Critbit.CritBitTree;
    base_total: U64;
    base_available: U64;
    base_ceiling: U64;
    quote_total: U64;
    quote_available: U64;
    quote_ceiling: U64;
    constructor(proto: any, typeTag: TypeTag);
    static MarketAccountParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): MarketAccount;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class MarketAccounts {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    map: Open_table.OpenTable;
    constructor(proto: any, typeTag: TypeTag);
    static MarketAccountsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): MarketAccounts;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<MarketAccounts>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<MarketAccounts>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function borrow_transfer_fields_mixed_(market_accounts_map_ref_mut: Open_table.OpenTable, market_account_id: U128, $c: AptosDataCache, $p: TypeTag[]): Promise<[U64, U64, U64, U64]>;
export declare function deposit_asset_(user: HexString, market_account_id: U128, amount: U64, optional_coins: Stdlib.Option.Option, generic_asset_transfer_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function deposit_asset_as_option_internal_(user: HexString, market_account_id: U128, amount: U64, optional_coins: Stdlib.Option.Option, generic_asset_transfer_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function deposit_assets_as_option_internal_(user: HexString, market_account_id: U128, base_amount: U64, quote_amount: U64, optional_base_coins: Stdlib.Option.Option, optional_quote_coins: Stdlib.Option.Option, generic_asset_transfer_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function deposit_coins_(user: HexString, market_id: U64, general_custodian_id: U64, coins: Stdlib.Coin.Coin, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function deposit_from_coinstore_(user: HexString, market_id: U64, general_custodian_id: U64, amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_deposit_from_coinstore(market_id: U64, general_custodian_id: U64, amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function deposit_generic_asset_(user: HexString, market_id: U64, general_custodian_id: U64, amount: U64, generic_asset_transfer_custodian_capability_ref: Registry.CustodianCapability, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function fill_order_internal_(user: HexString, market_account_id: U128, side: boolean, order_id: U128, complete_fill: boolean, fill_size: U64, optional_base_coins_ref_mut: Stdlib.Option.Option, optional_quote_coins_ref_mut: Stdlib.Option.Option, base_to_route: U64, quote_to_route: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function fill_order_route_collateral_(user: HexString, market_account_id: U128, side: boolean, optional_base_coins_ref_mut: Stdlib.Option.Option, optional_quote_coins_ref_mut: Stdlib.Option.Option, base_to_route: U64, quote_to_route: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function fill_order_route_collateral_single_(user: HexString, market_account_id: U128, external_coins_ref_mut: Stdlib.Coin.Coin, amount: U64, direction: boolean, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function fill_order_update_market_account_(user: HexString, market_account_id: U128, side: boolean, order_id: U128, complete_fill: boolean, fill_size: U64, base_to_route: U64, quote_to_route: U64, $c: AptosDataCache): Promise<void>;
export declare function get_asset_counts_(user: HexString, market_account_id: U128, $c: AptosDataCache): Promise<[U64, U64, U64, U64, U64, U64]>;
export declare function get_asset_counts_custodian_(user: HexString, market_id: U64, general_custodian_capability_ref: Registry.CustodianCapability, $c: AptosDataCache): Promise<[U64, U64, U64, U64, U64, U64]>;
export declare function get_asset_counts_internal_(user: HexString, market_account_id: U128, $c: AptosDataCache): Promise<[U64, U64, U64, U64, U64, U64]>;
export declare function get_asset_counts_user_(user: HexString, market_id: U64, $c: AptosDataCache): Promise<[U64, U64, U64, U64, U64, U64]>;
export declare function get_general_custodian_id_(market_account_id: U128, $c: AptosDataCache): Promise<U64>;
export declare function get_market_account_id_(market_id: U64, general_custodian_id: U64, $c: AptosDataCache): Promise<U128>;
export declare function get_market_id_(market_account_id: U128, $c: AptosDataCache): Promise<U64>;
export declare function get_n_orders_internal_(user: HexString, market_account_id: U128, side: boolean, $c: AptosDataCache): Promise<U64>;
export declare function get_order_id_nearest_spread_internal_(user: HexString, market_account_id: U128, side: boolean, $c: AptosDataCache): Promise<U128>;
export declare function range_check_new_order_(side: boolean, size: U64, price: U64, lot_size: U64, tick_size: U64, in_asset_ceiling: U64, out_asset_available: U64, $c: AptosDataCache): Promise<[U64, U64]>;
export declare function register_collateral_entry_(user: HexString, market_account_id: U128, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function register_market_account_(user: HexString, market_id: U64, general_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_register_market_account(market_id: U64, general_custodian_id: U64, $p: TypeTag[], /* <BaseType, QuoteType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function register_market_accounts_entry_(user: HexString, market_account_id: U128, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function register_order_internal_(user: HexString, market_account_id: U128, side: boolean, order_id: U128, size: U64, price: U64, lot_size: U64, tick_size: U64, $c: AptosDataCache): Promise<void>;
export declare function remove_order_internal_(user: HexString, market_account_id: U128, lot_size: U64, tick_size: U64, side: boolean, order_id: U128, $c: AptosDataCache): Promise<void>;
export declare function verify_market_account_exists_(user: HexString, market_account_id: U128, $c: AptosDataCache): Promise<void>;
export declare function withdraw_asset_(user: HexString, market_account_id: U128, amount: U64, asset_is_coin: boolean, generic_asset_transfer_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Option.Option>;
export declare function withdraw_asset_as_option_internal_(user: HexString, market_account_id: U128, amount: U64, generic_asset_transfer_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Option.Option>;
export declare function withdraw_assets_as_option_internal_(user: HexString, market_account_id: U128, base_amount: U64, quote_amount: U64, generic_asset_transfer_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<[Stdlib.Option.Option, Stdlib.Option.Option]>;
export declare function withdraw_coins_(user: HexString, market_id: U64, general_custodian_id: U64, amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Coin.Coin>;
export declare function withdraw_coins_as_option_internal_(user: HexString, market_account_id: U128, amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Option.Option>;
export declare function withdraw_coins_custodian_(user: HexString, market_id: U64, amount: U64, general_custodian_capability_ref: Registry.CustodianCapability, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Coin.Coin>;
export declare function withdraw_coins_user_(user: HexString, market_id: U64, amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Coin.Coin>;
export declare function withdraw_generic_asset_(user: HexString, market_id: U64, general_custodian_id: U64, amount: U64, generic_asset_transfer_custodian_capability_ref: Registry.CustodianCapability, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function withdraw_to_coinstore_(user: HexString, market_id: U64, amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_withdraw_to_coinstore(market_id: U64, amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get Collateral(): typeof Collateral;
    loadCollateral(owner: HexString, $p: TypeTag[], /* <CoinType> */ loadFull?: boolean, fillCache?: boolean): Promise<Collateral>;
    get MarketAccount(): typeof MarketAccount;
    get MarketAccounts(): typeof MarketAccounts;
    loadMarketAccounts(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<MarketAccounts>;
    payload_deposit_from_coinstore(market_id: U64, general_custodian_id: U64, amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    deposit_from_coinstore(_account: AptosAccount, market_id: U64, general_custodian_id: U64, amount: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_register_market_account(market_id: U64, general_custodian_id: U64, $p: TypeTag[], /* <BaseType, QuoteType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    register_market_account(_account: AptosAccount, market_id: U64, general_custodian_id: U64, $p: TypeTag[], /* <BaseType, QuoteType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_withdraw_to_coinstore(market_id: U64, amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    withdraw_to_coinstore(_account: AptosAccount, market_id: U64, amount: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=user.d.ts.map