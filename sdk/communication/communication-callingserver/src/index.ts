// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { HttpResponse } from "@azure/core-http";

export * from "./models";
export * from "./parameters";
export * from "./callingServerClient";
export * from "./callConnection";

/** Defines headers for Content download operation. */
export interface ContentDownloadHeaders {
  /** The number of bytes present in the response body. */
  contentLength?: number;
  /** The media type of the body of the response. For Download Blob this is 'application/octet-stream' */
  contentType?: string;
  /** Indicates the range of bytes returned in the event that the client requested a subset of the blob by setting the 'Range' request header. */
  contentRange?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** Error Code */
  errorCode?: string;
}

/** Contains response data for the download operation. */
export type ContentDownloadResponse = ContentDownloadHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContentDownloadHeaders;
  };
};
