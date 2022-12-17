/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "taehoio.idl.services.texttospeech.v1";

export enum VoiceGender {
  VOICE_GENDER_UNSPECIFIED = "VOICE_GENDER_UNSPECIFIED",
  VOICE_GENDER_MALE = "VOICE_GENDER_MALE",
  VOICE_GENDER_FEMALE = "VOICE_GENDER_FEMALE",
}

export function voiceGenderFromJSON(object: any): VoiceGender {
  switch (object) {
    case 0:
    case "VOICE_GENDER_UNSPECIFIED":
      return VoiceGender.VOICE_GENDER_UNSPECIFIED;
    case 1:
    case "VOICE_GENDER_MALE":
      return VoiceGender.VOICE_GENDER_MALE;
    case 2:
    case "VOICE_GENDER_FEMALE":
      return VoiceGender.VOICE_GENDER_FEMALE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum VoiceGender");
  }
}

export function voiceGenderToJSON(object: VoiceGender): string {
  switch (object) {
    case VoiceGender.VOICE_GENDER_UNSPECIFIED:
      return "VOICE_GENDER_UNSPECIFIED";
    case VoiceGender.VOICE_GENDER_MALE:
      return "VOICE_GENDER_MALE";
    case VoiceGender.VOICE_GENDER_FEMALE:
      return "VOICE_GENDER_FEMALE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum VoiceGender");
  }
}

export function voiceGenderToNumber(object: VoiceGender): number {
  switch (object) {
    case VoiceGender.VOICE_GENDER_UNSPECIFIED:
      return 0;
    case VoiceGender.VOICE_GENDER_MALE:
      return 1;
    case VoiceGender.VOICE_GENDER_FEMALE:
      return 2;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum VoiceGender");
  }
}

export enum Language {
  LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED",
  LANGUAGE_EN_US = "LANGUAGE_EN_US",
  LANGUAGE_KO_KR = "LANGUAGE_KO_KR",
}

export function languageFromJSON(object: any): Language {
  switch (object) {
    case 0:
    case "LANGUAGE_UNSPECIFIED":
      return Language.LANGUAGE_UNSPECIFIED;
    case 1:
    case "LANGUAGE_EN_US":
      return Language.LANGUAGE_EN_US;
    case 2:
    case "LANGUAGE_KO_KR":
      return Language.LANGUAGE_KO_KR;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Language");
  }
}

export function languageToJSON(object: Language): string {
  switch (object) {
    case Language.LANGUAGE_UNSPECIFIED:
      return "LANGUAGE_UNSPECIFIED";
    case Language.LANGUAGE_EN_US:
      return "LANGUAGE_EN_US";
    case Language.LANGUAGE_KO_KR:
      return "LANGUAGE_KO_KR";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Language");
  }
}

export function languageToNumber(object: Language): number {
  switch (object) {
    case Language.LANGUAGE_UNSPECIFIED:
      return 0;
    case Language.LANGUAGE_EN_US:
      return 1;
    case Language.LANGUAGE_KO_KR:
      return 2;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Language");
  }
}

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
}

export interface SynthesizeRequest {
  text: string;
  language?: Language | undefined;
}

export interface SpeechMark {
  word_index: number;
  time_ms: number;
}

export interface SynthesizeResponse {
  audio_content: Buffer;
  speech_marks: SpeechMark[];
}

function createBaseHealthCheckRequest(): HealthCheckRequest {
  return {};
}

