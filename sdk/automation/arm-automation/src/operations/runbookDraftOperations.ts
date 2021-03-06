/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/runbookDraftOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a RunbookDraftOperations. */
export class RunbookDraftOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a RunbookDraftOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Retrieve the content of runbook draft identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookDraftGetContentResponse>
   */
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookDraftGetContentResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.RunbookDraftGetContentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      getContentOperationSpec,
      callback) as Promise<Models.RunbookDraftGetContentResponse>;
  }

  /**
   * Replaces the runbook draft content.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param runbookContent The??runbook??draft??content.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookDraftReplaceContentResponse>
   */
  replaceContent(resourceGroupName: string, automationAccountName: string, runbookName: string, runbookContent: msRest.HttpRequestBody, options?: msRest.RequestOptionsBase): Promise<Models.RunbookDraftReplaceContentResponse> {
    return this.beginReplaceContent(resourceGroupName,automationAccountName,runbookName,runbookContent,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RunbookDraftReplaceContentResponse>;
  }

  /**
   * Retrieve the runbook draft identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookDraftGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookDraftGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, callback: msRest.ServiceCallback<Models.RunbookDraft>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunbookDraft>): void;
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunbookDraft>, callback?: msRest.ServiceCallback<Models.RunbookDraft>): Promise<Models.RunbookDraftGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RunbookDraftGetResponse>;
  }

  /**
   * Undo draft edit to last known published state identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookDraftUndoEditResponse>
   */
  undoEdit(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookDraftUndoEditResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param callback The callback
   */
  undoEdit(resourceGroupName: string, automationAccountName: string, runbookName: string, callback: msRest.ServiceCallback<Models.RunbookDraftUndoEditResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The optional parameters
   * @param callback The callback
   */
  undoEdit(resourceGroupName: string, automationAccountName: string, runbookName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunbookDraftUndoEditResult>): void;
  undoEdit(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunbookDraftUndoEditResult>, callback?: msRest.ServiceCallback<Models.RunbookDraftUndoEditResult>): Promise<Models.RunbookDraftUndoEditResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      undoEditOperationSpec,
      callback) as Promise<Models.RunbookDraftUndoEditResponse>;
  }

  /**
   * Replaces the runbook draft content.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param runbookContent The??runbook??draft??content.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginReplaceContent(resourceGroupName: string, automationAccountName: string, runbookName: string, runbookContent: msRest.HttpRequestBody, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        runbookContent,
        options
      },
      beginReplaceContentOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunbookDraft
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const undoEditOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/undoEdit",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunbookDraftUndoEditResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginReplaceContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "runbookContent",
    mapper: {
      required: true,
      serializedName: "runbookContent",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "text/powershell",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      },
      headersMapper: Mappers.RunbookDraftReplaceContentHeaders
    },
    202: {
      headersMapper: Mappers.RunbookDraftReplaceContentHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
