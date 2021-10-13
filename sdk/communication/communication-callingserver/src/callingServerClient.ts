// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference lib="esnext.asynciterable" />

import { CallConnection } from ".";
import {
  CreateCallOptions,
  JoinCallOptions,
  CallLocator,
  PlayAudioOptions,
  AddParticipantOptions,
  RemoveParticipantOptions,
  CancelMediaOperationOptions,
  StartRecordingOptions,
  PauseRecordingOptions,
  ResumeRecordingOptions,
  StopRecordingOptions,
  GetRecordingPropertiesOptions
} from "./models";
import { CallConnections, ServerCalls } from "./generated/src/operations";
import {
  CreateCallRequest,
  JoinCallRequest,
  PlayAudioWithCallLocatorRequest,
  PlayAudioResult,
  PlayAudioToParticipantWithCallLocatorRequest,
  ServerCallsAddParticipantResponse,
  AddParticipantWithCallLocatorRequest,
  RemoveParticipantWithCallLocatorRequest,
  CancelMediaOperationWithCallLocatorRequest,
  CancelParticipantMediaOperationWithCallLocatorRequest,
  StartCallRecordingRequest,
  StartCallRecordingResult,
  StartCallRecordingWithCallLocatorRequest,
  CallRecordingProperties
} from "./generated/src/models";
import { TokenCredential } from "@azure/core-auth";

import {
  parseClientArguments,
  isKeyCredential,
  createCommunicationAuthPolicy,
  CommunicationIdentifier,
  serializeCommunicationIdentifier
} from "@azure/communication-common";
import {
  PipelineOptions,
  InternalPipelineOptions,
  createPipelineFromOptions,
  operationOptionsToRequestOptionsBase,
  RestResponse
} from "@azure/core-http";
import { SpanStatusCode } from "@azure/core-tracing";
import { CallingServerApiClient } from "./generated/src/callingServerApiClient";
import { SDK_VERSION } from "./constants";
import { createSpan } from "./tracing";
import { logger } from "./logger";
import { extractOperationOptions } from "./extractOperationOptions";
import { CallingServerUtils } from "./utils/utils";

/**
 * Client options used to configure CallingServer Client API requests.
 */
export interface CallingServerClientOptions extends PipelineOptions {}

/**
 * Checks whether the type of a value is CallingServerClientOptions or not.
 *
 * @param options - The value being checked.
 */
const isCallingServerClientOptions = (options: any): options is CallingServerClientOptions =>
  !!options && !isKeyCredential(options);

/**
 * A CallingServerClient represents a Client to the Azure Communication CallingServer service.
 */
export class CallingServerClient {
  private readonly callingServerServiceClient: CallingServerApiClient;
  private readonly callConnectionRestClient: CallConnections;
  private readonly serverCallRestClient: ServerCalls;

  /**
   * Initializes a new instance of the CallingServerClient class.
   * @param connectionString - Connection string to connect to an Azure Communication Service resource.
   *                         Example: "endpoint=https://contoso.eastus.communications.azure.net/;accesskey=secret";
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  constructor(connectionString: string, options?: CallingServerClientOptions);

  /**
   * Initializes a new instance of the SmsClient class using a TokenCredential.
   * @param endpoint - The endpoint of the service (ex: https://contoso.eastus.communications.azure.net).
   * @param credential - TokenCredential that is used to authenticate requests to the service.
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  constructor(endpoint: string, credential: TokenCredential, options?: CallingServerClientOptions);

  constructor(
    connectionStringOrUrl: string,
    credentialOrOptions?: TokenCredential | CallingServerClientOptions,
    maybeOptions: CallingServerClientOptions = {}
  ) {
    const { url, credential } = parseClientArguments(connectionStringOrUrl, credentialOrOptions);
    const options = isCallingServerClientOptions(credentialOrOptions)
      ? credentialOrOptions
      : maybeOptions;
    const libInfo = `azsdk-js-communication-callingserver/${SDK_VERSION}`;

    if (!options?.userAgentOptions) {
      options.userAgentOptions = {};
    }

    if (options?.userAgentOptions?.userAgentPrefix) {
      options.userAgentOptions.userAgentPrefix = `${options.userAgentOptions.userAgentPrefix} ${libInfo}`;
    } else {
      options.userAgentOptions.userAgentPrefix = libInfo;
    }

    const internalPipelineOptions: InternalPipelineOptions = {
      ...options,
      ...{
        loggingOptions: {
          logger: logger.info
        }
      }
    };

    const authPolicy = createCommunicationAuthPolicy(credential);
    const pipeline = createPipelineFromOptions(internalPipelineOptions, authPolicy);
    this.callingServerServiceClient = new CallingServerApiClient(url, pipeline);
    this.callConnectionRestClient = this.callingServerServiceClient.callConnections;
    this.serverCallRestClient = this.callingServerServiceClient.serverCalls;
  }

  /**
   * Initializes a new instance of CallConnection using a callConnectionId.
   * @param callConnectionId - The CallConnection id for the CallConnection instance. (ex: endpoint=https://REDACTED.communication.azure.com/;accesskey=eyJhbG==).
   */
  public getCallConnection(callConnectionId: string): CallConnection {
    return new CallConnection(callConnectionId, this.callConnectionRestClient);
  }

