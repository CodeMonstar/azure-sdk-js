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
 * The localizable string class.
 */
export interface LocalizableString {
  /**
   * the invariant value.
   */
  value: string;
  /**
   * the locale specific value.
   */
  localizedValue?: string;
}

/**
 * Metric availability specifies the time grain (aggregation interval or frequency) and the
 * retention period for that time grain.
 */
export interface MetricAvailability {
  /**
   * the time grain specifies the aggregation interval for the metric. Expressed as a duration
   * 'PT1M', 'P1D', etc.
   */
  timeGrain?: string;
  /**
   * the retention period for the metric at the specified timegrain.  Expressed as a duration
   * 'PT1M', 'P1D', etc.
   */
  retention?: string;
}

/**
 * Metric definition class specifies the metadata for a metric.
 */
export interface MetricDefinition {
  /**
   * Flag to indicate whether the dimension is required.
   */
  isDimensionRequired?: boolean;
  /**
   * the resource identifier of the resource that emitted the metric.
   */
  resourceId?: string;
  /**
   * the namespace the metric belongs to.
   */
  namespace?: string;
  /**
   * the name and the display name of the metric, i.e. it is a localizable string.
   */
  name?: LocalizableString;
  /**
   * the unit of the metric. Possible values include: 'Count', 'Bytes', 'Seconds',
   * 'CountPerSecond', 'BytesPerSecond', 'Percent', 'MilliSeconds', 'ByteSeconds', 'Unspecified',
   * 'Cores', 'MilliCores', 'NanoCores', 'BitsPerSecond'
   */
  unit?: Unit;
  /**
   * the primary aggregation type value defining how to use the values for display. Possible values
   * include: 'None', 'Average', 'Count', 'Minimum', 'Maximum', 'Total'
   */
  primaryAggregationType?: AggregationType;
  /**
   * the collection of what aggregation types are supported.
   */
  supportedAggregationTypes?: AggregationType[];
  /**
   * the collection of what aggregation intervals are available to be queried.
   */
  metricAvailabilities?: MetricAvailability[];
  /**
   * the resource identifier of the metric definition.
   */
  id?: string;
  /**
   * the name and the display name of the dimension, i.e. it is a localizable string.
   */
  dimensions?: LocalizableString[];
}

/**
 * Describes the format of Error response.
 */
export interface ErrorResponse {
  /**
   * Error code
   */
  code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  message?: string;
}

/**
 * Represents a metric value.
 */
export interface MetricValue {
  /**
   * the timestamp for the metric value in ISO 8601 format.
   */
  timeStamp: Date;
  /**
   * the average value in the time range.
   */
  average?: number;
  /**
   * the least value in the time range.
   */
  minimum?: number;
  /**
   * the greatest value in the time range.
   */
  maximum?: number;
  /**
   * the sum of all of the values in the time range.
   */
  total?: number;
  /**
   * the number of samples in the time range. Can be used to determine the number of values that
   * contributed to the average value.
   */
  count?: number;
}

/**
 * Represents a metric metadata value.
 */
export interface MetadataValue {
  /**
   * the name of the metadata.
   */
  name?: LocalizableString;
  /**
   * the value of the metadata.
   */
  value?: string;
}

/**
 * A time series result type. The discriminator value is always TimeSeries in this case.
 */
export interface TimeSeriesElement {
  /**
   * the metadata values returned if $filter was specified in the call.
   */
  metadatavalues?: MetadataValue[];
  /**
   * An array of data points representing the metric values.  This is only returned if a result
   * type of data is specified.
   */
  data?: MetricValue[];
}

/**
 * The result data of a query.
 */
export interface Metric {
  /**
   * the metric Id.
   */
  id: string;
  /**
   * the resource type of the metric resource.
   */
  type: string;
  /**
   * the name and the display name of the metric, i.e. it is localizable string.
   */
  name: LocalizableString;
  /**
   * the unit of the metric. Possible values include: 'Count', 'Bytes', 'Seconds',
   * 'CountPerSecond', 'BytesPerSecond', 'Percent', 'MilliSeconds', 'ByteSeconds', 'Unspecified',
   * 'Cores', 'MilliCores', 'NanoCores', 'BitsPerSecond'
   */
  unit: Unit;
  /**
   * the time series returned when a data query is performed.
   */
  timeseries: TimeSeriesElement[];
}

/**
 * The response to a metrics query.
 */
