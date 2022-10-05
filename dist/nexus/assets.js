"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.App =
  exports.loadParsers =
  exports.buildPayload_mint_and_deposit =
  exports.mint_and_deposit_ =
  exports.buildPayload_mint =
  exports.mint_ =
  exports.buildPayload_init_coin_types =
  exports.init_coin_types_ =
  exports.init_coin_type_ =
  exports.buildPayload_init_all_coin_types =
  exports.init_all_coin_types_ =
  exports.burn_ =
  exports.USDT =
  exports.USDC =
  exports.SUI =
  exports.SOL =
  exports.QG =
  exports.QC =
  exports.ETH =
  exports.CoinCapabilities =
  exports.BTC =
  exports.BG =
  exports.BC =
  exports.APT =
  exports.QUOTE_COIN_SYMBOL =
  exports.QUOTE_COIN_NAME =
  exports.QUOTE_COIN_DECIMALS =
  exports.E_NO_CAPABILITIES =
  exports.E_NOT_NEXUS =
  exports.E_HAS_CAPABILITIES =
  exports.BASE_COIN_SYMBOL =
  exports.BASE_COIN_NAME =
  exports.BASE_COIN_DECIMALS =
  exports.moduleName =
  exports.moduleAddress =
  exports.packageName =
    void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "Nexus";
