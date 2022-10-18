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
exports.App = exports.loadParsers = exports.buildPayload_initialize_market = exports.initialize_market_ = exports.buildPayload_creat_listing = exports.creat_listing_ = exports.buildPayload_buy_listing = exports.buy_listing_ = exports.Listings = exports.Config = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Auction_bid_utils = __importStar(require("./auction_bid_utils"));
const Auction_listing_utils = __importStar(require("./auction_listing_utils"));
exports.packageName = "Sonar";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "auction_instant_sale_example";
class Config {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.market_fee_numerator = proto['market_fee_numerator'];
        this.market_fee_denominator = proto['market_fee_denominator'];
        this.fee_address = proto['fee_address'];
    }
    static ConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Config);
        return new Config(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Config, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Config, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "Config", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Config = Config;
Config.moduleAddress = exports.moduleAddress;
Config.moduleName = exports.moduleName;
Config.structName = "Config";
Config.typeParameters = [];
Config.fields = [
    { name: "market_fee_numerator", typeTag: move_to_ts_1.AtomicTypeTag.U64 },
    { name: "market_fee_denominator", typeTag: move_to_ts_1.AtomicTypeTag.U64 },
    { name: "fee_address", typeTag: move_to_ts_1.AtomicTypeTag.Address }
];
class Listings {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.all_active_Listings = proto['all_active_Listings'];
    }
    static ListingsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Listings);
        return new Listings(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Listings, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Listings, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "Listings", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.all_active_Listings.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Listings = Listings;
Listings.moduleAddress = exports.moduleAddress;
Listings.moduleName = exports.moduleName;
Listings.structName = "Listings";
Listings.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Listings.fields = [
    { name: "all_active_Listings", typeTag: new move_to_ts_1.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_1.StructTag(new aptos_1.HexString("0x1"), "guid", "ID", []), new move_to_ts_1.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_listing_utils", "Listing", [new $.TypeParamIdx(0)])]) }
];
function buy_listing_(buyer, lister_address, listing_creation_number, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let config;
        config = yield $c.borrow_global_async(new move_to_ts_1.SimpleStructTag(Config), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        yield Auction_bid_utils.buy_from_owner_with_fee_(buyer, $.copy(lister_address), $.copy(listing_creation_number), $.copy((config).fee_address), $.copy((config).market_fee_numerator), $.copy((config).market_fee_denominator), $c, [$p[0]]);
        return;
    });
}
exports.buy_listing_ = buy_listing_;
function buildPayload_buy_listing(lister_address, listing_creation_number, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_instant_sale_example", "buy_listing", typeParamStrings, [
        lister_address,
        listing_creation_number,
    ], isJSON);
}
exports.buildPayload_buy_listing = buildPayload_buy_listing;
function creat_listing_(owner, creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Auction_listing_utils.direct_listing_(owner, $.copy(creator), $.copy(collection_name), $.copy(token_name), $.copy(property_version), $.copy(amount), $.copy(min_price), true, $.copy(start_sec), $.copy(expiration_sec), $.copy(withdraw_expiration_sec), $c, [$p[0]]);
        return;
    });
}
exports.creat_listing_ = creat_listing_;
function buildPayload_creat_listing(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_instant_sale_example", "creat_listing", typeParamStrings, [
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
exports.buildPayload_creat_listing = buildPayload_creat_listing;
function initialize_market_(account, market_fee_numerator, market_fee_denominator, fee_address, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4;
        temp$4 = account;
        temp$1 = $.copy(market_fee_denominator);
        temp$2 = $.copy(market_fee_numerator);
        temp$3 = $.copy(fee_address);
        yield $c.move_to_async(new move_to_ts_1.SimpleStructTag(Config), temp$4, new Config({ market_fee_numerator: temp$2, market_fee_denominator: temp$1, fee_address: temp$3 }, new move_to_ts_1.SimpleStructTag(Config)));
        return;
    });
}
exports.initialize_market_ = initialize_market_;
function buildPayload_initialize_market(market_fee_numerator, market_fee_denominator, fee_address, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "auction_instant_sale_example", "initialize_market", typeParamStrings, [
        market_fee_numerator,
        market_fee_denominator,
        fee_address,
    ], isJSON);
}
exports.buildPayload_initialize_market = buildPayload_initialize_market;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_instant_sale_example::Config", Config.ConfigParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::auction_instant_sale_example::Listings", Listings.ListingsParser);
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
    get Config() { return Config; }
    loadConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Config.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get Listings() { return Listings; }
    loadListings(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Listings.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_buy_listing(lister_address, listing_creation_number, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_buy_listing(lister_address, listing_creation_number, $p, isJSON);
    }
    buy_listing(_account, lister_address, listing_creation_number, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_buy_listing(lister_address, listing_creation_number, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_creat_listing(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_creat_listing(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, isJSON);
    }
    creat_listing(_account, creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_creat_listing(creator, collection_name, token_name, property_version, amount, min_price, start_sec, expiration_sec, withdraw_expiration_sec, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initialize_market(market_fee_numerator, market_fee_denominator, fee_address, isJSON = false) {
        return buildPayload_initialize_market(market_fee_numerator, market_fee_denominator, fee_address, isJSON);
    }
    initialize_market(_account, market_fee_numerator, market_fee_denominator, fee_address, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initialize_market(market_fee_numerator, market_fee_denominator, fee_address, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=auction_instant_sale_example.js.map