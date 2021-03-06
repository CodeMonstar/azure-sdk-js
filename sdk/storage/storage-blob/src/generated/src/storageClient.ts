/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  Service,
  Container,
  Blob,
  PageBlob,
  AppendBlob,
  BlockBlob
} from "./operations";
import { StorageClientContext } from "./storageClientContext";
import { StorageClientOptionalParams } from "./models";

export class StorageClient extends StorageClientContext {
  /**
   * Initializes a new instance of the StorageClient class.
   * @param url The URL of the service account, container, or blob that is the target of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageClientOptionalParams) {
    super(url, options);
    this.service = new Service(this);
    this.container = new Container(this);
    this.blob = new Blob(this);
    this.pageBlob = new PageBlob(this);
    this.appendBlob = new AppendBlob(this);
    this.blockBlob = new BlockBlob(this);
  }

  service: Service;
  container: Container;
  blob: Blob;
  pageBlob: PageBlob;
  appendBlob: AppendBlob;
  blockBlob: BlockBlob;
}
