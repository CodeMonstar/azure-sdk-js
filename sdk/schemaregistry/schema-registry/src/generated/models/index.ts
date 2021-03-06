/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** JSON Object received from the registry containing schema identifiers. */
export interface SchemaId {
  /** Schema ID that uniquely identifies a schema in the registry namespace. */
  id?: string;
}

/** Defines headers for Schema_getById operation. */
export interface SchemaGetByIdHeaders {
  /** URL location of schema, identified by schema group, schema name, and version. */
  location?: string;
  /** Serialization type for the schema being stored. */
  serializationType?: string;
  /** References specific schema in registry namespace. */
  schemaId?: string;
  /** URL location of schema, identified by schema ID. */
  schemaIdLocation?: string;
  /** Version of the returned schema. */
  schemaVersion?: number;
}

/** Defines headers for Schema_queryIdByContent operation. */
export interface SchemaQueryIdByContentHeaders {
  /** URL location of schema, identified by schema group, schema name, and version. */
  location?: string;
  /** Serialization type for the schema being stored. */
  serializationType?: string;
  /** References specific schema in registry namespace. */
  schemaId?: string;
  /** URL location of schema, identified by schema ID. */
  schemaIdLocation?: string;
  /** Version of the returned schema. */
  schemaVersion?: number;
}

/** Defines headers for Schema_register operation. */
export interface SchemaRegisterHeaders {
  /** URL location of schema, identified by schema group, schema name, and version. */
  location?: string;
  /** Serialization type for the schema being registered. */
  serializationType?: string;
  /** References specific schema in registry namespace. */
  schemaId?: string;
  /** URL location of schema, identified by schema ID. */
  schemaIdLocation?: string;
  /** Version of the returned schema. */
  schemaVersion?: number;
}

/** Known values of {@link SerializationType} that the service accepts. */
export const enum KnownSerializationType {
  /** Avro Serialization schema type */
  Avro = "avro"
}

/**
 * Defines values for SerializationType. \
 * {@link KnownSerializationType} can be used interchangeably with SerializationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **avro**: Avro Serialization schema type
 */
export type SerializationType = string;

/** Optional parameters. */
export interface SchemaGetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getById operation. */
export type SchemaGetByIdResponse = SchemaGetByIdHeaders & {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface SchemaQueryIdByContentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryIdByContent operation. */
export type SchemaQueryIdByContentResponse = SchemaQueryIdByContentHeaders &
  SchemaId;

/** Optional parameters. */
export interface SchemaRegisterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the register operation. */
export type SchemaRegisterResponse = SchemaRegisterHeaders & SchemaId;

/** Optional parameters. */
export interface GeneratedSchemaRegistryClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
