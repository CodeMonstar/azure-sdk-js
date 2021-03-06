## API Report File for "@azure/synapse-spark"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';

// @public
export enum KnownPluginCurrentState {
    // (undocumented)
    Cleanup = "Cleanup",
    // (undocumented)
    Ended = "Ended",
    // (undocumented)
    Monitoring = "Monitoring",
    // (undocumented)
    Preparation = "Preparation",
    // (undocumented)
    Queued = "Queued",
    // (undocumented)
    ResourceAcquisition = "ResourceAcquisition",
    // (undocumented)
    Submission = "Submission"
}

// @public
export enum KnownSchedulerCurrentState {
    // (undocumented)
    Ended = "Ended",
    // (undocumented)
    Queued = "Queued",
    // (undocumented)
    Scheduled = "Scheduled"
}

// @public
export enum KnownSparkBatchJobResultType {
    // (undocumented)
    Cancelled = "Cancelled",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Succeeded = "Succeeded",
    // (undocumented)
    Uncertain = "Uncertain"
}

// @public
export enum KnownSparkErrorSource {
    // (undocumented)
    Dependency = "Dependency",
    // (undocumented)
    System = "System",
    // (undocumented)
    Unknown = "Unknown",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownSparkJobType {
    // (undocumented)
    SparkBatch = "SparkBatch",
    // (undocumented)
    SparkSession = "SparkSession"
}

// @public
export enum KnownSparkSessionResultType {
    // (undocumented)
    Cancelled = "Cancelled",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Succeeded = "Succeeded",
    // (undocumented)
    Uncertain = "Uncertain"
}

// @public
export enum KnownSparkStatementLanguageType {
    // (undocumented)
    DotNetSpark = "dotnetspark",
    // (undocumented)
    PySpark = "pyspark",
    // (undocumented)
    Spark = "spark",
    // (undocumented)
    Sql = "sql"
}

// @public
export type PluginCurrentState = string;

// @public
export type SchedulerCurrentState = string;

// @public
export interface SparkBatch {
    cancelSparkBatchJob(batchId: number, options?: SparkBatchCancelSparkBatchJobOptionalParams): Promise<void>;
    createSparkBatchJob(sparkBatchJobOptions: SparkBatchJobOptions, options?: SparkBatchCreateSparkBatchJobOptionalParams): Promise<SparkBatchCreateSparkBatchJobResponse>;
    getSparkBatchJob(batchId: number, options?: SparkBatchGetSparkBatchJobOptionalParams): Promise<SparkBatchGetSparkBatchJobResponse>;
    getSparkBatchJobs(options?: SparkBatchGetSparkBatchJobsOptionalParams): Promise<SparkBatchGetSparkBatchJobsResponse>;
}

// @public
export interface SparkBatchCancelSparkBatchJobOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface SparkBatchCreateSparkBatchJobOptionalParams extends coreClient.OperationOptions {
    detailed?: boolean;
}

// @public
export type SparkBatchCreateSparkBatchJobResponse = SparkBatchJob;

// @public
export interface SparkBatchGetSparkBatchJobOptionalParams extends coreClient.OperationOptions {
    detailed?: boolean;
}

// @public
export type SparkBatchGetSparkBatchJobResponse = SparkBatchJob;

// @public
export interface SparkBatchGetSparkBatchJobsOptionalParams extends coreClient.OperationOptions {
    detailed?: boolean;
    fromParam?: number;
    size?: number;
}

// @public
export type SparkBatchGetSparkBatchJobsResponse = SparkBatchJobCollection;

// @public (undocumented)
export interface SparkBatchJob {
    appId?: string;
    appInfo?: {
        [propertyName: string]: string;
    };
    artifactId?: string;
    errors?: SparkServiceError[];
    id: number;
    jobType?: SparkJobType;
    // (undocumented)
    livyInfo?: SparkBatchJobState;
    logLines?: string[];
    name?: string;
    plugin?: SparkServicePlugin;
    result?: SparkBatchJobResultType;
    scheduler?: SparkScheduler;
    sparkPoolName?: string;
    state?: string;
    submitterId?: string;
    submitterName?: string;
    tags?: {
        [propertyName: string]: string;
    };
    workspaceName?: string;
}

// @public
export interface SparkBatchJobCollection {
    from: number;
    sessions?: SparkBatchJob[];
    total: number;
}

// @public (undocumented)
export interface SparkBatchJobOptions {
    // (undocumented)
    archives?: string[];
    // (undocumented)
    arguments?: string[];
    // (undocumented)
    artifactId?: string;
    // (undocumented)
    className?: string;
    configuration?: {
        [propertyName: string]: string;
    };
    // (undocumented)
    driverCores?: number;
    // (undocumented)
    driverMemory?: string;
    // (undocumented)
    executorCores?: number;
    // (undocumented)
    executorCount?: number;
    // (undocumented)
    executorMemory?: string;
    // (undocumented)
    file: string;
    // (undocumented)
    files?: string[];
    // (undocumented)
    jars?: string[];
    // (undocumented)
    name: string;
    // (undocumented)
    pythonFiles?: string[];
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type SparkBatchJobResultType = string;

// @public (undocumented)
export interface SparkBatchJobState {
    currentState?: string;
    deadAt?: Date;
    // (undocumented)
    jobCreationRequest?: SparkRequest;
    notStartedAt?: Date;
    recoveringAt?: Date;
    runningAt?: Date;
    startingAt?: Date;
    successAt?: Date;
    terminatedAt?: Date;
}

// @public (undocumented)
export class SparkClient extends SparkClientContext {
    constructor(credentials: coreAuth.TokenCredential, endpoint: string, sparkPoolName: string, options?: SparkClientOptionalParams);
    // (undocumented)
    sparkBatch: SparkBatch;
    // (undocumented)
    sparkSessionOperations: SparkSessionOperations;
}

// @public (undocumented)
export class SparkClientContext extends coreClient.ServiceClient {
    constructor(credentials: coreAuth.TokenCredential, endpoint: string, sparkPoolName: string, options?: SparkClientOptionalParams);
    // (undocumented)
    endpoint: string;
    // (undocumented)
    livyApiVersion: string;
    // (undocumented)
    sparkPoolName: string;
}

// @public
export interface SparkClientOptionalParams extends coreClient.ServiceClientOptions {
    endpoint?: string;
    livyApiVersion?: string;
}

// @public
export type SparkErrorSource = string;

// @public
export type SparkJobType = string;

// @public (undocumented)
export interface SparkRequest {
    // (undocumented)
    archives?: string[];
    // (undocumented)
    arguments?: string[];
    // (undocumented)
    className?: string;
    configuration?: {
        [propertyName: string]: string;
    };
    // (undocumented)
    driverCores?: number;
    // (undocumented)
    driverMemory?: string;
    // (undocumented)
    executorCores?: number;
    // (undocumented)
    executorCount?: number;
    // (undocumented)
    executorMemory?: string;
    // (undocumented)
    file?: string;
    // (undocumented)
    files?: string[];
    // (undocumented)
    jars?: string[];
    // (undocumented)
    name?: string;
    // (undocumented)
    pythonFiles?: string[];
}

// @public (undocumented)
export interface SparkScheduler {
    // (undocumented)
    cancellationRequestedAt?: Date;
    // (undocumented)
    currentState?: SchedulerCurrentState;
    // (undocumented)
    endedAt?: Date;
    // (undocumented)
    scheduledAt?: Date;
    // (undocumented)
    submittedAt?: Date;
}

// @public (undocumented)
export interface SparkServiceError {
    // (undocumented)
    errorCode?: string;
    // (undocumented)
    message?: string;
    // (undocumented)
    source?: SparkErrorSource;
}

// @public (undocumented)
export interface SparkServicePlugin {
    // (undocumented)
    cleanupStartedAt?: Date;
    // (undocumented)
    currentState?: PluginCurrentState;
    // (undocumented)
    monitoringStartedAt?: Date;
    // (undocumented)
    preparationStartedAt?: Date;
    // (undocumented)
    resourceAcquisitionStartedAt?: Date;
    // (undocumented)
    submissionStartedAt?: Date;
}

// @public (undocumented)
export interface SparkSession {
    // (undocumented)
    appId?: string;
    appInfo?: {
        [propertyName: string]: string;
    };
    // (undocumented)
    artifactId?: string;
    // (undocumented)
    errors?: SparkServiceError[];
    // (undocumented)
    id: number;
    jobType?: SparkJobType;
    // (undocumented)
    livyInfo?: SparkSessionState;
    // (undocumented)
    logLines?: string[];
    // (undocumented)
    name?: string;
    // (undocumented)
    plugin?: SparkServicePlugin;
    // (undocumented)
    result?: SparkSessionResultType;
    // (undocumented)
    scheduler?: SparkScheduler;
    // (undocumented)
    sparkPoolName?: string;
    // (undocumented)
    state?: string;
    // (undocumented)
    submitterId?: string;
    // (undocumented)
    submitterName?: string;
    tags?: {
        [propertyName: string]: string;
    };
    // (undocumented)
    workspaceName?: string;
}

// @public (undocumented)
export interface SparkSessionCollection {
    // (undocumented)
    from: number;
    // (undocumented)
    sessions?: SparkSession[];
    // (undocumented)
    total: number;
}

// @public
export interface SparkSessionOperations {
    cancelSparkSession(sessionId: number, options?: SparkSessionOperationsCancelSparkSessionOptionalParams): Promise<void>;
    cancelSparkStatement(sessionId: number, statementId: number, options?: SparkSessionOperationsCancelSparkStatementOptionalParams): Promise<SparkSessionOperationsCancelSparkStatementResponse>;
    createSparkSession(sparkSessionOptions: SparkSessionOptions, options?: SparkSessionOperationsCreateSparkSessionOptionalParams): Promise<SparkSessionOperationsCreateSparkSessionResponse>;
    createSparkStatement(sessionId: number, sparkStatementOptions: SparkStatementOptions, options?: SparkSessionOperationsCreateSparkStatementOptionalParams): Promise<SparkSessionOperationsCreateSparkStatementResponse>;
    getSparkSession(sessionId: number, options?: SparkSessionOperationsGetSparkSessionOptionalParams): Promise<SparkSessionOperationsGetSparkSessionResponse>;
    getSparkSessions(options?: SparkSessionOperationsGetSparkSessionsOptionalParams): Promise<SparkSessionOperationsGetSparkSessionsResponse>;
    getSparkStatement(sessionId: number, statementId: number, options?: SparkSessionOperationsGetSparkStatementOptionalParams): Promise<SparkSessionOperationsGetSparkStatementResponse>;
    getSparkStatements(sessionId: number, options?: SparkSessionOperationsGetSparkStatementsOptionalParams): Promise<SparkSessionOperationsGetSparkStatementsResponse>;
    resetSparkSessionTimeout(sessionId: number, options?: SparkSessionOperationsResetSparkSessionTimeoutOptionalParams): Promise<void>;
}

// @public
export interface SparkSessionOperationsCancelSparkSessionOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface SparkSessionOperationsCancelSparkStatementOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SparkSessionOperationsCancelSparkStatementResponse = SparkStatementCancellationResult;

// @public
export interface SparkSessionOperationsCreateSparkSessionOptionalParams extends coreClient.OperationOptions {
    detailed?: boolean;
}

// @public
export type SparkSessionOperationsCreateSparkSessionResponse = SparkSession;

// @public
export interface SparkSessionOperationsCreateSparkStatementOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SparkSessionOperationsCreateSparkStatementResponse = SparkStatement;

// @public
export interface SparkSessionOperationsGetSparkSessionOptionalParams extends coreClient.OperationOptions {
    detailed?: boolean;
}

// @public
export type SparkSessionOperationsGetSparkSessionResponse = SparkSession;

// @public
export interface SparkSessionOperationsGetSparkSessionsOptionalParams extends coreClient.OperationOptions {
    detailed?: boolean;
    fromParam?: number;
    size?: number;
}

// @public
export type SparkSessionOperationsGetSparkSessionsResponse = SparkSessionCollection;

// @public
export interface SparkSessionOperationsGetSparkStatementOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SparkSessionOperationsGetSparkStatementResponse = SparkStatement;

// @public
export interface SparkSessionOperationsGetSparkStatementsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SparkSessionOperationsGetSparkStatementsResponse = SparkStatementCollection;

// @public
export interface SparkSessionOperationsResetSparkSessionTimeoutOptionalParams extends coreClient.OperationOptions {
}

// @public (undocumented)
export interface SparkSessionOptions {
    // (undocumented)
    archives?: string[];
    // (undocumented)
    arguments?: string[];
    // (undocumented)
    artifactId?: string;
    // (undocumented)
    className?: string;
    configuration?: {
        [propertyName: string]: string;
    };
    // (undocumented)
    driverCores?: number;
    // (undocumented)
    driverMemory?: string;
    // (undocumented)
    executorCores?: number;
    // (undocumented)
    executorCount?: number;
    // (undocumented)
    executorMemory?: string;
    // (undocumented)
    file?: string;
    // (undocumented)
    files?: string[];
    // (undocumented)
    jars?: string[];
    // (undocumented)
    name: string;
    // (undocumented)
    pythonFiles?: string[];
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type SparkSessionResultType = string;

// @public (undocumented)
export interface SparkSessionState {
    // (undocumented)
    busyAt?: Date;
    // (undocumented)
    currentState?: string;
    // (undocumented)
    deadAt?: Date;
    // (undocumented)
    errorAt?: Date;
    // (undocumented)
    idleAt?: Date;
    // (undocumented)
    jobCreationRequest?: SparkRequest;
    // (undocumented)
    notStartedAt?: Date;
    // (undocumented)
    recoveringAt?: Date;
    // (undocumented)
    shuttingDownAt?: Date;
    // (undocumented)
    startingAt?: Date;
    // (undocumented)
    terminatedAt?: Date;
}

// @public (undocumented)
export interface SparkStatement {
    // (undocumented)
    code?: string;
    // (undocumented)
    id: number;
    // (undocumented)
    output?: SparkStatementOutput;
    // (undocumented)
    state?: string;
}

// @public (undocumented)
export interface SparkStatementCancellationResult {
    message?: string;
}

// @public (undocumented)
export interface SparkStatementCollection {
    // (undocumented)
    statements?: SparkStatement[];
    // (undocumented)
    total: number;
}

// @public
export type SparkStatementLanguageType = string;

// @public (undocumented)
export interface SparkStatementOptions {
    // (undocumented)
    code?: string;
    // (undocumented)
    kind?: SparkStatementLanguageType;
}

// @public (undocumented)
export interface SparkStatementOutput {
    data?: Record<string, unknown>;
    // (undocumented)
    errorName?: string;
    // (undocumented)
    errorValue?: string;
    // (undocumented)
    executionCount: number;
    // (undocumented)
    status?: string;
    // (undocumented)
    traceback?: string[];
}


// (No @packageDocumentation comment for this package)

```
