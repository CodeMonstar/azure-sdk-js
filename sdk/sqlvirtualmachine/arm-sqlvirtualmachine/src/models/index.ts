/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * A private IP address bound to the availability group listener.
 */
export interface PrivateIPAddress {
  /**
   * Private IP address bound to the availability group listener.
   */
  ipAddress?: string;
  /**
   * Subnet used to include private IP.
   */
  subnetResourceId?: string;
}

/**
 * A load balancer configuration for an availability group listener.
 */
export interface LoadBalancerConfiguration {
  /**
   * Private IP address.
   */
  privateIpAddress?: PrivateIPAddress;
  /**
   * Resource id of the public IP.
   */
  publicIpAddressResourceId?: string;
  /**
   * Resource id of the load balancer.
   */
  loadBalancerResourceId?: string;
  /**
   * Probe port.
   */
  probePort?: number;
  /**
   * List of the SQL virtual machine instance resource id's that are enrolled into the availability
   * group listener.
   */
  sqlVirtualMachineInstances?: string[];
}

/**
 * ARM resource.
 */
export interface Resource extends BaseResource {
  /**
   * Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * ARM proxy resource.
 */
export interface ProxyResource extends Resource {
}

/**
 * A SQL Server availability group listener.
 */
export interface AvailabilityGroupListener extends ProxyResource {
  /**
   * Provisioning state to track the async operation status.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
  /**
   * Name of the availability group.
   */
  availabilityGroupName?: string;
  /**
   * List of load balancer configurations for an availability group listener.
   */
  loadBalancerConfigurations?: LoadBalancerConfiguration[];
  /**
   * Create a default availability group if it does not exist.
   */
  createDefaultAvailabilityGroupIfNotExist?: boolean;
  /**
   * Listener port.
   */
  port?: number;
}

/**
 * Display metadata associated with the operation.
 */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * The localized friendly form of the resource type related to this action/operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * The localized friendly name for the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * The localized friendly description for the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
}

/**
 * SQL REST API operation definition.
 */
