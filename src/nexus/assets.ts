import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
import * as Stdlib from "../stdlib";
export const packageName = "Nexus";
export const moduleAddress = new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa");
export const moduleName = "assets";

export const BASE_COIN_DECIMALS : U8 = u8("4");
export const BASE_COIN_NAME : U8[] = [u8("66"), u8("97"), u8("115"), u8("101"), u8("32"), u8("99"), u8("111"), u8("105"), u8("110")];
export const BASE_COIN_SYMBOL : U8[] = [u8("66"), u8("67")];
export const E_HAS_CAPABILITIES : U64 = u64("1");
export const E_NOT_ECONIA : U64 = u64("0");
export const E_NO_CAPABILITIES : U64 = u64("2");
export const QUOTE_COIN_DECIMALS : U8 = u8("12");
export const QUOTE_COIN_NAME : U8[] = [u8("81"), u8("117"), u8("111"), u8("116"), u8("101"), u8("32"), u8("99"), u8("111"), u8("105"), u8("110")];
export const QUOTE_COIN_SYMBOL : U8[] = [u8("81"), u8("67")];


export class APT 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "APT";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static APTParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : APT {
    const proto = $.parseStructProto(data, typeTag, repo, APT);
    return new APT(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "APT", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class BC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "BC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static BCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BC {
    const proto = $.parseStructProto(data, typeTag, repo, BC);
    return new BC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "BC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class BG 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "BG";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static BGParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BG {
    const proto = $.parseStructProto(data, typeTag, repo, BG);
    return new BG(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "BG", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class BTC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "BTC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static BTCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BTC {
    const proto = $.parseStructProto(data, typeTag, repo, BTC);
    return new BTC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "BTC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class CoinCapabilities 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "CoinCapabilities";
  static typeParameters: TypeParamDeclType[] = [
    { name: "CoinType", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  { name: "burn_capability", typeTag: new StructTag(new HexString("0x1"), "coin", "BurnCapability", [new $.TypeParamIdx(0)]) },
  { name: "freeze_capability", typeTag: new StructTag(new HexString("0x1"), "coin", "FreezeCapability", [new $.TypeParamIdx(0)]) },
  { name: "mint_capability", typeTag: new StructTag(new HexString("0x1"), "coin", "MintCapability", [new $.TypeParamIdx(0)]) }];

  burn_capability: Stdlib.Coin.BurnCapability;
  freeze_capability: Stdlib.Coin.FreezeCapability;
  mint_capability: Stdlib.Coin.MintCapability;

  constructor(proto: any, public typeTag: TypeTag) {
    this.burn_capability = proto['burn_capability'] as Stdlib.Coin.BurnCapability;
    this.freeze_capability = proto['freeze_capability'] as Stdlib.Coin.FreezeCapability;
    this.mint_capability = proto['mint_capability'] as Stdlib.Coin.MintCapability;
  }

  static CoinCapabilitiesParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : CoinCapabilities {
    const proto = $.parseStructProto(data, typeTag, repo, CoinCapabilities);
    return new CoinCapabilities(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, CoinCapabilities, typeParams);
    return result as unknown as CoinCapabilities;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, CoinCapabilities, typeParams);
    await result.loadFullState(app)
    return result as unknown as CoinCapabilities;
  }
  static makeTag($p: TypeTag[]): StructTag {
    return new StructTag(moduleAddress, moduleName, "CoinCapabilities", $p);
  }
  async loadFullState(app: $.AppType) {
    await this.burn_capability.loadFullState(app);
    await this.freeze_capability.loadFullState(app);
    await this.mint_capability.loadFullState(app);
    this.__app = app;
  }

}

export class ETH 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "ETH";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static ETHParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : ETH {
    const proto = $.parseStructProto(data, typeTag, repo, ETH);
    return new ETH(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "ETH", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class QC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "QC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static QCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : QC {
    const proto = $.parseStructProto(data, typeTag, repo, QC);
    return new QC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "QC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class QG 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "QG";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static QGParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : QG {
    const proto = $.parseStructProto(data, typeTag, repo, QG);
    return new QG(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "QG", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class SOL 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "SOL";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static SOLParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : SOL {
    const proto = $.parseStructProto(data, typeTag, repo, SOL);
    return new SOL(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "SOL", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class SUI 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "SUI";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static SUIParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : SUI {
    const proto = $.parseStructProto(data, typeTag, repo, SUI);
    return new SUI(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "SUI", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class USDC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "USDC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static USDCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : USDC {
    const proto = $.parseStructProto(data, typeTag, repo, USDC);
    return new USDC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "USDC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class USDT 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "USDT";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static USDTParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : USDT {
    const proto = $.parseStructProto(data, typeTag, repo, USDT);
    return new USDT(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "USDT", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}
export function burn_ (
  coins: Stdlib.Coin.Coin,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let burn_capability;
  burn_capability = $c.borrow_global<CoinCapabilities>(new SimpleStructTag(CoinCapabilities, [$p[0]]), new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).burn_capability;
  Stdlib.Coin.burn_(coins, burn_capability, $c, [$p[0]]);
  return;
}

export function init_all_coin_types_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  init_coin_type_(account, $.copy(BASE_COIN_NAME), $.copy(BASE_COIN_SYMBOL), $.copy(BASE_COIN_DECIMALS), $c, [new SimpleStructTag(BC)]);
  init_coin_type_(account, $.copy(QUOTE_COIN_NAME), $.copy(QUOTE_COIN_SYMBOL), $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(QC)]);
  init_coin_type_(account, [u8("65"), u8("112"), u8("116"), u8("111"), u8("115")], [u8("65"), u8("80"), u8("84")], $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(APT)]);
  init_coin_type_(account, [u8("83"), u8("117"), u8("105")], [u8("83"), u8("85"), u8("73")], $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(SUI)]);
  init_coin_type_(account, [u8("85"), u8("83"), u8("32"), u8("68"), u8("111"), u8("108"), u8("108"), u8("97"), u8("114"), u8("32"), u8("67"), u8("111"), u8("105"), u8("110")], [u8("85"), u8("83"), u8("68"), u8("67")], $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(USDC)]);
  init_coin_type_(account, [u8("85"), u8("83"), u8("32"), u8("68"), u8("111"), u8("108"), u8("108"), u8("97"), u8("114"), u8("32"), u8("84"), u8("101"), u8("116"), u8("104"), u8("101"), u8("114")], [u8("85"), u8("83"), u8("68"), u8("84")], $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(USDT)]);
  init_coin_type_(account, [u8("66"), u8("105"), u8("116"), u8("99"), u8("111"), u8("105"), u8("110")], [u8("66"), u8("84"), u8("67")], $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(BTC)]);
  init_coin_type_(account, [u8("69"), u8("116"), u8("104"), u8("101"), u8("114"), u8("101"), u8("117"), u8("109")], [u8("69"), u8("84"), u8("72")], $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(ETH)]);
  init_coin_type_(account, [u8("83"), u8("111"), u8("108"), u8("97"), u8("110"), u8("97")], [u8("83"), u8("79"), u8("76")], $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(SOL)]);
  return;
}


