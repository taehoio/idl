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

export const protobufPackage = "taehoio.idl.services.oneonone.v1";

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
}

export interface ListCategoriesRequest {
}

export interface Category {
  id: string;
  name: string;
}

export interface Question {
  id: string;
  question: string;
}

export interface ListCategoriesResponse {
  categories: Category[];
}

export interface ListQuestionsByCategoryIdRequest {
  category_id: string;
}

export interface ListQuestionsByCategoryIdResponse {
  questions: Question[];
}

export interface GetRandomQuestionByCategoryIdRequest {
  category_id: string;
}

export interface GetRandomQuestionByCategoryIdResponse {
  question?: Question;
}

export interface GetQuestionRequest {
  id: string;
}

export interface GetQuestionResponse {
  question?: Question;
}

export interface GetRandomQuestionRequest {
}

export interface GetRandomQuestionResponse {
  question?: Question;
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

function createBaseListCategoriesRequest(): ListCategoriesRequest {
  return {};
}

export const ListCategoriesRequest = {
  encode(_: ListCategoriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCategoriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCategoriesRequest();
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

  fromJSON(_: any): ListCategoriesRequest {
    return {};
  },

  toJSON(_: ListCategoriesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCategoriesRequest>, I>>(_: I): ListCategoriesRequest {
    const message = createBaseListCategoriesRequest();
    return message;
  },
};

function createBaseCategory(): Category {
  return { id: "", name: "" };
}

export const Category = {
  encode(message: Category, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Category {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Category {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Category): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Category>, I>>(object: I): Category {
    const message = createBaseCategory();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQuestion(): Question {
  return { id: "", question: "" };
}

export const Question = {
  encode(message: Question, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.question !== "") {
      writer.uint32(18).string(message.question);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Question {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.question = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Question {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      question: isSet(object.question) ? String(object.question) : "",
    };
  },

  toJSON(message: Question): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.question !== undefined && (obj.question = message.question);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Question>, I>>(object: I): Question {
    const message = createBaseQuestion();
    message.id = object.id ?? "";
    message.question = object.question ?? "";
    return message;
  },
};

function createBaseListCategoriesResponse(): ListCategoriesResponse {
  return { categories: [] };
}

export const ListCategoriesResponse = {
  encode(message: ListCategoriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.categories) {
      Category.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCategoriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCategoriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categories.push(Category.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCategoriesResponse {
    return {
      categories: Array.isArray(object?.categories) ? object.categories.map((e: any) => Category.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListCategoriesResponse): unknown {
    const obj: any = {};
    if (message.categories) {
      obj.categories = message.categories.map((e) => e ? Category.toJSON(e) : undefined);
    } else {
      obj.categories = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCategoriesResponse>, I>>(object: I): ListCategoriesResponse {
    const message = createBaseListCategoriesResponse();
    message.categories = object.categories?.map((e) => Category.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListQuestionsByCategoryIdRequest(): ListQuestionsByCategoryIdRequest {
  return { category_id: "" };
}

export const ListQuestionsByCategoryIdRequest = {
  encode(message: ListQuestionsByCategoryIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category_id !== "") {
      writer.uint32(10).string(message.category_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListQuestionsByCategoryIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQuestionsByCategoryIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListQuestionsByCategoryIdRequest {
    return { category_id: isSet(object.category_id) ? String(object.category_id) : "" };
  },

  toJSON(message: ListQuestionsByCategoryIdRequest): unknown {
    const obj: any = {};
    message.category_id !== undefined && (obj.category_id = message.category_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListQuestionsByCategoryIdRequest>, I>>(
    object: I,
  ): ListQuestionsByCategoryIdRequest {
    const message = createBaseListQuestionsByCategoryIdRequest();
    message.category_id = object.category_id ?? "";
    return message;
  },
};

function createBaseListQuestionsByCategoryIdResponse(): ListQuestionsByCategoryIdResponse {
  return { questions: [] };
}

export const ListQuestionsByCategoryIdResponse = {
  encode(message: ListQuestionsByCategoryIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.questions) {
      Question.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListQuestionsByCategoryIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQuestionsByCategoryIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questions.push(Question.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListQuestionsByCategoryIdResponse {
    return {
      questions: Array.isArray(object?.questions) ? object.questions.map((e: any) => Question.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListQuestionsByCategoryIdResponse): unknown {
    const obj: any = {};
    if (message.questions) {
      obj.questions = message.questions.map((e) => e ? Question.toJSON(e) : undefined);
    } else {
      obj.questions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListQuestionsByCategoryIdResponse>, I>>(
    object: I,
  ): ListQuestionsByCategoryIdResponse {
    const message = createBaseListQuestionsByCategoryIdResponse();
    message.questions = object.questions?.map((e) => Question.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetRandomQuestionByCategoryIdRequest(): GetRandomQuestionByCategoryIdRequest {
  return { category_id: "" };
}

export const GetRandomQuestionByCategoryIdRequest = {
  encode(message: GetRandomQuestionByCategoryIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category_id !== "") {
      writer.uint32(10).string(message.category_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRandomQuestionByCategoryIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRandomQuestionByCategoryIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRandomQuestionByCategoryIdRequest {
    return { category_id: isSet(object.category_id) ? String(object.category_id) : "" };
  },

  toJSON(message: GetRandomQuestionByCategoryIdRequest): unknown {
    const obj: any = {};
    message.category_id !== undefined && (obj.category_id = message.category_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRandomQuestionByCategoryIdRequest>, I>>(
    object: I,
  ): GetRandomQuestionByCategoryIdRequest {
    const message = createBaseGetRandomQuestionByCategoryIdRequest();
    message.category_id = object.category_id ?? "";
    return message;
  },
};

function createBaseGetRandomQuestionByCategoryIdResponse(): GetRandomQuestionByCategoryIdResponse {
  return { question: undefined };
}

export const GetRandomQuestionByCategoryIdResponse = {
  encode(message: GetRandomQuestionByCategoryIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.question !== undefined) {
      Question.encode(message.question, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRandomQuestionByCategoryIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRandomQuestionByCategoryIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question = Question.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRandomQuestionByCategoryIdResponse {
    return { question: isSet(object.question) ? Question.fromJSON(object.question) : undefined };
  },

  toJSON(message: GetRandomQuestionByCategoryIdResponse): unknown {
    const obj: any = {};
    message.question !== undefined && (obj.question = message.question ? Question.toJSON(message.question) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRandomQuestionByCategoryIdResponse>, I>>(
    object: I,
  ): GetRandomQuestionByCategoryIdResponse {
    const message = createBaseGetRandomQuestionByCategoryIdResponse();
    message.question = (object.question !== undefined && object.question !== null)
      ? Question.fromPartial(object.question)
      : undefined;
    return message;
  },
};

function createBaseGetQuestionRequest(): GetQuestionRequest {
  return { id: "" };
}

export const GetQuestionRequest = {
  encode(message: GetQuestionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQuestionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQuestionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetQuestionRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetQuestionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetQuestionRequest>, I>>(object: I): GetQuestionRequest {
    const message = createBaseGetQuestionRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetQuestionResponse(): GetQuestionResponse {
  return { question: undefined };
}

export const GetQuestionResponse = {
  encode(message: GetQuestionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.question !== undefined) {
      Question.encode(message.question, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQuestionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQuestionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question = Question.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetQuestionResponse {
    return { question: isSet(object.question) ? Question.fromJSON(object.question) : undefined };
  },

  toJSON(message: GetQuestionResponse): unknown {
    const obj: any = {};
    message.question !== undefined && (obj.question = message.question ? Question.toJSON(message.question) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetQuestionResponse>, I>>(object: I): GetQuestionResponse {
    const message = createBaseGetQuestionResponse();
    message.question = (object.question !== undefined && object.question !== null)
      ? Question.fromPartial(object.question)
      : undefined;
    return message;
  },
};

function createBaseGetRandomQuestionRequest(): GetRandomQuestionRequest {
  return {};
}

export const GetRandomQuestionRequest = {
  encode(_: GetRandomQuestionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRandomQuestionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRandomQuestionRequest();
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

  fromJSON(_: any): GetRandomQuestionRequest {
    return {};
  },

  toJSON(_: GetRandomQuestionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRandomQuestionRequest>, I>>(_: I): GetRandomQuestionRequest {
    const message = createBaseGetRandomQuestionRequest();
    return message;
  },
};

function createBaseGetRandomQuestionResponse(): GetRandomQuestionResponse {
  return { question: undefined };
}

export const GetRandomQuestionResponse = {
  encode(message: GetRandomQuestionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.question !== undefined) {
      Question.encode(message.question, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRandomQuestionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRandomQuestionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question = Question.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRandomQuestionResponse {
    return { question: isSet(object.question) ? Question.fromJSON(object.question) : undefined };
  },

  toJSON(message: GetRandomQuestionResponse): unknown {
    const obj: any = {};
    message.question !== undefined && (obj.question = message.question ? Question.toJSON(message.question) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRandomQuestionResponse>, I>>(object: I): GetRandomQuestionResponse {
    const message = createBaseGetRandomQuestionResponse();
    message.question = (object.question !== undefined && object.question !== null)
      ? Question.fromPartial(object.question)
      : undefined;
    return message;
  },
};

export type OneononeServiceService = typeof OneononeServiceService;
export const OneononeServiceService = {
  healthCheck: {
    path: "/taehoio.idl.services.oneonone.v1.OneononeService/HealthCheck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) => Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) => Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
  listCategories: {
    path: "/taehoio.idl.services.oneonone.v1.OneononeService/ListCategories",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCategoriesRequest) => Buffer.from(ListCategoriesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCategoriesRequest.decode(value),
    responseSerialize: (value: ListCategoriesResponse) => Buffer.from(ListCategoriesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCategoriesResponse.decode(value),
  },
  listQuestionsByCategoryId: {
    path: "/taehoio.idl.services.oneonone.v1.OneononeService/ListQuestionsByCategoryId",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListQuestionsByCategoryIdRequest) =>
      Buffer.from(ListQuestionsByCategoryIdRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListQuestionsByCategoryIdRequest.decode(value),
    responseSerialize: (value: ListQuestionsByCategoryIdResponse) =>
      Buffer.from(ListQuestionsByCategoryIdResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListQuestionsByCategoryIdResponse.decode(value),
  },
  getRandomQuestionByCategoryId: {
    path: "/taehoio.idl.services.oneonone.v1.OneononeService/GetRandomQuestionByCategoryId",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRandomQuestionByCategoryIdRequest) =>
      Buffer.from(GetRandomQuestionByCategoryIdRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRandomQuestionByCategoryIdRequest.decode(value),
    responseSerialize: (value: GetRandomQuestionByCategoryIdResponse) =>
      Buffer.from(GetRandomQuestionByCategoryIdResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetRandomQuestionByCategoryIdResponse.decode(value),
  },
  getQuestion: {
    path: "/taehoio.idl.services.oneonone.v1.OneononeService/GetQuestion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetQuestionRequest) => Buffer.from(GetQuestionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetQuestionRequest.decode(value),
    responseSerialize: (value: GetQuestionResponse) => Buffer.from(GetQuestionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetQuestionResponse.decode(value),
  },
  getRandomQuestion: {
    path: "/taehoio.idl.services.oneonone.v1.OneononeService/GetRandomQuestion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRandomQuestionRequest) => Buffer.from(GetRandomQuestionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRandomQuestionRequest.decode(value),
    responseSerialize: (value: GetRandomQuestionResponse) =>
      Buffer.from(GetRandomQuestionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetRandomQuestionResponse.decode(value),
  },
} as const;

export interface OneononeServiceServer extends UntypedServiceImplementation {
  healthCheck: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  listCategories: handleUnaryCall<ListCategoriesRequest, ListCategoriesResponse>;
  listQuestionsByCategoryId: handleUnaryCall<ListQuestionsByCategoryIdRequest, ListQuestionsByCategoryIdResponse>;
  getRandomQuestionByCategoryId: handleUnaryCall<
    GetRandomQuestionByCategoryIdRequest,
    GetRandomQuestionByCategoryIdResponse
  >;
  getQuestion: handleUnaryCall<GetQuestionRequest, GetQuestionResponse>;
  getRandomQuestion: handleUnaryCall<GetRandomQuestionRequest, GetRandomQuestionResponse>;
}

export interface OneononeServiceClient extends Client {
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
  listCategories(
    request: ListCategoriesRequest,
    callback: (error: ServiceError | null, response: ListCategoriesResponse) => void,
  ): ClientUnaryCall;
  listCategories(
    request: ListCategoriesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListCategoriesResponse) => void,
  ): ClientUnaryCall;
  listCategories(
    request: ListCategoriesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListCategoriesResponse) => void,
  ): ClientUnaryCall;
  listQuestionsByCategoryId(
    request: ListQuestionsByCategoryIdRequest,
    callback: (error: ServiceError | null, response: ListQuestionsByCategoryIdResponse) => void,
  ): ClientUnaryCall;
  listQuestionsByCategoryId(
    request: ListQuestionsByCategoryIdRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListQuestionsByCategoryIdResponse) => void,
  ): ClientUnaryCall;
  listQuestionsByCategoryId(
    request: ListQuestionsByCategoryIdRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListQuestionsByCategoryIdResponse) => void,
  ): ClientUnaryCall;
  getRandomQuestionByCategoryId(
    request: GetRandomQuestionByCategoryIdRequest,
    callback: (error: ServiceError | null, response: GetRandomQuestionByCategoryIdResponse) => void,
  ): ClientUnaryCall;
  getRandomQuestionByCategoryId(
    request: GetRandomQuestionByCategoryIdRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRandomQuestionByCategoryIdResponse) => void,
  ): ClientUnaryCall;
  getRandomQuestionByCategoryId(
    request: GetRandomQuestionByCategoryIdRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRandomQuestionByCategoryIdResponse) => void,
  ): ClientUnaryCall;
  getQuestion(
    request: GetQuestionRequest,
    callback: (error: ServiceError | null, response: GetQuestionResponse) => void,
  ): ClientUnaryCall;
  getQuestion(
    request: GetQuestionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetQuestionResponse) => void,
  ): ClientUnaryCall;
  getQuestion(
    request: GetQuestionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetQuestionResponse) => void,
  ): ClientUnaryCall;
  getRandomQuestion(
    request: GetRandomQuestionRequest,
    callback: (error: ServiceError | null, response: GetRandomQuestionResponse) => void,
  ): ClientUnaryCall;
  getRandomQuestion(
    request: GetRandomQuestionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRandomQuestionResponse) => void,
  ): ClientUnaryCall;
  getRandomQuestion(
    request: GetRandomQuestionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRandomQuestionResponse) => void,
  ): ClientUnaryCall;
}

export const OneononeServiceClient = makeGenericClientConstructor(
  OneononeServiceService,
  "taehoio.idl.services.oneonone.v1.OneononeService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OneononeServiceClient;
  service: typeof OneononeServiceService;
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
