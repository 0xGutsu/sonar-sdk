import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64, U128 } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
export declare const packageName = "Nexus";
export declare const moduleAddress: HexString;
export declare const moduleName = "order_id";
export declare const ASK: boolean;
export declare const BID: boolean;
export declare const FIRST_64: U8;
export declare const HI_64: U64;
export declare function counter_ask_(order_id: U128, $c: AptosDataCache): U64;
export declare function counter_bid_(order_id: U128, $c: AptosDataCache): U64;
export declare function order_id_(price: U64, counter: U64, side: boolean, $c: AptosDataCache): U128;
export declare function order_id_ask_(price: U64, counter: U64, $c: AptosDataCache): U128;
export declare function order_id_bid_(price: U64, counter: U64, $c: AptosDataCache): U128;
export declare function price_(order_id: U128, $c: AptosDataCache): U64;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
}
//# sourceMappingURL=order_id.d.ts.map