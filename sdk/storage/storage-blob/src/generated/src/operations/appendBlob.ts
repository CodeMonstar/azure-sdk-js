/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";
import {
  AppendBlobCreateOptionalParams,
  AppendBlobCreateResponse,
  AppendBlobAppendBlockOptionalParams,
  AppendBlobAppendBlockResponse,
  AppendBlobAppendBlockFromUrlOptionalParams,
  AppendBlobAppendBlockFromUrlResponse,
  AppendBlobSealOptionalParams,
  AppendBlobSealResponse
} from "../models";

/** Class representing a AppendBlob. */
export class AppendBlob {
  private readonly client: StorageClientContext;

  /**
   * Initialize a new instance of the class AppendBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * The Create Append Blob operation creates a new append blob.
   * @param contentLength The length of the request.
   * @param options The options parameters.
   */
  create(
    contentLength: number,
    options?: AppendBlobCreateOptionalParams
  ): Promise<AppendBlobCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<AppendBlobCreateResponse>;
  }

  /**
   * The Append Block operation commits a new block of data to the end of an existing append blob. The
   * Append Block operation is permitted only if the blob was created with x-ms-blob-type set to
   * AppendBlob. Append Block is supported only on version 2015-02-21 version or later.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  appendBlock(
    contentLength: number,
    body: coreHttp.HttpRequestBody,
    options?: AppendBlobAppendBlockOptionalParams
  ): Promise<AppendBlobAppendBlockResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      appendBlockOperationSpec
    ) as Promise<AppendBlobAppendBlockResponse>;
  }

  /**
   * The Append Block operation commits a new block of data to the end of an existing append blob where
   * the contents are read from a source url. The Append Block operation is permitted only if the blob
   * was created with x-ms-blob-type set to AppendBlob. Append Block is supported only on version
   * 2015-02-21 version or later.
   * @param sourceUrl Specify a URL to the copy source.
   * @param contentLength The length of the request.
   * @param options The options parameters.
   */
  appendBlockFromUrl(
    sourceUrl: string,
    contentLength: number,
    options?: AppendBlobAppendBlockFromUrlOptionalParams
  ): Promise<AppendBlobAppendBlockFromUrlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      sourceUrl,
      contentLength,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      appendBlockFromUrlOperationSpec
    ) as Promise<AppendBlobAppendBlockFromUrlResponse>;
  }

  /**
   * The Seal operation seals the Append Blob to make it read-only. Seal is supported only on version
   * 2019-12-12 version or later.
   * @param options The options parameters.
   */
  seal(
    options?: AppendBlobSealOptionalParams
  ): Promise<AppendBlobSealResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      sealOperationSpec
    ) as Promise<AppendBlobSealResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.AppendBlobCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.blobCacheControl,
    Parameters.blobContentType,
    Parameters.blobContentMD5,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentDisposition,
    Parameters.immutabilityPolicyExpiry,
    Parameters.immutabilityPolicyMode,
    Parameters.encryptionScope,
    Parameters.blobTagsString,
    Parameters.legalHold1,
    Parameters.blobType1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const appendBlockOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.AppendBlobAppendBlockHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobAppendBlockExceptionHeaders
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp22],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.contentType1,
    Parameters.accept2,
    Parameters.maxSize,
    Parameters.appendPosition
  ],
  mediaType: "binary",
  serializer
};
const appendBlockFromUrlOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.AppendBlobAppendBlockFromUrlHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobAppendBlockFromUrlExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp22],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.sourceContentMD5,
    Parameters.copySourceAuthorization,
    Parameters.transactionalContentMD5,
    Parameters.sourceUrl,
    Parameters.sourceContentCrc64,
    Parameters.maxSize,
    Parameters.appendPosition,
    Parameters.sourceRange1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const sealOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.AppendBlobSealHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobSealExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp23],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.appendPosition
  ],
  isXML: true,
  serializer: xmlSerializer
};
