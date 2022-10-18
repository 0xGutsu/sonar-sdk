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
exports.CollectionData = exports.BurnTokenEvent = exports.TOKEN_URI_MUTABLE_IND = exports.TOKEN_ROYALTY_MUTABLE_IND = exports.TOKEN_PROPERTY_VALUE_MUTABLE_IND = exports.TOKEN_PROPERTY_MUTABLE_IND = exports.TOKEN_PROPERTY_MUTABLE = exports.TOKEN_MAX_MUTABLE_IND = exports.TOKEN_DESCRIPTION_MUTABLE_IND = exports.MAX_URI_LENGTH = exports.MAX_NFT_NAME_LENGTH = exports.MAX_COLLECTION_NAME_LENGTH = exports.EWITHDRAW_ZERO = exports.EWITHDRAW_PROOF_EXPIRES = exports.EUSER_NOT_OPT_IN_DIRECT_TRANSFER = exports.EURI_TOO_SHORT = exports.EURI_TOO_LONG = exports.ETOKEN_STORE_NOT_PUBLISHED = exports.ETOKEN_SPLIT_AMOUNT_LARGER_THAN_TOKEN_AMOUNT = exports.ETOKEN_DATA_NOT_PUBLISHED = exports.ETOKEN_DATA_ALREADY_EXISTS = exports.EOWNER_CANNOT_BURN_TOKEN = exports.ENO_TOKEN_IN_TOKEN_STORE = exports.ENO_MUTATE_CAPABILITY = exports.ENO_MINT_CAPABILITY = exports.ENO_DEPOSIT_TOKEN_WITH_ZERO_AMOUNT = exports.ENO_BURN_TOKEN_WITH_ZERO_AMOUNT = exports.ENO_BURN_CAPABILITY = exports.ENFT_NOT_SPLITABLE = exports.ENFT_NAME_TOO_LONG = exports.EMINT_WOULD_EXCEED_TOKEN_MAXIMUM = exports.EINVALID_TOKEN_MERGE = exports.EINSUFFICIENT_BALANCE = exports.EFIELD_NOT_MUTABLE = exports.ECREATOR_CANNOT_BURN_TOKEN = exports.ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM = exports.ECOLLECTION_NOT_PUBLISHED = exports.ECOLLECTION_NAME_TOO_LONG = exports.ECOLLECTION_ALREADY_EXISTS = exports.ECOLLECTIONS_NOT_PUBLISHED = exports.ECANNOT_UPDATE_RESERVED_PROPERTY = exports.EALREADY_HAS_BALANCE = exports.COLLECTION_URI_MUTABLE_IND = exports.COLLECTION_MAX_MUTABLE_IND = exports.COLLECTION_DESCRIPTION_MUTABLE_IND = exports.BURNABLE_BY_OWNER = exports.BURNABLE_BY_CREATOR = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.get_token_id_fields_ = exports.get_token_id_ = exports.get_token_data_id_fields_ = exports.get_token_amount_ = exports.get_royalty_payee_ = exports.get_royalty_numerator_ = exports.get_royalty_denominator_ = exports.get_royalty_ = exports.get_property_map_ = exports.get_collection_supply_ = exports.buildPayload_direct_transfer_script = exports.direct_transfer_script_ = exports.direct_transfer_ = exports.direct_deposit_with_opt_in_ = exports.direct_deposit_ = exports.deposit_token_ = exports.create_withdraw_capability_ = exports.create_tokendata_ = exports.create_token_script_ = exports.create_token_mutability_config_ = exports.create_token_id_raw_ = exports.create_token_id_ = exports.create_token_data_id_ = exports.buildPayload_create_collection_script = exports.create_collection_script_ = exports.create_collection_mutability_config_ = exports.create_collection_ = exports.check_tokendata_exists_ = exports.check_collection_exists_ = exports.buildPayload_burn_by_creator = exports.burn_by_creator_ = exports.buildPayload_burn = exports.burn_ = exports.balance_of_ = exports.WithdrawEvent = exports.WithdrawCapability = exports.TokenStore = exports.TokenMutabilityConfig = exports.TokenId = exports.TokenDataId = exports.TokenData = exports.Token = exports.Royalty = exports.MutateTokenPropertyMapEvent = exports.MintTokenEvent = exports.DepositEvent = exports.CreateTokenDataEvent = exports.CreateCollectionEvent = exports.Collections = exports.CollectionMutabilityConfig = void 0;
exports.App = exports.loadParsers = exports.withdraw_with_event_internal_ = exports.withdraw_with_capability_ = exports.withdraw_token_ = exports.update_token_property_internal_ = exports.transfer_ = exports.token_id_ = exports.split_ = exports.buildPayload_opt_in_direct_transfer = exports.opt_in_direct_transfer_ = exports.mutate_tokendata_uri_ = exports.mutate_tokendata_property_ = exports.mutate_token_properties_ = exports.mutate_one_token_ = exports.mint_token_to_ = exports.mint_token_ = exports.buildPayload_mint_script = exports.mint_script_ = exports.merge_ = exports.initialize_token_store_ = exports.buildPayload_initialize_token_script = exports.initialize_token_script_ = exports.initialize_token_ = exports.has_token_store_ = exports.get_tokendata_uri_ = exports.get_tokendata_largest_property_version_ = exports.get_token_supply_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
const Property_map = __importStar(require("./property_map"));
exports.packageName = "AptosToken";
exports.moduleAddress = new aptos_1.HexString("0x3");
exports.moduleName = "token";
exports.BURNABLE_BY_CREATOR = [(0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("75"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("85"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("89"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("67"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("82")];
exports.BURNABLE_BY_OWNER = [(0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("75"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("85"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("89"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("87"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("82")];
exports.COLLECTION_DESCRIPTION_MUTABLE_IND = (0, move_to_ts_1.u64)("0");
exports.COLLECTION_MAX_MUTABLE_IND = (0, move_to_ts_1.u64)("2");
exports.COLLECTION_URI_MUTABLE_IND = (0, move_to_ts_1.u64)("1");
exports.EALREADY_HAS_BALANCE = (0, move_to_ts_1.u64)("0");
exports.ECANNOT_UPDATE_RESERVED_PROPERTY = (0, move_to_ts_1.u64)("32");
exports.ECOLLECTIONS_NOT_PUBLISHED = (0, move_to_ts_1.u64)("1");
exports.ECOLLECTION_ALREADY_EXISTS = (0, move_to_ts_1.u64)("3");
exports.ECOLLECTION_NAME_TOO_LONG = (0, move_to_ts_1.u64)("25");
exports.ECOLLECTION_NOT_PUBLISHED = (0, move_to_ts_1.u64)("2");
exports.ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM = (0, move_to_ts_1.u64)("4");
exports.ECREATOR_CANNOT_BURN_TOKEN = (0, move_to_ts_1.u64)("31");
exports.EFIELD_NOT_MUTABLE = (0, move_to_ts_1.u64)("13");
exports.EINSUFFICIENT_BALANCE = (0, move_to_ts_1.u64)("5");
exports.EINVALID_TOKEN_MERGE = (0, move_to_ts_1.u64)("6");
exports.EMINT_WOULD_EXCEED_TOKEN_MAXIMUM = (0, move_to_ts_1.u64)("7");
exports.ENFT_NAME_TOO_LONG = (0, move_to_ts_1.u64)("26");
exports.ENFT_NOT_SPLITABLE = (0, move_to_ts_1.u64)("18");
exports.ENO_BURN_CAPABILITY = (0, move_to_ts_1.u64)("8");
exports.ENO_BURN_TOKEN_WITH_ZERO_AMOUNT = (0, move_to_ts_1.u64)("29");
exports.ENO_DEPOSIT_TOKEN_WITH_ZERO_AMOUNT = (0, move_to_ts_1.u64)("28");
exports.ENO_MINT_CAPABILITY = (0, move_to_ts_1.u64)("19");
exports.ENO_MUTATE_CAPABILITY = (0, move_to_ts_1.u64)("14");
exports.ENO_TOKEN_IN_TOKEN_STORE = (0, move_to_ts_1.u64)("15");
exports.EOWNER_CANNOT_BURN_TOKEN = (0, move_to_ts_1.u64)("30");
exports.ETOKEN_DATA_ALREADY_EXISTS = (0, move_to_ts_1.u64)("9");
exports.ETOKEN_DATA_NOT_PUBLISHED = (0, move_to_ts_1.u64)("10");
exports.ETOKEN_SPLIT_AMOUNT_LARGER_THAN_TOKEN_AMOUNT = (0, move_to_ts_1.u64)("12");
exports.ETOKEN_STORE_NOT_PUBLISHED = (0, move_to_ts_1.u64)("11");
exports.EURI_TOO_LONG = (0, move_to_ts_1.u64)("27");
exports.EURI_TOO_SHORT = (0, move_to_ts_1.u64)("33");
exports.EUSER_NOT_OPT_IN_DIRECT_TRANSFER = (0, move_to_ts_1.u64)("16");
exports.EWITHDRAW_PROOF_EXPIRES = (0, move_to_ts_1.u64)("29");
exports.EWITHDRAW_ZERO = (0, move_to_ts_1.u64)("17");
exports.MAX_COLLECTION_NAME_LENGTH = (0, move_to_ts_1.u64)("128");
exports.MAX_NFT_NAME_LENGTH = (0, move_to_ts_1.u64)("128");
exports.MAX_URI_LENGTH = (0, move_to_ts_1.u64)("512");
exports.TOKEN_DESCRIPTION_MUTABLE_IND = (0, move_to_ts_1.u64)("2");
exports.TOKEN_MAX_MUTABLE_IND = (0, move_to_ts_1.u64)("0");
exports.TOKEN_PROPERTY_MUTABLE = [(0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("75"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("80"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("80"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("89"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("77"), (0, move_to_ts_1.u8)("85"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("76"), (0, move_to_ts_1.u8)("69")];
exports.TOKEN_PROPERTY_MUTABLE_IND = (0, move_to_ts_1.u64)("4");
exports.TOKEN_PROPERTY_VALUE_MUTABLE_IND = (0, move_to_ts_1.u64)("5");
exports.TOKEN_ROYALTY_MUTABLE_IND = (0, move_to_ts_1.u64)("3");
exports.TOKEN_URI_MUTABLE_IND = (0, move_to_ts_1.u64)("1");
class BurnTokenEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.amount = proto['amount'];
    }
    static BurnTokenEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BurnTokenEvent);
        return new BurnTokenEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BurnTokenEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.BurnTokenEvent = BurnTokenEvent;
BurnTokenEvent.moduleAddress = exports.moduleAddress;
BurnTokenEvent.moduleName = exports.moduleName;
BurnTokenEvent.structName = "BurnTokenEvent";
BurnTokenEvent.typeParameters = [];
BurnTokenEvent.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class CollectionData {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.description = proto['description'];
        this.name = proto['name'];
        this.uri = proto['uri'];
        this.supply = proto['supply'];
        this.maximum = proto['maximum'];
        this.mutability_config = proto['mutability_config'];
    }
    static CollectionDataParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CollectionData);
        return new CollectionData(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CollectionData", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.description.loadFullState(app);
            yield this.name.loadFullState(app);
            yield this.uri.loadFullState(app);
            yield this.mutability_config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CollectionData = CollectionData;
CollectionData.moduleAddress = exports.moduleAddress;
CollectionData.moduleName = exports.moduleName;
CollectionData.structName = "CollectionData";
CollectionData.typeParameters = [];
CollectionData.fields = [
    { name: "description", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "uri", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "supply", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "maximum", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "mutability_config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "CollectionMutabilityConfig", []) }
];
class CollectionMutabilityConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.description = proto['description'];
        this.uri = proto['uri'];
        this.maximum = proto['maximum'];
    }
    static CollectionMutabilityConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CollectionMutabilityConfig);
        return new CollectionMutabilityConfig(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CollectionMutabilityConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CollectionMutabilityConfig = CollectionMutabilityConfig;
CollectionMutabilityConfig.moduleAddress = exports.moduleAddress;
CollectionMutabilityConfig.moduleName = exports.moduleName;
CollectionMutabilityConfig.structName = "CollectionMutabilityConfig";
CollectionMutabilityConfig.typeParameters = [];
CollectionMutabilityConfig.fields = [
    { name: "description", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "uri", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "maximum", typeTag: move_to_ts_2.AtomicTypeTag.Bool }
];
class Collections {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.collection_data = proto['collection_data'];
        this.token_data = proto['token_data'];
        this.create_collection_events = proto['create_collection_events'];
        this.create_token_data_events = proto['create_token_data_events'];
        this.mint_token_events = proto['mint_token_events'];
    }
    static CollectionsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Collections);
        return new Collections(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Collections, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Collections, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Collections", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection_data.loadFullState(app);
            yield this.token_data.loadFullState(app);
            yield this.create_collection_events.loadFullState(app);
            yield this.create_token_data_events.loadFullState(app);
            yield this.mint_token_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Collections = Collections;
Collections.moduleAddress = exports.moduleAddress;
Collections.moduleName = exports.moduleName;
Collections.structName = "Collections";
Collections.typeParameters = [];
Collections.fields = [
    { name: "collection_data", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "CollectionData", [])]) },
    { name: "token_data", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenDataId", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenData", [])]) },
    { name: "create_collection_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "CreateCollectionEvent", [])]) },
    { name: "create_token_data_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "CreateTokenDataEvent", [])]) },
    { name: "mint_token_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "MintTokenEvent", [])]) }
];
class CreateCollectionEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.creator = proto['creator'];
        this.collection_name = proto['collection_name'];
        this.uri = proto['uri'];
        this.description = proto['description'];
        this.maximum = proto['maximum'];
    }
    static CreateCollectionEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CreateCollectionEvent);
        return new CreateCollectionEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CreateCollectionEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection_name.loadFullState(app);
            yield this.uri.loadFullState(app);
            yield this.description.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CreateCollectionEvent = CreateCollectionEvent;
CreateCollectionEvent.moduleAddress = exports.moduleAddress;
CreateCollectionEvent.moduleName = exports.moduleName;
CreateCollectionEvent.structName = "CreateCollectionEvent";
CreateCollectionEvent.typeParameters = [];
CreateCollectionEvent.fields = [
    { name: "creator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "collection_name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "uri", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "description", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "maximum", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class CreateTokenDataEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.description = proto['description'];
        this.maximum = proto['maximum'];
        this.uri = proto['uri'];
        this.royalty_payee_address = proto['royalty_payee_address'];
        this.royalty_points_denominator = proto['royalty_points_denominator'];
        this.royalty_points_numerator = proto['royalty_points_numerator'];
        this.name = proto['name'];
        this.mutability_config = proto['mutability_config'];
        this.property_keys = proto['property_keys'];
        this.property_values = proto['property_values'];
        this.property_types = proto['property_types'];
    }
    static CreateTokenDataEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CreateTokenDataEvent);
        return new CreateTokenDataEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CreateTokenDataEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            yield this.description.loadFullState(app);
            yield this.uri.loadFullState(app);
            yield this.name.loadFullState(app);
            yield this.mutability_config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.CreateTokenDataEvent = CreateTokenDataEvent;
CreateTokenDataEvent.moduleAddress = exports.moduleAddress;
CreateTokenDataEvent.moduleName = exports.moduleName;
CreateTokenDataEvent.structName = "CreateTokenDataEvent";
CreateTokenDataEvent.typeParameters = [];
CreateTokenDataEvent.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenDataId", []) },
    { name: "description", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "maximum", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "uri", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "royalty_payee_address", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "royalty_points_denominator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "royalty_points_numerator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "mutability_config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenMutabilityConfig", []) },
    { name: "property_keys", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])) },
    { name: "property_values", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)) },
    { name: "property_types", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])) }
];
class DepositEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.amount = proto['amount'];
    }
    static DepositEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, DepositEvent);
        return new DepositEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "DepositEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.DepositEvent = DepositEvent;
