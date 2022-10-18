"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.getPackageRepo = exports.loadParsers = exports.Token_transfers = exports.Token_coin_swap = exports.Token = exports.Property_map = void 0;
const move_to_ts_1 = require("@manahippo/move-to-ts");
const Property_map = __importStar(require("./property_map"));
const Token = __importStar(require("./token"));
const Token_coin_swap = __importStar(require("./token_coin_swap"));
const Token_transfers = __importStar(require("./token_transfers"));
exports.Property_map = __importStar(require("./property_map"));
exports.Token = __importStar(require("./token"));
exports.Token_coin_swap = __importStar(require("./token_coin_swap"));
exports.Token_transfers = __importStar(require("./token_transfers"));
function loadParsers(repo) {
    Property_map.loadParsers(repo);
    Token.loadParsers(repo);
    Token_coin_swap.loadParsers(repo);
    Token_transfers.loadParsers(repo);
}
exports.loadParsers = loadParsers;
function getPackageRepo() {
    const repo = new move_to_ts_1.AptosParserRepo();
    loadParsers(repo);
    repo.addDefaultParsers();
    return repo;
}
exports.getPackageRepo = getPackageRepo;
class App {
    constructor(client, repo, cache) {
        this.client = client;
        this.repo = repo;
        this.cache = cache;
        this.property_map = new Property_map.App(client, repo, cache);
        this.token = new Token.App(client, repo, cache);
        this.token_coin_swap = new Token_coin_swap.App(client, repo, cache);
        this.token_transfers = new Token_transfers.App(client, repo, cache);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map