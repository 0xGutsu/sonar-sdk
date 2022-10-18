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
exports.outer_node_vector_index_ = exports.outer_node_child_index_ = exports.min_node_child_index_ = exports.min_key_ = exports.max_node_child_index_ = exports.max_key_ = exports.length_ = exports.is_set_ = exports.is_outer_node_ = exports.is_empty_ = exports.insert_singleton_ = exports.insert_general_ = exports.insert_empty_ = exports.insert_below_walk_ = exports.insert_below_ = exports.insert_above_root_ = exports.insert_above_ = exports.insert_ = exports.has_key_ = exports.empty_ = exports.destroy_empty_ = exports.crit_bit_ = exports.check_length_ = exports.borrow_mut_ = exports.borrow_closest_outer_node_mut_ = exports.borrow_closest_outer_node_ = exports.borrow_ = exports.OuterNode = exports.InnerNode = exports.CritBitTree = exports.ROOT = exports.RIGHT = exports.OUTER = exports.NODE_TYPE = exports.MSB_u128 = exports.LEFT = exports.INNER = exports.HI_64 = exports.HI_128 = exports.E_POP_EMPTY = exports.E_NOT_HAS_KEY = exports.E_LOOKUP_EMPTY = exports.E_INSERT_FULL = exports.E_HAS_KEY = exports.E_DESTROY_NOT_EMPTY = exports.E_BORROW_EMPTY = exports.E_BIT_NOT_0_OR_1 = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.App = exports.loadParsers = exports.traverse_target_child_index_ = exports.traverse_successor_pop_mut_ = exports.traverse_successor_mut_ = exports.traverse_successor_init_mut_ = exports.traverse_predecessor_pop_mut_ = exports.traverse_predecessor_mut_ = exports.traverse_predecessor_init_mut_ = exports.traverse_pop_mut_ = exports.traverse_mut_ = exports.traverse_init_mut_ = exports.traverse_end_pop_ = exports.stitch_swap_remove_ = exports.stitch_parent_of_child_ = exports.stitch_child_of_parent_ = exports.singleton_ = exports.search_outer_ = exports.push_back_insert_nodes_ = exports.pop_update_relationships_ = exports.pop_singleton_ = exports.pop_general_ = exports.pop_destroy_nodes_ = exports.pop_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "nexus";
exports.moduleAddress = new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629");
exports.moduleName = "critbit";
exports.E_BIT_NOT_0_OR_1 = (0, move_to_ts_1.u64)("0");
exports.E_BORROW_EMPTY = (0, move_to_ts_1.u64)("3");
exports.E_DESTROY_NOT_EMPTY = (0, move_to_ts_1.u64)("1");
exports.E_HAS_KEY = (0, move_to_ts_1.u64)("2");
exports.E_INSERT_FULL = (0, move_to_ts_1.u64)("5");
exports.E_LOOKUP_EMPTY = (0, move_to_ts_1.u64)("7");
exports.E_NOT_HAS_KEY = (0, move_to_ts_1.u64)("4");
exports.E_POP_EMPTY = (0, move_to_ts_1.u64)("6");
exports.HI_128 = (0, move_to_ts_1.u128)("340282366920938463463374607431768211455");
exports.HI_64 = (0, move_to_ts_1.u64)("18446744073709551615");
exports.INNER = (0, move_to_ts_1.u64)("0");
exports.LEFT = true;
exports.MSB_u128 = (0, move_to_ts_1.u8)("127");
exports.NODE_TYPE = (0, move_to_ts_1.u8)("63");
exports.OUTER = (0, move_to_ts_1.u64)("1");
exports.RIGHT = false;
exports.ROOT = (0, move_to_ts_1.u64)("18446744073709551615");
class CritBitTree {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.root = proto['root'];
        this.inner_nodes = proto['inner_nodes'];
        this.outer_nodes = proto['outer_nodes'];
    }
    static CritBitTreeParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CritBitTree);
        return new CritBitTree(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CritBitTree", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CritBitTree = CritBitTree;
CritBitTree.moduleAddress = exports.moduleAddress;
CritBitTree.moduleName = exports.moduleName;
CritBitTree.structName = "CritBitTree";
CritBitTree.typeParameters = [
    { name: "V", isPhantom: false }
];
CritBitTree.fields = [
    { name: "root", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "inner_nodes", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "critbit", "InnerNode", [])) },
    { name: "outer_nodes", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629"), "critbit", "OuterNode", [new $.TypeParamIdx(0)])) }
];
class InnerNode {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.critical_bit = proto['critical_bit'];
        this.parent_index = proto['parent_index'];
        this.left_child_index = proto['left_child_index'];
        this.right_child_index = proto['right_child_index'];
    }
    static InnerNodeParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, InnerNode);
        return new InnerNode(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "InnerNode", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.InnerNode = InnerNode;
InnerNode.moduleAddress = exports.moduleAddress;
InnerNode.moduleName = exports.moduleName;
InnerNode.structName = "InnerNode";
InnerNode.typeParameters = [];
InnerNode.fields = [
    { name: "critical_bit", typeTag: move_to_ts_2.AtomicTypeTag.U8 },
    { name: "parent_index", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "left_child_index", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "right_child_index", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class OuterNode {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.key = proto['key'];
        this.value = proto['value'];
        this.parent_index = proto['parent_index'];
    }
    static OuterNodeParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OuterNode);
        return new OuterNode(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OuterNode", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.value.typeTag instanceof move_to_ts_2.StructTag) {
                yield this.value.loadFullState(app);
            }
            this.__app = app;
        });
    }
}
exports.OuterNode = OuterNode;
OuterNode.moduleAddress = exports.moduleAddress;
OuterNode.moduleName = exports.moduleName;
OuterNode.structName = "OuterNode";
OuterNode.typeParameters = [
    { name: "V", isPhantom: false }
];
OuterNode.fields = [
    { name: "key", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "value", typeTag: new $.TypeParamIdx(0) },
    { name: "parent_index", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function borrow_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let closest_outer_node_ref;
        if (!!(yield is_empty_(tree, $c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_BORROW_EMPTY));
        }
        closest_outer_node_ref = yield borrow_closest_outer_node_(tree, $.copy(key), $c, [$p[0]]);
        if (!($.copy((closest_outer_node_ref).key)).eq(($.copy(key)))) {
            throw $.abortCode($.copy(exports.E_NOT_HAS_KEY));
        }
        return (closest_outer_node_ref).value;
    });
}
exports.borrow_ = borrow_;
function borrow_closest_outer_node_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, child_index, node;
        if (yield is_outer_node_($.copy((tree).root), $c)) {
            return yield Stdlib.Vector.borrow_((tree).outer_nodes, yield outer_node_vector_index_($.copy((tree).root), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        }
        else {
        }
        node = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy((tree).root), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        while (true) {
            if (yield is_set_($.copy(key), $.copy((node).critical_bit), $c)) {
                temp$1 = $.copy((node).right_child_index);
            }
            else {
                temp$1 = $.copy((node).left_child_index);
            }
            child_index = temp$1;
            if (yield is_outer_node_($.copy(child_index), $c)) {
                return yield Stdlib.Vector.borrow_((tree).outer_nodes, yield outer_node_vector_index_($.copy(child_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
            }
            else {
            }
            node = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(child_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        }
    });
}
exports.borrow_closest_outer_node_ = borrow_closest_outer_node_;
function borrow_closest_outer_node_mut_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, child_index, node;
        if (yield is_outer_node_($.copy((tree).root), $c)) {
            return yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy((tree).root), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        }
        else {
        }
        node = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy((tree).root), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        while (true) {
            if (yield is_set_($.copy(key), $.copy((node).critical_bit), $c)) {
                temp$1 = $.copy((node).right_child_index);
            }
            else {
                temp$1 = $.copy((node).left_child_index);
            }
            child_index = temp$1;
            if (yield is_outer_node_($.copy(child_index), $c)) {
                return yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy(child_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
            }
            else {
            }
            node = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(child_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        }
    });
}
exports.borrow_closest_outer_node_mut_ = borrow_closest_outer_node_mut_;
function borrow_mut_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let closest_outer_node_ref_mut;
        if (!!(yield is_empty_(tree, $c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_BORROW_EMPTY));
        }
        closest_outer_node_ref_mut = yield borrow_closest_outer_node_mut_(tree, $.copy(key), $c, [$p[0]]);
        if (!($.copy((closest_outer_node_ref_mut).key)).eq(($.copy(key)))) {
            throw $.abortCode($.copy(exports.E_NOT_HAS_KEY));
        }
        return (closest_outer_node_ref_mut).value;
    });
}
exports.borrow_mut_ = borrow_mut_;
function check_length_(length, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!($.copy(length)).lt(($.copy(exports.HI_64)).xor(($.copy(exports.OUTER)).shl($.copy(exports.NODE_TYPE))))) {
            throw $.abortCode($.copy(exports.E_INSERT_FULL));
        }
        return;
    });
}
exports.check_length_ = check_length_;
function crit_bit_(s1, s2, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        let l, m, s, u, x;
        x = ($.copy(s1)).xor($.copy(s2));
        l = (0, move_to_ts_1.u8)("0");
        u = $.copy(exports.MSB_u128);
        while (true) {
            m = (($.copy(l)).add($.copy(u))).div((0, move_to_ts_1.u8)("2"));
            s = ($.copy(x)).shr($.copy(m));
            if (($.copy(s)).eq(((0, move_to_ts_1.u128)("1")))) {
                return $.copy(m);
            }
            else {
            }
            if (($.copy(s)).gt((0, move_to_ts_1.u128)("1"))) {
                l = ($.copy(m)).add((0, move_to_ts_1.u8)("1"));
            }
            else {
                u = ($.copy(m)).sub((0, move_to_ts_1.u8)("1"));
            }
        }
    });
}
exports.crit_bit_ = crit_bit_;
function destroy_empty_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield is_empty_(tree, $c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_DESTROY_NOT_EMPTY));
        }
        let { inner_nodes: inner_nodes, outer_nodes: outer_nodes } = tree;
        yield Stdlib.Vector.destroy_empty_(inner_nodes, $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        yield Stdlib.Vector.destroy_empty_(outer_nodes, $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        return;
    });
}
exports.destroy_empty_ = destroy_empty_;
function empty_($c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return new CritBitTree({ root: (0, move_to_ts_1.u64)("0"), inner_nodes: yield Stdlib.Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(InnerNode)]), outer_nodes: yield Stdlib.Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]) }, new move_to_ts_2.SimpleStructTag(CritBitTree, [$p[0]]));
    });
}
exports.empty_ = empty_;
function has_key_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield is_empty_(tree, $c, [$p[0]])) {
            return false;
        }
        else {
        }
        return ($.copy((yield borrow_closest_outer_node_(tree, $.copy(key), $c, [$p[0]])).key)).eq(($.copy(key)));
    });
}
exports.has_key_ = has_key_;
function insert_(tree, key, value, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let length;
        length = yield length_(tree, $c, [$p[0]]);
        yield check_length_($.copy(length), $c);
        if (($.copy(length)).eq(((0, move_to_ts_1.u64)("0")))) {
            yield insert_empty_(tree, $.copy(key), value, $c, [$p[0]]);
        }
        else {
            if (($.copy(length)).eq(((0, move_to_ts_1.u64)("1")))) {
                yield insert_singleton_(tree, $.copy(key), value, $c, [$p[0]]);
            }
            else {
                yield insert_general_(tree, $.copy(key), value, $.copy(length), $c, [$p[0]]);
            }
        }
        return;
    });
}
exports.insert_ = insert_;
function insert_above_(tree, key, value, n_outer_nodes, n_inner_nodes, search_parent_index, critical_bit, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let node, node_index;
        node_index = $.copy((yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(search_parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).parent_index);
        while (true) {
            if (($.copy(node_index)).eq(($.copy(exports.ROOT)))) {
                return yield insert_above_root_(tree, $.copy(key), value, $.copy(n_outer_nodes), $.copy(n_inner_nodes), $.copy(critical_bit), $c, [$p[0]]);
            }
            else {
                node = yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(node_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
                if (($.copy(critical_bit)).lt($.copy((node).critical_bit))) {
                    return yield insert_below_walk_(tree, $.copy(key), value, $.copy(n_outer_nodes), $.copy(n_inner_nodes), $.copy(node_index), $.copy(critical_bit), $c, [$p[0]]);
                }
                else {
                    node_index = $.copy((node).parent_index);
                }
            }
        }
    });
}
exports.insert_above_ = insert_above_;
function insert_above_root_(tree, key, value, n_outer_nodes, n_inner_nodes, critical_bit, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let old_root_index;
        old_root_index = $.copy((tree).root);
        (yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(old_root_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).parent_index = $.copy(n_inner_nodes);
        (tree).root = $.copy(n_inner_nodes);
        yield push_back_insert_nodes_(tree, $.copy(key), value, $.copy(n_inner_nodes), $.copy(critical_bit), $.copy(exports.ROOT), yield is_set_($.copy(key), $.copy(critical_bit), $c), $.copy(old_root_index), yield outer_node_child_index_($.copy(n_outer_nodes), $c), $c, [$p[0]]);
        return;
    });
}
exports.insert_above_root_ = insert_above_root_;
function insert_below_(tree, key, value, n_outer_nodes, n_inner_nodes, search_index, search_child_side, search_key, search_parent_index, critical_bit, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let search_parent;
        search_parent = yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(search_parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        if ((search_child_side == $.copy(exports.LEFT))) {
            (search_parent).left_child_index = $.copy(n_inner_nodes);
        }
        else {
            (search_parent).right_child_index = $.copy(n_inner_nodes);
        }
        (yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy(search_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).parent_index = $.copy(n_inner_nodes);
        yield push_back_insert_nodes_(tree, $.copy(key), value, $.copy(n_inner_nodes), $.copy(critical_bit), $.copy(search_parent_index), ($.copy(key)).lt($.copy(search_key)), yield outer_node_child_index_($.copy(n_outer_nodes), $c), $.copy(search_index), $c, [$p[0]]);
        return;
    });
}
exports.insert_below_ = insert_below_;
function insert_below_walk_(tree, key, value, n_outer_nodes, n_inner_nodes, review_node_index, critical_bit, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, review_node, walked_child_index, walked_child_side;
        review_node = yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(review_node_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        if (yield is_set_($.copy(key), $.copy((review_node).critical_bit), $c)) {
            [temp$1, temp$2] = [$.copy(exports.RIGHT), $.copy((review_node).right_child_index)];
        }
        else {
            [temp$1, temp$2] = [$.copy(exports.LEFT), $.copy((review_node).left_child_index)];
        }
        [walked_child_side, walked_child_index] = [temp$1, temp$2];
        if ((walked_child_side == $.copy(exports.LEFT))) {
            (review_node).left_child_index = $.copy(n_inner_nodes);
        }
        else {
            (review_node).right_child_index = $.copy(n_inner_nodes);
        }
        (yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(walked_child_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).parent_index = $.copy(n_inner_nodes);
        yield push_back_insert_nodes_(tree, $.copy(key), value, $.copy(n_inner_nodes), $.copy(critical_bit), $.copy(review_node_index), yield is_set_($.copy(key), $.copy(critical_bit), $c), $.copy(walked_child_index), yield outer_node_child_index_($.copy(n_outer_nodes), $c), $c, [$p[0]]);
        return;
    });
}
exports.insert_below_walk_ = insert_below_walk_;
function insert_empty_(tree, key, value, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Stdlib.Vector.push_back_((tree).outer_nodes, new OuterNode({ key: $.copy(key), value: value, parent_index: $.copy(exports.ROOT) }, new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        (tree).root = ($.copy(exports.OUTER)).shl($.copy(exports.NODE_TYPE));
        return;
    });
}
exports.insert_empty_ = insert_empty_;
function insert_general_(tree, key, value, n_outer_nodes, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, critical_bit, n_inner_nodes, search_child_side, search_index, search_key, search_parent_critical_bit, search_parent_index;
        n_inner_nodes = yield Stdlib.Vector.length_((tree).inner_nodes, $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        [temp$1, temp$2] = [tree, $.copy(key)];
        [search_index, search_child_side, search_key, search_parent_index, search_parent_critical_bit] = yield search_outer_(temp$1, temp$2, $c, [$p[0]]);
        if (!($.copy(search_key)).neq($.copy(key))) {
            throw $.abortCode($.copy(exports.E_HAS_KEY));
        }
        critical_bit = yield crit_bit_($.copy(search_key), $.copy(key), $c);
        if (($.copy(critical_bit)).lt($.copy(search_parent_critical_bit))) {
            yield insert_below_(tree, $.copy(key), value, $.copy(n_outer_nodes), $.copy(n_inner_nodes), $.copy(search_index), search_child_side, $.copy(search_key), $.copy(search_parent_index), $.copy(critical_bit), $c, [$p[0]]);
        }
        else {
            yield insert_above_(tree, $.copy(key), value, $.copy(n_outer_nodes), $.copy(n_inner_nodes), $.copy(search_parent_index), $.copy(critical_bit), $c, [$p[0]]);
        }
        return;
    });
}
exports.insert_general_ = insert_general_;
function insert_singleton_(tree, key, value, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let critical_bit, outer_node;
        outer_node = yield Stdlib.Vector.borrow_((tree).outer_nodes, (0, move_to_ts_1.u64)("0"), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        if (!($.copy(key)).neq($.copy((outer_node).key))) {
            throw $.abortCode($.copy(exports.E_HAS_KEY));
        }
        critical_bit = yield crit_bit_($.copy((outer_node).key), $.copy(key), $c);
        yield push_back_insert_nodes_(tree, $.copy(key), value, (0, move_to_ts_1.u64)("0"), $.copy(critical_bit), $.copy(exports.ROOT), ($.copy(key)).gt($.copy((outer_node).key)), yield outer_node_child_index_((0, move_to_ts_1.u64)("0"), $c), yield outer_node_child_index_((0, move_to_ts_1.u64)("1"), $c), $c, [$p[0]]);
        (tree).root = (0, move_to_ts_1.u64)("0");
        (yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, (0, move_to_ts_1.u64)("0"), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).parent_index = (0, move_to_ts_1.u64)("0");
        return;
    });
}
exports.insert_singleton_ = insert_singleton_;
function is_empty_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Vector.is_empty_((tree).outer_nodes, $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
    });
}
exports.is_empty_ = is_empty_;
function is_outer_node_(child_field_index, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return ((($.copy(child_field_index)).shr($.copy(exports.NODE_TYPE))).and($.copy(exports.OUTER))).eq(($.copy(exports.OUTER)));
    });
}
exports.is_outer_node_ = is_outer_node_;
function is_set_(key, bit_number, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return ((($.copy(key)).shr($.copy(bit_number))).and((0, move_to_ts_1.u128)("1"))).eq(((0, move_to_ts_1.u128)("1")));
    });
}
exports.is_set_ = is_set_;
function length_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Stdlib.Vector.length_((tree).outer_nodes, $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
    });
}
exports.length_ = length_;
function max_key_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!!(yield is_empty_(tree, $c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_LOOKUP_EMPTY));
        }
        return $.copy((yield Stdlib.Vector.borrow_((tree).outer_nodes, yield outer_node_vector_index_(yield max_node_child_index_(tree, $c, [$p[0]]), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).key);
    });
}
exports.max_key_ = max_key_;
function max_node_child_index_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let child_field_index;
        child_field_index = $.copy((tree).root);
        while (true) {
            if (yield is_outer_node_($.copy(child_field_index), $c)) {
                return $.copy(child_field_index);
            }
            else {
            }
            child_field_index = $.copy((yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(child_field_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).right_child_index);
        }
    });
}
exports.max_node_child_index_ = max_node_child_index_;
function min_key_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!!(yield is_empty_(tree, $c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_LOOKUP_EMPTY));
        }
        return $.copy((yield Stdlib.Vector.borrow_((tree).outer_nodes, yield outer_node_vector_index_(yield min_node_child_index_(tree, $c, [$p[0]]), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).key);
    });
}
exports.min_key_ = min_key_;
function min_node_child_index_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let child_field_index;
        child_field_index = $.copy((tree).root);
        while (true) {
            if (yield is_outer_node_($.copy(child_field_index), $c)) {
                return $.copy(child_field_index);
            }
            else {
            }
            child_field_index = $.copy((yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(child_field_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).left_child_index);
        }
    });
}
exports.min_node_child_index_ = min_node_child_index_;
function outer_node_child_index_(vector_index, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return ($.copy(vector_index)).or(($.copy(exports.OUTER)).shl($.copy(exports.NODE_TYPE)));
    });
}
exports.outer_node_child_index_ = outer_node_child_index_;
function outer_node_vector_index_(child_field_index, $c) {
    return __awaiter(this, void 0, void 0, function* () {
        return (($.copy(child_field_index)).and($.copy(exports.HI_64))).xor(($.copy(exports.OUTER)).shl($.copy(exports.NODE_TYPE)));
    });
}
exports.outer_node_vector_index_ = outer_node_vector_index_;
function pop_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, length;
        if (!!(yield is_empty_(tree, $c, [$p[0]]))) {
            throw $.abortCode($.copy(exports.E_POP_EMPTY));
        }
        length = yield length_(tree, $c, [$p[0]]);
        if (($.copy(length)).eq(((0, move_to_ts_1.u64)("1")))) {
            temp$1 = yield pop_singleton_(tree, $.copy(key), $c, [$p[0]]);
        }
        else {
            temp$1 = yield pop_general_(tree, $.copy(key), $.copy(length), $c, [$p[0]]);
        }
        return temp$1;
    });
}
exports.pop_ = pop_;
function pop_destroy_nodes_(tree, inner_index, outer_index, n_outer_nodes, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let n_inner_nodes;
        n_inner_nodes = yield Stdlib.Vector.length_((tree).inner_nodes, $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        yield Stdlib.Vector.swap_remove_((tree).inner_nodes, $.copy(inner_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        if (($.copy(inner_index)).lt(($.copy(n_inner_nodes)).sub((0, move_to_ts_1.u64)("1")))) {
            yield stitch_swap_remove_(tree, $.copy(inner_index), $.copy(n_inner_nodes), $c, [$p[0]]);
        }
        else {
        }
        let { value: value } = yield Stdlib.Vector.swap_remove_((tree).outer_nodes, yield outer_node_vector_index_($.copy(outer_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        if ((yield outer_node_vector_index_($.copy(outer_index), $c)).lt(($.copy(n_outer_nodes)).sub((0, move_to_ts_1.u64)("1")))) {
            yield stitch_swap_remove_(tree, $.copy(outer_index), $.copy(n_outer_nodes), $c, [$p[0]]);
        }
        else {
        }
        return value;
    });
}
exports.pop_destroy_nodes_ = pop_destroy_nodes_;
function pop_general_(tree, key, n_outer_nodes, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, search_child_side, search_index, search_key, search_parent_index;
        [temp$1, temp$2] = [tree, $.copy(key)];
        [search_index, search_child_side, search_key, search_parent_index,] = yield search_outer_(temp$1, temp$2, $c, [$p[0]]);
        if (!($.copy(search_key)).eq(($.copy(key)))) {
            throw $.abortCode($.copy(exports.E_NOT_HAS_KEY));
        }
        yield pop_update_relationships_(tree, search_child_side, $.copy(search_parent_index), $c, [$p[0]]);
        return yield pop_destroy_nodes_(tree, $.copy(search_parent_index), $.copy(search_index), $.copy(n_outer_nodes), $c, [$p[0]]);
    });
}
exports.pop_general_ = pop_general_;
function pop_singleton_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!($.copy((yield Stdlib.Vector.borrow_((tree).outer_nodes, (0, move_to_ts_1.u64)("0"), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).key)).eq(($.copy(key)))) {
            throw $.abortCode($.copy(exports.E_NOT_HAS_KEY));
        }
        (tree).root = (0, move_to_ts_1.u64)("0");
        let { value: value } = yield Stdlib.Vector.pop_back_((tree).outer_nodes, $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        return value;
    });
}
exports.pop_singleton_ = pop_singleton_;
function pop_update_relationships_(tree, child_side, parent_index, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, grandparent, grandparent_index, parent, sibling_index;
        parent = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        if ((child_side == $.copy(exports.LEFT))) {
            temp$1 = $.copy((parent).right_child_index);
        }
        else {
            temp$1 = $.copy((parent).left_child_index);
        }
        sibling_index = temp$1;
        grandparent_index = $.copy((parent).parent_index);
        if (yield is_outer_node_($.copy(sibling_index), $c)) {
            (yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy(sibling_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).parent_index = $.copy(grandparent_index);
        }
        else {
            (yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(sibling_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).parent_index = $.copy(grandparent_index);
        }
        if (($.copy(grandparent_index)).eq(($.copy(exports.ROOT)))) {
            (tree).root = $.copy(sibling_index);
        }
        else {
            grandparent = yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(grandparent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
            if (($.copy((grandparent).left_child_index)).eq(($.copy(parent_index)))) {
                (grandparent).left_child_index = $.copy(sibling_index);
            }
            else {
                (grandparent).right_child_index = $.copy(sibling_index);
            }
        }
        return;
    });
}
exports.pop_update_relationships_ = pop_update_relationships_;
function push_back_insert_nodes_(tree, key, value, inner_index, critical_bit, parent_index, child_polarity, child_index_1, child_index_2, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, left_child_index, right_child_index;
        if (child_polarity) {
            [temp$1, temp$2] = [$.copy(child_index_1), $.copy(child_index_2)];
        }
        else {
            [temp$1, temp$2] = [$.copy(child_index_2), $.copy(child_index_1)];
        }
        [left_child_index, right_child_index] = [temp$1, temp$2];
        yield Stdlib.Vector.push_back_((tree).outer_nodes, new OuterNode({ key: $.copy(key), value: value, parent_index: $.copy(inner_index) }, new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        yield Stdlib.Vector.push_back_((tree).inner_nodes, new InnerNode({ critical_bit: $.copy(critical_bit), parent_index: $.copy(parent_index), left_child_index: $.copy(left_child_index), right_child_index: $.copy(right_child_index) }, new move_to_ts_2.SimpleStructTag(InnerNode)), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        return;
    });
}
exports.push_back_insert_nodes_ = push_back_insert_nodes_;
function search_outer_(tree, key, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, index, node, parent, side;
        parent = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy((tree).root), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        while (true) {
            if (yield is_set_($.copy(key), $.copy((parent).critical_bit), $c)) {
                [temp$1, temp$2] = [$.copy((parent).right_child_index), $.copy(exports.RIGHT)];
            }
            else {
                [temp$1, temp$2] = [$.copy((parent).left_child_index), $.copy(exports.LEFT)];
            }
            [index, side] = [temp$1, temp$2];
            if (yield is_outer_node_($.copy(index), $c)) {
                node = yield Stdlib.Vector.borrow_((tree).outer_nodes, yield outer_node_vector_index_($.copy(index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
                return [$.copy(index), side, $.copy((node).key), $.copy((node).parent_index), $.copy((parent).critical_bit)];
            }
            else {
            }
            parent = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        }
    });
}
exports.search_outer_ = search_outer_;
function singleton_(key, value, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let tree;
        tree = new CritBitTree({ root: (0, move_to_ts_1.u64)("0"), inner_nodes: yield Stdlib.Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(InnerNode)]), outer_nodes: yield Stdlib.Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]) }, new move_to_ts_2.SimpleStructTag(CritBitTree, [$p[0]]));
        yield insert_empty_(tree, $.copy(key), value, $c, [$p[0]]);
        return tree;
    });
}
exports.singleton_ = singleton_;
function stitch_child_of_parent_(tree, new_index, parent_index, old_index, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let parent;
        parent = yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        if (($.copy((parent).left_child_index)).eq(($.copy(old_index)))) {
            (parent).left_child_index = $.copy(new_index);
        }
        else {
            (parent).right_child_index = $.copy(new_index);
        }
        return;
    });
}
exports.stitch_child_of_parent_ = stitch_child_of_parent_;
function stitch_parent_of_child_(tree, new_index, child_index, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield is_outer_node_($.copy(child_index), $c)) {
            (yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy(child_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).parent_index = $.copy(new_index);
        }
        else {
            (yield Stdlib.Vector.borrow_mut_((tree).inner_nodes, $.copy(child_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).parent_index = $.copy(new_index);
        }
        return;
    });
}
exports.stitch_parent_of_child_ = stitch_parent_of_child_;
function stitch_swap_remove_(tree, node_index, n_nodes, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let left_child_index, node, parent_index, parent_index__1, right_child_index;
        if (yield is_outer_node_($.copy(node_index), $c)) {
            parent_index = $.copy((yield Stdlib.Vector.borrow_((tree).outer_nodes, yield outer_node_vector_index_($.copy(node_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])])).parent_index);
            if (($.copy(parent_index)).eq(($.copy(exports.ROOT)))) {
                (tree).root = $.copy(node_index);
                return;
            }
            else {
            }
            yield stitch_child_of_parent_(tree, $.copy(node_index), $.copy(parent_index), yield outer_node_child_index_(($.copy(n_nodes)).sub((0, move_to_ts_1.u64)("1")), $c), $c, [$p[0]]);
        }
        else {
            node = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(node_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
            [parent_index__1, left_child_index, right_child_index] = [$.copy((node).parent_index), $.copy((node).left_child_index), $.copy((node).right_child_index)];
            yield stitch_parent_of_child_(tree, $.copy(node_index), $.copy(left_child_index), $c, [$p[0]]);
            yield stitch_parent_of_child_(tree, $.copy(node_index), $.copy(right_child_index), $c, [$p[0]]);
            if (($.copy(parent_index__1)).eq(($.copy(exports.ROOT)))) {
                (tree).root = $.copy(node_index);
                return;
            }
            else {
            }
            yield stitch_child_of_parent_(tree, $.copy(node_index), $.copy(parent_index__1), ($.copy(n_nodes)).sub((0, move_to_ts_1.u64)("1")), $c, [$p[0]]);
        }
        return;
    });
}
exports.stitch_swap_remove_ = stitch_swap_remove_;
function traverse_end_pop_(tree, parent_index, child_index, n_outer_nodes, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, node_child_side;
        if (($.copy(n_outer_nodes)).eq(((0, move_to_ts_1.u64)("1")))) {
            (tree).root = (0, move_to_ts_1.u64)("0");
            let { value: value } = yield Stdlib.Vector.pop_back_((tree).outer_nodes, $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
            temp$1 = value;
        }
        else {
            node_child_side = ($.copy((yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).left_child_index)).eq(($.copy(child_index)));
            yield pop_update_relationships_(tree, node_child_side, $.copy(parent_index), $c, [$p[0]]);
            temp$1 = yield pop_destroy_nodes_(tree, $.copy(parent_index), $.copy(child_index), $.copy(n_outer_nodes), $c, [$p[0]]);
        }
        return temp$1;
    });
}
exports.traverse_end_pop_ = traverse_end_pop_;
function traverse_init_mut_(tree, direction, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, child_field_index, node;
        if ((direction == $.copy(exports.LEFT))) {
            temp$1 = yield max_node_child_index_(tree, $c, [$p[0]]);
        }
        else {
            temp$1 = yield min_node_child_index_(tree, $c, [$p[0]]);
        }
        child_field_index = temp$1;
        node = yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy(child_field_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        return [$.copy((node).key), (node).value, $.copy((node).parent_index), $.copy(child_field_index)];
    });
}
exports.traverse_init_mut_ = traverse_init_mut_;
function traverse_mut_(tree, key, parent_index, direction, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, node, target_child_index;
        [temp$1, temp$2, temp$3, temp$4] = [tree, $.copy(key), $.copy(parent_index), direction];
        target_child_index = yield traverse_target_child_index_(temp$1, temp$2, temp$3, temp$4, $c, [$p[0]]);
        node = yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy(target_child_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        return [$.copy((node).key), (node).value, $.copy((node).parent_index), $.copy(target_child_index)];
    });
}
exports.traverse_mut_ = traverse_mut_;
function traverse_pop_mut_(tree, key, parent_index, child_index, n_outer_nodes, direction, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, temp$3, temp$4, start_child_side, start_value, target_child_index, target_node;
        start_child_side = ($.copy((yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).left_child_index)).eq(($.copy(child_index)));
        [temp$1, temp$2, temp$3, temp$4] = [tree, $.copy(key), $.copy(parent_index), direction];
        target_child_index = yield traverse_target_child_index_(temp$1, temp$2, temp$3, temp$4, $c, [$p[0]]);
        yield pop_update_relationships_(tree, start_child_side, $.copy(parent_index), $c, [$p[0]]);
        start_value = yield pop_destroy_nodes_(tree, $.copy(parent_index), $.copy(child_index), $.copy(n_outer_nodes), $c, [$p[0]]);
        if ((yield outer_node_vector_index_($.copy(target_child_index), $c)).eq((($.copy(n_outer_nodes)).sub((0, move_to_ts_1.u64)("1"))))) {
            target_child_index = $.copy(child_index);
        }
        else {
        }
        target_node = yield Stdlib.Vector.borrow_mut_((tree).outer_nodes, yield outer_node_vector_index_($.copy(target_child_index), $c), $c, [new move_to_ts_2.SimpleStructTag(OuterNode, [$p[0]])]);
        return [$.copy((target_node).key), (target_node).value, $.copy((target_node).parent_index), $.copy(target_child_index), start_value];
    });
}
exports.traverse_pop_mut_ = traverse_pop_mut_;
function traverse_predecessor_init_mut_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield traverse_init_mut_(tree, $.copy(exports.LEFT), $c, [$p[0]]);
    });
}
exports.traverse_predecessor_init_mut_ = traverse_predecessor_init_mut_;
function traverse_predecessor_mut_(tree, key, parent_index, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield traverse_mut_(tree, $.copy(key), $.copy(parent_index), $.copy(exports.LEFT), $c, [$p[0]]);
    });
}
exports.traverse_predecessor_mut_ = traverse_predecessor_mut_;
function traverse_predecessor_pop_mut_(tree, key, parent_index, child_index, n_outer_nodes, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield traverse_pop_mut_(tree, $.copy(key), $.copy(parent_index), $.copy(child_index), $.copy(n_outer_nodes), $.copy(exports.LEFT), $c, [$p[0]]);
    });
}
exports.traverse_predecessor_pop_mut_ = traverse_predecessor_pop_mut_;
function traverse_successor_init_mut_(tree, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield traverse_init_mut_(tree, $.copy(exports.RIGHT), $c, [$p[0]]);
    });
}
exports.traverse_successor_init_mut_ = traverse_successor_init_mut_;
function traverse_successor_mut_(tree, key, parent_index, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield traverse_mut_(tree, $.copy(key), $.copy(parent_index), $.copy(exports.RIGHT), $c, [$p[0]]);
    });
}
exports.traverse_successor_mut_ = traverse_successor_mut_;
function traverse_successor_pop_mut_(tree, key, parent_index, child_index, n_outer_nodes, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield traverse_pop_mut_(tree, $.copy(key), $.copy(parent_index), $.copy(child_index), $.copy(n_outer_nodes), $.copy(exports.RIGHT), $c, [$p[0]]);
    });
}
exports.traverse_successor_pop_mut_ = traverse_successor_pop_mut_;
function traverse_target_child_index_(tree, key, parent_index, direction, $c, $p) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp$1, temp$2, child_index, parent;
        parent = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
        while ((direction != (yield is_set_($.copy(key), $.copy((parent).critical_bit), $c)))) {
            {
                parent = yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy((parent).parent_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)]);
            }
        }
        if ((direction == $.copy(exports.LEFT))) {
            temp$1 = $.copy((parent).left_child_index);
        }
        else {
            temp$1 = $.copy((parent).right_child_index);
        }
        child_index = temp$1;
        while (!(yield is_outer_node_($.copy(child_index), $c))) {
            {
                if ((direction == $.copy(exports.LEFT))) {
                    temp$2 = $.copy((yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(child_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).right_child_index);
                }
                else {
                    temp$2 = $.copy((yield Stdlib.Vector.borrow_((tree).inner_nodes, $.copy(child_index), $c, [new move_to_ts_2.SimpleStructTag(InnerNode)])).left_child_index);
                }
                child_index = temp$2;
            }
        }
        return $.copy(child_index);
    });
}
exports.traverse_target_child_index_ = traverse_target_child_index_;
function loadParsers(repo) {
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::critbit::CritBitTree", CritBitTree.CritBitTreeParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::critbit::InnerNode", InnerNode.InnerNodeParser);
    repo.addParser("0x7897a29478fbe6c29a476d245ad93149dcd998c9db81981f6adfa15db8bb0629::critbit::OuterNode", OuterNode.OuterNodeParser);
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
    get CritBitTree() { return CritBitTree; }
    get InnerNode() { return InnerNode; }
    get OuterNode() { return OuterNode; }
}
exports.App = App;
//# sourceMappingURL=critbit.js.map