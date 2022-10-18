import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "MoveStdlib";
export declare const moduleAddress: HexString;
export declare const moduleName = "error";
export declare const ABORTED: U64;
export declare const ALREADY_EXISTS: U64;
export declare const CANCELLED: U64;
export declare const INTERNAL: U64;
export declare const INVALID_ARGUMENT: U64;
export declare const INVALID_STATE: U64;
export declare const NOT_FOUND: U64;
export declare const NOT_IMPLEMENTED: U64;
export declare const OUT_OF_RANGE: U64;
export declare const PERMISSION_DENIED: U64;
export declare const RESOURCE_EXHAUSTED: U64;
export declare const UNAUTHENTICATED: U64;
export declare const UNAVAILABLE: U64;
export declare function aborted_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function already_exists_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function canonical_(category: U64, reason: U64, $c: AptosDataCache): Promise<U64>;
export declare function internal_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function invalid_argument_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function invalid_state_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function not_found_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function not_implemented_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function out_of_range_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function permission_denied_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function resource_exhausted_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function unauthenticated_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function unavailable_(r: U64, $c: AptosDataCache): Promise<U64>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=error.d.ts.map