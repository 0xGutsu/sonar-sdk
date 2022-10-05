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
exports.match_ = exports.get_counter_ = exports.buildPayload_cancel_limit_order_user = exports.cancel_limit_order_user_ = exports.cancel_limit_order_custodian_ = exports.cancel_limit_order_ = exports.buildPayload_cancel_all_limit_orders_user = exports.cancel_all_limit_orders_user_ = exports.cancel_all_limit_orders_custodian_ = exports.cancel_all_limit_orders_ = exports.OrderBooks = exports.OrderBook = exports.Order = exports.SELL = exports.RIGHT = exports.PURE_COIN_PAIR = exports.NO_CUSTODIAN = exports.MIN_ASK_DEFAULT = exports.MAX_BID_DEFAULT = exports.LEFT = exports.HI_64 = exports.E_TOO_MANY_ORDER_FLAGS = exports.E_SIZE_TICKS_OVERFLOW = exports.E_SIZE_QUOTE_OVERFLOW = exports.E_SIZE_BASE_OVERFLOW = exports.E_POST_OR_ABORT_CROSSED_SPREAD = exports.E_ORDER_BOOK_EXISTS = exports.E_NO_ORDER_BOOKS = exports.E_NO_ORDER_BOOK = exports.E_NO_ORDER = exports.E_NOT_ENOUGH_OUTBOUND_ASSET = exports.E_MIN_TICKS_NOT_FILLED = exports.E_MIN_QUOTE_EXCEEDS_MAX = exports.E_MIN_LOTS_NOT_FILLED = exports.E_MIN_BASE_EXCEEDS_MAX = exports.E_LIMIT_PRICE_0 = exports.E_INVALID_USER = exports.E_INVALID_QUOTE = exports.E_INVALID_OPTION_QUOTE = exports.E_INVALID_OPTION_BASE = exports.E_INVALID_CUSTODIAN = exports.E_INVALID_BASE = exports.E_INBOUND_ASSET_OVERFLOW = exports.E_BOTH_COINS = exports.BUY = exports.BID = exports.ASK = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.verify_order_book_exists_ = exports.swap_generic_ = exports.swap_coins_ = exports.buildPayload_swap_between_coinstores = exports.swap_between_coinstores_ = exports.swap_ = exports.register_order_book_ = exports.buildPayload_register_market_pure_coin = exports.register_market_pure_coin_ = exports.buildPayload_register_market_generic = exports.register_market_generic_ = exports.register_market_ = exports.buildPayload_place_market_order_user = exports.place_market_order_user_ = exports.place_market_order_custodian_ = exports.place_market_order_ = exports.buildPayload_place_limit_order_user = exports.place_limit_order_user_ = exports.place_limit_order_pre_match_ = exports.place_limit_order_post_match_ = exports.place_limit_order_custodian_ = exports.place_limit_order_ = exports.match_verify_fills_ = exports.match_range_check_fills_ = exports.match_loop_order_follow_up_ = exports.match_loop_order_fill_size_ = exports.match_loop_order_ = exports.match_loop_init_ = exports.match_loop_break_ = exports.match_loop_ = exports.match_init_ = exports.match_from_market_account_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
const Critbit = __importStar(require("./critbit"));
const Open_table = __importStar(require("./open_table"));
const Order_id = __importStar(require("./order_id"));
const Registry = __importStar(require("./registry"));
const User = __importStar(require("./user"));
exports.packageName = "Nexus";
exports.moduleAddress = new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa");
exports.moduleName = "market";
exports.ASK = true;
exports.BID = false;
exports.BUY = true;
exports.E_BOTH_COINS = (0, move_to_ts_1.u64)("18");
exports.E_INBOUND_ASSET_OVERFLOW = (0, move_to_ts_1.u64)("9");
exports.E_INVALID_BASE = (0, move_to_ts_1.u64)("14");
exports.E_INVALID_CUSTODIAN = (0, move_to_ts_1.u64)("7");
exports.E_INVALID_OPTION_BASE = (0, move_to_ts_1.u64)("16");
exports.E_INVALID_OPTION_QUOTE = (0, move_to_ts_1.u64)("17");
exports.E_INVALID_QUOTE = (0, move_to_ts_1.u64)("15");
exports.E_INVALID_USER = (0, move_to_ts_1.u64)("6");
exports.E_LIMIT_PRICE_0 = (0, move_to_ts_1.u64)("13");
exports.E_MIN_BASE_EXCEEDS_MAX = (0, move_to_ts_1.u64)("11");
exports.E_MIN_LOTS_NOT_FILLED = (0, move_to_ts_1.u64)("3");
exports.E_MIN_QUOTE_EXCEEDS_MAX = (0, move_to_ts_1.u64)("12");
exports.E_MIN_TICKS_NOT_FILLED = (0, move_to_ts_1.u64)("4");
exports.E_NOT_ENOUGH_OUTBOUND_ASSET = (0, move_to_ts_1.u64)("10");
exports.E_NO_ORDER = (0, move_to_ts_1.u64)("5");
exports.E_NO_ORDER_BOOK = (0, move_to_ts_1.u64)("2");
exports.E_NO_ORDER_BOOKS = (0, move_to_ts_1.u64)("1");
exports.E_ORDER_BOOK_EXISTS = (0, move_to_ts_1.u64)("0");
exports.E_POST_OR_ABORT_CROSSED_SPREAD = (0, move_to_ts_1.u64)("8");
exports.E_SIZE_BASE_OVERFLOW = (0, move_to_ts_1.u64)("20");
exports.E_SIZE_QUOTE_OVERFLOW = (0, move_to_ts_1.u64)("22");
exports.E_SIZE_TICKS_OVERFLOW = (0, move_to_ts_1.u64)("21");
exports.E_TOO_MANY_ORDER_FLAGS = (0, move_to_ts_1.u64)("19");
exports.HI_64 = (0, move_to_ts_1.u64)("18446744073709551615");
exports.LEFT = true;
exports.MAX_BID_DEFAULT = (0, move_to_ts_1.u128)("0");
exports.MIN_ASK_DEFAULT = (0, move_to_ts_1.u128)("340282366920938463463374607431768211455");
exports.NO_CUSTODIAN = (0, move_to_ts_1.u64)("0");
exports.PURE_COIN_PAIR = (0, move_to_ts_1.u64)("0");
exports.RIGHT = false;
exports.SELL = false;
class Order {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.size = proto['size'];
        this.user = proto['user'];
        this.general_custodian_id = proto['general_custodian_id'];
    }
    static OrderParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Order);
        return new Order(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Order", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Order = Order;
Order.moduleAddress = exports.moduleAddress;
Order.moduleName = exports.moduleName;
Order.structName = "Order";
Order.typeParameters = [];
Order.fields = [
    { name: "size", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "user", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "general_custodian_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class OrderBook {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.base_type_info = proto['base_type_info'];
        this.quote_type_info = proto['quote_type_info'];
        this.lot_size = proto['lot_size'];
        this.tick_size = proto['tick_size'];
        this.generic_asset_transfer_custodian_id = proto['generic_asset_transfer_custodian_id'];
        this.asks = proto['asks'];
        this.bids = proto['bids'];
        this.min_ask = proto['min_ask'];
        this.max_bid = proto['max_bid'];
        this.counter = proto['counter'];
    }
    static OrderBookParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OrderBook);
        return new OrderBook(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OrderBook", []);
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
exports.OrderBook = OrderBook;
OrderBook.moduleAddress = exports.moduleAddress;
OrderBook.moduleName = exports.moduleName;
OrderBook.structName = "OrderBook";
OrderBook.typeParameters = [];
OrderBook.fields = [
    { name: "base_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) },
    { name: "quote_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) },
    { name: "lot_size", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "tick_size", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "generic_asset_transfer_custodian_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "asks", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "critbit", "CritBitTree", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "Order", [])]) },
    { name: "bids", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "critbit", "CritBitTree", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "Order", [])]) },
    { name: "min_ask", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "max_bid", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "counter", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class OrderBooks {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.map = proto['map'];
    }
    static OrderBooksParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OrderBooks);
        return new OrderBooks(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, OrderBooks, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, OrderBooks, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OrderBooks", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.map.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.OrderBooks = OrderBooks;
OrderBooks.moduleAddress = exports.moduleAddress;
OrderBooks.moduleName = exports.moduleName;
OrderBooks.structName = "OrderBooks";
OrderBooks.typeParameters = [];
OrderBooks.fields = [
    { name: "map", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "open_table", "OpenTable", [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "OrderBook", [])]) }
];
function cancel_all_limit_orders_(user, host, market_id, general_custodian_id, side, $c) {
    let market_account_id, n_orders, order_id_nearest_spread;
    market_account_id = User.get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c);
    n_orders = User.get_n_orders_internal_($.copy(user), $.copy(market_account_id), side, $c);
    while (($.copy(n_orders)).gt((0, move_to_ts_1.u64)("0"))) {
        {
            order_id_nearest_spread = User.get_order_id_nearest_spread_internal_($.copy(user), $.copy(market_account_id), side, $c);
            cancel_limit_order_($.copy(user), $.copy(host), $.copy(market_id), $.copy(general_custodian_id), side, $.copy(order_id_nearest_spread), $c);
            n_orders = ($.copy(n_orders)).sub((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.cancel_all_limit_orders_ = cancel_all_limit_orders_;
function cancel_all_limit_orders_custodian_(user, host, market_id, side, general_custodian_capability_ref, $c) {
    cancel_all_limit_orders_($.copy(user), $.copy(host), $.copy(market_id), Registry.custodian_id_(general_custodian_capability_ref, $c), side, $c);
    return;
}
exports.cancel_all_limit_orders_custodian_ = cancel_all_limit_orders_custodian_;
function cancel_all_limit_orders_user_(user, host, market_id, side, $c) {
    cancel_all_limit_orders_(Stdlib.Signer.address_of_(user, $c), $.copy(host), $.copy(market_id), $.copy(exports.NO_CUSTODIAN), side, $c);
    return;
}
exports.cancel_all_limit_orders_user_ = cancel_all_limit_orders_user_;
function buildPayload_cancel_all_limit_orders_user(host, market_id, side, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "cancel_all_limit_orders_user", typeParamStrings, [
        host,
        market_id,
        side,
    ], isJSON);
}
exports.buildPayload_cancel_all_limit_orders_user = buildPayload_cancel_all_limit_orders_user;
function cancel_limit_order_(user, host, market_id, general_custodian_id, side, order_id, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, lot_size, market_account_id, order_book_ref_mut, order_books_map_ref_mut, tick_size, tree_ref_mut;
    verify_order_book_exists_($.copy(host), $.copy(market_id), $c);
    order_books_map_ref_mut = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host)).map;
    order_book_ref_mut = Open_table.borrow_mut_(order_books_map_ref_mut, $.copy(market_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)]);
    if ((side == $.copy(exports.ASK))) {
        temp$1 = order_book_ref_mut.asks;
    }
    else {
        temp$1 = order_book_ref_mut.bids;
    }
    tree_ref_mut = temp$1;
    [temp$2, temp$3] = [tree_ref_mut, $.copy(order_id)];
    if (!Critbit.has_key_(temp$2, temp$3, $c, [new move_to_ts_2.SimpleStructTag(Order)])) {
        throw $.abortCode($.copy(exports.E_NO_ORDER));
    }
    let { user: order_user, general_custodian_id: order_general_custodian_id } = Critbit.pop_(tree_ref_mut, $.copy(order_id), $c, [new move_to_ts_2.SimpleStructTag(Order)]);
    if (!(($.copy(user)).hex() === ($.copy(order_user)).hex())) {
        throw $.abortCode($.copy(exports.E_INVALID_USER));
    }
    if (!($.copy(general_custodian_id)).eq(($.copy(order_general_custodian_id)))) {
        throw $.abortCode($.copy(exports.E_INVALID_CUSTODIAN));
    }
    if ((side == $.copy(exports.ASK))) {
        temp$4 = ($.copy(order_id)).eq(($.copy(order_book_ref_mut.min_ask)));
    }
    else {
        temp$4 = false;
    }
    if (temp$4) {
        if (Critbit.is_empty_(tree_ref_mut, $c, [new move_to_ts_2.SimpleStructTag(Order)])) {
            temp$5 = $.copy(exports.MIN_ASK_DEFAULT);
        }
        else {
            temp$5 = Critbit.min_key_(tree_ref_mut, $c, [new move_to_ts_2.SimpleStructTag(Order)]);
        }
        order_book_ref_mut.min_ask = temp$5;
    }
    else {
        if ((side == $.copy(exports.BID))) {
            temp$6 = ($.copy(order_id)).eq(($.copy(order_book_ref_mut.max_bid)));
        }
        else {
            temp$6 = false;
        }
        if (temp$6) {
            if (Critbit.is_empty_(tree_ref_mut, $c, [new move_to_ts_2.SimpleStructTag(Order)])) {
                temp$7 = $.copy(exports.MAX_BID_DEFAULT);
            }
            else {
                temp$7 = Critbit.max_key_(tree_ref_mut, $c, [new move_to_ts_2.SimpleStructTag(Order)]);
            }
            order_book_ref_mut.max_bid = temp$7;
        }
        else {
        }
    }
    [market_account_id, lot_size, tick_size] = [User.get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c), $.copy(order_book_ref_mut.lot_size), $.copy(order_book_ref_mut.tick_size)];
    User.remove_order_internal_($.copy(user), $.copy(market_account_id), $.copy(lot_size), $.copy(tick_size), side, $.copy(order_id), $c);
    return;
}
exports.cancel_limit_order_ = cancel_limit_order_;
function cancel_limit_order_custodian_(user, host, market_id, side, order_id, general_custodian_capability_ref, $c) {
    cancel_limit_order_($.copy(user), $.copy(host), $.copy(market_id), Registry.custodian_id_(general_custodian_capability_ref, $c), side, $.copy(order_id), $c);
    return;
}
exports.cancel_limit_order_custodian_ = cancel_limit_order_custodian_;
function cancel_limit_order_user_(user, host, market_id, side, order_id, $c) {
    cancel_limit_order_(Stdlib.Signer.address_of_(user, $c), $.copy(host), $.copy(market_id), $.copy(exports.NO_CUSTODIAN), side, $.copy(order_id), $c);
    return;
}
exports.cancel_limit_order_user_ = cancel_limit_order_user_;
function buildPayload_cancel_limit_order_user(host, market_id, side, order_id, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "cancel_limit_order_user", typeParamStrings, [
        host,
        market_id,
        side,
        order_id,
    ], isJSON);
}
exports.buildPayload_cancel_limit_order_user = buildPayload_cancel_limit_order_user;
function get_counter_(order_book_ref_mut, $c) {
    let count, counter_ref_mut;
    counter_ref_mut = order_book_ref_mut.counter;
    count = $.copy(counter_ref_mut);
    $.set(counter_ref_mut, ($.copy(count)).add((0, move_to_ts_1.u64)("1")));
    return $.copy(count);
}
exports.get_counter_ = get_counter_;
function match_(market_id_ref, order_book_ref_mut, lot_size_ref, tick_size_ref, direction_ref, min_lots_ref, max_lots_ref, min_ticks_ref, max_ticks_ref, limit_price_ref, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, lots_filled_ref_mut, ticks_filled_ref_mut, $c, $p) {
    let lots_until_max, n_orders, side, spread_maker_ref_mut, target_order_ids, ticks_until_max, traversal_direction, tree_ref_mut;
    [lots_until_max, ticks_until_max, side, tree_ref_mut, spread_maker_ref_mut, n_orders, traversal_direction] = match_init_(order_book_ref_mut, direction_ref, max_lots_ref, max_ticks_ref, $c, [$p[0], $p[1]]);
    target_order_ids = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    if (($.copy(n_orders)).neq((0, move_to_ts_1.u64)("0"))) {
        target_order_ids = match_loop_(market_id_ref, tree_ref_mut, side, lot_size_ref, tick_size_ref, lots_until_max, ticks_until_max, limit_price_ref, n_orders, spread_maker_ref_mut, traversal_direction, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, $c, [$p[0], $p[1]]);
    }
    else {
    }
    match_verify_fills_(min_lots_ref, max_lots_ref, min_ticks_ref, max_ticks_ref, lots_until_max, ticks_until_max, lots_filled_ref_mut, ticks_filled_ref_mut, $c);
    return $.copy(target_order_ids);
}
exports.match_ = match_;
function match_from_market_account_(user_ref, market_account_id_ref, market_id_ref, order_book_ref_mut, direction_ref, min_base_ref, max_base_ref, min_quote_ref, max_quote_ref, limit_price_ref, lots_filled_ref_mut, target_order_ids_ref_mut, $c, $p) {
    let temp$1, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$16, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, base_available, base_ceiling, base_on_hand, base_to_withdraw, lot_size, optional_base_coins, optional_quote_coins, quote_available, quote_ceiling, quote_on_hand, quote_to_withdraw, tick_size, ticks_filled;
    lot_size = $.copy(order_book_ref_mut.lot_size);
    tick_size = $.copy(order_book_ref_mut.tick_size);
    [, base_available, base_ceiling, , quote_available, quote_ceiling] = User.get_asset_counts_internal_($.copy(user_ref), $.copy(market_account_id_ref), $c);
    match_range_check_fills_(direction_ref, min_base_ref, max_base_ref, min_quote_ref, max_quote_ref, base_available, base_ceiling, quote_available, quote_ceiling, $c);
    if (($.copy(direction_ref) == $.copy(exports.BUY))) {
        [temp$1, temp$2] = [(0, move_to_ts_1.u64)("0"), $.copy(max_quote_ref)];
    }
    else {
        [temp$1, temp$2] = [$.copy(max_base_ref), (0, move_to_ts_1.u64)("0")];
    }
    [base_to_withdraw, quote_to_withdraw] = [temp$1, temp$2];
    [optional_base_coins, optional_quote_coins] = User.withdraw_assets_as_option_internal_($.copy(user_ref), $.copy(market_account_id_ref), $.copy(base_to_withdraw), $.copy(quote_to_withdraw), $.copy(order_book_ref_mut.generic_asset_transfer_custodian_id), $c, [$p[0], $p[1]]);
    ticks_filled = (0, move_to_ts_1.u64)("0");
    temp$14 = market_id_ref;
    temp$13 = order_book_ref_mut;
    temp$12 = lot_size;
    temp$11 = tick_size;
    temp$10 = direction_ref;
    temp$8 = ($.copy(min_base_ref)).div($.copy(lot_size));
    temp$9 = temp$8;
    temp$6 = ($.copy(max_base_ref)).div($.copy(lot_size));
    temp$7 = temp$6;
    temp$4 = ($.copy(min_quote_ref)).div($.copy(tick_size));
    temp$5 = temp$4;
    temp$3 = ($.copy(max_quote_ref)).div($.copy(tick_size));
    $.set(target_order_ids_ref_mut, match_(temp$14, temp$13, temp$12, temp$11, temp$10, temp$9, temp$7, temp$5, temp$3, limit_price_ref, optional_base_coins, optional_quote_coins, lots_filled_ref_mut, ticks_filled, $c, [$p[0], $p[1]]));
    if (($.copy(direction_ref) == $.copy(exports.BUY))) {
        [temp$15, temp$16] = [($.copy(lots_filled_ref_mut)).mul($.copy(lot_size)), ($.copy(max_quote_ref)).sub(($.copy(ticks_filled)).mul($.copy(tick_size)))];
    }
    else {
        [temp$15, temp$16] = [($.copy(max_base_ref)).sub(($.copy(lots_filled_ref_mut)).mul($.copy(lot_size))), ($.copy(ticks_filled)).mul($.copy(tick_size))];
    }
    [base_on_hand, quote_on_hand] = [temp$15, temp$16];
    User.deposit_assets_as_option_internal_($.copy(user_ref), $.copy(market_account_id_ref), $.copy(base_on_hand), $.copy(quote_on_hand), optional_base_coins, optional_quote_coins, $.copy(order_book_ref_mut.generic_asset_transfer_custodian_id), $c, [$p[0], $p[1]]);
    return [$.copy(base_on_hand), $.copy(quote_on_hand)];
}
exports.match_from_market_account_ = match_from_market_account_;
function match_init_(order_book_ref_mut, direction_ref, max_lots_ref, max_ticks_ref, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4, n_orders, side, spread_maker_ref_mut, traversal_direction, tree_ref_mut;
    if (!$.deep_eq(Stdlib.Type_info.type_of_($c, [$p[0]]), $.copy(order_book_ref_mut.base_type_info))) {
        throw $.abortCode($.copy(exports.E_INVALID_BASE));
    }
    if (!$.deep_eq(Stdlib.Type_info.type_of_($c, [$p[1]]), $.copy(order_book_ref_mut.quote_type_info))) {
        throw $.abortCode($.copy(exports.E_INVALID_QUOTE));
    }
    if (($.copy(direction_ref) == $.copy(exports.BUY))) {
        [temp$1, temp$2, temp$3, temp$4] = [$.copy(exports.ASK), order_book_ref_mut.asks, order_book_ref_mut.min_ask, $.copy(exports.RIGHT)];
    }
    else {
        [temp$1, temp$2, temp$3, temp$4] = [$.copy(exports.BID), order_book_ref_mut.bids, order_book_ref_mut.max_bid, $.copy(exports.LEFT)];
    }
    [side, tree_ref_mut, spread_maker_ref_mut, traversal_direction] = [temp$1, temp$2, temp$3, temp$4];
    n_orders = Critbit.length_(tree_ref_mut, $c, [new move_to_ts_2.SimpleStructTag(Order)]);
    return [$.copy(max_lots_ref), $.copy(max_ticks_ref), side, tree_ref_mut, spread_maker_ref_mut, $.copy(n_orders), traversal_direction];
}
exports.match_init_ = match_init_;
function match_loop_(market_id_ref, tree_ref_mut, side_ref, lot_size_ref, tick_size_ref, lots_until_max_ref_mut, ticks_until_max_ref_mut, limit_price_ref, n_orders_ref_mut, spread_maker_ref_mut, traversal_direction_ref, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, $c, $p) {
    let complete_target_fill, new_spread_maker, should_break, should_pop_last, target_child_index, target_order_id, target_order_ids, target_order_ref_mut, target_parent_index;
    [target_order_id, target_order_ref_mut, target_parent_index, target_child_index, complete_target_fill, should_pop_last, new_spread_maker] = match_loop_init_(tree_ref_mut, traversal_direction_ref, $c);
    target_order_ids = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    Stdlib.Vector.push_back_(target_order_ids, $.copy(target_order_id), $c, [move_to_ts_2.AtomicTypeTag.U128]);
    while (true) {
        match_loop_order_(market_id_ref, side_ref, lot_size_ref, tick_size_ref, lots_until_max_ref_mut, ticks_until_max_ref_mut, limit_price_ref, target_order_id, target_order_ref_mut, complete_target_fill, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, $c, [$p[0], $p[1]]);
        [target_order_id, target_order_ref_mut, should_break] = match_loop_order_follow_up_(tree_ref_mut, side_ref, traversal_direction_ref, n_orders_ref_mut, complete_target_fill, should_pop_last, $.copy(target_order_id), target_parent_index, target_child_index, new_spread_maker, $c);
        Stdlib.Vector.push_back_(target_order_ids, $.copy(target_order_id), $c, [move_to_ts_2.AtomicTypeTag.U128]);
        if (should_break) {
            match_loop_break_(spread_maker_ref_mut, new_spread_maker, should_pop_last, tree_ref_mut, target_order_id, $c);
            break;
        }
        else {
        }
    }
    return $.copy(target_order_ids);
}
exports.match_loop_ = match_loop_;
function match_loop_break_(spread_maker_ref_mut, new_spread_maker_ref, should_pop_last_ref, tree_ref_mut, final_order_id_ref, $c) {
    $.set(spread_maker_ref_mut, $.copy(new_spread_maker_ref));
    if ($.copy(should_pop_last_ref)) {
        Critbit.pop_(tree_ref_mut, $.copy(final_order_id_ref), $c, [new move_to_ts_2.SimpleStructTag(Order)]);
    }
    else {
    }
    return;
}
exports.match_loop_break_ = match_loop_break_;
function match_loop_init_(tree_ref_mut, traversal_direction_ref, $c) {
    let target_child_index, target_order_id, target_order_ref_mut, target_parent_index;
    [target_order_id, target_order_ref_mut, target_parent_index, target_child_index] = Critbit.traverse_init_mut_(tree_ref_mut, $.copy(traversal_direction_ref), $c, [new move_to_ts_2.SimpleStructTag(Order)]);
    return [$.copy(target_order_id), target_order_ref_mut, $.copy(target_parent_index), $.copy(target_child_index), false, false, (0, move_to_ts_1.u128)("0")];
}
exports.match_loop_init_ = match_loop_init_;
function match_loop_order_(market_id_ref, side_ref, lot_size_ref, tick_size_ref, lots_until_max_ref_mut, ticks_until_max_ref_mut, limit_price_ref, target_order_id_ref, target_order_ref_mut, complete_target_fill_ref_mut, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, base_to_route, fill_size, quote_to_route, target_order_market_account_id, target_order_price, ticks_filled;
    target_order_price = Order_id.price_($.copy(target_order_id_ref), $c);
    if (($.copy(side_ref) == $.copy(exports.ASK))) {
        temp$1 = ($.copy(target_order_price)).gt($.copy(limit_price_ref));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        temp$3 = true;
    }
    else {
        if (($.copy(side_ref) == $.copy(exports.BID))) {
            temp$2 = ($.copy(target_order_price)).lt($.copy(limit_price_ref));
        }
        else {
            temp$2 = false;
        }
        temp$3 = temp$2;
    }
    if (temp$3) {
        $.set(complete_target_fill_ref_mut, false);
        return;
    }
    else {
    }
    fill_size = (0, move_to_ts_1.u64)("0");
    [temp$4, temp$5, temp$6, temp$7, temp$8, temp$9] = [lots_until_max_ref_mut, ticks_until_max_ref_mut, target_order_price, target_order_ref_mut, fill_size, complete_target_fill_ref_mut];
    match_loop_order_fill_size_(temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, $c);
    if (($.copy(fill_size)).eq(((0, move_to_ts_1.u64)("0")))) {
        $.set(complete_target_fill_ref_mut, false);
        return;
    }
    else {
    }
    ticks_filled = ($.copy(fill_size)).mul($.copy(target_order_price));
    $.set(lots_until_max_ref_mut, ($.copy(lots_until_max_ref_mut)).sub($.copy(fill_size)));
    $.set(ticks_until_max_ref_mut, ($.copy(ticks_until_max_ref_mut)).sub($.copy(ticks_filled)));
    [base_to_route, quote_to_route] = [($.copy(fill_size)).mul($.copy(lot_size_ref)), ($.copy(ticks_filled)).mul($.copy(tick_size_ref))];
    target_order_market_account_id = User.get_market_account_id_($.copy(market_id_ref), $.copy(target_order_ref_mut.general_custodian_id), $c);
    User.fill_order_internal_($.copy(target_order_ref_mut.user), $.copy(target_order_market_account_id), $.copy(side_ref), $.copy(target_order_id_ref), $.copy(complete_target_fill_ref_mut), $.copy(fill_size), optional_base_coins_ref_mut, optional_quote_coins_ref_mut, $.copy(base_to_route), $.copy(quote_to_route), $c, [$p[0], $p[1]]);
    target_order_ref_mut.size = ($.copy(target_order_ref_mut.size)).sub($.copy(fill_size));
    return;
}
exports.match_loop_order_ = match_loop_order_;
function match_loop_order_fill_size_(lots_until_max_ref, ticks_until_max_ref, target_order_price_ref, target_order_ref, fill_size_ref_mut, complete_target_fill_ref_mut, $c) {
    let temp$1, temp$2, temp$3, complete_target_fill, fill_size, fill_size_max_limited, fill_size_tick_limited;
    fill_size_tick_limited = ($.copy(ticks_until_max_ref)).div($.copy(target_order_price_ref));
    if (($.copy(fill_size_tick_limited)).lt($.copy(lots_until_max_ref))) {
        temp$1 = $.copy(fill_size_tick_limited);
    }
    else {
        temp$1 = $.copy(lots_until_max_ref);
    }
    fill_size_max_limited = temp$1;
    if (($.copy(fill_size_max_limited)).lt($.copy(target_order_ref.size))) {
        [temp$2, temp$3] = [$.copy(fill_size_max_limited), false];
    }
    else {
        [temp$2, temp$3] = [$.copy(target_order_ref.size), true];
    }
    [fill_size, complete_target_fill] = [temp$2, temp$3];
    $.set(fill_size_ref_mut, $.copy(fill_size));
    $.set(complete_target_fill_ref_mut, complete_target_fill);
    return;
}
exports.match_loop_order_fill_size_ = match_loop_order_fill_size_;
function match_loop_order_follow_up_(tree_ref_mut, side_ref, traversal_direction_ref, n_orders_ref_mut, complete_target_fill_ref, should_pop_last_ref_mut, target_order_id, target_parent_index_ref_mut, target_child_index_ref_mut, new_spread_maker_ref_mut, $c) {
    let temp$1, empty_order, should_break, target_child_index, target_order_ref_mut, target_parent_index;
    target_order_ref_mut = Critbit.borrow_mut_(tree_ref_mut, $.copy(target_order_id), $c, [new move_to_ts_2.SimpleStructTag(Order)]);
    $.set(new_spread_maker_ref_mut, $.copy(target_order_id));
    $.set(should_pop_last_ref_mut, false);
    should_break = true;
    if (($.copy(n_orders_ref_mut)).eq(((0, move_to_ts_1.u64)("1")))) {
        if ($.copy(complete_target_fill_ref)) {
            $.set(should_pop_last_ref_mut, true);
            if (($.copy(side_ref) == $.copy(exports.ASK))) {
                temp$1 = $.copy(exports.MIN_ASK_DEFAULT);
            }
            else {
                temp$1 = $.copy(exports.MAX_BID_DEFAULT);
            }
            $.set(new_spread_maker_ref_mut, temp$1);
        }
        else {
        }
    }
    else {
        if ($.copy(complete_target_fill_ref)) {
            [target_order_id, target_order_ref_mut, target_parent_index, target_child_index, empty_order] = Critbit.traverse_pop_mut_(tree_ref_mut, $.copy(target_order_id), $.copy(target_parent_index_ref_mut), $.copy(target_child_index_ref_mut), $.copy(n_orders_ref_mut), $.copy(traversal_direction_ref), $c, [new move_to_ts_2.SimpleStructTag(Order)]);
            $.set(target_parent_index_ref_mut, $.copy(target_parent_index));
            $.set(target_child_index_ref_mut, $.copy(target_child_index));
            empty_order;
            should_break = false;
            $.set(n_orders_ref_mut, ($.copy(n_orders_ref_mut)).sub((0, move_to_ts_1.u64)("1")));
        }
        else {
        }
    }
    return [$.copy(target_order_id), target_order_ref_mut, should_break];
}
exports.match_loop_order_follow_up_ = match_loop_order_follow_up_;
function match_range_check_fills_(direction_ref, min_base_ref, max_base_ref, min_quote_ref, max_quote_ref, base_available_ref, base_ceiling_ref, quote_available_ref, quote_ceiling_ref, $c) {
    let temp$1, temp$2, temp$3, temp$4, in_ceiling, in_ceiling_max, max_in, max_out, out_available;
    if (!!($.copy(min_base_ref)).gt($.copy(max_base_ref))) {
        throw $.abortCode($.copy(exports.E_MIN_BASE_EXCEEDS_MAX));
    }
    if (!!($.copy(min_quote_ref)).gt($.copy(max_quote_ref))) {
        throw $.abortCode($.copy(exports.E_MIN_QUOTE_EXCEEDS_MAX));
    }
    if (($.copy(direction_ref) == $.copy(exports.BUY))) {
        [temp$1, temp$2, temp$3, temp$4] = [$.copy(base_ceiling_ref), $.copy(max_base_ref), $.copy(quote_available_ref), $.copy(max_quote_ref)];
    }
    else {
        [temp$1, temp$2, temp$3, temp$4] = [$.copy(quote_ceiling_ref), $.copy(max_quote_ref), $.copy(base_available_ref), $.copy(max_base_ref)];
    }
    [in_ceiling, max_in, out_available, max_out] = [temp$1, temp$2, temp$3, temp$4];
    in_ceiling_max = ((0, move_to_ts_1.u128)($.copy(in_ceiling))).add((0, move_to_ts_1.u128)($.copy(max_in)));
    if (!!($.copy(in_ceiling_max)).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
        throw $.abortCode($.copy(exports.E_INBOUND_ASSET_OVERFLOW));
    }
    if (!!($.copy(out_available)).lt($.copy(max_out))) {
        throw $.abortCode($.copy(exports.E_NOT_ENOUGH_OUTBOUND_ASSET));
    }
    return;
}
exports.match_range_check_fills_ = match_range_check_fills_;
function match_verify_fills_(min_lots_ref, max_lots_ref, min_ticks_ref, max_ticks_ref, lots_until_max_ref, ticks_until_max_ref, lots_filled_ref_mut, ticks_filled_ref_mut, $c) {
    $.set(lots_filled_ref_mut, ($.copy(max_lots_ref)).sub($.copy(lots_until_max_ref)));
    $.set(ticks_filled_ref_mut, ($.copy(max_ticks_ref)).sub($.copy(ticks_until_max_ref)));
    if (!!($.copy(lots_filled_ref_mut)).lt($.copy(min_lots_ref))) {
        throw $.abortCode($.copy(exports.E_MIN_LOTS_NOT_FILLED));
    }
    if (!!($.copy(ticks_filled_ref_mut)).lt($.copy(min_ticks_ref))) {
        throw $.abortCode($.copy(exports.E_MIN_TICKS_NOT_FILLED));
    }
    return;
}
exports.match_verify_fills_ = match_verify_fills_;
function place_limit_order_(user_ref, host_ref, market_id_ref, general_custodian_id_ref, side_ref, size_ref, price_ref, post_or_abort_ref, fill_or_abort_ref, immediate_or_cancel_ref, $c, $p) {
    let temp$1, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$16, temp$17, temp$18, temp$19, temp$2, temp$20, temp$21, temp$22, temp$23, temp$24, temp$25, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, base, direction, lot_size, lots_filled, market_account_id, max_base, max_quote, min_base, order_book_ref_mut, order_books_map_ref_mut, order_id, quote, target_order_ids, tick_size;
    if (!($.copy(price_ref)).neq((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode($.copy(exports.E_LIMIT_PRICE_0));
    }
    if (($.copy(size_ref)).eq(((0, move_to_ts_1.u64)("0")))) {
        return [(0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u128)("0"), Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128])];
    }
    else {
    }
    verify_order_book_exists_($.copy(host_ref), $.copy(market_id_ref), $c);
    order_books_map_ref_mut = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host_ref)).map;
    order_book_ref_mut = Open_table.borrow_mut_(order_books_map_ref_mut, $.copy(market_id_ref), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)]);
    [market_account_id, lot_size, tick_size, direction, min_base, max_base, max_quote, lots_filled] = [(0, move_to_ts_1.u128)("0"), (0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0"), false, (0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0")];
    [temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$16, temp$17] = [user_ref, order_book_ref_mut, market_id_ref, general_custodian_id_ref, side_ref, size_ref, price_ref, post_or_abort_ref, fill_or_abort_ref, immediate_or_cancel_ref, market_account_id, lot_size, tick_size, direction, min_base, max_base, max_quote];
    place_limit_order_pre_match_(temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$16, temp$17, $c);
    target_order_ids = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    temp$25 = user_ref;
    temp$24 = market_account_id;
    temp$23 = market_id_ref;
    temp$22 = order_book_ref_mut;
    temp$21 = direction;
    temp$20 = min_base;
    temp$19 = max_base;
    temp$18 = (0, move_to_ts_1.u64)("0");
    [base, quote] = match_from_market_account_(temp$25, temp$24, temp$23, temp$22, temp$21, temp$20, temp$19, temp$18, max_quote, price_ref, lots_filled, target_order_ids, $c, [$p[0], $p[1]]);
    order_id = place_limit_order_post_match_(user_ref, order_book_ref_mut, market_account_id, general_custodian_id_ref, lot_size, tick_size, side_ref, size_ref, price_ref, lots_filled, immediate_or_cancel_ref, $c);
    return [$.copy(base), $.copy(quote), $.copy(order_id), $.copy(target_order_ids)];
}
exports.place_limit_order_ = place_limit_order_;
function place_limit_order_custodian_(user, host, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, general_custodian_capability_ref, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4;
    temp$4 = user;
    temp$3 = host;
    temp$2 = market_id;
    temp$1 = Registry.custodian_id_(general_custodian_capability_ref, $c);
    return place_limit_order_(temp$4, temp$3, temp$2, temp$1, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $c, [$p[0], $p[1]]);
}
exports.place_limit_order_custodian_ = place_limit_order_custodian_;
function place_limit_order_post_match_(user_ref, order_book_ref_mut, market_account_id_ref, general_custodian_id_ref, lot_size_ref, tick_size_ref, side_ref, size_ref, price_ref, lots_filled_ref, immediate_or_cancel_ref, $c) {
    let temp$1, temp$2, temp$3, temp$4, new_spread_maker, order_id, size_to_fill, spread_maker_ref_mut, tree_ref_mut;
    if ($.copy(immediate_or_cancel_ref)) {
        temp$1 = true;
    }
    else {
        temp$1 = ($.copy(lots_filled_ref)).eq(($.copy(size_ref)));
    }
    if (temp$1) {
        return (0, move_to_ts_1.u128)("0");
    }
    else {
    }
    size_to_fill = ($.copy(size_ref)).sub($.copy(lots_filled_ref));
    order_id = Order_id.order_id_($.copy(price_ref), get_counter_(order_book_ref_mut, $c), $.copy(side_ref), $c);
    User.register_order_internal_($.copy(user_ref), $.copy(market_account_id_ref), $.copy(side_ref), $.copy(order_id), $.copy(size_to_fill), $.copy(price_ref), $.copy(lot_size_ref), $.copy(tick_size_ref), $c);
    if (($.copy(side_ref) == $.copy(exports.ASK))) {
        [temp$2, temp$3, temp$4] = [order_book_ref_mut.asks, ($.copy(order_id)).lt($.copy(order_book_ref_mut.min_ask)), order_book_ref_mut.min_ask];
    }
    else {
        [temp$2, temp$3, temp$4] = [order_book_ref_mut.bids, ($.copy(order_id)).gt($.copy(order_book_ref_mut.max_bid)), order_book_ref_mut.max_bid];
    }
    [tree_ref_mut, new_spread_maker, spread_maker_ref_mut] = [temp$2, temp$3, temp$4];
    if (new_spread_maker) {
        $.set(spread_maker_ref_mut, $.copy(order_id));
    }
    else {
    }
    Critbit.insert_(tree_ref_mut, $.copy(order_id), new Order({ size: $.copy(size_to_fill), user: $.copy(user_ref), general_custodian_id: $.copy(general_custodian_id_ref) }, new move_to_ts_2.SimpleStructTag(Order)), $c, [new move_to_ts_2.SimpleStructTag(Order)]);
    return $.copy(order_id);
}
exports.place_limit_order_post_match_ = place_limit_order_post_match_;
function place_limit_order_pre_match_(user_ref, order_book_ref, market_id_ref, general_custodian_id_ref, side_ref, size_ref, price_ref, post_or_abort_ref, fill_or_abort_ref, immediate_or_cancel_ref, market_account_id_ref_mut, lot_size_ref_mut, tick_size_ref_mut, direction_ref_mut, min_base_ref_mut, max_base_ref_mut, max_quote_ref_mut, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, base, crossed_spread, quote, quote_ceiling, ticks;
    if ($.copy(post_or_abort_ref)) {
        if ($.copy(fill_or_abort_ref)) {
            temp$1 = true;
        }
        else {
            temp$1 = $.copy(immediate_or_cancel_ref);
        }
        temp$3 = !temp$1;
    }
    else {
        if ($.copy(fill_or_abort_ref)) {
            temp$2 = $.copy(immediate_or_cancel_ref);
        }
        else {
            temp$2 = false;
        }
        temp$3 = !temp$2;
    }
    if (!temp$3) {
        throw $.abortCode($.copy(exports.E_TOO_MANY_ORDER_FLAGS));
    }
    if (($.copy(side_ref) == $.copy(exports.ASK))) {
        temp$4 = ($.copy(price_ref)).le(Order_id.price_($.copy(order_book_ref.max_bid), $c));
    }
    else {
        temp$4 = ($.copy(price_ref)).ge(Order_id.price_($.copy(order_book_ref.min_ask), $c));
    }
    crossed_spread = temp$4;
    if (!!($.copy(post_or_abort_ref) && crossed_spread)) {
        throw $.abortCode($.copy(exports.E_POST_OR_ABORT_CROSSED_SPREAD));
    }
    $.set(market_account_id_ref_mut, User.get_market_account_id_($.copy(market_id_ref), $.copy(general_custodian_id_ref), $c));
    if (($.copy(side_ref) == $.copy(exports.ASK))) {
        temp$5 = $.copy(exports.SELL);
    }
    else {
        temp$5 = $.copy(exports.BUY);
    }
    $.set(direction_ref_mut, temp$5);
    $.set(lot_size_ref_mut, $.copy(order_book_ref.lot_size));
    $.set(tick_size_ref_mut, $.copy(order_book_ref.tick_size));
    base = ((0, move_to_ts_1.u128)($.copy(size_ref))).mul((0, move_to_ts_1.u128)($.copy(lot_size_ref_mut)));
    if (!!($.copy(base)).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
        throw $.abortCode($.copy(exports.E_SIZE_BASE_OVERFLOW));
    }
    ticks = ((0, move_to_ts_1.u128)($.copy(size_ref))).mul((0, move_to_ts_1.u128)($.copy(price_ref)));
    if (!!($.copy(ticks)).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
        throw $.abortCode($.copy(exports.E_SIZE_TICKS_OVERFLOW));
    }
    quote = ($.copy(ticks)).mul((0, move_to_ts_1.u128)($.copy(tick_size_ref_mut)));
    if (!!($.copy(quote)).gt((0, move_to_ts_1.u128)($.copy(exports.HI_64)))) {
        throw $.abortCode($.copy(exports.E_SIZE_QUOTE_OVERFLOW));
    }
    $.set(max_base_ref_mut, (0, move_to_ts_1.u64)($.copy(base)));
    if ($.copy(fill_or_abort_ref)) {
        temp$6 = (0, move_to_ts_1.u64)($.copy(base));
    }
    else {
        temp$6 = (0, move_to_ts_1.u64)("0");
    }
    $.set(min_base_ref_mut, temp$6);
    if (crossed_spread) {
        temp$7 = ($.copy(side_ref) == $.copy(exports.ASK));
    }
    else {
        temp$7 = false;
    }
    if (temp$7) {
        [, , , , , quote_ceiling] = User.get_asset_counts_internal_($.copy(user_ref), $.copy(market_account_id_ref_mut), $c);
        $.set(max_quote_ref_mut, ($.copy(exports.HI_64)).sub($.copy(quote_ceiling)));
    }
    else {
        $.set(max_quote_ref_mut, (0, move_to_ts_1.u64)($.copy(quote)));
    }
    return;
}
exports.place_limit_order_pre_match_ = place_limit_order_pre_match_;
function place_limit_order_user_(user, host, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4, temp$5;
    temp$4 = Stdlib.Signer.address_of_(user, $c);
    temp$5 = temp$4;
    temp$3 = host;
    temp$2 = market_id;
    temp$1 = $.copy(exports.NO_CUSTODIAN);
    return place_limit_order_(temp$5, temp$3, temp$2, temp$1, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $c, [$p[0], $p[1]]);
}
exports.place_limit_order_user_ = place_limit_order_user_;
function buildPayload_place_limit_order_user(host, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "place_limit_order_user", typeParamStrings, [
        host,
        market_id,
        side,
        size,
        price,
        post_or_abort,
        fill_or_abort,
        immediate_or_cancel,
    ], isJSON);
}
exports.buildPayload_place_limit_order_user = buildPayload_place_limit_order_user;
function place_market_order_(user_ref, host_ref, market_id_ref, general_custodian_id_ref, direction_ref, min_base_ref, max_base_ref, min_quote_ref, max_quote_ref, limit_price_ref, $c, $p) {
    let base, lots_filled, market_account_id, order_book_ref_mut, order_books_map_ref_mut, quote, target_order_ids;
    verify_order_book_exists_($.copy(host_ref), $.copy(market_id_ref), $c);
    order_books_map_ref_mut = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host_ref)).map;
    order_book_ref_mut = Open_table.borrow_mut_(order_books_map_ref_mut, $.copy(market_id_ref), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)]);
    market_account_id = User.get_market_account_id_($.copy(market_id_ref), $.copy(general_custodian_id_ref), $c);
    lots_filled = (0, move_to_ts_1.u64)("0");
    target_order_ids = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    [base, quote] = match_from_market_account_(user_ref, market_account_id, market_id_ref, order_book_ref_mut, direction_ref, min_base_ref, max_base_ref, min_quote_ref, max_quote_ref, limit_price_ref, lots_filled, target_order_ids, $c, [$p[0], $p[1]]);
    return [$.copy(base), $.copy(quote), $.copy(target_order_ids)];
}
exports.place_market_order_ = place_market_order_;
function place_market_order_custodian_(user, host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, general_custodian_capability_ref, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4;
    temp$4 = user;
    temp$3 = host;
    temp$2 = market_id;
    temp$1 = Registry.custodian_id_(general_custodian_capability_ref, $c);
    return place_market_order_(temp$4, temp$3, temp$2, temp$1, direction, min_base, max_base, min_quote, max_quote, limit_price, $c, [$p[0], $p[1]]);
}
exports.place_market_order_custodian_ = place_market_order_custodian_;
function place_market_order_user_(user, host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4, temp$5;
    temp$4 = Stdlib.Signer.address_of_(user, $c);
    temp$5 = temp$4;
    temp$3 = host;
    temp$2 = market_id;
    temp$1 = $.copy(exports.NO_CUSTODIAN);
    return place_market_order_(temp$5, temp$3, temp$2, temp$1, direction, min_base, max_base, min_quote, max_quote, limit_price, $c, [$p[0], $p[1]]);
}
exports.place_market_order_user_ = place_market_order_user_;
function buildPayload_place_market_order_user(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "place_market_order_user", typeParamStrings, [
        host,
        market_id,
        direction,
        min_base,
        max_base,
        min_quote,
        max_quote,
        limit_price,
    ], isJSON);
}
exports.buildPayload_place_market_order_user = buildPayload_place_market_order_user;
function register_market_(host, lot_size, tick_size, generic_asset_transfer_custodian_id, $c, $p) {
    let market_id;
    market_id = Registry.register_market_internal_(Stdlib.Signer.address_of_(host, $c), $.copy(lot_size), $.copy(tick_size), $.copy(generic_asset_transfer_custodian_id), $c, [$p[0], $p[1]]);
    register_order_book_(host, $.copy(market_id), $.copy(lot_size), $.copy(tick_size), $.copy(generic_asset_transfer_custodian_id), $c, [$p[0], $p[1]]);
    return $.copy(market_id);
}
exports.register_market_ = register_market_;
function register_market_generic_(host, lot_size, tick_size, generic_asset_transfer_custodian_id, $c, $p) {
    register_market_(host, $.copy(lot_size), $.copy(tick_size), $.copy(generic_asset_transfer_custodian_id), $c, [$p[0], $p[1]]);
    return;
}
exports.register_market_generic_ = register_market_generic_;
function buildPayload_register_market_generic(lot_size, tick_size, generic_asset_transfer_custodian_id, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "register_market_generic", typeParamStrings, [
        lot_size,
        tick_size,
        generic_asset_transfer_custodian_id,
    ], isJSON);
}
exports.buildPayload_register_market_generic = buildPayload_register_market_generic;
function register_market_pure_coin_(host, lot_size, tick_size, $c, $p) {
    register_market_(host, $.copy(lot_size), $.copy(tick_size), $.copy(exports.PURE_COIN_PAIR), $c, [$p[0], $p[1]]);
    return;
}
exports.register_market_pure_coin_ = register_market_pure_coin_;
function buildPayload_register_market_pure_coin(lot_size, tick_size, $p, /* <BaseCoinType, QuoteCoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "register_market_pure_coin", typeParamStrings, [
        lot_size,
        tick_size,
    ], isJSON);
}
exports.buildPayload_register_market_pure_coin = buildPayload_register_market_pure_coin;
function register_order_book_(host, market_id, lot_size, tick_size, generic_asset_transfer_custodian_id, $c, $p) {
    let temp$1, temp$2, host_address, order_books_map_ref_mut;
    host_address = Stdlib.Signer.address_of_(host, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host_address))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(OrderBooks), host, new OrderBooks({ map: Open_table.empty_($c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)]) }, new move_to_ts_2.SimpleStructTag(OrderBooks)));
    }
    else {
    }
    order_books_map_ref_mut = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host_address)).map;
    [temp$1, temp$2] = [order_books_map_ref_mut, $.copy(market_id)];
    if (!!Open_table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)])) {
        throw $.abortCode($.copy(exports.E_ORDER_BOOK_EXISTS));
    }
    Open_table.add_(order_books_map_ref_mut, $.copy(market_id), new OrderBook({ base_type_info: Stdlib.Type_info.type_of_($c, [$p[0]]), quote_type_info: Stdlib.Type_info.type_of_($c, [$p[1]]), lot_size: $.copy(lot_size), tick_size: $.copy(tick_size), generic_asset_transfer_custodian_id: $.copy(generic_asset_transfer_custodian_id), asks: Critbit.empty_($c, [new move_to_ts_2.SimpleStructTag(Order)]), bids: Critbit.empty_($c, [new move_to_ts_2.SimpleStructTag(Order)]), min_ask: $.copy(exports.MIN_ASK_DEFAULT), max_bid: $.copy(exports.MAX_BID_DEFAULT), counter: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(OrderBook)), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)]);
    return;
}
exports.register_order_book_ = register_order_book_;
function swap_(host_ref, market_id_ref, direction_ref, min_base_ref, max_base_ref, min_quote_ref, max_quote_ref, limit_price_ref, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, base_filled_ref_mut, quote_filled_ref_mut, generic_asset_transfer_custodian_id_ref, target_order_ids_ref_mut, $c, $p) {
    let temp$1, temp$10, temp$11, temp$12, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, lot_size, lots_filled, order_book_ref_mut, order_books_map_ref_mut, tick_size, ticks_filled;
    verify_order_book_exists_($.copy(host_ref), $.copy(market_id_ref), $c);
    order_books_map_ref_mut = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host_ref)).map;
    order_book_ref_mut = Open_table.borrow_mut_(order_books_map_ref_mut, $.copy(market_id_ref), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)]);
    if (!($.copy(generic_asset_transfer_custodian_id_ref)).eq(($.copy(order_book_ref_mut.generic_asset_transfer_custodian_id)))) {
        throw $.abortCode($.copy(exports.E_INVALID_CUSTODIAN));
    }
    lot_size = $.copy(order_book_ref_mut.lot_size);
    tick_size = $.copy(order_book_ref_mut.tick_size);
    [lots_filled, ticks_filled] = [(0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0")];
    temp$12 = market_id_ref;
    temp$11 = order_book_ref_mut;
    temp$10 = lot_size;
    temp$9 = tick_size;
    temp$8 = direction_ref;
    temp$6 = ($.copy(min_base_ref)).div($.copy(lot_size));
    temp$7 = temp$6;
    temp$4 = ($.copy(max_base_ref)).div($.copy(lot_size));
    temp$5 = temp$4;
    temp$2 = ($.copy(min_quote_ref)).div($.copy(tick_size));
    temp$3 = temp$2;
    temp$1 = ($.copy(max_quote_ref)).div($.copy(tick_size));
    $.set(target_order_ids_ref_mut, match_(temp$12, temp$11, temp$10, temp$9, temp$8, temp$7, temp$5, temp$3, temp$1, limit_price_ref, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, lots_filled, ticks_filled, $c, [$p[0], $p[1]]));
    $.set(base_filled_ref_mut, ($.copy(lots_filled)).mul($.copy(lot_size)));
    $.set(quote_filled_ref_mut, ($.copy(ticks_filled)).mul($.copy(tick_size)));
    return;
}
exports.swap_ = swap_;
function swap_between_coinstores_(user, host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $c, $p) {
    let temp$1, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, base_filled_drop, base_value, optional_base_coins, optional_quote_coins, quote_filled_drop, quote_value, target_order_ids, user_address;
    user_address = Stdlib.Signer.address_of_(user, $c);
    if (!Stdlib.Coin.is_account_registered_($.copy(user_address), $c, [$p[0]])) {
        Stdlib.Coin.register_(user, $c, [$p[0]]);
    }
    else {
    }
    if (!Stdlib.Coin.is_account_registered_($.copy(user_address), $c, [$p[1]])) {
        Stdlib.Coin.register_(user, $c, [$p[1]]);
    }
    else {
    }
    base_value = Stdlib.Coin.balance_($.copy(user_address), $c, [$p[0]]);
    quote_value = Stdlib.Coin.balance_($.copy(user_address), $c, [$p[1]]);
    match_range_check_fills_(direction, min_base, max_base, min_quote, max_quote, base_value, base_value, quote_value, quote_value, $c);
    if ((direction == $.copy(exports.BUY))) {
        [temp$1, temp$2] = [Stdlib.Option.some_(Stdlib.Coin.zero_($c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), Stdlib.Option.some_(Stdlib.Coin.withdraw_(user, $.copy(max_quote), $c, [$p[1]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])])];
    }
    else {
        [temp$1, temp$2] = [Stdlib.Option.some_(Stdlib.Coin.withdraw_(user, $.copy(max_base), $c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), Stdlib.Option.some_(Stdlib.Coin.zero_($c, [$p[1]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])])];
    }
    [optional_base_coins, optional_quote_coins] = [temp$1, temp$2];
    [base_filled_drop, quote_filled_drop] = [(0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0")];
    target_order_ids = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    temp$15 = host;
    temp$14 = market_id;
    temp$13 = direction;
    temp$12 = min_base;
    temp$11 = max_base;
    temp$10 = min_quote;
    temp$9 = max_quote;
    temp$8 = limit_price;
    temp$7 = optional_base_coins;
    temp$6 = optional_quote_coins;
    temp$5 = base_filled_drop;
    temp$4 = quote_filled_drop;
    temp$3 = $.copy(exports.PURE_COIN_PAIR);
    swap_(temp$15, temp$14, temp$13, temp$12, temp$11, temp$10, temp$9, temp$8, temp$7, temp$6, temp$5, temp$4, temp$3, target_order_ids, $c, [$p[0], $p[1]]);
    Stdlib.Coin.deposit_($.copy(user_address), Stdlib.Option.destroy_some_(optional_base_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), $c, [$p[0]]);
    Stdlib.Coin.deposit_($.copy(user_address), Stdlib.Option.destroy_some_(optional_quote_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]), $c, [$p[1]]);
    return $.copy(target_order_ids);
}
exports.swap_between_coinstores_ = swap_between_coinstores_;
function buildPayload_swap_between_coinstores(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, /* <BaseCoinType, QuoteCoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "market", "swap_between_coinstores", typeParamStrings, [
        host,
        market_id,
        direction,
        min_base,
        max_base,
        min_quote,
        max_quote,
        limit_price,
    ], isJSON);
}
exports.buildPayload_swap_between_coinstores = buildPayload_swap_between_coinstores;
function swap_coins_(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, base_coins_ref_mut, quote_coins_ref_mut, $c, $p) {
    let temp$1, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, base_filled, base_value, optional_base_coins, optional_quote_coins, quote_filled, quote_value, target_order_ids;
    base_value = Stdlib.Coin.value_(base_coins_ref_mut, $c, [$p[0]]);
    quote_value = Stdlib.Coin.value_(quote_coins_ref_mut, $c, [$p[1]]);
    match_range_check_fills_(direction, min_base, max_base, min_quote, max_quote, base_value, base_value, quote_value, quote_value, $c);
    if ((direction == $.copy(exports.BUY))) {
        [temp$1, temp$2] = [Stdlib.Option.some_(Stdlib.Coin.zero_($c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), Stdlib.Option.some_(Stdlib.Coin.extract_(quote_coins_ref_mut, $.copy(max_quote), $c, [$p[1]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])])];
    }
    else {
        [temp$1, temp$2] = [Stdlib.Option.some_(Stdlib.Coin.extract_(base_coins_ref_mut, $.copy(max_base), $c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), Stdlib.Option.some_(Stdlib.Coin.zero_($c, [$p[1]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])])];
    }
    [optional_base_coins, optional_quote_coins] = [temp$1, temp$2];
    [base_filled, quote_filled] = [(0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0")];
    target_order_ids = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    temp$15 = host;
    temp$14 = market_id;
    temp$13 = direction;
    temp$12 = min_base;
    temp$11 = max_base;
    temp$10 = min_quote;
    temp$9 = max_quote;
    temp$8 = limit_price;
    temp$7 = optional_base_coins;
    temp$6 = optional_quote_coins;
    temp$5 = base_filled;
    temp$4 = quote_filled;
    temp$3 = $.copy(exports.PURE_COIN_PAIR);
    swap_(temp$15, temp$14, temp$13, temp$12, temp$11, temp$10, temp$9, temp$8, temp$7, temp$6, temp$5, temp$4, temp$3, target_order_ids, $c, [$p[0], $p[1]]);
    Stdlib.Coin.merge_(base_coins_ref_mut, Stdlib.Option.destroy_some_(optional_base_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), $c, [$p[0]]);
    Stdlib.Coin.merge_(quote_coins_ref_mut, Stdlib.Option.destroy_some_(optional_quote_coins, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]), $c, [$p[1]]);
    return [$.copy(base_filled), $.copy(quote_filled), $.copy(target_order_ids)];
}
exports.swap_coins_ = swap_coins_;
function swap_generic_(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, generic_asset_transfer_custodian_capability_ref, $c, $p) {
    let temp$1, temp$2, temp$3, temp$4, base_filled, base_is_coin, base_value, generic_asset_transfer_custodian_id, quote_filled, quote_is_coin, quote_value, target_order_ids;
    base_is_coin = Stdlib.Coin.is_coin_initialized_($c, [$p[0]]);
    quote_is_coin = Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
    if (!!(base_is_coin && quote_is_coin)) {
        throw $.abortCode($.copy(exports.E_BOTH_COINS));
    }
    if (!(base_is_coin == Stdlib.Option.is_some_(optional_base_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]))) {
        throw $.abortCode($.copy(exports.E_INVALID_OPTION_BASE));
    }
    if (!(quote_is_coin == Stdlib.Option.is_some_(optional_quote_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]))) {
        throw $.abortCode($.copy(exports.E_INVALID_OPTION_QUOTE));
    }
    if (base_is_coin) {
        temp$2 = Stdlib.Coin.value_(Stdlib.Option.borrow_(optional_base_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]), $c, [$p[0]]);
    }
    else {
        if ((direction == $.copy(exports.BUY))) {
            temp$1 = (0, move_to_ts_1.u64)("0");
        }
        else {
            temp$1 = $.copy(max_base);
        }
        temp$2 = temp$1;
    }
    base_value = temp$2;
    if (quote_is_coin) {
        temp$4 = Stdlib.Coin.value_(Stdlib.Option.borrow_(optional_quote_coins_ref_mut, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]), $c, [$p[1]]);
    }
    else {
        if ((direction == $.copy(exports.BUY))) {
            temp$3 = $.copy(max_quote);
        }
        else {
            temp$3 = (0, move_to_ts_1.u64)("0");
        }
        temp$4 = temp$3;
    }
    quote_value = temp$4;
    match_range_check_fills_(direction, min_base, max_base, min_quote, max_quote, base_value, base_value, quote_value, quote_value, $c);
    [base_filled, quote_filled] = [(0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0")];
    generic_asset_transfer_custodian_id = Registry.custodian_id_(generic_asset_transfer_custodian_capability_ref, $c);
    target_order_ids = Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U128]);
    swap_(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, base_filled, quote_filled, generic_asset_transfer_custodian_id, target_order_ids, $c, [$p[0], $p[1]]);
    return [$.copy(base_filled), $.copy(quote_filled), $.copy(target_order_ids)];
}
exports.swap_generic_ = swap_generic_;
function verify_order_book_exists_(host, market_id, $c) {
    let order_books_map_ref;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host))) {
        throw $.abortCode($.copy(exports.E_NO_ORDER_BOOKS));
    }
    order_books_map_ref = $c.borrow_global(new move_to_ts_2.SimpleStructTag(OrderBooks), $.copy(host)).map;
    if (!Open_table.contains_(order_books_map_ref, $.copy(market_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(OrderBook)])) {
        throw $.abortCode($.copy(exports.E_NO_ORDER_BOOK));
    }
    return;
}
exports.verify_order_book_exists_ = verify_order_book_exists_;
function loadParsers(repo) {
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::market::Order", Order.OrderParser);
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::market::OrderBook", OrderBook.OrderBookParser);
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::market::OrderBooks", OrderBooks.OrderBooksParser);
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
    get Order() { return Order; }
    get OrderBook() { return OrderBook; }
    get OrderBooks() { return OrderBooks; }
    loadOrderBooks(owner, loadFull = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield OrderBooks.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            return val;
        });
    }
    payload_cancel_all_limit_orders_user(host, market_id, side, isJSON = false) {
        return buildPayload_cancel_all_limit_orders_user(host, market_id, side, isJSON);
    }
    cancel_all_limit_orders_user(_account, host, market_id, side, _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_cancel_all_limit_orders_user(host, market_id, side, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
    payload_cancel_limit_order_user(host, market_id, side, order_id, isJSON = false) {
        return buildPayload_cancel_limit_order_user(host, market_id, side, order_id, isJSON);
    }
    cancel_limit_order_user(_account, host, market_id, side, order_id, _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_cancel_limit_order_user(host, market_id, side, order_id, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
    payload_place_limit_order_user(host, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
        return buildPayload_place_limit_order_user(host, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $p, isJSON);
    }
    place_limit_order_user(_account, host, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $p, /* <BaseType, QuoteType>*/ _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_place_limit_order_user(host, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
    payload_place_market_order_user(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
        return buildPayload_place_market_order_user(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, isJSON);
    }
    place_market_order_user(_account, host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, /* <BaseType, QuoteType>*/ _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_place_market_order_user(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
    payload_register_market_generic(lot_size, tick_size, generic_asset_transfer_custodian_id, $p, /* <BaseType, QuoteType>*/ isJSON = false) {
        return buildPayload_register_market_generic(lot_size, tick_size, generic_asset_transfer_custodian_id, $p, isJSON);
    }
    register_market_generic(_account, lot_size, tick_size, generic_asset_transfer_custodian_id, $p, /* <BaseType, QuoteType>*/ _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_register_market_generic(lot_size, tick_size, generic_asset_transfer_custodian_id, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
    payload_register_market_pure_coin(lot_size, tick_size, $p, /* <BaseCoinType, QuoteCoinType>*/ isJSON = false) {
        return buildPayload_register_market_pure_coin(lot_size, tick_size, $p, isJSON);
    }
    register_market_pure_coin(_account, lot_size, tick_size, $p, /* <BaseCoinType, QuoteCoinType>*/ _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_register_market_pure_coin(lot_size, tick_size, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
    payload_swap_between_coinstores(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, /* <BaseCoinType, QuoteCoinType>*/ isJSON = false) {
        return buildPayload_swap_between_coinstores(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, isJSON);
    }
    swap_between_coinstores(_account, host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, /* <BaseCoinType, QuoteCoinType>*/ _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_swap_between_coinstores(host, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
}
exports.App = App;
//# sourceMappingURL=market.js.map