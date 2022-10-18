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
exports.App = exports.loadParsers = exports.remove_listing_ = exports.initialize_listing_records_ = exports.get_listing_token_id_ = exports.get_listing_token_amount_ = exports.get_listing_start_ = exports.get_listing_min_price_ = exports.get_listing_instant_sale_ = exports.get_listing_info_ = exports.get_listing_id_tuple_ = exports.get_listing_id_ = exports.get_listing_expiration_ = exports.get_listing_creator_ = exports.buildPayload_direct_listing = exports.direct_listing_ = exports.destroy_listing_ = exports.create_listing_id_raw_ = exports.create_listing_id_ = exports.create_listing_event_ = exports.create_listing_ = exports.create_list_under_user_account_ = exports.buildPayload_cancel_direct_listing = exports.cancel_direct_listing_ = exports.ListingRecords = exports.ListingEvent = exports.Listing = exports.CancelListingEvent = exports.EWITHDRAW_EXPIRE_TIME_SHORT_THAN_LISTING_TIME = exports.ESTART_TIME_LARGER_THAN_EXPIRE_TIME = exports.EOWNER_NOT_HAVING_ENOUGH_TOKEN = exports.ELISTING_ZERO_TOKEN = exports.ELISTING_NOT_EXIST = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Aptos_token = __importStar(require("../aptos_token"));
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "Sonar";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "auction_listing_utils";
exports.ELISTING_NOT_EXIST = (0, move_to_ts_1.u64)("2");
exports.ELISTING_ZERO_TOKEN = (0, move_to_ts_1.u64)("5");
exports.EOWNER_NOT_HAVING_ENOUGH_TOKEN = (0, move_to_ts_1.u64)("1");
exports.ESTART_TIME_LARGER_THAN_EXPIRE_TIME = (0, move_to_ts_1.u64)("4");
exports.EWITHDRAW_EXPIRE_TIME_SHORT_THAN_LISTING_TIME = (0, move_to_ts_1.u64)("3");
class CancelListingEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.market_address = proto['market_address'];
    }
    static CancelListingEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CancelListingEvent);
        return new CancelListingEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CancelListingEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CancelListingEvent = CancelListingEvent;
CancelListingEvent.moduleAddress = exports.moduleAddress;
CancelListingEvent.moduleName = exports.moduleName;
CancelListingEvent.structName = "CancelListingEvent";
CancelListingEvent.typeParameters = [];
CancelListingEvent.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []) },
    { name: "market_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class Listing {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.token_id = proto['token_id'];
        this.amount = proto['amount'];
        this.min_price = proto['min_price'];
        this.instant_sale = proto['instant_sale'];
        this.start_sec = proto['start_sec'];
        this.expiration_sec = proto['expiration_sec'];
        this.withdraw_cap = proto['withdraw_cap'];
        this.config = proto['config'];
    }
    static ListingParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Listing);
        return new Listing(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Listing", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            yield this.token_id.loadFullState(app);
            yield this.withdraw_cap.loadFullState(app);
            yield this.config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Listing = Listing;
Listing.moduleAddress = exports.moduleAddress;
Listing.moduleName = exports.moduleName;
Listing.structName = "Listing";
Listing.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Listing.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []) },
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "min_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "instant_sale", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "start_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "expiration_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "withdraw_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "WithdrawCapability", []) },
    { name: "config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "property_map", "PropertyMap", []) }
];
class ListingEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.token_id = proto['token_id'];
        this.amount = proto['amount'];
        this.min_price = proto['min_price'];
        this.instant_sale = proto['instant_sale'];
        this.start_sec = proto['start_sec'];
        this.expiration_sec = proto['expiration_sec'];
        this.withdraw_sec = proto['withdraw_sec'];
        this.market_address = proto['market_address'];
        this.config = proto['config'];
    }
    static ListingEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ListingEvent);
        return new ListingEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ListingEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            yield this.token_id.loadFullState(app);
            yield this.config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.ListingEvent = ListingEvent;
