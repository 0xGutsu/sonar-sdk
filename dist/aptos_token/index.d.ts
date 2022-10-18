import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as Property_map from './property_map';
import * as Token from './token';
import * as Token_coin_swap from './token_coin_swap';
import * as Token_transfers from './token_transfers';
export * as Property_map from './property_map';
export * as Token from './token';
export * as Token_coin_swap from './token_coin_swap';
export * as Token_transfers from './token_transfers';
export declare function loadParsers(repo: AptosParserRepo): void;
export declare function getPackageRepo(): AptosParserRepo;
export declare type AppType = {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
};
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    property_map: Property_map.App;
    token: Token.App;
    token_coin_swap: Token_coin_swap.App;
    token_transfers: Token_transfers.App;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
}
//# sourceMappingURL=index.d.ts.map