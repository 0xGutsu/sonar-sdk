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
exports.App = exports.getProjectRepo = exports.stdlib = exports.nexus = void 0;
const move_to_ts_1 = require("@manahippo/move-to-ts");
const nexus = __importStar(require("./nexus"));
const stdlib = __importStar(require("./stdlib"));
exports.nexus = __importStar(require("./nexus"));
exports.stdlib = __importStar(require("./stdlib"));
function getProjectRepo() {
    const repo = new move_to_ts_1.AptosParserRepo();
    nexus.loadParsers(repo);
    stdlib.loadParsers(repo);
    repo.addDefaultParsers();
    return repo;
}
exports.getProjectRepo = getProjectRepo;
class App {
    constructor(client) {
        this.client = client;
        this.parserRepo = getProjectRepo();
        this.cache = new move_to_ts_1.AptosLocalCache();
        this.nexus = new nexus.App(client, this.parserRepo, this.cache);
        this.stdlib = new stdlib.App(client, this.parserRepo, this.cache);
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map