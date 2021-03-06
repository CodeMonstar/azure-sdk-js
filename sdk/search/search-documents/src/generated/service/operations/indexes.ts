/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Indexes } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchServiceClientContext } from "../searchServiceClientContext";
import {
  SearchIndex,
  IndexesCreateOptionalParams,
  IndexesCreateResponse,
  IndexesListOptionalParams,
  IndexesListResponse,
  IndexesCreateOrUpdateOptionalParams,
  IndexesCreateOrUpdateResponse,
  IndexesDeleteOptionalParams,
  IndexesGetOptionalParams,
  IndexesGetResponse,
  IndexesGetStatisticsOptionalParams,
  IndexesGetStatisticsResponse,
  AnalyzeRequest,
  IndexesAnalyzeOptionalParams,
  IndexesAnalyzeResponse
} from "../models";

/** Class representing a Indexes. */
export class IndexesImpl implements Indexes {
  private readonly client: SearchServiceClientContext;

  /**
   * Initialize a new instance of the class Indexes class.
   * @param client Reference to the service client
   */
  constructor(client: SearchServiceClientContext) {
    this.client = client;
  }

  /**
   * Creates a new search index.
   * @param index The definition of the index to create.
   * @param options The options parameters.
   */
  create(
    index: SearchIndex,
    options?: IndexesCreateOptionalParams
  ): Promise<IndexesCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      index,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<IndexesCreateResponse>;
  }

  /**
   * Lists all indexes available for a search service.
   * @param options The options parameters.
   */
  list(options?: IndexesListOptionalParams): Promise<IndexesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<IndexesListResponse>;
  }

  /**
   * Creates a new search index or updates an index if it already exists.
   * @param indexName The definition of the index to create or update.
   * @param index The definition of the index to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    indexName: string,
    index: SearchIndex,
    options?: IndexesCreateOrUpdateOptionalParams
  ): Promise<IndexesCreateOrUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      indexName,
      index,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateOperationSpec
    ) as Promise<IndexesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a search index and all the documents it contains. This operation is permanent, with no
   * recovery option. Make sure you have a master copy of your index definition, data ingestion code, and
   * a backup of the primary data source in case you need to re-build the index.
   * @param indexName The name of the index to delete.
   * @param options The options parameters.
   */
  delete(
    indexName: string,
    options?: IndexesDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      indexName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Retrieves an index definition.
   * @param indexName The name of the index to retrieve.
   * @param options The options parameters.
   */
  get(
    indexName: string,
    options?: IndexesGetOptionalParams
  ): Promise<IndexesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      indexName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<IndexesGetResponse>;
  }

  /**
   * Returns statistics for the given index, including a document count and storage usage.
   * @param indexName The name of the index for which to retrieve statistics.
   * @param options The options parameters.
   */
  getStatistics(
    indexName: string,
    options?: IndexesGetStatisticsOptionalParams
  ): Promise<IndexesGetStatisticsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      indexName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getStatisticsOperationSpec
    ) as Promise<IndexesGetStatisticsResponse>;
  }

  /**
   * Shows how an analyzer breaks text into tokens.
   * @param indexName The name of the index for which to test an analyzer.
   * @param request The text and analyzer or analysis components to test.
   * @param options The options parameters.
   */
  analyze(
    indexName: string,
    request: AnalyzeRequest,
    options?: IndexesAnalyzeOptionalParams
  ): Promise<IndexesAnalyzeResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      indexName,
      request,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      analyzeOperationSpec
    ) as Promise<IndexesAnalyzeResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/indexes",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SearchIndex
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.index,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.xMsClientRequestId
  ],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/indexes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListIndexesResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path: "/indexes('{indexName}')",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndex
    },
    201: {
      bodyMapper: Mappers.SearchIndex
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.index,
  queryParameters: [Parameters.apiVersion, Parameters.allowIndexDowntime],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.prefer
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/indexes('{indexName}')",
  httpMethod: "DELETE",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/indexes('{indexName}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndex
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const getStatisticsOperationSpec: coreHttp.OperationSpec = {
  path: "/indexes('{indexName}')/search.stats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetIndexStatisticsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const analyzeOperationSpec: coreHttp.OperationSpec = {
  path: "/indexes('{indexName}')/search.analyze",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AnalyzeResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.xMsClientRequestId
  ],
  mediaType: "json",
  serializer
};