ListingEvent.moduleAddress = exports.moduleAddress;
ListingEvent.moduleName = exports.moduleName;
ListingEvent.structName = "ListingEvent";
ListingEvent.typeParameters = [];
ListingEvent.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []) },
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "min_price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "instant_sale", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "start_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "expiration_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "withdraw_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "market_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "property_map", "PropertyMap", []) }
];
class ListingRecords {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.records = proto['records'];
        this.listing_event = proto['listing_event'];
        this.cancel_listing_event = proto['cancel_listing_event'];
    }
    static ListingRecordsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ListingRecords);
        return new ListingRecords(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, ListingRecords, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, ListingRecords, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ListingRecords", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.records.loadFullState(app);
            yield this.listing_event.loadFullState(app);
            yield this.cancel_listing_event.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.ListingRecords = ListingRecords;
ListingRecords.moduleAddress = exports.moduleAddress;
ListingRecords.moduleName = exports.moduleName;
ListingRecords.structName = "ListingRecords";
ListingRecords.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
ListingRecords.fields = [
    { name: "records", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "Listing", [new $.TypeParamIdx(0)])]) },
    { name: "listing_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "ListingEvent", [])]) },
    { name: "cancel_listing_event", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "CancelListingEvent", [])]) }
];
function cancel_direct_listing_(owner, listing_id_creation_number, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let listing_id, owner_addr, records;
        listing_id = yield Stdlib.Guid.create_id_(yield Stdlib.Signer.address_of_(owner, $c), $.copy(listing_id_creation_number), $c);
        owner_addr = yield Stdlib.Signer.address_of_(owner, $c);
        records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(ListingRecords, [$p[0]]), $.copy(owner_addr));
        if (!(yield Stdlib.Table.contains_((records).records, $.copy(listing_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ELISTING_NOT_EXIST), $c));
        }
        yield Stdlib.Table.remove_((records).records, $.copy(listing_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]);
        return;
    });
}
exports.cancel_direct_listing_ = cancel_direct_listing_;
function buildPayload_cancel_direct_listing(listing_id_creation_number, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "cancel_direct_listing", typeParamStrings, [
        listing_id_creation_number,
    ], isJSON);
}
exports.buildPayload_cancel_direct_listing = buildPayload_cancel_direct_listing;
function create_list_under_user_account_(owner, token_id, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let id, owner_addr, record, records;
        owner_addr = yield Stdlib.Signer.address_of_(owner, $c);
        record = yield create_listing_(owner, $.copy(token_id), $.copy(amount), $.copy(min_price), instant_sale, $.copy(start_sec), $.copy(expiration_sec), $.copy(withdraw_expiration_sec), [], [], [], $c, [$p[0]]);
        yield initialize_listing_records_(owner, $c, [$p[0]]);
        records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(ListingRecords, [$p[0]]), $.copy(owner_addr));
        id = yield create_listing_id_(owner, $c);
        yield Stdlib.Table.add_((records).records, $.copy(id), record, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]);
        return $.copy(id);
    });
}
exports.create_list_under_user_account_ = create_list_under_user_account_;
function create_listing_(owner, token_id, amount, min_price, instant_sale, start_sec, listing_expiration_sec, withdraw_expiration_sec, keys, values, types, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let owner_addr;
        owner_addr = yield Stdlib.Signer.address_of_(owner, $c);
        if (!($.copy(listing_expiration_sec)).gt($.copy(start_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ESTART_TIME_LARGER_THAN_EXPIRE_TIME), $c));
        }
        if (!(yield Aptos_token.Token.balance_of_($.copy(owner_addr), $.copy(token_id), $c)).ge($.copy(amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EOWNER_NOT_HAVING_ENOUGH_TOKEN), $c));
        }
        if (!($.copy(withdraw_expiration_sec)).gt($.copy(listing_expiration_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EWITHDRAW_EXPIRE_TIME_SHORT_THAN_LISTING_TIME), $c));
        }
        if (!($.copy(amount)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ELISTING_ZERO_TOKEN), $c));
        }
        return new Listing({ id: yield create_listing_id_(owner, $c), token_id: $.copy(token_id), amount: $.copy(amount), min_price: $.copy(min_price), instant_sale: instant_sale, start_sec: $.copy(start_sec), expiration_sec: $.copy(listing_expiration_sec), withdraw_cap: yield Aptos_token.Token.create_withdraw_capability_(owner, $.copy(token_id), $.copy(amount), $.copy(withdraw_expiration_sec), $c), config: yield Aptos_token.Property_map.new___($.copy(keys), $.copy(values), $.copy(types), $c) }, new move_to_ts_2.SimpleStructTag(Listing, [$p[0]]));
    });
}
exports.create_listing_ = create_listing_;
function create_listing_event_(id, token_id, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_sec, market_address, config, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new ListingEvent({ id: $.copy(id), token_id: $.copy(token_id), amount: $.copy(amount), min_price: $.copy(min_price), instant_sale: instant_sale, start_sec: $.copy(start_sec), expiration_sec: $.copy(expiration_sec), withdraw_sec: $.copy(withdraw_sec), market_address: $.copy(market_address), config: $.copy(config) }, new move_to_ts_2.SimpleStructTag(ListingEvent));
    });
}
exports.create_listing_event_ = create_listing_event_;
function create_listing_id_(owner, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let gid;
        gid = yield Stdlib.Account.create_guid_(owner, $c);
        return yield Stdlib.Guid.id_(gid, $c);
    });
}
exports.create_listing_id_ = create_listing_id_;
function create_listing_id_raw_(lister, listing_creation_number, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Guid.create_id_($.copy(lister), $.copy(listing_creation_number), $c);
    });
}
exports.create_listing_id_raw_ = create_listing_id_raw_;
function destroy_listing_(entry, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let { id: id, token_id: token_id, amount: amount, min_price: min_price, instant_sale: instant_sale, start_sec: start_sec, expiration_sec: expiration_sec, withdraw_cap: withdraw_cap, config: config } = entry;
        return [$.copy(id), $.copy(token_id), $.copy(amount), $.copy(min_price), instant_sale, $.copy(start_sec), $.copy(expiration_sec), withdraw_cap, $.copy(config)];
    });
}
exports.destroy_listing_ = destroy_listing_;
function direct_listing_(owner, creator, collection_name, token_name, property_version, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Aptos_token.Token.create_token_id_raw_($.copy(creator), $.copy(collection_name), $.copy(token_name), $.copy(property_version), $c);
        yield create_list_under_user_account_(owner, $.copy(token_id), $.copy(amount), $.copy(min_price), instant_sale, $.copy(start_sec), $.copy(expiration_sec), $.copy(withdraw_expiration_sec), $c, [$p[0]]);
        return;
    });
}
exports.direct_listing_ = direct_listing_;
function buildPayload_direct_listing(creator, collection_name, token_name, property_version, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "direct_listing", typeParamStrings, [
        creator,
        collection_name,
        token_name,
        property_version,
        amount,
        min_price,
        instant_sale,
        start_sec,
        expiration_sec,
        withdraw_expiration_sec,
    ], isJSON);
}
exports.buildPayload_direct_listing = buildPayload_direct_listing;
function get_listing_creator_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Guid.id_creator_address_((list).id, $c);
    });
}
exports.get_listing_creator_ = get_listing_creator_;
function get_listing_expiration_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((list).expiration_sec);
    });
}
exports.get_listing_expiration_ = get_listing_expiration_;
function get_listing_id_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((list).id);
    });
}
exports.get_listing_id_ = get_listing_id_;
function get_listing_id_tuple_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let id;
        id = $.copy((list).id);
        return [yield Stdlib.Guid.id_creation_num_(id, $c), yield Stdlib.Guid.id_creator_address_(id, $c)];
    });
}
exports.get_listing_id_tuple_ = get_listing_id_tuple_;
function get_listing_info_(lister_address, listing_creation_number, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let listing, listing_id, records;
        listing_id = yield Stdlib.Guid.create_id_($.copy(lister_address), $.copy(listing_creation_number), $c);
        records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(ListingRecords, [$p[0]]), $.copy(lister_address));
        if (!(yield Stdlib.Table.contains_((records).records, $.copy(listing_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ELISTING_NOT_EXIST), $c));
        }
        listing = yield Stdlib.Table.borrow_((records).records, $.copy(listing_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]);
        return [$.copy((listing).token_id), $.copy((listing).amount), $.copy((listing).min_price), $.copy((listing).instant_sale), $.copy((listing).start_sec), $.copy((listing).expiration_sec)];
    });
}
exports.get_listing_info_ = get_listing_info_;
function get_listing_instant_sale_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((list).instant_sale);
    });
}
exports.get_listing_instant_sale_ = get_listing_instant_sale_;
function get_listing_min_price_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((list).min_price);
    });
}
exports.get_listing_min_price_ = get_listing_min_price_;
function get_listing_start_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((list).start_sec);
    });
}
exports.get_listing_start_ = get_listing_start_;
function get_listing_token_amount_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((list).amount);
    });
}
exports.get_listing_token_amount_ = get_listing_token_amount_;
function get_listing_token_id_(list, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((list).token_id);
    });
}
exports.get_listing_token_id_ = get_listing_token_id_;
function initialize_listing_records_(owner, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let owner_addr;
        owner_addr = yield Stdlib.Signer.address_of_(owner, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(ListingRecords, [$p[0]]), $.copy(owner_addr)))) {
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(ListingRecords, [$p[0]]), owner, new ListingRecords({ records: yield Stdlib.Table.new___($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]), listing_event: yield Stdlib.Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(ListingEvent)]), cancel_listing_event: yield Stdlib.Account.new_event_handle_(owner, $c, [new move_to_ts_2.SimpleStructTag(CancelListingEvent)]) }, new move_to_ts_2.SimpleStructTag(ListingRecords, [$p[0]])));
        }
        else {
        }
        return;
    });
}
exports.initialize_listing_records_ = initialize_listing_records_;
function remove_listing_(lister_address, listing_creation_number, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let listing_id, records;
        listing_id = yield Stdlib.Guid.create_id_($.copy(lister_address), $.copy(listing_creation_number), $c);
        records = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(ListingRecords, [$p[0]]), $.copy(lister_address));
        if (!(yield Stdlib.Table.contains_((records).records, $.copy(listing_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ELISTING_NOT_EXIST), $c));
        }
        return yield Stdlib.Table.remove_((records).records, $.copy(listing_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_2.SimpleStructTag(Listing, [$p[0]])]);
    });
}
exports.remove_listing_ = remove_listing_;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_listing_utils::CancelListingEvent", CancelListingEvent.CancelListingEventParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_listing_utils::Listing", Listing.ListingParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_listing_utils::ListingEvent", ListingEvent.ListingEventParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_listing_utils::ListingRecords", ListingRecords.ListingRecordsParser);
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
    get CancelListingEvent() { return CancelListingEvent; }
    get Listing() { return Listing; }
    get ListingEvent() { return ListingEvent; }
    get ListingRecords() { return ListingRecords; }
    loadListingRecords(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield ListingRecords.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_cancel_direct_listing(listing_id_creation_number, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_cancel_direct_listing(listing_id_creation_number, $p, isJSON);
    }
    cancel_direct_listing(_account, listing_id_creation_number, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_cancel_direct_listing(listing_id_creation_number, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_direct_listing(creator, collection_name, token_name, property_version, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_direct_listing(creator, collection_name, token_name, property_version, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_expiration_sec, $p, isJSON);
    }
    direct_listing(_account, creator, collection_name, token_name, property_version, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_direct_listing(creator, collection_name, token_name, property_version, amount, min_price, instant_sale, start_sec, expiration_sec, withdraw_expiration_sec, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=auction_listing_utils.js.map