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
import * as Models from "../models";
import * as Mappers from "../models/largePersonGroupPersonMappers";
import * as Parameters from "../models/parameters";
import { FaceClientContext } from "../faceClientContext";

/** Class representing a LargePersonGroupPerson. */
export class LargePersonGroupPerson {
  private readonly client: FaceClientContext;

  /**
   * Create a LargePersonGroupPerson.
   * @param {FaceClientContext} client Reference to the service client.
   */
  constructor(client: FaceClientContext) {
    this.client = client;
  }

  /**
   * Create a new person in a specified large person group.
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargePersonGroupPersonCreateResponse>
   */
  create(largePersonGroupId: string, options?: Models.LargePersonGroupPersonCreateOptionalParams): Promise<Models.LargePersonGroupPersonCreateResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param callback The callback
   */
  create(largePersonGroupId: string, callback: msRest.ServiceCallback<Models.Person>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(largePersonGroupId: string, options: Models.LargePersonGroupPersonCreateOptionalParams, callback: msRest.ServiceCallback<Models.Person>): void;
  create(largePersonGroupId: string, options?: Models.LargePersonGroupPersonCreateOptionalParams | msRest.ServiceCallback<Models.Person>, callback?: msRest.ServiceCallback<Models.Person>): Promise<Models.LargePersonGroupPersonCreateResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.LargePersonGroupPersonCreateResponse>;
  }

  /**
   * List all persons in a large person group, and retrieve person information (including personId,
   * name, userData and persistedFaceIds of registered faces of the person).
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargePersonGroupPersonListResponse>
   */
  list(largePersonGroupId: string, options?: Models.LargePersonGroupPersonListOptionalParams): Promise<Models.LargePersonGroupPersonListResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param callback The callback
   */
  list(largePersonGroupId: string, callback: msRest.ServiceCallback<Models.Person[]>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(largePersonGroupId: string, options: Models.LargePersonGroupPersonListOptionalParams, callback: msRest.ServiceCallback<Models.Person[]>): void;
  list(largePersonGroupId: string, options?: Models.LargePersonGroupPersonListOptionalParams | msRest.ServiceCallback<Models.Person[]>, callback?: msRest.ServiceCallback<Models.Person[]>): Promise<Models.LargePersonGroupPersonListResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LargePersonGroupPersonListResponse>;
  }