export function buildPayload_init_all_coin_types (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"),
    "assets",
    "init_all_coin_types",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function init_coin_type_ (
  account: HexString,
  coin_name: U8[],
  coin_symbol: U8[],
  decimals: U8,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let burn_capability, freeze_capability, mint_capability;
  if (!((Stdlib.Signer.address_of_(account, $c)).hex() === (new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).hex())) {
    throw $.abortCode($.copy(E_NOT_ECONIA));
  }
  if (!!$c.exists(new SimpleStructTag(CoinCapabilities, [$p[0]]), new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"))) {
    throw $.abortCode($.copy(E_HAS_CAPABILITIES));
  }
  [burn_capability, freeze_capability, mint_capability] = Stdlib.Coin.initialize_(account, Stdlib.String.utf8_($.copy(coin_name), $c), Stdlib.String.utf8_($.copy(coin_symbol), $c), $.copy(decimals), false, $c, [$p[0]]);
  $c.move_to(new SimpleStructTag(CoinCapabilities, [$p[0]]), account, new CoinCapabilities({ burn_capability: $.copy(burn_capability), freeze_capability: $.copy(freeze_capability), mint_capability: $.copy(mint_capability) }, new SimpleStructTag(CoinCapabilities, [$p[0]])));
  return;
}

export function init_coin_types_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  init_coin_type_(account, $.copy(BASE_COIN_NAME), $.copy(BASE_COIN_SYMBOL), $.copy(BASE_COIN_DECIMALS), $c, [new SimpleStructTag(BC)]);
  init_coin_type_(account, $.copy(QUOTE_COIN_NAME), $.copy(QUOTE_COIN_SYMBOL), $.copy(QUOTE_COIN_DECIMALS), $c, [new SimpleStructTag(QC)]);
  return;
}


export function buildPayload_init_coin_types (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"),
    "assets",
    "init_coin_types",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function mint_ (
  account: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Stdlib.Coin.Coin {
  let account_address, mint_capability;
  account_address = Stdlib.Signer.address_of_(account, $c);
  if (!(($.copy(account_address)).hex() === (new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).hex())) {
    throw $.abortCode($.copy(E_NOT_ECONIA));
  }
  if (!$c.exists(new SimpleStructTag(CoinCapabilities, [$p[0]]), $.copy(account_address))) {
    throw $.abortCode($.copy(E_NO_CAPABILITIES));
  }
  mint_capability = $c.borrow_global<CoinCapabilities>(new SimpleStructTag(CoinCapabilities, [$p[0]]), $.copy(account_address)).mint_capability;
  return Stdlib.Coin.mint_($.copy(amount), mint_capability, $c, [$p[0]]);
}


export function buildPayload_mint (
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"),
    "assets",
    "mint",
    typeParamStrings,
    [
      amount,
    ],
    isJSON,
  );

}

export function mint_and_deposit_ (
  account: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let account_address, mint_capability;
  account_address = Stdlib.Signer.address_of_(account, $c);
  if (!(($.copy(account_address)).hex() === (new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa")).hex())) {
    throw $.abortCode($.copy(E_NOT_ECONIA));
  }
  if (!$c.exists(new SimpleStructTag(CoinCapabilities, [$p[0]]), $.copy(account_address))) {
    throw $.abortCode($.copy(E_NO_CAPABILITIES));
  }
  mint_capability = $c.borrow_global<CoinCapabilities>(new SimpleStructTag(CoinCapabilities, [$p[0]]), $.copy(account_address)).mint_capability;
  if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(account, $c), $c, [$p[0]])) {
    Stdlib.Coin.register_(account, $c, [$p[0]]);
  }
  else{
  }
  Stdlib.Coin.deposit_(Stdlib.Signer.address_of_(account, $c), Stdlib.Coin.mint_($.copy(amount), mint_capability, $c, [$p[0]]), $c, [$p[0]]);
  return;
}


export function buildPayload_mint_and_deposit (
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa"),
    "assets",
    "mint_and_deposit",
    typeParamStrings,
    [
      amount,
    ],
    isJSON,
  );

}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::APT", APT.APTParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::BC", BC.BCParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::BG", BG.BGParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::BTC", BTC.BTCParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::CoinCapabilities", CoinCapabilities.CoinCapabilitiesParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::ETH", ETH.ETHParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::QC", QC.QCParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::QG", QG.QGParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::SOL", SOL.SOLParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::SUI", SUI.SUIParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::USDC", USDC.USDCParser);
  repo.addParser("0x91f6206a9ee4f969adf1e987b11a6a7ff4848fdb63b90f05ecd8a1a73b0e3efa::assets::USDT", USDT.USDTParser);
}
export class App {
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
  }
  get moduleAddress() {{ return moduleAddress; }}
  get moduleName() {{ return moduleName; }}
  get APT() { return APT; }
  get BC() { return BC; }
  get BG() { return BG; }
  get BTC() { return BTC; }
  get CoinCapabilities() { return CoinCapabilities; }
  async loadCoinCapabilities(
    owner: HexString,
    $p: TypeTag[], /* <CoinType> */
    loadFull=true,
  ) {
    const val = await CoinCapabilities.load(this.repo, this.client, owner, $p);
    if (loadFull) {
      await val.loadFullState(this);
    }
    return val;
  }
  get ETH() { return ETH; }
  get QC() { return QC; }
  get QG() { return QG; }
  get SOL() { return SOL; }
  get SUI() { return SUI; }
  get USDC() { return USDC; }
  get USDT() { return USDT; }
  payload_init_all_coin_types(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_init_all_coin_types(isJSON);
  }
  async init_all_coin_types(
    _account: AptosAccount,
    _maxGas = 1000,
    _isJSON = false,
  ) {
    const payload = buildPayload_init_all_coin_types(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload, _maxGas);
  }
  payload_init_coin_types(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_init_coin_types(isJSON);
  }
  async init_coin_types(
    _account: AptosAccount,
    _maxGas = 1000,
    _isJSON = false,
  ) {
    const payload = buildPayload_init_coin_types(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload, _maxGas);
  }
  payload_mint(
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_mint(amount, $p, isJSON);
  }
  async mint(
    _account: AptosAccount,
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    _maxGas = 1000,
    _isJSON = false,
  ) {
    const payload = buildPayload_mint(amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload, _maxGas);
  }
  payload_mint_and_deposit(
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_mint_and_deposit(amount, $p, isJSON);
  }
  async mint_and_deposit(
    _account: AptosAccount,
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    _maxGas = 1000,
    _isJSON = false,
  ) {
    const payload = buildPayload_mint_and_deposit(amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload, _maxGas);
  }
}

