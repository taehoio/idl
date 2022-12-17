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
import { Duration } from "../../../../../google/protobuf/duration";
import { Provider, providerFromJSON, providerToJSON, providerToNumber } from "../../user/v1/user";

export const protobufPackage = "taehoio.idl.services.auth.v1";

export enum TokenType {
  TOKEN_TYPE_UNSPECIFIED = "TOKEN_TYPE_UNSPECIFIED",
  TOKEN_TYPE_ACCESS = "TOKEN_TYPE_ACCESS",
  TOKEN_TYPE_REFRESH = "TOKEN_TYPE_REFRESH",
}

export function tokenTypeFromJSON(object: any): TokenType {
  switch (object) {
    case 0:
    case "TOKEN_TYPE_UNSPECIFIED":
      return TokenType.TOKEN_TYPE_UNSPECIFIED;
    case 1:
    case "TOKEN_TYPE_ACCESS":
      return TokenType.TOKEN_TYPE_ACCESS;
    case 2:
    case "TOKEN_TYPE_REFRESH":
      return TokenType.TOKEN_TYPE_REFRESH;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TokenType");
  }
}

export function tokenTypeToJSON(object: TokenType): string {
  switch (object) {
    case TokenType.TOKEN_TYPE_UNSPECIFIED:
      return "TOKEN_TYPE_UNSPECIFIED";
    case TokenType.TOKEN_TYPE_ACCESS:
      return "TOKEN_TYPE_ACCESS";
    case TokenType.TOKEN_TYPE_REFRESH:
      return "TOKEN_TYPE_REFRESH";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TokenType");
  }
}

export function tokenTypeToNumber(object: TokenType): number {
  switch (object) {
    case TokenType.TOKEN_TYPE_UNSPECIFIED:
      return 0;
    case TokenType.TOKEN_TYPE_ACCESS:
      return 1;
    case TokenType.TOKEN_TYPE_REFRESH:
      return 2;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TokenType");
  }
}

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
}

export interface AuthByRefreshTokenRequest {
  refresh_token: string;
}

export interface AuthByRefreshTokenResponse {
  access_token: string;
  access_token_expires_in?: Duration;
  refresh_token: string;
  refresh_token_expires_in?: Duration;
}

export interface AuthRequest {
  provider: Provider;
  identifier: string;
}

export interface AuthResponse {
  access_token: string;
  access_token_expires_in?: Duration;
  refresh_token: string;
  refresh_token_expires_in?: Duration;
}

export interface ParseTokenRequest {
  token: string;
}

