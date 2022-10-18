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
exports.App = exports.loadParsers = exports.withdraw_coin_from_bid_with_address_ = exports.buildPayload_withdraw_coin_from_bid = exports.withdraw_coin_from_bid_ = exports.initialize_bid_records_ = exports.increase_bid_ = exports.get_bid_info_ = exports.get_bid_id_listing_id_ = exports.get_bid_id_address_ = exports.execute_listing_bid_ = exports.emit_order_executed_event_ = exports.deduct_fee_ = exports.create_bid_id_ = exports.clear_bid_ = exports.buildPayload_buy_from_owner_with_fee = exports.buy_from_owner_with_fee_ = exports.buy_from_listing_with_fee_ = exports.bid_ = exports.assert_bid_parameters_ = exports.WithdrawBidEvent = exports.OrderExecutedEvent = exports.IncreaseBidEvent = exports.BidRecords = exports.BidId = exports.BidEvent = exports.Bid = exports.ETOKEN_ID_NOT_MATCH = exports.ETOKEN_AMOUNT_NOT_MATCH = exports.ENO_SUFFICIENT_FUND = exports.ELISTING_NOT_STARTED = exports.ELISTING_ID_NOT_MATCH = exports.ELISTING_EXPIRED = exports.ECANNOT_DRAW_FUND_BEFORE_EXPIRATION_TIME = exports.EBUY_NON_INSTANT_SALE_LISTING = exports.EBUY_FROM_NOT_STARTED_LISTING = exports.EBUY_FROM_EXPIRED_LISTING = exports.EBID_NOT_EXIST = exports.EBID_ID_EXISTS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Aptos_token = __importStar(require("../aptos_token"));
const Stdlib = __importStar(require("../stdlib"));
const Auction_listing_utils = __importStar(require("./auction_listing_utils"));
exports.packageName = "Sonar";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "auction_bid_utils";
exports.EBID_ID_EXISTS = (0, move_to_ts_1.u64)("9");
exports.EBID_NOT_EXIST = (0, move_to_ts_1.u64)("6");
exports.EBUY_FROM_EXPIRED_LISTING = (0, move_to_ts_1.u64)("11");
exports.EBUY_FROM_NOT_STARTED_LISTING = (0, move_to_ts_1.u64)("12");
exports.EBUY_NON_INSTANT_SALE_LISTING = (0, move_to_ts_1.u64)("10");
exports.ECANNOT_DRAW_FUND_BEFORE_EXPIRATION_TIME = (0, move_to_ts_1.u64)("7");
exports.ELISTING_EXPIRED = (0, move_to_ts_1.u64)("3");
exports.ELISTING_ID_NOT_MATCH = (0, move_to_ts_1.u64)("8");
exports.ELISTING_NOT_STARTED = (0, move_to_ts_1.u64)("4");
exports.ENO_SUFFICIENT_FUND = (0, move_to_ts_1.u64)("1");
exports.ETOKEN_AMOUNT_NOT_MATCH = (0, move_to_ts_1.u64)("5");
exports.ETOKEN_ID_NOT_MATCH = (0, move_to_ts_1.u64)("2");
class Bid {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.coin = proto['coin'];
        this.offer_price = proto['offer_price'];
        this.expiration_sec = proto['expiration_sec'];
        this.config = proto['config'];
    }
    static BidParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Bid);
        return new Bid(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Bid", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            yield this.coin.loadFullState(app);
            yield this.config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Bid = Bid;
Bid.moduleAddress = exports.moduleAddress;
Bid.moduleName = exports.moduleName;
Bid.structName = "Bid";
Bid.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Bid.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", []) },
    { name: "coin", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [new $.TypeParamIdx(0)]) },
    { name: "offer_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "expiration_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "property_map", "PropertyMap", []) }
];
class BidEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.offer_price = proto['offer_price'];
        this.bid_id = proto['bid_id'];
        this.expiration_sec = proto['expiration_sec'];
    }
    static BidEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BidEvent);
        return new BidEvent(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BidEvent", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bid_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.BidEvent = BidEvent;
BidEvent.moduleAddress = exports.moduleAddress;
BidEvent.moduleName = exports.moduleName;
BidEvent.structName = "BidEvent";
BidEvent.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
BidEvent.fields = [
    { name: "offer_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bid_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", []) },
    { name: "expiration_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class BidId {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bidder = proto['bidder'];
        this.listing_id = proto['listing_id'];
    }
    static BidIdParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BidId);
        return new BidId(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BidId", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.listing_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.BidId = BidId;
BidId.moduleAddress = exports.moduleAddress;
BidId.moduleName = exports.moduleName;
BidId.structName = "BidId";
BidId.typeParameters = [];
BidId.fields = [
    { name: "bidder", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "listing_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []) }
];
class BidRecords {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.records = proto['records'];
        this.bid_event = proto['bid_event'];
        this.withdraw_bid_event = proto['withdraw_bid_event'];
        this.order_executed_event = proto['order_executed_event'];
        this.increase_bid_event = proto['increase_bid_event'];
    }
    static BidRecordsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BidRecords);
        return new BidRecords(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, BidRecords, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, BidRecords, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BidRecords", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.records.loadFullState(app);
            yield this.bid_event.loadFullState(app);
            yield this.withdraw_bid_event.loadFullState(app);
            yield this.order_executed_event.loadFullState(app);
            yield this.increase_bid_event.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.BidRecords = BidRecords;
BidRecords.moduleAddress = exports.moduleAddress;
BidRecords.moduleName = exports.moduleName;
BidRecords.structName = "BidRecords";
BidRecords.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
BidRecords.fields = [
    { name: "records", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "Bid", [new $.TypeParamIdx(0)])]) },
    { name: "bid_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidEvent", [new $.TypeParamIdx(0)])]) },
    { name: "withdraw_bid_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "WithdrawBidEvent", [new $.TypeParamIdx(0)])]) },
    { name: "order_executed_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "OrderExecutedEvent", [new $.TypeParamIdx(0)])]) },
    { name: "increase_bid_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "IncreaseBidEvent", [new $.TypeParamIdx(0)])]) }
];
class IncreaseBidEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.new_price = proto['new_price'];
        this.bid_id = proto['bid_id'];
    }
    static IncreaseBidEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, IncreaseBidEvent);
        return new IncreaseBidEvent(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "IncreaseBidEvent", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bid_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.IncreaseBidEvent = IncreaseBidEvent;
IncreaseBidEvent.moduleAddress = exports.moduleAddress;
IncreaseBidEvent.moduleName = exports.moduleName;
IncreaseBidEvent.structName = "IncreaseBidEvent";
IncreaseBidEvent.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
IncreaseBidEvent.fields = [
    { name: "new_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bid_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", []) }
];
class OrderExecutedEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.buyer = proto['buyer'];
        this.lister_address = proto['lister_address'];
        this.listing_creation_number = proto['listing_creation_number'];
        this.executed_price = proto['executed_price'];
        this.market_place_address = proto['market_place_address'];
    }
    static OrderExecutedEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OrderExecutedEvent);
        return new OrderExecutedEvent(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OrderExecutedEvent", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.OrderExecutedEvent = OrderExecutedEvent;
OrderExecutedEvent.moduleAddress = exports.moduleAddress;
OrderExecutedEvent.moduleName = exports.moduleName;
OrderExecutedEvent.structName = "OrderExecutedEvent";
OrderExecutedEvent.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
OrderExecutedEvent.fields = [
    { name: "buyer", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "lister_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "listing_creation_number", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "executed_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "market_place_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class WithdrawBidEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bid_id = proto['bid_id'];
    }
    static WithdrawBidEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, WithdrawBidEvent);
        return new WithdrawBidEvent(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "WithdrawBidEvent", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bid_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.WithdrawBidEvent = WithdrawBidEvent;
WithdrawBidEvent.moduleAddress = exports.moduleAddress;
WithdrawBidEvent.moduleName = exports.moduleName;
WithdrawBidEvent.structName = "WithdrawBidEvent";
WithdrawBidEvent.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
WithdrawBidEvent.fields = [
    { name: "bid_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", []) }
];
function assert_bid_parameters_(token_id, offer_price, token_amount, entry, bid_time, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let listed_amount, min_total, total_coin_amount;
        if (!$.deep_eq($.copy(token_id), yield Auction_listing_utils.get_listing_token_id_(entry, $c, [$p[0]]))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ETOKEN_ID_NOT_MATCH), $c));
        }
        listed_amount = yield Auction_listing_utils.get_listing_token_amount_(entry, $c, [$p[0]]);
        min_total = (yield Auction_listing_utils.get_listing_min_price_(entry, $c, [$p[0]])).mul($.copy(listed_amount));
        total_coin_amount = ($.copy(offer_price)).mul($.copy(token_amount));
        if (!($.copy(total_coin_amount)).ge($.copy(min_total))) {
            throw $.abortCode($.copy(exports.ENO_SUFFICIENT_FUND));
        }
        if (!($.copy(token_amount)).eq(($.copy(listed_amount)))) {
            throw $.abortCode($.copy(exports.ETOKEN_AMOUNT_NOT_MATCH));
        }
        if (!($.copy(bid_time)).ge(yield Auction_listing_utils.get_listing_start_(entry, $c, [$p[0]]))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ELISTING_NOT_STARTED), $c));
        }
        if (!($.copy(bid_time)).le(yield Auction_listing_utils.get_listing_expiration_(entry, $c, [$p[0]]))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ELISTING_EXPIRED), $c));
        }
        return;
    });
}
exports.assert_bid_parameters_ = assert_bid_parameters_;
function bid_(bidder, token_id, token_amount, offer_price, entry, expiration_sec, keys, values, types, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let bid, bid_id, bid_records, bidder_address, coin, total_coin_amount;
        yield initialize_bid_records_(bidder, $c, [$p[0]]);
        bidder_address = yield Stdlib.Signer.address_of_(bidder, $c);
        total_coin_amount = ($.copy(offer_price)).mul($.copy(token_amount));
        if (!(yield Stdlib.Coin.balance_($.copy(bidder_address), $c, [$p[0]])).ge($.copy(total_coin_amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENO_SUFFICIENT_FUND), $c));
        }
        yield assert_bid_parameters_($.copy(token_id), $.copy(total_coin_amount), $.copy(token_amount), entry, yield Stdlib.Timestamp.now_seconds_($c), $c, [$p[0]]);
        yield initialize_bid_records_(bidder, $c, [$p[0]]);
        bid_records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy(bidder_address));
        bid_id = yield create_bid_id_($.copy(bidder_address), yield Auction_listing_utils.get_listing_id_(entry, $c, [$p[0]]), $c);
        if (!!(yield Stdlib.Table.contains_((bid_records).records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.already_exists_($.copy(exports.EBID_ID_EXISTS), $c));
        }
        coin = yield Stdlib.Coin.withdraw_(bidder, $.copy(total_coin_amount), $c, [$p[0]]);
        bid = new Bid({ id: $.copy(bid_id), coin: coin, offer_price: $.copy(offer_price), expiration_sec: $.copy(expiration_sec), config: yield Aptos_token.Property_map.new___($.copy(keys), $.copy(values), $.copy(types), $c) }, new move_to_ts_2.SimpleStructTag(Bid, [$p[0]]));
        yield Stdlib.Table.add_((bid_records).records, $.copy(bid_id), bid, $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
        yield Aptos_token.Token.opt_in_direct_transfer_(bidder, true, $c);
        return $.copy(bid_id);
    });
}
exports.bid_ = bid_;
function buy_from_listing_with_fee_(buyer, entry, market_fund_address, fee_numerator, fee_denominator, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let buyer_addr, coins, expiration_sec, id, instant_sale, listed_amount, market_fee, min_price, now, required_balance, royalty, royalty_coin, royalty_payee, start_sec, token, token_id, token_owner, withdraw_cap;
        [id, token_id, listed_amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_cap,] = yield Auction_listing_utils.destroy_listing_(entry, $c, [$p[0]]);
        now = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(now)).gt($.copy(start_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EBUY_FROM_NOT_STARTED_LISTING), $c));
        }
        if (!($.copy(now)).lt($.copy(expiration_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EBUY_FROM_EXPIRED_LISTING), $c));
        }
        if (!instant_sale) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EBUY_NON_INSTANT_SALE_LISTING), $c));
        }
        buyer_addr = yield Stdlib.Signer.address_of_(buyer, $c);
        required_balance = ($.copy(min_price)).mul($.copy(listed_amount));
        if (!(yield Stdlib.Coin.balance_($.copy(buyer_addr), $c, [$p[0]])).ge($.copy(required_balance))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENO_SUFFICIENT_FUND), $c));
        }
        yield initialize_bid_records_(buyer, $c, [$p[0]]);
        token = yield Aptos_token.Token.withdraw_with_capability_(withdraw_cap, $c);
        yield Aptos_token.Token.deposit_token_(buyer, token, $c);
        coins = yield Stdlib.Coin.withdraw_(buyer, $.copy(required_balance), $c, [$p[0]]);
        royalty = yield Aptos_token.Token.get_royalty_($.copy(token_id), $c);
        royalty_payee = yield Aptos_token.Token.get_royalty_payee_(royalty, $c);
        royalty_coin = yield deduct_fee_(coins, yield Aptos_token.Token.get_royalty_numerator_(royalty, $c), yield Aptos_token.Token.get_royalty_denominator_(royalty, $c), $c, [$p[0]]);
        yield Stdlib.Coin.deposit_($.copy(royalty_payee), royalty_coin, $c, [$p[0]]);
        market_fee = yield deduct_fee_(coins, $.copy(fee_numerator), $.copy(fee_denominator), $c, [$p[0]]);
        yield Stdlib.Coin.deposit_($.copy(market_fund_address), market_fee, $c, [$p[0]]);
        token_owner = yield Stdlib.Guid.id_creator_address_(id, $c);
        yield Stdlib.Coin.deposit_($.copy(token_owner), coins, $c, [$p[0]]);
        yield emit_order_executed_event_($.copy(buyer_addr), $.copy(token_owner), yield Stdlib.Guid.id_creation_num_(id, $c), $.copy(min_price), $.copy(market_fund_address), $c, [$p[0]]);
        return;
    });
}
exports.buy_from_listing_with_fee_ = buy_from_listing_with_fee_;
function buy_from_owner_with_fee_(buyer, lister_address, listing_creation_number, market_fee_address, fee_numerator, fee_denominator, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let entry;
        entry = yield Auction_listing_utils.remove_listing_($.copy(lister_address), $.copy(listing_creation_number), $c, [$p[0]]);
        yield buy_from_listing_with_fee_(buyer, entry, $.copy(market_fee_address), $.copy(fee_numerator), $.copy(fee_denominator), $c, [$p[0]]);
        return;
    });
}
exports.buy_from_owner_with_fee_ = buy_from_owner_with_fee_;
function buildPayload_buy_from_owner_with_fee(lister_address, listing_creation_number, market_fee_address, fee_numerator, fee_denominator, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "buy_from_owner_with_fee", typeParamStrings, [
        lister_address,
        listing_creation_number,
        market_fee_address,
        fee_numerator,
        fee_denominator,
    ], isJSON);
}
exports.buildPayload_buy_from_owner_with_fee = buildPayload_buy_from_owner_with_fee;
function clear_bid_(bid, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let { coin: coin } = bid;
        return coin;
    });
}
exports.clear_bid_ = clear_bid_;
function create_bid_id_(bidder, listing_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new BidId({ bidder: $.copy(bidder), listing_id: $.copy(listing_id) }, new move_to_ts_2.SimpleStructTag(BidId));
    });
}
exports.create_bid_id_ = create_bid_id_;
function deduct_fee_(total_coin, fee_numerator, fee_denominator, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, fee, value;
        value = yield Stdlib.Coin.value_(total_coin, $c, [$p[0]]);
        if (($.copy(fee_denominator)).eq(((0, move_to_ts_1.u64)("0")))) {
            temp$1 = (0, move_to_ts_1.u64)("0");
        }
        else {
            temp$1 = (($.copy(value)).mul($.copy(fee_numerator))).div($.copy(fee_denominator));
        }
        fee = temp$1;
        return yield Stdlib.Coin.extract_(total_coin, $.copy(fee), $c, [$p[0]]);
    });
}
exports.deduct_fee_ = deduct_fee_;
function emit_order_executed_event_(buyer, lister_address, listing_creation_number, executed_price, market_place_address, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let records;
        records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy(buyer));
        return;
    });
}
exports.emit_order_executed_event_ = emit_order_executed_event_;
function execute_listing_bid_(bid_id, entry, market_fund_address, fee_numerator, fee_denominator, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, bid, bid_mut, bid_records, coin_owner, coins, expiration_sec, id, listed_amount, market_fee, min_price, min_total, now, offer_price, royalty, royalty_coin, royalty_payee, token, token_id, token_owner, withdraw_cap;
        bid_records = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy((bid_id).bidder))).records;
        [temp$1, temp$2] = [bid_records, $.copy(bid_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EBID_NOT_EXIST), $c));
        }
        [temp$3, temp$4] = [bid_records, $.copy(bid_id)];
        bid = yield Stdlib.Table.borrow_(temp$3, temp$4, $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
        [id, token_id, listed_amount, min_price, , , expiration_sec, withdraw_cap,] = yield Auction_listing_utils.destroy_listing_(entry, $c, [$p[0]]);
        coin_owner = $.copy(((bid).id).bidder);
        min_total = ($.copy(min_price)).mul($.copy(listed_amount));
        if (!(yield Stdlib.Coin.value_((bid).coin, $c, [$p[0]])).ge($.copy(min_total))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENO_SUFFICIENT_FUND), $c));
        }
        now = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(now)).ge($.copy(expiration_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ELISTING_EXPIRED), $c));
        }
        if (!$.deep_eq($.copy(id), $.copy(((bid).id).listing_id))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ELISTING_ID_NOT_MATCH), $c));
        }
        token = yield Aptos_token.Token.withdraw_with_capability_(withdraw_cap, $c);
        yield Aptos_token.Token.direct_deposit_with_opt_in_($.copy(coin_owner), token, $c);
        bid_mut = yield Stdlib.Table.remove_(bid_records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
        offer_price = $.copy((bid_mut).offer_price);
        coins = yield clear_bid_(bid_mut, $c, [$p[0]]);
        royalty = yield Aptos_token.Token.get_royalty_($.copy(token_id), $c);
        royalty_payee = yield Aptos_token.Token.get_royalty_payee_(royalty, $c);
        royalty_coin = yield deduct_fee_(coins, yield Aptos_token.Token.get_royalty_numerator_(royalty, $c), yield Aptos_token.Token.get_royalty_denominator_(royalty, $c), $c, [$p[0]]);
        yield Stdlib.Coin.deposit_($.copy(royalty_payee), royalty_coin, $c, [$p[0]]);
        market_fee = yield deduct_fee_(coins, $.copy(fee_numerator), $.copy(fee_denominator), $c, [$p[0]]);
        yield Stdlib.Coin.deposit_($.copy(market_fund_address), market_fee, $c, [$p[0]]);
        token_owner = yield Stdlib.Guid.id_creator_address_(id, $c);
        yield Stdlib.Coin.deposit_($.copy(token_owner), coins, $c, [$p[0]]);
        yield emit_order_executed_event_($.copy(coin_owner), $.copy(token_owner), yield Stdlib.Guid.id_creation_num_(id, $c), $.copy(offer_price), $.copy(market_fund_address), $c, [$p[0]]);
        return;
    });
}
exports.execute_listing_bid_ = execute_listing_bid_;
function get_bid_id_address_(bid_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((bid_id).bidder);
    });
}
exports.get_bid_id_address_ = get_bid_id_address_;
function get_bid_id_listing_id_(bid_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((bid_id).listing_id);
    });
}
exports.get_bid_id_listing_id_ = get_bid_id_listing_id_;
function get_bid_info_(bid_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, bid, bid_records;
        bid_records = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy((bid_id).bidder))).records;
        [temp$1, temp$2] = [bid_records, $.copy(bid_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EBID_NOT_EXIST), $c));
        }
        [temp$3, temp$4] = [bid_records, $.copy(bid_id)];
        bid = yield Stdlib.Table.borrow_(temp$3, temp$4, $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
        return [$.copy((bid).offer_price), $.copy((bid).expiration_sec)];
    });
}
exports.get_bid_info_ = get_bid_info_;
function increase_bid_(bidder, bid_id, price_delta, entry, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let added_amount, added_coin, bid, bid_records, bidder_address, listing_id, token_amount;
        bidder_address = yield Stdlib.Signer.address_of_(bidder, $c);
        bid_records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy(bidder_address));
        if (!(yield Stdlib.Table.contains_((bid_records).records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EBID_NOT_EXIST), $c));
        }
        listing_id = yield Auction_listing_utils.get_listing_id_(entry, $c, [$p[0]]);
        if (!$.deep_eq($.copy((bid_id).listing_id), $.copy(listing_id))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ELISTING_ID_NOT_MATCH), $c));
        }
        token_amount = yield Auction_listing_utils.get_listing_token_amount_(entry, $c, [$p[0]]);
        added_amount = ($.copy(price_delta)).mul($.copy(token_amount));
        if (!(yield Stdlib.Coin.balance_($.copy(bidder_address), $c, [$p[0]])).ge($.copy(added_amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENO_SUFFICIENT_FUND), $c));
        }
        added_coin = yield Stdlib.Coin.withdraw_(bidder, $.copy(added_amount), $c, [$p[0]]);
        bid = yield Stdlib.Table.borrow_mut_((bid_records).records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
        (bid).offer_price = ($.copy((bid).offer_price)).add($.copy(price_delta));
        yield Stdlib.Coin.merge_((bid).coin, added_coin, $c, [$p[0]]);
        return;
    });
}
exports.increase_bid_ = increase_bid_;
function initialize_bid_records_(bidder, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, owner_addr;
        owner_addr = yield Stdlib.Signer.address_of_(bidder, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy(owner_addr)))) {
            temp$6 = bidder;
            temp$1 = yield Stdlib.Table.new___($c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
            temp$2 = yield Stdlib.Account.new_event_handle_(bidder, $c, [new move_to_ts_2.SimpleStructTag(BidEvent, [$p[0]])]);
            temp$3 = yield Stdlib.Account.new_event_handle_(bidder, $c, [new move_to_ts_2.SimpleStructTag(WithdrawBidEvent, [$p[0]])]);
            temp$4 = yield Stdlib.Account.new_event_handle_(bidder, $c, [new move_to_ts_2.SimpleStructTag(IncreaseBidEvent, [$p[0]])]);
            temp$5 = yield Stdlib.Account.new_event_handle_(bidder, $c, [new move_to_ts_2.SimpleStructTag(OrderExecutedEvent, [$p[0]])]);
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), temp$6, new BidRecords({ records: temp$1, bid_event: temp$2, withdraw_bid_event: temp$3, order_executed_event: temp$5, increase_bid_event: temp$4 }, new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]])));
        }
        else {
        }
        return;
    });
}
exports.initialize_bid_records_ = initialize_bid_records_;
function withdraw_coin_from_bid_(bidder, lister_addr, listing_creation_number, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let bid, bid_id, bid_records, bidder_address, listing_id;
        bidder_address = yield Stdlib.Signer.address_of_(bidder, $c);
        listing_id = yield Auction_listing_utils.create_listing_id_raw_($.copy(lister_addr), $.copy(listing_creation_number), $c);
        bid_id = yield create_bid_id_($.copy(bidder_address), $.copy(listing_id), $c);
        bid_records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy(bidder_address));
        if (!(yield Stdlib.Table.contains_((bid_records).records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EBID_NOT_EXIST), $c));
        }
        bid = yield Stdlib.Table.remove_((bid_records).records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
        if (!(yield Stdlib.Timestamp.now_seconds_($c)).gt($.copy((bid).expiration_sec))) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.ECANNOT_DRAW_FUND_BEFORE_EXPIRATION_TIME), $c));
        }
        yield Stdlib.Coin.deposit_($.copy(bidder_address), yield clear_bid_(bid, $c, [$p[0]]), $c, [$p[0]]);
        return;
    });
}
exports.withdraw_coin_from_bid_ = withdraw_coin_from_bid_;
function buildPayload_withdraw_coin_from_bid(lister_addr, listing_creation_number, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "withdraw_coin_from_bid", typeParamStrings, [
        lister_addr,
        listing_creation_number,
    ], isJSON);
}
exports.buildPayload_withdraw_coin_from_bid = buildPayload_withdraw_coin_from_bid;
function withdraw_coin_from_bid_with_address_(bidder_address, lister_addr, listing_creation_number, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let bid, bid_id, bid_records, listing_id;
        listing_id = yield Auction_listing_utils.create_listing_id_raw_($.copy(lister_addr), $.copy(listing_creation_number), $c);
        bid_id = yield create_bid_id_($.copy(bidder_address), $.copy(listing_id), $c);
        bid_records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(BidRecords, [$p[0]]), $.copy(bidder_address));
        if (!(yield Stdlib.Table.contains_((bid_records).records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EBID_NOT_EXIST), $c));
        }
        bid = yield Stdlib.Table.remove_((bid_records).records, $.copy(bid_id), $c, [new move_to_ts_2.SimpleStructTag(BidId), new move_to_ts_2.SimpleStructTag(Bid, [$p[0]])]);
        if (!(yield Stdlib.Timestamp.now_seconds_($c)).gt($.copy((bid).expiration_sec))) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.ECANNOT_DRAW_FUND_BEFORE_EXPIRATION_TIME), $c));
        }
        yield Stdlib.Coin.deposit_($.copy(bidder_address), yield clear_bid_(bid, $c, [$p[0]]), $c, [$p[0]]);
        return;
    });
}
exports.withdraw_coin_from_bid_with_address_ = withdraw_coin_from_bid_with_address_;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_bid_utils::Bid", Bid.BidParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_bid_utils::BidEvent", BidEvent.BidEventParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_bid_utils::BidId", BidId.BidIdParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_bid_utils::BidRecords", BidRecords.BidRecordsParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_bid_utils::IncreaseBidEvent", IncreaseBidEvent.IncreaseBidEventParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_bid_utils::OrderExecutedEvent", OrderExecutedEvent.OrderExecutedEventParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_bid_utils::WithdrawBidEvent", WithdrawBidEvent.WithdrawBidEventParser);
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
    get Bid() { return Bid; }
    get BidEvent() { return BidEvent; }
    get BidId() { return BidId; }
    get BidRecords() { return BidRecords; }
    loadBidRecords(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield BidRecords.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get IncreaseBidEvent() { return IncreaseBidEvent; }
    get OrderExecutedEvent() { return OrderExecutedEvent; }
    get WithdrawBidEvent() { return WithdrawBidEvent; }
    payload_buy_from_owner_with_fee(lister_address, listing_creation_number, market_fee_address, fee_numerator, fee_denominator, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_buy_from_owner_with_fee(lister_address, listing_creation_number, market_fee_address, fee_numerator, fee_denominator, $p, isJSON);
    }
    buy_from_owner_with_fee(_account, lister_address, listing_creation_number, market_fee_address, fee_numerator, fee_denominator, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_buy_from_owner_with_fee(lister_address, listing_creation_number, market_fee_address, fee_numerator, fee_denominator, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_withdraw_coin_from_bid(lister_addr, listing_creation_number, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_withdraw_coin_from_bid(lister_addr, listing_creation_number, $p, isJSON);
    }
    withdraw_coin_from_bid(_account, lister_addr, listing_creation_number, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_withdraw_coin_from_bid(lister_addr, listing_creation_number, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=auction_bid_utils.js.map