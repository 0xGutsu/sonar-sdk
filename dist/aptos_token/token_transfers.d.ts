import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Stdlib from "../stdlib";
import * as Token from "./token";
export declare const packageName = "AptosToken";
export declare const moduleAddress: HexString;
export declare const moduleName = "token_transfers";
export declare const ETOKEN_OFFER_NOT_EXIST: U64;
export declare class PendingClaims {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    pending_claims: Stdlib.Table.Table;
    offer_events: Stdlib.Event.EventHandle;
    cancel_offer_events: Stdlib.Event.EventHandle;
    claim_events: Stdlib.Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static PendingClaimsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): PendingClaims;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<PendingClaims>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<PendingClaims>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenCancelOfferEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    to_address: HexString;
    token_id: Token.TokenId;
    amount: U64;
    constructor(proto: any, typeTag: TypeTag);
    static TokenCancelOfferEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenCancelOfferEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenClaimEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    to_address: HexString;
    token_id: Token.TokenId;
    amount: U64;
    constructor(proto: any, typeTag: TypeTag);
    static TokenClaimEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenClaimEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenOfferEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    to_address: HexString;
    token_id: Token.TokenId;
    amount: U64;
    constructor(proto: any, typeTag: TypeTag);
    static TokenOfferEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenOfferEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class TokenOfferId {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    to_addr: HexString;
    token_id: Token.TokenId;
    constructor(proto: any, typeTag: TypeTag);
    static TokenOfferIdParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): TokenOfferId;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function cancel_offer_(sender: HexString, receiver: HexString, token_id: Token.TokenId, $c: AptosDataCache): Promise<void>;
export declare function cancel_offer_script_(sender: HexString, receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_cancel_offer_script(receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function claim_(receiver: HexString, sender: HexString, token_id: Token.TokenId, $c: AptosDataCache): Promise<void>;
export declare function claim_script_(receiver: HexString, sender: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_claim_script(sender: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function create_token_offer_id_(to_addr: HexString, token_id: Token.TokenId, $c: AptosDataCache): Promise<TokenOfferId>;
export declare function initialize_token_transfers_(account: HexString, $c: AptosDataCache): Promise<void>;
export declare function offer_(sender: HexString, receiver: HexString, token_id: Token.TokenId, amount: U64, $c: AptosDataCache): Promise<void>;
export declare function offer_script_(sender: HexString, receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, amount: U64, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_offer_script(receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get PendingClaims(): typeof PendingClaims;
    loadPendingClaims(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<PendingClaims>;
    get TokenCancelOfferEvent(): typeof TokenCancelOfferEvent;
    get TokenClaimEvent(): typeof TokenClaimEvent;
    get TokenOfferEvent(): typeof TokenOfferEvent;
    get TokenOfferId(): typeof TokenOfferId;
    payload_cancel_offer_script(receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    cancel_offer_script(_account: AptosAccount, receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_claim_script(sender: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    claim_script(_account: AptosAccount, sender: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_offer_script(receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    offer_script(_account: AptosAccount, receiver: HexString, creator: HexString, collection: Stdlib.String.String, name: Stdlib.String.String, property_version: U64, amount: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=token_transfers.d.ts.map