export interface ParseTokenResponse {
  provider: Provider;
  identifier: string;
  token_type: TokenType;
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

function createBaseAuthByRefreshTokenRequest(): AuthByRefreshTokenRequest {
  return { refresh_token: "" };
}

export const AuthByRefreshTokenRequest = {
  encode(message: AuthByRefreshTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refresh_token !== "") {
      writer.uint32(10).string(message.refresh_token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthByRefreshTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthByRefreshTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refresh_token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthByRefreshTokenRequest {
    return { refresh_token: isSet(object.refresh_token) ? String(object.refresh_token) : "" };
  },

  toJSON(message: AuthByRefreshTokenRequest): unknown {
    const obj: any = {};
    message.refresh_token !== undefined && (obj.refresh_token = message.refresh_token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthByRefreshTokenRequest>, I>>(object: I): AuthByRefreshTokenRequest {
    const message = createBaseAuthByRefreshTokenRequest();
    message.refresh_token = object.refresh_token ?? "";
    return message;
  },
};

function createBaseAuthByRefreshTokenResponse(): AuthByRefreshTokenResponse {
  return {
    access_token: "",
    access_token_expires_in: undefined,
    refresh_token: "",
    refresh_token_expires_in: undefined,
  };
}

export const AuthByRefreshTokenResponse = {
  encode(message: AuthByRefreshTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.access_token !== "") {
      writer.uint32(10).string(message.access_token);
    }
    if (message.access_token_expires_in !== undefined) {
      Duration.encode(message.access_token_expires_in, writer.uint32(18).fork()).ldelim();
    }
    if (message.refresh_token !== "") {
      writer.uint32(26).string(message.refresh_token);
    }
    if (message.refresh_token_expires_in !== undefined) {
      Duration.encode(message.refresh_token_expires_in, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthByRefreshTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthByRefreshTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.access_token = reader.string();
          break;
        case 2:
          message.access_token_expires_in = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.refresh_token = reader.string();
          break;
        case 4:
          message.refresh_token_expires_in = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthByRefreshTokenResponse {
    return {
      access_token: isSet(object.access_token) ? String(object.access_token) : "",
      access_token_expires_in: isSet(object.access_token_expires_in)
        ? Duration.fromJSON(object.access_token_expires_in)
        : undefined,
      refresh_token: isSet(object.refresh_token) ? String(object.refresh_token) : "",
      refresh_token_expires_in: isSet(object.refresh_token_expires_in)
        ? Duration.fromJSON(object.refresh_token_expires_in)
        : undefined,
    };
  },

  toJSON(message: AuthByRefreshTokenResponse): unknown {
    const obj: any = {};
    message.access_token !== undefined && (obj.access_token = message.access_token);
    message.access_token_expires_in !== undefined && (obj.access_token_expires_in = message.access_token_expires_in
      ? Duration.toJSON(message.access_token_expires_in)
      : undefined);
    message.refresh_token !== undefined && (obj.refresh_token = message.refresh_token);
    message.refresh_token_expires_in !== undefined && (obj.refresh_token_expires_in = message.refresh_token_expires_in
      ? Duration.toJSON(message.refresh_token_expires_in)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthByRefreshTokenResponse>, I>>(object: I): AuthByRefreshTokenResponse {
    const message = createBaseAuthByRefreshTokenResponse();
    message.access_token = object.access_token ?? "";
    message.access_token_expires_in =
      (object.access_token_expires_in !== undefined && object.access_token_expires_in !== null)
        ? Duration.fromPartial(object.access_token_expires_in)
        : undefined;
    message.refresh_token = object.refresh_token ?? "";
    message.refresh_token_expires_in =
      (object.refresh_token_expires_in !== undefined && object.refresh_token_expires_in !== null)
        ? Duration.fromPartial(object.refresh_token_expires_in)
        : undefined;
    return message;
  },
};

function createBaseAuthRequest(): AuthRequest {
  return { provider: Provider.PROVIDER_UNSPECIFIED, identifier: "" };
}

export const AuthRequest = {
  encode(message: AuthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== Provider.PROVIDER_UNSPECIFIED) {
      writer.uint32(8).int32(providerToNumber(message.provider));
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = providerFromJSON(reader.int32());
          break;
        case 2:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthRequest {
    return {
      provider: isSet(object.provider) ? providerFromJSON(object.provider) : Provider.PROVIDER_UNSPECIFIED,
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
    };
  },

  toJSON(message: AuthRequest): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = providerToJSON(message.provider));
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthRequest>, I>>(object: I): AuthRequest {
    const message = createBaseAuthRequest();
    message.provider = object.provider ?? Provider.PROVIDER_UNSPECIFIED;
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseAuthResponse(): AuthResponse {
  return {
    access_token: "",
    access_token_expires_in: undefined,
    refresh_token: "",
    refresh_token_expires_in: undefined,
  };
}

export const AuthResponse = {
  encode(message: AuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.access_token !== "") {
      writer.uint32(10).string(message.access_token);
    }
    if (message.access_token_expires_in !== undefined) {
      Duration.encode(message.access_token_expires_in, writer.uint32(18).fork()).ldelim();
    }
    if (message.refresh_token !== "") {
      writer.uint32(26).string(message.refresh_token);
    }
    if (message.refresh_token_expires_in !== undefined) {
      Duration.encode(message.refresh_token_expires_in, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.access_token = reader.string();
          break;
        case 2:
          message.access_token_expires_in = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.refresh_token = reader.string();
          break;
        case 4:
          message.refresh_token_expires_in = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthResponse {
    return {
      access_token: isSet(object.access_token) ? String(object.access_token) : "",
      access_token_expires_in: isSet(object.access_token_expires_in)
        ? Duration.fromJSON(object.access_token_expires_in)
        : undefined,
      refresh_token: isSet(object.refresh_token) ? String(object.refresh_token) : "",
      refresh_token_expires_in: isSet(object.refresh_token_expires_in)
        ? Duration.fromJSON(object.refresh_token_expires_in)
        : undefined,
    };
  },

  toJSON(message: AuthResponse): unknown {
    const obj: any = {};
    message.access_token !== undefined && (obj.access_token = message.access_token);
    message.access_token_expires_in !== undefined && (obj.access_token_expires_in = message.access_token_expires_in
      ? Duration.toJSON(message.access_token_expires_in)
      : undefined);
    message.refresh_token !== undefined && (obj.refresh_token = message.refresh_token);
    message.refresh_token_expires_in !== undefined && (obj.refresh_token_expires_in = message.refresh_token_expires_in
      ? Duration.toJSON(message.refresh_token_expires_in)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthResponse>, I>>(object: I): AuthResponse {
    const message = createBaseAuthResponse();
    message.access_token = object.access_token ?? "";
    message.access_token_expires_in =
      (object.access_token_expires_in !== undefined && object.access_token_expires_in !== null)
        ? Duration.fromPartial(object.access_token_expires_in)
        : undefined;
    message.refresh_token = object.refresh_token ?? "";
    message.refresh_token_expires_in =
      (object.refresh_token_expires_in !== undefined && object.refresh_token_expires_in !== null)
        ? Duration.fromPartial(object.refresh_token_expires_in)
        : undefined;
    return message;
  },
};

function createBaseParseTokenRequest(): ParseTokenRequest {
  return { token: "" };
}

export const ParseTokenRequest = {
  encode(message: ParseTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParseTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParseTokenRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: ParseTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParseTokenRequest>, I>>(object: I): ParseTokenRequest {
    const message = createBaseParseTokenRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseParseTokenResponse(): ParseTokenResponse {
  return { provider: Provider.PROVIDER_UNSPECIFIED, identifier: "", token_type: TokenType.TOKEN_TYPE_UNSPECIFIED };
}

export const ParseTokenResponse = {
  encode(message: ParseTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== Provider.PROVIDER_UNSPECIFIED) {
      writer.uint32(8).int32(providerToNumber(message.provider));
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.token_type !== TokenType.TOKEN_TYPE_UNSPECIFIED) {
      writer.uint32(24).int32(tokenTypeToNumber(message.token_type));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParseTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = providerFromJSON(reader.int32());
          break;
        case 2:
          message.identifier = reader.string();
          break;
        case 3:
          message.token_type = tokenTypeFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParseTokenResponse {
    return {
      provider: isSet(object.provider) ? providerFromJSON(object.provider) : Provider.PROVIDER_UNSPECIFIED,
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      token_type: isSet(object.token_type) ? tokenTypeFromJSON(object.token_type) : TokenType.TOKEN_TYPE_UNSPECIFIED,
    };
  },

  toJSON(message: ParseTokenResponse): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = providerToJSON(message.provider));
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.token_type !== undefined && (obj.token_type = tokenTypeToJSON(message.token_type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParseTokenResponse>, I>>(object: I): ParseTokenResponse {
    const message = createBaseParseTokenResponse();
    message.provider = object.provider ?? Provider.PROVIDER_UNSPECIFIED;
    message.identifier = object.identifier ?? "";
    message.token_type = object.token_type ?? TokenType.TOKEN_TYPE_UNSPECIFIED;
    return message;
  },
};

export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  healthCheck: {
    path: "/taehoio.idl.services.auth.v1.AuthService/HealthCheck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) => Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) => Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
  authByRefreshToken: {
    path: "/taehoio.idl.services.auth.v1.AuthService/AuthByRefreshToken",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AuthByRefreshTokenRequest) =>
      Buffer.from(AuthByRefreshTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AuthByRefreshTokenRequest.decode(value),
    responseSerialize: (value: AuthByRefreshTokenResponse) =>
      Buffer.from(AuthByRefreshTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthByRefreshTokenResponse.decode(value),
  },
  auth: {
    path: "/taehoio.idl.services.auth.v1.AuthService/Auth",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AuthRequest) => Buffer.from(AuthRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AuthRequest.decode(value),
    responseSerialize: (value: AuthResponse) => Buffer.from(AuthResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthResponse.decode(value),
  },
  parseToken: {
    path: "/taehoio.idl.services.auth.v1.AuthService/ParseToken",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ParseTokenRequest) => Buffer.from(ParseTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ParseTokenRequest.decode(value),
    responseSerialize: (value: ParseTokenResponse) => Buffer.from(ParseTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ParseTokenResponse.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  healthCheck: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  authByRefreshToken: handleUnaryCall<AuthByRefreshTokenRequest, AuthByRefreshTokenResponse>;
  auth: handleUnaryCall<AuthRequest, AuthResponse>;
  parseToken: handleUnaryCall<ParseTokenRequest, ParseTokenResponse>;
}

export interface AuthServiceClient extends Client {
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
  authByRefreshToken(
    request: AuthByRefreshTokenRequest,
    callback: (error: ServiceError | null, response: AuthByRefreshTokenResponse) => void,
  ): ClientUnaryCall;
  authByRefreshToken(
    request: AuthByRefreshTokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthByRefreshTokenResponse) => void,
  ): ClientUnaryCall;
  authByRefreshToken(
    request: AuthByRefreshTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthByRefreshTokenResponse) => void,
  ): ClientUnaryCall;
  auth(request: AuthRequest, callback: (error: ServiceError | null, response: AuthResponse) => void): ClientUnaryCall;
  auth(
    request: AuthRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthResponse) => void,
  ): ClientUnaryCall;
  auth(
    request: AuthRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthResponse) => void,
  ): ClientUnaryCall;
  parseToken(
    request: ParseTokenRequest,
    callback: (error: ServiceError | null, response: ParseTokenResponse) => void,
  ): ClientUnaryCall;
  parseToken(
    request: ParseTokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ParseTokenResponse) => void,
  ): ClientUnaryCall;
  parseToken(
    request: ParseTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ParseTokenResponse) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "taehoio.idl.services.auth.v1.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
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