export interface Response {
  /**
   * The integer value representing the cost of the query, for data case.
   */
  cost?: number;
  /**
   * The timespan for which the data was retrieved. Its value consists of two datetimes
   * concatenated, separated by '/'.  This may be adjusted in the future and returned back from
   * what was originally requested.
   */
  timespan: string;
  /**
   * The interval (window size) for which the metric data was returned in.  This may be adjusted in
   * the future and returned back from what was originally requested.  This is not present if a
   * metadata request was made.
   */
  interval?: string;
  /**
   * The namespace of the metrics been queried
   */
  namespace?: string;
  /**
   * The region of the resource been queried for metrics.
   */
  resourceregion?: string;
  /**
   * the value of the collection.
   */
  value: Metric[];
}

/**
 * A proxy only azure resource object
 */
export interface ProxyOnlyResource extends BaseResource {
  /**
   * Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * Specifies the retention policy for the log.
 */
export interface RetentionPolicy {
  /**
   * a value indicating whether the retention policy is enabled.
   */
  enabled: boolean;
  /**
   * the number of days for the retention in days. A value of 0 will retain the events
   * indefinitely.
   */
  days: number;
}

/**
 * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.
 */
export interface MetricSettings {
  /**
   * the timegrain of the metric in ISO8601 format.
   */
  timeGrain?: string;
  /**
   * Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain
   * the list of Diagnostic metric categories for a resource, first perform a GET diagnostic
   * settings operation.
   */
  category?: string;
  /**
   * a value indicating whether this category is enabled.
   */
  enabled: boolean;
  /**
   * the retention policy for this category.
   */
  retentionPolicy?: RetentionPolicy;
}

/**
 * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
 */
export interface LogSettings {
  /**
   * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain
   * the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings
   * operation.
   */
  category?: string;
  /**
   * a value indicating whether this log is enabled.
   */
  enabled: boolean;
  /**
   * the retention policy for this log.
   */
  retentionPolicy?: RetentionPolicy;
}

/**
 * The diagnostic setting resource.
 */
export interface DiagnosticSettingsResource extends ProxyOnlyResource {
  /**
   * The resource ID of the storage account to which you would like to send Diagnostic Logs.
   */
  storageAccountId?: string;
  /**
   * The service bus rule Id of the diagnostic setting. This is here to maintain backwards
   * compatibility.
   */
  serviceBusRuleId?: string;
  /**
   * The resource Id for the event hub authorization rule.
   */
  eventHubAuthorizationRuleId?: string;
  /**
   * The name of the event hub. If none is specified, the default event hub will be selected.
   */
  eventHubName?: string;
  /**
   * The list of metric settings.
   */
  metrics?: MetricSettings[];
  /**
   * The list of logs settings.
   */
  logs?: LogSettings[];
  /**
   * The full ARM resource ID of the Log Analytics workspace to which you would like to send
   * Diagnostic Logs. Example:
   * /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
   */
  workspaceId?: string;
  /**
   * A string indicating whether the export to Log Analytics should use the default destination
   * type, i.e. AzureDiagnostics, or use a destination type constructed as follows: <normalized
   * service identity>_<normalized category name>. Possible values are: Dedicated and null (null is
   * default.)
   */
  logAnalyticsDestinationType?: string;
}

/**
 * Represents a collection of alert rule resources.
 */
export interface DiagnosticSettingsResourceCollection {
  /**
   * The collection of diagnostic settings resources;.
   */
  value?: DiagnosticSettingsResource[];
}

/**
 * The diagnostic settings category resource.
 */
export interface DiagnosticSettingsCategoryResource extends ProxyOnlyResource {
  /**
   * The type of the diagnostic settings category. Possible values include: 'Metrics', 'Logs'
   */
  categoryType?: CategoryType;
}

/**
 * Represents a collection of diagnostic setting category resources.
 */
export interface DiagnosticSettingsCategoryResourceCollection {
  /**
   * The collection of diagnostic settings category resources.
   */
  value?: DiagnosticSettingsCategoryResource[];
}

/**
 * Display metadata associated with the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Insights
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: AlertRules, Autoscale, etc.
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * Microsoft Insights API operation definition.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * Display metadata associated with the operation.
   */
  display?: OperationDisplay;
}

/**
 * Result of the request to list Microsoft.Insights operations. It contains a list of operations
 * and a URL link to get the next set of results.
 */
export interface OperationListResult {
  /**
   * List of operations supported by the Microsoft.Insights provider.
   */
  value?: Operation[];
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * Optional Parameters.
 */
export interface MetricDefinitionsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Metric namespace to query metric definitions for.
   */
  metricnamespace?: string;
}

/**
 * Optional Parameters.
 */
