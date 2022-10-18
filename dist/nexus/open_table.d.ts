import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Stdlib from "../stdlib";
export declare const packageName = "nexus";
export declare const moduleAddress: HexString;
export declare const moduleName = "open_table";
export declare class OpenTable {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    base_table: Stdlib.Table.Table;
    keys: any[];
    constructor(proto: any, typeTag: TypeTag);
    static OpenTableParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): OpenTable;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_(open_table: OpenTable, key: any, value: any, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function borrow_(open_table: OpenTable, key: any, $c: AptosDataCache, $p: TypeTag[]): Promise<any>;
export declare function borrow_mut_(open_table: OpenTable, key: any, $c: AptosDataCache, $p: TypeTag[]): Promise<any>;
export declare function contains_(open_table: OpenTable, key: any, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function empty_($c: AptosDataCache, $p: TypeTag[]): Promise<OpenTable>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get OpenTable(): typeof OpenTable;
}
//# sourceMappingURL=open_table.d.ts.map