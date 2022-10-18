import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "nexus";
export declare const moduleAddress: HexString;
export declare const moduleName = "registry";
export declare const E_INVALID_BASE_ASSET: U64;
export declare const E_INVALID_CUSTODIAN: U64;
export declare const E_INVALID_MARKET_ID: U64;
export declare const E_INVALID_QUOTE_ASSET: U64;
export declare const E_LOT_SIZE_0: U64;
export declare const E_MARKET_EXISTS: U64;
export declare const E_NOT_IN_MARKET_PAIR: U64;
export declare const E_NOT_nexus: U64;
export declare const E_NO_REGISTRY: U64;
export declare const E_REGISTRY_EXISTS: U64;
export declare const E_SAME_COIN: U64;
export declare const E_TICK_SIZE_0: U64;
export declare const NO_CUSTODIAN: U64;
export declare const PURE_COIN_PAIR: U64;
export declare class CustodianCapability {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    custodian_id: U64;
    constructor(proto: any, typeTag: TypeTag);
    static CustodianCapabilityParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CustodianCapability;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class GenericAsset {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static GenericAssetParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): GenericAsset;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class MarketInfo {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    host: HexString;
    trading_pair_info: TradingPairInfo;
    constructor(proto: any, typeTag: TypeTag);
    static MarketInfoParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): MarketInfo;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Registry {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    hosts: Stdlib.Table.Table;
    markets: MarketInfo[];
    n_custodians: U64;
    constructor(proto: any, typeTag: TypeTag);
    static RegistryParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Registry;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Registry>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Registry>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TradingPairInfo {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    base_type_info: Stdlib.Type_info.TypeInfo;
    quote_type_info: Stdlib.Type_info.TypeInfo;
    lot_size: U64;
    tick_size: U64;
    generic_asset_transfer_custodian_id: U64;
    agnostic_disambiguator: U64;
    constructor(proto: any, typeTag: TypeTag);
    static TradingPairInfoParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TradingPairInfo;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function custodian_id_(custodian_capability_ref: CustodianCapability, $c: AptosDataCache): Promise<U64>;
export declare function get_verified_market_custodian_id_(market_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<U64>;
export declare function init_registry_(account: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_init_registry(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function is_base_asset_(market_info: MarketInfo, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function is_base_or_quote_(market_info: MarketInfo, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function is_registered_custodian_id_(custodian_id: U64, $c: AptosDataCache): Promise<boolean>;
export declare function is_registered_trading_pair_(trading_pair_info: TradingPairInfo, $c: AptosDataCache): Promise<boolean>;
export declare function n_custodians_($c: AptosDataCache): Promise<U64>;
export declare function n_markets_($c: AptosDataCache): Promise<U64>;
export declare function register_custodian_capability_($c: AptosDataCache): Promise<CustodianCapability>;
export declare function register_market_internal_(host: HexString, lot_size: U64, tick_size: U64, generic_asset_transfer_custodian_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<U64>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get CustodianCapability(): typeof CustodianCapability;
    get GenericAsset(): typeof GenericAsset;
    get MarketInfo(): typeof MarketInfo;
    get Registry(): typeof Registry;
    loadRegistry(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Registry>;
    get TradingPairInfo(): typeof TradingPairInfo;
    payload_init_registry(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    init_registry(_account: AptosAccount, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=registry.d.ts.map