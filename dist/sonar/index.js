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
exports.App = exports.getPackageRepo = exports.loadParsers = exports.Sonar_open_table = exports.Custodian = exports.Auction_listing_utils = exports.Auction_instant_sale_example = exports.Auction_bid_utils = exports.Auction = void 0;
const move_to_ts_1 = require("@manahippo/move-to-ts");
const Auction = __importStar(require("./auction"));
const Auction_bid_utils = __importStar(require("./auction_bid_utils"));
const Auction_instant_sale_example = __importStar(require("./auction_instant_sale_example"));
const Auction_listing_utils = __importStar(require("./auction_listing_utils"));
const Custodian = __importStar(require("./custodian"));
const Sonar_open_table = __importStar(require("./sonar_open_table"));
exports.Auction = __importStar(require("./auction"));
exports.Auction_bid_utils = __importStar(require("./auction_bid_utils"));
exports.Auction_instant_sale_example = __importStar(require("./auction_instant_sale_example"));
exports.Auction_listing_utils = __importStar(require("./auction_listing_utils"));
exports.Custodian = __importStar(require("./custodian"));
exports.Sonar_open_table = __importStar(require("./sonar_open_table"));
function loadParsers(repo) {
    Auction.loadParsers(repo);
    Auction_bid_utils.loadParsers(repo);
    Auction_instant_sale_example.loadParsers(repo);
    Auction_listing_utils.loadParsers(repo);
    Custodian.loadParsers(repo);
    Sonar_open_table.loadParsers(repo);
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
        this.auction = new Auction.App(client, repo, cache);
        this.auction_bid_utils = new Auction_bid_utils.App(client, repo, cache);
        this.auction_instant_sale_example = new Auction_instant_sale_example.App(client, repo, cache);
        this.auction_listing_utils = new Auction_listing_utils.App(client, repo, cache);
        this.custodian = new Custodian.App(client, repo, cache);
        this.sonar_open_table = new Sonar_open_table.App(client, repo, cache);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map