import * as $ from "@manahippo/move-to-ts";
import { AptosDataCache, AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import { U8, U64 } from "@manahippo/move-to-ts";
import { TypeParamDeclType, FieldDeclType } from "@manahippo/move-to-ts";
import { StructTag, TypeTag } from "@manahippo/move-to-ts";
import { OptionTransaction } from "@manahippo/move-to-ts";
import { HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types } from "aptos";
import * as Account from "./account";
import * as Coin from "./coin";
import * as Event from "./event";
import * as Pool_u64 from "./pool_u64";
import * as Simple_map from "./simple_map";
import * as Stake from "./stake";
export declare const packageName = "AptosFramework";
export declare const moduleAddress: HexString;
export declare const moduleName = "staking_contract";
export declare const ECANT_MERGE_STAKING_CONTRACTS: U64;
export declare const EINSUFFICIENT_ACTIVE_STAKE_TO_WITHDRAW: U64;
export declare const EINSUFFICIENT_STAKE_AMOUNT: U64;
export declare const EINVALID_COMMISSION_PERCENTAGE: U64;
export declare const ENOT_STAKER_OR_OPERATOR: U64;
export declare const ENO_STAKING_CONTRACT_FOUND_FOR_OPERATOR: U64;
export declare const ENO_STAKING_CONTRACT_FOUND_FOR_STAKER: U64;
export declare const ESTAKING_CONTRACT_ALREADY_EXISTS: U64;
export declare const MAXIMUM_PENDING_DISTRIBUTIONS: U64;
export declare const SALT: U8[];
export declare class AddDistributionEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    pool_address: HexString;
    amount: U64;
    constructor(proto: any, typeTag: TypeTag);
    static AddDistributionEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AddDistributionEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class AddStakeEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    pool_address: HexString;
    amount: U64;
    constructor(proto: any, typeTag: TypeTag);
    static AddStakeEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): AddStakeEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class CreateStakingContractEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    voter: HexString;
    pool_address: HexString;
    principal: U64;
    commission_percentage: U64;
    constructor(proto: any, typeTag: TypeTag);
    static CreateStakingContractEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): CreateStakingContractEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class DistributeEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    pool_address: HexString;
    recipient: HexString;
    amount: U64;
    constructor(proto: any, typeTag: TypeTag);
    static DistributeEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): DistributeEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class RequestCommissionEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    pool_address: HexString;
    accumulated_rewards: U64;
    commission_amount: U64;
    constructor(proto: any, typeTag: TypeTag);
    static RequestCommissionEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): RequestCommissionEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class ResetLockupEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    pool_address: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static ResetLockupEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): ResetLockupEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class StakingContract {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    principal: U64;
    pool_address: HexString;
    owner_cap: Stake.OwnerCapability;
    commission_percentage: U64;
    distribution_pool: Pool_u64.Pool;
    signer_cap: Account.SignerCapability;
    constructor(proto: any, typeTag: TypeTag);
    static StakingContractParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): StakingContract;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class Store {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    staking_contracts: Simple_map.SimpleMap;
    create_staking_contract_events: Event.EventHandle;
    update_voter_events: Event.EventHandle;
    reset_lockup_events: Event.EventHandle;
    add_stake_events: Event.EventHandle;
    request_commission_events: Event.EventHandle;
    unlock_stake_events: Event.EventHandle;
    switch_operator_events: Event.EventHandle;
    add_distribution_events: Event.EventHandle;
    distribute_events: Event.EventHandle;
    constructor(proto: any, typeTag: TypeTag);
    static StoreParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): Store;
    static load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]): Promise<Store>;
    static loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]): Promise<Store>;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class SwitchOperatorEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    old_operator: HexString;
    new_operator: HexString;
    pool_address: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static SwitchOperatorEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): SwitchOperatorEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class UnlockStakeEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    pool_address: HexString;
    amount: U64;
    commission_paid: U64;
    constructor(proto: any, typeTag: TypeTag);
    static UnlockStakeEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): UnlockStakeEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare class UpdateVoterEvent {
    typeTag: TypeTag;
    static moduleAddress: HexString;
    static moduleName: string;
    __app: $.AppType | null;
    static structName: string;
    static typeParameters: TypeParamDeclType[];
    static fields: FieldDeclType[];
    operator: HexString;
    pool_address: HexString;
    old_voter: HexString;
    new_voter: HexString;
    constructor(proto: any, typeTag: TypeTag);
    static UpdateVoterEventParser(data: any, typeTag: TypeTag, repo: AptosParserRepo): UpdateVoterEvent;
    static getTag(): StructTag;
    loadFullState(app: $.AppType): Promise<void>;
}
export declare function add_distribution_(operator: HexString, staking_contract: StakingContract, recipient: HexString, coins_amount: U64, add_distribution_events: Event.EventHandle, $c: AptosDataCache): Promise<void>;
export declare function add_stake_(staker: HexString, operator: HexString, amount: U64, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_add_stake(operator: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function assert_staking_contract_exists_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<void>;
export declare function commission_percentage_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<U64>;
export declare function create_stake_pool_(staker: HexString, operator: HexString, voter: HexString, contract_creation_seed: U8[], $c: AptosDataCache): Promise<[HexString, Account.SignerCapability, Stake.OwnerCapability]>;
export declare function create_staking_contract_(staker: HexString, operator: HexString, voter: HexString, amount: U64, commission_percentage: U64, contract_creation_seed: U8[], $c: AptosDataCache): Promise<void>;
export declare function buildPayload_create_staking_contract(operator: HexString, voter: HexString, amount: U64, commission_percentage: U64, contract_creation_seed: U8[], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function create_staking_contract_with_coins_(staker: HexString, operator: HexString, voter: HexString, coins: Coin.Coin, commission_percentage: U64, contract_creation_seed: U8[], $c: AptosDataCache): Promise<HexString>;
export declare function distribute_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_distribute(staker: HexString, operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function distribute_internal_(staker: HexString, operator: HexString, staking_contract: StakingContract, distribute_events: Event.EventHandle, $c: AptosDataCache): Promise<void>;
export declare function get_staking_contract_amounts_internal_(staking_contract: StakingContract, $c: AptosDataCache): Promise<[U64, U64, U64]>;
export declare function last_recorded_principal_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<U64>;
export declare function new_staking_contracts_holder_(staker: HexString, $c: AptosDataCache): Promise<Store>;
export declare function pending_distribution_counts_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<U64>;
export declare function request_commission_(account: HexString, staker: HexString, operator: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_request_commission(staker: HexString, operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function request_commission_internal_(operator: HexString, staking_contract: StakingContract, add_distribution_events: Event.EventHandle, request_commission_events: Event.EventHandle, $c: AptosDataCache): Promise<U64>;
export declare function reset_lockup_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_reset_lockup(operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function stake_pool_address_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<HexString>;
export declare function staking_contract_amounts_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<[U64, U64, U64]>;
export declare function staking_contract_exists_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<boolean>;
export declare function switch_operator_(staker: HexString, old_operator: HexString, new_operator: HexString, new_commission_percentage: U64, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_switch_operator(old_operator: HexString, new_operator: HexString, new_commission_percentage: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function switch_operator_with_same_commission_(staker: HexString, old_operator: HexString, new_operator: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_switch_operator_with_same_commission(old_operator: HexString, new_operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function unlock_rewards_(staker: HexString, operator: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_unlock_rewards(operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function unlock_stake_(staker: HexString, operator: HexString, amount: U64, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_unlock_stake(operator: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function update_distribution_pool_(distribution_pool: Pool_u64.Pool, updated_total_coins: U64, operator: HexString, commission_percentage: U64, $c: AptosDataCache): Promise<void>;
export declare function update_voter_(staker: HexString, operator: HexString, new_voter: HexString, $c: AptosDataCache): Promise<void>;
export declare function buildPayload_update_voter(operator: HexString, new_voter: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
export declare function loadParsers(repo: AptosParserRepo): void;
export declare class App {
    client: AptosClient;
    repo: AptosParserRepo;
    cache: AptosLocalCache;
    constructor(client: AptosClient, repo: AptosParserRepo, cache: AptosLocalCache);
    get moduleAddress(): HexString;
    get moduleName(): string;
    get AddDistributionEvent(): typeof AddDistributionEvent;
    get AddStakeEvent(): typeof AddStakeEvent;
    get CreateStakingContractEvent(): typeof CreateStakingContractEvent;
    get DistributeEvent(): typeof DistributeEvent;
    get RequestCommissionEvent(): typeof RequestCommissionEvent;
    get ResetLockupEvent(): typeof ResetLockupEvent;
    get StakingContract(): typeof StakingContract;
    get Store(): typeof Store;
    loadStore(owner: HexString, loadFull?: boolean, fillCache?: boolean): Promise<Store>;
    get SwitchOperatorEvent(): typeof SwitchOperatorEvent;
    get UnlockStakeEvent(): typeof UnlockStakeEvent;
    get UpdateVoterEvent(): typeof UpdateVoterEvent;
    payload_add_stake(operator: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    add_stake(_account: AptosAccount, operator: HexString, amount: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_create_staking_contract(operator: HexString, voter: HexString, amount: U64, commission_percentage: U64, contract_creation_seed: U8[], isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    create_staking_contract(_account: AptosAccount, operator: HexString, voter: HexString, amount: U64, commission_percentage: U64, contract_creation_seed: U8[], option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_distribute(staker: HexString, operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    distribute(_account: AptosAccount, staker: HexString, operator: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_request_commission(staker: HexString, operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    request_commission(_account: AptosAccount, staker: HexString, operator: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_reset_lockup(operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    reset_lockup(_account: AptosAccount, operator: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_switch_operator(old_operator: HexString, new_operator: HexString, new_commission_percentage: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    switch_operator(_account: AptosAccount, old_operator: HexString, new_operator: HexString, new_commission_percentage: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_switch_operator_with_same_commission(old_operator: HexString, new_operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    switch_operator_with_same_commission(_account: AptosAccount, old_operator: HexString, new_operator: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_unlock_rewards(operator: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    unlock_rewards(_account: AptosAccount, operator: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_unlock_stake(operator: HexString, amount: U64, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    unlock_stake(_account: AptosAccount, operator: HexString, amount: U64, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
    payload_update_voter(operator: HexString, new_voter: HexString, isJSON?: boolean): TxnBuilderTypes.TransactionPayloadEntryFunction | Types.TransactionPayload_EntryFunctionPayload;
    update_voter(_account: AptosAccount, operator: HexString, new_voter: HexString, option?: OptionTransaction, _isJSON?: boolean): Promise<Types.UserTransaction>;
}
//# sourceMappingURL=staking_contract.d.ts.map