  /**
   * Create an outgoing call from source to target identities.
   * @param source - The source identity.
   * @param targets - The target identities.
   * @param options - Additional request options contains createCallConnection api options.
   */
  public async createCallConnection(
    source: CommunicationIdentifier,
    targets: CommunicationIdentifier[],
    options: CreateCallOptions
  ): Promise<CallConnection> {
    const { operationOptions, restOptions } = extractOperationOptions(options);
    const { span, updatedOptions } = createSpan(
      "CallConnectionRestClient-CreateCallConnection",
      operationOptions
    );

    const request: CreateCallRequest = {
      source: serializeCommunicationIdentifier(source),
      targets: targets.map((m) => serializeCommunicationIdentifier(m)),
      callbackUri: restOptions.callbackUri,
      requestedMediaTypes: restOptions.requestedMediaTypes,
      requestedCallEvents: restOptions.requestedCallEvents,
      alternateCallerId:
        restOptions.alternateCallerId == null
          ? undefined
          : { value: restOptions.alternateCallerId.phoneNumber },
      subject: restOptions.subject
    };

    try {
      const response = await this.callConnectionRestClient.createCall(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );

      if (response.callConnectionId) {
        return new CallConnection(response.callConnectionId, this.callConnectionRestClient);
      }
      throw "callConnectionId is missing in createCall response";
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Join the call using callLocator.
   *
   * @param callLocator - The callLocator contains call id.
   * @param source - The source identity.
   * @param options - Additional request options contains joinCall api options.
   */
  public async joinCall(
    callLocator: CallLocator,
    source: CommunicationIdentifier,
    options: JoinCallOptions
  ): Promise<CallConnection> {
    const { operationOptions, restOptions } = extractOperationOptions(options);
    const { span, updatedOptions } = createSpan("ServerCallRestClient-JoinCall", operationOptions);

    const request: JoinCallRequest = {
      callLocator: callLocator,
      source: serializeCommunicationIdentifier(source),
      callbackUri: restOptions.callbackUri,
      requestedMediaTypes: restOptions.requestedMediaTypes,
      requestedCallEvents: restOptions.requestedCallEvents,
      subject: undefined
    };

    try {
      const response = await this.serverCallRestClient.joinCall(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );

      if (response.callConnectionId) {
        return new CallConnection(response.callConnectionId, this.callConnectionRestClient);
      } else {
        throw "callConnectionId is missing in joinCall response";
      }
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Play audio using callLocator.
   *
   * @param callLocator - The callLocator contains call id.
   * @param audioFileUri - The id for the media in the AudioFileUri, using which we cache the media resource.
   * @param options - Additional request options contains playAudio api options.
   */
  public async playAudio(
    callLocator: CallLocator,
    audioFileUri: string,
    options: PlayAudioOptions
  ): Promise<PlayAudioResult> {
    const { operationOptions, restOptions } = extractOperationOptions(options);
    const { span, updatedOptions } = createSpan("ServerCallRestClient-playAudio", operationOptions);
    if (!CallingServerUtils.isValidUrl(audioFileUri)) {
      throw new Error("audioFileUri is invalid.");
    }
    if (
      typeof options.audioFileId === "undefined" ||
      !options.audioFileId ||
      !options.audioFileId.trim()
    ) {
      throw new Error("audioFileId is invalid.");
    }
    if (!CallingServerUtils.isValidUrl(String(options.callbackUri))) {
      throw new Error("callbackUri is invalid.");
    }
    if (
      typeof options.operationContext === "undefined" ||
      !options.operationContext ||
      !options.operationContext.trim()
    ) {
      throw new Error("operationContext can not be null.");
    }
    const request: PlayAudioWithCallLocatorRequest = {
      callLocator: callLocator,
      playAudioRequest: {
        audioFileUri: audioFileUri,
        loop: restOptions.loop,
        operationContext: restOptions.operationContext,
        audioFileId: restOptions.audioFileId,
        callbackUri: restOptions.callbackUri
      }
    };

    try {
      const response = await this.serverCallRestClient.playAudio(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Play audio to a participant using callLocator.
   *
   * @param callLocator - The callLocator contains call id.
   * @param participant - The identifier of the participant.
   * @param audioFileUri - The id for the media in the AudioFileUri, using which we cache the media resource.
   * @param options - Additional request options contains playAudioToParticipant api options.
   */
  public async playAudioToParticipant(
    callLocator: CallLocator,
    participant: CommunicationIdentifier,
    audioFileUri: string,
    options: PlayAudioOptions
  ): Promise<PlayAudioResult> {
    const { operationOptions, restOptions } = extractOperationOptions(options);
    const { span, updatedOptions } = createSpan("ServerCallRestClient-playAudio", operationOptions);

    const request: PlayAudioToParticipantWithCallLocatorRequest = {
      callLocator: callLocator,
      playAudioToParticipantRequest: {
        identifier: serializeCommunicationIdentifier(participant),
        audioFileUri: audioFileUri,
        loop: restOptions.loop,
        operationContext: restOptions.operationContext,
        audioFileId: restOptions.audioFileId,
        callbackUri: restOptions.callbackUri
      }
    };

    try {
      const response = await this.serverCallRestClient.participantPlayAudio(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Add participant to the call using call_locator.
   *
   * @param callLocator - The callLocator contains call id.
   * @param participant - The identifier of the participant.
   * @param callbackUri - The callback uri to receive the notification.
   * @param alternateCallerId - The phone number to use when adding a pstn participant.
   * @param operationContext - The operation context.
   * @param options - Additional request options contains addParticipant api options.
   */
  public async addParticipant(
    callLocator: CallLocator,
    participant: CommunicationIdentifier,
    callbackUri: string,
    alternateCallerId?: string,
    operationContext?: string,
    options: AddParticipantOptions = {}
  ): Promise<ServerCallsAddParticipantResponse> {
    const { span, updatedOptions } = createSpan("ServerCallRestClient-playAudio", options);
    var alternate_caller_id =
      typeof alternateCallerId === "undefined"
        ? alternateCallerId
        : serializeCommunicationIdentifier({ phoneNumber: alternateCallerId }).phoneNumber;

    const request: AddParticipantWithCallLocatorRequest = {
      callLocator: callLocator,
      addParticipantRequest: {
        participant: serializeCommunicationIdentifier(participant),
        alternateCallerId: alternate_caller_id,
        operationContext: operationContext,
        callbackUri: callbackUri
      }
    };

    try {
      const response = await this.serverCallRestClient.addParticipant(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return response;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Remove participant from the call using call_locator.
   *
   * @param callLocator - The callLocator contains call id.
   * @param participant - The identifier of the participant.
   * @param options - Additional request options contains removeParticipant api options.
   */
  public async removeParticipant(
    callLocator: CallLocator,
    participant: CommunicationIdentifier,
    options: RemoveParticipantOptions = {}
  ): Promise<void> {
    const { span, updatedOptions } = createSpan("ServerCallRestClient-removeParticipant", options);

    const request: RemoveParticipantWithCallLocatorRequest = {
      callLocator: callLocator,
      removeParticipantRequest: {
        identifier: serializeCommunicationIdentifier(participant)
      }
    };

    try {
      await this.serverCallRestClient.removeParticipant(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Cancel media operation in the call using call_locator.
   *
   * @param callLocator - The callLocator contains call id.
   * @param mediaOperationId - The operationId of the media operation to cancel.
   * @param options - Additional request options contains cancelMediaOperation api options.
   */
  public async cancelMediaOperation(
    callLocator: CallLocator,
    mediaOperationId: string,
    options: CancelMediaOperationOptions = {}
  ): Promise<void> {
    const { span, updatedOptions } = createSpan(
      "ServerCallRestClient-cancelMediaOperation",
      options
    );

    const request: CancelMediaOperationWithCallLocatorRequest = {
      callLocator: callLocator,
      cancelMediaOperationRequest: {
        mediaOperationId: mediaOperationId
      }
    };

    try {
      await this.serverCallRestClient.cancelMediaOperation(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Cancel media operation of a participant using call_locator.
   *
   * @param callLocator - The callLocator contains call id.
   * @param participant - The identifier of the participant.
   * @param mediaOperationId - The operationId of the media operation to cancel.
   * @param options - Additional request options contains cancelMediaOperation api options.
   */
  public async cancelParticipantMediaOperation(
    callLocator: CallLocator,
    participant: CommunicationIdentifier,
    mediaOperationId: string,
    options: CancelMediaOperationOptions = {}
  ): Promise<void> {
    const { span, updatedOptions } = createSpan(
      "ServerCallRestClient-cancelParticipantMediaOperation",
      options
    );

    const request: CancelParticipantMediaOperationWithCallLocatorRequest = {
      callLocator: callLocator,
      cancelParticipantMediaOperationRequest: {
        identifier: serializeCommunicationIdentifier(participant),
        mediaOperationId: mediaOperationId
      }
    };

    try {
      await this.serverCallRestClient.cancelParticipantMediaOperation(
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Start recording operation using call locator.
   *
   * @param callLocator - The callLocator contains server call id.
   * @param recordingStateCallbackUri - The call back uri for recording state.
   * @param options - Additional request options contains StartRecording api options.
   */
  public async startRecording(
    callLocator: CallLocator,
    recordingStateCallbackUri: string,
    options: StartRecordingOptions = {}
  ): Promise<StartCallRecordingResult> {
    const { span, updatedOptions } = createSpan("ServerCallRestClient-StartRecording", options);

    if (typeof callLocator === "undefined" || !callLocator) {
      throw new Error("callLocator is invalid.");
    }
    if (
      typeof recordingStateCallbackUri === "undefined" ||
      !recordingStateCallbackUri ||
      !CallingServerUtils.isValidUrl(recordingStateCallbackUri)
    ) {
      throw new Error("recordingStateCallbackUri is invalid.");
    }

    var startCallRecordingRequest: StartCallRecordingRequest = {
      recordingStateCallbackUri: recordingStateCallbackUri
    };

    var startCallRecordingWithCallLocatorRequest: StartCallRecordingWithCallLocatorRequest = {
      callLocator: callLocator,
      startCallRecordingRequest: startCallRecordingRequest
    };

    try {
      const result = await this.serverCallRestClient.startRecording(
        startCallRecordingWithCallLocatorRequest,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Pause recording operation using recording id.
   *
   * @param recordingId - The recording id of the ongoing recording.
   * @param options - Additional request options contains PauseRecording api options.
   */
  public async pauseRecording(
    recordingId: string,
    options: PauseRecordingOptions = {}
  ): Promise<RestResponse> {
    const { span, updatedOptions } = createSpan("ServerCallRestClient-PauseRecording", options);

    if (typeof recordingId === "undefined" || !recordingId || !recordingId.trim()) {
      throw new Error("recordingId is invalid.");
    }

    try {
      const result = await this.serverCallRestClient.pauseRecording(
        recordingId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Resume recording operation using recording id.
   *
   * @param recordingId - The recording id of the ongoing recording.
   * @param options - Additional request options contains ResumeRecording api options.
   */
  public async resumeRecording(
    recordingId: string,
    options: ResumeRecordingOptions = {}
  ): Promise<RestResponse> {
    const { span, updatedOptions } = createSpan("ServerCallRestClient-ResumeRecording", options);

    if (typeof recordingId === "undefined" || !recordingId || !recordingId.trim()) {
      throw new Error("recordingId is invalid.");
    }

    try {
      const result = await this.serverCallRestClient.resumeRecording(
        recordingId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Stop recording operation using recording id.
   *
   * @param recordingId - The recording id of the ongoing recording.
   * @param options - Additional request options contains StopRecording api options.
   */
  public async stopRecording(
    recordingId: string,
    options: StopRecordingOptions = {}
  ): Promise<RestResponse> {
    const { span, updatedOptions } = createSpan("ServerCallRestClient-StopRecording", options);

    if (typeof recordingId === "undefined" || !recordingId || !recordingId.trim()) {
      throw new Error("recordingId is invalid.");
    }

    try {
      const result = await this.serverCallRestClient.stopRecording(
        recordingId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Get recording properties using recording id.
   *
   * @param recordingId - The recording id of the ongoing recording.
   * @param options - Additional request options contains GetRecordingState api options.
   */
  public async getRecordingProperties(
    recordingId: string,
    options: GetRecordingPropertiesOptions = {}
  ): Promise<CallRecordingProperties> {
    const { span, updatedOptions } = createSpan("ServerCallRestClient-Recording", options);

    if (typeof recordingId === "undefined" || !recordingId || !recordingId.trim()) {
      throw new Error("recordingId is invalid.");
    }

    try {
      const result = await this.serverCallRestClient.getRecordingProperties(
        recordingId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }
}
