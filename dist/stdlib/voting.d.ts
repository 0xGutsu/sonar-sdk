import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64, U128 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { HexString, AptosClient } from "aptos";
import * as Event from "./event";
import * as Option from "./option";
import * as Simple_map from "./simple_map";
import * as Table from "./table";
import * as Type_info from "./type_info";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "voting";
export declare const EINVALID_MIN_VOTE_THRESHOLD: U64;
export declare const EPROPOSAL_ALREADY_RESOLVED: U64;
export declare const EPROPOSAL_CANNOT_BE_RESOLVED: U64;
export declare const EPROPOSAL_EMPTY_EXECUTION_HASH: U64;
export declare const EPROPOSAL_EXECUTION_HASH_NOT_MATCHING: U64;
export declare const EPROPOSAL_VOTING_ALREADY_ENDED: U64;
export declare const EVOTING_FORUM_ALREADY_REGISTERED: U64;
export declare const PROPOSAL_STATE_FAILED: U64;
export declare const PROPOSAL_STATE_PENDING: U64;
export declare const PROPOSAL_STATE_SUCCEEDED: U64;
export declare class CreateProposalEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    proposal_id: U64;
    early_resolution_vote_threshold: Option.Option;
    execution_hash: U8[];
    expiration_secs: U64;
    metadata: Simple_map.SimpleMap;
    min_vote_threshold: U128;
    constructor(proto: any, typeTag: TypeTag);
    static CreateProposalEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CreateProposalEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Proposal {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    proposer: HexString;
    execution_content: Option.Option;
    metadata: Simple_map.SimpleMap;
    creation_time_secs: U64;
    execution_hash: U8[];
    min_vote_threshold: U128;
    expiration_secs: U64;
    early_resolution_vote_threshold: Option.Option;
    yes_votes: U128;
    no_votes: U128;
    is_resolved: boolean;
    resolution_time_secs: U64;
    constructor(proto: any, typeTag: TypeTag);
    static ProposalParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Proposal;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class RegisterForumEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    hosting_account: HexString;
    proposal_type_info: Type_info.TypeInfo;
    constructor(proto: any, typeTag: TypeTag);
    static RegisterForumEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): RegisterForumEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ResolveProposal {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    proposal_id: U64;
    yes_votes: U128;
    no_votes: U128;
    resolved_early: boolean;
    constructor(proto: any, typeTag: TypeTag);
    static ResolveProposalParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ResolveProposal;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class VoteEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    proposal_id: U64;
    num_votes: U64;
    constructor(proto: any, typeTag: TypeTag);
    static VoteEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): VoteEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class VotingEvents {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    create_proposal_events: Event.EventHandle;
    register_forum_events: Event.EventHandle;
    resolve_proposal_events: Event.EventHandle;
    vote_events: Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static VotingEventsParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): VotingEvents;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class VotingForum {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    proposals: Table.Table;
    events: VotingEvents;
    next_proposal_id: U64;
    constructor(proto: any, typeTag: TypeTag);
    static VotingForumParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): VotingForum;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<VotingForum>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<VotingForum>;
    static makeTag($p: TypeTag[]): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function can_be_resolved_early_(proposal: Proposal, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function create_proposal_(proposer: HexString, voting_forum_address: HexString, execution_content: any, execution_hash: U8[], min_vote_threshold: U128, expiration_secs: U64, early_resolution_vote_threshold: Option.Option, metadata: Simple_map.SimpleMap, $c: AptosDataCache, $p: TypeTag[]): Promise<U64>;
export declare function get_execution_hash_(voting_forum_address: HexString, proposal_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<U8[]>;
export declare function get_proposal_expiration_secs_(voting_forum_address: HexString, proposal_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<U64>;
export declare function get_proposal_state_(voting_forum_address: HexString, proposal_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<U64>;
export declare function is_resolved_(voting_forum_address: HexString, proposal_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function is_voting_closed_(voting_forum_address: HexString, proposal_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function is_voting_period_over_(proposal: Proposal, $c: AptosDataCache, $p: TypeTag[]): Promise<boolean>;
export declare function register_(account: HexString, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function resolve_(voting_forum_address: HexString, proposal_id: U64, $c: AptosDataCache, $p: TypeTag[]): Promise<any>;
export declare function vote_(_proof: any, voting_forum_address: HexString, proposal_id: U64, num_votes: U64, should_pass: boolean, $c: AptosDataCache, $p: TypeTag[]): Promise<void>;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get CreateProposalEvent(): typeof CreateProposalEvent;
    get Proposal(): typeof Proposal;
    get RegisterForumEvent(): typeof RegisterForumEvent;
    get ResolveProposal(): typeof ResolveProposal;
    get VoteEvent(): typeof VoteEvent;
    get VotingEvents(): typeof VotingEvents;
    get VotingForum(): typeof VotingForum;
    loadVotingForum(owner: HexString, $p: TypeTag[], /* <ProposalType> */ loadFull?: boolean, fillCache?: boolean): Promise<VotingForum>;
}
//# sourceMappingURL=voting.d.ts.map