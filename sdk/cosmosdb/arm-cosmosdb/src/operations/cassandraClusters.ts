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
import * as Mappers from "../models/cassandraClustersMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a CassandraClusters. */
export class CassandraClusters {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a CassandraClusters.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * List all managed Cassandra clusters in this subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.CassandraClustersListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.CassandraClustersListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.ListClusters>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListClusters>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListClusters>, callback?: msRest.ServiceCallback<Models.ListClusters>): Promise<Models.CassandraClustersListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.CassandraClustersListBySubscriptionResponse>;
  }

  /**
   * List all managed Cassandra clusters in this resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.CassandraClustersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.CassandraClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ListClusters>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListClusters>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListClusters>, callback?: msRest.ServiceCallback<Models.ListClusters>): Promise<Models.CassandraClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.CassandraClustersListByResourceGroupResponse>;
  }

  /**
   * Get the properties of a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<Models.CassandraClustersGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.CassandraClustersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.ClusterResource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterResource>): void;
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterResource>, callback?: msRest.ServiceCallback<Models.ClusterResource>): Promise<Models.CassandraClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CassandraClustersGetResponse>;
  }

  /**
   * Deletes a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create or update a managed Cassandra cluster. When updating, you must specify all writable
   * properties. To update only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body The properties specifying the desired state of the managed Cassandra cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.CassandraClustersCreateUpdateResponse>
   */
  createUpdate(resourceGroupName: string, clusterName: string, body: Models.ClusterResource, options?: msRest.RequestOptionsBase): Promise<Models.CassandraClustersCreateUpdateResponse> {
    return this.beginCreateUpdate(resourceGroupName,clusterName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CassandraClustersCreateUpdateResponse>;
  }

  /**
   * Updates some of the properties of a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Parameters to provide for specifying the managed Cassandra cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.CassandraClustersUpdateResponse>
   */
  update(resourceGroupName: string, clusterName: string, body: Models.ClusterResource, options?: msRest.RequestOptionsBase): Promise<Models.CassandraClustersUpdateResponse> {
    return this.beginUpdate(resourceGroupName,clusterName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CassandraClustersUpdateResponse>;
  }

  /**
   * Invoke a command like nodetool for cassandra maintenance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Specification which command to run where
   * @param [options] The optional parameters
   * @returns Promise<Models.CassandraClustersInvokeCommandResponse>
   */
  invokeCommand(resourceGroupName: string, clusterName: string, body: Models.CommandPostBody, options?: msRest.RequestOptionsBase): Promise<Models.CassandraClustersInvokeCommandResponse> {
    return this.beginInvokeCommand(resourceGroupName,clusterName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CassandraClustersInvokeCommandResponse>;
  }

  /**
   * Deallocate the Managed Cassandra Cluster and Associated Data Centers. Deallocation will
   * deallocate the host virtual machine of this cluster, and reserved the data disk. This won't do
   * anything on an already deallocated cluster. Use Start to restart the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deallocate(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeallocate(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Start the Managed Cassandra Cluster and Associated Data Centers. Start will start the host
   * virtual machine of this cluster with reserved data disk. This won't do anything on an already
   * running cluster. Use Deallocate to deallocate the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the CPU, memory, and disk usage statistics for each Cassandra node in a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<Models.CassandraClustersStatusResponse>
   */
  status(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.CassandraClustersStatusResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param callback The callback
   */
  status(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.CassandraClusterPublicStatus>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The optional parameters
   * @param callback The callback
   */
  status(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CassandraClusterPublicStatus>): void;
  status(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CassandraClusterPublicStatus>, callback?: msRest.ServiceCallback<Models.CassandraClusterPublicStatus>): Promise<Models.CassandraClustersStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      statusOperationSpec,
      callback) as Promise<Models.CassandraClustersStatusResponse>;
  }

  /**
   * Deletes a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Create or update a managed Cassandra cluster. When updating, you must specify all writable
   * properties. To update only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body The properties specifying the desired state of the managed Cassandra cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateUpdate(resourceGroupName: string, clusterName: string, body: Models.ClusterResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        body,
        options
      },
      beginCreateUpdateOperationSpec,
      options);
  }

  /**
   * Updates some of the properties of a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Parameters to provide for specifying the managed Cassandra cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, clusterName: string, body: Models.ClusterResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        body,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Invoke a command like nodetool for cassandra maintenance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Specification which command to run where
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginInvokeCommand(resourceGroupName: string, clusterName: string, body: Models.CommandPostBody, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        body,
        options
      },
      beginInvokeCommandOperationSpec,
      options);
  }

  /**
   * Deallocate the Managed Cassandra Cluster and Associated Data Centers. Deallocation will
   * deallocate the host virtual machine of this cluster, and reserved the data disk. This won't do
   * anything on an already deallocated cluster. Use Start to restart the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeallocate(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDeallocateOperationSpec,
      options);
  }

  /**
   * Start the Managed Cassandra Cluster and Associated Data Centers. Start will start the host
   * virtual machine of this cluster with reserved data disk. This won't do anything on an already
   * running cluster. Use Deallocate to deallocate the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginStartOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/cassandraClusters",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListClusters
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListClusters
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const statusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/status",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CassandraClusterPublicStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ClusterResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ClusterResource
    },
    201: {
      bodyMapper: Mappers.ClusterResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ClusterResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ClusterResource
    },
    202: {
      bodyMapper: Mappers.ClusterResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginInvokeCommandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/invokeCommand",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.CommandPostBody,
      required: true
    }
  },
  responses: {
    202: {
      bodyMapper: Mappers.CommandOutput
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeallocateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/deallocate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