export const HealthCheckRequest = {
  encode(_: HealthCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): HealthCheckRequest {
    return {};
  },

  toJSON(_: HealthCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckRequest>, I>>(_: I): HealthCheckRequest {
    const message = createBaseHealthCheckRequest();
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return {};
}

export const HealthCheckResponse = {
  encode(_: HealthCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): HealthCheckResponse {
    return {};
  },

  toJSON(_: HealthCheckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(_: I): HealthCheckResponse {
    const message = createBaseHealthCheckResponse();
    return message;
  },
};

function createBaseSynthesizeRequest(): SynthesizeRequest {
  return { text: "", language: undefined };
}

export const SynthesizeRequest = {
  encode(message: SynthesizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.language !== undefined) {
      writer.uint32(16).int32(languageToNumber(message.language));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SynthesizeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSynthesizeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.language = languageFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SynthesizeRequest {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      language: isSet(object.language) ? languageFromJSON(object.language) : undefined,
    };
  },

  toJSON(message: SynthesizeRequest): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.language !== undefined &&
      (obj.language = message.language !== undefined ? languageToJSON(message.language) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SynthesizeRequest>, I>>(object: I): SynthesizeRequest {
    const message = createBaseSynthesizeRequest();
    message.text = object.text ?? "";
    message.language = object.language ?? undefined;
    return message;
  },
};

function createBaseSpeechMark(): SpeechMark {
  return { word_index: 0, time_ms: 0 };
}

export const SpeechMark = {
  encode(message: SpeechMark, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.word_index !== 0) {
      writer.uint32(8).int32(message.word_index);
    }
    if (message.time_ms !== 0) {
      writer.uint32(16).int32(message.time_ms);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeechMark {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpeechMark();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.word_index = reader.int32();
          break;
        case 2:
          message.time_ms = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpeechMark {
    return {
      word_index: isSet(object.word_index) ? Number(object.word_index) : 0,
      time_ms: isSet(object.time_ms) ? Number(object.time_ms) : 0,
    };
  },

  toJSON(message: SpeechMark): unknown {
    const obj: any = {};
    message.word_index !== undefined && (obj.word_index = Math.round(message.word_index));
    message.time_ms !== undefined && (obj.time_ms = Math.round(message.time_ms));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpeechMark>, I>>(object: I): SpeechMark {
    const message = createBaseSpeechMark();
    message.word_index = object.word_index ?? 0;
    message.time_ms = object.time_ms ?? 0;
    return message;
  },
};

function createBaseSynthesizeResponse(): SynthesizeResponse {
  return { audio_content: Buffer.alloc(0), speech_marks: [] };
}

export const SynthesizeResponse = {
  encode(message: SynthesizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audio_content.length !== 0) {
      writer.uint32(10).bytes(message.audio_content);
    }
    for (const v of message.speech_marks) {
      SpeechMark.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SynthesizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSynthesizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audio_content = reader.bytes() as Buffer;
          break;
        case 2:
          message.speech_marks.push(SpeechMark.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SynthesizeResponse {
    return {
      audio_content: isSet(object.audio_content) ? Buffer.from(bytesFromBase64(object.audio_content)) : Buffer.alloc(0),
      speech_marks: Array.isArray(object?.speech_marks)
        ? object.speech_marks.map((e: any) => SpeechMark.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SynthesizeResponse): unknown {
    const obj: any = {};
    message.audio_content !== undefined &&
      (obj.audio_content = base64FromBytes(
        message.audio_content !== undefined ? message.audio_content : Buffer.alloc(0),
      ));
    if (message.speech_marks) {
      obj.speech_marks = message.speech_marks.map((e) => e ? SpeechMark.toJSON(e) : undefined);
    } else {
      obj.speech_marks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SynthesizeResponse>, I>>(object: I): SynthesizeResponse {
    const message = createBaseSynthesizeResponse();
    message.audio_content = object.audio_content ?? Buffer.alloc(0);
    message.speech_marks = object.speech_marks?.map((e) => SpeechMark.fromPartial(e)) || [];
    return message;
  },
};

export type TexttospeechServiceService = typeof TexttospeechServiceService;
export const TexttospeechServiceService = {
  healthCheck: {
    path: "/taehoio.idl.services.texttospeech.v1.TexttospeechService/HealthCheck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) => Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) => Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
  synthesize: {
    path: "/taehoio.idl.services.texttospeech.v1.TexttospeechService/Synthesize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SynthesizeRequest) => Buffer.from(SynthesizeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SynthesizeRequest.decode(value),
    responseSerialize: (value: SynthesizeResponse) => Buffer.from(SynthesizeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SynthesizeResponse.decode(value),
  },
} as const;

export interface TexttospeechServiceServer extends UntypedServiceImplementation {
  healthCheck: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  synthesize: handleUnaryCall<SynthesizeRequest, SynthesizeResponse>;
}

export interface TexttospeechServiceClient extends Client {
  healthCheck(
    request: HealthCheckRequest,
    callback: (error: ServiceError | null, response: HealthCheckResponse) => void,
  ): ClientUnaryCall;
  healthCheck(
    request: HealthCheckRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HealthCheckResponse) => void,
  ): ClientUnaryCall;
  healthCheck(
    request: HealthCheckRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HealthCheckResponse) => void,
  ): ClientUnaryCall;
  synthesize(
    request: SynthesizeRequest,
    callback: (error: ServiceError | null, response: SynthesizeResponse) => void,
  ): ClientUnaryCall;
  synthesize(
    request: SynthesizeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SynthesizeResponse) => void,
  ): ClientUnaryCall;
  synthesize(
    request: SynthesizeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SynthesizeResponse) => void,
  ): ClientUnaryCall;
}

export const TexttospeechServiceClient = makeGenericClientConstructor(
  TexttospeechServiceService,
  "taehoio.idl.services.texttospeech.v1.TexttospeechService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TexttospeechServiceClient;
  service: typeof TexttospeechServiceService;
};

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
