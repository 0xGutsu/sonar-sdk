import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as nexus from './nexus';
import * as stdlib from './stdlib';
export * as nexus from './nexus';
export * as stdlib from './stdlib';
export declare function getProjectRepo(): AptosParserRepo;
export declare class App {
    client: AptosClient;
    parserRepo: AptosParserRepo;
    cache: AptosLocalCache;
    nexus: nexus.App;
    stdlib: stdlib.App;
    constructor(client: AptosClient);
}
//# sourceMappingURL=index.d.ts.map