export interface MetricsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
  /**
   * The interval (i.e. timegrain) of the query.
   */
  interval?: string;
  /**
   * The names of the metrics (comma separated) to retrieve.
   */
  metricnames?: string;
  /**
   * The list of aggregation types (comma separated) to retrieve.
   */
  aggregation?: string;
  /**
   * The maximum number of records to retrieve.
   * Valid only if $filter is specified.
   * Defaults to 10.
   */
  top?: number;
  /**
   * The aggregation to use for sorting results and the direction of the sort.
   * Only one order can be specified.
   * Examples: sum asc.
   */
  orderby?: string;
  /**
   * The **$filter** is used to reduce the set of metric data returned.<br>Example:<br>Metric
   * contains metadata A, B and C.<br>- Return all time series of C where A = a1 and B = b1 or
   * b2<br>**$filter=A eq ???a1??? and B eq ???b1??? or B eq ???b2??? and C eq ???*???**<br>- Invalid
   * variant:<br>**$filter=A eq ???a1??? and B eq ???b1??? and C eq ???*??? or B = ???b2???**<br>This is invalid
   * because the logical or operator cannot separate two different metadata names.<br>- Return all
   * time series where A = a1, B = b1 and C = c1:<br>**$filter=A eq ???a1??? and B eq ???b1??? and C eq
   * ???c1???**<br>- Return all time series where A = a1<br>**$filter=A eq ???a1??? and B eq ???*??? and C eq
   * ???*???**.
   */
  filter?: string;
  /**
   * Reduces the set of data collected. The syntax allowed depends on the operation. See the
   * operation's description for details. Possible values include: 'Data', 'Metadata'
   */
  resultType?: ResultType;
  /**
   * Metric namespace to query metric definitions for.
   */
  metricnamespace?: string;
}

/**
 * An interface representing MonitorManagementClientOptions.
 */
export interface MonitorManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Represents collection of metric definitions.
 * @extends Array<MetricDefinition>
 */
export interface MetricDefinitionCollection extends Array<MetricDefinition> {
}

/**
 * @interface
 * A collection of event categories. Currently possible values are: Administrative, Security,
 * ServiceHealth, Alert, Recommendation, Policy.
 * @extends Array<LocalizableString>
 */
export interface EventCategoryCollection extends Array<LocalizableString> {
}

/**
 * Defines values for Unit.
 * Possible values include: 'Count', 'Bytes', 'Seconds', 'CountPerSecond', 'BytesPerSecond',
 * 'Percent', 'MilliSeconds', 'ByteSeconds', 'Unspecified', 'Cores', 'MilliCores', 'NanoCores',
 * 'BitsPerSecond'
 * @readonly
 * @enum {string}
 */
export type Unit = 'Count' | 'Bytes' | 'Seconds' | 'CountPerSecond' | 'BytesPerSecond' | 'Percent' | 'MilliSeconds' | 'ByteSeconds' | 'Unspecified' | 'Cores' | 'MilliCores' | 'NanoCores' | 'BitsPerSecond';

/**
 * Defines values for AggregationType.
 * Possible values include: 'None', 'Average', 'Count', 'Minimum', 'Maximum', 'Total'
 * @readonly
 * @enum {string}
 */
export type AggregationType = 'None' | 'Average' | 'Count' | 'Minimum' | 'Maximum' | 'Total';

/**
 * Defines values for CategoryType.
 * Possible values include: 'Metrics', 'Logs'
 * @readonly
 * @enum {string}
 */
export type CategoryType = 'Metrics' | 'Logs';

/**
 * Defines values for ResultType.
 * Possible values include: 'Data', 'Metadata'
 * @readonly
 * @enum {string}
 */
export type ResultType = 'Data' | 'Metadata';

/**
 * Contains response data for the list operation.
 */
export type MetricDefinitionsListResponse = MetricDefinitionCollection & {
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
      parsedBody: MetricDefinitionCollection;
    };
};

/**
 * Contains response data for the list operation.
 */
export type MetricsListResponse = Response & {
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
      parsedBody: Response;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DiagnosticSettingsGetResponse = DiagnosticSettingsResource & {
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
      parsedBody: DiagnosticSettingsResource;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type DiagnosticSettingsCreateOrUpdateResponse = DiagnosticSettingsResource & {
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
      parsedBody: DiagnosticSettingsResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DiagnosticSettingsListResponse = DiagnosticSettingsResourceCollection & {
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
      parsedBody: DiagnosticSettingsResourceCollection;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DiagnosticSettingsCategoryGetResponse = DiagnosticSettingsCategoryResource & {
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
      parsedBody: DiagnosticSettingsCategoryResource;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DiagnosticSettingsCategoryListResponse = DiagnosticSettingsCategoryResourceCollection & {
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
      parsedBody: DiagnosticSettingsCategoryResourceCollection;
    };
};

/**
 * Contains response data for the list operation.
 */
export type EventCategoriesListResponse = EventCategoryCollection & {
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
      parsedBody: EventCategoryCollection;
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
