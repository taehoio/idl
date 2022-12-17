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

export const protobufPackage = "taehoio.idl.services.baemincrypto.v1";

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
}

export interface EncryptUserBaedalHeaderValueRequest {
  input_text: string;
}

export interface EncryptUserBaedalHeaderValueResponse {
  encrypted_text: string;
}

export interface DecryptUserBaedalHeaderValueRequest {
  encrypted_text: string;
}

export interface DecryptUserBaedalHeaderValueResponse {
  decrypted_text: string;
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

function createBaseEncryptUserBaedalHeaderValueRequest(): EncryptUserBaedalHeaderValueRequest {
  return { input_text: "" };
}

export const EncryptUserBaedalHeaderValueRequest = {
  encode(message: EncryptUserBaedalHeaderValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input_text !== "") {
      writer.uint32(10).string(message.input_text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptUserBaedalHeaderValueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptUserBaedalHeaderValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input_text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptUserBaedalHeaderValueRequest {
    return { input_text: isSet(object.input_text) ? String(object.input_text) : "" };
  },

  toJSON(message: EncryptUserBaedalHeaderValueRequest): unknown {
    const obj: any = {};
    message.input_text !== undefined && (obj.input_text = message.input_text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EncryptUserBaedalHeaderValueRequest>, I>>(
    object: I,
  ): EncryptUserBaedalHeaderValueRequest {
    const message = createBaseEncryptUserBaedalHeaderValueRequest();
    message.input_text = object.input_text ?? "";
    return message;
  },
};

function createBaseEncryptUserBaedalHeaderValueResponse(): EncryptUserBaedalHeaderValueResponse {
  return { encrypted_text: "" };
}

export const EncryptUserBaedalHeaderValueResponse = {
  encode(message: EncryptUserBaedalHeaderValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encrypted_text !== "") {
      writer.uint32(10).string(message.encrypted_text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptUserBaedalHeaderValueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptUserBaedalHeaderValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encrypted_text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptUserBaedalHeaderValueResponse {
    return { encrypted_text: isSet(object.encrypted_text) ? String(object.encrypted_text) : "" };
  },

  toJSON(message: EncryptUserBaedalHeaderValueResponse): unknown {
    const obj: any = {};
    message.encrypted_text !== undefined && (obj.encrypted_text = message.encrypted_text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EncryptUserBaedalHeaderValueResponse>, I>>(
    object: I,
  ): EncryptUserBaedalHeaderValueResponse {
    const message = createBaseEncryptUserBaedalHeaderValueResponse();
    message.encrypted_text = object.encrypted_text ?? "";
    return message;
  },
};

function createBaseDecryptUserBaedalHeaderValueRequest(): DecryptUserBaedalHeaderValueRequest {
  return { encrypted_text: "" };
}

export const DecryptUserBaedalHeaderValueRequest = {
  encode(message: DecryptUserBaedalHeaderValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encrypted_text !== "") {
      writer.uint32(10).string(message.encrypted_text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecryptUserBaedalHeaderValueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecryptUserBaedalHeaderValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encrypted_text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecryptUserBaedalHeaderValueRequest {
    return { encrypted_text: isSet(object.encrypted_text) ? String(object.encrypted_text) : "" };
  },

  toJSON(message: DecryptUserBaedalHeaderValueRequest): unknown {
    const obj: any = {};
    message.encrypted_text !== undefined && (obj.encrypted_text = message.encrypted_text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DecryptUserBaedalHeaderValueRequest>, I>>(
    object: I,
  ): DecryptUserBaedalHeaderValueRequest {
    const message = createBaseDecryptUserBaedalHeaderValueRequest();
    message.encrypted_text = object.encrypted_text ?? "";
    return message;
  },
};

function createBaseDecryptUserBaedalHeaderValueResponse(): DecryptUserBaedalHeaderValueResponse {
  return { decrypted_text: "" };
}

export const DecryptUserBaedalHeaderValueResponse = {
  encode(message: DecryptUserBaedalHeaderValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.decrypted_text !== "") {
      writer.uint32(10).string(message.decrypted_text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecryptUserBaedalHeaderValueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecryptUserBaedalHeaderValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decrypted_text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecryptUserBaedalHeaderValueResponse {
    return { decrypted_text: isSet(object.decrypted_text) ? String(object.decrypted_text) : "" };
  },

  toJSON(message: DecryptUserBaedalHeaderValueResponse): unknown {
    const obj: any = {};
    message.decrypted_text !== undefined && (obj.decrypted_text = message.decrypted_text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DecryptUserBaedalHeaderValueResponse>, I>>(
    object: I,
  ): DecryptUserBaedalHeaderValueResponse {
    const message = createBaseDecryptUserBaedalHeaderValueResponse();
    message.decrypted_text = object.decrypted_text ?? "";
    return message;
  },
};

export type BaemincryptoServiceService = typeof BaemincryptoServiceService;
export const BaemincryptoServiceService = {
  healthCheck: {
    path: "/taehoio.idl.services.baemincrypto.v1.BaemincryptoService/HealthCheck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) => Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) => Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
  encryptUserBaedalHeaderValue: {
    path: "/taehoio.idl.services.baemincrypto.v1.BaemincryptoService/EncryptUserBaedalHeaderValue",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EncryptUserBaedalHeaderValueRequest) =>
      Buffer.from(EncryptUserBaedalHeaderValueRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EncryptUserBaedalHeaderValueRequest.decode(value),
    responseSerialize: (value: EncryptUserBaedalHeaderValueResponse) =>
      Buffer.from(EncryptUserBaedalHeaderValueResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EncryptUserBaedalHeaderValueResponse.decode(value),
  },
  decryptUserBaedalHeaderValue: {
    path: "/taehoio.idl.services.baemincrypto.v1.BaemincryptoService/DecryptUserBaedalHeaderValue",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DecryptUserBaedalHeaderValueRequest) =>
      Buffer.from(DecryptUserBaedalHeaderValueRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DecryptUserBaedalHeaderValueRequest.decode(value),
    responseSerialize: (value: DecryptUserBaedalHeaderValueResponse) =>
      Buffer.from(DecryptUserBaedalHeaderValueResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DecryptUserBaedalHeaderValueResponse.decode(value),
  },
} as const;

export interface BaemincryptoServiceServer extends UntypedServiceImplementation {
  healthCheck: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  encryptUserBaedalHeaderValue: handleUnaryCall<
    EncryptUserBaedalHeaderValueRequest,
    EncryptUserBaedalHeaderValueResponse
  >;
  decryptUserBaedalHeaderValue: handleUnaryCall<
    DecryptUserBaedalHeaderValueRequest,
    DecryptUserBaedalHeaderValueResponse
  >;
}

export interface BaemincryptoServiceClient extends Client {
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
  encryptUserBaedalHeaderValue(
    request: EncryptUserBaedalHeaderValueRequest,
    callback: (error: ServiceError | null, response: EncryptUserBaedalHeaderValueResponse) => void,
  ): ClientUnaryCall;
  encryptUserBaedalHeaderValue(
    request: EncryptUserBaedalHeaderValueRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EncryptUserBaedalHeaderValueResponse) => void,
  ): ClientUnaryCall;
  encryptUserBaedalHeaderValue(
    request: EncryptUserBaedalHeaderValueRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EncryptUserBaedalHeaderValueResponse) => void,
  ): ClientUnaryCall;
  decryptUserBaedalHeaderValue(
    request: DecryptUserBaedalHeaderValueRequest,
    callback: (error: ServiceError | null, response: DecryptUserBaedalHeaderValueResponse) => void,
  ): ClientUnaryCall;
  decryptUserBaedalHeaderValue(
    request: DecryptUserBaedalHeaderValueRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DecryptUserBaedalHeaderValueResponse) => void,
  ): ClientUnaryCall;
  decryptUserBaedalHeaderValue(
    request: DecryptUserBaedalHeaderValueRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DecryptUserBaedalHeaderValueResponse) => void,
  ): ClientUnaryCall;
}

export const BaemincryptoServiceClient = makeGenericClientConstructor(
  BaemincryptoServiceService,
  "taehoio.idl.services.baemincrypto.v1.BaemincryptoService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BaemincryptoServiceClient;
  service: typeof BaemincryptoServiceService;
};

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
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
