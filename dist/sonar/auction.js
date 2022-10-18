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
exports.App = exports.loadParsers = exports.buildPayload_withdraw_coin_from_bid = exports.withdraw_coin_from_bid_ = exports.remove_auction_friend_ = exports.remove_auction_ = exports.buildPayload_initialize_auction_house = exports.initialize_auction_house_ = exports.buildPayload_initialize_auction = exports.initialize_auction_ = exports.increase_bid_price_ = exports.buildPayload_increase_bid = exports.increase_bid_ = exports.get_auction_listing_id_ = exports.generate_auction_data_ = exports.find_highest_bid_ = exports.create_bid_with_token_id_ = exports.create_auction_with_token_id_ = exports.buildPayload_create_auction = exports.create_auction_ = exports.complete_auction_friend_ = exports.buildPayload_complete_auction = exports.complete_auction_ = exports.buildPayload_cancel_bid_in_auction = exports.cancel_bid_in_auction_ = exports.buildPayload_bid = exports.bid_ = exports.CancelBidEvent = exports.BidEvent = exports.Auctions = exports.AuctionHouseConfig = exports.Auction = exports.EONLY_AUCTION_HOUSE_OWNER_CAN_PERFORM_THIS_OPERATION = exports.EINVALID_START_TIME = exports.EINVALID_EXPIRATION_TIME = exports.EBID_WITH_SAME_PRICE_EXISTS = exports.EBID_NOT_MATCH_ID_IN_AUCTION = exports.EBID_NOT_FOUND_FOR_AUCTION = exports.EBID_MIN_INCREMENTAL_IS_ZERO = exports.EBID_INCREASE_TOO_SMALL = exports.EAUCTION_NOT_EXIST = exports.EAUCTION_NOT_ENDED = exports.EAUCTION_HIGHEST_BID_ZERO = exports.EAUCTION_ENDED = exports.EAUCION_HAS_ZERO_BIDS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Aptos_token = __importStar(require("../aptos_token"));
const Stdlib = __importStar(require("../stdlib"));
const Auction_bid_utils = __importStar(require("./auction_bid_utils"));
const Auction_listing_utils = __importStar(require("./auction_listing_utils"));
exports.packageName = "Sonar";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "auction";
exports.EAUCION_HAS_ZERO_BIDS = (0, move_to_ts_1.u64)("12");
exports.EAUCTION_ENDED = (0, move_to_ts_1.u64)("5");
exports.EAUCTION_HIGHEST_BID_ZERO = (0, move_to_ts_1.u64)("13");
exports.EAUCTION_NOT_ENDED = (0, move_to_ts_1.u64)("9");
exports.EAUCTION_NOT_EXIST = (0, move_to_ts_1.u64)("3");
exports.EBID_INCREASE_TOO_SMALL = (0, move_to_ts_1.u64)("4");
exports.EBID_MIN_INCREMENTAL_IS_ZERO = (0, move_to_ts_1.u64)("6");
exports.EBID_NOT_FOUND_FOR_AUCTION = (0, move_to_ts_1.u64)("7");
exports.EBID_NOT_MATCH_ID_IN_AUCTION = (0, move_to_ts_1.u64)("11");
exports.EBID_WITH_SAME_PRICE_EXISTS = (0, move_to_ts_1.u64)("10");
exports.EINVALID_EXPIRATION_TIME = (0, move_to_ts_1.u64)("1");
exports.EINVALID_START_TIME = (0, move_to_ts_1.u64)("2");
exports.EONLY_AUCTION_HOUSE_OWNER_CAN_PERFORM_THIS_OPERATION = (0, move_to_ts_1.u64)("8");
class Auction {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.listing = proto['listing'];
        this.bids = proto['bids'];
        this.offer_numbers = proto['offer_numbers'];
    }
    static AuctionParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Auction);
        return new Auction(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Auction", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.listing.loadFullState(app);
            yield this.bids.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Auction = Auction;
Auction.moduleAddress = exports.moduleAddress;
Auction.moduleName = exports.moduleName;
Auction.structName = "Auction";
Auction.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Auction.fields = [
    { name: "listing", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "Listing", [new $.TypeParamIdx(0)]) },
    { name: "bids", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]) },
    { name: "offer_numbers", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U64) }
];
class AuctionHouseConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.market_fee_numerator = proto['market_fee_numerator'];
        this.market_fee_denominator = proto['market_fee_denominator'];
        this.fee_address = proto['fee_address'];
    }
    static AuctionHouseConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AuctionHouseConfig);
        return new AuctionHouseConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, AuctionHouseConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, AuctionHouseConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AuctionHouseConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.AuctionHouseConfig = AuctionHouseConfig;
