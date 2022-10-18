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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.loadParsers = exports.init_module_ = exports.TICK_SIZE = exports.MINT_AMOUNT = exports.MARKET_ID = exports.LOT_SIZE = exports.CUSTODIAN_ID = exports.ASK_SIZE = exports.ASK_PRICE = exports.ASK = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Assets = __importStar(require("./assets"));
const Market = __importStar(require("./market"));
const Registry = __importStar(require("./registry"));
const User = __importStar(require("./user"));
exports.packageName = "nexus";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "test";
exports.ASK = true;
exports.ASK_PRICE = (0, move_to_ts_1.u64)("10");
exports.ASK_SIZE = (0, move_to_ts_1.u64)("100");
exports.CUSTODIAN_ID = (0, move_to_ts_1.u64)("0");
exports.LOT_SIZE = (0, move_to_ts_1.u64)("10");
exports.MARKET_ID = (0, move_to_ts_1.u64)("0");
exports.MINT_AMOUNT = (0, move_to_ts_1.u64)("1000000000");
exports.TICK_SIZE = (0, move_to_ts_1.u64)("25");
function init_module_(nexus, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Registry.init_registry_(nexus, $c);
        yield Assets.init_coin_types_(nexus, $c);
        yield Market.register_market_pure_coin_(nexus, $.copy(exports.LOT_SIZE), $.copy(exports.TICK_SIZE), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "BC", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "QC", [])]);
        yield User.register_market_account_(nexus, $.copy(exports.MARKET_ID), $.copy(exports.CUSTODIAN_ID), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "BC", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "QC", [])]);
        yield User.deposit_coins_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(exports.MARKET_ID), $.copy(exports.CUSTODIAN_ID), yield Assets.mint_(nexus, $.copy(exports.MINT_AMOUNT), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "QC", [])]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "QC", [])]);
        yield User.deposit_coins_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(exports.MARKET_ID), $.copy(exports.CUSTODIAN_ID), yield Assets.mint_(nexus, $.copy(exports.MINT_AMOUNT), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "BC", [])]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "BC", [])]);
        yield Market.place_limit_order_user_(nexus, new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(exports.MARKET_ID), $.copy(exports.ASK), $.copy(exports.ASK_SIZE), $.copy(exports.ASK_PRICE), false, false, false, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "BC", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "assets", "QC", [])]);
        return;
    });
}
exports.init_module_ = init_module_;
function loadParsers(repo) {
}
exports.loadParsers = loadParsers;
class App {
    constructor(client, repo, cache) {
        this.client = client;
        this.repo = repo;
        this.cache = cache;
    }
    get moduleAddress() { {
        return exports.moduleAddress;
    } }
    get moduleName() { {
        return exports.moduleName;
    } }
}
exports.App = App;
//# sourceMappingURL=test.js.map