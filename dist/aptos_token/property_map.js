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
exports.App = exports.loadParsers = exports.update_property_value_ = exports.update_property_map_ = exports.remove_ = exports.read_u8_ = exports.read_u64_ = exports.read_u128_ = exports.read_string_ = exports.read_bool_ = exports.read_address_ = exports.new___ = exports.length_ = exports.empty_ = exports.create_property_value_raw_ = exports.create_property_value_ = exports.contains_key_ = exports.borrow_value_ = exports.borrow_type_ = exports.borrow_ = exports.add_ = exports.PropertyValue = exports.PropertyMap = exports.MAX_PROPERTY_NAME_LENGTH = exports.MAX_PROPERTY_MAP_SIZE = exports.ETYPE_NOT_MATCH = exports.EPROPERTY_NUMBER_EXCEED_LIMIT = exports.EPROPERTY_NOT_EXIST = exports.EPROPERTY_MAP_NAME_TOO_LONG = exports.EKEY_COUNT_NOT_MATCH_VALUE_COUNT = exports.EKEY_COUNT_NOT_MATCH_TYPE_COUNT = exports.EKEY_AREADY_EXIST_IN_PROPERTY_MAP = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "AptosToken";
exports.moduleAddress = new aptos_1.HexString("0x3");
exports.moduleName = "property_map";
exports.EKEY_AREADY_EXIST_IN_PROPERTY_MAP = (0, move_to_ts_1.u64)("1");
exports.EKEY_COUNT_NOT_MATCH_TYPE_COUNT = (0, move_to_ts_1.u64)("5");
exports.EKEY_COUNT_NOT_MATCH_VALUE_COUNT = (0, move_to_ts_1.u64)("4");
exports.EPROPERTY_MAP_NAME_TOO_LONG = (0, move_to_ts_1.u64)("7");
exports.EPROPERTY_NOT_EXIST = (0, move_to_ts_1.u64)("3");
exports.EPROPERTY_NUMBER_EXCEED_LIMIT = (0, move_to_ts_1.u64)("2");
exports.ETYPE_NOT_MATCH = (0, move_to_ts_1.u64)("6");
exports.MAX_PROPERTY_MAP_SIZE = (0, move_to_ts_1.u64)("1000");
exports.MAX_PROPERTY_NAME_LENGTH = (0, move_to_ts_1.u64)("128");
class PropertyMap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.map = proto['map'];
    }
    static PropertyMapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PropertyMap);
        return new PropertyMap(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PropertyMap", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.map.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.PropertyMap = PropertyMap;
PropertyMap.moduleAddress = exports.moduleAddress;
PropertyMap.moduleName = exports.moduleName;
PropertyMap.structName = "PropertyMap";
PropertyMap.typeParameters = [];
PropertyMap.fields = [
    { name: "map", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.StructTag(new aptos_1.HexString("0x3"), "property_map", "PropertyValue", [])]) }
];
class PropertyValue {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.value = proto['value'];
        this.type = proto['type'];
    }
    static PropertyValueParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PropertyValue);
        return new PropertyValue(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PropertyValue", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.PropertyValue = PropertyValue;
PropertyValue.moduleAddress = exports.moduleAddress;
PropertyValue.moduleName = exports.moduleName;
PropertyValue.structName = "PropertyValue";
PropertyValue.typeParameters = [];
PropertyValue.fields = [
    { name: "value", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "type", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) }
];
function add_(map, key, value, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield Stdlib.String.length_(key, $c)).le($.copy(exports.MAX_PROPERTY_NAME_LENGTH))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EPROPERTY_MAP_NAME_TOO_LONG), $c));
        }
        if (!!(yield Stdlib.Simple_map.contains_key_((map).map, key, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]))) {
            throw $.abortCode(yield Stdlib.Error.already_exists_($.copy(exports.EKEY_AREADY_EXIST_IN_PROPERTY_MAP), $c));
        }
        if (!(yield Stdlib.Simple_map.length_((map).map, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)])).lt($.copy(exports.MAX_PROPERTY_MAP_SIZE))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.EPROPERTY_NUMBER_EXCEED_LIMIT), $c));
        }
        yield Stdlib.Simple_map.add_((map).map, $.copy(key), $.copy(value), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]);
        return;
    });
}
exports.add_ = add_;
function borrow_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let found;
        found = yield contains_key_(map, key, $c);
        if (!found) {
            throw $.abortCode($.copy(exports.EPROPERTY_NOT_EXIST));
        }
        return yield Stdlib.Simple_map.borrow_((map).map, key, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]);
    });
}
exports.borrow_ = borrow_;
function borrow_type_(property, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((property).type);
    });
}
exports.borrow_type_ = borrow_type_;
function borrow_value_(property, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return $.copy((property).value);
    });
}
exports.borrow_value_ = borrow_value_;
function contains_key_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Simple_map.contains_key_((map).map, key, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]);
    });
}
exports.contains_key_ = contains_key_;
function create_property_value_(data, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, name;
        name = yield Stdlib.Type_info.type_name_($c, [$p[0]]);
        if ($.deep_eq($.copy(name), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("98"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("108")], $c))) {
            temp$1 = true;
        }
        else {
            temp$1 = $.deep_eq($.copy(name), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("56")], $c));
        }
        if (temp$1) {
            temp$2 = true;
        }
        else {
            temp$2 = $.deep_eq($.copy(name), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("54"), (0, move_to_ts_1.u8)("52")], $c));
        }
        if (temp$2) {
            temp$3 = true;
        }
        else {
            temp$3 = $.deep_eq($.copy(name), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("50"), (0, move_to_ts_1.u8)("56")], $c));
        }
        if (temp$3) {
            temp$4 = true;
        }
        else {
            temp$4 = $.deep_eq($.copy(name), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("115")], $c));
        }
        if (temp$4) {
            temp$5 = true;
        }
        else {
            temp$5 = $.deep_eq($.copy(name), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("48"), (0, move_to_ts_1.u8)("120"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("103")], $c));
        }
        if (temp$5) {
            temp$6 = yield create_property_value_raw_(yield Stdlib.Bcs.to_bytes_(data, $c, [$p[0]]), $.copy(name), $c);
        }
        else {
            temp$6 = yield create_property_value_raw_(yield Stdlib.Bcs.to_bytes_(data, $c, [$p[0]]), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("118"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("60"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("56"), (0, move_to_ts_1.u8)("62")], $c), $c);
        }
        return temp$6;
    });
}
exports.create_property_value_ = create_property_value_;
function create_property_value_raw_(value, type, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new PropertyValue({ value: $.copy(value), type: $.copy(type) }, new move_to_ts_2.SimpleStructTag(PropertyValue));
    });
}
exports.create_property_value_raw_ = create_property_value_raw_;
function empty_($c) {
    return __awaiter(this, void 0, void 0, function* () {
        return new PropertyMap({ map: yield Stdlib.Simple_map.create_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]) }, new move_to_ts_2.SimpleStructTag(PropertyMap));
    });
}
exports.empty_ = empty_;
function length_(map, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Simple_map.length_((map).map, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]);
    });
}
exports.length_ = length_;
function new___(keys, values, types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let i, key, properties;
        if (!(yield Stdlib.Vector.length_(keys, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])).le($.copy(exports.MAX_PROPERTY_MAP_SIZE))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EPROPERTY_NUMBER_EXCEED_LIMIT), $c));
        }
        if (!(yield Stdlib.Vector.length_(keys, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])).eq((yield Stdlib.Vector.length_(values, $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EKEY_COUNT_NOT_MATCH_VALUE_COUNT), $c));
        }
        if (!(yield Stdlib.Vector.length_(keys, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])).eq((yield Stdlib.Vector.length_(types, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])))) {
            throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EKEY_COUNT_NOT_MATCH_TYPE_COUNT), $c));
        }
        properties = new PropertyMap({ map: yield Stdlib.Simple_map.create_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]) }, new move_to_ts_2.SimpleStructTag(PropertyMap));
        i = (0, move_to_ts_1.u64)("0");
        while (($.copy(i)).lt(yield Stdlib.Vector.length_(keys, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]))) {
            {
                key = $.copy(yield Stdlib.Vector.borrow_(keys, $.copy(i), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]));
                if (!(yield Stdlib.String.length_(key, $c)).le($.copy(exports.MAX_PROPERTY_NAME_LENGTH))) {
                    throw $.abortCode(yield Stdlib.Error.invalid_argument_($.copy(exports.EPROPERTY_MAP_NAME_TOO_LONG), $c));
                }
                yield Stdlib.Simple_map.add_((properties).map, $.copy(key), new PropertyValue({ value: $.copy(yield Stdlib.Vector.borrow_(values, $.copy(i), $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])), type: $.copy(yield Stdlib.Vector.borrow_(types, $.copy(i), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])) }, new move_to_ts_2.SimpleStructTag(PropertyValue)), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]);
                i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
            }
        }
        return $.copy(properties);
    });
}
exports.new___ = new___;
function read_address_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let prop;
        prop = yield borrow_(map, key, $c);
        if (!$.deep_eq($.copy((prop).type), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("115")], $c))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.ETYPE_NOT_MATCH), $c));
        }
        return yield Stdlib.From_bcs.to_address_($.copy((prop).value), $c);
    });
}
exports.read_address_ = read_address_;
function read_bool_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let prop;
        prop = yield borrow_(map, key, $c);
        if (!$.deep_eq($.copy((prop).type), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("98"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("108")], $c))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.ETYPE_NOT_MATCH), $c));
        }
        return yield Stdlib.From_bcs.to_bool_($.copy((prop).value), $c);
    });
}
exports.read_bool_ = read_bool_;
function read_string_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let prop;
        prop = yield borrow_(map, key, $c);
        if (!$.deep_eq($.copy((prop).type), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("48"), (0, move_to_ts_1.u8)("120"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("103")], $c))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.ETYPE_NOT_MATCH), $c));
        }
        return yield Stdlib.From_bcs.to_string_($.copy((prop).value), $c);
    });
}
exports.read_string_ = read_string_;
function read_u128_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let prop;
        prop = yield borrow_(map, key, $c);
        if (!$.deep_eq($.copy((prop).type), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("50"), (0, move_to_ts_1.u8)("56")], $c))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.ETYPE_NOT_MATCH), $c));
        }
        return yield Stdlib.From_bcs.to_u128_($.copy((prop).value), $c);
    });
}
exports.read_u128_ = read_u128_;
function read_u64_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let prop;
        prop = yield borrow_(map, key, $c);
        if (!$.deep_eq($.copy((prop).type), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("54"), (0, move_to_ts_1.u8)("52")], $c))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.ETYPE_NOT_MATCH), $c));
        }
        return yield Stdlib.From_bcs.to_u64_($.copy((prop).value), $c);
    });
}
exports.read_u64_ = read_u64_;
function read_u8_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let prop;
        prop = yield borrow_(map, key, $c);
        if (!$.deep_eq($.copy((prop).type), yield Stdlib.String.utf8_([(0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("56")], $c))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.ETYPE_NOT_MATCH), $c));
        }
        return yield Stdlib.From_bcs.to_u8_($.copy((prop).value), $c);
    });
}
exports.read_u8_ = read_u8_;
function remove_(map, key, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, found;
        [temp$1, temp$2] = [map, key];
        found = yield contains_key_(temp$1, temp$2, $c);
        if (!found) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EPROPERTY_NOT_EXIST), $c));
        }
        return yield Stdlib.Simple_map.remove_((map).map, key, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]);
    });
}
exports.remove_ = remove_;
function update_property_map_(map, keys, values, types, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, i, key_len, prop_val, typ_len, val_len;
        key_len = yield Stdlib.Vector.length_(keys, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]);
        val_len = yield Stdlib.Vector.length_(values, $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]);
        typ_len = yield Stdlib.Vector.length_(types, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]);
        if (!($.copy(key_len)).eq(($.copy(val_len)))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.EKEY_COUNT_NOT_MATCH_VALUE_COUNT), $c));
        }
        if (!($.copy(val_len)).eq(($.copy(typ_len)))) {
            throw $.abortCode(yield Stdlib.Error.invalid_state_($.copy(exports.EKEY_COUNT_NOT_MATCH_TYPE_COUNT), $c));
        }
        i = (0, move_to_ts_1.u64)("0");
        while (($.copy(i)).lt(yield Stdlib.Vector.length_(keys, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]))) {
            {
                prop_val = new PropertyValue({ value: $.copy(yield Stdlib.Vector.borrow_(values, $.copy(i), $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])), type: $.copy(yield Stdlib.Vector.borrow_(types, $.copy(i), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])) }, new move_to_ts_2.SimpleStructTag(PropertyValue));
                [temp$1, temp$2] = [map, yield Stdlib.Vector.borrow_(keys, $.copy(i), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])];
                if (yield contains_key_(temp$1, temp$2, $c)) {
                    yield update_property_value_(map, yield Stdlib.Vector.borrow_(keys, $.copy(i), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]), $.copy(prop_val), $c);
                }
                else {
                    yield add_(map, $.copy(yield Stdlib.Vector.borrow_(keys, $.copy(i), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])), $.copy(prop_val), $c);
                }
                i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
            }
        }
        return;
    });
}
exports.update_property_map_ = update_property_map_;
function update_property_value_(map, key, value, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, found, property_val;
        [temp$1, temp$2] = [map, key];
        found = yield contains_key_(temp$1, temp$2, $c);
        if (!found) {
            throw $.abortCode(yield Stdlib.Error.not_found_($.copy(exports.EPROPERTY_NOT_EXIST), $c));
        }
        property_val = yield Stdlib.Simple_map.borrow_mut_((map).map, key, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []), new move_to_ts_2.SimpleStructTag(PropertyValue)]);
        $.set(property_val, $.copy(value));
        return;
    });
}
exports.update_property_value_ = update_property_value_;
function loadParsers(repo) {
    repo.addParser("0x3::property_map::PropertyMap", PropertyMap.PropertyMapParser);
    repo.addParser("0x3::property_map::PropertyValue", PropertyValue.PropertyValueParser);
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
    get PropertyMap() { return PropertyMap; }
    get PropertyValue() { return PropertyValue; }
}
exports.App = App;
//# sourceMappingURL=property_map.js.map