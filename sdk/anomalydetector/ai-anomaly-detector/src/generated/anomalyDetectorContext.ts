/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { AnomalyDetectorOptionalParams } from "./models";

const packageName = "@azure/ai-form-recognizer";
const packageVersion = "3.0.0-beta.4";

/** @hidden */
export class AnomalyDetectorContext extends coreHttp.ServiceClient {
  endpoint: string;

  /**
   * Initializes a new instance of the AnomalyDetectorContext class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus2.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: AnomalyDetectorOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{Endpoint}/anomalydetector/v1.1-preview";

    // Parameter assignments
    this.endpoint = endpoint;
  }
}