AuctionHouseConfig.moduleAddress = exports.moduleAddress;
AuctionHouseConfig.moduleName = exports.moduleName;
AuctionHouseConfig.structName = "AuctionHouseConfig";
AuctionHouseConfig.typeParameters = [];
AuctionHouseConfig.fields = [
    { name: "market_fee_numerator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "market_fee_denominator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "fee_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class Auctions {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.cur_auction_id = proto['cur_auction_id'];
        this.all_active_auctions = proto['all_active_auctions'];
        this.listing_event = proto['listing_event'];
        this.bid_event = proto['bid_event'];
        this.cancel_bid_events = proto['cancel_bid_events'];
    }
    static AuctionsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Auctions);
        return new Auctions(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Auctions, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Auctions, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Auctions", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.all_active_auctions.loadFullState(app);
            yield this.listing_event.loadFullState(app);
            yield this.bid_event.loadFullState(app);
            yield this.cancel_bid_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Auctions = Auctions;
Auctions.moduleAddress = exports.moduleAddress;
Auctions.moduleName = exports.moduleName;
Auctions.structName = "Auctions";
Auctions.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Auctions.fields = [
    { name: "cur_auction_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "all_active_auctions", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "Auction", [new $.TypeParamIdx(0)])]) },
    { name: "listing_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "ListingEvent", [])]) },
    { name: "bid_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "BidEvent", [])]) },
    { name: "cancel_bid_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "CancelBidEvent", [])]) }
];
class BidEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.market_address = proto['market_address'];
        this.bid_id = proto['bid_id'];
        this.offer_price = proto['offer_price'];
        this.expiration_sec = proto['expiration_sec'];
    }
    static BidEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BidEvent);
        return new BidEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BidEvent", []);
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
BidEvent.typeParameters = [];
BidEvent.fields = [
    { name: "market_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "bid_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", []) },
    { name: "offer_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "expiration_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class CancelBidEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.market_address = proto['market_address'];
        this.bid_id = proto['bid_id'];
    }
    static CancelBidEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CancelBidEvent);
        return new CancelBidEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CancelBidEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bid_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CancelBidEvent = CancelBidEvent;
CancelBidEvent.moduleAddress = exports.moduleAddress;
CancelBidEvent.moduleName = exports.moduleName;
CancelBidEvent.structName = "CancelBidEvent";
CancelBidEvent.typeParameters = [];
CancelBidEvent.fields = [
    { name: "market_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "bid_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", []) }
];
function bid_(bidder, creator, collection_name, token_name, property_version, token_amount, offer_price, auction_id, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Aptos_token.Token.create_token_id_raw_($.copy(creator), $.copy(collection_name), $.copy(token_name), $.copy(property_version), $c);
        yield create_bid_with_token_id_(bidder, $.copy(token_id), $.copy(token_amount), $.copy(offer_price), $.copy(auction_id), $.copy(withdraw_expiration_sec), $c, [$p[0]]);
        return;
    });
}
exports.bid_ = bid_;
function buildPayload_bid(creator, collection_name, token_name, property_version, token_amount, offer_price, auction_id, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "bid", typeParamStrings, [
        creator,
        collection_name,
        token_name,
        property_version,
        token_amount,
        offer_price,
        auction_id,
        withdraw_expiration_sec,
    ], isJSON);
}
exports.buildPayload_bid = buildPayload_bid;
function cancel_bid_in_auction_(bidder, auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, auction, auctions, bid_id, bidder_address, found, index, listing_id, now, offer_price;
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        if (!(yield Stdlib.Table.contains_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EAUCTION_NOT_EXIST), $c));
        }
        auction = yield Stdlib.Table.borrow_mut_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        now = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(now)).lt(yield Auction_listing_utils.get_listing_expiration_((auction).listing, $c, [$p[0]]))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EAUCTION_ENDED), $c));
        }
        listing_id = yield Auction_listing_utils.get_listing_id_((auction).listing, $c, [$p[0]]);
        bidder_address = yield Stdlib.Signer.address_of_(bidder, $c);
        bid_id = yield Auction_bid_utils.create_bid_id_($.copy(bidder_address), $.copy(listing_id), $c);
        [offer_price,] = yield Auction_bid_utils.get_bid_info_($.copy(bid_id), $c, [$p[0]]);
        [temp$1, temp$2] = [(auction).bids, offer_price];
        if (!(yield Stdlib.Simple_map.contains_key_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EBID_NOT_FOUND_FOR_AUCTION), $c));
        }
        [temp$3, temp$4] = [(auction).bids, offer_price];
        if (!$.deep_eq($.copy(yield Stdlib.Simple_map.borrow_(temp$3, temp$4, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])])), $.copy(bid_id))) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EBID_NOT_MATCH_ID_IN_AUCTION), $c));
        }
        yield Stdlib.Simple_map.remove_((auction).bids, offer_price, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]);
        [temp$5, temp$6] = [(auction).offer_numbers, offer_price];
        [found, index] = yield Stdlib.Vector.index_of_(temp$5, temp$6, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        if (!found) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EBID_NOT_FOUND_FOR_AUCTION), $c));
        }
        yield Stdlib.Vector.swap_remove_((auction).offer_numbers, $.copy(index), $c, [move_to_ts_2.AtomicTypeTag.U64]);
        return;
    });
}
exports.cancel_bid_in_auction_ = cancel_bid_in_auction_;
function buildPayload_cancel_bid_in_auction(auction_id, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "cancel_bid_in_auction", typeParamStrings, [
        auction_id,
    ], isJSON);
}
exports.buildPayload_cancel_bid_in_auction = buildPayload_cancel_bid_in_auction;
function complete_auction_(account, auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let auction, auction__1, auctions, config, expiration_time, highest_bid_id, now;
        if (!((yield Stdlib.Signer.address_of_(account, $c)).hex() === (new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")).hex())) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EONLY_AUCTION_HOUSE_OWNER_CAN_PERFORM_THIS_OPERATION), $c));
        }
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        if (!(yield Stdlib.Table.contains_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EAUCTION_NOT_EXIST), $c));
        }
        auction = yield Stdlib.Table.borrow_mut_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        expiration_time = yield Auction_listing_utils.get_listing_expiration_((auction).listing, $c, [$p[0]]);
        now = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(now)).ge($.copy(expiration_time))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.EAUCTION_NOT_ENDED), $c));
        }
        config = yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(AuctionHouseConfig), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        auction__1 = yield remove_auction_(account, $.copy(auction_id), $c, [$p[0]]);
        highest_bid_id = yield find_highest_bid_(auction__1, $c, [$p[0]]);
        let { listing: listing, bids: bids } = auction__1;
        if ((yield Stdlib.Simple_map.length_(bids, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])])).gt((0, move_to_ts_1.u64)("0"))) {
            yield Auction_bid_utils.execute_listing_bid_($.copy(highest_bid_id), listing, $.copy((config).fee_address), $.copy((config).market_fee_numerator), $.copy((config).market_fee_denominator), $c, [$p[0]]);
        }
        else {
        }
        return;
    });
}
exports.complete_auction_ = complete_auction_;
function buildPayload_complete_auction(auction_id, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "complete_auction", typeParamStrings, [
        auction_id,
    ], isJSON);
}
exports.buildPayload_complete_auction = buildPayload_complete_auction;
function complete_auction_friend_(auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let auction, auction__1, auctions, bid_id, bidder, config, expiration_time, highest_bid_id, listing_id, now, offer_number;
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        if (!(yield Stdlib.Table.contains_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EAUCTION_NOT_EXIST), $c));
        }
        auction = yield Stdlib.Table.borrow_mut_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        expiration_time = yield Auction_listing_utils.get_listing_expiration_((auction).listing, $c, [$p[0]]);
        now = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(now)).ge($.copy(expiration_time))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.EAUCTION_NOT_ENDED), $c));
        }
        config = yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(AuctionHouseConfig), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        auction__1 = yield remove_auction_friend_($.copy(auction_id), $c, [$p[0]]);
        highest_bid_id = yield find_highest_bid_(auction__1, $c, [$p[0]]);
        let { listing: listing, bids: bids, offer_numbers: offer_numbers } = auction__1;
        if ((yield Stdlib.Simple_map.length_(bids, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])])).gt((0, move_to_ts_1.u64)("0"))) {
            yield Auction_bid_utils.execute_listing_bid_($.copy(highest_bid_id), listing, $.copy((config).fee_address), $.copy((config).market_fee_numerator), $.copy((config).market_fee_denominator), $c, [$p[0]]);
        }
        else {
        }
        listing_id = yield get_auction_listing_id_($.copy(auction_id), $c, [$p[0]]);
        while ((yield Stdlib.Vector.length_(offer_numbers, $c, [move_to_ts_2.AtomicTypeTag.U64])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                offer_number = yield Stdlib.Vector.pop_back_(offer_numbers, $c, [move_to_ts_2.AtomicTypeTag.U64]);
                bid_id = yield Stdlib.Simple_map.borrow_(bids, offer_number, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]);
                bidder = yield Auction_bid_utils.get_bid_id_address_(bid_id, $c);
                yield Auction_bid_utils.withdraw_coin_from_bid_with_address_($.copy(bidder), yield Stdlib.Guid.id_creator_address_(listing_id, $c), yield Stdlib.Guid.id_creation_num_(listing_id, $c), $c, [$p[0]]);
            }
        }
        return;
    });
}
exports.complete_auction_friend_ = complete_auction_friend_;
function create_auction_(owner, creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Aptos_token.Token.create_token_id_raw_($.copy(creator), $.copy(collection_name), $.copy(token_name), $.copy(property_version), $c);
        yield create_auction_with_token_id_(owner, $.copy(token_id), $.copy(amount), $.copy(min_price), $.copy(start_sec), $.copy(expiration_sec), $.copy(withdraw_expiration_sec), $c, [$p[0]]);
        return;
    });
}
exports.create_auction_ = create_auction_;
function buildPayload_create_auction(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "create_auction", typeParamStrings, [
        creator,
        collection_name,
        token_name,
        property_version,
        amount,
        min_price,
        start_sec,
        expiration_sec,
        withdraw_expiration_sec,
    ], isJSON);
}
exports.buildPayload_create_auction = buildPayload_create_auction;
function create_auction_with_token_id_(owner, token_id, amount, min_price, start_sec, listing_expiration_sec, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let auction, auctions, next_id;
        auction = yield generate_auction_data_(owner, $.copy(token_id), $.copy(amount), $.copy(min_price), $.copy(start_sec), $.copy(listing_expiration_sec), $.copy(withdraw_expiration_sec), $c, [$p[0]]);
        if (!(yield Stdlib.Coin.is_account_registered_(yield Stdlib.Signer.address_of_(owner, $c), $c, [$p[0]]))) {
            yield Stdlib.Coin.register_(owner, $c, [$p[0]]);
        }
        else {
        }
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        next_id = ($.copy((auctions).cur_auction_id)).add((0, move_to_ts_1.u64)("1"));
        (auctions).cur_auction_id = $.copy(next_id);
        yield Stdlib.Table.add_((auctions).all_active_auctions, $.copy(next_id), auction, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        return $.copy(next_id);
    });
}
exports.create_auction_with_token_id_ = create_auction_with_token_id_;
function create_bid_with_token_id_(bidder, token_id, token_amount, offer_price, auction_id, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, auction, auctions, bid_id, now;
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        [temp$1, temp$2] = [(auctions).all_active_auctions, $.copy(auction_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EAUCTION_NOT_EXIST), $c));
        }
        auction = yield Stdlib.Table.borrow_mut_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        yield Aptos_token.Token.initialize_token_store_(bidder, $c);
        now = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(now)).le(yield Auction_listing_utils.get_listing_expiration_((auction).listing, $c, [$p[0]]))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EAUCTION_ENDED), $c));
        }
        if (!!(yield Stdlib.Simple_map.contains_key_((auction).bids, offer_price, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]))) {
            throw $.abortCode(yield Stdlib.Error.already_exists_($.copy(exports.EBID_WITH_SAME_PRICE_EXISTS), $c));
        }
        bid_id = yield Auction_bid_utils.bid_(bidder, $.copy(token_id), $.copy(token_amount), ($.copy(offer_price)).mul($.copy(token_amount)), (auction).listing, $.copy(withdraw_expiration_sec), [], [], [], $c, [$p[0]]);
        yield Stdlib.Simple_map.add_((auction).bids, $.copy(offer_price), $.copy(bid_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]);
        yield Stdlib.Vector.push_back_((auction).offer_numbers, $.copy(offer_price), $c, [move_to_ts_2.AtomicTypeTag.U64]);
        return $.copy(bid_id);
    });
}
exports.create_bid_with_token_id_ = create_bid_with_token_id_;
function find_highest_bid_(auction, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let highest_price, ind, price;
        if (!(yield Stdlib.Simple_map.length_((auction).bids, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])])).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.EAUCION_HAS_ZERO_BIDS), $c));
        }
        highest_price = (0, move_to_ts_1.u64)("0");
        ind = (0, move_to_ts_1.u64)("0");
        while (($.copy(ind)).lt(yield Stdlib.Vector.length_((auction).offer_numbers, $c, [move_to_ts_2.AtomicTypeTag.U64]))) {
            {
                price = $.copy(yield Stdlib.Vector.borrow_((auction).offer_numbers, $.copy(ind), $c, [move_to_ts_2.AtomicTypeTag.U64]));
                if (($.copy(price)).gt($.copy(highest_price))) {
                    highest_price = $.copy(price);
                }
                else {
                }
                ind = ($.copy(ind)).add((0, move_to_ts_1.u64)("1"));
            }
        }
        if (!($.copy(highest_price)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.EAUCTION_HIGHEST_BID_ZERO), $c));
        }
        return $.copy(yield Stdlib.Simple_map.borrow_((auction).bids, highest_price, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]));
    });
}
exports.find_highest_bid_ = find_highest_bid_;
function generate_auction_data_(owner, token_id, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let listing, sec;
        sec = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(sec)).le($.copy(start_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EINVALID_START_TIME), $c));
        }
        if (!($.copy(start_sec)).lt($.copy(expiration_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EINVALID_EXPIRATION_TIME), $c));
        }
        listing = yield Auction_listing_utils.create_listing_(owner, $.copy(token_id), $.copy(amount), $.copy(min_price), false, $.copy(start_sec), $.copy(expiration_sec), $.copy(withdraw_expiration_sec), [], [], [], $c, [$p[0]]);
        return new Auction({ listing: listing, bids: yield Stdlib.Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]), offer_numbers: yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]) }, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]]));
    });
}
exports.generate_auction_data_ = generate_auction_data_;
function get_auction_listing_id_(auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let auction, auctions;
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        if (!(yield Stdlib.Table.contains_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EAUCTION_NOT_EXIST), $c));
        }
        auction = yield Stdlib.Table.borrow_mut_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        return yield Auction_listing_utils.get_listing_id_((auction).listing, $c, [$p[0]]);
    });
}
exports.get_auction_listing_id_ = get_auction_listing_id_;
function increase_bid_(bidder, price_delta, auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, auction, auctions, bid_id, listing_id;
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        [temp$1, temp$2] = [(auctions).all_active_auctions, $.copy(auction_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EAUCTION_NOT_EXIST), $c));
        }
        auction = yield Stdlib.Table.borrow_mut_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        listing_id = yield Auction_listing_utils.get_listing_id_((auction).listing, $c, [$p[0]]);
        bid_id = yield Auction_bid_utils.create_bid_id_(yield Stdlib.Signer.address_of_(bidder, $c), $.copy(listing_id), $c);
        return yield increase_bid_price_(bidder, $.copy(bid_id), $.copy(price_delta), $.copy(auction_id), $c, [$p[0]]);
    });
}
exports.increase_bid_ = increase_bid_;
function buildPayload_increase_bid(price_delta, auction_id, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "increase_bid", typeParamStrings, [
        price_delta,
        auction_id,
    ], isJSON);
}
exports.buildPayload_increase_bid = buildPayload_increase_bid;
function increase_bid_price_(bidder, bid_id, price_delta, auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, auction, auctions, new_offer_price, now, old_price;
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        [temp$1, temp$2] = [(auctions).all_active_auctions, $.copy(auction_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EAUCTION_NOT_EXIST), $c));
        }
        auction = yield Stdlib.Table.borrow_mut_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        now = yield Stdlib.Timestamp.now_seconds_($c);
        if (!($.copy(now)).le(yield Auction_listing_utils.get_listing_expiration_((auction).listing, $c, [$p[0]]))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EAUCTION_ENDED), $c));
        }
        [old_price,] = yield Auction_bid_utils.get_bid_info_($.copy(bid_id), $c, [$p[0]]);
        new_offer_price = ($.copy(old_price)).add($.copy(price_delta));
        if (!!(yield Stdlib.Simple_map.contains_key_((auction).bids, new_offer_price, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]))) {
            throw $.abortCode(yield Stdlib.Error.already_exists_($.copy(exports.EBID_WITH_SAME_PRICE_EXISTS), $c));
        }
        yield Auction_bid_utils.increase_bid_(bidder, $.copy(bid_id), $.copy(price_delta), (auction).listing, $c, [$p[0]]);
        return;
    });
}
exports.increase_bid_price_ = increase_bid_price_;
function initialize_auction_(account, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), account, new Auctions({ cur_auction_id: (0, move_to_ts_1.u64)("0"), all_active_auctions: yield Stdlib.Table.new___($c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]), listing_event: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "ListingEvent", [])]), bid_event: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(BidEvent)]), cancel_bid_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(CancelBidEvent)]) }, new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]])));
        return;
    });
}
exports.initialize_auction_ = initialize_auction_;
function buildPayload_initialize_auction($p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "initialize_auction", typeParamStrings, [], isJSON);
}
exports.buildPayload_initialize_auction = buildPayload_initialize_auction;
function initialize_auction_house_(account, market_fee_numerator, market_fee_denominator, fee_address, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4;
        temp$4 = account;
        temp$1 = $.copy(market_fee_denominator);
        temp$2 = $.copy(market_fee_numerator);
        temp$3 = $.copy(fee_address);
        yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(AuctionHouseConfig), temp$4, new AuctionHouseConfig({ market_fee_numerator: temp$2, market_fee_denominator: temp$1, fee_address: temp$3 }, new move_to_ts_2.SimpleStructTag(AuctionHouseConfig)));
        return;
    });
}
exports.initialize_auction_house_ = initialize_auction_house_;
function buildPayload_initialize_auction_house(market_fee_numerator, market_fee_denominator, fee_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "initialize_auction_house", typeParamStrings, [
        market_fee_numerator,
        market_fee_denominator,
        fee_address,
    ], isJSON);
}
exports.buildPayload_initialize_auction_house = buildPayload_initialize_auction_house;
function remove_auction_(account, auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let auctions;
        if (!((yield Stdlib.Signer.address_of_(account, $c)).hex() === (new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")).hex())) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EONLY_AUCTION_HOUSE_OWNER_CAN_PERFORM_THIS_OPERATION), $c));
        }
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        return yield Stdlib.Table.remove_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
    });
}
exports.remove_auction_ = remove_auction_;
function remove_auction_friend_(auction_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let auction, auctions, bid_id, bidder, listing_id, offer_number;
        auctions = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Auctions, [$p[0]]), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        auction = yield Stdlib.Table.remove_((auctions).all_active_auctions, $.copy(auction_id), $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.SimpleStructTag(Auction, [$p[0]])]);
        listing_id = yield get_auction_listing_id_($.copy(auction_id), $c, [$p[0]]);
        while ((yield Stdlib.Vector.length_((auction).offer_numbers, $c, [move_to_ts_2.AtomicTypeTag.U64])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                offer_number = yield Stdlib.Vector.pop_back_((auction).offer_numbers, $c, [move_to_ts_2.AtomicTypeTag.U64]);
                bid_id = yield Stdlib.Simple_map.borrow_((auction).bids, offer_number, $c, [move_to_ts_2.AtomicTypeTag.U64, new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_bid_utils", "BidId", [])]);
                bidder = yield Auction_bid_utils.get_bid_id_address_(bid_id, $c);
                yield Auction_bid_utils.withdraw_coin_from_bid_with_address_($.copy(bidder), yield Stdlib.Guid.id_creator_address_(listing_id, $c), yield Stdlib.Guid.id_creation_num_(listing_id, $c), $c, [$p[0]]);
            }
        }
        return auction;
    });
}
exports.remove_auction_friend_ = remove_auction_friend_;
function withdraw_coin_from_bid_(bidder, lister_addr, listing_creation_number, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Auction_bid_utils.withdraw_coin_from_bid_(bidder, $.copy(lister_addr), $.copy(listing_creation_number), $c, [$p[0]]);
        return;
    });
}
exports.withdraw_coin_from_bid_ = withdraw_coin_from_bid_;
function buildPayload_withdraw_coin_from_bid(lister_addr, listing_creation_number, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction", "withdraw_coin_from_bid", typeParamStrings, [
        lister_addr,
        listing_creation_number,
    ], isJSON);
}
exports.buildPayload_withdraw_coin_from_bid = buildPayload_withdraw_coin_from_bid;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction::Auction", Auction.AuctionParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction::AuctionHouseConfig", AuctionHouseConfig.AuctionHouseConfigParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction::Auctions", Auctions.AuctionsParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction::BidEvent", BidEvent.BidEventParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction::CancelBidEvent", CancelBidEvent.CancelBidEventParser);
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
    get Auction() { return Auction; }
    get AuctionHouseConfig() { return AuctionHouseConfig; }
    loadAuctionHouseConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield AuctionHouseConfig.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get Auctions() { return Auctions; }
    loadAuctions(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Auctions.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get BidEvent() { return BidEvent; }
    get CancelBidEvent() { return CancelBidEvent; }
    payload_bid(creator, collection_name, token_name, property_version, token_amount, offer_price, auction_id, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_bid(creator, collection_name, token_name, property_version, token_amount, offer_price, auction_id, withdraw_expiration_sec, $p, isJSON);
    }
    bid(_account, creator, collection_name, token_name, property_version, token_amount, offer_price, auction_id, withdraw_expiration_sec, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_bid(creator, collection_name, token_name, property_version, token_amount, offer_price, auction_id, withdraw_expiration_sec, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_cancel_bid_in_auction(auction_id, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_cancel_bid_in_auction(auction_id, $p, isJSON);
    }
    cancel_bid_in_auction(_account, auction_id, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_cancel_bid_in_auction(auction_id, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_complete_auction(auction_id, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_complete_auction(auction_id, $p, isJSON);
    }
    complete_auction(_account, auction_id, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_complete_auction(auction_id, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_create_auction(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_create_auction(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, isJSON);
    }
    create_auction(_account, creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_auction(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_increase_bid(price_delta, auction_id, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_increase_bid(price_delta, auction_id, $p, isJSON);
    }
    increase_bid(_account, price_delta, auction_id, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_increase_bid(price_delta, auction_id, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initialize_auction($p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_initialize_auction($p, isJSON);
    }
    initialize_auction(_account, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initialize_auction($p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initialize_auction_house(market_fee_numerator, market_fee_denominator, fee_address, isJSON = false) {
        return buildPayload_initialize_auction_house(market_fee_numerator, market_fee_denominator, fee_address, isJSON);
    }
    initialize_auction_house(_account, market_fee_numerator, market_fee_denominator, fee_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initialize_auction_house(market_fee_numerator, market_fee_denominator, fee_address, _isJSON);
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
//# sourceMappingURL=auction.js.map