export interface Operation {
  /**
   * The name of the operation being performed on this particular object.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The localized display information for this particular operation / action.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly display?: OperationDisplay;
  /**
   * The intended executor of the operation. Possible values include: 'user', 'system'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly origin?: OperationOrigin;
  /**
   * Additional descriptions for the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly properties?: { [propertyName: string]: any };
}

/**
 * Active Directory account details to operate Windows Server Failover Cluster.
 */
export interface WsfcDomainProfile {
  /**
   * Fully qualified name of the domain.
   */
  domainFqdn?: string;
  /**
   * Organizational Unit path in which the nodes and cluster will be present.
   */
  ouPath?: string;
  /**
   * Account name used for creating cluster (at minimum needs permissions to 'Create Computer
   * Objects' in domain).
   */
  clusterBootstrapAccount?: string;
  /**
   * Account name used for operating cluster i.e. will be part of administrators group on all the
   * participating virtual machines in the cluster.
   */
  clusterOperatorAccount?: string;
  /**
   * Account name under which SQL service will run on all participating SQL virtual machines in the
   * cluster.
   */
  sqlServiceAccount?: string;
  /**
   * Optional path for fileshare witness.
   */
  fileShareWitnessPath?: string;
  /**
   * Fully qualified ARM resource id of the witness storage account.
   */
  storageAccountUrl?: string;
  /**
   * Primary key of the witness storage account.
   */
  storageAccountPrimaryKey?: string;
}

/**
 * ARM tracked top level resource.
 */
export interface TrackedResource extends Resource {
  /**
   * Resource location.
   */
  location: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * A SQL virtual machine group.
 */
export interface SqlVirtualMachineGroup extends TrackedResource {
  /**
   * Provisioning state to track the async operation status.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
  /**
   * SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
   */
  sqlImageOffer?: string;
  /**
   * SQL image sku. Possible values include: 'Developer', 'Enterprise'
   */
  sqlImageSku?: SqlVmGroupImageSku;
  /**
   * Scale type. Possible values include: 'HA'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly scaleType?: ScaleType;
  /**
   * Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of
   * the group and the OS type. Possible values include: 'WSFC'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clusterManagerType?: ClusterManagerType;
  /**
   * Cluster type. Possible values include: 'Domainful'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clusterConfiguration?: ClusterConfiguration;
  /**
   * Cluster Active Directory domain profile.
   */
  wsfcDomainProfile?: WsfcDomainProfile;
}

/**
 * An update to a SQL virtual machine group.
 */
export interface SqlVirtualMachineGroupUpdate {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentity {
  /**
   * The Azure Active Directory principal id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an
   * Azure Active Directory principal for the resource. Possible values include: 'SystemAssigned'
   */
  type?: IdentityType;
  /**
   * The Azure Active Directory tenant id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
}

/**
 * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
 */
export interface WsfcDomainCredentials {
  /**
   * Cluster bootstrap account password.
   */
  clusterBootstrapAccountPassword?: string;
  /**
   * Cluster operator account password.
   */
  clusterOperatorAccountPassword?: string;
  /**
   * SQL service account password.
   */
  sqlServiceAccountPassword?: string;
}

/**
 * Set a patching window during which Windows and SQL patches will be applied.
 */
export interface AutoPatchingSettings {
  /**
   * Enable or disable autopatching on SQL virtual machine.
   */
  enable?: boolean;
  /**
   * Day of week to apply the patch on. Possible values include: 'Monday', 'Tuesday', 'Wednesday',
   * 'Thursday', 'Friday', 'Saturday', 'Sunday'
   */
  dayOfWeek?: DayOfWeek;
  /**
   * Hour of the day when patching is initiated. Local VM time.
   */
  maintenanceWindowStartingHour?: number;
  /**
   * Duration of patching.
   */
  maintenanceWindowDuration?: number;
}

/**
 * Configure backups for databases in your SQL virtual machine.
 */
export interface AutoBackupSettings {
  /**
   * Enable or disable autobackup on SQL virtual machine.
   */
  enable?: boolean;
  /**
   * Enable or disable encryption for backup on SQL virtual machine.
   */
  enableEncryption?: boolean;
  /**
   * Retention period of backup: 1-30 days.
   */
  retentionPeriod?: number;
  /**
   * Storage account url where backup will be taken to.
   */
  storageAccountUrl?: string;
  /**
   * Storage account key where backup will be taken to.
   */
  storageAccessKey?: string;
  /**
   * Password for encryption on backup.
   */
  password?: string;
  /**
   * Include or exclude system databases from auto backup.
   */
  backupSystemDbs?: boolean;
  /**
   * Backup schedule type. Possible values include: 'Manual', 'Automated'
   */
  backupScheduleType?: BackupScheduleType;
  /**
   * Frequency of full backups. In both cases, full backups begin during the next scheduled time
   * window. Possible values include: 'Daily', 'Weekly'
   */
  fullBackupFrequency?: FullBackupFrequencyType;
  /**
   * Start time of a given day during which full backups can take place. 0-23 hours.
   */
  fullBackupStartTime?: number;
  /**
   * Duration of the time window of a given day during which full backups can take place. 1-23
   * hours.
   */
  fullBackupWindowHours?: number;
  /**
   * Frequency of log backups. 5-60 minutes.
   */
  logBackupFrequency?: number;
}

/**
 * Configure your SQL virtual machine to be able to connect to the Azure Key Vault service.
 */
export interface KeyVaultCredentialSettings {
  /**
   * Enable or disable key vault credential setting.
   */
  enable?: boolean;
  /**
   * Credential name.
   */
  credentialName?: string;
  /**
   * Azure Key Vault url.
   */
  azureKeyVaultUrl?: string;
  /**
   * Service principal name to access key vault.
   */
  servicePrincipalName?: string;
  /**
   * Service principal name secret to access key vault.
   */
  servicePrincipalSecret?: string;
}

/**
 * Set the access level and network port settings for SQL Server.
 */
export interface SqlConnectivityUpdateSettings {
  /**
   * SQL Server connectivity option. Possible values include: 'LOCAL', 'PRIVATE', 'PUBLIC'
   */
  connectivityType?: ConnectivityType;
  /**
   * SQL Server port.
   */
  port?: number;
  /**
   * SQL Server sysadmin login to create.
   */
  sqlAuthUpdateUserName?: string;
  /**
   * SQL Server sysadmin login password.
   */
  sqlAuthUpdatePassword?: string;
}

/**
 * Set workload type to optimize storage for SQL Server.
 */
export interface SqlWorkloadTypeUpdateSettings {
  /**
   * SQL Server workload type. Possible values include: 'GENERAL', 'OLTP', 'DW'
   */
  sqlWorkloadType?: SqlWorkloadType;
}

/**
 * Set disk storage settings for SQL Server.
 */
export interface SqlStorageUpdateSettings {
  /**
   * Virtual machine disk count.
   */
  diskCount?: number;
  /**
   * Device id of the first disk to be updated.
   */
  startingDeviceId?: number;
  /**
   * Disk configuration to apply to SQL Server. Possible values include: 'NEW', 'EXTEND', 'ADD'
   */
  diskConfigurationType?: DiskConfigurationType;
}

/**
 * Additional SQL Server feature settings.
 */
export interface AdditionalFeaturesServerConfigurations {
  /**
   * Enable or disable R services (SQL 2016 onwards).
   */
  isRServicesEnabled?: boolean;
}

/**
 * Set the connectivity, storage and workload settings.
 */
export interface ServerConfigurationsManagementSettings {
  /**
   * SQL connectivity type settings.
   */
  sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettings;
  /**
   * SQL workload type settings.
   */
  sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettings;
  /**
   * SQL storage update settings.
   */
  sqlStorageUpdateSettings?: SqlStorageUpdateSettings;
  /**
   * Additional SQL feature settings.
   */
  additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurations;
}

/**
 * A SQL virtual machine.
 */
export interface SqlVirtualMachine extends TrackedResource {
  /**
   * Azure Active Directory identity of the server.
   */
  identity?: ResourceIdentity;
  /**
   * ARM Resource id of underlying virtual machine created from SQL marketplace image.
   */
  virtualMachineResourceId?: string;
  /**
   * Provisioning state to track the async operation status.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
  /**
   * SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
   */
  sqlImageOffer?: string;
  /**
   * SQL Server license type. Possible values include: 'PAYG', 'AHUB'
   */
  sqlServerLicenseType?: SqlServerLicenseType;
  /**
   * SQL Server Management type. Possible values include: 'Full', 'LightWeight', 'NoAgent'
   */
  sqlManagement?: SqlManagementMode;
  /**
   * SQL Server edition type. Possible values include: 'Developer', 'Express', 'Standard',
   * 'Enterprise', 'Web'
   */
  sqlImageSku?: SqlImageSku;
  /**
   * ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part
   * of.
   */
  sqlVirtualMachineGroupResourceId?: string;
  /**
   * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
   */
  wsfcDomainCredentials?: WsfcDomainCredentials;
  /**
   * Auto patching settings for applying critical security updates to SQL virtual machine.
   */
  autoPatchingSettings?: AutoPatchingSettings;
  /**
   * Auto backup settings for SQL Server.
   */
  autoBackupSettings?: AutoBackupSettings;
  /**
   * Key vault credential settings.
   */
  keyVaultCredentialSettings?: KeyVaultCredentialSettings;
  /**
   * SQL Server configuration management settings.
   */
  serverConfigurationsManagementSettings?: ServerConfigurationsManagementSettings;
}

/**
 * An update to a SQL virtual machine.
 */
export interface SqlVirtualMachineUpdate {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface SqlVirtualMachinesGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The child resources to include in the response.
   */
  expand?: string;
}

/**
 * An interface representing SqlVirtualMachineManagementClientOptions.
 */
export interface SqlVirtualMachineManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * A list of availability group listeners.
 * @extends Array<AvailabilityGroupListener>
 */
export interface AvailabilityGroupListenerListResult extends Array<AvailabilityGroupListener> {
  /**
   * Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * Result of the request to list SQL operations.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * A list of SQL virtual machine groups.
 * @extends Array<SqlVirtualMachineGroup>
 */
export interface SqlVirtualMachineGroupListResult extends Array<SqlVirtualMachineGroup> {
  /**
   * Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * A list of SQL virtual machines.
 * @extends Array<SqlVirtualMachine>
 */
export interface SqlVirtualMachineListResult extends Array<SqlVirtualMachine> {
  /**
   * Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for OperationOrigin.
 * Possible values include: 'user', 'system'
 * @readonly
 * @enum {string}
 */
export type OperationOrigin = 'user' | 'system';

/**
 * Defines values for SqlVmGroupImageSku.
 * Possible values include: 'Developer', 'Enterprise'
 * @readonly
 * @enum {string}
 */
export type SqlVmGroupImageSku = 'Developer' | 'Enterprise';

/**
 * Defines values for ScaleType.
 * Possible values include: 'HA'
 * @readonly
 * @enum {string}
 */
export type ScaleType = 'HA';

/**
 * Defines values for ClusterManagerType.
 * Possible values include: 'WSFC'
 * @readonly
 * @enum {string}
 */
export type ClusterManagerType = 'WSFC';

/**
 * Defines values for ClusterConfiguration.
 * Possible values include: 'Domainful'
 * @readonly
 * @enum {string}
 */
export type ClusterConfiguration = 'Domainful';

/**
 * Defines values for IdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export type IdentityType = 'SystemAssigned';

/**
 * Defines values for SqlServerLicenseType.
 * Possible values include: 'PAYG', 'AHUB'
 * @readonly
 * @enum {string}
 */
export type SqlServerLicenseType = 'PAYG' | 'AHUB';

/**
 * Defines values for SqlManagementMode.
 * Possible values include: 'Full', 'LightWeight', 'NoAgent'
 * @readonly
 * @enum {string}
 */
export type SqlManagementMode = 'Full' | 'LightWeight' | 'NoAgent';

/**
 * Defines values for SqlImageSku.
 * Possible values include: 'Developer', 'Express', 'Standard', 'Enterprise', 'Web'
 * @readonly
 * @enum {string}
 */
export type SqlImageSku = 'Developer' | 'Express' | 'Standard' | 'Enterprise' | 'Web';

/**
 * Defines values for DayOfWeek.
 * Possible values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
 * 'Sunday'
 * @readonly
 * @enum {string}
 */
export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

/**
 * Defines values for BackupScheduleType.
 * Possible values include: 'Manual', 'Automated'
 * @readonly
 * @enum {string}
 */
export type BackupScheduleType = 'Manual' | 'Automated';

/**
 * Defines values for FullBackupFrequencyType.
 * Possible values include: 'Daily', 'Weekly'
 * @readonly
 * @enum {string}
 */
export type FullBackupFrequencyType = 'Daily' | 'Weekly';

/**
 * Defines values for ConnectivityType.
 * Possible values include: 'LOCAL', 'PRIVATE', 'PUBLIC'
 * @readonly
 * @enum {string}
 */
export type ConnectivityType = 'LOCAL' | 'PRIVATE' | 'PUBLIC';

/**
 * Defines values for SqlWorkloadType.
 * Possible values include: 'GENERAL', 'OLTP', 'DW'
 * @readonly
 * @enum {string}
 */
export type SqlWorkloadType = 'GENERAL' | 'OLTP' | 'DW';

/**
 * Defines values for DiskConfigurationType.
 * Possible values include: 'NEW', 'EXTEND', 'ADD'
 * @readonly
 * @enum {string}
 */
export type DiskConfigurationType = 'NEW' | 'EXTEND' | 'ADD';

/**
 * Contains response data for the get operation.
 */
export type AvailabilityGroupListenersGetResponse = AvailabilityGroupListener & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListener;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type AvailabilityGroupListenersCreateOrUpdateResponse = AvailabilityGroupListener & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListener;
    };
};

/**
 * Contains response data for the listByGroup operation.
 */
export type AvailabilityGroupListenersListByGroupResponse = AvailabilityGroupListenerListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListenerListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type AvailabilityGroupListenersBeginCreateOrUpdateResponse = AvailabilityGroupListener & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListener;
    };
};

/**
 * Contains response data for the listByGroupNext operation.
 */
export type AvailabilityGroupListenersListByGroupNextResponse = AvailabilityGroupListenerListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListenerListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SqlVirtualMachineGroupsGetResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type SqlVirtualMachineGroupsCreateOrUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SqlVirtualMachineGroupsUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SqlVirtualMachineGroupsListByResourceGroupResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SqlVirtualMachineGroupsListResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type SqlVirtualMachineGroupsBeginCreateOrUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type SqlVirtualMachineGroupsBeginUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type SqlVirtualMachineGroupsListByResourceGroupNextResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SqlVirtualMachineGroupsListNextResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SqlVirtualMachinesListResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SqlVirtualMachinesGetResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type SqlVirtualMachinesCreateOrUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SqlVirtualMachinesUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SqlVirtualMachinesListByResourceGroupResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type SqlVirtualMachinesBeginCreateOrUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type SqlVirtualMachinesBeginUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SqlVirtualMachinesListNextResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type SqlVirtualMachinesListByResourceGroupNextResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};
