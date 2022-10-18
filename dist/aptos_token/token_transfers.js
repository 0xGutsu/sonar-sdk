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
exports.App = exports.loadParsers = exports.buildPayload_offer_script = exports.offer_script_ = exports.offer_ = exports.initialize_token_transfers_ = exports.create_token_offer_id_ = exports.buildPayload_claim_script = exports.claim_script_ = exports.claim_ = exports.buildPayload_cancel_offer_script = exports.cancel_offer_script_ = exports.cancel_offer_ = exports.TokenOfferId = exports.TokenOfferEvent = exports.TokenClaimEvent = exports.TokenCancelOfferEvent = exports.PendingClaims = exports.ETOKEN_OFFER_NOT_EXIST = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
const Token = __importStar(require("./token"));
exports.packageName = "AptosToken";
exports.moduleAddress = new aptos_1.HexString("0x3");
exports.moduleName = "token_transfers";
exports.ETOKEN_OFFER_NOT_EXIST = (0, move_to_ts_1.u64)("1");
class PendingClaims {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.pending_claims = proto['pending_claims'];
        this.offer_events = proto['offer_events'];
        this.cancel_offer_events = proto['cancel_offer_events'];
        this.claim_events = proto['claim_events'];
    }
    static PendingClaimsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PendingClaims);
        return new PendingClaims(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, PendingClaims, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, PendingClaims, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PendingClaims", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pending_claims.loadFullState(app);
            yield this.offer_events.loadFullState(app);
            yield this.cancel_offer_events.loadFullState(app);
            yield this.claim_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.PendingClaims = PendingClaims;
PendingClaims.moduleAddress = exports.moduleAddress;
PendingClaims.moduleName = exports.moduleName;
PendingClaims.structName = "PendingClaims";
PendingClaims.typeParameters = [];
PendingClaims.fields = [
    { name: "pending_claims", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_transfers", "TokenOfferId", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]) },
    { name: "offer_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_transfers", "TokenOfferEvent", [])]) },
    { name: "cancel_offer_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_transfers", "TokenCancelOfferEvent", [])]) },
    { name: "claim_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token_transfers", "TokenClaimEvent", [])]) }
];
class TokenCancelOfferEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.to_address = proto['to_address'];
        this.token_id = proto['token_id'];
        this.amount = proto['amount'];
    }
    static TokenCancelOfferEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenCancelOfferEvent);
        return new TokenCancelOfferEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenCancelOfferEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenCancelOfferEvent = TokenCancelOfferEvent;
TokenCancelOfferEvent.moduleAddress = exports.moduleAddress;
TokenCancelOfferEvent.moduleName = exports.moduleName;
TokenCancelOfferEvent.structName = "TokenCancelOfferEvent";
TokenCancelOfferEvent.typeParameters = [];
TokenCancelOfferEvent.fields = [
    { name: "to_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TokenClaimEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.to_address = proto['to_address'];
        this.token_id = proto['token_id'];
        this.amount = proto['amount'];
    }
    static TokenClaimEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenClaimEvent);
        return new TokenClaimEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenClaimEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenClaimEvent = TokenClaimEvent;
TokenClaimEvent.moduleAddress = exports.moduleAddress;
TokenClaimEvent.moduleName = exports.moduleName;
TokenClaimEvent.structName = "TokenClaimEvent";
TokenClaimEvent.typeParameters = [];
TokenClaimEvent.fields = [
    { name: "to_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TokenOfferEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.to_address = proto['to_address'];
        this.token_id = proto['token_id'];
        this.amount = proto['amount'];
    }
    static TokenOfferEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenOfferEvent);
        return new TokenOfferEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenOfferEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenOfferEvent = TokenOfferEvent;
