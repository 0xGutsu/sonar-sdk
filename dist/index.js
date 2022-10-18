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
exports.App = exports.getProjectRepo = exports.u128 = exports.u64 = exports.u8 = exports.stdlib = exports.sonar = exports.nexus = exports.aptos_token = void 0;
const move_to_ts_1 = require("@manahippo/move-to-ts");
Object.defineProperty(exports, "u8", { enumerable: true, get: function () { return move_to_ts_1.u8; } });
Object.defineProperty(exports, "u64", { enumerable: true, get: function () { return move_to_ts_1.u64; } });
Object.defineProperty(exports, "u128", { enumerable: true, get: function () { return move_to_ts_1.u128; } });
const aptos_token = __importStar(require("./aptos_token"));
const nexus = __importStar(require("./nexus"));
const sonar = __importStar(require("./sonar"));
const stdlib = __importStar(require("./stdlib"));
exports.aptos_token = __importStar(require("./aptos_token"));
exports.nexus = __importStar(require("./nexus"));
exports.sonar = __importStar(require("./sonar"));
exports.stdlib = __importStar(require("./stdlib"));
function getProjectRepo() {
    const repo = new move_to_ts_1.AptosParserRepo();
    aptos_token.loadParsers(repo);
    nexus.loadParsers(repo);
    sonar.loadParsers(repo);
    stdlib.loadParsers(repo);
    repo.addDefaultParsers();
    return repo;
}
exports.getProjectRepo = getProjectRepo;
class App {
    constructor(client) {
        this.client = client;
        this.parserRepo = getProjectRepo();
        this.cache = new move_to_ts_1.AptosSyncedCache(this.parserRepo, client);
        this.aptos_token = new aptos_token.App(client, this.parserRepo, this.cache);
        this.nexus = new nexus.App(client, this.parserRepo, this.cache);
        this.sonar = new sonar.App(client, this.parserRepo, this.cache);
        this.stdlib = new stdlib.App(client, this.parserRepo, this.cache);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map