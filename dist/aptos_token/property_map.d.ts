import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "AptosToken";
export declare const moduleAddress: HexString;
export declare const moduleName = "property_map";
export declare const EKEY_AREADY_EXIST_IN_PROPERTY_MAP: U64;
export declare const EKEY_COUNT_NOT_MATCH_TYPE_COUNT: U64;
export declare const EKEY_COUNT_NOT_MATCH_VALUE_COUNT: U64;
export declare const EPROPERTY_MAP_NAME_TOO_LONG: U64;
export declare const EPROPERTY_NOT_EXIST: U64;
export declare const EPROPERTY_NUMBER_EXCEED_LIMIT: U64;
export declare const ETYPE_NOT_MATCH: U64;
export declare const MAX_PROPERTY_MAP_SIZE: U64;
export declare const MAX_PROPERTY_NAME_LENGTH: U64;
export declare class PropertyMap {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    map: Stdlib.Simple_map.SimpleMap;
    constructor(proto: any, typeTag: TypeTag);
    static PropertyMapParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PropertyMap;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class PropertyValue {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    value: U8[];
    type: Stdlib.String.String;
    constructor(proto: any, typeTag: TypeTag);
    static PropertyValueParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PropertyValue;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(map: PropertyMap, key: Stdlib.String.String, value: PropertyValue, $c: AptosDataCache): Promise<void>;
export declare function borrow_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<PropertyValue>;
export declare function borrow_type_(property: PropertyValue, $c: AptosDataCache): Promise<Stdlib.String.String>;
export declare function borrow_value_(property: PropertyValue, $c: AptosDataCache): Promise<U8[]>;
export declare function contains_key_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<boolean>;
export declare function create_property_value_(data: any, $c: AptosDataCache, $p: TypeTag[]): Promise<PropertyValue>;
export declare function create_property_value_raw_(value: U8[], type: Stdlib.String.String, $c: AptosDataCache): Promise<PropertyValue>;
export declare function empty_($c: AptosDataCache): Promise<PropertyMap>;
export declare function length_(map: PropertyMap, $c: AptosDataCache): Promise<U64>;
export declare function new___(keys: Stdlib.String.String[], values: U8[][], types: Stdlib.String.String[], $c: AptosDataCache): Promise<PropertyMap>;
export declare function read_address_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<HexString>;
export declare function read_bool_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<boolean>;
export declare function read_string_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<Stdlib.String.String>;
export declare function read_u128_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<U128>;
export declare function read_u64_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<U64>;
export declare function read_u8_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<U8>;
export declare function remove_(map: PropertyMap, key: Stdlib.String.String, $c: AptosDataCache): Promise<[Stdlib.String.String, PropertyValue]>;
export declare function update_property_map_(map: PropertyMap, keys: Stdlib.String.String[], values: U8[][], types: Stdlib.String.String[], $c: AptosDataCache): Promise<void>;
export declare function update_property_value_(map: PropertyMap, key: Stdlib.String.String, value: PropertyValue, $c: AptosDataCache): Promise<void>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get PropertyMap(): typeof PropertyMap;
    get PropertyValue(): typeof PropertyValue;
}
//# sourceMappingURL=property_map.d.ts.map