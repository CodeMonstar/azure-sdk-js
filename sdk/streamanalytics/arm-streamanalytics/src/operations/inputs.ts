/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/inputsMappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";

/** Class representing a Inputs. */
export class Inputs {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Create a Inputs.
   * @param {StreamAnalyticsManagementClientContext} client Reference to the service client.
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates an input or replaces an already existing input under an existing streaming job.
   * @param input The definition of the input that will be used to create a new input or replace the
   * existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param [options] The optional parameters
   * @returns Promise<Models.InputsCreateOrReplaceResponse>
   */
  createOrReplace(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, options?: Models.InputsCreateOrReplaceOptionalParams): Promise<Models.InputsCreateOrReplaceResponse>;
  /**
   * @param input The definition of the input that will be used to create a new input or replace the
   * existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param callback The callback
   */
  createOrReplace(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, callback: msRest.ServiceCallback<Models.Input>): void;
  /**
   * @param input The definition of the input that will be used to create a new input or replace the
   * existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrReplace(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, options: Models.InputsCreateOrReplaceOptionalParams, callback: msRest.ServiceCallback<Models.Input>): void;
  createOrReplace(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, options?: Models.InputsCreateOrReplaceOptionalParams | msRest.ServiceCallback<Models.Input>, callback?: msRest.ServiceCallback<Models.Input>): Promise<Models.InputsCreateOrReplaceResponse> {
    return this.client.sendOperationRequest(
      {
        input,
        resourceGroupName,
        jobName,
        inputName,
        options
      },
      createOrReplaceOperationSpec,
      callback) as Promise<Models.InputsCreateOrReplaceResponse>;
  }

  /**
   * Updates an existing input under an existing streaming job. This can be used to partially update
   * (ie. update one or two properties) an input without affecting the rest the job or input
   * definition.
   * @param input An Input object. The properties specified here will overwrite the corresponding
   * properties in the existing input (ie. Those properties will be updated). Any properties that are
   * set to null here will mean that the corresponding property in the existing input will remain the
   * same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param [options] The optional parameters
   * @returns Promise<Models.InputsUpdateResponse>
   */
  update(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, options?: Models.InputsUpdateOptionalParams): Promise<Models.InputsUpdateResponse>;
  /**
   * @param input An Input object. The properties specified here will overwrite the corresponding
   * properties in the existing input (ie. Those properties will be updated). Any properties that are
   * set to null here will mean that the corresponding property in the existing input will remain the
   * same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param callback The callback
   */
  update(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, callback: msRest.ServiceCallback<Models.Input>): void;
  /**
   * @param input An Input object. The properties specified here will overwrite the corresponding
   * properties in the existing input (ie. Those properties will be updated). Any properties that are
   * set to null here will mean that the corresponding property in the existing input will remain the
   * same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, options: Models.InputsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Input>): void;
  update(input: Models.Input, resourceGroupName: string, jobName: string, inputName: string, options?: Models.InputsUpdateOptionalParams | msRest.ServiceCallback<Models.Input>, callback?: msRest.ServiceCallback<Models.Input>): Promise<Models.InputsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        input,
        resourceGroupName,
        jobName,
        inputName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.InputsUpdateResponse>;
  }

  /**
   * Deletes an input from the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, jobName: string, inputName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jobName: string, inputName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jobName: string, inputName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, jobName: string, inputName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        inputName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets details about the specified input.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param [options] The optional parameters
   * @returns Promise<Models.InputsGetResponse>
   */
  get(resourceGroupName: string, jobName: string, inputName: string, options?: msRest.RequestOptionsBase): Promise<Models.InputsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, inputName: string, callback: msRest.ServiceCallback<Models.Input>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, inputName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Input>): void;
  get(resourceGroupName: string, jobName: string, inputName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Input>, callback?: msRest.ServiceCallback<Models.Input>): Promise<Models.InputsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        inputName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InputsGetResponse>;
  }

  /**
   * Lists all of the inputs under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<Models.InputsListByStreamingJobResponse>
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, options?: Models.InputsListByStreamingJobOptionalParams): Promise<Models.InputsListByStreamingJobResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param callback The callback
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, callback: msRest.ServiceCallback<Models.InputListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, options: Models.InputsListByStreamingJobOptionalParams, callback: msRest.ServiceCallback<Models.InputListResult>): void;
  listByStreamingJob(resourceGroupName: string, jobName: string, options?: Models.InputsListByStreamingJobOptionalParams | msRest.ServiceCallback<Models.InputListResult>, callback?: msRest.ServiceCallback<Models.InputListResult>): Promise<Models.InputsListByStreamingJobResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        options
      },
      listByStreamingJobOperationSpec,
      callback) as Promise<Models.InputsListByStreamingJobResponse>;
  }

  /**
   * Tests whether an input???s datasource is reachable and usable by the Azure Stream Analytics
   * service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param [options] The optional parameters
   * @returns Promise<Models.InputsTestResponse>
   */
  test(resourceGroupName: string, jobName: string, inputName: string, options?: Models.InputsTestOptionalParams): Promise<Models.InputsTestResponse> {
    return this.beginTest(resourceGroupName,jobName,inputName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InputsTestResponse>;
  }

  /**
   * Tests whether an input???s datasource is reachable and usable by the Azure Stream Analytics
   * service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param inputName The name of the input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTest(resourceGroupName: string, jobName: string, inputName: string, options?: Models.InputsBeginTestOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        jobName,
        inputName,
        options
      },
      beginTestOperationSpec,
      options);
  }

  /**
   * Lists all of the inputs under the specified streaming job.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InputsListByStreamingJobNextResponse>
   */
  listByStreamingJobNext(nextPageLink: string, options?: Models.InputsListByStreamingJobNextOptionalParams): Promise<Models.InputsListByStreamingJobNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByStreamingJobNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InputListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStreamingJobNext(nextPageLink: string, options: Models.InputsListByStreamingJobNextOptionalParams, callback: msRest.ServiceCallback<Models.InputListResult>): void;
  listByStreamingJobNext(nextPageLink: string, options?: Models.InputsListByStreamingJobNextOptionalParams | msRest.ServiceCallback<Models.InputListResult>, callback?: msRest.ServiceCallback<Models.InputListResult>): Promise<Models.InputsListByStreamingJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByStreamingJobNextOperationSpec,
      callback) as Promise<Models.InputsListByStreamingJobNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrReplaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.inputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.Input,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Input,
      headersMapper: Mappers.InputsCreateOrReplaceHeaders
    },
    201: {
      bodyMapper: Mappers.Input,
      headersMapper: Mappers.InputsCreateOrReplaceHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.InputsCreateOrReplaceHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.inputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.Input,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Input,
      headersMapper: Mappers.InputsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.InputsUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.inputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.inputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Input,
      headersMapper: Mappers.InputsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.InputsGetHeaders
    }
  },
  serializer
};

const listByStreamingJobOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InputListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginTestOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}/test",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.inputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "input"
    ],
    mapper: Mappers.Input
  },
  responses: {
    200: {
      bodyMapper: Mappers.ResourceTestStatus
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByStreamingJobNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InputListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