  /**
   * Delete an existing person from a large person group. The persistedFaceId, userData, person name
   * and face feature in the person entry will all be deleted.
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(largePersonGroupId: string, personId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param callback The callback
   */
  deleteMethod(largePersonGroupId: string, personId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(largePersonGroupId: string, personId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(largePersonGroupId: string, personId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve a person's name and userData, and the persisted faceIds representing the registered
   * person face feature.
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargePersonGroupPersonGetResponse>
   */
  get(largePersonGroupId: string, personId: string, options?: msRest.RequestOptionsBase): Promise<Models.LargePersonGroupPersonGetResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param callback The callback
   */
  get(largePersonGroupId: string, personId: string, callback: msRest.ServiceCallback<Models.Person>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(largePersonGroupId: string, personId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Person>): void;
  get(largePersonGroupId: string, personId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Person>, callback?: msRest.ServiceCallback<Models.Person>): Promise<Models.LargePersonGroupPersonGetResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LargePersonGroupPersonGetResponse>;
  }

  /**
   * Update name or userData of a person.
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(largePersonGroupId: string, personId: string, options?: Models.LargePersonGroupPersonUpdateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param callback The callback
   */
  update(largePersonGroupId: string, personId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(largePersonGroupId: string, personId: string, options: Models.LargePersonGroupPersonUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(largePersonGroupId: string, personId: string, options?: Models.LargePersonGroupPersonUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Delete a face from a person in a large person group by specified largePersonGroupId, personId
   * and persistedFaceId.
   * <br /> Adding/deleting faces to/from a same person will be processed sequentially.
   * Adding/deleting faces to/from different persons are processed in parallel.
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  deleteFace(largePersonGroupId: string, personId: string, persistedFaceId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        persistedFaceId,
        options
      },
      deleteFaceOperationSpec,
      callback);
  }

  /**
   * Retrieve information about a persisted face (specified by persistedFaceId, personId and its
   * belonging largePersonGroupId).
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargePersonGroupPersonGetFaceResponse>
   */
  getFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase): Promise<Models.LargePersonGroupPersonGetFaceResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  getFace(largePersonGroupId: string, personId: string, persistedFaceId: string, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  getFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  getFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.LargePersonGroupPersonGetFaceResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        persistedFaceId,
        options
      },
      getFaceOperationSpec,
      callback) as Promise<Models.LargePersonGroupPersonGetFaceResponse>;
  }

  /**
   * Update a person persisted face's userData field.
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options?: Models.LargePersonGroupPersonUpdateFaceOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  updateFace(largePersonGroupId: string, personId: string, persistedFaceId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options: Models.LargePersonGroupPersonUpdateFaceOptionalParams, callback: msRest.ServiceCallback<void>): void;
  updateFace(largePersonGroupId: string, personId: string, persistedFaceId: string, options?: Models.LargePersonGroupPersonUpdateFaceOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        persistedFaceId,
        options
      },
      updateFaceOperationSpec,
      callback);
  }

  /**
   * Add a face to a person into a large person group for face identification or verification. To
   * deal with an image contains multiple faces, input face can be specified as an image with a
   * targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be
   * stored. Only the extracted face feature will be stored on server until [LargePersonGroup
   * PersonFace -
   * Delete](https://docs.microsoft.com/rest/api/faceapi/largepersongroupperson/deleteface),
   * [LargePersonGroup Person -
   * Delete](https://docs.microsoft.com/rest/api/faceapi/largepersongroupperson/delete) or
   * [LargePersonGroup - Delete](https://docs.microsoft.com/rest/api/faceapi/largepersongroup/delete)
   * is called.
   * <br /> Note persistedFaceId is different from faceId generated by [Face -
   * Detect](https://docs.microsoft.com/rest/api/faceapi/face/detectwithurl).
   * * Higher face image quality means better recognition precision. Please consider high-quality
   * faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
   * * Each person entry can hold up to 248 faces.
   * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is
   * from 1KB to 6MB.
   * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an
   * error. If the provided "targetFace" rectangle is not returned from [Face -
   * Detect](https://docs.microsoft.com/rest/api/faceapi/face/detectwithurl), there???s no guarantee to
   * detect and add the face successfully.
   * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions
   * will cause failures.
   * * Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting
   * faces to/from different persons are processed in parallel.
   * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels.
   * Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum
   * face size.
   * * Different 'detectionModel' values can be provided. To use and compare different detection
   * models, please refer to [How to specify a detection
   * model](https://docs.microsoft.com/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param url Publicly reachable URL of an image
   * @param [options] The optional parameters
   * @returns Promise<Models.LargePersonGroupPersonAddFaceFromUrlResponse>
   */
  addFaceFromUrl(largePersonGroupId: string, personId: string, url: string, options?: Models.LargePersonGroupPersonAddFaceFromUrlOptionalParams): Promise<Models.LargePersonGroupPersonAddFaceFromUrlResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param url Publicly reachable URL of an image
   * @param callback The callback
   */
  addFaceFromUrl(largePersonGroupId: string, personId: string, url: string, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param url Publicly reachable URL of an image
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromUrl(largePersonGroupId: string, personId: string, url: string, options: Models.LargePersonGroupPersonAddFaceFromUrlOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromUrl(largePersonGroupId: string, personId: string, url: string, options?: Models.LargePersonGroupPersonAddFaceFromUrlOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.LargePersonGroupPersonAddFaceFromUrlResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        url,
        options
      },
      addFaceFromUrlOperationSpec,
      callback) as Promise<Models.LargePersonGroupPersonAddFaceFromUrlResponse>;
  }

  /**
   * Add a face to a person into a large person group for face identification or verification. To
   * deal with an image contains multiple faces, input face can be specified as an image with a
   * targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be
   * stored. Only the extracted face feature will be stored on server until [LargePersonGroup
   * PersonFace -
   * Delete](https://docs.microsoft.com/rest/api/faceapi/largepersongroupperson/deleteface),
   * [LargePersonGroup Person -
   * Delete](https://docs.microsoft.com/rest/api/faceapi/largepersongroupperson/delete) or
   * [LargePersonGroup - Delete](https://docs.microsoft.com/rest/api/faceapi/largepersongroup/delete)
   * is called.
   * <br /> Note persistedFaceId is different from faceId generated by [Face -
   * Detect](https://docs.microsoft.com/rest/api/faceapi/face/detectwithurl).
   * * Higher face image quality means better recognition precision. Please consider high-quality
   * faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
   * * Each person entry can hold up to 248 faces.
   * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is
   * from 1KB to 6MB.
   * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an
   * error. If the provided "targetFace" rectangle is not returned from [Face -
   * Detect](https://docs.microsoft.com/rest/api/faceapi/face/detectwithurl), there???s no guarantee to
   * detect and add the face successfully.
   * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions
   * will cause failures.
   * * Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting
   * faces to/from different persons are processed in parallel.
   * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels.
   * Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum
   * face size.
   * * Different 'detectionModel' values can be provided. To use and compare different detection
   * models, please refer to [How to specify a detection
   * model](https://docs.microsoft.com/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model).
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param image An image stream.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargePersonGroupPersonAddFaceFromStreamResponse>
   */
  addFaceFromStream(largePersonGroupId: string, personId: string, image: msRest.HttpRequestBody, options?: Models.LargePersonGroupPersonAddFaceFromStreamOptionalParams): Promise<Models.LargePersonGroupPersonAddFaceFromStreamResponse>;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param image An image stream.
   * @param callback The callback
   */
  addFaceFromStream(largePersonGroupId: string, personId: string, image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param largePersonGroupId Id referencing a particular large person group.
   * @param personId Id referencing a particular person.
   * @param image An image stream.
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromStream(largePersonGroupId: string, personId: string, image: msRest.HttpRequestBody, options: Models.LargePersonGroupPersonAddFaceFromStreamOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromStream(largePersonGroupId: string, personId: string, image: msRest.HttpRequestBody, options?: Models.LargePersonGroupPersonAddFaceFromStreamOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.LargePersonGroupPersonAddFaceFromStreamResponse> {
    return this.client.sendOperationRequest(
      {
        largePersonGroupId,
        personId,
        image,
        options
      },
      addFaceFromStreamOperationSpec,
      callback) as Promise<Models.LargePersonGroupPersonAddFaceFromStreamResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "largepersongroups/{largePersonGroupId}/persons",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId
  ],
  requestBody: {
    parameterPath: {
      name: [
        "options",
        "name"
      ],
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.NameAndUserDataContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Person
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largepersongroups/{largePersonGroupId}/persons",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId
  ],
  queryParameters: [
    Parameters.start0,
    Parameters.top0
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Person"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Person
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId
  ],
  requestBody: {
    parameterPath: {
      name: [
        "options",
        "name"
      ],
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.NameAndUserDataContract,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId,
    Parameters.persistedFaceId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId,
    Parameters.persistedFaceId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const updateFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId,
    Parameters.persistedFaceId
  ],
  requestBody: {
    parameterPath: {
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.UpdateFaceRequest,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addFaceFromUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace,
    Parameters.detectionModel
  ],
  requestBody: {
    parameterPath: {
      url: "url"
    },
    mapper: {
      ...Mappers.ImageUrl,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addFaceFromStreamOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largePersonGroupId,
    Parameters.personId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace,
    Parameters.detectionModel
  ],
  requestBody: {
    parameterPath: "image",
    mapper: {
      required: true,
      serializedName: "Image",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};
