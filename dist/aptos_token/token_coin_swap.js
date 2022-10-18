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
exports.App = exports.loadParsers = exports.withdraw_token_from_escrow_internal_ = exports.withdraw_token_from_escrow_ = exports.buildPayload_list_token_for_swap = exports.list_token_for_swap_ = exports.initialize_token_store_escrow_ = exports.initialize_token_listing_ = exports.exchange_coin_for_token_ = exports.does_listing_exist_ = exports.deposit_token_to_escrow_ = exports.cancel_token_listing_ = exports.TokenSwapEvent = exports.TokenStoreEscrow = exports.TokenListings = exports.TokenListingEvent = exports.TokenEscrow = exports.TokenCoinSwap = exports.ETOKEN_NOT_IN_ESCROW = exports.ETOKEN_MIN_PRICE_NOT_MATCH = exports.ETOKEN_LISTING_NOT_EXIST = exports.ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME = exports.ETOKEN_AMOUNT_NOT_MATCH = exports.ETOKEN_ALREADY_LISTED = exports.ENOT_ENOUGH_COIN = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
const Token = __importStar(require("./token"));
exports.packageName = "AptosToken";
exports.moduleAddress = new aptos_1.HexString("0x3");
exports.moduleName = "token_coin_swap";
exports.ENOT_ENOUGH_COIN = (0, move_to_ts_1.u64)("7");
exports.ETOKEN_ALREADY_LISTED = (0, move_to_ts_1.u64)("1");
exports.ETOKEN_AMOUNT_NOT_MATCH = (0, move_to_ts_1.u64)("6");
exports.ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME = (0, move_to_ts_1.u64)("4");
exports.ETOKEN_LISTING_NOT_EXIST = (0, move_to_ts_1.u64)("2");
exports.ETOKEN_MIN_PRICE_NOT_MATCH = (0, move_to_ts_1.u64)("5");
exports.ETOKEN_NOT_IN_ESCROW = (0, move_to_ts_1.u64)("3");
class TokenCoinSwap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_amount = proto['token_amount'];
        this.min_price_per_token = proto['min_price_per_token'];
    }
    static TokenCoinSwapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenCoinSwap);
        return new TokenCoinSwap(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenCoinSwap", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.TokenCoinSwap = TokenCoinSwap;
TokenCoinSwap.moduleAddress = exports.moduleAddress;
TokenCoinSwap.moduleName = exports.moduleName;
TokenCoinSwap.structName = "TokenCoinSwap";
TokenCoinSwap.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
TokenCoinSwap.fields = [
    { name: "token_amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "min_price_per_token", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TokenEscrow {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token = proto['token'];
        this.locked_until_secs = proto['locked_until_secs'];
    }
    static TokenEscrowParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenEscrow);
        return new TokenEscrow(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenEscrow", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenEscrow = TokenEscrow;
TokenEscrow.moduleAddress = exports.moduleAddress;
TokenEscrow.moduleName = exports.moduleName;
TokenEscrow.structName = "TokenEscrow";
TokenEscrow.typeParameters = [];
TokenEscrow.fields = [
    { name: "token", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", []) },
    { name: "locked_until_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TokenListingEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_id = proto['token_id'];
        this.amount = proto['amount'];
        this.min_price = proto['min_price'];
        this.locked_until_secs = proto['locked_until_secs'];
        this.coin_type_info = proto['coin_type_info'];
    }
    static TokenListingEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenListingEvent);
        return new TokenListingEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenListingEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            yield this.coin_type_info.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenListingEvent = TokenListingEvent;
TokenListingEvent.moduleAddress = exports.moduleAddress;
TokenListingEvent.moduleName = exports.moduleName;
TokenListingEvent.structName = "TokenListingEvent";
TokenListingEvent.typeParameters = [];
TokenListingEvent.fields = [
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "min_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "locked_until_secs", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "coin_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) }
];
class TokenListings {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.listings = proto['listings'];
        this.listing_events = proto['listing_events'];
        this.swap_events = proto['swap_events'];
    }
    static TokenListingsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenListings);
        return new TokenListings(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, TokenListings, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, TokenListings, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenListings", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.listings.loadFullState(app);
            yield this.listing_events.loadFullState(app);
            yield this.swap_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenListings = TokenListings;
TokenListings.moduleAddress = exports.moduleAddress;
TokenListings.moduleName = exports.moduleName;
TokenListings.structName = "TokenListings";
TokenListings.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
TokenListings.fields = [
    { name: "listings", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_coin_swap", "TokenCoinSwap", [new $.TypeParamIdx(0)])]) },
    { name: "listing_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_coin_swap", "TokenListingEvent", [])]) },
    { name: "swap_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_coin_swap", "TokenSwapEvent", [])]) }
];
class TokenStoreEscrow {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_escrows = proto['token_escrows'];
    }
    static TokenStoreEscrowParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenStoreEscrow);
        return new TokenStoreEscrow(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, TokenStoreEscrow, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, TokenStoreEscrow, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenStoreEscrow", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_escrows.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenStoreEscrow = TokenStoreEscrow;
TokenStoreEscrow.moduleAddress = exports.moduleAddress;
TokenStoreEscrow.moduleName = exports.moduleName;
TokenStoreEscrow.structName = "TokenStoreEscrow";
TokenStoreEscrow.typeParameters = [];
TokenStoreEscrow.fields = [
    { name: "token_escrows", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_coin_swap", "TokenEscrow", [])]) }
];
class TokenSwapEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_id = proto['token_id'];
        this.token_buyer = proto['token_buyer'];
        this.token_amount = proto['token_amount'];
        this.coin_amount = proto['coin_amount'];
        this.coin_type_info = proto['coin_type_info'];
    }
    static TokenSwapEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenSwapEvent);
        return new TokenSwapEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenSwapEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            yield this.coin_type_info.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenSwapEvent = TokenSwapEvent;
