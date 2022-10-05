import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as Assets from './assets';
import * as Critbit from './critbit';
import * as Market from './market';
import * as Open_table from './open_table';
import * as Order_id from './order_id';
import * as Registry from './registry';
import * as User from './user';
export * as Assets from './assets';
export * as Critbit from './critbit';
export * as Market from './market';
export * as Open_table from './open_table';
export * as Order_id from './order_id';
export * as Registry from './registry';
export * as User from './user';
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
    assets: Assets.App;
    critbit: Critbit.App;
    market: Market.App;
    open_table: Open_table.App;
    order_id: Order_id.App;
    registry: Registry.App;
    user: User.App;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
}
//# sourceMappingURL=index.d.ts.map