TokenOfferEvent.moduleAddress = exports.moduleAddress;
TokenOfferEvent.moduleName = exports.moduleName;
TokenOfferEvent.structName = "TokenOfferEvent";
TokenOfferEvent.typeParameters = [];
TokenOfferEvent.fields = [
    { name: "to_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TokenOfferId {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.to_addr = proto['to_addr'];
        this.token_id = proto['token_id'];
    }
    static TokenOfferIdParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenOfferId);
        return new TokenOfferId(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenOfferId", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenOfferId = TokenOfferId;
TokenOfferId.moduleAddress = exports.moduleAddress;
TokenOfferId.moduleName = exports.moduleName;
TokenOfferId.structName = "TokenOfferId";
TokenOfferId.typeParameters = [];
TokenOfferId.fields = [
    { name: "to_addr", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) }
];
function cancel_offer_(sender, receiver, token_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount, pending_claims, sender_addr, token, token_offer_id;
        sender_addr = yield Stdlib.Signer.address_of_(sender, $c);
        token_offer_id = yield create_token_offer_id_($.copy(receiver), $.copy(token_id), $c);
        pending_claims = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(PendingClaims), $.copy(sender_addr))).pending_claims;
        token = yield Stdlib.Table.remove_(pending_claims, $.copy(token_offer_id), $c, [new move_to_ts_2.SimpleStructTag(TokenOfferId), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]);
        amount = yield Token.get_token_amount_(token, $c);
        yield Token.deposit_token_(sender, token, $c);
        yield Stdlib.Event.emit_event_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(PendingClaims), $.copy(sender_addr))).cancel_offer_events, new TokenCancelOfferEvent({ to_address: $.copy(receiver), token_id: $.copy(token_id), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(TokenCancelOfferEvent)), $c, [new move_to_ts_2.SimpleStructTag(TokenCancelOfferEvent)]);
        return;
    });
}
exports.cancel_offer_ = cancel_offer_;
function cancel_offer_script_(sender, receiver, creator, collection, name, property_version, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Token.create_token_id_raw_($.copy(creator), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        yield cancel_offer_(sender, $.copy(receiver), $.copy(token_id), $c);
        return;
    });
}
exports.cancel_offer_script_ = cancel_offer_script_;
function buildPayload_cancel_offer_script(receiver, creator, collection, name, property_version, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token_transfers", "cancel_offer_script", typeParamStrings, [
        receiver,
        creator,
        collection,
        name,
        property_version,
    ], isJSON);
}
exports.buildPayload_cancel_offer_script = buildPayload_cancel_offer_script;
function claim_(receiver, sender, token_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, amount, pending_claims, token_offer_id, tokens;
        pending_claims = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(PendingClaims), $.copy(sender))).pending_claims;
        token_offer_id = yield create_token_offer_id_(yield Stdlib.Signer.address_of_(receiver, $c), $.copy(token_id), $c);
        [temp$1, temp$2] = [pending_claims, $.copy(token_offer_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenOfferId), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_OFFER_NOT_EXIST), $c));
        }
        tokens = yield Stdlib.Table.remove_(pending_claims, $.copy(token_offer_id), $c, [new move_to_ts_2.SimpleStructTag(TokenOfferId), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]);
        amount = yield Token.get_token_amount_(tokens, $c);
        yield Token.deposit_token_(receiver, tokens, $c);
        yield Stdlib.Event.emit_event_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(PendingClaims), $.copy(sender))).claim_events, new TokenClaimEvent({ to_address: yield Stdlib.Signer.address_of_(receiver, $c), token_id: $.copy(token_id), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(TokenClaimEvent)), $c, [new move_to_ts_2.SimpleStructTag(TokenClaimEvent)]);
        return;
    });
}
exports.claim_ = claim_;
function claim_script_(receiver, sender, creator, collection, name, property_version, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Token.create_token_id_raw_($.copy(creator), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        yield claim_(receiver, $.copy(sender), $.copy(token_id), $c);
        return;
    });
}
exports.claim_script_ = claim_script_;
function buildPayload_claim_script(sender, creator, collection, name, property_version, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token_transfers", "claim_script", typeParamStrings, [
        sender,
        creator,
        collection,
        name,
        property_version,
    ], isJSON);
}
exports.buildPayload_claim_script = buildPayload_claim_script;
function create_token_offer_id_(to_addr, token_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new TokenOfferId({ to_addr: $.copy(to_addr), token_id: $.copy(token_id) }, new move_to_ts_2.SimpleStructTag(TokenOfferId));
    });
}
exports.create_token_offer_id_ = create_token_offer_id_;
function initialize_token_transfers_(account, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(PendingClaims), account, new PendingClaims({ pending_claims: yield Stdlib.Table.new___($c, [new move_to_ts_2.SimpleStructTag(TokenOfferId), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]), offer_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(TokenOfferEvent)]), cancel_offer_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(TokenCancelOfferEvent)]), claim_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(TokenClaimEvent)]) }, new move_to_ts_2.SimpleStructTag(PendingClaims)));
    });
}
exports.initialize_token_transfers_ = initialize_token_transfers_;
function offer_(sender, receiver, token_id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, dst_token, pending_claims, sender_addr, token, token_offer_id;
        sender_addr = yield Stdlib.Signer.address_of_(sender, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(PendingClaims), $.copy(sender_addr)))) {
            yield initialize_token_transfers_(sender, $c);
        }
        else {
        }
        pending_claims = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(PendingClaims), $.copy(sender_addr))).pending_claims;
        token_offer_id = yield create_token_offer_id_($.copy(receiver), $.copy(token_id), $c);
        token = yield Token.withdraw_token_(sender, $.copy(token_id), $.copy(amount), $c);
        [temp$1, temp$2] = [pending_claims, $.copy(token_offer_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenOfferId), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]))) {
            yield Stdlib.Table.add_(pending_claims, $.copy(token_offer_id), token, $c, [new move_to_ts_2.SimpleStructTag(TokenOfferId), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]);
        }
        else {
            dst_token = yield Stdlib.Table.borrow_mut_(pending_claims, $.copy(token_offer_id), $c, [new move_to_ts_2.SimpleStructTag(TokenOfferId), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]);
            yield Token.merge_(dst_token, token, $c);
        }
        yield Stdlib.Event.emit_event_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(PendingClaims), $.copy(sender_addr))).offer_events, new TokenOfferEvent({ to_address: $.copy(receiver), token_id: $.copy(token_id), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(TokenOfferEvent)), $c, [new move_to_ts_2.SimpleStructTag(TokenOfferEvent)]);
        return;
    });
}
exports.offer_ = offer_;
function offer_script_(sender, receiver, creator, collection, name, property_version, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Token.create_token_id_raw_($.copy(creator), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        yield offer_(sender, $.copy(receiver), $.copy(token_id), $.copy(amount), $c);
        return;
    });
}
exports.offer_script_ = offer_script_;
function buildPayload_offer_script(receiver, creator, collection, name, property_version, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token_transfers", "offer_script", typeParamStrings, [
        receiver,
        creator,
        collection,
        name,
        property_version,
        amount,
    ], isJSON);
}
exports.buildPayload_offer_script = buildPayload_offer_script;
function loadParsers(repo) {
    repo.addParser("0x3::token_transfers::PendingClaims", PendingClaims.PendingClaimsParser);
    repo.addParser("0x3::token_transfers::TokenCancelOfferEvent", TokenCancelOfferEvent.TokenCancelOfferEventParser);
    repo.addParser("0x3::token_transfers::TokenClaimEvent", TokenClaimEvent.TokenClaimEventParser);
    repo.addParser("0x3::token_transfers::TokenOfferEvent", TokenOfferEvent.TokenOfferEventParser);
    repo.addParser("0x3::token_transfers::TokenOfferId", TokenOfferId.TokenOfferIdParser);
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
    get PendingClaims() { return PendingClaims; }
    loadPendingClaims(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield PendingClaims.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get TokenCancelOfferEvent() { return TokenCancelOfferEvent; }
    get TokenClaimEvent() { return TokenClaimEvent; }
    get TokenOfferEvent() { return TokenOfferEvent; }
    get TokenOfferId() { return TokenOfferId; }
    payload_cancel_offer_script(receiver, creator, collection, name, property_version, isJSON = false) {
        return buildPayload_cancel_offer_script(receiver, creator, collection, name, property_version, isJSON);
    }
    cancel_offer_script(_account, receiver, creator, collection, name, property_version, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_cancel_offer_script(receiver, creator, collection, name, property_version, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_claim_script(sender, creator, collection, name, property_version, isJSON = false) {
        return buildPayload_claim_script(sender, creator, collection, name, property_version, isJSON);
    }
    claim_script(_account, sender, creator, collection, name, property_version, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_claim_script(sender, creator, collection, name, property_version, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_offer_script(receiver, creator, collection, name, property_version, amount, isJSON = false) {
        return buildPayload_offer_script(receiver, creator, collection, name, property_version, amount, isJSON);
    }
    offer_script(_account, receiver, creator, collection, name, property_version, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_offer_script(receiver, creator, collection, name, property_version, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=token_transfers.js.map