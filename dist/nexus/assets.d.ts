import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "nexus";
export declare const moduleAddress: HexString;
export declare const moduleName = "assets";
export declare const BASE_COIN_DECIMALS: U8;
export declare const BASE_COIN_NAME: U8[];
export declare const BASE_COIN_SYMBOL: U8[];
export declare const E_HAS_CAPABILITIES: U64;
export declare const E_NOT_ECONIA: U64;
export declare const E_NO_CAPABILITIES: U64;
export declare const QUOTE_COIN_DECIMALS: U8;
export declare const QUOTE_COIN_NAME: U8[];
export declare const QUOTE_COIN_SYMBOL: U8[];
export declare class APT {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static APTParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): APT;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class BC {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static BCParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BC;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class BG {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static BGParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BG;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class BTC {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static BTCParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): BTC;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class CoinCapabilities {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    burn_capability: Stdlib.Coin.BurnCapability;
    freeze_capability: Stdlib.Coin.FreezeCapability;
    mint_capability: Stdlib.Coin.MintCapability;
    constructor(proto: any, typeTag: TypeTag);
    static CoinCapabilitiesParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CoinCapabilities;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<CoinCapabilities>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<CoinCapabilities>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ETH {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static ETHParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ETH;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class QC {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static QCParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): QC;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class QG {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static QGParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): QG;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class SOL {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static SOLParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): SOL;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class SUI {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static SUIParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): SUI;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class USDC {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static USDCParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): USDC;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class USDT {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    constructor(proto: any, typeTag: TypeTag);
    static USDTParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): USDT;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function burn_(coins: Stdlib.Coin.Coin, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function init_all_coin_types_(account: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_init_all_coin_types(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function init_coin_type_(account: HexString, coin_name: U8[], coin_symbol: U8[], decimals: U8, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function init_coin_types_(account: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_init_coin_types(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function mint_(account: HexString, amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<Stdlib.Coin.Coin>;
export declare function buildPayload_mint(amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function mint_and_deposit_(account: HexString, amount: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function buildPayload_mint_and_deposit(amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get APT(): typeof APT;
    get BC(): typeof BC;
    get BG(): typeof BG;
    get BTC(): typeof BTC;
    get CoinCapabilities(): typeof CoinCapabilities;
    loadCoinCapabilities(owner: HexString, $p: TypeTag[], /* <CoinType> */ loadFull?: boolean, fillCache?: boolean): Promise<CoinCapabilities>;
    get ETH(): typeof ETH;
    get QC(): typeof QC;
    get QG(): typeof QG;
    get SOL(): typeof SOL;
    get SUI(): typeof SUI;
    get USDC(): typeof USDC;
    get USDT(): typeof USDT;
    payload_init_all_coin_types(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    init_all_coin_types(_account: AptosAccount, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_init_coin_types(isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    init_coin_types(_account: AptosAccount, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_mint(amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    mint(_account: AptosAccount, amount: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_mint_and_deposit(amount: U64, $p: TypeTag[], /* <CoinType>*/ isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    mint_and_deposit(_account: AptosAccount, amount: U64, $p: TypeTag[], /* <CoinType>*/ option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=assets.d.ts.map