DepositEvent.moduleAddress = exports.moduleAddress;
DepositEvent.moduleName = exports.moduleName;
DepositEvent.structName = "DepositEvent";
DepositEvent.typeParameters = [];
DepositEvent.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class MintTokenEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.amount = proto['amount'];
    }
    static MintTokenEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MintTokenEvent);
        return new MintTokenEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MintTokenEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MintTokenEvent = MintTokenEvent;
MintTokenEvent.moduleAddress = exports.moduleAddress;
MintTokenEvent.moduleName = exports.moduleName;
MintTokenEvent.structName = "MintTokenEvent";
MintTokenEvent.typeParameters = [];
MintTokenEvent.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenDataId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class MutateTokenPropertyMapEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.old_id = proto['old_id'];
        this.new_id = proto['new_id'];
        this.keys = proto['keys'];
        this.values = proto['values'];
        this.types = proto['types'];
    }
    static MutateTokenPropertyMapEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, MutateTokenPropertyMapEvent);
        return new MutateTokenPropertyMapEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "MutateTokenPropertyMapEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.old_id.loadFullState(app);
            yield this.new_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.MutateTokenPropertyMapEvent = MutateTokenPropertyMapEvent;
MutateTokenPropertyMapEvent.moduleAddress = exports.moduleAddress;
MutateTokenPropertyMapEvent.moduleName = exports.moduleName;
MutateTokenPropertyMapEvent.structName = "MutateTokenPropertyMapEvent";
MutateTokenPropertyMapEvent.typeParameters = [];
MutateTokenPropertyMapEvent.fields = [
    { name: "old_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "new_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "keys", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])) },
    { name: "values", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)) },
    { name: "types", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])) }
];
class Royalty {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.royalty_points_numerator = proto['royalty_points_numerator'];
        this.royalty_points_denominator = proto['royalty_points_denominator'];
        this.payee_address = proto['payee_address'];
    }
    static RoyaltyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Royalty);
        return new Royalty(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Royalty", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Royalty = Royalty;
Royalty.moduleAddress = exports.moduleAddress;
Royalty.moduleName = exports.moduleName;
Royalty.structName = "Royalty";
Royalty.typeParameters = [];
Royalty.fields = [
    { name: "royalty_points_numerator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "royalty_points_denominator", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "payee_address", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class Token {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.amount = proto['amount'];
        this.token_properties = proto['token_properties'];
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
            yield this.id.loadFullState(app);
            yield this.token_properties.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Token = Token;
Token.moduleAddress = exports.moduleAddress;
Token.moduleName = exports.moduleName;
Token.structName = "Token";
Token.typeParameters = [];
Token.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "token_properties", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "property_map", "PropertyMap", []) }
];
class TokenData {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.maximum = proto['maximum'];
        this.largest_property_version = proto['largest_property_version'];
        this.supply = proto['supply'];
        this.uri = proto['uri'];
        this.royalty = proto['royalty'];
        this.name = proto['name'];
        this.description = proto['description'];
        this.default_properties = proto['default_properties'];
        this.mutability_config = proto['mutability_config'];
    }
    static TokenDataParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenData);
        return new TokenData(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenData", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.uri.loadFullState(app);
            yield this.royalty.loadFullState(app);
            yield this.name.loadFullState(app);
            yield this.description.loadFullState(app);
            yield this.default_properties.loadFullState(app);
            yield this.mutability_config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenData = TokenData;
TokenData.moduleAddress = exports.moduleAddress;
TokenData.moduleName = exports.moduleName;
TokenData.structName = "TokenData";
TokenData.typeParameters = [];
TokenData.fields = [
    { name: "maximum", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "largest_property_version", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "supply", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "uri", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "royalty", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Royalty", []) },
    { name: "name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "description", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "default_properties", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "property_map", "PropertyMap", []) },
    { name: "mutability_config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenMutabilityConfig", []) }
];
class TokenDataId {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.creator = proto['creator'];
        this.collection = proto['collection'];
        this.name = proto['name'];
    }
    static TokenDataIdParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenDataId);
        return new TokenDataId(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenDataId", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.loadFullState(app);
            yield this.name.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenDataId = TokenDataId;
TokenDataId.moduleAddress = exports.moduleAddress;
TokenDataId.moduleName = exports.moduleName;
TokenDataId.structName = "TokenDataId";
TokenDataId.typeParameters = [];
TokenDataId.fields = [
    { name: "creator", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "collection", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) }
];
class TokenId {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_data_id = proto['token_data_id'];
        this.property_version = proto['property_version'];
    }
    static TokenIdParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenId);
        return new TokenId(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenId", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_data_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenId = TokenId;
TokenId.moduleAddress = exports.moduleAddress;
TokenId.moduleName = exports.moduleName;
TokenId.structName = "TokenId";
TokenId.typeParameters = [];
TokenId.fields = [
    { name: "token_data_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenDataId", []) },
    { name: "property_version", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class TokenMutabilityConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.maximum = proto['maximum'];
        this.uri = proto['uri'];
        this.royalty = proto['royalty'];
        this.description = proto['description'];
        this.properties = proto['properties'];
    }
    static TokenMutabilityConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenMutabilityConfig);
        return new TokenMutabilityConfig(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenMutabilityConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.TokenMutabilityConfig = TokenMutabilityConfig;
TokenMutabilityConfig.moduleAddress = exports.moduleAddress;
TokenMutabilityConfig.moduleName = exports.moduleName;
TokenMutabilityConfig.structName = "TokenMutabilityConfig";
TokenMutabilityConfig.typeParameters = [];
TokenMutabilityConfig.fields = [
    { name: "maximum", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "uri", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "royalty", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "description", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "properties", typeTag: move_to_ts_2.AtomicTypeTag.Bool }
];
class TokenStore {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.tokens = proto['tokens'];
        this.direct_transfer = proto['direct_transfer'];
        this.deposit_events = proto['deposit_events'];
        this.withdraw_events = proto['withdraw_events'];
        this.burn_events = proto['burn_events'];
        this.mutate_token_property_events = proto['mutate_token_property_events'];
    }
    static TokenStoreParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TokenStore);
        return new TokenStore(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, TokenStore, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, TokenStore, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TokenStore", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tokens.loadFullState(app);
            yield this.deposit_events.loadFullState(app);
            yield this.withdraw_events.loadFullState(app);
            yield this.burn_events.loadFullState(app);
            yield this.mutate_token_property_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.TokenStore = TokenStore;
TokenStore.moduleAddress = exports.moduleAddress;
TokenStore.moduleName = exports.moduleName;
TokenStore.structName = "TokenStore";
TokenStore.typeParameters = [];
TokenStore.fields = [
    { name: "tokens", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "Token", [])]) },
    { name: "direct_transfer", typeTag: move_to_ts_2.AtomicTypeTag.Bool },
    { name: "deposit_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "DepositEvent", [])]) },
    { name: "withdraw_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "WithdrawEvent", [])]) },
    { name: "burn_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "BurnTokenEvent", [])]) },
    { name: "mutate_token_property_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "MutateTokenPropertyMapEvent", [])]) }
];
class WithdrawCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.token_owner = proto['token_owner'];
        this.token_id = proto['token_id'];
        this.amount = proto['amount'];
        this.expiration_sec = proto['expiration_sec'];
    }
    static WithdrawCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, WithdrawCapability);
        return new WithdrawCapability(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "WithdrawCapability", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.token_id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.WithdrawCapability = WithdrawCapability;
WithdrawCapability.moduleAddress = exports.moduleAddress;
WithdrawCapability.moduleName = exports.moduleName;
WithdrawCapability.structName = "WithdrawCapability";
WithdrawCapability.typeParameters = [];
WithdrawCapability.fields = [
    { name: "token_owner", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "token_id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "expiration_sec", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class WithdrawEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.id = proto['id'];
        this.amount = proto['amount'];
    }
    static WithdrawEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, WithdrawEvent);
        return new WithdrawEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "WithdrawEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.id.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.WithdrawEvent = WithdrawEvent;
WithdrawEvent.moduleAddress = exports.moduleAddress;
WithdrawEvent.moduleName = exports.moduleName;
WithdrawEvent.structName = "WithdrawEvent";
WithdrawEvent.typeParameters = [];
WithdrawEvent.fields = [
    { name: "id", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "token", "TokenId", []) },
    { name: "amount", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function balance_of_(owner, id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, token_store;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(owner)))) {
            return (0, move_to_ts_1.u64)("0");
        }
        else {
        }
        token_store = yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(owner));
        if (yield Stdlib.Table.contains_((token_store).tokens, $.copy(id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)])) {
            temp$1 = $.copy((yield Stdlib.Table.borrow_((token_store).tokens, $.copy(id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)])).amount);
        }
        else {
            temp$1 = (0, move_to_ts_1.u64)("0");
        }
        return temp$1;
    });
}
exports.balance_of_ = balance_of_;
function burn_(owner, creators_address, collection, name, property_version, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, burn_by_owner_flag, collections, creator_addr, token_data, token_data__5, token_id, token_store;
        if (!($.copy(amount)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENO_BURN_TOKEN_WITH_ZERO_AMOUNT), $c));
        }
        token_id = yield create_token_id_raw_($.copy(creators_address), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        creator_addr = $.copy(((token_id).token_data_id).creator);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        collections = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr));
        if (!(yield Stdlib.Table.contains_((collections).token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_mut_((collections).token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        temp$2 = (token_data).default_properties;
        temp$1 = yield Stdlib.String.utf8_($.copy(exports.BURNABLE_BY_OWNER), $c);
        if (!(yield Property_map.contains_key_(temp$2, temp$1, $c))) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EOWNER_CANNOT_BURN_TOKEN), $c));
        }
        temp$4 = (token_data).default_properties;
        temp$3 = yield Stdlib.String.utf8_($.copy(exports.BURNABLE_BY_OWNER), $c);
        burn_by_owner_flag = yield Property_map.read_bool_(temp$4, temp$3, $c);
        if (!burn_by_owner_flag) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EOWNER_CANNOT_BURN_TOKEN), $c));
        }
        let { amount: burned_amount } = yield withdraw_token_(owner, $.copy(token_id), $.copy(amount), $c);
        token_store = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), yield Stdlib.Signer.address_of_(owner, $c));
        yield Stdlib.Event.emit_event_((token_store).burn_events, new BurnTokenEvent({ id: $.copy(token_id), amount: $.copy(burned_amount) }, new move_to_ts_2.SimpleStructTag(BurnTokenEvent)), $c, [new move_to_ts_2.SimpleStructTag(BurnTokenEvent)]);
        token_data__5 = yield Stdlib.Table.borrow_mut_((collections).token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        if (($.copy((token_data__5).maximum)).gt((0, move_to_ts_1.u64)("0"))) {
            (token_data__5).supply = ($.copy((token_data__5).supply)).sub($.copy(burned_amount));
            if (($.copy((token_data__5).supply)).eq(((0, move_to_ts_1.u64)("0")))) {
                yield Stdlib.Table.remove_((collections).token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
            }
            else {
            }
        }
        else {
        }
        return;
    });
}
exports.burn_ = burn_;
function buildPayload_burn(creators_address, collection, name, property_version, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token", "burn", typeParamStrings, [
        creators_address,
        collection,
        name,
        property_version,
        amount,
    ], isJSON);
}
exports.buildPayload_burn = buildPayload_burn;
function burn_by_creator_(creator, owner, collection, name, property_version, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, burn_by_creator_flag, collections, creator_addr, creator_address, token_data, token_id, token_store;
        creator_address = yield Stdlib.Signer.address_of_(creator, $c);
        if (!($.copy(amount)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENO_BURN_TOKEN_WITH_ZERO_AMOUNT), $c));
        }
        token_id = yield create_token_id_raw_($.copy(creator_address), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        creator_addr = $.copy(((token_id).token_data_id).creator);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        collections = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_address));
        if (!(yield Stdlib.Table.contains_((collections).token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_mut_((collections).token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        temp$2 = (token_data).default_properties;
        temp$1 = yield Stdlib.String.utf8_($.copy(exports.BURNABLE_BY_CREATOR), $c);
        if (!(yield Property_map.contains_key_(temp$2, temp$1, $c))) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.ECREATOR_CANNOT_BURN_TOKEN), $c));
        }
        temp$4 = (token_data).default_properties;
        temp$3 = yield Stdlib.String.utf8_($.copy(exports.BURNABLE_BY_CREATOR), $c);
        burn_by_creator_flag = yield Property_map.read_bool_(temp$4, temp$3, $c);
        if (!burn_by_creator_flag) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.ECREATOR_CANNOT_BURN_TOKEN), $c));
        }
        let { amount: burned_amount } = yield withdraw_with_event_internal_($.copy(owner), $.copy(token_id), $.copy(amount), $c);
        token_store = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(owner));
        yield Stdlib.Event.emit_event_((token_store).burn_events, new BurnTokenEvent({ id: $.copy(token_id), amount: $.copy(burned_amount) }, new move_to_ts_2.SimpleStructTag(BurnTokenEvent)), $c, [new move_to_ts_2.SimpleStructTag(BurnTokenEvent)]);
        if (($.copy((token_data).maximum)).gt((0, move_to_ts_1.u64)("0"))) {
            (token_data).supply = ($.copy((token_data).supply)).sub($.copy(burned_amount));
            if (($.copy((token_data).supply)).eq(((0, move_to_ts_1.u64)("0")))) {
                yield Stdlib.Table.remove_((collections).token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
            }
            else {
            }
        }
        else {
        }
        return;
    });
}
exports.burn_by_creator_ = burn_by_creator_;
function buildPayload_burn_by_creator(owner, collection, name, property_version, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token", "burn_by_creator", typeParamStrings, [
        owner,
        collection,
        name,
        property_version,
        amount,
    ], isJSON);
}
exports.buildPayload_burn_by_creator = buildPayload_burn_by_creator;
function check_collection_exists_(creator, name, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let collection_data;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        collection_data = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator))).collection_data;
        return yield Stdlib.Table.contains_(collection_data, $.copy(name), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]);
    });
}
exports.check_collection_exists_ = check_collection_exists_;
function check_tokendata_exists_(creator, collection_name, token_name, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_data, token_data_id;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        token_data = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator))).token_data;
        token_data_id = yield create_token_data_id_($.copy(creator), $.copy(collection_name), $.copy(token_name), $c);
        return yield Stdlib.Table.contains_(token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
    });
}
exports.check_tokendata_exists_ = check_tokendata_exists_;
function create_collection_(creator, name, description, uri, maximum, mutate_setting, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, account_addr, collection, collection_data, collection_handle, mutability_config;
        if (!(yield Stdlib.String.length_(name, $c)).le($.copy(exports.MAX_COLLECTION_NAME_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ECOLLECTION_NAME_TOO_LONG), $c));
        }
        if (!(yield Stdlib.String.length_(uri, $c)).le($.copy(exports.MAX_URI_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EURI_TOO_LONG), $c));
        }
        account_addr = yield Stdlib.Signer.address_of_(creator, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(account_addr)))) {
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(Collections), creator, new Collections({ collection_data: yield Stdlib.Table.new___($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]), token_data: yield Stdlib.Table.new___($c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]), create_collection_events: yield Stdlib.Account.new_event_handle_(creator, $c, [new move_to_ts_2.SimpleStructTag(CreateCollectionEvent)]), create_token_data_events: yield Stdlib.Account.new_event_handle_(creator, $c, [new move_to_ts_2.SimpleStructTag(CreateTokenDataEvent)]), mint_token_events: yield Stdlib.Account.new_event_handle_(creator, $c, [new move_to_ts_2.SimpleStructTag(MintTokenEvent)]) }, new move_to_ts_2.SimpleStructTag(Collections)));
        }
        else {
        }
        collection_data = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(account_addr))).collection_data;
        [temp$1, temp$2] = [collection_data, $.copy(name)];
        if (!!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]))) {
            throw $.abortCode(yield Stdlib.Error.already_exists_($.copy(exports.ECOLLECTION_ALREADY_EXISTS), $c));
        }
        mutability_config = yield create_collection_mutability_config_(mutate_setting, $c);
        collection = new CollectionData({ description: $.copy(description), name: $.copy(name), uri: $.copy(uri), supply: (0, move_to_ts_1.u64)("0"), maximum: $.copy(maximum), mutability_config: $.copy(mutability_config) }, new move_to_ts_2.SimpleStructTag(CollectionData));
        yield Stdlib.Table.add_(collection_data, $.copy(name), collection, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]);
        collection_handle = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(account_addr));
        yield Stdlib.Event.emit_event_((collection_handle).create_collection_events, new CreateCollectionEvent({ creator: $.copy(account_addr), collection_name: $.copy(name), uri: $.copy(uri), description: $.copy(description), maximum: $.copy(maximum) }, new move_to_ts_2.SimpleStructTag(CreateCollectionEvent)), $c, [new move_to_ts_2.SimpleStructTag(CreateCollectionEvent)]);
        return;
    });
}
exports.create_collection_ = create_collection_;
function create_collection_mutability_config_(mutate_setting, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new CollectionMutabilityConfig({ description: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.COLLECTION_DESCRIPTION_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])), uri: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.COLLECTION_URI_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])), maximum: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.COLLECTION_MAX_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])) }, new move_to_ts_2.SimpleStructTag(CollectionMutabilityConfig));
    });
}
exports.create_collection_mutability_config_ = create_collection_mutability_config_;
function create_collection_script_(creator, name, description, uri, maximum, mutate_setting, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        yield create_collection_(creator, $.copy(name), $.copy(description), $.copy(uri), $.copy(maximum), $.copy(mutate_setting), $c);
        return;
    });
}
exports.create_collection_script_ = create_collection_script_;
function buildPayload_create_collection_script(name, description, uri, maximum, mutate_setting, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token", "create_collection_script", typeParamStrings, [
        name,
        description,
        uri,
        maximum,
        mutate_setting,
    ], isJSON);
}
exports.buildPayload_create_collection_script = buildPayload_create_collection_script;
function create_token_data_id_(creator, collection, name, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield Stdlib.String.length_(collection, $c)).le($.copy(exports.MAX_COLLECTION_NAME_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ECOLLECTION_NAME_TOO_LONG), $c));
        }
        if (!(yield Stdlib.String.length_(name, $c)).le($.copy(exports.MAX_NFT_NAME_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENFT_NAME_TOO_LONG), $c));
        }
        return new TokenDataId({ creator: $.copy(creator), collection: $.copy(collection), name: $.copy(name) }, new move_to_ts_2.SimpleStructTag(TokenDataId));
    });
}
exports.create_token_data_id_ = create_token_data_id_;
function create_token_id_(token_data_id, property_version, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new TokenId({ token_data_id: $.copy(token_data_id), property_version: $.copy(property_version) }, new move_to_ts_2.SimpleStructTag(TokenId));
    });
}
exports.create_token_id_ = create_token_id_;
function create_token_id_raw_(creator, collection, name, property_version, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new TokenId({ token_data_id: yield create_token_data_id_($.copy(creator), $.copy(collection), $.copy(name), $c), property_version: $.copy(property_version) }, new move_to_ts_2.SimpleStructTag(TokenId));
    });
}
exports.create_token_id_raw_ = create_token_id_raw_;
function create_token_mutability_config_(mutate_setting, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new TokenMutabilityConfig({ maximum: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.TOKEN_MAX_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])), uri: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.TOKEN_URI_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])), royalty: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.TOKEN_ROYALTY_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])), description: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.TOKEN_DESCRIPTION_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])), properties: $.copy(yield Stdlib.Vector.borrow_(mutate_setting, $.copy(exports.TOKEN_PROPERTY_MUTABLE_IND), $c, [move_to_ts_2.AtomicTypeTag.Bool])) }, new move_to_ts_2.SimpleStructTag(TokenMutabilityConfig));
    });
}
exports.create_token_mutability_config_ = create_token_mutability_config_;
function create_token_script_(account, collection, name, description, balance, maximum, uri, royalty_payee_address, royalty_points_denominator, royalty_points_numerator, mutate_setting, property_keys, property_values, property_types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_mut_config, tokendata_id;
        token_mut_config = yield create_token_mutability_config_(mutate_setting, $c);
        tokendata_id = yield create_tokendata_(account, $.copy(collection), $.copy(name), $.copy(description), $.copy(maximum), $.copy(uri), $.copy(royalty_payee_address), $.copy(royalty_points_denominator), $.copy(royalty_points_numerator), $.copy(token_mut_config), $.copy(property_keys), $.copy(property_values), $.copy(property_types), $c);
        yield mint_token_(account, $.copy(tokendata_id), $.copy(balance), $c);
        return;
    });
}
exports.create_token_script_ = create_token_script_;
function create_tokendata_(account, collection, name, description, maximum, uri, royalty_payee_address, royalty_points_denominator, royalty_points_numerator, token_mutate_config, property_keys, property_values, property_types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, account_addr, collection__1, collections, token_data, token_data_id;
        if (!(yield Stdlib.String.length_(name, $c)).le($.copy(exports.MAX_NFT_NAME_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENFT_NAME_TOO_LONG), $c));
        }
        if (!(yield Stdlib.String.length_(collection, $c)).le($.copy(exports.MAX_COLLECTION_NAME_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ECOLLECTION_NAME_TOO_LONG), $c));
        }
        if (!(yield Stdlib.String.length_(uri, $c)).le($.copy(exports.MAX_URI_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EURI_TOO_LONG), $c));
        }
        account_addr = yield Stdlib.Signer.address_of_(account, $c);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(account_addr)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        collections = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(account_addr));
        token_data_id = yield create_token_data_id_($.copy(account_addr), $.copy(collection), $.copy(name), $c);
        if (!(yield Stdlib.Table.contains_((collections).collection_data, $.copy((token_data_id).collection), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTION_NOT_PUBLISHED), $c));
        }
        if (!!(yield Stdlib.Table.contains_((collections).token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.already_exists_($.copy(exports.ETOKEN_DATA_ALREADY_EXISTS), $c));
        }
        collection__1 = yield Stdlib.Table.borrow_mut_((collections).collection_data, $.copy((token_data_id).collection), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]);
        if (($.copy((collection__1).maximum)).gt((0, move_to_ts_1.u64)("0"))) {
            (collection__1).supply = ($.copy((collection__1).supply)).add((0, move_to_ts_1.u64)("1"));
            if (!($.copy((collection__1).maximum)).ge($.copy((collection__1).supply))) {
                throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM), $c));
            }
        }
        else {
        }
        temp$8 = $.copy(maximum);
        temp$7 = (0, move_to_ts_1.u64)("0");
        temp$6 = (0, move_to_ts_1.u64)("0");
        temp$5 = $.copy(uri);
        temp$2 = $.copy(royalty_points_denominator);
        temp$3 = $.copy(royalty_points_numerator);
        temp$4 = $.copy(royalty_payee_address);
        token_data = new TokenData({ maximum: temp$8, largest_property_version: temp$7, supply: temp$6, uri: temp$5, royalty: new Royalty({ royalty_points_numerator: temp$3, royalty_points_denominator: temp$2, payee_address: temp$4 }, new move_to_ts_2.SimpleStructTag(Royalty)), name: $.copy(name), description: $.copy(description), default_properties: yield Property_map.new___($.copy(property_keys), $.copy(property_values), $.copy(property_types), $c), mutability_config: $.copy(token_mutate_config) }, new move_to_ts_2.SimpleStructTag(TokenData));
        yield Stdlib.Table.add_((collections).token_data, $.copy(token_data_id), token_data, $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        yield Stdlib.Event.emit_event_((collections).create_token_data_events, new CreateTokenDataEvent({ id: $.copy(token_data_id), description: $.copy(description), maximum: $.copy(maximum), uri: $.copy(uri), royalty_payee_address: $.copy(royalty_payee_address), royalty_points_denominator: $.copy(royalty_points_denominator), royalty_points_numerator: $.copy(royalty_points_numerator), name: $.copy(name), mutability_config: $.copy(token_mutate_config), property_keys: $.copy(property_keys), property_values: $.copy(property_values), property_types: $.copy(property_types) }, new move_to_ts_2.SimpleStructTag(CreateTokenDataEvent)), $c, [new move_to_ts_2.SimpleStructTag(CreateTokenDataEvent)]);
        return $.copy(token_data_id);
    });
}
exports.create_tokendata_ = create_tokendata_;
function create_withdraw_capability_(owner, token_id, amount, expiration_sec, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new WithdrawCapability({ token_owner: yield Stdlib.Signer.address_of_(owner, $c), token_id: $.copy(token_id), amount: $.copy(amount), expiration_sec: $.copy(expiration_sec) }, new move_to_ts_2.SimpleStructTag(WithdrawCapability));
    });
}
exports.create_withdraw_capability_ = create_withdraw_capability_;
function deposit_token_(account, token, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let account_addr;
        if (!(yield get_token_amount_(token, $c)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ENO_DEPOSIT_TOKEN_WITH_ZERO_AMOUNT), $c));
        }
        account_addr = yield Stdlib.Signer.address_of_(account, $c);
        yield initialize_token_store_(account, $c);
        return yield direct_deposit_($.copy(account_addr), token, $c);
    });
}
exports.deposit_token_ = deposit_token_;
function direct_deposit_(account_addr, token, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let recipient_token, token_store;
        token_store = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(account_addr));
        yield Stdlib.Event.emit_event_((token_store).deposit_events, new DepositEvent({ id: $.copy((token).id), amount: $.copy((token).amount) }, new move_to_ts_2.SimpleStructTag(DepositEvent)), $c, [new move_to_ts_2.SimpleStructTag(DepositEvent)]);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(account_addr)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_STORE_NOT_PUBLISHED), $c));
        }
        if (!(yield Stdlib.Table.contains_((token_store).tokens, $.copy((token).id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)]))) {
            yield Stdlib.Table.add_((token_store).tokens, $.copy((token).id), token, $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)]);
        }
        else {
            recipient_token = yield Stdlib.Table.borrow_mut_((token_store).tokens, $.copy((token).id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)]);
            yield merge_(recipient_token, token, $c);
        }
        return;
    });
}
exports.direct_deposit_ = direct_deposit_;
function direct_deposit_with_opt_in_(account_addr, token, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let opt_in_transfer;
        opt_in_transfer = $.copy((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(account_addr))).direct_transfer);
        if (!opt_in_transfer) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EUSER_NOT_OPT_IN_DIRECT_TRANSFER), $c));
        }
        yield direct_deposit_($.copy(account_addr), token, $c);
        return;
    });
}
exports.direct_deposit_with_opt_in_ = direct_deposit_with_opt_in_;
function direct_transfer_(sender, receiver, token_id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token;
        token = yield withdraw_token_(sender, $.copy(token_id), $.copy(amount), $c);
        yield deposit_token_(receiver, token, $c);
        return;
    });
}
exports.direct_transfer_ = direct_transfer_;
function direct_transfer_script_(sender, receiver, creators_address, collection, name, property_version, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_id;
        token_id = yield create_token_id_raw_($.copy(creators_address), $.copy(collection), $.copy(name), $.copy(property_version), $c);
        yield direct_transfer_(sender, receiver, $.copy(token_id), $.copy(amount), $c);
        return;
    });
}
exports.direct_transfer_script_ = direct_transfer_script_;
function buildPayload_direct_transfer_script(creators_address, collection, name, property_version, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token", "direct_transfer_script", typeParamStrings, [
        creators_address,
        collection,
        name,
        property_version,
        amount,
    ], isJSON);
}
exports.buildPayload_direct_transfer_script = buildPayload_direct_transfer_script;
function get_collection_supply_(creator_address, collection_name, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, collection_data, collections;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_address)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        collections = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_address))).collection_data;
        if (!(yield Stdlib.Table.contains_(collections, $.copy(collection_name), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTION_NOT_PUBLISHED), $c));
        }
        collection_data = yield Stdlib.Table.borrow_(collections, $.copy(collection_name), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(CollectionData)]);
        if (($.copy((collection_data).maximum)).gt((0, move_to_ts_1.u64)("0"))) {
            temp$1 = yield Stdlib.Option.some_($.copy((collection_data).supply), $c, [move_to_ts_2.AtomicTypeTag.U64]);
        }
        else {
            temp$1 = yield Stdlib.Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        }
        return temp$1;
    });
}
exports.get_collection_supply_ = get_collection_supply_;
function get_property_map_(owner, token_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, all_token_data, creator_addr, token_data, tokens;
        if (!(yield balance_of_($.copy(owner), $.copy(token_id), $c)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EINSUFFICIENT_BALANCE), $c));
        }
        if (($.copy((token_id).property_version)).eq(((0, move_to_ts_1.u64)("0")))) {
            creator_addr = $.copy(((token_id).token_data_id).creator);
            all_token_data = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).token_data;
            if (!(yield Stdlib.Table.contains_(all_token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
                throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
            }
            token_data = yield Stdlib.Table.borrow_(all_token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
            temp$1 = $.copy((token_data).default_properties);
        }
        else {
            tokens = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(owner))).tokens;
            temp$1 = $.copy((yield Stdlib.Table.borrow_(tokens, $.copy(token_id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)])).token_properties);
        }
        return temp$1;
    });
}
exports.get_property_map_ = get_property_map_;
function get_royalty_(token_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let all_token_data, creator_addr, token_data, token_data_id;
        token_data_id = $.copy((token_id).token_data_id);
        creator_addr = $.copy((token_data_id).creator);
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        all_token_data = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).token_data;
        if (!(yield Stdlib.Table.contains_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        return $.copy((token_data).royalty);
    });
}
exports.get_royalty_ = get_royalty_;
function get_royalty_denominator_(royalty, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((royalty).royalty_points_denominator);
    });
}
exports.get_royalty_denominator_ = get_royalty_denominator_;
function get_royalty_numerator_(royalty, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((royalty).royalty_points_numerator);
    });
}
exports.get_royalty_numerator_ = get_royalty_numerator_;
function get_royalty_payee_(royalty, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((royalty).payee_address);
    });
}
exports.get_royalty_payee_ = get_royalty_payee_;
function get_token_amount_(token, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((token).amount);
    });
}
exports.get_token_amount_ = get_token_amount_;
function get_token_data_id_fields_(token_data_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return [$.copy((token_data_id).creator), $.copy((token_data_id).collection), $.copy((token_data_id).name)];
    });
}
exports.get_token_data_id_fields_ = get_token_data_id_fields_;
function get_token_id_(token, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((token).id);
    });
}
exports.get_token_id_ = get_token_id_;
function get_token_id_fields_(token_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return [$.copy(((token_id).token_data_id).creator), $.copy(((token_id).token_data_id).collection), $.copy(((token_id).token_data_id).name), $.copy((token_id).property_version)];
    });
}
exports.get_token_id_fields_ = get_token_id_fields_;
function get_token_supply_(creator_address, token_data_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, all_token_data, token_data;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_address)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        all_token_data = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_address))).token_data;
        if (!(yield Stdlib.Table.contains_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        if (($.copy((token_data).maximum)).gt((0, move_to_ts_1.u64)("0"))) {
            temp$1 = yield Stdlib.Option.some_($.copy((token_data).supply), $c, [move_to_ts_2.AtomicTypeTag.U64]);
        }
        else {
            temp$1 = yield Stdlib.Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64]);
        }
        return temp$1;
    });
}
exports.get_token_supply_ = get_token_supply_;
function get_tokendata_largest_property_version_(creator_address, token_data_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let all_token_data;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_address)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        all_token_data = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_address))).token_data;
        if (!(yield Stdlib.Table.contains_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        return $.copy((yield Stdlib.Table.borrow_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)])).largest_property_version);
    });
}
exports.get_tokendata_largest_property_version_ = get_tokendata_largest_property_version_;
function get_tokendata_uri_(creator, token_data_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let all_token_data, token_data;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED), $c));
        }
        all_token_data = (yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator))).token_data;
        if (!(yield Stdlib.Table.contains_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        return $.copy((token_data).uri);
    });
}
exports.get_tokendata_uri_ = get_tokendata_uri_;
function has_token_store_(owner, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(owner));
    });
}
exports.has_token_store_ = has_token_store_;
function initialize_token_(_account, _token_id, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        throw $.abortCode((0, move_to_ts_1.u64)("0"));
    });
}
exports.initialize_token_ = initialize_token_;
function initialize_token_script_(_account, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        throw $.abortCode((0, move_to_ts_1.u64)("0"));
    });
}
exports.initialize_token_script_ = initialize_token_script_;
function buildPayload_initialize_token_script(isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token", "initialize_token_script", typeParamStrings, [], isJSON);
}
exports.buildPayload_initialize_token_script = buildPayload_initialize_token_script;
function initialize_token_store_(account, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenStore), yield Stdlib.Signer.address_of_(account, $c)))) {
            yield $c.move_to_async(new move_to_ts_2.SimpleStructTag(TokenStore), account, new TokenStore({ tokens: yield Stdlib.Table.new___($c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)]), direct_transfer: false, deposit_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(DepositEvent)]), withdraw_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(WithdrawEvent)]), burn_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(BurnTokenEvent)]), mutate_token_property_events: yield Stdlib.Account.new_event_handle_(account, $c, [new move_to_ts_2.SimpleStructTag(MutateTokenPropertyMapEvent)]) }, new move_to_ts_2.SimpleStructTag(TokenStore)));
        }
        else {
        }
        return;
    });
}
exports.initialize_token_store_ = initialize_token_store_;
function merge_(dst_token, source_token, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!$.deep_eq((dst_token).id, (source_token).id)) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EINVALID_TOKEN_MERGE), $c));
        }
        (dst_token).amount = ($.copy((dst_token).amount)).add($.copy((source_token).amount));
        source_token;
        return;
    });
}
exports.merge_ = merge_;
function mint_script_(account, token_data_address, collection, name, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let token_data_id;
        token_data_id = yield create_token_data_id_($.copy(token_data_address), $.copy(collection), $.copy(name), $c);
        if (!(($.copy((token_data_id).creator)).hex() === (yield Stdlib.Signer.address_of_(account, $c)).hex())) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.ENO_MINT_CAPABILITY), $c));
        }
        yield mint_token_(account, $.copy(token_data_id), $.copy(amount), $c);
        return;
    });
}
exports.mint_script_ = mint_script_;
function buildPayload_mint_script(token_data_address, collection, name, amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token", "mint_script", typeParamStrings, [
        token_data_address,
        collection,
        name,
        amount,
    ], isJSON);
}
exports.buildPayload_mint_script = buildPayload_mint_script;
function mint_token_(account, token_data_id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, all_token_data, creator_addr, token_data, token_id;
        if (!(($.copy((token_data_id).creator)).hex() === (yield Stdlib.Signer.address_of_(account, $c)).hex())) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.ENO_MINT_CAPABILITY), $c));
        }
        creator_addr = $.copy((token_data_id).creator);
        all_token_data = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).token_data;
        [temp$1, temp$2] = [all_token_data, $.copy(token_data_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_mut_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        if (($.copy((token_data).maximum)).gt((0, move_to_ts_1.u64)("0"))) {
            if (!(($.copy((token_data).supply)).add($.copy(amount))).le($.copy((token_data).maximum))) {
                throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EMINT_WOULD_EXCEED_TOKEN_MAXIMUM), $c));
            }
            (token_data).supply = ($.copy((token_data).supply)).add($.copy(amount));
        }
        else {
        }
        token_id = yield create_token_id_($.copy(token_data_id), (0, move_to_ts_1.u64)("0"), $c);
        yield deposit_token_(account, new Token({ id: $.copy(token_id), amount: $.copy(amount), token_properties: yield Property_map.empty_($c) }, new move_to_ts_2.SimpleStructTag(Token)), $c);
        yield Stdlib.Event.emit_event_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).mint_token_events, new MintTokenEvent({ id: $.copy(token_data_id), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(MintTokenEvent)), $c, [new move_to_ts_2.SimpleStructTag(MintTokenEvent)]);
        return $.copy(token_id);
    });
}
exports.mint_token_ = mint_token_;
function mint_token_to_(account, receiver, token_data_id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, all_token_data, creator_addr, opt_in_transfer, token_data, token_id;
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(receiver)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_STORE_NOT_PUBLISHED), $c));
        }
        opt_in_transfer = $.copy((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(receiver))).direct_transfer);
        if (!opt_in_transfer) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EUSER_NOT_OPT_IN_DIRECT_TRANSFER), $c));
        }
        if (!(($.copy((token_data_id).creator)).hex() === (yield Stdlib.Signer.address_of_(account, $c)).hex())) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.ENO_MINT_CAPABILITY), $c));
        }
        creator_addr = $.copy((token_data_id).creator);
        all_token_data = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).token_data;
        [temp$1, temp$2] = [all_token_data, $.copy(token_data_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_mut_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        if (($.copy((token_data).maximum)).gt((0, move_to_ts_1.u64)("0"))) {
            if (!(($.copy((token_data).supply)).add($.copy(amount))).le($.copy((token_data).maximum))) {
                throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EMINT_WOULD_EXCEED_TOKEN_MAXIMUM), $c));
            }
            (token_data).supply = ($.copy((token_data).supply)).add($.copy(amount));
        }
        else {
        }
        token_id = yield create_token_id_($.copy(token_data_id), (0, move_to_ts_1.u64)("0"), $c);
        yield direct_deposit_($.copy(receiver), new Token({ id: $.copy(token_id), amount: $.copy(amount), token_properties: yield Property_map.empty_($c) }, new move_to_ts_2.SimpleStructTag(Token)), $c);
        yield Stdlib.Event.emit_event_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).mint_token_events, new MintTokenEvent({ id: $.copy(token_data_id), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(MintTokenEvent)), $c, [new move_to_ts_2.SimpleStructTag(MintTokenEvent)]);
        return;
    });
}
exports.mint_token_to_ = mint_token_to_;
function mutate_one_token_(account, token_owner, token_id, keys, values, types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, all_token_data, creator, cur_property_version, new_token, new_token_id, token, token_data, token_prop_mutable;
        creator = $.copy(((token_id).token_data_id).creator);
        if (!((yield Stdlib.Signer.address_of_(account, $c)).hex() === ($.copy(creator)).hex())) {
            throw $.abortCode($.copy(exports.ENO_MUTATE_CAPABILITY));
        }
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator)))) {
            throw $.abortCode($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED));
        }
        all_token_data = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator))).token_data;
        [temp$1, temp$2] = [all_token_data, $.copy((token_id).token_data_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_mut_(all_token_data, $.copy((token_id).token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        if (!$.copy(((token_data).mutability_config).properties)) {
            temp$4 = (token_data).default_properties;
            temp$3 = yield Stdlib.String.utf8_($.copy(exports.TOKEN_PROPERTY_MUTABLE), $c);
            if (!(yield Property_map.contains_key_(temp$4, temp$3, $c))) {
                throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EFIELD_NOT_MUTABLE), $c));
            }
            temp$6 = (token_data).default_properties;
            temp$5 = yield Stdlib.String.utf8_($.copy(exports.TOKEN_PROPERTY_MUTABLE), $c);
            token_prop_mutable = yield Property_map.read_bool_(temp$6, temp$5, $c);
            if (!token_prop_mutable) {
                throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EFIELD_NOT_MUTABLE), $c));
            }
        }
        else {
        }
        if (($.copy((token_id).property_version)).eq(((0, move_to_ts_1.u64)("0")))) {
            token = yield withdraw_with_event_internal_($.copy(token_owner), $.copy(token_id), (0, move_to_ts_1.u64)("1"), $c);
            cur_property_version = ($.copy((token_data).largest_property_version)).add((0, move_to_ts_1.u64)("1"));
            new_token_id = yield create_token_id_($.copy((token_id).token_data_id), $.copy(cur_property_version), $c);
            new_token = new Token({ id: $.copy(new_token_id), amount: (0, move_to_ts_1.u64)("1"), token_properties: $.copy((token_data).default_properties) }, new move_to_ts_2.SimpleStructTag(Token));
            yield direct_deposit_($.copy(token_owner), new_token, $c);
            yield update_token_property_internal_($.copy(token_owner), $.copy(new_token_id), $.copy(keys), $.copy(values), $.copy(types), $c);
            yield Stdlib.Event.emit_event_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(token_owner))).mutate_token_property_events, new MutateTokenPropertyMapEvent({ old_id: $.copy(token_id), new_id: $.copy(new_token_id), keys: $.copy(keys), values: $.copy(values), types: $.copy(types) }, new move_to_ts_2.SimpleStructTag(MutateTokenPropertyMapEvent)), $c, [new move_to_ts_2.SimpleStructTag(MutateTokenPropertyMapEvent)]);
            (token_data).largest_property_version = $.copy(cur_property_version);
            token;
            temp$7 = $.copy(new_token_id);
        }
        else {
            yield update_token_property_internal_($.copy(token_owner), $.copy(token_id), $.copy(keys), $.copy(values), $.copy(types), $c);
            yield Stdlib.Event.emit_event_((yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(token_owner))).mutate_token_property_events, new MutateTokenPropertyMapEvent({ old_id: $.copy(token_id), new_id: $.copy(token_id), keys: $.copy(keys), values: $.copy(values), types: $.copy(types) }, new move_to_ts_2.SimpleStructTag(MutateTokenPropertyMapEvent)), $c, [new move_to_ts_2.SimpleStructTag(MutateTokenPropertyMapEvent)]);
            temp$7 = $.copy(token_id);
        }
        return temp$7;
    });
}
exports.mutate_one_token_ = mutate_one_token_;
function mutate_token_properties_(account, token_owner, creator, collection_name, token_name, token_property_version, amount, keys, values, types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let i, token_id;
        if (!((yield Stdlib.Signer.address_of_(account, $c)).hex() === ($.copy(creator)).hex())) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ENO_MUTATE_CAPABILITY), $c));
        }
        i = (0, move_to_ts_1.u64)("0");
        token_id = yield create_token_id_raw_($.copy(creator), $.copy(collection_name), $.copy(token_name), $.copy(token_property_version), $c);
        while (($.copy(i)).lt($.copy(amount))) {
            {
                yield mutate_one_token_(account, $.copy(token_owner), $.copy(token_id), $.copy(keys), $.copy(values), $.copy(types), $c);
                i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
            }
        }
        return;
    });
}
exports.mutate_token_properties_ = mutate_token_properties_;
function mutate_tokendata_property_(creator, token_data_id, keys, values, types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, all_token_data, creator_addr, token_data;
        creator_addr = $.copy((token_data_id).creator);
        if (!((yield Stdlib.Signer.address_of_(creator, $c)).hex() === ($.copy(creator_addr)).hex())) {
            throw $.abortCode($.copy(exports.ENO_MUTATE_CAPABILITY));
        }
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr)))) {
            throw $.abortCode($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED));
        }
        all_token_data = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).token_data;
        [temp$1, temp$2] = [all_token_data, $.copy(token_data_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_mut_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        if (!$.copy(((token_data).mutability_config).properties)) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EFIELD_NOT_MUTABLE), $c));
        }
        yield Property_map.update_property_map_((token_data).default_properties, $.copy(keys), $.copy(values), $.copy(types), $c);
        return;
    });
}
exports.mutate_tokendata_property_ = mutate_tokendata_property_;
function mutate_tokendata_uri_(creator, token_data_id, uri, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, all_token_data, creator_addr, token_data;
        if (!(yield Stdlib.String.length_(uri, $c)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EURI_TOO_SHORT), $c));
        }
        if (!(yield Stdlib.String.length_(uri, $c)).le($.copy(exports.MAX_URI_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EURI_TOO_LONG), $c));
        }
        creator_addr = $.copy((token_data_id).creator);
        if (!((yield Stdlib.Signer.address_of_(creator, $c)).hex() === ($.copy(creator_addr)).hex())) {
            throw $.abortCode($.copy(exports.ENO_MUTATE_CAPABILITY));
        }
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr)))) {
            throw $.abortCode($.copy(exports.ECOLLECTIONS_NOT_PUBLISHED));
        }
        all_token_data = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(Collections), $.copy(creator_addr))).token_data;
        [temp$1, temp$2] = [all_token_data, $.copy(token_data_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_DATA_NOT_PUBLISHED), $c));
        }
        token_data = yield Stdlib.Table.borrow_mut_(all_token_data, $.copy(token_data_id), $c, [new move_to_ts_2.SimpleStructTag(TokenDataId), new move_to_ts_2.SimpleStructTag(TokenData)]);
        if (!$.copy(((token_data).mutability_config).uri)) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EFIELD_NOT_MUTABLE), $c));
        }
        (token_data).uri = $.copy(uri);
        return;
    });
}
exports.mutate_tokendata_uri_ = mutate_tokendata_uri_;
function opt_in_direct_transfer_(account, opt_in, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let addr, opt_in_flag;
        addr = yield Stdlib.Signer.address_of_(account, $c);
        yield initialize_token_store_(account, $c);
        opt_in_flag = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(addr))).direct_transfer;
        $.set(opt_in_flag, opt_in);
        return;
    });
}
exports.opt_in_direct_transfer_ = opt_in_direct_transfer_;
function buildPayload_opt_in_direct_transfer(opt_in, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x3"), "token", "opt_in_direct_transfer", typeParamStrings, [
        opt_in,
    ], isJSON);
}
exports.buildPayload_opt_in_direct_transfer = buildPayload_opt_in_direct_transfer;
function split_(dst_token, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!($.copy(((dst_token).id).property_version)).eq(((0, move_to_ts_1.u64)("0")))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.ENFT_NOT_SPLITABLE), $c));
        }
        if (!($.copy((dst_token).amount)).gt($.copy(amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.ETOKEN_SPLIT_AMOUNT_LARGER_THAN_TOKEN_AMOUNT), $c));
        }
        (dst_token).amount = ($.copy((dst_token).amount)).sub($.copy(amount));
        return new Token({ id: $.copy((dst_token).id), amount: $.copy(amount), token_properties: yield Property_map.empty_($c) }, new move_to_ts_2.SimpleStructTag(Token));
    });
}
exports.split_ = split_;
function token_id_(token, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (token).id;
    });
}
exports.token_id_ = token_id_;
function transfer_(from, id, to, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let opt_in_transfer, token;
        opt_in_transfer = $.copy((yield $c.borrow_global_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(to))).direct_transfer);
        if (!opt_in_transfer) {
            throw $.abortCode(yield Stdlib.Error.permission_denied_($.copy(exports.EUSER_NOT_OPT_IN_DIRECT_TRANSFER), $c));
        }
        token = yield withdraw_token_(from, $.copy(id), $.copy(amount), $c);
        yield direct_deposit_($.copy(to), token, $c);
        return;
    });
}
exports.transfer_ = transfer_;
function update_token_property_internal_(token_owner, token_id, keys, values, types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, tokens, value;
        tokens = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(token_owner))).tokens;
        [temp$1, temp$2] = [tokens, $.copy(token_id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ENO_TOKEN_IN_TOKEN_STORE), $c));
        }
        value = (yield Stdlib.Table.borrow_mut_(tokens, $.copy(token_id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)])).token_properties;
        yield Property_map.update_property_map_(value, $.copy(keys), $.copy(values), $.copy(types), $c);
        return;
    });
}
exports.update_token_property_internal_ = update_token_property_internal_;
function withdraw_token_(account, id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let account_addr;
        account_addr = yield Stdlib.Signer.address_of_(account, $c);
        return yield withdraw_with_event_internal_($.copy(account_addr), $.copy(id), $.copy(amount), $c);
    });
}
exports.withdraw_token_ = withdraw_token_;
function withdraw_with_capability_(withdraw_proof, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield Stdlib.Timestamp.now_seconds_($c)).le($.copy((withdraw_proof).expiration_sec))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EWITHDRAW_PROOF_EXPIRES), $c));
        }
        return yield withdraw_with_event_internal_($.copy((withdraw_proof).token_owner), $.copy((withdraw_proof).token_id), $.copy((withdraw_proof).amount), $c);
    });
}
exports.withdraw_with_capability_ = withdraw_with_capability_;
function withdraw_with_event_internal_(account_addr, id, amount, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, balance, token_store, tokens;
        if (!($.copy(amount)).gt((0, move_to_ts_1.u64)("0"))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EWITHDRAW_ZERO), $c));
        }
        if (!(yield balance_of_($.copy(account_addr), $.copy(id), $c)).ge($.copy(amount))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EINSUFFICIENT_BALANCE), $c));
        }
        if (!(yield $c.exists_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(account_addr)))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ETOKEN_STORE_NOT_PUBLISHED), $c));
        }
        token_store = yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(account_addr));
        yield Stdlib.Event.emit_event_((token_store).withdraw_events, new WithdrawEvent({ id: $.copy(id), amount: $.copy(amount) }, new move_to_ts_2.SimpleStructTag(WithdrawEvent)), $c, [new move_to_ts_2.SimpleStructTag(WithdrawEvent)]);
        tokens = (yield $c.borrow_global_mut_async(new move_to_ts_2.SimpleStructTag(TokenStore), $.copy(account_addr))).tokens;
        [temp$1, temp$2] = [tokens, $.copy(id)];
        if (!(yield Stdlib.Table.contains_(temp$1, temp$2, $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)]))) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.ENO_TOKEN_IN_TOKEN_STORE), $c));
        }
        balance = (yield Stdlib.Table.borrow_mut_(tokens, $.copy(id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)])).amount;
        if (($.copy(balance)).gt($.copy(amount))) {
            $.set(balance, ($.copy(balance)).sub($.copy(amount)));
            temp$3 = new Token({ id: $.copy(id), amount: $.copy(amount), token_properties: yield Property_map.empty_($c) }, new move_to_ts_2.SimpleStructTag(Token));
        }
        else {
            temp$3 = yield Stdlib.Table.remove_(tokens, $.copy(id), $c, [new move_to_ts_2.SimpleStructTag(TokenId), new move_to_ts_2.SimpleStructTag(Token)]);
        }
        return temp$3;
    });
}
exports.withdraw_with_event_internal_ = withdraw_with_event_internal_;
function loadParsers(repo) {
    repo.addParser("0x3::token::BurnTokenEvent", BurnTokenEvent.BurnTokenEventParser);
    repo.addParser("0x3::token::CollectionData", CollectionData.CollectionDataParser);
    repo.addParser("0x3::token::CollectionMutabilityConfig", CollectionMutabilityConfig.CollectionMutabilityConfigParser);
    repo.addParser("0x3::token::Collections", Collections.CollectionsParser);
    repo.addParser("0x3::token::CreateCollectionEvent", CreateCollectionEvent.CreateCollectionEventParser);
    repo.addParser("0x3::token::CreateTokenDataEvent", CreateTokenDataEvent.CreateTokenDataEventParser);
    repo.addParser("0x3::token::DepositEvent", DepositEvent.DepositEventParser);
    repo.addParser("0x3::token::MintTokenEvent", MintTokenEvent.MintTokenEventParser);
    repo.addParser("0x3::token::MutateTokenPropertyMapEvent", MutateTokenPropertyMapEvent.MutateTokenPropertyMapEventParser);
    repo.addParser("0x3::token::Royalty", Royalty.RoyaltyParser);
    repo.addParser("0x3::token::Token", Token.TokenParser);
    repo.addParser("0x3::token::TokenData", TokenData.TokenDataParser);
    repo.addParser("0x3::token::TokenDataId", TokenDataId.TokenDataIdParser);
    repo.addParser("0x3::token::TokenId", TokenId.TokenIdParser);
    repo.addParser("0x3::token::TokenMutabilityConfig", TokenMutabilityConfig.TokenMutabilityConfigParser);
    repo.addParser("0x3::token::TokenStore", TokenStore.TokenStoreParser);
    repo.addParser("0x3::token::WithdrawCapability", WithdrawCapability.WithdrawCapabilityParser);
    repo.addParser("0x3::token::WithdrawEvent", WithdrawEvent.WithdrawEventParser);
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
    get BurnTokenEvent() { return BurnTokenEvent; }
    get CollectionData() { return CollectionData; }
    get CollectionMutabilityConfig() { return CollectionMutabilityConfig; }
    get Collections() { return Collections; }
    loadCollections(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Collections.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get CreateCollectionEvent() { return CreateCollectionEvent; }
    get CreateTokenDataEvent() { return CreateTokenDataEvent; }
    get DepositEvent() { return DepositEvent; }
    get MintTokenEvent() { return MintTokenEvent; }
    get MutateTokenPropertyMapEvent() { return MutateTokenPropertyMapEvent; }
    get Royalty() { return Royalty; }
    get Token() { return Token; }
    get TokenData() { return TokenData; }
    get TokenDataId() { return TokenDataId; }
    get TokenId() { return TokenId; }
    get TokenMutabilityConfig() { return TokenMutabilityConfig; }
    get TokenStore() { return TokenStore; }
    loadTokenStore(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield TokenStore.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get WithdrawCapability() { return WithdrawCapability; }
    get WithdrawEvent() { return WithdrawEvent; }
    payload_burn(creators_address, collection, name, property_version, amount, isJSON = false) {
        return buildPayload_burn(creators_address, collection, name, property_version, amount, isJSON);
    }
    burn(_account, creators_address, collection, name, property_version, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_burn(creators_address, collection, name, property_version, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_burn_by_creator(owner, collection, name, property_version, amount, isJSON = false) {
        return buildPayload_burn_by_creator(owner, collection, name, property_version, amount, isJSON);
    }
    burn_by_creator(_account, owner, collection, name, property_version, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_burn_by_creator(owner, collection, name, property_version, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_create_collection_script(name, description, uri, maximum, mutate_setting, isJSON = false) {
        return buildPayload_create_collection_script(name, description, uri, maximum, mutate_setting, isJSON);
    }
    create_collection_script(_account, name, description, uri, maximum, mutate_setting, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_collection_script(name, description, uri, maximum, mutate_setting, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_direct_transfer_script(creators_address, collection, name, property_version, amount, isJSON = false) {
        return buildPayload_direct_transfer_script(creators_address, collection, name, property_version, amount, isJSON);
    }
    direct_transfer_script(_account, creators_address, collection, name, property_version, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_direct_transfer_script(creators_address, collection, name, property_version, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initialize_token_script(isJSON = false) {
        return buildPayload_initialize_token_script(isJSON);
    }
    initialize_token_script(_account, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initialize_token_script(_isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_mint_script(token_data_address, collection, name, amount, isJSON = false) {
        return buildPayload_mint_script(token_data_address, collection, name, amount, isJSON);
    }
    mint_script(_account, token_data_address, collection, name, amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_mint_script(token_data_address, collection, name, amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_opt_in_direct_transfer(opt_in, isJSON = false) {
        return buildPayload_opt_in_direct_transfer(opt_in, isJSON);
    }
    opt_in_direct_transfer(_account, opt_in, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_opt_in_direct_transfer(opt_in, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=token.js.map