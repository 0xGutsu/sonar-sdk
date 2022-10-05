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
exports.App = exports.getPackageRepo = exports.loadParsers = exports.User = exports.Registry = exports.Order_id = exports.Open_table = exports.Market = exports.Critbit = exports.Assets = void 0;
const move_to_ts_1 = require("@manahippo/move-to-ts");
const Assets = __importStar(require("./assets"));
const Critbit = __importStar(require("./critbit"));
const Market = __importStar(require("./market"));
const Open_table = __importStar(require("./open_table"));
const Order_id = __importStar(require("./order_id"));
const Registry = __importStar(require("./registry"));
const User = __importStar(require("./user"));
exports.Assets = __importStar(require("./assets"));
exports.Critbit = __importStar(require("./critbit"));
exports.Market = __importStar(require("./market"));
exports.Open_table = __importStar(require("./open_table"));
exports.Order_id = __importStar(require("./order_id"));
exports.Registry = __importStar(require("./registry"));
exports.User = __importStar(require("./user"));
function loadParsers(repo) {
    Assets.loadParsers(repo);
    Critbit.loadParsers(repo);
    Market.loadParsers(repo);
    Open_table.loadParsers(repo);
    Order_id.loadParsers(repo);
    Registry.loadParsers(repo);
    User.loadParsers(repo);
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
        this.assets = new Assets.App(client, repo, cache);
        this.critbit = new Critbit.App(client, repo, cache);
        this.market = new Market.App(client, repo, cache);
        this.open_table = new Open_table.App(client, repo, cache);
        this.order_id = new Order_id.App(client, repo, cache);
        this.registry = new Registry.App(client, repo, cache);
        this.user = new User.App(client, repo, cache);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map