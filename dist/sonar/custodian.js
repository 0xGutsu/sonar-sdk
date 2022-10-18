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
exports.Collection = exports.Collateral = exports.BidData = exports.USER_START_QUOTE = exports.USER_START_BASE = exports.TICK_SIZE = exports.SELL = exports.RIGHT = exports.PURE_COIN_PAIR = exports.NO_CUSTODIAN = exports.MIN_ASK_DEFAULT = exports.MAX_BID_DEFAULT = exports.MARKET_ID = exports.LOT_SIZE = exports.LEFT = exports.HI_64 = exports.GENERIC_ASSET_TRANSFER_CUSTODIAN_ID = exports.GENERAL_CUSTODIAN_ID = exports.E_TOKEN_NOT_IN_COLLECTION = exports.E_ORDER_SIDE_NOT_ASK = exports.E_ORDER_DOESNT_EXIST = exports.E_NUM_TOKEN_IDS_AND_NAMES_NOT_EQUAL = exports.E_NUM_TOKEN_IDS_AND_AMOUNTS_NOT_EQUAL = exports.E_NO_TOKENS = exports.E_NO_ORDER_ID = exports.E_NO_NFT_STORES = exports.E_NO_NFT_STORE = exports.E_NO_COLLATERAL_FOR_MARKET = exports.E_NO_BID_HISTORY = exports.E_NO_BID_DATA = exports.E_NOT_SONAR = exports.E_MARKET_MAP_DOESNT_EXIST = exports.E_MARKET_DOESNT_EXIST = exports.E_INVALID_QUOTE_TYPE = exports.E_INVALID_EXPIRY = exports.E_INVALID_COLLATERAL = exports.E_INVALID_BASE_TYPE = exports.E_INVALID_AMOUNT = exports.E_INSUFFICIENT_QUOTE_TOKENS = exports.E_INSUFFICIENT_COLLATERAL = exports.E_INSUFFICIENT_BASE_TOKENS = exports.E_ERROR_CODE = exports.E_CUSTODIAN_EXISTS = exports.E_CUSTODIAN_DOESNT_EXIST = exports.BUY = exports.BID = exports.ASK = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.remove_orders_ = exports.buildPayload_register_user = exports.register_user_ = exports.buildPayload_register_token_market_by_name_string = exports.register_token_market_by_name_string_ = exports.buildPayload_register_token_market_by_name = exports.register_token_market_by_name_ = exports.register_token_market_ = exports.register_market_pure_coin_ = exports.buildPayload_register_custodian = exports.register_custodian_ = exports.buildPayload_place_market_sell = exports.place_market_sell_ = exports.place_market_order_ = exports.buildPayload_place_market_buy = exports.place_market_buy_ = exports.buildPayload_place_limit_order = exports.place_limit_order_ = exports.buildPayload_init_register_user = exports.init_register_user_ = exports.buildPayload_deposit_quote_collateral_tokens_script_real = exports.deposit_quote_collateral_tokens_script_real_ = exports.deposit_quote_collateral_tokens_script_ = exports.deposit_quote_collateral_tokens_in_bulk_method_ = exports.deposit_quote_collateral_tokens_in_bulk_ = exports.deposit_quote_collateral_tokens_ = exports.deposit_both_collateral_tokens_in_bulk_ = exports.buildPayload_deposit_base_collateral_tokens_script_real = exports.deposit_base_collateral_tokens_script_real_ = exports.deposit_base_collateral_tokens_script_ = exports.deposit_base_collateral_tokens_in_bulk_method_ = exports.deposit_base_collateral_tokens_in_bulk_ = exports.deposit_base_collateral_tokens_ = exports.decrement_tokens_from_senders_ = exports.decrement_tokens_ = exports.create_collection_and_token_and_register_market_ = exports.create_collection_and_token_ = exports.buildPayload_cancel_limit_order = exports.cancel_limit_order_ = exports.buildPayload_cancel_all_limit_orders = exports.cancel_all_limit_orders_ = exports.buildPayload_buy_specific = exports.buy_specific_ = exports.TokenMap = exports.Token = exports.Orders = exports.OrderInfo = exports.MarketTypeInfo = exports.MarketMap = exports.CustodianCap = void 0;
exports.App = exports.loadParsers = exports.withdraw_quote_collateral_tokens_ = exports.withdraw_base_collateral_tokens_ = exports.buildPayload_swap_agnostic = exports.swap_agnostic_ = exports.swap_ = exports.send_tokens_to_user_ = exports.send_tokens_to_targets_ = exports.route_quote_tokens_to_ = exports.route_quote_tokens_from_ = exports.route_base_tokens_to_ = exports.route_base_tokens_from_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Aptos_token = __importStar(require("../aptos_token"));
const Nexus = __importStar(require("../nexus"));
const Stdlib = __importStar(require("../stdlib"));
const Auction = __importStar(require("./auction"));
const Sonar_open_table = __importStar(require("./sonar_open_table"));
exports.packageName = "Sonar";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "custodian";
exports.ASK = true;
exports.BID = false;
exports.BUY = true;
exports.E_CUSTODIAN_DOESNT_EXIST = (0, move_to_ts_1.u64)("3");
exports.E_CUSTODIAN_EXISTS = (0, move_to_ts_1.u64)("2");
exports.E_ERROR_CODE = (0, move_to_ts_1.u64)("0");
exports.E_INSUFFICIENT_BASE_TOKENS = (0, move_to_ts_1.u64)("11");
exports.E_INSUFFICIENT_COLLATERAL = (0, move_to_ts_1.u64)("13");
exports.E_INSUFFICIENT_QUOTE_TOKENS = (0, move_to_ts_1.u64)("12");
exports.E_INVALID_AMOUNT = (0, move_to_ts_1.u64)("5");
exports.E_INVALID_BASE_TYPE = (0, move_to_ts_1.u64)("19");
exports.E_INVALID_COLLATERAL = (0, move_to_ts_1.u64)("17");
exports.E_INVALID_EXPIRY = (0, move_to_ts_1.u64)("6");
exports.E_INVALID_QUOTE_TYPE = (0, move_to_ts_1.u64)("20");
exports.E_MARKET_DOESNT_EXIST = (0, move_to_ts_1.u64)("4");
exports.E_MARKET_MAP_DOESNT_EXIST = (0, move_to_ts_1.u64)("25");
exports.E_NOT_SONAR = (0, move_to_ts_1.u64)("1");
exports.E_NO_BID_DATA = (0, move_to_ts_1.u64)("10");
exports.E_NO_BID_HISTORY = (0, move_to_ts_1.u64)("9");
exports.E_NO_COLLATERAL_FOR_MARKET = (0, move_to_ts_1.u64)("16");
exports.E_NO_NFT_STORE = (0, move_to_ts_1.u64)("8");
exports.E_NO_NFT_STORES = (0, move_to_ts_1.u64)("7");
exports.E_NO_ORDER_ID = (0, move_to_ts_1.u64)("14");
exports.E_NO_TOKENS = (0, move_to_ts_1.u64)("15");
exports.E_NUM_TOKEN_IDS_AND_AMOUNTS_NOT_EQUAL = (0, move_to_ts_1.u64)("24");
exports.E_NUM_TOKEN_IDS_AND_NAMES_NOT_EQUAL = (0, move_to_ts_1.u64)("21");
exports.E_ORDER_DOESNT_EXIST = (0, move_to_ts_1.u64)("22");
exports.E_ORDER_SIDE_NOT_ASK = (0, move_to_ts_1.u64)("23");
exports.E_TOKEN_NOT_IN_COLLECTION = (0, move_to_ts_1.u64)("18");
exports.GENERAL_CUSTODIAN_ID = (0, move_to_ts_1.u64)("1");
exports.GENERIC_ASSET_TRANSFER_CUSTODIAN_ID = (0, move_to_ts_1.u64)("1");
exports.HI_64 = (0, move_to_ts_1.u64)("18446744073709551615");
exports.LEFT = true;
exports.LOT_SIZE = (0, move_to_ts_1.u64)("1");
exports.MARKET_ID = (0, move_to_ts_1.u64)("0");
exports.MAX_BID_DEFAULT = (0, move_to_ts_1.u128)("0");
exports.MIN_ASK_DEFAULT = (0, move_to_ts_1.u128)("340282366920938463463374607431768211455");
exports.NO_CUSTODIAN = (0, move_to_ts_1.u64)("0");
exports.PURE_COIN_PAIR = (0, move_to_ts_1.u64)("0");
exports.RIGHT = false;
exports.SELL = false;
exports.TICK_SIZE = (0, move_to_ts_1.u64)("10");
exports.USER_START_BASE = (0, move_to_ts_1.u64)("100000000000");
exports.USER_START_QUOTE = (0, move_to_ts_1.u64)("10000000000000000000");
class BidData {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.user = proto["user"];
        this.timestamp = proto["timestamp"];
        this.price = proto["price"];
        this.expires_at = proto["expires_at"];
    }
    static BidDataParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BidData);
        return new BidData(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BidData", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.BidData = BidData;
BidData.moduleAddress = exports.moduleAddress;
BidData.moduleName = exports.moduleName;
BidData.structName = "BidData";
BidData.typeParameters = [];
BidData.fields = [
    { name: "user", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "timestamp", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "expires_at", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
];
class Collateral {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_map = proto["token_map"];
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
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Collateral", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_map.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Collateral = Collateral;
Collateral.moduleAddress = exports.moduleAddress;
Collateral.moduleName = exports.moduleName;
Collateral.structName = "Collateral";
Collateral.typeParameters = [];
Collateral.fields = [
    {
        name: "token_map",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "sonar_open_table", "OpenTable", [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "TokenMap", []),
        ]),
    },
];
class Collection {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.creator = proto["creator"];
        this.collection = proto["collection"];
    }
    static CollectionParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Collection);
        return new Collection(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Collection", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Collection = Collection;
Collection.moduleAddress = exports.moduleAddress;
Collection.moduleName = exports.moduleName;
Collection.structName = "Collection";
Collection.typeParameters = [];
Collection.fields = [
    { name: "creator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    {
        name: "collection",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []),
    },
];
class CustodianCap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.custodian_capability = proto["custodian_capability"];
        this.signer_capability = proto["signer_capability"];
    }
    static CustodianCapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CustodianCap);
        return new CustodianCap(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, CustodianCap, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, CustodianCap, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CustodianCap", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.custodian_capability.loadFullState(app);
            yield this.signer_capability.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CustodianCap = CustodianCap;
CustodianCap.moduleAddress = exports.moduleAddress;
CustodianCap.moduleName = exports.moduleName;
CustodianCap.structName = "CustodianCap";
CustodianCap.typeParameters = [];
CustodianCap.fields = [
    {
        name: "custodian_capability",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "registry", "CustodianCapability", []),
    },
    {
        name: "signer_capability",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", []),
    },
];
class MarketMap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.market_map = proto["market_map"];
        this.market_account_ids = proto["market_account_ids"];
        this.market_collections = proto["market_collections"];
    }
    static MarketMapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MarketMap);
        return new MarketMap(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, MarketMap, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, MarketMap, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MarketMap", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.market_map.loadFullState(app);
            yield this.market_account_ids.loadFullState(app);
            yield this.market_collections.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MarketMap = MarketMap;
MarketMap.moduleAddress = exports.moduleAddress;
MarketMap.moduleName = exports.moduleName;
MarketMap.structName = "MarketMap";
MarketMap.typeParameters = [];
MarketMap.fields = [
    {
        name: "market_map",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "sonar_open_table", "OpenTable", [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "Orders", []),
        ]),
    },
    {
        name: "market_account_ids",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "sonar_open_table", "OpenTable", [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "MarketTypeInfo", []),
            move_to_ts_2.AtomicTypeTag.U128,
        ]),
    },
    {
        name: "market_collections",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "sonar_open_table", "OpenTable", [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "MarketTypeInfo", []),
        ]),
    },
];
class MarketTypeInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.base_type_info = proto["base_type_info"];
        this.quote_type_info = proto["quote_type_info"];
        this.base_collection = proto["base_collection"];
        this.quote_collection = proto["quote_collection"];
    }
    static MarketTypeInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MarketTypeInfo);
        return new MarketTypeInfo(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MarketTypeInfo", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.base_type_info.loadFullState(app);
            yield this.quote_type_info.loadFullState(app);
            yield this.base_collection.loadFullState(app);
            yield this.quote_collection.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MarketTypeInfo = MarketTypeInfo;
MarketTypeInfo.moduleAddress = exports.moduleAddress;
MarketTypeInfo.moduleName = exports.moduleName;
MarketTypeInfo.structName = "MarketTypeInfo";
MarketTypeInfo.typeParameters = [];
MarketTypeInfo.fields = [
    {
        name: "base_type_info",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []),
    },
    {
        name: "quote_type_info",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []),
    },
    {
        name: "base_collection",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "Collection", []),
    },
    {
        name: "quote_collection",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "Collection", []),
    },
];
class OrderInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.user = proto["user"];
        this.token_id = proto["token_id"];
        this.amount = proto["amount"];
        this.price = proto["price"];
        this.side = proto["side"];
        this.auction_id = proto["auction_id"];
    }
    static OrderInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OrderInfo);
        return new OrderInfo(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OrderInfo", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.OrderInfo = OrderInfo;
OrderInfo.moduleAddress = exports.moduleAddress;
OrderInfo.moduleName = exports.moduleName;
OrderInfo.structName = "OrderInfo";
OrderInfo.typeParameters = [];
OrderInfo.fields = [
    { name: "user", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    {
        name: "token_id",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
    },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "price", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "side", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "auction_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
];
class Orders {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.order_map = proto["order_map"];
    }
    static OrdersParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Orders);
        return new Orders(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Orders", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.order_map.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Orders = Orders;
Orders.moduleAddress = exports.moduleAddress;
Orders.moduleName = exports.moduleName;
Orders.structName = "Orders";
Orders.typeParameters = [];
Orders.fields = [
    {
        name: "order_map",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "sonar_open_table", "OpenTable", [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "OrderInfo", [])),
        ]),
    },
];
class Token {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static TokenParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Token);
        return new Token(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Token", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Token = Token;
Token.moduleAddress = exports.moduleAddress;
Token.moduleName = exports.moduleName;
Token.structName = "Token";
Token.typeParameters = [];
Token.fields = [];
class TokenMap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_amounts = proto["token_amounts"];
        this.base_tokens = proto["base_tokens"];
        this.quote_tokens = proto["quote_tokens"];
    }
    static TokenMapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenMap);
        return new TokenMap(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenMap", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_amounts.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenMap = TokenMap;
TokenMap.moduleAddress = exports.moduleAddress;
TokenMap.moduleName = exports.moduleName;
TokenMap.structName = "TokenMap";
TokenMap.typeParameters = [];
TokenMap.fields = [
    {
        name: "token_amounts",
        typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "sonar_open_table", "OpenTable", [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            move_to_ts_2.AtomicTypeTag.U64,
        ]),
    },
    {
        name: "base_tokens",
        typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])),
    },
    {
        name: "quote_tokens",
        typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])),
    },
];
function buy_specific_(user, market_id, order_id, order_user, order_token_id_creator, order_token_id_collection, order_token_id_name, order_token_id_property_version, order_amount, order_side, order_price, order_auction_id, amount, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$10, temp$11, temp$12, temp$13, temp$14, temp$15, temp$16, temp$17, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, auction_id, coins, contains, general_custodian_ref, i, market_account_id, market_collections, market_map, market_map_ref, market_type_info, new_amount, new_side, order_info, order_infos, order_map, order_token_id, price, resource_signer, side, signer_capability, target_address, token_amount, token_id;
        order_token_id = yield Aptos_token.Token.create_token_id_raw_($.copy(order_token_id_creator), $.copy(order_token_id_collection), $.copy(order_token_id_name), $.copy(order_token_id_property_version), $c);
        market_map_ref = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        market_map = market_map_ref.market_map;
        temp$1 = yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        general_custodian_ref = temp$1.custodian_capability;
        signer_capability = temp$1.signer_capability;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_ref, $c), $c);
        order_map = (yield Sonar_open_table.borrow_mut_(market_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)])).order_map;
        order_infos = yield Sonar_open_table.borrow_mut_(order_map, $.copy(order_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo))]);
        temp$2 = $.copy(order_user);
        temp$3 = $.copy(order_token_id);
        temp$4 = $.copy(order_amount);
        temp$5 = order_side;
        temp$6 = $.copy(order_price);
        temp$7 = $.copy(order_auction_id);
        order_info = new OrderInfo({
            user: temp$2,
            token_id: temp$3,
            amount: temp$4,
            price: temp$6,
            side: temp$5,
            auction_id: temp$7,
        }, new move_to_ts_2.SimpleStructTag(OrderInfo));
        [temp$8, temp$9] = [order_infos, order_info];
        [contains, i] = yield Stdlib.Vector.index_of_(temp$8, temp$9, $c, [
            new move_to_ts_2.SimpleStructTag(OrderInfo),
        ]);
        if (!contains) {
            throw $.abortCode($.copy(exports.E_ORDER_DOESNT_EXIST));
        }
        market_collections = market_map_ref.market_collections;
        market_type_info = yield Sonar_open_table.borrow_(market_collections, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketTypeInfo)]);
        if ($.deep_eq($.copy(market_type_info.base_type_info), yield Stdlib.Type_info.type_of_($c, [$p[0]]))) {
            temp$10 = $.deep_eq($.copy(market_type_info.base_type_info), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]));
        }
        else {
            temp$10 = false;
        }
        if (!temp$10) {
            throw $.abortCode($.copy(exports.E_INVALID_BASE_TYPE));
        }
        if ($.deep_eq($.copy(market_type_info.quote_type_info), yield Stdlib.Type_info.type_of_($c, [$p[1]]))) {
            temp$11 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
        }
        else {
            temp$11 = false;
        }
        if (!temp$11) {
            throw $.abortCode($.copy(exports.E_INVALID_QUOTE_TYPE));
        }
        temp$12 = yield Stdlib.Vector.borrow_mut_(order_infos, $.copy(i), $c, [
            new move_to_ts_2.SimpleStructTag(OrderInfo),
        ]);
        target_address = temp$12.user;
        token_id = temp$12.token_id;
        token_amount = temp$12.amount;
        price = temp$12.price;
        side = temp$12.side;
        auction_id = temp$12.auction_id;
        if (!($.copy(side) == $.copy(exports.ASK))) {
            throw $.abortCode($.copy(exports.E_ORDER_SIDE_NOT_ASK));
        }
        if (!$.copy(token_amount).ge($.copy(amount))) {
            throw $.abortCode($.copy(exports.E_INVALID_AMOUNT));
        }
        coins = yield Stdlib.Coin.withdraw_(user, $.copy(price).mul($.copy(amount)), $c, [$p[1]]);
        yield Stdlib.Coin.deposit_($.copy(target_address), coins, $c, [$p[1]]);
        $.set(token_amount, $.copy(token_amount).sub($.copy(amount)));
        temp$13 = yield Stdlib.Account.create_signer_with_capability_(signer_capability, $c);
        resource_signer = temp$13;
        yield Aptos_token.Token.direct_transfer_(resource_signer, user, $.copy(token_id), $.copy(amount), $c);
        if (order_side == $.copy(exports.ASK)) {
            temp$14 = !(yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]));
        }
        else {
            temp$14 = false;
        }
        if (temp$14) {
            temp$15 = $.copy(auction_id).neq((0, move_to_ts_1.u64)("0"));
        }
        else {
            temp$15 = false;
        }
        if (temp$15) {
            yield Auction.complete_auction_(user, $.copy(auction_id), $c, [$p[0]]);
        }
        else {
            if (order_side == $.copy(exports.ASK)) {
                temp$16 = !(yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]));
            }
            else {
                temp$16 = false;
            }
            if (temp$16) {
                temp$17 = $.copy(auction_id).neq((0, move_to_ts_1.u64)("0"));
            }
            else {
                temp$17 = false;
            }
            if (temp$17) {
                yield Auction.complete_auction_(user, $.copy(auction_id), $c, [$p[1]]);
            }
            else {
            }
        }
        new_side = $.copy(side);
        new_amount = $.copy(token_amount);
        yield Stdlib.Vector.remove_(order_infos, $.copy(i), $c, [
            new move_to_ts_2.SimpleStructTag(OrderInfo),
        ]);
        if ($.copy(new_amount).gt((0, move_to_ts_1.u64)("0"))) {
            yield place_limit_order_(user, $.copy(market_id), new_side, $.copy(new_amount), $.copy(order_price), false, false, false, false, (0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0"), (0, move_to_ts_1.u64)("0"), $c, [$p[0], $p[1]]);
        }
        else {
        }
        yield cancel_limit_order_(user, $.copy(market_id), $.copy(order_id), order_side, $c, [$p[0], $p[1]]);
        return;
    });
}
exports.buy_specific_ = buy_specific_;
function buildPayload_buy_specific(market_id, order_id, order_user, order_token_id_creator, order_token_id_collection, order_token_id_name, order_token_id_property_version, order_amount, order_side, order_price, order_auction_id, amount, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "buy_specific", typeParamStrings, [
        market_id,
        order_id,
        order_user,
        order_token_id_creator,
        order_token_id_collection,
        order_token_id_name,
        order_token_id_property_version,
        order_amount,
        order_side,
        order_price,
        order_auction_id,
        amount,
    ], isJSON);
}
exports.buildPayload_buy_specific = buildPayload_buy_specific;
function cancel_all_limit_orders_(user, market_id, side, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let general_custodian_capability, market_map_ref, order_ids;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_CUSTODIAN_DOESNT_EXIST));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        order_ids = yield Nexus.Market.cancel_all_limit_orders_custodian_(yield Stdlib.Signer.address_of_(user, $c), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), side, general_custodian_capability, $c);
        market_map_ref = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        yield remove_orders_(market_map_ref, $.copy(market_id), $.copy(order_ids), !side, $c, [$p[0], $p[1]]);
        return;
    });
}
exports.cancel_all_limit_orders_ = cancel_all_limit_orders_;
function buildPayload_cancel_all_limit_orders(market_id, side, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "cancel_all_limit_orders", typeParamStrings, [market_id, side], isJSON);
}
exports.buildPayload_cancel_all_limit_orders = buildPayload_cancel_all_limit_orders;
function cancel_limit_order_(user, market_id, order_id, side, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let general_custodian_capability, market_map_ref;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_CUSTODIAN_DOESNT_EXIST));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        yield Nexus.Market.cancel_limit_order_custodian_(yield Stdlib.Signer.address_of_(user, $c), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), side, $.copy(order_id), general_custodian_capability, $c);
        market_map_ref = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        yield remove_orders_(market_map_ref, $.copy(market_id), [$.copy(order_id)], !side, $c, [$p[0], $p[1]]);
        return;
    });
}
exports.cancel_limit_order_ = cancel_limit_order_;
function buildPayload_cancel_limit_order(market_id, order_id, side, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "cancel_limit_order", typeParamStrings, [market_id, order_id, side], isJSON);
}
exports.buildPayload_cancel_limit_order = buildPayload_cancel_limit_order;
function create_collection_and_token_(creator, amount, collection_max, token_max, royalty_bps, collection_name, collection_desc, token_name, token_desc, uri, default_keys, default_vals, default_types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let mutate_setting, mutate_setting__1;
        mutate_setting = [false, false, false];
        yield Aptos_token.Token.create_collection_(creator, $.copy(collection_name), $.copy(collection_desc), $.copy(uri), $.copy(collection_max), $.copy(mutate_setting), $c);
        mutate_setting__1 = [false, false, false, false, true];
        yield Aptos_token.Token.create_token_script_(creator, $.copy(collection_name), $.copy(token_name), $.copy(token_desc), $.copy(amount), $.copy(token_max), $.copy(uri), yield Stdlib.Signer.address_of_(creator, $c), $.copy(royalty_bps), (0, move_to_ts_1.u64)("1000"), $.copy(mutate_setting__1), $.copy(default_keys), $.copy(default_vals), $.copy(default_types), $c);
        return yield Aptos_token.Token.create_token_id_raw_(yield Stdlib.Signer.address_of_(creator, $c), $.copy(collection_name), $.copy(token_name), (0, move_to_ts_1.u64)("0"), $c);
    });
}
exports.create_collection_and_token_ = create_collection_and_token_;
function create_collection_and_token_and_register_market_(user, amount, collection_max, token_max, royalty_bps, collection_name, collection_desc, token_name, token_desc, uri, default_keys, default_vals, default_types, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let base_collection, quote_collection;
        if (!$.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[0]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode($.copy(exports.E_INVALID_BASE_TYPE));
        }
        if (!(yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]))) {
            throw $.abortCode($.copy(exports.E_INVALID_QUOTE_TYPE));
        }
        yield create_collection_and_token_(user, $.copy(amount), $.copy(collection_max), $.copy(token_max), $.copy(royalty_bps), $.copy(collection_name), $.copy(collection_desc), $.copy(token_name), $.copy(token_desc), $.copy(uri), $.copy(default_keys), $.copy(default_vals), $.copy(default_types), $c);
        base_collection = new Collection({
            creator: yield Stdlib.Signer.address_of_(user, $c),
            collection: $.copy(collection_name),
        }, new move_to_ts_2.SimpleStructTag(Collection));
        quote_collection = new Collection({
            creator: new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"),
            collection: yield Stdlib.String.utf8_([
                (0, move_to_ts_1.u8)("78"),
                (0, move_to_ts_1.u8)("85"),
                (0, move_to_ts_1.u8)("76"),
                (0, move_to_ts_1.u8)("76"),
                (0, move_to_ts_1.u8)("95"),
                (0, move_to_ts_1.u8)("67"),
                (0, move_to_ts_1.u8)("79"),
                (0, move_to_ts_1.u8)("76"),
                (0, move_to_ts_1.u8)("76"),
                (0, move_to_ts_1.u8)("69"),
                (0, move_to_ts_1.u8)("67"),
                (0, move_to_ts_1.u8)("84"),
                (0, move_to_ts_1.u8)("73"),
                (0, move_to_ts_1.u8)("79"),
                (0, move_to_ts_1.u8)("78"),
            ], $c),
        }, new move_to_ts_2.SimpleStructTag(Collection));
        yield register_token_market_(user, $.copy(base_collection), $.copy(quote_collection), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.create_collection_and_token_and_register_market_ = create_collection_and_token_and_register_market_;
function decrement_tokens_(user, market_account_id, tokens_to_remove_from_user, user_token_amounts, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, amount, token_amount, token_amounts, token_id;
        temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), $.copy(user))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        token_amounts = temp$1.token_amounts;
        temp$1.base_tokens;
        temp$1.quote_tokens;
        while ((yield Stdlib.Vector.length_(tokens_to_remove_from_user, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                token_id = yield Stdlib.Vector.pop_back_(tokens_to_remove_from_user, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                amount = yield Stdlib.Vector.pop_back_(user_token_amounts, $c, [
                    move_to_ts_2.AtomicTypeTag.U64,
                ]);
                [temp$2, temp$3] = [token_amounts, $.copy(token_id)];
                if (!(yield Sonar_open_table.contains_(temp$2, temp$3, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    move_to_ts_2.AtomicTypeTag.U64,
                ]))) {
                    throw $.abortCode($.copy(exports.E_INSUFFICIENT_COLLATERAL));
                }
                token_amount = yield Sonar_open_table.borrow_mut_(token_amounts, $.copy(token_id), $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    move_to_ts_2.AtomicTypeTag.U64,
                ]);
                if (!$.copy(token_amount).ge($.copy(amount))) {
                    throw $.abortCode($.copy(exports.E_INSUFFICIENT_COLLATERAL));
                }
                $.set(token_amount, $.copy(token_amount).sub($.copy(amount)));
                if ($.copy(token_amount).eq((0, move_to_ts_1.u64)("0"))) {
                    yield Sonar_open_table.remove_(token_amounts, $.copy(token_id), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        move_to_ts_2.AtomicTypeTag.U64,
                    ]);
                }
                else {
                }
            }
        }
        return;
    });
}
exports.decrement_tokens_ = decrement_tokens_;
function decrement_tokens_from_senders_(token_senders, market_account_id, tokens_to_remove_from_target, target_token_amounts, is_base, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, amount, base_tokens, contains, i, quote_tokens, target_address, token_amount, token_amounts, token_id, tokens;
        while ((yield Stdlib.Vector.length_(tokens_to_remove_from_target, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                target_address = yield Stdlib.Vector.pop_back_(token_senders, $c, [
                    move_to_ts_2.AtomicTypeTag.Address,
                ]);
                temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), $.copy(target_address))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
                token_amounts = temp$1.token_amounts;
                base_tokens = temp$1.base_tokens;
                quote_tokens = temp$1.quote_tokens;
                token_id = yield Stdlib.Vector.pop_back_(tokens_to_remove_from_target, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                amount = yield Stdlib.Vector.pop_back_(target_token_amounts, $c, [
                    move_to_ts_2.AtomicTypeTag.U64,
                ]);
                [temp$2, temp$3] = [token_amounts, $.copy(token_id)];
                if (!(yield Sonar_open_table.contains_(temp$2, temp$3, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    move_to_ts_2.AtomicTypeTag.U64,
                ]))) {
                    throw $.abortCode($.copy(exports.E_INSUFFICIENT_COLLATERAL));
                }
                token_amount = yield Sonar_open_table.borrow_mut_(token_amounts, $.copy(token_id), $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    move_to_ts_2.AtomicTypeTag.U64,
                ]);
                if (!$.copy(token_amount).ge($.copy(amount))) {
                    throw $.abortCode($.copy(exports.E_INSUFFICIENT_COLLATERAL));
                }
                $.set(token_amount, $.copy(token_amount).sub($.copy(amount)));
                if ($.copy(token_amount).eq((0, move_to_ts_1.u64)("0"))) {
                    yield Sonar_open_table.remove_(token_amounts, $.copy(token_id), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        move_to_ts_2.AtomicTypeTag.U64,
                    ]);
                }
                else {
                }
                while ($.copy(amount).gt((0, move_to_ts_1.u64)("0"))) {
                    {
                        if (is_base) {
                            temp$4 = base_tokens;
                        }
                        else {
                            temp$4 = quote_tokens;
                        }
                        tokens = temp$4;
                        [temp$5, temp$6] = [tokens, token_id];
                        [contains, i] = yield Stdlib.Vector.index_of_(temp$5, temp$6, $c, [
                            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        ]);
                        if (!contains) {
                            throw $.abortCode($.copy(exports.E_INSUFFICIENT_COLLATERAL));
                        }
                        yield Stdlib.Vector.remove_(tokens, $.copy(i), $c, [
                            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        ]);
                        amount = $.copy(amount).sub((0, move_to_ts_1.u64)("1"));
                    }
                }
            }
        }
        return;
    });
}
exports.decrement_tokens_from_senders_ = decrement_tokens_from_senders_;
function deposit_base_collateral_tokens_(user, market_map_ref, market_id, token_id, token_name, amount, property_version, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, base_tokens, general_custodian_capability, market_account_id, market_collections, ref_token_data_id, ref_token_id, resource_signer, token_amount, token_amounts, token_map;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_CUSTODIAN_DOESNT_EXIST));
        }
        if (!(yield Aptos_token.Token.balance_of_(yield Stdlib.Signer.address_of_(user, $c), $.copy(token_id), $c)).ge($.copy(amount))) {
            throw $.abortCode($.copy(exports.E_INVALID_AMOUNT));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $c);
        market_collections = market_map_ref.market_collections;
        if (!(yield Sonar_open_table.contains_(market_collections, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketTypeInfo)]))) {
            throw $.abortCode($.copy(exports.E_MARKET_DOESNT_EXIST));
        }
        let { base_type_info: base_type_info, base_collection: base_collection } = $.copy(yield Sonar_open_table.borrow_(market_collections, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketTypeInfo)]));
        if (!$.deep_eq($.copy(base_type_info), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode($.copy(exports.E_INVALID_COLLATERAL));
        }
        let { creator: creator, collection: collection } = $.copy(base_collection);
        ref_token_data_id = yield Aptos_token.Token.create_token_data_id_($.copy(creator), $.copy(collection), $.copy(token_name), $c);
        ref_token_id = yield Aptos_token.Token.create_token_id_($.copy(ref_token_data_id), $.copy(property_version), $c);
        if (!$.deep_eq($.copy(token_id), $.copy(ref_token_id))) {
            throw $.abortCode($.copy(exports.E_TOKEN_NOT_IN_COLLECTION));
        }
        yield Nexus.User.deposit_generic_asset_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $.copy(amount), general_custodian_capability, $c, [$p[0]]);
        temp$1 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
        resource_signer = temp$1;
        yield Aptos_token.Token.direct_transfer_(user, resource_signer, $.copy(token_id), $.copy(amount), $c);
        token_map = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), yield Stdlib.Signer.address_of_(user, $c))).token_map;
        [temp$2, temp$3] = [token_map, $.copy(market_account_id)];
        if (!(yield Sonar_open_table.contains_(temp$2, temp$3, $c, [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.SimpleStructTag(TokenMap),
        ]))) {
            yield Sonar_open_table.add_(token_map, $.copy(market_account_id), new TokenMap({
                token_amounts: yield Sonar_open_table.empty_($c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    move_to_ts_2.AtomicTypeTag.U64,
                ]),
                base_tokens: yield Stdlib.Vector.empty_($c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]),
                quote_tokens: yield Stdlib.Vector.empty_($c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]),
            }, new move_to_ts_2.SimpleStructTag(TokenMap)), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        }
        else {
        }
        temp$4 = yield Sonar_open_table.borrow_mut_(token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        token_amounts = temp$4.token_amounts;
        base_tokens = temp$4.base_tokens;
        temp$4.quote_tokens;
        [temp$5, temp$6] = [token_amounts, $.copy(token_id)];
        if (yield Sonar_open_table.contains_(temp$5, temp$6, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            move_to_ts_2.AtomicTypeTag.U64,
        ])) {
            token_amount = yield Sonar_open_table.borrow_mut_(token_amounts, $.copy(token_id), $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                move_to_ts_2.AtomicTypeTag.U64,
            ]);
            $.set(token_amount, $.copy(token_amount).add($.copy(amount)));
        }
        else {
            yield Sonar_open_table.add_(token_amounts, $.copy(token_id), $.copy(amount), $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                move_to_ts_2.AtomicTypeTag.U64,
            ]);
        }
        while ($.copy(amount).gt((0, move_to_ts_1.u64)("0"))) {
            {
                yield Stdlib.Vector.push_back_(base_tokens, $.copy(token_id), $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                amount = $.copy(amount).sub((0, move_to_ts_1.u64)("1"));
            }
        }
        return;
    });
}
exports.deposit_base_collateral_tokens_ = deposit_base_collateral_tokens_;
function deposit_base_collateral_tokens_in_bulk_(user, market_id, token_ids, amounts, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount, name, property_version, token_id;
        if (!(yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).eq(yield Stdlib.Vector.length_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]))) {
            throw $.abortCode($.copy(exports.E_NUM_TOKEN_IDS_AND_AMOUNTS_NOT_EQUAL));
        }
        while ((yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                token_id = yield Stdlib.Vector.pop_back_(token_ids, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                [, , name, property_version] =
                    yield Aptos_token.Token.get_token_id_fields_(token_id, $c);
                amount = yield Stdlib.Vector.pop_back_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]);
                yield deposit_base_collateral_tokens_script_(user, $.copy(market_id), $.copy(token_id), $.copy(name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
            }
        }
        return;
    });
}
exports.deposit_base_collateral_tokens_in_bulk_ = deposit_base_collateral_tokens_in_bulk_;
function deposit_base_collateral_tokens_in_bulk_method_(market_map_ref, user, market_id, token_ids, amounts, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount, name, property_version, token_id;
        if (!(yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).eq(yield Stdlib.Vector.length_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]))) {
            throw $.abortCode($.copy(exports.E_NUM_TOKEN_IDS_AND_AMOUNTS_NOT_EQUAL));
        }
        while ((yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                token_id = yield Stdlib.Vector.pop_back_(token_ids, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                [, , name, property_version] =
                    yield Aptos_token.Token.get_token_id_fields_(token_id, $c);
                amount = yield Stdlib.Vector.pop_back_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]);
                yield deposit_base_collateral_tokens_(user, market_map_ref, $.copy(market_id), $.copy(token_id), $.copy(name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
            }
        }
        return;
    });
}
exports.deposit_base_collateral_tokens_in_bulk_method_ = deposit_base_collateral_tokens_in_bulk_method_;
function deposit_base_collateral_tokens_script_(user, market_id, token_id, token_name, amount, property_version, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let market_map_ref;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_MARKET_MAP_DOESNT_EXIST));
        }
        market_map_ref = yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        yield deposit_base_collateral_tokens_(user, market_map_ref, $.copy(market_id), $.copy(token_id), $.copy(token_name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
        return;
    });
}
exports.deposit_base_collateral_tokens_script_ = deposit_base_collateral_tokens_script_;
function deposit_base_collateral_tokens_script_real_(user, market_id, amount, creator, collection, name, property_version, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Aptos_token.Token.create_token_id_raw_($.copy(creator), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        yield deposit_base_collateral_tokens_script_(user, $.copy(market_id), $.copy(token_id), $.copy(name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
        return;
    });
}
exports.deposit_base_collateral_tokens_script_real_ = deposit_base_collateral_tokens_script_real_;
function buildPayload_deposit_base_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p /* <AssetType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "deposit_base_collateral_tokens_script_real", typeParamStrings, [market_id, amount, creator, collection, name, property_version], isJSON);
}
exports.buildPayload_deposit_base_collateral_tokens_script_real = buildPayload_deposit_base_collateral_tokens_script_real;
function deposit_both_collateral_tokens_in_bulk_(user, market_id, base_token_ids, base_amounts, quote_token_ids, quote_amounts, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        yield deposit_base_collateral_tokens_in_bulk_(user, $.copy(market_id), $.copy(base_token_ids), $.copy(base_amounts), $c, [$p[0]]);
        yield deposit_quote_collateral_tokens_in_bulk_(user, $.copy(market_id), $.copy(quote_token_ids), $.copy(quote_amounts), $c, [$p[0]]);
        return;
    });
}
exports.deposit_both_collateral_tokens_in_bulk_ = deposit_both_collateral_tokens_in_bulk_;
function deposit_quote_collateral_tokens_(user, market_map_ref, market_id, token_id, token_name, amount, property_version, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, general_custodian_capability, market_account_id, market_collections, quote_tokens, ref_token_data_id, ref_token_id, resource_signer, token_amount, token_amounts, token_map;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_CUSTODIAN_DOESNT_EXIST));
        }
        if (!(yield Aptos_token.Token.balance_of_(yield Stdlib.Signer.address_of_(user, $c), $.copy(token_id), $c)).ge($.copy(amount))) {
            throw $.abortCode($.copy(exports.E_INVALID_AMOUNT));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $c);
        market_collections = market_map_ref.market_collections;
        if (!(yield Sonar_open_table.contains_(market_collections, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketTypeInfo)]))) {
            throw $.abortCode($.copy(exports.E_MARKET_DOESNT_EXIST));
        }
        let { quote_type_info: quote_type_info, quote_collection: quote_collection } = $.copy(yield Sonar_open_table.borrow_(market_collections, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketTypeInfo)]));
        if (!$.deep_eq($.copy(quote_type_info), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode($.copy(exports.E_INVALID_COLLATERAL));
        }
        let { creator: creator, collection: collection } = $.copy(quote_collection);
        ref_token_data_id = yield Aptos_token.Token.create_token_data_id_($.copy(creator), $.copy(collection), $.copy(token_name), $c);
        ref_token_id = yield Aptos_token.Token.create_token_id_($.copy(ref_token_data_id), $.copy(property_version), $c);
        if (!$.deep_eq($.copy(token_id), $.copy(ref_token_id))) {
            throw $.abortCode($.copy(exports.E_TOKEN_NOT_IN_COLLECTION));
        }
        yield Nexus.User.deposit_generic_asset_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $.copy(amount), general_custodian_capability, $c, [$p[0]]);
        temp$1 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
        resource_signer = temp$1;
        yield Aptos_token.Token.direct_transfer_(user, resource_signer, $.copy(token_id), $.copy(amount), $c);
        token_map = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).token_map;
        temp$2 = yield Sonar_open_table.borrow_mut_(token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        token_amounts = temp$2.token_amounts;
        temp$2.base_tokens;
        quote_tokens = temp$2.quote_tokens;
        [temp$3, temp$4] = [token_amounts, $.copy(token_id)];
        if (yield Sonar_open_table.contains_(temp$3, temp$4, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            move_to_ts_2.AtomicTypeTag.U64,
        ])) {
            token_amount = yield Sonar_open_table.borrow_mut_(token_amounts, $.copy(token_id), $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                move_to_ts_2.AtomicTypeTag.U64,
            ]);
            $.set(token_amount, $.copy(token_amount).add($.copy(amount)));
        }
        else {
            yield Sonar_open_table.add_(token_amounts, $.copy(token_id), $.copy(amount), $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                move_to_ts_2.AtomicTypeTag.U64,
            ]);
        }
        while ($.copy(amount).gt((0, move_to_ts_1.u64)("0"))) {
            {
                yield Stdlib.Vector.push_back_(quote_tokens, $.copy(token_id), $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                amount = $.copy(amount).sub((0, move_to_ts_1.u64)("1"));
            }
        }
        return;
    });
}
exports.deposit_quote_collateral_tokens_ = deposit_quote_collateral_tokens_;
function deposit_quote_collateral_tokens_in_bulk_(user, market_id, token_ids, amounts, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount, name, property_version, token_id;
        if (!(yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).eq(yield Stdlib.Vector.length_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]))) {
            throw $.abortCode($.copy(exports.E_NUM_TOKEN_IDS_AND_AMOUNTS_NOT_EQUAL));
        }
        while ((yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                token_id = yield Stdlib.Vector.pop_back_(token_ids, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                [, , name, property_version] =
                    yield Aptos_token.Token.get_token_id_fields_(token_id, $c);
                amount = yield Stdlib.Vector.pop_back_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]);
                yield deposit_quote_collateral_tokens_script_(user, $.copy(market_id), $.copy(token_id), $.copy(name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
            }
        }
        return;
    });
}
exports.deposit_quote_collateral_tokens_in_bulk_ = deposit_quote_collateral_tokens_in_bulk_;
function deposit_quote_collateral_tokens_in_bulk_method_(market_map_ref, user, market_id, token_ids, amounts, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount, name, property_version, token_id;
        if (!(yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).eq(yield Stdlib.Vector.length_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]))) {
            throw $.abortCode($.copy(exports.E_NUM_TOKEN_IDS_AND_AMOUNTS_NOT_EQUAL));
        }
        while ((yield Stdlib.Vector.length_(token_ids, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                token_id = yield Stdlib.Vector.pop_back_(token_ids, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                [, , name, property_version] =
                    yield Aptos_token.Token.get_token_id_fields_(token_id, $c);
                amount = yield Stdlib.Vector.pop_back_(amounts, $c, [move_to_ts_2.AtomicTypeTag.U64]);
                yield deposit_quote_collateral_tokens_(user, market_map_ref, $.copy(market_id), $.copy(token_id), $.copy(name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
            }
        }
        return;
    });
}
exports.deposit_quote_collateral_tokens_in_bulk_method_ = deposit_quote_collateral_tokens_in_bulk_method_;
function deposit_quote_collateral_tokens_script_(user, market_id, token_id, token_name, amount, property_version, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let market_map_ref;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_MARKET_MAP_DOESNT_EXIST));
        }
        market_map_ref = yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        yield deposit_quote_collateral_tokens_(user, market_map_ref, $.copy(market_id), $.copy(token_id), $.copy(token_name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
        return;
    });
}
exports.deposit_quote_collateral_tokens_script_ = deposit_quote_collateral_tokens_script_;
function deposit_quote_collateral_tokens_script_real_(user, market_id, amount, creator, collection, name, property_version, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield Aptos_token.Token.create_token_id_raw_($.copy(creator), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        yield deposit_quote_collateral_tokens_script_(user, $.copy(market_id), $.copy(token_id), $.copy(name), $.copy(amount), $.copy(property_version), $c, [$p[0]]);
        return;
    });
}
exports.deposit_quote_collateral_tokens_script_real_ = deposit_quote_collateral_tokens_script_real_;
function buildPayload_deposit_quote_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p /* <AssetType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "deposit_quote_collateral_tokens_script_real", typeParamStrings, [market_id, amount, creator, collection, name, property_version], isJSON);
}
exports.buildPayload_deposit_quote_collateral_tokens_script_real = buildPayload_deposit_quote_collateral_tokens_script_real;
function init_register_user_(user, market_id, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let general_custodian_id, market_account_id, token_map, user_token_map;
        general_custodian_id = yield Nexus.Registry.custodian_id_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability, $c);
        yield Nexus.User.register_market_account_(user, $.copy(market_id), $.copy(general_custodian_id), $c, [$p[0], $p[1]]);
        user_token_map = new TokenMap({
            token_amounts: yield Sonar_open_table.empty_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                move_to_ts_2.AtomicTypeTag.U64,
            ]),
            base_tokens: yield Stdlib.Vector.empty_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            ]),
            quote_tokens: yield Stdlib.Vector.empty_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            ]),
        }, new move_to_ts_2.SimpleStructTag(TokenMap));
        token_map = yield Sonar_open_table.empty_($c, [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.SimpleStructTag(TokenMap),
        ]);
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c);
        yield Sonar_open_table.add_(token_map, $.copy(market_account_id), user_token_map, $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(Collateral), user, new Collateral({ token_map: token_map }, new move_to_ts_2.SimpleStructTag(Collateral)));
        return;
    });
}
exports.init_register_user_ = init_register_user_;
function buildPayload_init_register_user(market_id, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "init_register_user", typeParamStrings, [market_id], isJSON);
}
exports.buildPayload_init_register_user = buildPayload_init_register_user;
function place_limit_order_(user, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, is_auction, auction_min_price, listing_expiration_sec, withdraw_expiration_sec, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$10, temp$11, temp$12, temp$2, temp$3, temp$6, temp$7, temp$8, temp$9, auction_id, base, base_tokens, dummy_token_id, general_custodian_capability, is_base_token, is_base_token__4, is_quote_token, is_quote_token__5, market_account_id, market_map_ref, num_left, order_id, order_info, order_map, quote, quote_tokens, target_order_ids, temp_token_ids, token_id, token_id__13, tokens, using_base_token_and_quote_coin, using_quote_token_and_base_coin;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_CUSTODIAN_DOESNT_EXIST));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        market_map_ref = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        [base, quote, order_id, target_order_ids] =
            yield Nexus.Market.place_limit_order_custodian_(yield Stdlib.Signer.address_of_(user, $c), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), side, $.copy(size), $.copy(price), post_or_abort, fill_or_abort, immediate_or_cancel, general_custodian_capability, $c, [$p[0], $p[1]]);
        is_base_token = !(yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]));
        is_quote_token = !(yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]));
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $c);
        if (side == $.copy(exports.BID)) {
            if (is_quote_token) {
                yield route_quote_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(price).sub($.copy(quote)), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                yield route_base_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        else {
            if (is_quote_token) {
                yield route_quote_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                yield route_base_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(size).sub($.copy(base)), $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        yield remove_orders_(market_map_ref, $.copy(market_id), $.copy(target_order_ids), !side, $c, [$p[0], $p[1]]);
        if ($.copy(order_id).eq((0, move_to_ts_1.u128)("0"))) {
            return;
        }
        else {
        }
        order_map = (yield Sonar_open_table.borrow_mut_(market_map_ref.market_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)])).order_map;
        num_left = $.copy(size);
        temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), yield Stdlib.Signer.address_of_(user, $c))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        temp$1.token_amounts;
        base_tokens = temp$1.base_tokens;
        quote_tokens = temp$1.quote_tokens;
        if (is_base_token) {
            temp$2 = side == $.copy(exports.ASK);
        }
        else {
            temp$2 = false;
        }
        if (temp$2) {
            temp$3 = base_tokens;
        }
        else {
            temp$3 = quote_tokens;
        }
        tokens = temp$3;
        order_info = yield Stdlib.Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
        temp_token_ids = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        is_base_token__4 = $.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[0]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]));
        is_quote_token__5 = $.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[1]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]));
        if (side == $.copy(exports.ASK) && is_base_token__4) {
            temp$6 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
        }
        else {
            temp$6 = false;
        }
        using_base_token_and_quote_coin = temp$6;
        if (side == $.copy(exports.BID) && is_quote_token__5) {
            temp$7 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]);
        }
        else {
            temp$7 = false;
        }
        using_quote_token_and_base_coin = temp$7;
        if (is_base_token__4) {
            temp$8 = side == $.copy(exports.ASK);
        }
        else {
            temp$8 = false;
        }
        if (temp$8) {
            temp$10 = true;
        }
        else {
            if (is_quote_token__5) {
                temp$9 = side == $.copy(exports.BID);
            }
            else {
                temp$9 = false;
            }
            temp$10 = temp$9;
        }
        if (temp$10) {
            while ($.copy(num_left).gt((0, move_to_ts_1.u64)("0"))) {
                {
                    if (!(yield Stdlib.Vector.length_(tokens, $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    ])).gt((0, move_to_ts_1.u64)("0"))) {
                        throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
                    }
                    token_id = yield Stdlib.Vector.pop_back_(tokens, $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    ]);
                    if (is_auction && using_base_token_and_quote_coin) {
                        temp$12 = yield Auction.create_auction_with_token_id_(user, $.copy(token_id), (0, move_to_ts_1.u64)("1"), $.copy(auction_min_price), yield Stdlib.Timestamp.now_seconds_($c), $.copy(listing_expiration_sec), $.copy(withdraw_expiration_sec), $c, [$p[1]]);
                    }
                    else {
                        if (is_auction && using_quote_token_and_base_coin) {
                            temp$11 = yield Auction.create_auction_with_token_id_(user, $.copy(token_id), (0, move_to_ts_1.u64)("1"), $.copy(auction_min_price), yield Stdlib.Timestamp.now_seconds_($c), $.copy(listing_expiration_sec), $.copy(withdraw_expiration_sec), $c, [$p[0]]);
                        }
                        else {
                            temp$11 = (0, move_to_ts_1.u64)("0");
                        }
                        temp$12 = temp$11;
                    }
                    auction_id = temp$12;
                    yield Stdlib.Vector.push_back_(order_info, new OrderInfo({
                        user: yield Stdlib.Signer.address_of_(user, $c),
                        token_id: $.copy(token_id),
                        amount: (0, move_to_ts_1.u64)("1"),
                        price: $.copy(price),
                        side: side,
                        auction_id: $.copy(auction_id),
                    }, new move_to_ts_2.SimpleStructTag(OrderInfo)), $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                    yield Stdlib.Vector.push_back_(temp_token_ids, $.copy(token_id), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    ]);
                    num_left = $.copy(num_left).sub((0, move_to_ts_1.u64)("1"));
                }
            }
            while ((yield Stdlib.Vector.length_(temp_token_ids, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            ])).gt((0, move_to_ts_1.u64)("0"))) {
                {
                    token_id__13 = yield Stdlib.Vector.pop_back_(temp_token_ids, $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    ]);
                    yield Stdlib.Vector.push_back_(tokens, $.copy(token_id__13), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    ]);
                }
            }
        }
        else {
            dummy_token_id = yield Aptos_token.Token.create_token_id_raw_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("33")], $c), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("33")], $c), (0, move_to_ts_1.u64)("0"), $c);
            while ($.copy(num_left).gt((0, move_to_ts_1.u64)("0"))) {
                {
                    yield Stdlib.Vector.push_back_(order_info, new OrderInfo({
                        user: yield Stdlib.Signer.address_of_(user, $c),
                        token_id: $.copy(dummy_token_id),
                        amount: (0, move_to_ts_1.u64)("1"),
                        price: $.copy(price),
                        side: side,
                        auction_id: (0, move_to_ts_1.u64)("0"),
                    }, new move_to_ts_2.SimpleStructTag(OrderInfo)), $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                    num_left = $.copy(num_left).sub((0, move_to_ts_1.u64)("1"));
                }
            }
        }
        yield Sonar_open_table.add_(order_map, $.copy(order_id), order_info, $c, [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo)),
        ]);
        return;
    });
}
exports.place_limit_order_ = place_limit_order_;
function buildPayload_place_limit_order(market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, is_auction, auction_min_price, listing_expiration_sec, withdraw_expiration_sec, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "place_limit_order", typeParamStrings, [
        market_id,
        side,
        size,
        price,
        post_or_abort,
        fill_or_abort,
        immediate_or_cancel,
        is_auction,
        auction_min_price,
        listing_expiration_sec,
        withdraw_expiration_sec,
    ], isJSON);
}
exports.buildPayload_place_limit_order = buildPayload_place_limit_order;
function place_market_buy_(user, market_id, min_base, max_base, min_quote, max_quote, limit_price, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        yield place_market_order_(user, $.copy(market_id), $.copy(exports.BUY), $.copy(min_base), $.copy(max_base), $.copy(min_quote), $.copy(max_quote), $.copy(limit_price), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.place_market_buy_ = place_market_buy_;
function buildPayload_place_market_buy(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "place_market_buy", typeParamStrings, [market_id, min_base, max_base, min_quote, max_quote, limit_price], isJSON);
}
exports.buildPayload_place_market_buy = buildPayload_place_market_buy;
function place_market_order_(user, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, base, general_custodian_ref, is_base_token, is_quote_token, market_account_id, market_map_ref, quote, target_order_ids;
        general_custodian_ref = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        market_map_ref = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        [base, quote, target_order_ids] =
            yield Nexus.Market.place_market_order_custodian_(yield Stdlib.Signer.address_of_(user, $c), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), direction, $.copy(min_base), $.copy(max_base), $.copy(min_quote), $.copy(max_quote), $.copy(limit_price), general_custodian_ref, $c, [$p[0], $p[1]]);
        is_base_token = !(yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]));
        is_quote_token = !(yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]));
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_ref, $c), $c);
        yield Stdlib.Debug.print_(base, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        yield Stdlib.Debug.print_(quote, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        yield Stdlib.Debug.print_(target_order_ids, $c, [
            new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U128),
        ]);
        temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), yield Stdlib.Signer.address_of_(user, $c))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        temp$1.token_amounts;
        temp$1.base_tokens;
        temp$1.quote_tokens;
        if (direction == $.copy(exports.BUY)) {
            if (is_quote_token) {
                yield route_quote_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(max_quote).sub($.copy(quote)), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                yield route_base_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        else {
            if (is_quote_token) {
                yield route_quote_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                yield route_base_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(max_base).sub($.copy(base)), $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        yield remove_orders_(market_map_ref, $.copy(market_id), $.copy(target_order_ids), !direction, $c, [$p[0], $p[1]]);
        return;
    });
}
exports.place_market_order_ = place_market_order_;
function place_market_sell_(user, market_id, min_base, max_base, min_quote, max_quote, limit_price, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        yield place_market_order_(user, $.copy(market_id), $.copy(exports.SELL), $.copy(min_base), $.copy(max_base), $.copy(min_quote), $.copy(max_quote), $.copy(limit_price), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.place_market_sell_ = place_market_sell_;
function buildPayload_place_market_sell(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "place_market_sell", typeParamStrings, [market_id, min_base, max_base, min_quote, max_quote, limit_price], isJSON);
}
exports.buildPayload_place_market_sell = buildPayload_place_market_sell;
function register_custodian_(sonar, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let custodian_capability, signer_capability;
        if (!((yield Stdlib.Signer.address_of_(sonar, $c)).hex() ===
            new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629").hex())) {
            throw $.abortCode($.copy(exports.E_NOT_SONAR));
        }
        custodian_capability = yield Nexus.Registry.register_custodian_capability_($c);
        [, signer_capability] = yield Stdlib.Account.create_resource_account_(sonar, [
            (0, move_to_ts_1.u8)("115"),
            (0, move_to_ts_1.u8)("111"),
            (0, move_to_ts_1.u8)("110"),
            (0, move_to_ts_1.u8)("97"),
            (0, move_to_ts_1.u8)("114"),
            (0, move_to_ts_1.u8)("95"),
            (0, move_to_ts_1.u8)("99"),
            (0, move_to_ts_1.u8)("117"),
            (0, move_to_ts_1.u8)("115"),
            (0, move_to_ts_1.u8)("116"),
            (0, move_to_ts_1.u8)("111"),
            (0, move_to_ts_1.u8)("100"),
            (0, move_to_ts_1.u8)("105"),
            (0, move_to_ts_1.u8)("97"),
            (0, move_to_ts_1.u8)("110"),
        ], $c);
        yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(CustodianCap), sonar, new CustodianCap({
            custodian_capability: custodian_capability,
            signer_capability: signer_capability,
        }, new move_to_ts_2.SimpleStructTag(CustodianCap)));
        yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(MarketMap), sonar, new MarketMap({
            market_map: yield Sonar_open_table.empty_($c, [
                move_to_ts_2.AtomicTypeTag.U128,
                new move_to_ts_2.SimpleStructTag(Orders),
            ]),
            market_account_ids: yield Sonar_open_table.empty_($c, [
                new move_to_ts_2.SimpleStructTag(MarketTypeInfo),
                move_to_ts_2.AtomicTypeTag.U128,
            ]),
            market_collections: yield Sonar_open_table.empty_($c, [
                move_to_ts_2.AtomicTypeTag.U128,
                new move_to_ts_2.SimpleStructTag(MarketTypeInfo),
            ]),
        }, new move_to_ts_2.SimpleStructTag(MarketMap)));
        return;
    });
}
exports.register_custodian_ = register_custodian_;
function buildPayload_register_custodian(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "register_custodian", typeParamStrings, [], isJSON);
}
exports.buildPayload_register_custodian = buildPayload_register_custodian;
function register_market_pure_coin_(sonar, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!((yield Stdlib.Signer.address_of_(sonar, $c)).hex() ===
            new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629").hex())) {
            throw $.abortCode($.copy(exports.E_NOT_SONAR));
        }
        yield Nexus.Market.register_market_pure_coin_(sonar, $.copy(exports.LOT_SIZE), $.copy(exports.TICK_SIZE), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.register_market_pure_coin_ = register_market_pure_coin_;
function register_token_market_(sonar, base_collection, quote_collection, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, general_custodian_capability, market_account_id, market_account_ids, market_collections, market_id, market_map, market_type_info;
        if (!$.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[0]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode($.copy(exports.E_INVALID_BASE_TYPE));
        }
        if ($.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[1]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            temp$1 = true;
        }
        else {
            temp$1 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
        }
        if (!temp$1) {
            throw $.abortCode($.copy(exports.E_INVALID_QUOTE_TYPE));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        market_id = yield Nexus.Market.register_market_(sonar, $.copy(exports.LOT_SIZE), $.copy(exports.TICK_SIZE), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $c, [$p[0], $p[1]]);
        temp$2 = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        market_map = temp$2.market_map;
        market_account_ids = temp$2.market_account_ids;
        market_collections = temp$2.market_collections;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $c);
        market_type_info = new MarketTypeInfo({
            base_type_info: yield Stdlib.Type_info.type_of_($c, [$p[0]]),
            quote_type_info: yield Stdlib.Type_info.type_of_($c, [$p[1]]),
            base_collection: $.copy(base_collection),
            quote_collection: $.copy(quote_collection),
        }, new move_to_ts_2.SimpleStructTag(MarketTypeInfo));
        yield Sonar_open_table.add_(market_map, $.copy(market_account_id), new Orders({
            order_map: yield Sonar_open_table.empty_($c, [
                move_to_ts_2.AtomicTypeTag.U128,
                new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo)),
            ]),
        }, new move_to_ts_2.SimpleStructTag(Orders)), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)]);
        yield Sonar_open_table.add_(market_account_ids, $.copy(market_type_info), $.copy(market_account_id), $c, [new move_to_ts_2.SimpleStructTag(MarketTypeInfo), move_to_ts_2.AtomicTypeTag.U128]);
        yield Sonar_open_table.add_(market_collections, $.copy(market_account_id), $.copy(market_type_info), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(MarketTypeInfo)]);
        return $.copy(market_id);
    });
}
exports.register_token_market_ = register_token_market_;
function register_token_market_by_name_(sonar, base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, base_collection, quote_collection;
        if (!$.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[0]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode($.copy(exports.E_INVALID_BASE_TYPE));
        }
        if ($.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[1]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            temp$1 = true;
        }
        else {
            temp$1 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
        }
        if (!temp$1) {
            throw $.abortCode($.copy(exports.E_INVALID_QUOTE_TYPE));
        }
        base_collection = new Collection({
            creator: $.copy(base_collection_creator),
            collection: yield Stdlib.String.utf8_($.copy(base_collection_name), $c),
        }, new move_to_ts_2.SimpleStructTag(Collection));
        quote_collection = new Collection({
            creator: $.copy(quote_collection_creator),
            collection: yield Stdlib.String.utf8_($.copy(quote_collection_name), $c),
        }, new move_to_ts_2.SimpleStructTag(Collection));
        yield register_token_market_(sonar, $.copy(base_collection), $.copy(quote_collection), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.register_token_market_by_name_ = register_token_market_by_name_;
function buildPayload_register_token_market_by_name(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "register_token_market_by_name", typeParamStrings, [
        base_collection_creator,
        base_collection_name,
        quote_collection_creator,
        quote_collection_name,
    ], isJSON);
}
exports.buildPayload_register_token_market_by_name = buildPayload_register_token_market_by_name;
function register_token_market_by_name_string_(sonar, base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, base_collection, quote_collection;
        if (!$.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[0]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode($.copy(exports.E_INVALID_BASE_TYPE));
        }
        if ($.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[1]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]))) {
            temp$1 = true;
        }
        else {
            temp$1 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
        }
        if (!temp$1) {
            throw $.abortCode($.copy(exports.E_INVALID_QUOTE_TYPE));
        }
        base_collection = new Collection({
            creator: $.copy(base_collection_creator),
            collection: $.copy(base_collection_name),
        }, new move_to_ts_2.SimpleStructTag(Collection));
        quote_collection = new Collection({
            creator: $.copy(quote_collection_creator),
            collection: $.copy(quote_collection_name),
        }, new move_to_ts_2.SimpleStructTag(Collection));
        yield register_token_market_(sonar, $.copy(base_collection), $.copy(quote_collection), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.register_token_market_by_name_string_ = register_token_market_by_name_string_;
function buildPayload_register_token_market_by_name_string(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "register_token_market_by_name_string", typeParamStrings, [
        base_collection_creator,
        base_collection_name,
        quote_collection_creator,
        quote_collection_name,
    ], isJSON);
}
exports.buildPayload_register_token_market_by_name_string = buildPayload_register_token_market_by_name_string;
function register_user_(user, market_id, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let general_custodian_id, market_account_id, token_map, user_token_map;
        general_custodian_id = yield Nexus.Registry.custodian_id_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability, $c);
        yield Nexus.User.register_market_account_(user, $.copy(market_id), $.copy(general_custodian_id), $c, [$p[0], $p[1]]);
        user_token_map = new TokenMap({
            token_amounts: yield Sonar_open_table.empty_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                move_to_ts_2.AtomicTypeTag.U64,
            ]),
            base_tokens: yield Stdlib.Vector.empty_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            ]),
            quote_tokens: yield Stdlib.Vector.empty_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            ]),
        }, new move_to_ts_2.SimpleStructTag(TokenMap));
        token_map = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), yield Stdlib.Signer.address_of_(user, $c))).token_map;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), $.copy(general_custodian_id), $c);
        yield Sonar_open_table.add_(token_map, $.copy(market_account_id), user_token_map, $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        return;
    });
}
exports.register_user_ = register_user_;
function buildPayload_register_user(market_id, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "register_user", typeParamStrings, [market_id], isJSON);
}
exports.buildPayload_register_user = buildPayload_register_user;
function remove_orders_(market_map_ref, market_id, order_ids, side, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, is_base_token, is_quote_token, market_account_id, order_id, order_infos, order_map, should_complete_auction, size, size2, using_base_token_and_quote_coin, using_quote_token_and_base_coin;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), $.copy(exports.GENERAL_CUSTODIAN_ID), $c);
        order_map = (yield Sonar_open_table.borrow_mut_(market_map_ref.market_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)])).order_map;
        while ((yield Stdlib.Vector.length_(order_ids, $c, [move_to_ts_2.AtomicTypeTag.U128])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                order_id = yield Stdlib.Vector.pop_back_(order_ids, $c, [
                    move_to_ts_2.AtomicTypeTag.U128,
                ]);
                [temp$1, temp$2] = [order_map, $.copy(order_id)];
                if (!(yield Sonar_open_table.contains_(temp$1, temp$2, $c, [
                    move_to_ts_2.AtomicTypeTag.U128,
                    new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo)),
                ]))) {
                    throw $.abortCode($.copy(exports.E_NO_ORDER_ID));
                }
                [size, ,] = yield Nexus.Market.get_order_fields_test_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), $.copy(order_id), side, $c);
                [size2, ,] = yield Nexus.Market.get_order_fields_test_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), $.copy(order_id), !side, $c);
                if ($.copy(size).eq((0, move_to_ts_1.u64)("0"))) {
                    temp$3 = $.copy(size2).eq((0, move_to_ts_1.u64)("0"));
                }
                else {
                    temp$3 = false;
                }
                if (temp$3) {
                    is_base_token = $.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[0]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]));
                    is_quote_token = $.deep_eq(yield Stdlib.Type_info.type_of_($c, [$p[1]]), yield Stdlib.Type_info.type_of_($c, [new move_to_ts_2.SimpleStructTag(Token)]));
                    if (side == $.copy(exports.ASK) && is_base_token) {
                        temp$4 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
                    }
                    else {
                        temp$4 = false;
                    }
                    using_base_token_and_quote_coin = temp$4;
                    if (side == $.copy(exports.BID) && is_quote_token) {
                        temp$5 = yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]);
                    }
                    else {
                        temp$5 = false;
                    }
                    using_quote_token_and_base_coin = temp$5;
                    should_complete_auction =
                        using_base_token_and_quote_coin || using_quote_token_and_base_coin;
                    order_infos = yield Sonar_open_table.remove_(order_map, $.copy(order_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo))]);
                    while ((yield Stdlib.Vector.length_(order_infos, $c, [
                        new move_to_ts_2.SimpleStructTag(OrderInfo),
                    ])).gt((0, move_to_ts_1.u64)("0"))) {
                        {
                            let { auction_id: auction_id } = yield Stdlib.Vector.pop_back_(order_infos, $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                            if (should_complete_auction) {
                                temp$6 = $.copy(auction_id).neq((0, move_to_ts_1.u64)("0"));
                            }
                            else {
                                temp$6 = false;
                            }
                            if (temp$6 && using_base_token_and_quote_coin) {
                                yield Auction.remove_auction_friend_($.copy(auction_id), $c, [
                                    $p[0],
                                ]);
                            }
                            else {
                            }
                        }
                    }
                }
                else {
                }
            }
        }
        return;
    });
}
exports.remove_orders_ = remove_orders_;
function route_base_tokens_from_(market_map_ref, market_id, user, base_amount, _, target_order_ids, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, amount_filled, amount_to_fill, amount_to_send, base_token, market_account_id, order_info, order_map, order_token_ids_and_amounts, target_address, target_order_id, target_token_amounts, token_recipients, tokens_to_remove_from_user, tokens_to_send_to_target, user_base_tokens, user_token_amounts;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), $.copy(exports.GENERAL_CUSTODIAN_ID), $c);
        amount_to_fill = $.copy(base_amount);
        order_map = (yield Sonar_open_table.borrow_mut_(market_map_ref.market_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)])).order_map;
        temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), yield Stdlib.Signer.address_of_(user, $c))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        temp$1.token_amounts;
        user_base_tokens = temp$1.base_tokens;
        temp$1.quote_tokens;
        token_recipients = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
        user_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        target_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        tokens_to_send_to_target = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        tokens_to_remove_from_user = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        while (true) {
            {
                if ($.copy(amount_to_fill).gt((0, move_to_ts_1.u64)("0"))) {
                    temp$2 = (yield Stdlib.Vector.length_(target_order_ids, $c, [
                        move_to_ts_2.AtomicTypeTag.U128,
                    ])).gt((0, move_to_ts_1.u64)("0"));
                }
                else {
                    temp$2 = false;
                }
            }
            if (!temp$2)
                break;
            {
                target_order_id = yield Stdlib.Vector.pop_back_(target_order_ids, $c, [
                    move_to_ts_2.AtomicTypeTag.U128,
                ]);
                order_token_ids_and_amounts = yield Sonar_open_table.borrow_mut_(order_map, $.copy(target_order_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo))]);
                while (true) {
                    {
                        if ((yield Stdlib.Vector.length_(order_token_ids_and_amounts, $c, [
                            new move_to_ts_2.SimpleStructTag(OrderInfo),
                        ])).gt((0, move_to_ts_1.u64)("0"))) {
                            temp$3 = $.copy(amount_to_fill).gt((0, move_to_ts_1.u64)("0"));
                        }
                        else {
                            temp$3 = false;
                        }
                    }
                    if (!temp$3)
                        break;
                    {
                        order_info = yield Stdlib.Vector.pop_back_(order_token_ids_and_amounts, $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                        [target_address, , amount_filled] = [
                            $.copy(order_info.user),
                            $.copy(order_info.token_id),
                            $.copy(order_info.amount),
                        ];
                        amount_to_send = $.copy(amount_filled);
                        if (!(yield Stdlib.Vector.length_(user_base_tokens, $c, [
                            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        ])).ge($.copy(amount_to_send))) {
                            throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
                        }
                        while ($.copy(amount_to_send).gt((0, move_to_ts_1.u64)("0"))) {
                            {
                                base_token = yield Stdlib.Vector.pop_back_(user_base_tokens, $c, [
                                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                                ]);
                                yield Stdlib.Vector.push_back_(token_recipients, $.copy(target_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                                yield Stdlib.Vector.push_back_(user_token_amounts, (0, move_to_ts_1.u64)("1"), $c, [
                                    move_to_ts_2.AtomicTypeTag.U64,
                                ]);
                                yield Stdlib.Vector.push_back_(target_token_amounts, (0, move_to_ts_1.u64)("1"), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                                yield Stdlib.Vector.push_back_(tokens_to_send_to_target, $.copy(base_token), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                                yield Stdlib.Vector.push_back_(tokens_to_remove_from_user, $.copy(base_token), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                                amount_to_send = $.copy(amount_to_send).sub((0, move_to_ts_1.u64)("1"));
                                amount_to_fill = $.copy(amount_to_fill).sub((0, move_to_ts_1.u64)("1"));
                            }
                        }
                    }
                }
            }
        }
        yield send_tokens_to_targets_($.copy(market_account_id), $.copy(token_recipients), $.copy(target_token_amounts), $.copy(tokens_to_send_to_target), true, $c, [$p[0], $p[1]]);
        yield decrement_tokens_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_account_id), $.copy(tokens_to_remove_from_user), $.copy(user_token_amounts), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.route_base_tokens_from_ = route_base_tokens_from_;
function route_base_tokens_to_(market_map_ref, market_id, user, amount_to_fill, target_order_ids, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, _amount_leftover, _leftover, amount_to_send, is_base_coin, is_quote_coin, market_account_id, order_info, order_map, order_token_ids_and_amounts, resource_signer, resource_signer__8, side, target_address, target_base_tokens, target_order_id, target_token_amounts, token_agnostic, token_id, token_senders, tokens_to_remove_from_target, tokens_to_send_to_user, user_token_amounts;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), $.copy(exports.GENERAL_CUSTODIAN_ID), $c);
        order_map = (yield Sonar_open_table.borrow_mut_(market_map_ref.market_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)])).order_map;
        token_senders = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
        user_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        target_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        tokens_to_send_to_user = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        tokens_to_remove_from_target = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        is_base_coin = yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]);
        is_quote_coin = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
        while (true) {
            {
                if ($.copy(amount_to_fill).gt((0, move_to_ts_1.u64)("0"))) {
                    temp$1 = (yield Stdlib.Vector.length_(target_order_ids, $c, [
                        move_to_ts_2.AtomicTypeTag.U128,
                    ])).gt((0, move_to_ts_1.u64)("0"));
                }
                else {
                    temp$1 = false;
                }
            }
            if (!temp$1)
                break;
            {
                target_order_id = yield Stdlib.Vector.pop_back_(target_order_ids, $c, [
                    move_to_ts_2.AtomicTypeTag.U128,
                ]);
                order_token_ids_and_amounts = yield Sonar_open_table.borrow_mut_(order_map, $.copy(target_order_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo))]);
                _leftover = false;
                _amount_leftover = (0, move_to_ts_1.u64)("0");
                while ((yield Stdlib.Vector.length_(order_token_ids_and_amounts, $c, [
                    new move_to_ts_2.SimpleStructTag(OrderInfo),
                ])).gt((0, move_to_ts_1.u64)("0"))) {
                    {
                        order_info = yield Stdlib.Vector.pop_back_(order_token_ids_and_amounts, $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                        [target_address, token_id, amount_to_send, side] = [
                            $.copy(order_info.user),
                            $.copy(order_info.token_id),
                            $.copy(order_info.amount),
                            $.copy(order_info.side),
                        ];
                        if (is_base_coin) {
                            temp$2 = side == $.copy(exports.ASK);
                        }
                        else {
                            temp$2 = false;
                        }
                        if (temp$2) {
                            temp$4 = true;
                        }
                        else {
                            if (is_quote_coin) {
                                temp$3 = side == $.copy(exports.BID);
                            }
                            else {
                                temp$3 = false;
                            }
                            temp$4 = temp$3;
                        }
                        token_agnostic = temp$4;
                        if (token_agnostic) {
                            temp$5 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), $.copy(target_address))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
                            temp$5.token_amounts;
                            target_base_tokens = temp$5.base_tokens;
                            temp$5.quote_tokens;
                            if (!(yield Stdlib.Vector.length_(target_base_tokens, $c, [
                                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                            ])).gt((0, move_to_ts_1.u64)("0"))) {
                                throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
                            }
                            token_id = yield Stdlib.Vector.pop_back_(target_base_tokens, $c, [
                                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                            ]);
                        }
                        else {
                        }
                        if ($.copy(amount_to_fill).lt($.copy(amount_to_send))) {
                            amount_to_fill = (0, move_to_ts_1.u64)("0");
                            temp$6 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
                            resource_signer = temp$6;
                            yield Aptos_token.Token.direct_transfer_(resource_signer, user, $.copy(token_id), $.copy(amount_to_send).sub($.copy(amount_to_fill)), $c);
                            yield Stdlib.Vector.push_back_(token_senders, $.copy(target_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                            yield Stdlib.Vector.push_back_(user_token_amounts, $.copy(amount_to_send).sub($.copy(amount_to_fill)), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(target_token_amounts, $.copy(amount_to_send).sub($.copy(amount_to_fill)), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(tokens_to_remove_from_target, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                            yield Stdlib.Vector.push_back_(tokens_to_send_to_user, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                            yield Stdlib.Vector.push_back_(order_token_ids_and_amounts, order_info, $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                            _leftover = true;
                            _amount_leftover = $.copy(amount_to_send).sub($.copy(amount_to_fill));
                            break;
                        }
                        else {
                            amount_to_fill = $.copy(amount_to_fill).sub($.copy(amount_to_send));
                            temp$7 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
                            resource_signer__8 = temp$7;
                            yield Aptos_token.Token.direct_transfer_(resource_signer__8, user, $.copy(token_id), $.copy(amount_to_send), $c);
                            yield Stdlib.Vector.push_back_(token_senders, $.copy(target_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                            yield Stdlib.Vector.push_back_(user_token_amounts, $.copy(amount_to_send), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(target_token_amounts, $.copy(amount_to_send), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(tokens_to_remove_from_target, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                            yield Stdlib.Vector.push_back_(tokens_to_send_to_user, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                        }
                    }
                }
            }
        }
        yield send_tokens_to_user_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_account_id), $.copy(target_token_amounts), $.copy(tokens_to_send_to_user), true, $c, [$p[0], $p[1]]);
        yield decrement_tokens_from_senders_($.copy(token_senders), $.copy(market_account_id), $.copy(tokens_to_remove_from_target), $.copy(target_token_amounts), true, $c, [$p[0], $p[1]]);
        return;
    });
}
exports.route_base_tokens_to_ = route_base_tokens_to_;
function route_quote_tokens_from_(market_map_ref, market_id, user, _, quote_amount, target_order_ids, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, amount_to_fill, amount_to_send, market_account_id, order_info, order_map, order_token_ids_and_amounts, quote_token, target_address, target_order_id, target_token_amounts, token_recipients, tokens_to_remove_from_user, tokens_to_send_to_target, user_quote_tokens, user_token_amounts;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), $.copy(exports.GENERAL_CUSTODIAN_ID), $c);
        amount_to_fill = $.copy(quote_amount);
        order_map = (yield Sonar_open_table.borrow_mut_(market_map_ref.market_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)])).order_map;
        temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), yield Stdlib.Signer.address_of_(user, $c))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        temp$1.token_amounts;
        temp$1.base_tokens;
        user_quote_tokens = temp$1.quote_tokens;
        token_recipients = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
        user_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        target_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        tokens_to_send_to_target = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        tokens_to_remove_from_user = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        while (true) {
            {
                if ($.copy(amount_to_fill).gt((0, move_to_ts_1.u64)("0"))) {
                    temp$2 = (yield Stdlib.Vector.length_(target_order_ids, $c, [
                        move_to_ts_2.AtomicTypeTag.U128,
                    ])).gt((0, move_to_ts_1.u64)("0"));
                }
                else {
                    temp$2 = false;
                }
            }
            if (!temp$2)
                break;
            {
                target_order_id = yield Stdlib.Vector.pop_back_(target_order_ids, $c, [
                    move_to_ts_2.AtomicTypeTag.U128,
                ]);
                order_token_ids_and_amounts = yield Sonar_open_table.borrow_mut_(order_map, $.copy(target_order_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo))]);
                while ((yield Stdlib.Vector.length_(order_token_ids_and_amounts, $c, [
                    new move_to_ts_2.SimpleStructTag(OrderInfo),
                ])).gt((0, move_to_ts_1.u64)("0"))) {
                    {
                        order_info = yield Stdlib.Vector.pop_back_(order_token_ids_and_amounts, $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                        [target_address, ,] = [
                            $.copy(order_info.user),
                            $.copy(order_info.token_id),
                            $.copy(order_info.amount),
                        ];
                        amount_to_send = $.copy(quote_amount);
                        if (!(yield Stdlib.Vector.length_(user_quote_tokens, $c, [
                            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        ])).ge($.copy(amount_to_send))) {
                            throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
                        }
                        while ($.copy(amount_to_send).gt((0, move_to_ts_1.u64)("0"))) {
                            {
                                quote_token = yield Stdlib.Vector.pop_back_(user_quote_tokens, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                                yield Stdlib.Vector.push_back_(token_recipients, $.copy(target_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                                yield Stdlib.Vector.push_back_(user_token_amounts, (0, move_to_ts_1.u64)("1"), $c, [
                                    move_to_ts_2.AtomicTypeTag.U64,
                                ]);
                                yield Stdlib.Vector.push_back_(target_token_amounts, (0, move_to_ts_1.u64)("1"), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                                yield Stdlib.Vector.push_back_(tokens_to_send_to_target, $.copy(quote_token), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                                yield Stdlib.Vector.push_back_(tokens_to_remove_from_user, $.copy(quote_token), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                                amount_to_send = $.copy(amount_to_send).sub((0, move_to_ts_1.u64)("1"));
                                if ($.copy(amount_to_fill).eq((0, move_to_ts_1.u64)("0"))) {
                                    break;
                                }
                                else {
                                }
                                amount_to_fill = $.copy(amount_to_fill).sub((0, move_to_ts_1.u64)("1"));
                            }
                        }
                    }
                }
            }
        }
        yield send_tokens_to_targets_($.copy(market_account_id), $.copy(token_recipients), $.copy(target_token_amounts), $.copy(tokens_to_send_to_target), false, $c, [$p[0], $p[1]]);
        yield decrement_tokens_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_account_id), $.copy(tokens_to_remove_from_user), $.copy(user_token_amounts), $c, [$p[0], $p[1]]);
        return;
    });
}
exports.route_quote_tokens_from_ = route_quote_tokens_from_;
function route_quote_tokens_to_(market_map_ref, market_id, user, amount_to_fill, target_order_ids, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, _amount_leftover, _leftover, amount_to_send, is_base_coin, is_quote_coin, market_account_id, order_info, order_map, order_token_ids_and_amounts, resource_signer, resource_signer__8, side, target_address, target_base_tokens, target_order_id, target_token_amounts, token_agnostic, token_id, token_senders, tokens_to_remove_from_target, tokens_to_send_to_user, user_token_amounts;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), $.copy(exports.GENERAL_CUSTODIAN_ID), $c);
        order_map = (yield Sonar_open_table.borrow_mut_(market_map_ref.market_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(Orders)])).order_map;
        token_senders = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]);
        user_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        target_token_amounts = yield Stdlib.Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        tokens_to_send_to_user = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        tokens_to_remove_from_target = yield Stdlib.Vector.empty_($c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
        ]);
        is_base_coin = yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]);
        is_quote_coin = yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
        while (true) {
            {
                if ($.copy(amount_to_fill).gt((0, move_to_ts_1.u64)("0"))) {
                    temp$1 = (yield Stdlib.Vector.length_(target_order_ids, $c, [
                        move_to_ts_2.AtomicTypeTag.U128,
                    ])).gt((0, move_to_ts_1.u64)("0"));
                }
                else {
                    temp$1 = false;
                }
            }
            if (!temp$1)
                break;
            {
                target_order_id = yield Stdlib.Vector.pop_back_(target_order_ids, $c, [
                    move_to_ts_2.AtomicTypeTag.U128,
                ]);
                order_token_ids_and_amounts = yield Sonar_open_table.borrow_mut_(order_map, $.copy(target_order_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.VectorTag(new move_to_ts_2.SimpleStructTag(OrderInfo))]);
                _leftover = false;
                _amount_leftover = (0, move_to_ts_1.u64)("0");
                while ((yield Stdlib.Vector.length_(order_token_ids_and_amounts, $c, [
                    new move_to_ts_2.SimpleStructTag(OrderInfo),
                ])).gt((0, move_to_ts_1.u64)("0"))) {
                    {
                        order_info = yield Stdlib.Vector.pop_back_(order_token_ids_and_amounts, $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                        [target_address, token_id, amount_to_send, side] = [
                            $.copy(order_info.user),
                            $.copy(order_info.token_id),
                            $.copy(order_info.amount),
                            $.copy(order_info.side),
                        ];
                        if (is_base_coin) {
                            temp$2 = side == $.copy(exports.ASK);
                        }
                        else {
                            temp$2 = false;
                        }
                        if (temp$2) {
                            temp$4 = true;
                        }
                        else {
                            if (is_quote_coin) {
                                temp$3 = side == $.copy(exports.BID);
                            }
                            else {
                                temp$3 = false;
                            }
                            temp$4 = temp$3;
                        }
                        token_agnostic = temp$4;
                        if (token_agnostic) {
                            temp$5 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), $.copy(target_address))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
                            temp$5.token_amounts;
                            target_base_tokens = temp$5.base_tokens;
                            temp$5.quote_tokens;
                            if (!(yield Stdlib.Vector.length_(target_base_tokens, $c, [
                                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                            ])).gt((0, move_to_ts_1.u64)("0"))) {
                                throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
                            }
                            token_id = yield Stdlib.Vector.pop_back_(target_base_tokens, $c, [
                                new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                            ]);
                        }
                        else {
                        }
                        if ($.copy(amount_to_fill).lt($.copy(amount_to_send))) {
                            amount_to_fill = (0, move_to_ts_1.u64)("0");
                            temp$6 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
                            resource_signer = temp$6;
                            yield Aptos_token.Token.direct_transfer_(resource_signer, user, $.copy(token_id), $.copy(amount_to_send).sub($.copy(amount_to_fill)), $c);
                            yield Stdlib.Vector.push_back_(token_senders, $.copy(target_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                            yield Stdlib.Vector.push_back_(user_token_amounts, $.copy(amount_to_send).sub($.copy(amount_to_fill)), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(target_token_amounts, $.copy(amount_to_send).sub($.copy(amount_to_fill)), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(tokens_to_remove_from_target, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                            yield Stdlib.Vector.push_back_(tokens_to_send_to_user, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                            yield Stdlib.Vector.push_back_(order_token_ids_and_amounts, order_info, $c, [new move_to_ts_2.SimpleStructTag(OrderInfo)]);
                            _leftover = true;
                            _amount_leftover = $.copy(amount_to_send).sub($.copy(amount_to_fill));
                            break;
                        }
                        else {
                            amount_to_fill = $.copy(amount_to_fill).sub($.copy(amount_to_send));
                            temp$7 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
                            resource_signer__8 = temp$7;
                            yield Aptos_token.Token.direct_transfer_(resource_signer__8, user, $.copy(token_id), $.copy(amount_to_send), $c);
                            yield Stdlib.Vector.push_back_(token_senders, $.copy(target_address), $c, [move_to_ts_2.AtomicTypeTag.Address]);
                            yield Stdlib.Vector.push_back_(user_token_amounts, $.copy(amount_to_send), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(target_token_amounts, $.copy(amount_to_send), $c, [move_to_ts_2.AtomicTypeTag.U64]);
                            yield Stdlib.Vector.push_back_(tokens_to_remove_from_target, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                            yield Stdlib.Vector.push_back_(tokens_to_send_to_user, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                        }
                    }
                }
            }
        }
        yield send_tokens_to_user_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_account_id), $.copy(target_token_amounts), $.copy(tokens_to_send_to_user), false, $c, [$p[0], $p[1]]);
        yield decrement_tokens_from_senders_($.copy(token_senders), $.copy(market_account_id), $.copy(tokens_to_remove_from_target), $.copy(target_token_amounts), false, $c, [$p[0], $p[1]]);
        return;
    });
}
exports.route_quote_tokens_to_ = route_quote_tokens_to_;
function send_tokens_to_targets_(market_account_id, token_recipients, token_amounts, tokens_to_send_to_target, is_base, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, amount, target_base_tokens, target_quote_tokens, target_token_amounts, to, token_amount, token_id;
        while ((yield Stdlib.Vector.length_(token_recipients, $c, [move_to_ts_2.AtomicTypeTag.Address])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                to = yield Stdlib.Vector.pop_back_(token_recipients, $c, [
                    move_to_ts_2.AtomicTypeTag.Address,
                ]);
                amount = yield Stdlib.Vector.pop_back_(token_amounts, $c, [
                    move_to_ts_2.AtomicTypeTag.U64,
                ]);
                token_id = yield Stdlib.Vector.pop_back_(tokens_to_send_to_target, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), $.copy(to))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
                target_token_amounts = temp$1.token_amounts;
                target_base_tokens = temp$1.base_tokens;
                target_quote_tokens = temp$1.quote_tokens;
                [temp$2, temp$3] = [target_token_amounts, $.copy(token_id)];
                if (!(yield Sonar_open_table.contains_(temp$2, temp$3, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    move_to_ts_2.AtomicTypeTag.U64,
                ]))) {
                    yield Sonar_open_table.add_(target_token_amounts, $.copy(token_id), $.copy(amount), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        move_to_ts_2.AtomicTypeTag.U64,
                    ]);
                }
                else {
                    token_amount = yield Sonar_open_table.borrow_mut_(target_token_amounts, $.copy(token_id), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        move_to_ts_2.AtomicTypeTag.U64,
                    ]);
                    $.set(token_amount, $.copy(token_amount).add($.copy(amount)));
                }
                while ($.copy(amount).gt((0, move_to_ts_1.u64)("0"))) {
                    {
                        amount = $.copy(amount).sub((0, move_to_ts_1.u64)("1"));
                        if (is_base) {
                            yield Stdlib.Vector.push_back_(target_base_tokens, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                        }
                        else {
                            yield Stdlib.Vector.push_back_(target_quote_tokens, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                        }
                    }
                }
            }
        }
        return;
    });
}
exports.send_tokens_to_targets_ = send_tokens_to_targets_;
function send_tokens_to_user_(user, market_account_id, token_amounts, tokens_to_send_to_user, is_base, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, amount, token_amount, token_id, user_base_tokens, user_quote_tokens, user_token_amounts;
        while ((yield Stdlib.Vector.length_(token_amounts, $c, [move_to_ts_2.AtomicTypeTag.U64])).gt((0, move_to_ts_1.u64)("0"))) {
            {
                amount = yield Stdlib.Vector.pop_back_(token_amounts, $c, [
                    move_to_ts_2.AtomicTypeTag.U64,
                ]);
                token_id = yield Stdlib.Vector.pop_back_(tokens_to_send_to_user, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                temp$1 = yield Sonar_open_table.borrow_mut_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), $.copy(user))).token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
                user_token_amounts = temp$1.token_amounts;
                user_base_tokens = temp$1.base_tokens;
                user_quote_tokens = temp$1.quote_tokens;
                [temp$2, temp$3] = [user_token_amounts, $.copy(token_id)];
                if (!(yield Sonar_open_table.contains_(temp$2, temp$3, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                    move_to_ts_2.AtomicTypeTag.U64,
                ]))) {
                    yield Sonar_open_table.add_(user_token_amounts, $.copy(token_id), $.copy(amount), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        move_to_ts_2.AtomicTypeTag.U64,
                    ]);
                }
                else {
                    token_amount = yield Sonar_open_table.borrow_mut_(user_token_amounts, $.copy(token_id), $c, [
                        new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        move_to_ts_2.AtomicTypeTag.U64,
                    ]);
                    $.set(token_amount, $.copy(token_amount).add($.copy(amount)));
                }
                while ($.copy(amount).gt((0, move_to_ts_1.u64)("0"))) {
                    {
                        amount = $.copy(amount).sub((0, move_to_ts_1.u64)("1"));
                        if (is_base) {
                            yield Stdlib.Vector.push_back_(user_base_tokens, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                        }
                        else {
                            yield Stdlib.Vector.push_back_(user_quote_tokens, $.copy(token_id), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                        }
                    }
                }
            }
        }
        return;
    });
}
exports.send_tokens_to_user_ = send_tokens_to_user_;
function swap_(user, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, token_ids, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$10, temp$11, temp$16, temp$17, temp$18, temp$19, temp$2, temp$20, temp$21, temp$22, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, base, general_custodian_capability, i, i__12, is_base_coin, is_base_token, is_quote_coin, is_quote_token, market_map_ref, name, name__14, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, property_version, property_version__15, quote, target_order_ids, token_id, token_id__13;
        [is_base_coin, is_quote_coin] = [
            yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]),
            yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]),
        ];
        if (is_base_coin) {
            temp$1 = direction == $.copy(exports.SELL);
        }
        else {
            temp$1 = false;
        }
        if (temp$1) {
            temp$2 = yield Stdlib.Option.some_(yield Stdlib.Coin.withdraw_(user, $.copy(max_base), $c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        }
        else {
            temp$2 = yield Stdlib.Option.none_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
            ]);
        }
        optional_base_coins_ref_mut = temp$2;
        if (is_quote_coin) {
            temp$3 = direction == $.copy(exports.BUY);
        }
        else {
            temp$3 = false;
        }
        if (temp$3) {
            temp$4 = yield Stdlib.Option.some_(yield Stdlib.Coin.withdraw_(user, $.copy(max_quote), $c, [$p[1]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]);
        }
        else {
            temp$4 = yield Stdlib.Option.none_($c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
            ]);
        }
        optional_quote_coins_ref_mut = temp$4;
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        [base, quote, target_order_ids] = yield Nexus.Market.swap_generic_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), direction, $.copy(min_base), $.copy(max_base), $.copy(min_quote), $.copy(max_quote), $.copy(limit_price), optional_base_coins_ref_mut, optional_quote_coins_ref_mut, general_custodian_capability, $c, [$p[0], $p[1]]);
        is_base_token = !is_base_coin;
        is_quote_token = !is_quote_coin;
        market_map_ref = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        if (direction == $.copy(exports.BUY)) {
            if (is_quote_token) {
                yield route_quote_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(max_quote).sub($.copy(quote)), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                i = (0, move_to_ts_1.u64)("0");
                while ($.copy(i).lt(yield Stdlib.Vector.length_(token_ids, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]))) {
                    {
                        token_id = yield Stdlib.Vector.remove_(token_ids, $.copy(i), $c, [
                            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                        ]);
                        [, , name, property_version] =
                            yield Aptos_token.Token.get_token_id_fields_(token_id, $c);
                        [temp$5, temp$6, temp$7, temp$8, temp$9, temp$10, temp$11] = [
                            user,
                            market_map_ref,
                            $.copy(market_id),
                            $.copy(token_id),
                            $.copy(name),
                            (0, move_to_ts_1.u64)("1"),
                            $.copy(property_version),
                        ];
                        yield deposit_base_collateral_tokens_(temp$5, temp$6, temp$7, temp$8, temp$9, temp$10, temp$11, $c, [$p[0]]);
                        i = $.copy(i).add((0, move_to_ts_1.u64)("1"));
                    }
                }
                yield route_base_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(max_base).sub($.copy(base)), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        else {
            if (is_quote_token) {
                i__12 = (0, move_to_ts_1.u64)("0");
                while ($.copy(i__12).lt(yield Stdlib.Vector.length_(token_ids, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]))) {
                    {
                        token_id__13 = yield Stdlib.Vector.remove_(token_ids, $.copy(i__12), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", [])]);
                        [, , name__14, property_version__15] =
                            yield Aptos_token.Token.get_token_id_fields_(token_id__13, $c);
                        [temp$16, temp$17, temp$18, temp$19, temp$20, temp$21, temp$22] = [
                            user,
                            market_map_ref,
                            $.copy(market_id),
                            $.copy(token_id__13),
                            $.copy(name__14),
                            (0, move_to_ts_1.u64)("1"),
                            $.copy(property_version__15),
                        ];
                        yield deposit_quote_collateral_tokens_(temp$16, temp$17, temp$18, temp$19, temp$20, temp$21, temp$22, $c, [$p[1]]);
                        i__12 = $.copy(i__12).add((0, move_to_ts_1.u64)("1"));
                    }
                }
                yield route_quote_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                yield route_base_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        yield remove_orders_(market_map_ref, $.copy(market_id), $.copy(target_order_ids), !direction, $c, [$p[0], $p[1]]);
        if (yield Stdlib.Option.is_some_(optional_base_coins_ref_mut, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
        ])) {
            yield Stdlib.Coin.deposit_(yield Stdlib.Signer.address_of_(user, $c), yield Stdlib.Option.destroy_some_(optional_base_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
            ]), $c, [$p[0]]);
        }
        else {
            yield Stdlib.Option.destroy_none_(optional_base_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
            ]);
        }
        if (yield Stdlib.Option.is_some_(optional_quote_coins_ref_mut, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
        ])) {
            yield Stdlib.Coin.deposit_(yield Stdlib.Signer.address_of_(user, $c), yield Stdlib.Option.destroy_some_(optional_quote_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
            ]), $c, [$p[1]]);
        }
        else {
            yield Stdlib.Option.destroy_none_(optional_quote_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
            ]);
        }
        return;
    });
}
exports.swap_ = swap_;
function swap_agnostic_(user, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $c, $p /* <BaseType, QuoteType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, base, general_custodian_capability, is_base_coin, is_base_token, is_quote_coin, is_quote_token, market_map_ref, optional_base_coins_ref_mut, optional_quote_coins_ref_mut, quote, target_order_ids;
        [is_base_coin, is_quote_coin] = [
            yield Stdlib.Coin.is_coin_initialized_($c, [$p[0]]),
            yield Stdlib.Coin.is_coin_initialized_($c, [$p[1]]),
        ];
        if (is_base_coin) {
            temp$1 = direction == $.copy(exports.SELL);
        }
        else {
            temp$1 = false;
        }
        if (temp$1) {
            temp$3 = yield Stdlib.Option.some_(yield Stdlib.Coin.withdraw_(user, $.copy(max_base), $c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
        }
        else {
            if (is_base_coin) {
                temp$2 = yield Stdlib.Option.some_(yield Stdlib.Coin.withdraw_(user, $.copy(min_base), $c, [$p[0]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]])]);
            }
            else {
                temp$2 = yield Stdlib.Option.none_($c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
                ]);
            }
            temp$3 = temp$2;
        }
        optional_base_coins_ref_mut = temp$3;
        if (is_quote_coin) {
            temp$4 = direction == $.copy(exports.BUY);
        }
        else {
            temp$4 = false;
        }
        if (temp$4) {
            temp$6 = yield Stdlib.Option.some_(yield Stdlib.Coin.withdraw_(user, $.copy(max_quote), $c, [$p[1]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]);
        }
        else {
            if (is_quote_coin) {
                temp$5 = yield Stdlib.Option.some_(yield Stdlib.Coin.withdraw_(user, $.copy(min_quote), $c, [$p[1]]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]])]);
            }
            else {
                temp$5 = yield Stdlib.Option.none_($c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
                ]);
            }
            temp$6 = temp$5;
        }
        optional_quote_coins_ref_mut = temp$6;
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        [base, quote, target_order_ids] = yield Nexus.Market.swap_generic_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(market_id), direction, $.copy(min_base), $.copy(max_base), $.copy(min_quote), $.copy(max_quote), $.copy(limit_price), optional_base_coins_ref_mut, optional_quote_coins_ref_mut, general_custodian_capability, $c, [$p[0], $p[1]]);
        temp$7 = [
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
        ];
        yield Stdlib.Debug.print_(temp$7, $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
        yield Stdlib.Debug.print_(base, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        yield Stdlib.Debug.print_(quote, $c, [move_to_ts_2.AtomicTypeTag.U64]);
        temp$8 = [
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
            (0, move_to_ts_1.u8)("48"),
        ];
        yield Stdlib.Debug.print_(temp$8, $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
        is_base_token = !is_base_coin;
        is_quote_token = !is_quote_coin;
        market_map_ref = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(MarketMap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"));
        if (direction == $.copy(exports.BUY)) {
            if (is_quote_token) {
                yield route_quote_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(max_quote).sub($.copy(quote)), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                yield route_base_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(base), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        else {
            if (is_quote_token) {
                yield route_quote_tokens_to_(market_map_ref, $.copy(market_id), user, $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
            if (is_base_token) {
                yield route_base_tokens_from_(market_map_ref, $.copy(market_id), user, $.copy(max_base).sub($.copy(base)), $.copy(quote), $.copy(target_order_ids), $c, [$p[0], $p[1]]);
            }
            else {
            }
        }
        yield remove_orders_(market_map_ref, $.copy(market_id), $.copy(target_order_ids), !direction, $c, [$p[0], $p[1]]);
        if (yield Stdlib.Option.is_some_(optional_base_coins_ref_mut, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
        ])) {
            yield Stdlib.Coin.deposit_(yield Stdlib.Signer.address_of_(user, $c), yield Stdlib.Option.destroy_some_(optional_base_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
            ]), $c, [$p[0]]);
        }
        else {
            yield Stdlib.Option.destroy_none_(optional_base_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[0]]),
            ]);
        }
        if (yield Stdlib.Option.is_some_(optional_quote_coins_ref_mut, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
        ])) {
            yield Stdlib.Coin.deposit_(yield Stdlib.Signer.address_of_(user, $c), yield Stdlib.Option.destroy_some_(optional_quote_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
            ]), $c, [$p[1]]);
        }
        else {
            yield Stdlib.Option.destroy_none_(optional_quote_coins_ref_mut, $c, [
                new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "Coin", [$p[1]]),
            ]);
        }
        return;
    });
}
exports.swap_agnostic_ = swap_agnostic_;
function buildPayload_swap_agnostic(market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, isJSON = false) {
    const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "custodian", "swap_agnostic", typeParamStrings, [
        market_id,
        direction,
        min_base,
        max_base,
        min_quote,
        max_quote,
        limit_price,
    ], isJSON);
}
exports.buildPayload_swap_agnostic = buildPayload_swap_agnostic;
function withdraw_base_collateral_tokens_(user, market_id, token_id, amount, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, base_tokens, contains, general_custodian_capability, i, market_account_id, resource_signer, token_amount, token_amounts, token_map;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_CUSTODIAN_DOESNT_EXIST));
        }
        if (!(yield Aptos_token.Token.balance_of_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(token_id), $c)).ge($.copy(amount))) {
            throw $.abortCode($.copy(exports.E_INVALID_AMOUNT));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        yield Nexus.User.withdraw_generic_asset_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $.copy(amount), general_custodian_capability, $c, [$p[0]]);
        temp$1 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
        resource_signer = temp$1;
        yield Aptos_token.Token.direct_transfer_(resource_signer, user, $.copy(token_id), $.copy(amount), $c);
        token_map = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).token_map;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $c);
        [temp$2, temp$3] = [token_map, $.copy(market_account_id)];
        if (!(yield Sonar_open_table.contains_(temp$2, temp$3, $c, [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.SimpleStructTag(TokenMap),
        ]))) {
            throw $.abortCode($.copy(exports.E_NO_COLLATERAL_FOR_MARKET));
        }
        temp$4 = yield Sonar_open_table.borrow_mut_(token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        token_amounts = temp$4.token_amounts;
        base_tokens = temp$4.base_tokens;
        temp$4.quote_tokens;
        [temp$5, temp$6] = [token_amounts, $.copy(token_id)];
        if (!(yield Sonar_open_table.contains_(temp$5, temp$6, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            move_to_ts_2.AtomicTypeTag.U64,
        ]))) {
            throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
        }
        token_amount = yield Sonar_open_table.borrow_mut_(token_amounts, $.copy(token_id), $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            move_to_ts_2.AtomicTypeTag.U64,
        ]);
        if (!$.copy(token_amount).ge($.copy(amount))) {
            throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
        }
        $.set(token_amount, $.copy(token_amount).sub($.copy(amount)));
        while ($.copy(amount).gt((0, move_to_ts_1.u64)("0"))) {
            {
                [temp$7, temp$8] = [base_tokens, token_id];
                [contains, i] = yield Stdlib.Vector.index_of_(temp$7, temp$8, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                if (!contains) {
                    throw $.abortCode($.copy(exports.E_INSUFFICIENT_BASE_TOKENS));
                }
                yield Stdlib.Vector.remove_(base_tokens, $.copy(i), $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                amount = $.copy(amount).sub((0, move_to_ts_1.u64)("1"));
            }
        }
        return;
    });
}
exports.withdraw_base_collateral_tokens_ = withdraw_base_collateral_tokens_;
function withdraw_quote_collateral_tokens_(user, market_id, token_id, amount, $c, $p /* <AssetType>*/) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, contains, general_custodian_capability, i, market_account_id, quote_tokens, resource_signer, token_amount, token_amounts, token_map;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629")))) {
            throw $.abortCode($.copy(exports.E_CUSTODIAN_DOESNT_EXIST));
        }
        if (!(yield Aptos_token.Token.balance_of_(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), $.copy(token_id), $c)).ge($.copy(amount))) {
            throw $.abortCode($.copy(exports.E_INVALID_AMOUNT));
        }
        general_custodian_capability = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).custodian_capability;
        yield Nexus.User.withdraw_generic_asset_(yield Stdlib.Signer.address_of_(user, $c), $.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $.copy(amount), general_custodian_capability, $c, [$p[0]]);
        temp$1 = yield Stdlib.Account.create_signer_with_capability_((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(CustodianCap), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).signer_capability, $c);
        resource_signer = temp$1;
        yield Aptos_token.Token.direct_transfer_(resource_signer, user, $.copy(token_id), $.copy(amount), $c);
        token_map = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collateral), new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"))).token_map;
        market_account_id = yield Nexus.User.get_market_account_id_($.copy(market_id), yield Nexus.Registry.custodian_id_(general_custodian_capability, $c), $c);
        [temp$2, temp$3] = [token_map, $.copy(market_account_id)];
        if (!(yield Sonar_open_table.contains_(temp$2, temp$3, $c, [
            move_to_ts_2.AtomicTypeTag.U128,
            new move_to_ts_2.SimpleStructTag(TokenMap),
        ]))) {
            throw $.abortCode($.copy(exports.E_NO_COLLATERAL_FOR_MARKET));
        }
        temp$4 = yield Sonar_open_table.borrow_mut_(token_map, $.copy(market_account_id), $c, [move_to_ts_2.AtomicTypeTag.U128, new move_to_ts_2.SimpleStructTag(TokenMap)]);
        token_amounts = temp$4.token_amounts;
        temp$4.base_tokens;
        quote_tokens = temp$4.quote_tokens;
        [temp$5, temp$6] = [token_amounts, $.copy(token_id)];
        if (!(yield Sonar_open_table.contains_(temp$5, temp$6, $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            move_to_ts_2.AtomicTypeTag.U64,
        ]))) {
            throw $.abortCode($.copy(exports.E_INSUFFICIENT_QUOTE_TOKENS));
        }
        token_amount = yield Sonar_open_table.borrow_mut_(token_amounts, $.copy(token_id), $c, [
            new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
            move_to_ts_2.AtomicTypeTag.U64,
        ]);
        if (!$.copy(token_amount).ge($.copy(amount))) {
            throw $.abortCode($.copy(exports.E_INSUFFICIENT_QUOTE_TOKENS));
        }
        $.set(token_amount, $.copy(token_amount).sub($.copy(amount)));
        while ($.copy(amount).gt((0, move_to_ts_1.u64)("0"))) {
            {
                [temp$7, temp$8] = [quote_tokens, token_id];
                [contains, i] = yield Stdlib.Vector.index_of_(temp$7, temp$8, $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                if (!contains) {
                    throw $.abortCode($.copy(exports.E_INSUFFICIENT_QUOTE_TOKENS));
                }
                yield Stdlib.Vector.remove_(quote_tokens, $.copy(i), $c, [
                    new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []),
                ]);
                amount = $.copy(amount).sub((0, move_to_ts_1.u64)("1"));
            }
        }
        return;
    });
}
exports.withdraw_quote_collateral_tokens_ = withdraw_quote_collateral_tokens_;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::BidData", BidData.BidDataParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::Collateral", Collateral.CollateralParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::Collection", Collection.CollectionParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::CustodianCap", CustodianCap.CustodianCapParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::MarketMap", MarketMap.MarketMapParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::MarketTypeInfo", MarketTypeInfo.MarketTypeInfoParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::OrderInfo", OrderInfo.OrderInfoParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::Orders", Orders.OrdersParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::Token", Token.TokenParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::custodian::TokenMap", TokenMap.TokenMapParser);
}
exports.loadParsers = loadParsers;
class App {
    constructor(client, repo, cache) {
        this.client = client;
        this.repo = repo;
        this.cache = cache;
    }
    get moduleAddress() {
        {
            return exports.moduleAddress;
        }
    }
    get moduleName() {
        {
            return exports.moduleName;
        }
    }
    get BidData() {
        return BidData;
    }
    get Collateral() {
        return Collateral;
    }
    loadCollateral(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Collateral.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get Collection() {
        return Collection;
    }
    get CustodianCap() {
        return CustodianCap;
    }
    loadCustodianCap(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield CustodianCap.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get MarketMap() {
        return MarketMap;
    }
    loadMarketMap(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield MarketMap.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get MarketTypeInfo() {
        return MarketTypeInfo;
    }
    get OrderInfo() {
        return OrderInfo;
    }
    get Orders() {
        return Orders;
    }
    get Token() {
        return Token;
    }
    get TokenMap() {
        return TokenMap;
    }
    payload_buy_specific(market_id, order_id, order_user, order_token_id_creator, order_token_id_collection, order_token_id_name, order_token_id_property_version, order_amount, order_side, order_price, order_auction_id, amount, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_buy_specific(market_id, order_id, order_user, order_token_id_creator, order_token_id_collection, order_token_id_name, order_token_id_property_version, order_amount, order_side, order_price, order_auction_id, amount, $p, isJSON);
    }
    buy_specific(_account, market_id, order_id, order_user, order_token_id_creator, order_token_id_collection, order_token_id_name, order_token_id_property_version, order_amount, order_side, order_price, order_auction_id, amount, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_buy_specific(market_id, order_id, order_user, order_token_id_creator, order_token_id_collection, order_token_id_name, order_token_id_property_version, order_amount, order_side, order_price, order_auction_id, amount, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_cancel_all_limit_orders(market_id, side, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_cancel_all_limit_orders(market_id, side, $p, isJSON);
    }
    cancel_all_limit_orders(_account, market_id, side, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_cancel_all_limit_orders(market_id, side, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_cancel_limit_order(market_id, order_id, side, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_cancel_limit_order(market_id, order_id, side, $p, isJSON);
    }
    cancel_limit_order(_account, market_id, order_id, side, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_cancel_limit_order(market_id, order_id, side, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_deposit_base_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p /* <AssetType>*/, isJSON = false) {
        return buildPayload_deposit_base_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p, isJSON);
    }
    deposit_base_collateral_tokens_script_real(_account, market_id, amount, creator, collection, name, property_version, $p /* <AssetType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_deposit_base_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_deposit_quote_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p /* <AssetType>*/, isJSON = false) {
        return buildPayload_deposit_quote_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p, isJSON);
    }
    deposit_quote_collateral_tokens_script_real(_account, market_id, amount, creator, collection, name, property_version, $p /* <AssetType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_deposit_quote_collateral_tokens_script_real(market_id, amount, creator, collection, name, property_version, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_init_register_user(market_id, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_init_register_user(market_id, $p, isJSON);
    }
    init_register_user(_account, market_id, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_init_register_user(market_id, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_place_limit_order(market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, is_auction, auction_min_price, listing_expiration_sec, withdraw_expiration_sec, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_place_limit_order(market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, is_auction, auction_min_price, listing_expiration_sec, withdraw_expiration_sec, $p, isJSON);
    }
    place_limit_order(_account, market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, is_auction, auction_min_price, listing_expiration_sec, withdraw_expiration_sec, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_place_limit_order(market_id, side, size, price, post_or_abort, fill_or_abort, immediate_or_cancel, is_auction, auction_min_price, listing_expiration_sec, withdraw_expiration_sec, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_place_market_buy(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_place_market_buy(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p, isJSON);
    }
    place_market_buy(_account, market_id, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_place_market_buy(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_place_market_sell(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_place_market_sell(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p, isJSON);
    }
    place_market_sell(_account, market_id, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_place_market_sell(market_id, min_base, max_base, min_quote, max_quote, limit_price, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_register_custodian(isJSON = false) {
        return buildPayload_register_custodian(isJSON);
    }
    register_custodian(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_register_custodian(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_register_token_market_by_name(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_register_token_market_by_name(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p, isJSON);
    }
    register_token_market_by_name(_account, base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_register_token_market_by_name(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_register_token_market_by_name_string(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_register_token_market_by_name_string(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p, isJSON);
    }
    register_token_market_by_name_string(_account, base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_register_token_market_by_name_string(base_collection_creator, base_collection_name, quote_collection_creator, quote_collection_name, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_register_user(market_id, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_register_user(market_id, $p, isJSON);
    }
    register_user(_account, market_id, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_register_user(market_id, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_swap_agnostic(market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, isJSON = false) {
        return buildPayload_swap_agnostic(market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, isJSON);
    }
    swap_agnostic(_account, market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p /* <BaseType, QuoteType>*/, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_swap_agnostic(market_id, direction, min_base, max_base, min_quote, max_quote, limit_price, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    app_deposit_base_collateral_tokens_in_bulk(user, market_id, token_ids, amounts, $p) {
        return deposit_base_collateral_tokens_in_bulk_(user, market_id, token_ids, amounts, this.cache, $p);
    }
    app_deposit_both_collateral_tokens_in_bulk(user, market_id, base_token_ids, base_amounts, quote_token_ids, quote_amounts, $p) {
        return deposit_both_collateral_tokens_in_bulk_(user, market_id, base_token_ids, base_amounts, quote_token_ids, quote_amounts, this.cache, $p);
    }
    app_deposit_quote_collateral_tokens_in_bulk(user, market_id, token_ids, amounts, $p) {
        return deposit_quote_collateral_tokens_in_bulk_(user, market_id, token_ids, amounts, this.cache, $p);
    }
}
exports.App = App;
//# sourceMappingURL=custodian.js.map