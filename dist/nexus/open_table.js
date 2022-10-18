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
exports.App = exports.loadParsers = exports.empty_ = exports.contains_ = exports.borrow_mut_ = exports.borrow_ = exports.add_ = exports.OpenTable = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "nexus";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "open_table";
class OpenTable {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.base_table = proto['base_table'];
        this.keys = proto['keys'];
    }
    static OpenTableParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OpenTable);
        return new OpenTable(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "OpenTable", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.base_table.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.OpenTable = OpenTable;
OpenTable.moduleAddress = exports.moduleAddress;
OpenTable.moduleName = exports.moduleName;
OpenTable.structName = "OpenTable";
OpenTable.typeParameters = [
    { name: "K", isPhantom: false },
    { name: "V", isPhantom: true }
];
OpenTable.fields = [
    { name: "base_table", typeTag: new move_to_ts_1.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [new $.TypeParamIdx(0), new $.TypeParamIdx(1)]) },
    { name: "keys", typeTag: new move_to_ts_1.VectorTag(new $.TypeParamIdx(0)) }
];
function add_(open_table, key, value, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Stdlib.Table.add_((open_table).base_table, $.copy(key), value, $c, [$p[0], $p[1]]);
        yield Stdlib.Vector.push_back_((open_table).keys, $.copy(key), $c, [$p[0]]);
        return;
    });
}
exports.add_ = add_;
function borrow_(open_table, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Table.borrow_((open_table).base_table, $.copy(key), $c, [$p[0], $p[1]]);
    });
}
exports.borrow_ = borrow_;
function borrow_mut_(open_table, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Table.borrow_mut_((open_table).base_table, $.copy(key), $c, [$p[0], $p[1]]);
    });
}
exports.borrow_mut_ = borrow_mut_;
function contains_(open_table, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Table.contains_((open_table).base_table, $.copy(key), $c, [$p[0], $p[1]]);
    });
}
exports.contains_ = contains_;
function empty_($c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return new OpenTable({ base_table: yield Stdlib.Table.new___($c, [$p[0], $p[1]]), keys: yield Stdlib.Vector.empty_($c, [$p[0]]) }, new move_to_ts_1.SimpleStructTag(OpenTable, [$p[0], $p[1]]));
    });
}
exports.empty_ = empty_;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::open_table::OpenTable", OpenTable.OpenTableParser);
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
    get OpenTable() { return OpenTable; }
}
exports.App = App;
//# sourceMappingURL=open_table.js.map