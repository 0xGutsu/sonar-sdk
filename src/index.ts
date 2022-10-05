
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as nexus from './nexus';
import * as stdlib from './stdlib';

export * as nexus from './nexus';
export * as stdlib from './stdlib';


export function getProjectRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  nexus.loadParsers(repo);
  stdlib.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}

export class App {
  parserRepo: AptosParserRepo;
  cache: AptosLocalCache;
  nexus : nexus.App
  stdlib : stdlib.App
  constructor(
    public client: AptosClient,
  ) {
    this.parserRepo = getProjectRepo();
    this.cache = new AptosLocalCache();
    this.nexus = new nexus.App(client, this.parserRepo, this.cache);
    this.stdlib = new stdlib.App(client, this.parserRepo, this.cache);
  }
}
