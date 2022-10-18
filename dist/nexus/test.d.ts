import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "nexus";
export declare const moduleAddress: HexString;
export declare const moduleName = "test";
export declare const ASK: boolean;
export declare const ASK_PRICE: U64;
export declare const ASK_SIZE: U64;
export declare const CUSTODIAN_ID: U64;
export declare const LOT_SIZE: U64;
export declare const MARKET_ID: U64;
export declare const MINT_AMOUNT: U64;
export declare const TICK_SIZE: U64;
export declare function init_module_(nexus: HexString, $c: AptosDataCache): Promise<void>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=test.d.ts.map