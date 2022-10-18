import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as Auction from './auction';
import * as Auction_bid_utils from './auction_bid_utils';
import * as Auction_instant_sale_example from './auction_instant_sale_example';
import * as Auction_listing_utils from './auction_listing_utils';
import * as Custodian from './custodian';
import * as Sonar_open_table from './sonar_open_table';
export * as Auction from './auction';
export * as Auction_bid_utils from './auction_bid_utils';
export * as Auction_instant_sale_example from './auction_instant_sale_example';
export * as Auction_listing_utils from './auction_listing_utils';
export * as Custodian from './custodian';
export * as Sonar_open_table from './sonar_open_table';
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
    auction: Auction.App;
    auction_bid_utils: Auction_bid_utils.App;
    auction_instant_sale_example: Auction_instant_sale_example.App;
    auction_listing_utils: Auction_listing_utils.App;
    custodian: Custodian.App;
    sonar_open_table: Sonar_open_table.App;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
}
//# sourceMappingURL=index.d.ts.map