exports.moduleAddress = new aptos_1.HexString(
  "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
);
exports.moduleName = "assets";
exports.BASE_COIN_DECIMALS = (0, move_to_ts_1.u8)("4");
exports.BASE_COIN_NAME = [
  (0, move_to_ts_1.u8)("66"),
  (0, move_to_ts_1.u8)("97"),
  (0, move_to_ts_1.u8)("115"),
  (0, move_to_ts_1.u8)("101"),
  (0, move_to_ts_1.u8)("32"),
  (0, move_to_ts_1.u8)("99"),
  (0, move_to_ts_1.u8)("111"),
  (0, move_to_ts_1.u8)("105"),
  (0, move_to_ts_1.u8)("110"),
];
exports.BASE_COIN_SYMBOL = [
  (0, move_to_ts_1.u8)("66"),
  (0, move_to_ts_1.u8)("67"),
];
exports.E_HAS_CAPABILITIES = (0, move_to_ts_1.u64)("1");
exports.E_NOT_NEXUS = (0, move_to_ts_1.u64)("0");
exports.E_NO_CAPABILITIES = (0, move_to_ts_1.u64)("2");
exports.QUOTE_COIN_DECIMALS = (0, move_to_ts_1.u8)("12");
exports.QUOTE_COIN_NAME = [
  (0, move_to_ts_1.u8)("81"),
  (0, move_to_ts_1.u8)("117"),
  (0, move_to_ts_1.u8)("111"),
  (0, move_to_ts_1.u8)("116"),
  (0, move_to_ts_1.u8)("101"),
  (0, move_to_ts_1.u8)("32"),
  (0, move_to_ts_1.u8)("99"),
  (0, move_to_ts_1.u8)("111"),
  (0, move_to_ts_1.u8)("105"),
  (0, move_to_ts_1.u8)("110"),
];
exports.QUOTE_COIN_SYMBOL = [
  (0, move_to_ts_1.u8)("81"),
  (0, move_to_ts_1.u8)("67"),
];
class APT {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static APTParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, APT);
    return new APT(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "APT",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.APT = APT;
APT.moduleAddress = exports.moduleAddress;
APT.moduleName = exports.moduleName;
APT.structName = "APT";
APT.typeParameters = [];
APT.fields = [];
class BC {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static BCParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, BC);
    return new BC(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "BC",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.BC = BC;
BC.moduleAddress = exports.moduleAddress;
BC.moduleName = exports.moduleName;
BC.structName = "BC";
BC.typeParameters = [];
BC.fields = [];
class BG {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static BGParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, BG);
    return new BG(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "BG",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.BG = BG;
BG.moduleAddress = exports.moduleAddress;
BG.moduleName = exports.moduleName;
BG.structName = "BG";
BG.typeParameters = [];
BG.fields = [];
class BTC {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static BTCParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, BTC);
    return new BTC(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "BTC",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.BTC = BTC;
BTC.moduleAddress = exports.moduleAddress;
BTC.moduleName = exports.moduleName;
BTC.structName = "BTC";
BTC.typeParameters = [];
BTC.fields = [];
class CoinCapabilities {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
    this.burn_capability = proto["burn_capability"];
    this.freeze_capability = proto["freeze_capability"];
    this.mint_capability = proto["mint_capability"];
  }
  static CoinCapabilitiesParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, CoinCapabilities);
    return new CoinCapabilities(proto, typeTag);
  }
  static load(repo, client, address, typeParams) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = yield repo.loadResource(
        client,
        address,
        CoinCapabilities,
        typeParams
      );
      return result;
    });
  }
  static loadByApp(app, address, typeParams) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = yield app.repo.loadResource(
        app.client,
        address,
        CoinCapabilities,
        typeParams
      );
      yield result.loadFullState(app);
      return result;
    });
  }
  static makeTag($p) {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "CoinCapabilities",
      $p
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.burn_capability.loadFullState(app);
      yield this.freeze_capability.loadFullState(app);
      yield this.mint_capability.loadFullState(app);
      this.__app = app;
    });
  }
}
exports.CoinCapabilities = CoinCapabilities;
CoinCapabilities.moduleAddress = exports.moduleAddress;
CoinCapabilities.moduleName = exports.moduleName;
CoinCapabilities.structName = "CoinCapabilities";
CoinCapabilities.typeParameters = [{ name: "CoinType", isPhantom: true }];
CoinCapabilities.fields = [
  {
    name: "burn_capability",
    typeTag: new move_to_ts_2.StructTag(
      new aptos_1.HexString("0x1"),
      "coin",
      "BurnCapability",
      [new $.TypeParamIdx(0)]
    ),
  },
  {
    name: "freeze_capability",
    typeTag: new move_to_ts_2.StructTag(
      new aptos_1.HexString("0x1"),
      "coin",
      "FreezeCapability",
      [new $.TypeParamIdx(0)]
    ),
  },
  {
    name: "mint_capability",
    typeTag: new move_to_ts_2.StructTag(
      new aptos_1.HexString("0x1"),
      "coin",
      "MintCapability",
      [new $.TypeParamIdx(0)]
    ),
  },
];
class ETH {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static ETHParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, ETH);
    return new ETH(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "ETH",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.ETH = ETH;
ETH.moduleAddress = exports.moduleAddress;
ETH.moduleName = exports.moduleName;
ETH.structName = "ETH";
ETH.typeParameters = [];
ETH.fields = [];
class QC {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static QCParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, QC);
    return new QC(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "QC",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.QC = QC;
QC.moduleAddress = exports.moduleAddress;
QC.moduleName = exports.moduleName;
QC.structName = "QC";
QC.typeParameters = [];
QC.fields = [];
class QG {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static QGParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, QG);
    return new QG(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "QG",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.QG = QG;
QG.moduleAddress = exports.moduleAddress;
QG.moduleName = exports.moduleName;
QG.structName = "QG";
QG.typeParameters = [];
QG.fields = [];
class SOL {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static SOLParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, SOL);
    return new SOL(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "SOL",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.SOL = SOL;
SOL.moduleAddress = exports.moduleAddress;
SOL.moduleName = exports.moduleName;
SOL.structName = "SOL";
SOL.typeParameters = [];
SOL.fields = [];
class SUI {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static SUIParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, SUI);
    return new SUI(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "SUI",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.SUI = SUI;
SUI.moduleAddress = exports.moduleAddress;
SUI.moduleName = exports.moduleName;
SUI.structName = "SUI";
SUI.typeParameters = [];
SUI.fields = [];
class USDC {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static USDCParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, USDC);
    return new USDC(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "USDC",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.USDC = USDC;
USDC.moduleAddress = exports.moduleAddress;
USDC.moduleName = exports.moduleName;
USDC.structName = "USDC";
USDC.typeParameters = [];
USDC.fields = [];
class USDT {
  constructor(proto, typeTag) {
    this.typeTag = typeTag;
    this.__app = null;
  }
  static USDTParser(data, typeTag, repo) {
    const proto = $.parseStructProto(data, typeTag, repo, USDT);
    return new USDT(proto, typeTag);
  }
  static getTag() {
    return new move_to_ts_2.StructTag(
      exports.moduleAddress,
      exports.moduleName,
      "USDT",
      []
    );
  }
  loadFullState(app) {
    return __awaiter(this, void 0, void 0, function* () {
      this.__app = app;
    });
  }
}
exports.USDT = USDT;
USDT.moduleAddress = exports.moduleAddress;
USDT.moduleName = exports.moduleName;
USDT.structName = "USDT";
USDT.typeParameters = [];
USDT.fields = [];
function burn_(coins, $c, $p) {
  let burn_capability;
  burn_capability = $c.borrow_global(
    new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]]),
    new aptos_1.HexString(
      "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
    )
  ).burn_capability;
  Stdlib.Coin.burn_(coins, burn_capability, $c, [$p[0]]);
  return;
}
exports.burn_ = burn_;
function init_all_coin_types_(account, $c) {
  init_coin_type_(
    account,
    $.copy(exports.BASE_COIN_NAME),
    $.copy(exports.BASE_COIN_SYMBOL),
    $.copy(exports.BASE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(BC)]
  );
  init_coin_type_(
    account,
    $.copy(exports.QUOTE_COIN_NAME),
    $.copy(exports.QUOTE_COIN_SYMBOL),
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(QC)]
  );
  init_coin_type_(
    account,
    [
      (0, move_to_ts_1.u8)("65"),
      (0, move_to_ts_1.u8)("112"),
      (0, move_to_ts_1.u8)("116"),
      (0, move_to_ts_1.u8)("111"),
      (0, move_to_ts_1.u8)("115"),
    ],
    [
      (0, move_to_ts_1.u8)("65"),
      (0, move_to_ts_1.u8)("80"),
      (0, move_to_ts_1.u8)("84"),
    ],
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(APT)]
  );
  init_coin_type_(
    account,
    [
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("117"),
      (0, move_to_ts_1.u8)("105"),
    ],
    [
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("85"),
      (0, move_to_ts_1.u8)("73"),
    ],
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(SUI)]
  );
  init_coin_type_(
    account,
    [
      (0, move_to_ts_1.u8)("85"),
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("32"),
      (0, move_to_ts_1.u8)("68"),
      (0, move_to_ts_1.u8)("111"),
      (0, move_to_ts_1.u8)("108"),
      (0, move_to_ts_1.u8)("108"),
      (0, move_to_ts_1.u8)("97"),
      (0, move_to_ts_1.u8)("114"),
      (0, move_to_ts_1.u8)("32"),
      (0, move_to_ts_1.u8)("67"),
      (0, move_to_ts_1.u8)("111"),
      (0, move_to_ts_1.u8)("105"),
      (0, move_to_ts_1.u8)("110"),
    ],
    [
      (0, move_to_ts_1.u8)("85"),
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("68"),
      (0, move_to_ts_1.u8)("67"),
    ],
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(USDC)]
  );
  init_coin_type_(
    account,
    [
      (0, move_to_ts_1.u8)("85"),
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("32"),
      (0, move_to_ts_1.u8)("68"),
      (0, move_to_ts_1.u8)("111"),
      (0, move_to_ts_1.u8)("108"),
      (0, move_to_ts_1.u8)("108"),
      (0, move_to_ts_1.u8)("97"),
      (0, move_to_ts_1.u8)("114"),
      (0, move_to_ts_1.u8)("32"),
      (0, move_to_ts_1.u8)("84"),
      (0, move_to_ts_1.u8)("101"),
      (0, move_to_ts_1.u8)("116"),
      (0, move_to_ts_1.u8)("104"),
      (0, move_to_ts_1.u8)("101"),
      (0, move_to_ts_1.u8)("114"),
    ],
    [
      (0, move_to_ts_1.u8)("85"),
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("68"),
      (0, move_to_ts_1.u8)("84"),
    ],
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(USDT)]
  );
  init_coin_type_(
    account,
    [
      (0, move_to_ts_1.u8)("66"),
      (0, move_to_ts_1.u8)("105"),
      (0, move_to_ts_1.u8)("116"),
      (0, move_to_ts_1.u8)("99"),
      (0, move_to_ts_1.u8)("111"),
      (0, move_to_ts_1.u8)("105"),
      (0, move_to_ts_1.u8)("110"),
    ],
    [
      (0, move_to_ts_1.u8)("66"),
      (0, move_to_ts_1.u8)("84"),
      (0, move_to_ts_1.u8)("67"),
    ],
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(BTC)]
  );
  init_coin_type_(
    account,
    [
      (0, move_to_ts_1.u8)("69"),
      (0, move_to_ts_1.u8)("116"),
      (0, move_to_ts_1.u8)("104"),
      (0, move_to_ts_1.u8)("101"),
      (0, move_to_ts_1.u8)("114"),
      (0, move_to_ts_1.u8)("101"),
      (0, move_to_ts_1.u8)("117"),
      (0, move_to_ts_1.u8)("109"),
    ],
    [
      (0, move_to_ts_1.u8)("69"),
      (0, move_to_ts_1.u8)("84"),
      (0, move_to_ts_1.u8)("72"),
    ],
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(ETH)]
  );
  init_coin_type_(
    account,
    [
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("111"),
      (0, move_to_ts_1.u8)("108"),
      (0, move_to_ts_1.u8)("97"),
      (0, move_to_ts_1.u8)("110"),
      (0, move_to_ts_1.u8)("97"),
    ],
    [
      (0, move_to_ts_1.u8)("83"),
      (0, move_to_ts_1.u8)("79"),
      (0, move_to_ts_1.u8)("76"),
    ],
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(SOL)]
  );
  return;
}
exports.init_all_coin_types_ = init_all_coin_types_;
function buildPayload_init_all_coin_types(isJSON = false) {
  const typeParamStrings = [];
  return $.buildPayload(
    new aptos_1.HexString(
      "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
    ),
    "assets",
    "init_all_coin_types",
    typeParamStrings,
    [],
    isJSON
  );
}
exports.buildPayload_init_all_coin_types = buildPayload_init_all_coin_types;
function init_coin_type_(account, coin_name, coin_symbol, decimals, $c, $p) {
  let burn_capability, freeze_capability, mint_capability;
  if (
    !(
      Stdlib.Signer.address_of_(account, $c).hex() ===
      new aptos_1.HexString(
        "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
      ).hex()
    )
  ) {
    throw $.abortCode($.copy(exports.E_NOT_NEXUS));
  }
  if (
    !!$c.exists(
      new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]]),
      new aptos_1.HexString(
        "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
      )
    )
  ) {
    throw $.abortCode($.copy(exports.E_HAS_CAPABILITIES));
  }
  [burn_capability, freeze_capability, mint_capability] =
    Stdlib.Coin.initialize_(
      account,
      Stdlib.String.utf8_($.copy(coin_name), $c),
      Stdlib.String.utf8_($.copy(coin_symbol), $c),
      $.copy(decimals),
      false,
      $c,
      [$p[0]]
    );
  $c.move_to(
    new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]]),
    account,
    new CoinCapabilities(
      {
        burn_capability: $.copy(burn_capability),
        freeze_capability: $.copy(freeze_capability),
        mint_capability: $.copy(mint_capability),
      },
      new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]])
    )
  );
  return;
}
exports.init_coin_type_ = init_coin_type_;
function init_coin_types_(account, $c) {
  init_coin_type_(
    account,
    $.copy(exports.BASE_COIN_NAME),
    $.copy(exports.BASE_COIN_SYMBOL),
    $.copy(exports.BASE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(BC)]
  );
  init_coin_type_(
    account,
    $.copy(exports.QUOTE_COIN_NAME),
    $.copy(exports.QUOTE_COIN_SYMBOL),
    $.copy(exports.QUOTE_COIN_DECIMALS),
    $c,
    [new move_to_ts_2.SimpleStructTag(QC)]
  );
  return;
}
exports.init_coin_types_ = init_coin_types_;
function buildPayload_init_coin_types(isJSON = false) {
  const typeParamStrings = [];
  return $.buildPayload(
    new aptos_1.HexString(
      "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
    ),
    "assets",
    "init_coin_types",
    typeParamStrings,
    [],
    isJSON
  );
}
exports.buildPayload_init_coin_types = buildPayload_init_coin_types;
function mint_(account, amount, $c, $p) {
  let account_address, mint_capability;
  account_address = Stdlib.Signer.address_of_(account, $c);
  if (
    !(
      $.copy(account_address).hex() ===
      new aptos_1.HexString(
        "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
      ).hex()
    )
  ) {
    throw $.abortCode($.copy(exports.E_NOT_NEXUS));
  }
  if (
    !$c.exists(
      new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]]),
      $.copy(account_address)
    )
  ) {
    throw $.abortCode($.copy(exports.E_NO_CAPABILITIES));
  }
  mint_capability = $c.borrow_global(
    new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]]),
    $.copy(account_address)
  ).mint_capability;
  return Stdlib.Coin.mint_($.copy(amount), mint_capability, $c, [$p[0]]);
}
exports.mint_ = mint_;
function buildPayload_mint(amount, $p, /* <CoinType>*/ isJSON = false) {
  const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
  return $.buildPayload(
    new aptos_1.HexString(
      "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
    ),
    "assets",
    "mint",
    typeParamStrings,
    [amount],
    isJSON
  );
}
exports.buildPayload_mint = buildPayload_mint;
function mint_and_deposit_(account, amount, $c, $p) {
  let account_address, mint_capability;
  account_address = Stdlib.Signer.address_of_(account, $c);
  if (
    !(
      $.copy(account_address).hex() ===
      new aptos_1.HexString(
        "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
      ).hex()
    )
  ) {
    throw $.abortCode($.copy(exports.E_NOT_NEXUS));
  }
  if (
    !$c.exists(
      new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]]),
      $.copy(account_address)
    )
  ) {
    throw $.abortCode($.copy(exports.E_NO_CAPABILITIES));
  }
  mint_capability = $c.borrow_global(
    new move_to_ts_2.SimpleStructTag(CoinCapabilities, [$p[0]]),
    $.copy(account_address)
  ).mint_capability;
  if (
    !Stdlib.Coin.is_account_registered_(
      Stdlib.Signer.address_of_(account, $c),
      $c,
      [$p[0]]
    )
  ) {
    Stdlib.Coin.register_(account, $c, [$p[0]]);
  } else {
  }
  Stdlib.Coin.deposit_(
    Stdlib.Signer.address_of_(account, $c),
    Stdlib.Coin.mint_($.copy(amount), mint_capability, $c, [$p[0]]),
    $c,
    [$p[0]]
  );
  return;
}
exports.mint_and_deposit_ = mint_and_deposit_;
function buildPayload_mint_and_deposit(
  amount,
  $p,
  /* <CoinType>*/ isJSON = false
) {
  const typeParamStrings = $p.map((t) => $.getTypeTagFullname(t));
  return $.buildPayload(
    new aptos_1.HexString(
      "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"
    ),
    "assets",
    "mint_and_deposit",
    typeParamStrings,
    [amount],
    isJSON
  );
}
exports.buildPayload_mint_and_deposit = buildPayload_mint_and_deposit;
function loadParsers(repo) {
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::APT",
    APT.APTParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::BC",
    BC.BCParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::BG",
    BG.BGParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::BTC",
    BTC.BTCParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::CoinCapabilities",
    CoinCapabilities.CoinCapabilitiesParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::ETH",
    ETH.ETHParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::QC",
    QC.QCParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::QG",
    QG.QGParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::SOL",
    SOL.SOLParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::SUI",
    SUI.SUIParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::USDC",
    USDC.USDCParser
  );
  repo.addParser(
    "0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::USDT",
    USDT.USDTParser
  );
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
  get APT() {
    return APT;
  }
  get BC() {
    return BC;
  }
  get BG() {
    return BG;
  }
  get BTC() {
    return BTC;
  }
  get CoinCapabilities() {
    return CoinCapabilities;
  }
  loadCoinCapabilities(owner, $p, /* <CoinType> */ loadFull = true) {
    return __awaiter(this, void 0, void 0, function* () {
      const val = yield CoinCapabilities.load(
        this.repo,
        this.client,
        owner,
        $p
      );
      if (loadFull) {
        yield val.loadFullState(this);
      }
      return val;
    });
  }
  get ETH() {
    return ETH;
  }
  get QC() {
    return QC;
  }
  get QG() {
    return QG;
  }
  get SOL() {
    return SOL;
  }
  get SUI() {
    return SUI;
  }
  get USDC() {
    return USDC;
  }
  get USDT() {
    return USDT;
  }
  payload_init_all_coin_types(isJSON = false) {
    return buildPayload_init_all_coin_types(isJSON);
  }
  init_all_coin_types(_account, _maxGas = 1000, _isJSON = false) {
    return __awaiter(this, void 0, void 0, function* () {
      const payload = buildPayload_init_all_coin_types(_isJSON);
      return $.sendPayloadTx(this.client, _account, payload, _maxGas);
    });
  }
  payload_init_coin_types(isJSON = false) {
    return buildPayload_init_coin_types(isJSON);
  }
  init_coin_types(_account, _maxGas = 1000, _isJSON = false) {
    return __awaiter(this, void 0, void 0, function* () {
      const payload = buildPayload_init_coin_types(_isJSON);
      return $.sendPayloadTx(this.client, _account, payload, _maxGas);
    });
  }
  payload_mint(amount, $p, /* <CoinType>*/ isJSON = false) {
    return buildPayload_mint(amount, $p, isJSON);
  }
  mint(_account, amount, $p, /* <CoinType>*/ _maxGas = 1000, _isJSON = false) {
    return __awaiter(this, void 0, void 0, function* () {
      const payload = buildPayload_mint(amount, $p, _isJSON);
      return $.sendPayloadTx(this.client, _account, payload, _maxGas);
    });
  }
  payload_mint_and_deposit(amount, $p, /* <CoinType>*/ isJSON = false) {
    return buildPayload_mint_and_deposit(amount, $p, isJSON);
  }
  mint_and_deposit(
    _account,
    amount,
    $p,
    /* <CoinType>*/ _maxGas = 1000,
    _isJSON = false
  ) {
    return __awaiter(this, void 0, void 0, function* () {
      const payload = buildPayload_mint_and_deposit(amount, $p, _isJSON);
      return $.sendPayloadTx(this.client, _account, payload, _maxGas);
    });
  }
}
exports.App = App;
//# sourceMappingURL=assets.js.map