TokenSwapEvent.moduleAddress = exports.moduleAddress;
TokenSwapEvent.moduleName = exports.moduleName;
TokenSwapEvent.structName = "TokenSwapEvent";
TokenSwapEvent.typeParameters = [];
TokenSwapEvent.fields = [
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "token_buyer", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "token_amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "coin_amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "coin_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) }
];
function cancel_token_listing_(token_owner, token_id, token_amount, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, listing, token_owner_addr, tokens;
        token_owner_addr = yield Stdlib.Signer.address_of_(token_owner, $c);
        listing = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]), $.copy(token_owner_addr))).listings;
        [temp$1, temp$2] = [listing, $.copy(token_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_LISTING_NOT_EXIST), $c));
        }
        yield Stdlib.Table.remove_(listing, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]);
        tokens = yield withdraw_token_from_escrow_(token_owner, $.copy(token_id), $.copy(token_amount), $c);
        yield Token.deposit_token_(token_owner, tokens, $c);
        return;
    });
}
exports.cancel_token_listing_ = cancel_token_listing_;
function deposit_token_to_escrow_(token_owner, token_id, tokens, locked_until_secs, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, dst, token_escrow, tokens_in_escrow;
        tokens_in_escrow = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStoreEscrow), yield Stdlib.Signer.address_of_(token_owner, $c))).token_escrows;
        [temp$1, temp$2] = [tokens_in_escrow, $.copy(token_id)];
        if (yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenEscrow)])) {
            dst = (yield Stdlib.Table.borrow_mut_(tokens_in_escrow, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenEscrow)])).token;
            yield Token.merge_(dst, tokens, $c);
        }
        else {
            token_escrow = new TokenEscrow({ token: tokens, locked_until_secs: $.copy(locked_until_secs) }, new move_to_ts_2.SimpleStructTag(TokenEscrow));
            yield Stdlib.Table.add_(tokens_in_escrow, $.copy(token_id), token_escrow, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenEscrow)]);
        }
        return;
    });
}
exports.deposit_token_to_escrow_ = deposit_token_to_escrow_;
function does_listing_exist_(token_owner, token_id, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_listing;
        token_listing = yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]), $.copy(token_owner));
        return yield Stdlib.Table.contains_((token_listing).listings, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]);
    });
}
exports.does_listing_exist_ = does_listing_exist_;
function exchange_coin_for_token_(coin_owner, coin_amount, token_owner, creators_address, collection, name, property_version, token_amount, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, coin, coin__2, coin_address, remaining, royalty, royalty_denominator, royalty_fee, royalty_payee, token_id, token_listing, token_swap, tokens, total_cost;
        token_id = yield Token.create_token_id_raw_($.copy(creators_address), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        coin_address = yield Stdlib.Signer.address_of_(coin_owner, $c);
        token_listing = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]), $.copy(token_owner));
        if (!(yield Stdlib.Table.contains_((token_listing).listings, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_LISTING_NOT_EXIST), $c));
        }
        if (!(yield Stdlib.Coin.balance_($.copy(coin_address), $c, [$p[0]])).ge($.copy(coin_amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENOT_ENOUGH_COIN), $c));
        }
        token_swap = yield Stdlib.Table.borrow_mut_((token_listing).listings, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]);
        if (!(($.copy((token_swap).min_price_per_token)).mul($.copy(token_amount))).le($.copy(coin_amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ETOKEN_MIN_PRICE_NOT_MATCH), $c));
        }
        if (!($.copy((token_swap).token_amount)).ge($.copy(token_amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ETOKEN_AMOUNT_NOT_MATCH), $c));
        }
        tokens = yield withdraw_token_from_escrow_internal_($.copy(token_owner), $.copy(token_id), $.copy(token_amount), $c);
        yield Token.deposit_token_(coin_owner, tokens, $c);
        royalty = yield Token.get_royalty_($.copy(token_id), $c);
        total_cost = ($.copy((token_swap).min_price_per_token)).mul($.copy(token_amount));
        royalty_denominator = yield Token.get_royalty_denominator_(royalty, $c);
        if (($.copy(royalty_denominator)).eq(((0, move_to_ts_1.u64)("0")))) {
            temp$1 = (0, move_to_ts_1.u64)("0");
        }
        else {
            temp$1 = (($.copy(total_cost)).mul(yield Token.get_royalty_numerator_(royalty, $c))).div(yield Token.get_royalty_denominator_(royalty, $c));
        }
        royalty_fee = temp$1;
        remaining = ($.copy(total_cost)).sub($.copy(royalty_fee));
        royalty_payee = yield Token.get_royalty_payee_(royalty, $c);
        coin = yield Stdlib.Coin.withdraw_(coin_owner, $.copy(royalty_fee), $c, [$p[0]]);
        yield Stdlib.Coin.deposit_($.copy(royalty_payee), coin, $c, [$p[0]]);
        coin__2 = yield Stdlib.Coin.withdraw_(coin_owner, $.copy(remaining), $c, [$p[0]]);
        yield Stdlib.Coin.deposit_($.copy(token_owner), coin__2, $c, [$p[0]]);
        if (($.copy((token_swap).token_amount)).eq(($.copy(token_amount)))) {
            yield Stdlib.Table.remove_((token_listing).listings, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]);
        }
        else {
            (token_swap).token_amount = ($.copy((token_swap).token_amount)).sub($.copy(token_amount));
        }
        yield Stdlib.Event.emit_event_((token_listing).swap_events, new TokenSwapEvent({ token_id: $.copy(token_id), token_buyer: $.copy(coin_address), token_amount: $.copy(token_amount), coin_amount: $.copy(total_cost), coin_type_info: yield Stdlib.Type_info.type_of_($c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(TokenSwapEvent)), $c, [new move_to_ts_2.SimpleStructTag(TokenSwapEvent)]);
        return;
    });
}
exports.exchange_coin_for_token_ = exchange_coin_for_token_;
function initialize_token_listing_(token_owner, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let addr, token_listing;
        addr = yield Stdlib.Signer.address_of_(token_owner, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]), $.copy(addr)))) {
            token_listing = new TokenListings({ listings: yield Stdlib.Table.new___($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]), listing_events: yield Stdlib.Account.new_event_handle_(token_owner, $c, [new move_to_ts_2.SimpleStructTag(TokenListingEvent)]), swap_events: yield Stdlib.Account.new_event_handle_(token_owner, $c, [new move_to_ts_2.SimpleStructTag(TokenSwapEvent)]) }, new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]));
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]), token_owner, token_listing);
        }
        else {
        }
        return;
    });
}
exports.initialize_token_listing_ = initialize_token_listing_;
function initialize_token_store_escrow_(token_owner, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let addr, token_store_escrow;
        addr = yield Stdlib.Signer.address_of_(token_owner, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenStoreEscrow), $.copy(addr)))) {
            token_store_escrow = new TokenStoreEscrow({ token_escrows: yield Stdlib.Table.new___($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenEscrow)]) }, new move_to_ts_2.SimpleStructTag(TokenStoreEscrow));
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(TokenStoreEscrow), token_owner, token_store_escrow);
        }
        else {
        }
        return;
    });
}
exports.initialize_token_store_escrow_ = initialize_token_store_escrow_;
function list_token_for_swap_(token_owner, creators_address, collection, name, property_version, token_amount, min_coin_per_token, locked_until_secs, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, event_handle, listing, swap, token, token_id;
        token_id = yield Token.create_token_id_raw_($.copy(creators_address), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        yield initialize_token_store_escrow_(token_owner, $c);
        token = yield Token.withdraw_token_(token_owner, $.copy(token_id), $.copy(token_amount), $c);
        yield deposit_token_to_escrow_(token_owner, $.copy(token_id), token, $.copy(locked_until_secs), $c);
        yield initialize_token_listing_(token_owner, $c, [$p[0]]);
        swap = new TokenCoinSwap({ token_amount: $.copy(token_amount), min_price_per_token: $.copy(min_coin_per_token) }, new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]]));
        listing = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]), yield Stdlib.Signer.address_of_(token_owner, $c))).listings;
        [temp$1, temp$2] = [listing, $.copy(token_id)];
        if (!!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.already_exists_($.copy(exports.ETOKEN_ALREADY_LISTED), $c));
        }
        yield Stdlib.Table.add_(listing, $.copy(token_id), swap, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenCoinSwap, [$p[0]])]);
        event_handle = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenListings, [$p[0]]), yield Stdlib.Signer.address_of_(token_owner, $c))).listing_events;
        yield Stdlib.Event.emit_event_(event_handle, new TokenListingEvent({ token_id: $.copy(token_id), amount: $.copy(token_amount), min_price: $.copy(min_coin_per_token), locked_until_secs: $.copy(locked_until_secs), coin_type_info: yield Stdlib.Type_info.type_of_($c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(TokenListingEvent)), $c, [new move_to_ts_2.SimpleStructTag(TokenListingEvent)]);
        return;
    });
}
exports.list_token_for_swap_ = list_token_for_swap_;
function buildPayload_list_token_for_swap(creators_address, collection, name, property_version, token_amount, min_coin_per_token, locked_until_secs, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x3"), "token_coin_swap", "list_token_for_swap", typeParamStrings, [
        creators_address,
        collection,
        name,
        property_version,
        token_amount,
        min_coin_per_token,
        locked_until_secs,
    ], isJSON);
}
exports.buildPayload_list_token_for_swap = buildPayload_list_token_for_swap;
function withdraw_token_from_escrow_(token_owner, token_id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield withdraw_token_from_escrow_internal_(yield Stdlib.Signer.address_of_(token_owner, $c), $.copy(token_id), $.copy(amount), $c);
    });
}
exports.withdraw_token_from_escrow_ = withdraw_token_from_escrow_;
function withdraw_token_from_escrow_internal_(token_owner_addr, token_id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, token_escrow, tokens_in_escrow;
        tokens_in_escrow = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStoreEscrow), $.copy(token_owner_addr))).token_escrows;
        [temp$1, temp$2] = [tokens_in_escrow, $.copy(token_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenEscrow)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_NOT_IN_ESCROW), $c));
        }
        token_escrow = yield Stdlib.Table.borrow_mut_(tokens_in_escrow, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenEscrow)]);
        if (!(yield Stdlib.Timestamp.now_seconds_($c)).gt($.copy((token_escrow).locked_until_secs))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME), $c));
        }
        if (($.copy(amount)).eq((yield Token.get_token_amount_((token_escrow).token, $c)))) {
            let { token: tokens } = yield Stdlib.Table.remove_(tokens_in_escrow, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.SimpleStructTag(TokenEscrow)]);
            temp$3 = tokens;
        }
        else {
            temp$3 = yield Token.split_((token_escrow).token, $.copy(amount), $c);
        }
        return temp$3;
    });
}
exports.withdraw_token_from_escrow_internal_ = withdraw_token_from_escrow_internal_;
function loadParsers(repo) {
    repo.addParser("0x3::token_coin_swap::TokenCoinSwap", TokenCoinSwap.TokenCoinSwapParser);
    repo.addParser("0x3::token_coin_swap::TokenEscrow", TokenEscrow.TokenEscrowParser);
    repo.addParser("0x3::token_coin_swap::TokenListingEvent", TokenListingEvent.TokenListingEventParser);
    repo.addParser("0x3::token_coin_swap::TokenListings", TokenListings.TokenListingsParser);
    repo.addParser("0x3::token_coin_swap::TokenStoreEscrow", TokenStoreEscrow.TokenStoreEscrowParser);
    repo.addParser("0x3::token_coin_swap::TokenSwapEvent", TokenSwapEvent.TokenSwapEventParser);
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
    get TokenCoinSwap() { return TokenCoinSwap; }
    get TokenEscrow() { return TokenEscrow; }
    get TokenListingEvent() { return TokenListingEvent; }
    get TokenListings() { return TokenListings; }
    loadTokenListings(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield TokenListings.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get TokenStoreEscrow() { return TokenStoreEscrow; }
    loadTokenStoreEscrow(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield TokenStoreEscrow.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get TokenSwapEvent() { return TokenSwapEvent; }
    payload_list_token_for_swap(creators_address, collection, name, property_version, token_amount, min_coin_per_token, locked_until_secs, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_list_token_for_swap(creators_address, collection, name, property_version, token_amount, min_coin_per_token, locked_until_secs, $p, isJSON);
    }
    list_token_for_swap(_account, creators_address, collection, name, property_version, token_amount, min_coin_per_token, locked_until_secs, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_list_token_for_swap(creators_address, collection, name, property_version, token_amount, min_coin_per_token, locked_until_secs, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=token_coin_swap.js.map