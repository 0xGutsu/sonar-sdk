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
exports.get_market_id_ = exports.get_market_account_id_ = exports.get_general_custodian_id_ = exports.get_asset_counts_user_ = exports.get_asset_counts_internal_ = exports.get_asset_counts_custodian_ = exports.get_asset_counts_ = exports.fill_order_update_market_account_ = exports.fill_order_route_collateral_single_ = exports.fill_order_route_collateral_ = exports.fill_order_internal_ = exports.deposit_generic_asset_ = exports.buildPayload_deposit_from_coinstore = exports.deposit_from_coinstore_ = exports.deposit_coins_ = exports.deposit_assets_as_option_internal_ = exports.deposit_asset_as_option_internal_ = exports.deposit_asset_ = exports.borrow_transfer_fields_mixed_ = exports.MarketAccounts = exports.MarketAccount = exports.Collateral = exports.PURE_COIN_PAIR = exports.OUT = exports.NO_CUSTODIAN = exports.IN = exports.HI_64 = exports.FIRST_64 = exports.E_UNREGISTERED_CUSTODIAN_ID = exports.E_UNAUTHORIZED_CUSTODIAN = exports.E_TICKS_OVERFLOW = exports.E_SIZE_0 = exports.E_PRICE_0 = exports.E_OVERFLOW_ASSET_OUT = exports.E_OVERFLOW_ASSET_IN = exports.E_NO_ORDERS = exports.E_NO_MARKET_ACCOUNTS = exports.E_NO_MARKET_ACCOUNT = exports.E_NOT_IN_MARKET_PAIR = exports.E_NOT_GENERIC_ASSET = exports.E_NOT_ENOUGH_ASSET_AVAILABLE = exports.E_NOT_COIN_ASSET = exports.E_EXISTS_MARKET_ACCOUNT = exports.E_DEPOSIT_OVERFLOW_ASSET_CEILING = exports.COIN_ASSET_TRANSFER = exports.BID = exports.ASK = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.buildPayload_withdraw_to_coinstore = exports.withdraw_to_coinstore_ = exports.withdraw_generic_asset_ = exports.withdraw_coins_user_ = exports.withdraw_coins_custodian_ = exports.withdraw_coins_as_option_internal_ = exports.withdraw_coins_ = exports.withdraw_assets_as_option_internal_ = exports.withdraw_asset_as_option_internal_ = exports.withdraw_asset_ = exports.verify_market_account_exists_ = exports.remove_order_internal_ = exports.register_order_internal_ = exports.register_market_accounts_entry_ = exports.buildPayload_register_market_account = exports.register_market_account_ = exports.register_collateral_entry_ = exports.range_check_new_order_ = exports.get_order_id_nearest_spread_internal_ = exports.get_n_orders_internal_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
const Critbit = __importStar(require("./critbit"));
const Open_table = __importStar(require("./open_table"));
const Order_id = __importStar(require("./order_id"));
const Registry = __importStar(require("./registry"));
exports.packageName = "nexus";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "user";
exports.ASK = true;
exports.BID = false;
exports.COIN_ASSET_TRANSFER = (0, move_to_ts_1.u64)("0");
exports.E_DEPOSIT_OVERFLOW_ASSET_CEILING = (0, move_to_ts_1.u64)("5");
exports.E_EXISTS_MARKET_ACCOUNT = (0, move_to_ts_1.u64)("2");
exports.E_NOT_COIN_ASSET = (0, move_to_ts_1.u64)("13");
exports.E_NOT_ENOUGH_ASSET_AVAILABLE = (0, move_to_ts_1.u64)("4");
exports.E_NOT_GENERIC_ASSET = (0, move_to_ts_1.u64)("12");
exports.E_NOT_IN_MARKET_PAIR = (0, move_to_ts_1.u64)("0");
exports.E_NO_MARKET_ACCOUNT = (0, move_to_ts_1.u64)("3");
exports.E_NO_MARKET_ACCOUNTS = (0, move_to_ts_1.u64)("7");
exports.E_NO_ORDERS = (0, move_to_ts_1.u64)("15");
exports.E_OVERFLOW_ASSET_IN = (0, move_to_ts_1.u64)("10");
exports.E_OVERFLOW_ASSET_OUT = (0, move_to_ts_1.u64)("11");
exports.E_PRICE_0 = (0, move_to_ts_1.u64)("9");
exports.E_SIZE_0 = (0, move_to_ts_1.u64)("8");
exports.E_TICKS_OVERFLOW = (0, move_to_ts_1.u64)("6");
exports.E_UNAUTHORIZED_CUSTODIAN = (0, move_to_ts_1.u64)("14");
exports.E_UNREGISTERED_CUSTODIAN_ID = (0, move_to_ts_1.u64)("1");
exports.FIRST_64 = (0, move_to_ts_1.u8)("64");
exports.HI_64 = (0, move_to_ts_1.u64)("18446744073709551615");
exports.IN = true;
exports.NO_CUSTODIAN = (0, move_to_ts_1.u64)("0");
exports.OUT = false;
exports.PURE_COIN_PAIR = (0, move_to_ts_1.u64)("0");
class Collateral {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.map = proto['map'];
    }
    static CollateralParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Collateral);
        return new Collateral(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Collateral, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Collateral, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Collateral", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.map.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Collateral = Collateral;
Collateral.moduleAddress = exports.moduleAddress;
Collateral.moduleName = exports.moduleName;
Collateral.structName = "Collateral";
Collateral.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Collateral.fields = [
    { name: "map", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "open_table", "OpenTable", [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new $.TypeParamIdx(0)])]) }
];
class MarketAccount {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.base_type_info = proto['base_type_info'];
        this.quote_type_info = proto['quote_type_info'];
        this.generic_asset_transfer_custodian_id = proto['generic_asset_transfer_custodian_id'];
        this.asks = proto['asks'];
        this.bids = proto['bids'];
        this.base_total = proto['base_total'];
        this.base_available = proto['base_available'];
        this.base_ceiling = proto['base_ceiling'];
        this.quote_total = proto['quote_total'];
        this.quote_available = proto['quote_available'];
        this.quote_ceiling = proto['quote_ceiling'];
    }
    static MarketAccountParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MarketAccount);
        return new MarketAccount(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MarketAccount", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.base_type_info.loadFullState(app);
            yield this.quote_type_info.loadFullState(app);
            yield this.asks.loadFullState(app);
            yield this.bids.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MarketAccount = MarketAccount;
MarketAccount.moduleAddress = exports.moduleAddress;
MarketAccount.moduleName = exports.moduleName;
MarketAccount.structName = "MarketAccount";
MarketAccount.typeParameters = [];
MarketAccount.fields = [
    { name: "base_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) },
    { name: "quote_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) },
    { name: "generic_asset_transfer_custodian_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "asks", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "critbit", "CritBitTree", [move_to_ts_2.AtomicTypeTag.U64]) },
    { name: "bids", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "critbit", "CritBitTree", [move_to_ts_2.AtomicTypeTag.U64]) },
    { name: "base_total", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "base_available", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "base_ceiling", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "quote_total", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "quote_available", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "quote_ceiling", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class MarketAccounts {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.map = proto['map'];
    }
    static MarketAccountsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MarketAccounts);
        return new MarketAccounts(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, MarketAccounts, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, MarketAccounts, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MarketAccounts", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.map.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MarketAccounts = MarketAccounts;
MarketAccounts.moduleAddress = exports.moduleAddress;
MarketAccounts.moduleName = exports.moduleName;
MarketAccounts.structName = "MarketAccounts";
MarketAccounts.typeParameters = [];
MarketAccounts.fields = [
    { name: "map", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "open_table", "OpenTable", [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "user", "MarketAccount", [])]) }
];
function borrow_transfer_fields_mixed_(market_accounts_map_ref_mut, market_account_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let asset_type_info, market_account_ref_mut;
        market_account_ref_mut = yield Open_table.borrow_mut_(market_accounts_map_ref_mut, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        asset_type_info = yield Stdlib.Type_info.type_of_($c, [$p[0]]);
        if ($.deep_eq($.copy(asset_type_info), $.copy((market_account_ref_mut).base_type_info))) {
            return [(market_account_ref_mut).base_total, (market_account_ref_mut).base_available, (market_account_ref_mut).base_ceiling, (market_account_ref_mut).generic_asset_transfer_custodian_id];
        }
        else {
            if ($.deep_eq($.copy(asset_type_info), $.copy((market_account_ref_mut).quote_type_info))) {
                return [(market_account_ref_mut).quote_total, (market_account_ref_mut).quote_available, (market_account_ref_mut).quote_ceiling, (market_account_ref_mut).generic_asset_transfer_custodian_id];
            }
            else {
            }
        }
        throw $.abortCode($.copy(exports.E_NOT_IN_MARKET_PAIR));
    });
}
exports.borrow_transfer_fields_mixed_ = borrow_transfer_fields_mixed_;
function deposit_asset_(user, market_account_id, amount, optional_coins, generic_asset_transfer_custodian_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let asset_available_ref_mut, asset_ceiling_ref_mut, asset_total_ref_mut, collateral_map_ref_mut, collateral_ref_mut, generic_asset_transfer_custodian_id_ref, market_accounts_map_ref_mut;
        yield verify_market_account_exists_($.copy(user), $.copy(market_account_id), $c);
        market_accounts_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        [asset_total_ref_mut, asset_available_ref_mut, asset_ceiling_ref_mut, generic_asset_transfer_custodian_id_ref] = yield borrow_transfer_fields_mixed_(market_accounts_map_ref_mut, $.copy(market_account_id), $c, [$p[0]]);
        if (!!(((0, move_to_ts_1.u128)($.copy(asset_ceiling_ref_mut))).add((0, move_to_ts_1.u128)($.copy(amount)))).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
            throw $.abortCode($.copy(exports.E_DEPOSIT_OVERFLOW_ASSET_CEILING));
        }
        $.set(asset_total_ref_mut, ($.copy(asset_total_ref_mut)).add($.copy(amount)));
        $.set(asset_available_ref_mut, ($.copy(asset_available_ref_mut)).add($.copy(amount)));
        $.set(asset_ceiling_ref_mut, ($.copy(asset_ceiling_ref_mut)).add($.copy(amount)));
        if (yield Stdlib.Option.is_some_(optional_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])])) {
            collateral_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral, [$p[0]]), $.copy(user))).map;
            collateral_ref_mut = yield Open_table.borrow_mut_(collateral_map_ref_mut, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
            yield Stdlib.Coin.merge_(collateral_ref_mut, yield Stdlib.Option.destroy_some_(optional_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), $c, [$p[0]]);
        }
        else {
            if (!($.copy(generic_asset_transfer_custodian_id)).eq(($.copy(generic_asset_transfer_custodian_id_ref)))) {
                throw $.abortCode($.copy(exports.E_UNAUTHORIZED_CUSTODIAN));
            }
            yield Stdlib.Option.destroy_none_(optional_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        }
        return;
    });
}
exports.deposit_asset_ = deposit_asset_;
function deposit_asset_as_option_internal_(user, market_account_id, amount, optional_coins, generic_asset_transfer_custodian_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield deposit_asset_($.copy(user), $.copy(market_account_id), $.copy(amount), optional_coins, $.copy(generic_asset_transfer_custodian_id), $c, [$p[0]]);
    });
}
exports.deposit_asset_as_option_internal_ = deposit_asset_as_option_internal_;
function deposit_assets_as_option_internal_(user, market_account_id, base_amount, quote_amount, optional_base_coins, optional_quote_coins, generic_asset_transfer_custodian_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        yield deposit_asset_as_option_internal_($.copy(user), $.copy(market_account_id), $.copy(base_amount), optional_base_coins, $.copy(generic_asset_transfer_custodian_id), $c, [$p[0]]);
        yield deposit_asset_as_option_internal_($.copy(user), $.copy(market_account_id), $.copy(quote_amount), optional_quote_coins, $.copy(generic_asset_transfer_custodian_id), $c, [$p[1]]);
        return;
    });
}
exports.deposit_assets_as_option_internal_ = deposit_assets_as_option_internal_;
function deposit_coins_(user, market_id, general_custodian_id, coins, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield deposit_asset_($.copy(user), yield get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c), yield Stdlib.Coin.value_(coins, $c, [$p[0]]), yield Stdlib.Option.some_(coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), $.copy(exports.COIN_ASSET_TRANSFER), $c, [$p[0]]);
    });
}
exports.deposit_coins_ = deposit_coins_;
function deposit_from_coinstore_(user, market_id, general_custodian_id, amount, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield deposit_coins_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_id), $.copy(general_custodian_id), yield Stdlib.Coin.withdraw_(user, $.copy(amount), $c, [$p[0]]), $c, [$p[0]]);
    });
}
exports.deposit_from_coinstore_ = deposit_from_coinstore_;
function buildPayload_deposit_from_coinstore(market_id, general_custodian_id, amount, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "user", "deposit_from_coinstore", typeParamStrings, [
        market_id,
        general_custodian_id,
        amount,
    ], isJSON);
}
exports.buildPayload_deposit_from_coinstore = buildPayload_deposit_from_coinstore;
function deposit_generic_asset_(user, market_id, general_custodian_id, amount, generic_asset_transfer_custodian_capability_ref, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let generic_asset_transfer_custodian_id;
        if (!!(yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_NOT_GENERIC_ASSET));
        }
        generic_asset_transfer_custodian_id = yield Registry.custodian_id_(generic_asset_transfer_custodian_capability_ref, $c);
        return yield deposit_asset_($.copy(user), yield get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c), $.copy(amount), yield Stdlib.Option.none_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), $.copy(generic_asset_transfer_custodian_id), $c, [$p[0]]);
    });
}
exports.deposit_generic_asset_ = deposit_generic_asset_;
function fill_order_internal_(user, market_account_id, side, order_id, complete_fill, fill_size, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, base_to_route, quote_to_route, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fill_order_update_market_account_($.copy(user), $.copy(market_account_id), side, $.copy(order_id), complete_fill, $.copy(fill_size), $.copy(base_to_route), $.copy(quote_to_route), $c);
        yield fill_order_route_collateral_($.copy(user), $.copy(market_account_id), side, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, $.copy(base_to_route), $.copy(quote_to_route), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.fill_order_internal_ = fill_order_internal_;
function fill_order_route_collateral_(user, market_account_id, side, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, base_to_route, quote_to_route, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, base_direction, quote_direction;
        if ((side == $.copy(exports.ASK))) {
            [temp$1, temp$2] = [$.copy(exports.OUT), $.copy(exports.IN)];
        }
        else {
            [temp$1, temp$2] = [$.copy(exports.IN), $.copy(exports.OUT)];
        }
        [base_direction, quote_direction] = [temp$1, temp$2];
        if (yield Stdlib.Option.is_some_(optional_base_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])])) {
            yield fill_order_route_collateral_single_($.copy(user), $.copy(market_account_id), yield Stdlib.Option.borrow_mut_(optional_base_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), $.copy(base_to_route), base_direction, $c, [$p[0]]);
        }
        else {
        }
        if (yield Stdlib.Option.is_some_(optional_quote_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])])) {
            yield fill_order_route_collateral_single_($.copy(user), $.copy(market_account_id), yield Stdlib.Option.borrow_mut_(optional_quote_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]), $.copy(quote_to_route), quote_direction, $c, [$p[1]]);
        }
        else {
        }
        return;
    });
}
exports.fill_order_route_collateral_ = fill_order_route_collateral_;
function fill_order_route_collateral_single_(user, market_account_id, external_coins_ref_mut, amount, direction, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let collateral_map_ref_mut, collateral_ref_mut;
        collateral_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral, [$p[0]]), $.copy(user))).map;
        collateral_ref_mut = yield Open_table.borrow_mut_(collateral_map_ref_mut, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        if ((direction == $.copy(exports.IN))) {
            yield Stdlib.Coin.merge_(collateral_ref_mut, yield Stdlib.Coin.extract_(external_coins_ref_mut, $.copy(amount), $c, [$p[0]]), $c, [$p[0]]);
        }
        else {
            yield Stdlib.Coin.merge_(external_coins_ref_mut, yield Stdlib.Coin.extract_(collateral_ref_mut, $.copy(amount), $c, [$p[0]]), $c, [$p[0]]);
        }
        return;
    });
}
exports.fill_order_route_collateral_single_ = fill_order_route_collateral_single_;
function fill_order_update_market_account_(user, market_account_id, side, order_id, complete_fill, fill_size, base_to_route, quote_to_route, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, asset_in, asset_in_available_ref_mut, asset_in_total_ref_mut, asset_out, asset_out_ceiling_ref_mut, asset_out_total_ref_mut, market_account_ref_mut, market_accounts_map_ref_mut, order_size_ref_mut, tree_ref_mut;
        market_accounts_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        market_account_ref_mut = yield Open_table.borrow_mut_(market_accounts_map_ref_mut, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        if ((side == $.copy(exports.ASK))) {
            [temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7] = [(market_account_ref_mut).asks, $.copy(quote_to_route), (market_account_ref_mut).quote_total, (market_account_ref_mut).quote_available, $.copy(base_to_route), (market_account_ref_mut).base_total, (market_account_ref_mut).base_ceiling];
        }
        else {
            [temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7] = [(market_account_ref_mut).bids, $.copy(base_to_route), (market_account_ref_mut).base_total, (market_account_ref_mut).base_available, $.copy(quote_to_route), (market_account_ref_mut).quote_total, (market_account_ref_mut).quote_ceiling];
        }
        [tree_ref_mut, asset_in, asset_in_total_ref_mut, asset_in_available_ref_mut, asset_out, asset_out_total_ref_mut, asset_out_ceiling_ref_mut] = [temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7];
        if (complete_fill) {
            yield Critbit.pop_(tree_ref_mut, $.copy(order_id), $c, [move_to_ts_2.AtomicTypeTag.U64]);
        }
        else {
            order_size_ref_mut = yield Critbit.borrow_mut_(tree_ref_mut, $.copy(order_id), $c, [move_to_ts_2.AtomicTypeTag.U64]);
            $.set(order_size_ref_mut, ($.copy(order_size_ref_mut)).sub($.copy(fill_size)));
        }
        $.set(asset_in_total_ref_mut, ($.copy(asset_in_total_ref_mut)).add($.copy(asset_in)));
        $.set(asset_in_available_ref_mut, ($.copy(asset_in_available_ref_mut)).add($.copy(asset_in)));
        $.set(asset_out_total_ref_mut, ($.copy(asset_out_total_ref_mut)).sub($.copy(asset_out)));
        $.set(asset_out_ceiling_ref_mut, ($.copy(asset_out_ceiling_ref_mut)).sub($.copy(asset_out)));
        return;
    });
}
exports.fill_order_update_market_account_ = fill_order_update_market_account_;
function get_asset_counts_(user, market_account_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let market_account_ref, market_accounts_map_ref;
        yield verify_market_account_exists_($.copy(user), $.copy(market_account_id), $c);
        market_accounts_map_ref = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        market_account_ref = yield Open_table.borrow_(market_accounts_map_ref, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        return [$.copy((market_account_ref).base_total), $.copy((market_account_ref).base_available), $.copy((market_account_ref).base_ceiling), $.copy((market_account_ref).quote_total), $.copy((market_account_ref).quote_available), $.copy((market_account_ref).quote_ceiling)];
    });
}
exports.get_asset_counts_ = get_asset_counts_;
function get_asset_counts_custodian_(user, market_id, general_custodian_capability_ref, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield get_asset_counts_($.copy(user), yield get_market_account_id_($.copy(market_id), yield Registry.custodian_id_(general_custodian_capability_ref, $c), $c), $c);
    });
}
exports.get_asset_counts_custodian_ = get_asset_counts_custodian_;
function get_asset_counts_internal_(user, market_account_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield get_asset_counts_($.copy(user), $.copy(market_account_id), $c);
    });
}
exports.get_asset_counts_internal_ = get_asset_counts_internal_;
function get_asset_counts_user_(user, market_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield get_asset_counts_(yield Stdlib.Signer.address_of_(user, $c), yield get_market_account_id_($.copy(market_id), $.copy(exports.NO_CUSTODIAN), $c), $c);
    });
}
exports.get_asset_counts_user_ = get_asset_counts_user_;
function get_general_custodian_id_(market_account_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, move_to_ts_1.u64)(($.copy(market_account_id)).and((0, move_to_ts_1.u128)($.copy(exports.HI_64))));
    });
}
exports.get_general_custodian_id_ = get_general_custodian_id_;
function get_market_account_id_(market_id, general_custodian_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (((0, move_to_ts_1.u128)($.copy(market_id))).shl($.copy(exports.FIRST_64))).or((0, move_to_ts_1.u128)($.copy(general_custodian_id)));
    });
}
exports.get_market_account_id_ = get_market_account_id_;
function get_market_id_(market_account_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, move_to_ts_1.u64)(($.copy(market_account_id)).shr($.copy(exports.FIRST_64)));
    });
}
exports.get_market_id_ = get_market_id_;
function get_n_orders_internal_(user, market_account_id, side, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, market_account_ref, market_accounts_map_ref, tree_ref;
        yield verify_market_account_exists_($.copy(user), $.copy(market_account_id), $c);
        market_accounts_map_ref = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        market_account_ref = yield Open_table.borrow_(market_accounts_map_ref, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        if ((side == $.copy(exports.ASK))) {
            temp$1 = (market_account_ref).asks;
        }
        else {
            temp$1 = (market_account_ref).bids;
        }
        tree_ref = temp$1;
        return yield Critbit.length_(tree_ref, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    });
}
exports.get_n_orders_internal_ = get_n_orders_internal_;
function get_order_id_nearest_spread_internal_(user, market_account_id, side, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, market_account_ref, market_accounts_map_ref, tree_ref;
        yield verify_market_account_exists_($.copy(user), $.copy(market_account_id), $c);
        market_accounts_map_ref = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        market_account_ref = yield Open_table.borrow_(market_accounts_map_ref, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        if ((side == $.copy(exports.ASK))) {
            temp$1 = (market_account_ref).asks;
        }
        else {
            temp$1 = (market_account_ref).bids;
        }
        tree_ref = temp$1;
        if (!!(yield Critbit.is_empty_(tree_ref, $c, [move_to_ts_2.AtomicTypeTag.U64]))) {
            throw $.abortCode($.copy(exports.E_NO_ORDERS));
        }
        if ((side == $.copy(exports.ASK))) {
            temp$2 = yield Critbit.min_key_(tree_ref, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        }
        else {
            temp$2 = yield Critbit.max_key_(tree_ref, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        }
        return temp$2;
    });
}
exports.get_order_id_nearest_spread_internal_ = get_order_id_nearest_spread_internal_;
function range_check_new_order_(side, size, price, lot_size, tick_size, in_asset_ceiling, out_asset_available, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, base_fill, in_asset_fill, out_asset_fill, quote_fill, ticks;
        if (!($.copy(size)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode($.copy(exports.E_SIZE_0));
        }
        if (!($.copy(price)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode($.copy(exports.E_PRICE_0));
        }
        base_fill = ((0, move_to_ts_1.u128)($.copy(size))).mul((0, move_to_ts_1.u128)($.copy(lot_size)));
        ticks = ((0, move_to_ts_1.u128)($.copy(size))).mul((0, move_to_ts_1.u128)($.copy(price)));
        if (!!($.copy(ticks)).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
            throw $.abortCode($.copy(exports.E_TICKS_OVERFLOW));
        }
        quote_fill = ($.copy(ticks)).mul((0, move_to_ts_1.u128)($.copy(tick_size)));
        if ((side == $.copy(exports.ASK))) {
            [temp$1, temp$2] = [$.copy(quote_fill), $.copy(base_fill)];
        }
        else {
            [temp$1, temp$2] = [$.copy(base_fill), $.copy(quote_fill)];
        }
        [in_asset_fill, out_asset_fill] = [temp$1, temp$2];
        if (!!(($.copy(in_asset_fill)).add((0, move_to_ts_1.u128)($.copy(in_asset_ceiling)))).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
            throw $.abortCode($.copy(exports.E_OVERFLOW_ASSET_IN));
        }
        if (!!($.copy(out_asset_fill)).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
            throw $.abortCode($.copy(exports.E_OVERFLOW_ASSET_OUT));
        }
        if (!!($.copy(out_asset_fill)).gt((0, move_to_ts_1.u128)($.copy(out_asset_available)))) {
            throw $.abortCode($.copy(exports.E_NOT_ENOUGH_ASSET_AVAILABLE));
        }
        return [(0, move_to_ts_1.u64)($.copy(in_asset_fill)), (0, move_to_ts_1.u64)($.copy(out_asset_fill))];
    });
}
exports.range_check_new_order_ = range_check_new_order_;
function register_collateral_entry_(user, market_account_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, collateral_map_ref_mut, user_address;
        user_address = yield Stdlib.Signer.address_of_(user, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collateral, [$p[0]]), $.copy(user_address)))) {
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(Collateral, [$p[0]]), user, new Collateral({ map: yield Open_table.empty_($c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]) }, new move_to_ts_2.SimpleStructTag(Collateral, [$p[0]])));
        }
        else {
        }
        collateral_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral, [$p[0]]), $.copy(user_address))).map;
        [temp$1, temp$2] = [collateral_map_ref_mut, $.copy(market_account_id)];
        if (!!(yield Open_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]))) {
            throw $.abortCode($.copy(exports.E_EXISTS_MARKET_ACCOUNT));
        }
        yield Open_table.add_(collateral_map_ref_mut, $.copy(market_account_id), yield Stdlib.Coin.zero_($c, [$p[0]]), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        return;
    });
}
exports.register_collateral_entry_ = register_collateral_entry_;
function register_market_account_(user, market_id, general_custodian_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let market_account_id;
        if (($.copy(general_custodian_id)).neq($.copy(exports.NO_CUSTODIAN))) {
            if (!(yield Registry.is_registered_custodian_id_($.copy(general_custodian_id), $c))) {
                throw $.abortCode($.copy(exports.E_UNREGISTERED_CUSTODIAN_ID));
            }
        }
        else {
        }
        market_account_id = yield get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c);
        yield register_market_accounts_entry_(user, $.copy(market_account_id), $c, [$p[0], $p[1]]);
        if (yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]])) {
            yield register_collateral_entry_(user, $.copy(market_account_id), $c, [$p[0]]);
        }
        else {
        }
        if (yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]])) {
            yield register_collateral_entry_(user, $.copy(market_account_id), $c, [$p[1]]);
        }
        else {
        }
        return;
    });
}
exports.register_market_account_ = register_market_account_;
function buildPayload_register_market_account(market_id, general_custodian_id, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "user", "register_market_account", typeParamStrings, [
        market_id,
        general_custodian_id,
    ], isJSON);
}
exports.buildPayload_register_market_account = buildPayload_register_market_account;
function register_market_accounts_entry_(user, market_account_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, generic_asset_transfer_custodian_id, market_accounts_map_ref_mut, user_address;
        generic_asset_transfer_custodian_id = yield Registry.get_verified_market_custodian_id_(yield get_market_id_($.copy(market_account_id), $c), $c, [$p[0], $p[1]]);
        user_address = yield Stdlib.Signer.address_of_(user, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user_address)))) {
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), user, new MarketAccounts({ map: yield Open_table.empty_($c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]) }, new move_to_ts_2.SimpleStructTag(MarketAccounts)));
        }
        else {
        }
        market_accounts_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user_address))).map;
        [temp$1, temp$2] = [market_accounts_map_ref_mut, $.copy(market_account_id)];
        if (!!(yield Open_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]))) {
            throw $.abortCode($.copy(exports.E_EXISTS_MARKET_ACCOUNT));
        }
        yield Open_table.add_(market_accounts_map_ref_mut, $.copy(market_account_id), new MarketAccount({ base_type_info: yield Stdlib.Type_info.type_of_($c, [$p[0]]), quote_type_info: yield Stdlib.Type_info.type_of_($c, [$p[1]]), generic_asset_transfer_custodian_id: $.copy(generic_asset_transfer_custodian_id), asks: yield Critbit.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]), bids: yield Critbit.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]), base_total: (0, move_to_ts_1.u64)("0"), base_available: (0, move_to_ts_1.u64)("0"), base_ceiling: (0, move_to_ts_1.u64)("0"), quote_total: (0, move_to_ts_1.u64)("0"), quote_available: (0, move_to_ts_1.u64)("0"), quote_ceiling: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(MarketAccount)), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        return;
    });
}
exports.register_market_accounts_entry_ = register_market_accounts_entry_;
function register_order_internal_(user, market_account_id, side, order_id, size, price, lot_size, tick_size, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, in_asset_ceiling_ref_mut, in_asset_fill, market_account_ref_mut, market_accounts_map_ref_mut, out_asset_available_ref_mut, out_asset_fill, tree_ref_mut;
        yield verify_market_account_exists_($.copy(user), $.copy(market_account_id), $c);
        market_accounts_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        market_account_ref_mut = yield Open_table.borrow_mut_(market_accounts_map_ref_mut, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        if ((side == $.copy(exports.ASK))) {
            [temp$1, temp$2, temp$3] = [(market_account_ref_mut).asks, (market_account_ref_mut).quote_ceiling, (market_account_ref_mut).base_available];
        }
        else {
            [temp$1, temp$2, temp$3] = [(market_account_ref_mut).bids, (market_account_ref_mut).base_ceiling, (market_account_ref_mut).quote_available];
        }
        [tree_ref_mut, in_asset_ceiling_ref_mut, out_asset_available_ref_mut] = [temp$1, temp$2, temp$3];
        [in_asset_fill, out_asset_fill] = yield range_check_new_order_(side, $.copy(size), $.copy(price), $.copy(lot_size), $.copy(tick_size), $.copy(in_asset_ceiling_ref_mut), $.copy(out_asset_available_ref_mut), $c);
        yield Critbit.insert_(tree_ref_mut, $.copy(order_id), $.copy(size), $c, [move_to_ts_2.AtomicTypeTag.U64]);
        $.set(in_asset_ceiling_ref_mut, ($.copy(in_asset_ceiling_ref_mut)).add($.copy(in_asset_fill)));
        $.set(out_asset_available_ref_mut, ($.copy(out_asset_available_ref_mut)).sub($.copy(out_asset_fill)));
        return;
    });
}
exports.register_order_internal_ = register_order_internal_;
function remove_order_internal_(user, market_account_id, lot_size, tick_size, side, order_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, asset_available_ref_mut, asset_ceiling_ref_mut, ceiling_decrement_amount, market_account_ref_mut, market_accounts_map_ref_mut, size, size_multiplier_available, size_multiplier_ceiling, tree_ref_mut, unlocked;
        market_accounts_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        market_account_ref_mut = yield Open_table.borrow_mut_(market_accounts_map_ref_mut, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]);
        if ((side == $.copy(exports.ASK))) {
            [temp$1, temp$2, temp$3, temp$4, temp$5] = [(market_account_ref_mut).asks, (market_account_ref_mut).base_available, (market_account_ref_mut).quote_ceiling, $.copy(lot_size), (yield Order_id.price_($.copy(order_id), $c)).mul($.copy(tick_size))];
        }
        else {
            [temp$1, temp$2, temp$3, temp$4, temp$5] = [(market_account_ref_mut).bids, (market_account_ref_mut).quote_available, (market_account_ref_mut).base_ceiling, (yield Order_id.price_($.copy(order_id), $c)).mul($.copy(tick_size)), $.copy(lot_size)];
        }
        [tree_ref_mut, asset_available_ref_mut, asset_ceiling_ref_mut, size_multiplier_available, size_multiplier_ceiling] = [temp$1, temp$2, temp$3, temp$4, temp$5];
        size = yield Critbit.pop_(tree_ref_mut, $.copy(order_id), $c, [move_to_ts_2.AtomicTypeTag.U64]);
        unlocked = ($.copy(size)).mul($.copy(size_multiplier_available));
        $.set(asset_available_ref_mut, ($.copy(asset_available_ref_mut)).add($.copy(unlocked)));
        ceiling_decrement_amount = ($.copy(size)).mul($.copy(size_multiplier_ceiling));
        $.set(asset_ceiling_ref_mut, ($.copy(asset_ceiling_ref_mut)).sub($.copy(ceiling_decrement_amount)));
        return;
    });
}
exports.remove_order_internal_ = remove_order_internal_;
function verify_market_account_exists_(user, market_account_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let market_accounts_map_ref;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user)))) {
            throw $.abortCode($.copy(exports.E_NO_MARKET_ACCOUNTS));
        }
        market_accounts_map_ref = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        if (!(yield Open_table.contains_(market_accounts_map_ref, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketAccount)]))) {
            throw $.abortCode($.copy(exports.E_NO_MARKET_ACCOUNT));
        }
        return;
    });
}
exports.verify_market_account_exists_ = verify_market_account_exists_;
function withdraw_asset_(user, market_account_id, amount, asset_is_coin, generic_asset_transfer_custodian_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let asset_available_ref_mut, asset_ceiling_ref_mut, asset_total_ref_mut, collateral_map_ref_mut, collateral_ref_mut, generic_asset_transfer_custodian_id_ref, market_accounts_map_ref_mut;
        yield verify_market_account_exists_($.copy(user), $.copy(market_account_id), $c);
        market_accounts_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketAccounts), $.copy(user))).map;
        [asset_total_ref_mut, asset_available_ref_mut, asset_ceiling_ref_mut, generic_asset_transfer_custodian_id_ref] = yield borrow_transfer_fields_mixed_(market_accounts_map_ref_mut, $.copy(market_account_id), $c, [$p[0]]);
        if (!!($.copy(amount)).gt($.copy(asset_available_ref_mut))) {
            throw $.abortCode($.copy(exports.E_NOT_ENOUGH_ASSET_AVAILABLE));
        }
        $.set(asset_total_ref_mut, ($.copy(asset_total_ref_mut)).sub($.copy(amount)));
        $.set(asset_available_ref_mut, ($.copy(asset_available_ref_mut)).sub($.copy(amount)));
        $.set(asset_ceiling_ref_mut, ($.copy(asset_ceiling_ref_mut)).sub($.copy(amount)));
        if (asset_is_coin) {
            collateral_map_ref_mut = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral, [$p[0]]), $.copy(user))).map;
            collateral_ref_mut = yield Open_table.borrow_mut_(collateral_map_ref_mut, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
            return yield Stdlib.Option.some_(yield Stdlib.Coin.extract_(collateral_ref_mut, $.copy(amount), $c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        }
        else {
            if (!($.copy(generic_asset_transfer_custodian_id)).eq(($.copy(generic_asset_transfer_custodian_id_ref)))) {
                throw $.abortCode($.copy(exports.E_UNAUTHORIZED_CUSTODIAN));
            }
            return yield Stdlib.Option.none_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        }
    });
}
exports.withdraw_asset_ = withdraw_asset_;
function withdraw_asset_as_option_internal_(user, market_account_id, amount, generic_asset_transfer_custodian_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield withdraw_asset_($.copy(user), $.copy(market_account_id), $.copy(amount), yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]), $.copy(generic_asset_transfer_custodian_id), $c, [$p[0]]);
    });
}
exports.withdraw_asset_as_option_internal_ = withdraw_asset_as_option_internal_;
function withdraw_assets_as_option_internal_(user, market_account_id, base_amount, quote_amount, generic_asset_transfer_custodian_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return [yield withdraw_asset_($.copy(user), $.copy(market_account_id), $.copy(base_amount), yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]), $.copy(generic_asset_transfer_custodian_id), $c, [$p[0]]), yield withdraw_asset_($.copy(user), $.copy(market_account_id), $.copy(quote_amount), yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]), $.copy(generic_asset_transfer_custodian_id), $c, [$p[1]])];
    });
}
exports.withdraw_assets_as_option_internal_ = withdraw_assets_as_option_internal_;
function withdraw_coins_(user, market_id, general_custodian_id, amount, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let market_account_id, option_coins;
        if (!(yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_NOT_COIN_ASSET));
        }
        market_account_id = yield get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c);
        option_coins = yield withdraw_asset_($.copy(user), $.copy(market_account_id), $.copy(amount), true, $.copy(exports.COIN_ASSET_TRANSFER), $c, [$p[0]]);
        return yield Stdlib.Option.destroy_some_(option_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
    });
}
exports.withdraw_coins_ = withdraw_coins_;
function withdraw_coins_as_option_internal_(user, market_account_id, amount, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield withdraw_asset_($.copy(user), $.copy(market_account_id), $.copy(amount), true, $.copy(exports.COIN_ASSET_TRANSFER), $c, [$p[0]]);
    });
}
exports.withdraw_coins_as_option_internal_ = withdraw_coins_as_option_internal_;
function withdraw_coins_custodian_(user, market_id, amount, general_custodian_capability_ref, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield withdraw_coins_($.copy(user), $.copy(market_id), yield Registry.custodian_id_(general_custodian_capability_ref, $c), $.copy(amount), $c, [$p[0]]);
    });
}
exports.withdraw_coins_custodian_ = withdraw_coins_custodian_;
function withdraw_coins_user_(user, market_id, amount, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield withdraw_coins_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_id), $.copy(exports.NO_CUSTODIAN), $.copy(amount), $c, [$p[0]]);
    });
}
exports.withdraw_coins_user_ = withdraw_coins_user_;
function withdraw_generic_asset_(user, market_id, general_custodian_id, amount, generic_asset_transfer_custodian_capability_ref, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let empty_option, generic_asset_transfer_custodian_id, market_account_id;
        if (!!(yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_NOT_GENERIC_ASSET));
        }
        generic_asset_transfer_custodian_id = yield Registry.custodian_id_(generic_asset_transfer_custodian_capability_ref, $c);
        market_account_id = yield get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c);
        empty_option = yield withdraw_asset_($.copy(user), $.copy(market_account_id), $.copy(amount), false, $.copy(generic_asset_transfer_custodian_id), $c, [$p[0]]);
        yield Stdlib.Option.destroy_none_(empty_option, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        return;
    });
}
exports.withdraw_generic_asset_ = withdraw_generic_asset_;
function withdraw_to_coinstore_(user, market_id, amount, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let coins;
        coins = yield withdraw_coins_user_(user, $.copy(market_id), $.copy(amount), $c, [$p[0]]);
        yield Stdlib.Coin.deposit_(yield Stdlib.Signer.address_of_(user, $c), coins, $c, [$p[0]]);
        return;
    });
}
exports.withdraw_to_coinstore_ = withdraw_to_coinstore_;
function buildPayload_withdraw_to_coinstore(market_id, amount, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "user", "withdraw_to_coinstore", typeParamStrings, [
        market_id,
        amount,
    ], isJSON);
}
exports.buildPayload_withdraw_to_coinstore = buildPayload_withdraw_to_coinstore;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::user::Collateral", Collateral.CollateralParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::user::MarketAccount", MarketAccount.MarketAccountParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::user::MarketAccounts", MarketAccounts.MarketAccountsParser);
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
    get Collateral() { return Collateral; }
    loadCollateral(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Collateral.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get MarketAccount() { return MarketAccount; }
    get MarketAccounts() { return MarketAccounts; }
    loadMarketAccounts(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield MarketAccounts.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_deposit_from_coinstore(market_id, general_custodian_id, amount, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_deposit_from_coinstore(market_id, general_custodian_id, amount, $p, isJSON);
    }
    deposit_from_coinstore(_account, market_id, general_custodian_id, amount, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_deposit_from_coinstore(market_id, general_custodian_id, amount, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_register_market_account(market_id, general_custodian_id, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
        return buildPayload_register_market_account(market_id, general_custodian_id, $p, isJSON);
    }
    register_market_account(_account, market_id, general_custodian_id, $p, /* <BaseType, QuoteType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_register_market_account(market_id, general_custodian_id, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_withdraw_to_coinstore(market_id, amount, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_withdraw_to_coinstore(market_id, amount, $p, isJSON);
    }
    withdraw_to_coinstore(_account, market_id, amount, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_withdraw_to_coinstore(market_id, amount, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=user.js.map