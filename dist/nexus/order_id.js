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
exports.App = exports.loadParsers = exports.price_ = exports.order_id_bid_ = exports.order_id_ask_ = exports.order_id_ = exports.counter_bid_ = exports.counter_ask_ = exports.HI_64 = exports.FIRST_64 = exports.BID = exports.ASK = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "nexus";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "order_id";
exports.ASK = true;
exports.BID = false;
exports.FIRST_64 = (0, move_to_ts_1.u8)("64");
exports.HI_64 = (0, move_to_ts_1.u64)("18446744073709551615");
function counter_ask_(order_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, move_to_ts_1.u64)(($.copy(order_id)).and((0, move_to_ts_1.u128)($.copy(exports.HI_64))));
    });
}
exports.counter_ask_ = counter_ask_;
function counter_bid_(order_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return ((0, move_to_ts_1.u64)(($.copy(order_id)).and((0, move_to_ts_1.u128)($.copy(exports.HI_64))))).xor($.copy(exports.HI_64));
    });
}
exports.counter_bid_ = counter_bid_;
function order_id_(price, counter, side, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1;
        if ((side == $.copy(exports.ASK))) {
            temp$1 = yield order_id_ask_($.copy(price), $.copy(counter), $c);
        }
        else {
            temp$1 = yield order_id_bid_($.copy(price), $.copy(counter), $c);
        }
        return temp$1;
    });
}
exports.order_id_ = order_id_;
function order_id_ask_(price, counter, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (((0, move_to_ts_1.u128)($.copy(price))).shl($.copy(exports.FIRST_64))).or((0, move_to_ts_1.u128)($.copy(counter)));
    });
}
exports.order_id_ask_ = order_id_ask_;
function order_id_bid_(price, counter, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (((0, move_to_ts_1.u128)($.copy(price))).shl($.copy(exports.FIRST_64))).or((0, move_to_ts_1.u128)(($.copy(counter)).xor($.copy(exports.HI_64))));
    });
}
exports.order_id_bid_ = order_id_bid_;
function price_(order_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, move_to_ts_1.u64)(($.copy(order_id)).shr($.copy(exports.FIRST_64)));
    });
}
exports.price_ = price_;
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
//# sourceMappingURL=order_id.js.map