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
exports.App = exports.loadParsers = exports.set_registered_custodian_test_ = exports.register_market_internal_ = exports.register_custodian_capability_ = exports.n_markets_ = exports.n_custodians_ = exports.is_registered_trading_pair_ = exports.is_registered_custodian_id_ = exports.is_base_or_quote_ = exports.is_base_asset_ = exports.buildPayload_init_registry = exports.init_registry_ = exports.get_verified_market_custodian_id_ = exports.get_custodian_capability_test_ = exports.destroy_custodian_capability_test_ = exports.custodian_id_ = exports.TradingPairInfo = exports.Registry = exports.MarketInfo = exports.GenericAsset = exports.CustodianCapability = exports.PURE_COIN_PAIR = exports.NO_CUSTODIAN = exports.E_TICK_SIZE_0 = exports.E_SAME_COIN = exports.E_REGISTRY_EXISTS = exports.E_NO_REGISTRY = exports.E_NOT_IN_MARKET_PAIR = exports.E_NOT_ECONIA = exports.E_MARKET_EXISTS = exports.E_LOT_SIZE_0 = exports.E_INVALID_QUOTE_ASSET = exports.E_INVALID_MARKET_ID = exports.E_INVALID_CUSTODIAN = exports.E_INVALID_BASE_ASSET = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "Nexus";
exports.moduleAddress = new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa");
exports.moduleName = "registry";
exports.E_INVALID_BASE_ASSET = (0, move_to_ts_1.u64)("10");
exports.E_INVALID_CUSTODIAN = (0, move_to_ts_1.u64)("5");
exports.E_INVALID_MARKET_ID = (0, move_to_ts_1.u64)("9");
exports.E_INVALID_QUOTE_ASSET = (0, move_to_ts_1.u64)("11");
exports.E_LOT_SIZE_0 = (0, move_to_ts_1.u64)("3");
exports.E_MARKET_EXISTS = (0, move_to_ts_1.u64)("7");
exports.E_NOT_ECONIA = (0, move_to_ts_1.u64)("0");
exports.E_NOT_IN_MARKET_PAIR = (0, move_to_ts_1.u64)("8");
exports.E_NO_REGISTRY = (0, move_to_ts_1.u64)("2");
exports.E_REGISTRY_EXISTS = (0, move_to_ts_1.u64)("1");
exports.E_SAME_COIN = (0, move_to_ts_1.u64)("6");
exports.E_TICK_SIZE_0 = (0, move_to_ts_1.u64)("4");
exports.NO_CUSTODIAN = (0, move_to_ts_1.u64)("0");
exports.PURE_COIN_PAIR = (0, move_to_ts_1.u64)("0");
class CustodianCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.custodian_id = proto['custodian_id'];
    }
    static CustodianCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CustodianCapability);
        return new CustodianCapability(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CustodianCapability", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CustodianCapability = CustodianCapability;
CustodianCapability.moduleAddress = exports.moduleAddress;
CustodianCapability.moduleName = exports.moduleName;
CustodianCapability.structName = "CustodianCapability";
CustodianCapability.typeParameters = [];
CustodianCapability.fields = [
    { name: "custodian_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class GenericAsset {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static GenericAssetParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GenericAsset);
        return new GenericAsset(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GenericAsset", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.GenericAsset = GenericAsset;
GenericAsset.moduleAddress = exports.moduleAddress;
GenericAsset.moduleName = exports.moduleName;
GenericAsset.structName = "GenericAsset";
GenericAsset.typeParameters = [];
GenericAsset.fields = [];
class MarketInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.host = proto['host'];
        this.trading_pair_info = proto['trading_pair_info'];
    }
    static MarketInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MarketInfo);
        return new MarketInfo(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MarketInfo", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.trading_pair_info.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MarketInfo = MarketInfo;
MarketInfo.moduleAddress = exports.moduleAddress;
MarketInfo.moduleName = exports.moduleName;
MarketInfo.structName = "MarketInfo";
MarketInfo.typeParameters = [];
MarketInfo.fields = [
    { name: "host", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "trading_pair_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "registry", "TradingPairInfo", []) }
];
class Registry {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.hosts = proto['hosts'];
        this.markets = proto['markets'];
        this.n_custodians = proto['n_custodians'];
    }
    static RegistryParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Registry);
        return new Registry(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Registry, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Registry, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Registry", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hosts.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Registry = Registry;
Registry.moduleAddress = exports.moduleAddress;
Registry.moduleName = exports.moduleName;
Registry.structName = "Registry";
Registry.typeParameters = [];
Registry.fields = [
    { name: "hosts", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "registry", "TradingPairInfo", []), move_to_ts_2.AtomicTypeTag.Address]) },
    { name: "markets", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "registry", "MarketInfo", [])) },
    { name: "n_custodians", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TradingPairInfo {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.base_type_info = proto['base_type_info'];
        this.quote_type_info = proto['quote_type_info'];
        this.lot_size = proto['lot_size'];
        this.tick_size = proto['tick_size'];
        this.generic_asset_transfer_custodian_id = proto['generic_asset_transfer_custodian_id'];
        this.agnostic_disambiguator = proto['agnostic_disambiguator'];
    }
    static TradingPairInfoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TradingPairInfo);
        return new TradingPairInfo(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TradingPairInfo", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.base_type_info.loadFullState(app);
            yield this.quote_type_info.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TradingPairInfo = TradingPairInfo;
TradingPairInfo.moduleAddress = exports.moduleAddress;
TradingPairInfo.moduleName = exports.moduleName;
TradingPairInfo.structName = "TradingPairInfo";
TradingPairInfo.typeParameters = [];
TradingPairInfo.fields = [
    { name: "base_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) },
    { name: "quote_type_info", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "type_info", "TypeInfo", []) },
    { name: "lot_size", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "tick_size", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "generic_asset_transfer_custodian_id", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "agnostic_disambiguator", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function custodian_id_(custodian_capability_ref, $c) {
    return $.copy(custodian_capability_ref.custodian_id);
}
exports.custodian_id_ = custodian_id_;
function destroy_custodian_capability_test_(custodian_capability, $c) {
    custodian_capability;
    return;
}
exports.destroy_custodian_capability_test_ = destroy_custodian_capability_test_;
function get_custodian_capability_test_(custodian_id, $c) {
    return new CustodianCapability({ custodian_id: $.copy(custodian_id) }, new move_to_ts_2.SimpleStructTag(CustodianCapability));
}
exports.get_custodian_capability_test_ = get_custodian_capability_test_;
function get_verified_market_custodian_id_(market_id, $c, $p) {
    let registry_ref, trading_pair_info_ref;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        throw $.abortCode($.copy(exports.E_NO_REGISTRY));
    }
    registry_ref = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"));
    if (!($.copy(market_id)).lt(Stdlib.Vector.length_(registry_ref.markets, $c, [new move_to_ts_2.SimpleStructTag(MarketInfo)]))) {
        throw $.abortCode($.copy(exports.E_INVALID_MARKET_ID));
    }
    trading_pair_info_ref = Stdlib.Vector.borrow_(registry_ref.markets, $.copy(market_id), $c, [new move_to_ts_2.SimpleStructTag(MarketInfo)]).trading_pair_info;
    if (!$.deep_eq($.copy(trading_pair_info_ref.base_type_info), Stdlib.Type_info.type_of_($c, [$p[0]]))) {
        throw $.abortCode($.copy(exports.E_INVALID_BASE_ASSET));
    }
    if (!$.deep_eq($.copy(trading_pair_info_ref.quote_type_info), Stdlib.Type_info.type_of_($c, [$p[1]]))) {
        throw $.abortCode($.copy(exports.E_INVALID_QUOTE_ASSET));
    }
    return $.copy(trading_pair_info_ref.generic_asset_transfer_custodian_id);
}
exports.get_verified_market_custodian_id_ = get_verified_market_custodian_id_;
function init_registry_(account, $c) {
    if (!((Stdlib.Signer.address_of_(account, $c)).hex() === (new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).hex())) {
        throw $.abortCode($.copy(exports.E_NOT_ECONIA));
    }
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        throw $.abortCode($.copy(exports.E_REGISTRY_EXISTS));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(Registry), account, new Registry({ hosts: Stdlib.Table.new___($c, [new move_to_ts_2.SimpleStructTag(TradingPairInfo), move_to_ts_2.AtomicTypeTag.Address]), markets: Stdlib.Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(MarketInfo)]), n_custodians: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(Registry)));
    return;
}
exports.init_registry_ = init_registry_;
function buildPayload_init_registry(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"), "registry", "init_registry", typeParamStrings, [], isJSON);
}
exports.buildPayload_init_registry = buildPayload_init_registry;
function is_base_asset_(market_info, $c, $p) {
    let type_info;
    type_info = Stdlib.Type_info.type_of_($c, [$p[0]]);
    if ($.deep_eq($.copy(type_info), $.copy(market_info.trading_pair_info.base_type_info))) {
        return true;
    }
    else {
    }
    if ($.deep_eq($.copy(type_info), $.copy(market_info.trading_pair_info.quote_type_info))) {
        return false;
    }
    else {
    }
    throw $.abortCode($.copy(exports.E_NOT_IN_MARKET_PAIR));
}
exports.is_base_asset_ = is_base_asset_;
function is_base_or_quote_(market_info, $c, $p) {
    let temp$1, type_info;
    type_info = Stdlib.Type_info.type_of_($c, [$p[0]]);
    if ($.deep_eq($.copy(type_info), $.copy(market_info.trading_pair_info.base_type_info))) {
        temp$1 = true;
    }
    else {
        temp$1 = $.deep_eq($.copy(type_info), $.copy(market_info.trading_pair_info.quote_type_info));
    }
    return temp$1;
}
exports.is_base_or_quote_ = is_base_or_quote_;
function is_registered_custodian_id_(custodian_id, $c) {
    let temp$1;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        return false;
    }
    else {
    }
    if (($.copy(custodian_id)).le(n_custodians_($c))) {
        temp$1 = ($.copy(custodian_id)).neq($.copy(exports.NO_CUSTODIAN));
    }
    else {
        temp$1 = false;
    }
    return temp$1;
}
exports.is_registered_custodian_id_ = is_registered_custodian_id_;
function is_registered_trading_pair_(trading_pair_info, $c) {
    let registry_ref;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        return false;
    }
    else {
    }
    registry_ref = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"));
    return Stdlib.Table.contains_(registry_ref.hosts, $.copy(trading_pair_info), $c, [new move_to_ts_2.SimpleStructTag(TradingPairInfo), move_to_ts_2.AtomicTypeTag.Address]);
}
exports.is_registered_trading_pair_ = is_registered_trading_pair_;
function n_custodians_($c) {
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        throw $.abortCode($.copy(exports.E_NO_REGISTRY));
    }
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).n_custodians);
}
exports.n_custodians_ = n_custodians_;
function n_markets_($c) {
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        throw $.abortCode($.copy(exports.E_NO_REGISTRY));
    }
    return Stdlib.Vector.length_($c.borrow_global(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).markets, $c, [new move_to_ts_2.SimpleStructTag(MarketInfo)]);
}
exports.n_markets_ = n_markets_;
function register_custodian_capability_($c) {
    let custodian_id, registry_ref_mut;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        throw $.abortCode($.copy(exports.E_NO_REGISTRY));
    }
    registry_ref_mut = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"));
    custodian_id = ($.copy(registry_ref_mut.n_custodians)).add((0, move_to_ts_1.u64)("1"));
    registry_ref_mut.n_custodians = $.copy(custodian_id);
    return new CustodianCapability({ custodian_id: $.copy(custodian_id) }, new move_to_ts_2.SimpleStructTag(CustodianCapability));
}
exports.register_custodian_capability_ = register_custodian_capability_;
function register_market_internal_(host, lot_size, tick_size, generic_asset_transfer_custodian_id, $c, $p) {
    let temp$1, agnostic_disambiguator, base_is_coin, base_type_info, market_id, pure_coin, quote_is_coin, quote_type_info, registry_ref_mut, trading_pair_info;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
        throw $.abortCode($.copy(exports.E_NO_REGISTRY));
    }
    if (!($.copy(lot_size)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode($.copy(exports.E_LOT_SIZE_0));
    }
    if (!($.copy(tick_size)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode($.copy(exports.E_TICK_SIZE_0));
    }
    base_type_info = Stdlib.Type_info.type_of_($c, [$p[0]]);
    quote_type_info = Stdlib.Type_info.type_of_($c, [$p[1]]);
    base_is_coin = Stdlib.Coin.is_coin_initialized_($c, [$p[0]]);
    quote_is_coin = Stdlib.Coin.is_coin_initialized_($c, [$p[1]]);
    pure_coin = (base_is_coin && quote_is_coin);
    market_id = n_markets_($c);
    if (pure_coin) {
        temp$1 = $.copy(exports.PURE_COIN_PAIR);
    }
    else {
        temp$1 = $.copy(market_id);
    }
    agnostic_disambiguator = temp$1;
    trading_pair_info = new TradingPairInfo({ base_type_info: $.copy(base_type_info), quote_type_info: $.copy(quote_type_info), lot_size: $.copy(lot_size), tick_size: $.copy(tick_size), generic_asset_transfer_custodian_id: $.copy(generic_asset_transfer_custodian_id), agnostic_disambiguator: $.copy(agnostic_disambiguator) }, new move_to_ts_2.SimpleStructTag(TradingPairInfo));
    if (pure_coin) {
        if (!!$.deep_eq($.copy(base_type_info), $.copy(quote_type_info))) {
            throw $.abortCode($.copy(exports.E_SAME_COIN));
        }
        if (!!is_registered_trading_pair_($.copy(trading_pair_info), $c)) {
            throw $.abortCode($.copy(exports.E_MARKET_EXISTS));
        }
        if (!($.copy(generic_asset_transfer_custodian_id)).eq(($.copy(exports.PURE_COIN_PAIR)))) {
            throw $.abortCode($.copy(exports.E_INVALID_CUSTODIAN));
        }
    }
    else {
        if (!is_registered_custodian_id_($.copy(generic_asset_transfer_custodian_id), $c)) {
            throw $.abortCode($.copy(exports.E_INVALID_CUSTODIAN));
        }
    }
    registry_ref_mut = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"));
    Stdlib.Table.add_(registry_ref_mut.hosts, $.copy(trading_pair_info), $.copy(host), $c, [new move_to_ts_2.SimpleStructTag(TradingPairInfo), move_to_ts_2.AtomicTypeTag.Address]);
    Stdlib.Vector.push_back_(registry_ref_mut.markets, new MarketInfo({ host: $.copy(host), trading_pair_info: $.copy(trading_pair_info) }, new move_to_ts_2.SimpleStructTag(MarketInfo)), $c, [new move_to_ts_2.SimpleStructTag(MarketInfo)]);
    return $.copy(market_id);
}
exports.register_market_internal_ = register_market_internal_;
function set_registered_custodian_test_(custodian_id, $c) {
    $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Registry), new aptos_1.HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).n_custodians = $.copy(custodian_id);
    return;
}
exports.set_registered_custodian_test_ = set_registered_custodian_test_;
function loadParsers(repo) {
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::registry::CustodianCapability", CustodianCapability.CustodianCapabilityParser);
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::registry::GenericAsset", GenericAsset.GenericAssetParser);
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::registry::MarketInfo", MarketInfo.MarketInfoParser);
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::registry::Registry", Registry.RegistryParser);
    repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::registry::TradingPairInfo", TradingPairInfo.TradingPairInfoParser);
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
    get CustodianCapability() { return CustodianCapability; }
    get GenericAsset() { return GenericAsset; }
    get MarketInfo() { return MarketInfo; }
    get Registry() { return Registry; }
    loadRegistry(owner, loadFull = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Registry.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            return val;
        });
    }
    get TradingPairInfo() { return TradingPairInfo; }
    payload_init_registry(isJSON = false) {
        return buildPayload_init_registry(isJSON);
    }
    init_registry(_account, _maxGas = 1000, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = buildPayload_init_registry(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload, _maxGas);
        });
    }
}
exports.App = App;
//# sourceMappingURL=registry.js.map