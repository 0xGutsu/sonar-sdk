import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache, u8, u64, u128 } from "@manahippo/move-to-ts";
import * as aptos_token from './aptos_token';
import * as nexus from './nexus';
import * as sonar from './sonar';
import * as stdlib from './stdlib';
export * as aptos_token from './aptos_token';
export * as nexus from './nexus';
export * as sonar from './sonar';
export * as stdlib from './stdlib';
export { u8, u64, u128 };
export declare function getProjectRepo(): AptosParserRepo;
export declare class App {
    client: AptosClient;
    parserRepo: AptosParserRepo;
    cache: AptosLocalCache;
    aptos_token: aptos_token.App;
    nexus: nexus.App;
    sonar: sonar.App;
    stdlib: stdlib.App;
    constructor(client: AptosClient);
}
//# sourceMappingURL=index.d.ts.map