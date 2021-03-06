/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  LedgerDigestUploads,
  LedgerDigestUploadsOperationsListByDatabaseOptionalParams,
  LedgerDigestUploadsName,
  LedgerDigestUploadsOperationsGetOptionalParams,
  LedgerDigestUploadsOperationsGetResponse,
  LedgerDigestUploadsOperationsCreateOrUpdateOptionalParams,
  LedgerDigestUploadsOperationsCreateOrUpdateResponse,
  LedgerDigestUploadsOperationsDisableOptionalParams,
  LedgerDigestUploadsOperationsDisableResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LedgerDigestUploadsOperations. */
export interface LedgerDigestUploadsOperations {
  /**
   * Gets all ledger digest upload settings on a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: LedgerDigestUploadsOperationsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<LedgerDigestUploads>;
  /**
   * Gets the current ledger digest upload configuration for a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    options?: LedgerDigestUploadsOperationsGetOptionalParams
  ): Promise<LedgerDigestUploadsOperationsGetResponse>;
  /**
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param parameters Azure SQL Database ledger digest upload settings.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    parameters: LedgerDigestUploads,
    options?: LedgerDigestUploadsOperationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LedgerDigestUploadsOperationsCreateOrUpdateResponse>,
      LedgerDigestUploadsOperationsCreateOrUpdateResponse
    >
  >;
  /**
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param parameters Azure SQL Database ledger digest upload settings.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    parameters: LedgerDigestUploads,
    options?: LedgerDigestUploadsOperationsCreateOrUpdateOptionalParams
  ): Promise<LedgerDigestUploadsOperationsCreateOrUpdateResponse>;
  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  beginDisable(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    options?: LedgerDigestUploadsOperationsDisableOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LedgerDigestUploadsOperationsDisableResponse>,
      LedgerDigestUploadsOperationsDisableResponse
    >
  >;
  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  beginDisableAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    options?: LedgerDigestUploadsOperationsDisableOptionalParams
  ): Promise<LedgerDigestUploadsOperationsDisableResponse>;
}
