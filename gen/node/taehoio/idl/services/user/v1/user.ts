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
import { StringValue } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "taehoio.idl.services.user.v1";

export enum Provider {
  PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED",
  PROVIDER_EMAIL = "PROVIDER_EMAIL",
}

export function providerFromJSON(object: any): Provider {
  switch (object) {
    case 0:
    case "PROVIDER_UNSPECIFIED":
      return Provider.PROVIDER_UNSPECIFIED;
    case 1:
    case "PROVIDER_EMAIL":
      return Provider.PROVIDER_EMAIL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Provider");
  }
}

export function providerToJSON(object: Provider): string {
  switch (object) {
    case Provider.PROVIDER_UNSPECIFIED:
      return "PROVIDER_UNSPECIFIED";
    case Provider.PROVIDER_EMAIL:
      return "PROVIDER_EMAIL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Provider");
  }
}

export function providerToNumber(object: Provider): number {
  switch (object) {
    case Provider.PROVIDER_UNSPECIFIED:
      return 0;
    case Provider.PROVIDER_EMAIL:
      return 1;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Provider");
  }
}

export enum Role {
  ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED",
  ROLE_USER = "ROLE_USER",
  ROLE_ADMIN = "ROLE_ADMIN",
}

export function roleFromJSON(object: any): Role {
  switch (object) {
    case 0:
    case "ROLE_UNSPECIFIED":
      return Role.ROLE_UNSPECIFIED;
    case 1:
    case "ROLE_USER":
      return Role.ROLE_USER;
    case 2:
    case "ROLE_ADMIN":
      return Role.ROLE_ADMIN;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Role");
  }
}

export function roleToJSON(object: Role): string {
  switch (object) {
    case Role.ROLE_UNSPECIFIED:
      return "ROLE_UNSPECIFIED";
    case Role.ROLE_USER:
      return "ROLE_USER";
    case Role.ROLE_ADMIN:
      return "ROLE_ADMIN";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Role");
  }
}

export function roleToNumber(object: Role): number {
  switch (object) {
    case Role.ROLE_UNSPECIFIED:
      return 0;
    case Role.ROLE_USER:
      return 1;
    case Role.ROLE_ADMIN:
      return 2;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Role");
  }
}

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
}

export interface SignUpRequest {
  provider: Provider;
  identifier: string;
  password?: string;
  roles: Role[];
}

export interface SignUpResponse {
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
  refresh_token: string;
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

function createBaseSignUpRequest(): SignUpRequest {
  return { provider: Provider.PROVIDER_UNSPECIFIED, identifier: "", password: undefined, roles: [] };
}

export const SignUpRequest = {
  encode(message: SignUpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== Provider.PROVIDER_UNSPECIFIED) {
      writer.uint32(8).int32(providerToNumber(message.provider));
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.password !== undefined) {
      StringValue.encode({ value: message.password! }, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.roles) {
      writer.int32(roleToNumber(v));
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = providerFromJSON(reader.int32());
          break;
        case 2:
          message.identifier = reader.string();
          break;
        case 4:
          message.password = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(roleFromJSON(reader.int32()));
            }
          } else {
            message.roles.push(roleFromJSON(reader.int32()));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignUpRequest {
    return {
      provider: isSet(object.provider) ? providerFromJSON(object.provider) : Provider.PROVIDER_UNSPECIFIED,
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      password: isSet(object.password) ? String(object.password) : undefined,
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => roleFromJSON(e)) : [],
    };
  },

  toJSON(message: SignUpRequest): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = providerToJSON(message.provider));
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    if (message.roles) {
      obj.roles = message.roles.map((e) => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignUpRequest>, I>>(object: I): SignUpRequest {
    const message = createBaseSignUpRequest();
    message.provider = object.provider ?? Provider.PROVIDER_UNSPECIFIED;
    message.identifier = object.identifier ?? "";
    message.password = object.password ?? undefined;
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

function createBaseSignUpResponse(): SignUpResponse {
  return {};
}

export const SignUpResponse = {
  encode(_: SignUpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpResponse();
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

  fromJSON(_: any): SignUpResponse {
    return {};
  },

  toJSON(_: SignUpResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignUpResponse>, I>>(_: I): SignUpResponse {
    const message = createBaseSignUpResponse();
    return message;
  },
};

function createBaseSignInRequest(): SignInRequest {
  return { email: "", password: "" };
}

export const SignInRequest = {
  encode(message: SignInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: SignInRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInRequest>, I>>(object: I): SignInRequest {
    const message = createBaseSignInRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseSignInResponse(): SignInResponse {
  return { access_token: "", refresh_token: "" };
}

export const SignInResponse = {
  encode(message: SignInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.access_token !== "") {
      writer.uint32(10).string(message.access_token);
    }
    if (message.refresh_token !== "") {
      writer.uint32(18).string(message.refresh_token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.access_token = reader.string();
          break;
        case 2:
          message.refresh_token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInResponse {
    return {
      access_token: isSet(object.access_token) ? String(object.access_token) : "",
      refresh_token: isSet(object.refresh_token) ? String(object.refresh_token) : "",
    };
  },

  toJSON(message: SignInResponse): unknown {
    const obj: any = {};
    message.access_token !== undefined && (obj.access_token = message.access_token);
    message.refresh_token !== undefined && (obj.refresh_token = message.refresh_token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInResponse>, I>>(object: I): SignInResponse {
    const message = createBaseSignInResponse();
    message.access_token = object.access_token ?? "";
    message.refresh_token = object.refresh_token ?? "";
    return message;
  },
};

export type UserServiceService = typeof UserServiceService;
export const UserServiceService = {
  healthCheck: {
    path: "/taehoio.idl.services.user.v1.UserService/HealthCheck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) => Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) => Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
  signUp: {
    path: "/taehoio.idl.services.user.v1.UserService/SignUp",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SignUpRequest) => Buffer.from(SignUpRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SignUpRequest.decode(value),
    responseSerialize: (value: SignUpResponse) => Buffer.from(SignUpResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SignUpResponse.decode(value),
  },
  signIn: {
    path: "/taehoio.idl.services.user.v1.UserService/SignIn",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SignInRequest) => Buffer.from(SignInRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SignInRequest.decode(value),
    responseSerialize: (value: SignInResponse) => Buffer.from(SignInResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SignInResponse.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  healthCheck: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  signUp: handleUnaryCall<SignUpRequest, SignUpResponse>;
  signIn: handleUnaryCall<SignInRequest, SignInResponse>;
}

export interface UserServiceClient extends Client {
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
  signUp(
    request: SignUpRequest,
    callback: (error: ServiceError | null, response: SignUpResponse) => void,
  ): ClientUnaryCall;
  signUp(
    request: SignUpRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SignUpResponse) => void,
  ): ClientUnaryCall;
  signUp(
    request: SignUpRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SignUpResponse) => void,
  ): ClientUnaryCall;
  signIn(
    request: SignInRequest,
    callback: (error: ServiceError | null, response: SignInResponse) => void,
  ): ClientUnaryCall;
  signIn(
    request: SignInRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SignInResponse) => void,
  ): ClientUnaryCall;
  signIn(
    request: SignInRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SignInResponse) => void,
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
  UserServiceService,
  "taehoio.idl.services.user.v1.UserService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
  service: typeof UserServiceService;
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
