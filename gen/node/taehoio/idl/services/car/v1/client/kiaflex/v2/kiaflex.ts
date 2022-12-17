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

export const protobufPackage = "taehoio.idl.services.car.v1.client.kiaflex.v2";

export interface ListProductGroupsRequest {
}

export interface ListProductGroupsResponse {
  code: string;
  message: string;
  data?: ListProductGroupsResponse_Data;
}

export interface ListProductGroupsResponse_Data {
  content: ListProductGroupsResponse_Data_Content[];
}

export interface ListProductGroupsResponse_Data_Content {
  display_product_category_id: number;
  display_product_category_name: string;
}

export interface ListCategoryProductsRequest {
  display_product_category_id: number;
}

export interface ListCategoryProductsResponse {
  code: string;
  message: string;
  data?: ListCategoryProductsResponse_Data;
}

export interface ListCategoryProductsResponse_Data {
  content: ListCategoryProductsResponse_Data_Content[];
}

export interface ListCategoryProductsResponse_Data_Content {
  product_display_id: number;
  product?: ListCategoryProductsResponse_Data_Content_Product;
}

export interface ListCategoryProductsResponse_Data_Content_Product {
  product_id: number;
  product_name: string;
  description: string;
  main_image_file_id: string;
  basis_price: number;
}

export interface ListProductsRequest {
  product_id: number;
}

export interface ListProductsResponse {
  code: string;
  message: string;
  data?: ListProductsResponse_Data;
}

export interface ListProductsResponse_Data {
  product_id: number;
  product_name: string;
  side_code: string;
  transportation_area_group_id: number;
  transportation_area_group_name: string;
  description: string;
  main_image_file_id: string;
  basis_price: number;
  vehicle_trims: ListProductsResponse_Data_VehicleTrim[];
}

export interface ListProductsResponse_Data_VehicleTrim {
  vehicle_teim_id: number;
  vehicle_trim_name: string;
  vehicle_trim_display_option_name: string;
  vehicle_capacity_person_count: number;
  fuel_type_code: string;
  car_type_code: string;
  car_appearance_type_code: string;
  vehicle_year: string;
  authorized_fuel_efficiency: number;
  capacity: number;
  fuel_tank_volume: number;
  starting_method_type_code: string;
  vehicle_trim_colors: ListProductsResponse_Data_VehicleTrim_VehicleTrimColor[];
}

export interface ListProductsResponse_Data_VehicleTrim_VehicleTrimColor {
  vehicle_trim_color_id: number;
  vehicle_color_name: string;
  vehicle_image_file_id: string;
  color_image_file_id: string;
  stock_yn: string;
  vehicle_stocks: ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock[];
}

export interface ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock {
  transportation_method_code: string;
  transportation_method_code_name: string;
  stock_yn: string;
}

function createBaseListProductGroupsRequest(): ListProductGroupsRequest {
  return {};
}

export const ListProductGroupsRequest = {
  encode(_: ListProductGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductGroupsRequest();
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

  fromJSON(_: any): ListProductGroupsRequest {
    return {};
  },

  toJSON(_: ListProductGroupsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductGroupsRequest>, I>>(_: I): ListProductGroupsRequest {
    const message = createBaseListProductGroupsRequest();
    return message;
  },
};

function createBaseListProductGroupsResponse(): ListProductGroupsResponse {
  return { code: "", message: "", data: undefined };
}

export const ListProductGroupsResponse = {
  encode(message: ListProductGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      ListProductGroupsResponse_Data.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.data = ListProductGroupsResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductGroupsResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      message: isSet(object.message) ? String(object.message) : "",
      data: isSet(object.data) ? ListProductGroupsResponse_Data.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: ListProductGroupsResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.data !== undefined &&
      (obj.data = message.data ? ListProductGroupsResponse_Data.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductGroupsResponse>, I>>(object: I): ListProductGroupsResponse {
    const message = createBaseListProductGroupsResponse();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? ListProductGroupsResponse_Data.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseListProductGroupsResponse_Data(): ListProductGroupsResponse_Data {
  return { content: [] };
}

export const ListProductGroupsResponse_Data = {
  encode(message: ListProductGroupsResponse_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.content) {
      ListProductGroupsResponse_Data_Content.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductGroupsResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductGroupsResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content.push(ListProductGroupsResponse_Data_Content.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductGroupsResponse_Data {
    return {
      content: Array.isArray(object?.content)
        ? object.content.map((e: any) => ListProductGroupsResponse_Data_Content.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListProductGroupsResponse_Data): unknown {
    const obj: any = {};
    if (message.content) {
      obj.content = message.content.map((e) => e ? ListProductGroupsResponse_Data_Content.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductGroupsResponse_Data>, I>>(
    object: I,
  ): ListProductGroupsResponse_Data {
    const message = createBaseListProductGroupsResponse_Data();
    message.content = object.content?.map((e) => ListProductGroupsResponse_Data_Content.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListProductGroupsResponse_Data_Content(): ListProductGroupsResponse_Data_Content {
  return { display_product_category_id: 0, display_product_category_name: "" };
}

export const ListProductGroupsResponse_Data_Content = {
  encode(message: ListProductGroupsResponse_Data_Content, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.display_product_category_id !== 0) {
      writer.uint32(8).int32(message.display_product_category_id);
    }
    if (message.display_product_category_name !== "") {
      writer.uint32(18).string(message.display_product_category_name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductGroupsResponse_Data_Content {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductGroupsResponse_Data_Content();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.display_product_category_id = reader.int32();
          break;
        case 2:
          message.display_product_category_name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductGroupsResponse_Data_Content {
    return {
      display_product_category_id: isSet(object.display_product_category_id)
        ? Number(object.display_product_category_id)
        : 0,
      display_product_category_name: isSet(object.display_product_category_name)
        ? String(object.display_product_category_name)
        : "",
    };
  },

  toJSON(message: ListProductGroupsResponse_Data_Content): unknown {
    const obj: any = {};
    message.display_product_category_id !== undefined &&
      (obj.display_product_category_id = Math.round(message.display_product_category_id));
    message.display_product_category_name !== undefined &&
      (obj.display_product_category_name = message.display_product_category_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductGroupsResponse_Data_Content>, I>>(
    object: I,
  ): ListProductGroupsResponse_Data_Content {
    const message = createBaseListProductGroupsResponse_Data_Content();
    message.display_product_category_id = object.display_product_category_id ?? 0;
    message.display_product_category_name = object.display_product_category_name ?? "";
    return message;
  },
};

function createBaseListCategoryProductsRequest(): ListCategoryProductsRequest {
  return { display_product_category_id: 0 };
}

export const ListCategoryProductsRequest = {
  encode(message: ListCategoryProductsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.display_product_category_id !== 0) {
      writer.uint32(8).int32(message.display_product_category_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCategoryProductsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCategoryProductsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.display_product_category_id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCategoryProductsRequest {
    return {
      display_product_category_id: isSet(object.display_product_category_id)
        ? Number(object.display_product_category_id)
        : 0,
    };
  },

  toJSON(message: ListCategoryProductsRequest): unknown {
    const obj: any = {};
    message.display_product_category_id !== undefined &&
      (obj.display_product_category_id = Math.round(message.display_product_category_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCategoryProductsRequest>, I>>(object: I): ListCategoryProductsRequest {
    const message = createBaseListCategoryProductsRequest();
    message.display_product_category_id = object.display_product_category_id ?? 0;
    return message;
  },
};

function createBaseListCategoryProductsResponse(): ListCategoryProductsResponse {
  return { code: "", message: "", data: undefined };
}

export const ListCategoryProductsResponse = {
  encode(message: ListCategoryProductsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      ListCategoryProductsResponse_Data.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCategoryProductsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCategoryProductsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.data = ListCategoryProductsResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCategoryProductsResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      message: isSet(object.message) ? String(object.message) : "",
      data: isSet(object.data) ? ListCategoryProductsResponse_Data.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: ListCategoryProductsResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.data !== undefined &&
      (obj.data = message.data ? ListCategoryProductsResponse_Data.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCategoryProductsResponse>, I>>(object: I): ListCategoryProductsResponse {
    const message = createBaseListCategoryProductsResponse();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? ListCategoryProductsResponse_Data.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseListCategoryProductsResponse_Data(): ListCategoryProductsResponse_Data {
  return { content: [] };
}

export const ListCategoryProductsResponse_Data = {
  encode(message: ListCategoryProductsResponse_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.content) {
      ListCategoryProductsResponse_Data_Content.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCategoryProductsResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCategoryProductsResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content.push(ListCategoryProductsResponse_Data_Content.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCategoryProductsResponse_Data {
    return {
      content: Array.isArray(object?.content)
        ? object.content.map((e: any) => ListCategoryProductsResponse_Data_Content.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListCategoryProductsResponse_Data): unknown {
    const obj: any = {};
    if (message.content) {
      obj.content = message.content.map((e) => e ? ListCategoryProductsResponse_Data_Content.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCategoryProductsResponse_Data>, I>>(
    object: I,
  ): ListCategoryProductsResponse_Data {
    const message = createBaseListCategoryProductsResponse_Data();
    message.content = object.content?.map((e) => ListCategoryProductsResponse_Data_Content.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListCategoryProductsResponse_Data_Content(): ListCategoryProductsResponse_Data_Content {
  return { product_display_id: 0, product: undefined };
}

export const ListCategoryProductsResponse_Data_Content = {
  encode(message: ListCategoryProductsResponse_Data_Content, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_display_id !== 0) {
      writer.uint32(8).int32(message.product_display_id);
    }
    if (message.product !== undefined) {
      ListCategoryProductsResponse_Data_Content_Product.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCategoryProductsResponse_Data_Content {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCategoryProductsResponse_Data_Content();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product_display_id = reader.int32();
          break;
        case 2:
          message.product = ListCategoryProductsResponse_Data_Content_Product.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCategoryProductsResponse_Data_Content {
    return {
      product_display_id: isSet(object.product_display_id) ? Number(object.product_display_id) : 0,
      product: isSet(object.product)
        ? ListCategoryProductsResponse_Data_Content_Product.fromJSON(object.product)
        : undefined,
    };
  },

  toJSON(message: ListCategoryProductsResponse_Data_Content): unknown {
    const obj: any = {};
    message.product_display_id !== undefined && (obj.product_display_id = Math.round(message.product_display_id));
    message.product !== undefined && (obj.product = message.product
      ? ListCategoryProductsResponse_Data_Content_Product.toJSON(message.product)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCategoryProductsResponse_Data_Content>, I>>(
    object: I,
  ): ListCategoryProductsResponse_Data_Content {
    const message = createBaseListCategoryProductsResponse_Data_Content();
    message.product_display_id = object.product_display_id ?? 0;
    message.product = (object.product !== undefined && object.product !== null)
      ? ListCategoryProductsResponse_Data_Content_Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseListCategoryProductsResponse_Data_Content_Product(): ListCategoryProductsResponse_Data_Content_Product {
  return { product_id: 0, product_name: "", description: "", main_image_file_id: "", basis_price: 0 };
}

export const ListCategoryProductsResponse_Data_Content_Product = {
  encode(
    message: ListCategoryProductsResponse_Data_Content_Product,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.product_id !== 0) {
      writer.uint32(8).int32(message.product_id);
    }
    if (message.product_name !== "") {
      writer.uint32(18).string(message.product_name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.main_image_file_id !== "") {
      writer.uint32(34).string(message.main_image_file_id);
    }
    if (message.basis_price !== 0) {
      writer.uint32(40).int32(message.basis_price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCategoryProductsResponse_Data_Content_Product {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCategoryProductsResponse_Data_Content_Product();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product_id = reader.int32();
          break;
        case 2:
          message.product_name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.main_image_file_id = reader.string();
          break;
        case 5:
          message.basis_price = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCategoryProductsResponse_Data_Content_Product {
    return {
      product_id: isSet(object.product_id) ? Number(object.product_id) : 0,
      product_name: isSet(object.product_name) ? String(object.product_name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      main_image_file_id: isSet(object.main_image_file_id) ? String(object.main_image_file_id) : "",
      basis_price: isSet(object.basis_price) ? Number(object.basis_price) : 0,
    };
  },

  toJSON(message: ListCategoryProductsResponse_Data_Content_Product): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = Math.round(message.product_id));
    message.product_name !== undefined && (obj.product_name = message.product_name);
    message.description !== undefined && (obj.description = message.description);
    message.main_image_file_id !== undefined && (obj.main_image_file_id = message.main_image_file_id);
    message.basis_price !== undefined && (obj.basis_price = Math.round(message.basis_price));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCategoryProductsResponse_Data_Content_Product>, I>>(
    object: I,
  ): ListCategoryProductsResponse_Data_Content_Product {
    const message = createBaseListCategoryProductsResponse_Data_Content_Product();
    message.product_id = object.product_id ?? 0;
    message.product_name = object.product_name ?? "";
    message.description = object.description ?? "";
    message.main_image_file_id = object.main_image_file_id ?? "";
    message.basis_price = object.basis_price ?? 0;
    return message;
  },
};

function createBaseListProductsRequest(): ListProductsRequest {
  return { product_id: 0 };
}

export const ListProductsRequest = {
  encode(message: ListProductsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== 0) {
      writer.uint32(8).int32(message.product_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product_id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductsRequest {
    return { product_id: isSet(object.product_id) ? Number(object.product_id) : 0 };
  },

  toJSON(message: ListProductsRequest): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = Math.round(message.product_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsRequest>, I>>(object: I): ListProductsRequest {
    const message = createBaseListProductsRequest();
    message.product_id = object.product_id ?? 0;
    return message;
  },
};

function createBaseListProductsResponse(): ListProductsResponse {
  return { code: "", message: "", data: undefined };
}

export const ListProductsResponse = {
  encode(message: ListProductsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      ListProductsResponse_Data.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.data = ListProductsResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductsResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      message: isSet(object.message) ? String(object.message) : "",
      data: isSet(object.data) ? ListProductsResponse_Data.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: ListProductsResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.data !== undefined &&
      (obj.data = message.data ? ListProductsResponse_Data.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsResponse>, I>>(object: I): ListProductsResponse {
    const message = createBaseListProductsResponse();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? ListProductsResponse_Data.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseListProductsResponse_Data(): ListProductsResponse_Data {
  return {
    product_id: 0,
    product_name: "",
    side_code: "",
    transportation_area_group_id: 0,
    transportation_area_group_name: "",
    description: "",
    main_image_file_id: "",
    basis_price: 0,
    vehicle_trims: [],
  };
}

export const ListProductsResponse_Data = {
  encode(message: ListProductsResponse_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== 0) {
      writer.uint32(8).int32(message.product_id);
    }
    if (message.product_name !== "") {
      writer.uint32(18).string(message.product_name);
    }
    if (message.side_code !== "") {
      writer.uint32(26).string(message.side_code);
    }
    if (message.transportation_area_group_id !== 0) {
      writer.uint32(32).int32(message.transportation_area_group_id);
    }
    if (message.transportation_area_group_name !== "") {
      writer.uint32(42).string(message.transportation_area_group_name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.main_image_file_id !== "") {
      writer.uint32(58).string(message.main_image_file_id);
    }
    if (message.basis_price !== 0) {
      writer.uint32(64).int32(message.basis_price);
    }
    for (const v of message.vehicle_trims) {
      ListProductsResponse_Data_VehicleTrim.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product_id = reader.int32();
          break;
        case 2:
          message.product_name = reader.string();
          break;
        case 3:
          message.side_code = reader.string();
          break;
        case 4:
          message.transportation_area_group_id = reader.int32();
          break;
        case 5:
          message.transportation_area_group_name = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.main_image_file_id = reader.string();
          break;
        case 8:
          message.basis_price = reader.int32();
          break;
        case 9:
          message.vehicle_trims.push(ListProductsResponse_Data_VehicleTrim.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductsResponse_Data {
    return {
      product_id: isSet(object.product_id) ? Number(object.product_id) : 0,
      product_name: isSet(object.product_name) ? String(object.product_name) : "",
      side_code: isSet(object.sidoCode) ? String(object.sidoCode) : "",
      transportation_area_group_id: isSet(object.transportation_area_group_id)
        ? Number(object.transportation_area_group_id)
        : 0,
      transportation_area_group_name: isSet(object.transportation_area_group_name)
        ? String(object.transportation_area_group_name)
        : "",
      description: isSet(object.description) ? String(object.description) : "",
      main_image_file_id: isSet(object.main_image_file_id) ? String(object.main_image_file_id) : "",
      basis_price: isSet(object.basis_price) ? Number(object.basis_price) : 0,
      vehicle_trims: Array.isArray(object?.vehicle_trims)
        ? object.vehicle_trims.map((e: any) => ListProductsResponse_Data_VehicleTrim.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListProductsResponse_Data): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = Math.round(message.product_id));
    message.product_name !== undefined && (obj.product_name = message.product_name);
    message.side_code !== undefined && (obj.sidoCode = message.side_code);
    message.transportation_area_group_id !== undefined &&
      (obj.transportation_area_group_id = Math.round(message.transportation_area_group_id));
    message.transportation_area_group_name !== undefined &&
      (obj.transportation_area_group_name = message.transportation_area_group_name);
    message.description !== undefined && (obj.description = message.description);
    message.main_image_file_id !== undefined && (obj.main_image_file_id = message.main_image_file_id);
    message.basis_price !== undefined && (obj.basis_price = Math.round(message.basis_price));
    if (message.vehicle_trims) {
      obj.vehicle_trims = message.vehicle_trims.map((e) =>
        e ? ListProductsResponse_Data_VehicleTrim.toJSON(e) : undefined
      );
    } else {
      obj.vehicle_trims = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsResponse_Data>, I>>(object: I): ListProductsResponse_Data {
    const message = createBaseListProductsResponse_Data();
    message.product_id = object.product_id ?? 0;
    message.product_name = object.product_name ?? "";
    message.side_code = object.side_code ?? "";
    message.transportation_area_group_id = object.transportation_area_group_id ?? 0;
    message.transportation_area_group_name = object.transportation_area_group_name ?? "";
    message.description = object.description ?? "";
    message.main_image_file_id = object.main_image_file_id ?? "";
    message.basis_price = object.basis_price ?? 0;
    message.vehicle_trims = object.vehicle_trims?.map((e) => ListProductsResponse_Data_VehicleTrim.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseListProductsResponse_Data_VehicleTrim(): ListProductsResponse_Data_VehicleTrim {
  return {
    vehicle_teim_id: 0,
    vehicle_trim_name: "",
    vehicle_trim_display_option_name: "",
    vehicle_capacity_person_count: 0,
    fuel_type_code: "",
    car_type_code: "",
    car_appearance_type_code: "",
    vehicle_year: "",
    authorized_fuel_efficiency: 0,
    capacity: 0,
    fuel_tank_volume: 0,
    starting_method_type_code: "",
    vehicle_trim_colors: [],
  };
}

export const ListProductsResponse_Data_VehicleTrim = {
  encode(message: ListProductsResponse_Data_VehicleTrim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vehicle_teim_id !== 0) {
      writer.uint32(8).int32(message.vehicle_teim_id);
    }
    if (message.vehicle_trim_name !== "") {
      writer.uint32(18).string(message.vehicle_trim_name);
    }
    if (message.vehicle_trim_display_option_name !== "") {
      writer.uint32(26).string(message.vehicle_trim_display_option_name);
    }
    if (message.vehicle_capacity_person_count !== 0) {
      writer.uint32(32).int32(message.vehicle_capacity_person_count);
    }
    if (message.fuel_type_code !== "") {
      writer.uint32(42).string(message.fuel_type_code);
    }
    if (message.car_type_code !== "") {
      writer.uint32(50).string(message.car_type_code);
    }
    if (message.car_appearance_type_code !== "") {
      writer.uint32(58).string(message.car_appearance_type_code);
    }
    if (message.vehicle_year !== "") {
      writer.uint32(66).string(message.vehicle_year);
    }
    if (message.authorized_fuel_efficiency !== 0) {
      writer.uint32(77).float(message.authorized_fuel_efficiency);
    }
    if (message.capacity !== 0) {
      writer.uint32(80).int32(message.capacity);
    }
    if (message.fuel_tank_volume !== 0) {
      writer.uint32(88).int32(message.fuel_tank_volume);
    }
    if (message.starting_method_type_code !== "") {
      writer.uint32(98).string(message.starting_method_type_code);
    }
    for (const v of message.vehicle_trim_colors) {
      ListProductsResponse_Data_VehicleTrim_VehicleTrimColor.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsResponse_Data_VehicleTrim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsResponse_Data_VehicleTrim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vehicle_teim_id = reader.int32();
          break;
        case 2:
          message.vehicle_trim_name = reader.string();
          break;
        case 3:
          message.vehicle_trim_display_option_name = reader.string();
          break;
        case 4:
          message.vehicle_capacity_person_count = reader.int32();
          break;
        case 5:
          message.fuel_type_code = reader.string();
          break;
        case 6:
          message.car_type_code = reader.string();
          break;
        case 7:
          message.car_appearance_type_code = reader.string();
          break;
        case 8:
          message.vehicle_year = reader.string();
          break;
        case 9:
          message.authorized_fuel_efficiency = reader.float();
          break;
        case 10:
          message.capacity = reader.int32();
          break;
        case 11:
          message.fuel_tank_volume = reader.int32();
          break;
        case 12:
          message.starting_method_type_code = reader.string();
          break;
        case 13:
          message.vehicle_trim_colors.push(
            ListProductsResponse_Data_VehicleTrim_VehicleTrimColor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductsResponse_Data_VehicleTrim {
    return {
      vehicle_teim_id: isSet(object.vehicleTrimId) ? Number(object.vehicleTrimId) : 0,
      vehicle_trim_name: isSet(object.vehicle_trim_name) ? String(object.vehicle_trim_name) : "",
      vehicle_trim_display_option_name: isSet(object.vehicle_trim_display_option_name)
        ? String(object.vehicle_trim_display_option_name)
        : "",
      vehicle_capacity_person_count: isSet(object.vehicle_capacity_person_count)
        ? Number(object.vehicle_capacity_person_count)
        : 0,
      fuel_type_code: isSet(object.fuel_type_code) ? String(object.fuel_type_code) : "",
      car_type_code: isSet(object.carTyleCode) ? String(object.carTyleCode) : "",
      car_appearance_type_code: isSet(object.car_appearance_type_code) ? String(object.car_appearance_type_code) : "",
      vehicle_year: isSet(object.vehicle_year) ? String(object.vehicle_year) : "",
      authorized_fuel_efficiency: isSet(object.authorized_fuel_efficiency)
        ? Number(object.authorized_fuel_efficiency)
        : 0,
      capacity: isSet(object.capacity) ? Number(object.capacity) : 0,
      fuel_tank_volume: isSet(object.fuel_tank_volume) ? Number(object.fuel_tank_volume) : 0,
      starting_method_type_code: isSet(object.starting_method_type_code)
        ? String(object.starting_method_type_code)
        : "",
      vehicle_trim_colors: Array.isArray(object?.vehicle_trim_colors)
        ? object.vehicle_trim_colors.map((e: any) => ListProductsResponse_Data_VehicleTrim_VehicleTrimColor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListProductsResponse_Data_VehicleTrim): unknown {
    const obj: any = {};
    message.vehicle_teim_id !== undefined && (obj.vehicleTrimId = Math.round(message.vehicle_teim_id));
    message.vehicle_trim_name !== undefined && (obj.vehicle_trim_name = message.vehicle_trim_name);
    message.vehicle_trim_display_option_name !== undefined &&
      (obj.vehicle_trim_display_option_name = message.vehicle_trim_display_option_name);
    message.vehicle_capacity_person_count !== undefined &&
      (obj.vehicle_capacity_person_count = Math.round(message.vehicle_capacity_person_count));
    message.fuel_type_code !== undefined && (obj.fuel_type_code = message.fuel_type_code);
    message.car_type_code !== undefined && (obj.carTyleCode = message.car_type_code);
    message.car_appearance_type_code !== undefined && (obj.car_appearance_type_code = message.car_appearance_type_code);
    message.vehicle_year !== undefined && (obj.vehicle_year = message.vehicle_year);
    message.authorized_fuel_efficiency !== undefined &&
      (obj.authorized_fuel_efficiency = message.authorized_fuel_efficiency);
    message.capacity !== undefined && (obj.capacity = Math.round(message.capacity));
    message.fuel_tank_volume !== undefined && (obj.fuel_tank_volume = Math.round(message.fuel_tank_volume));
    message.starting_method_type_code !== undefined &&
      (obj.starting_method_type_code = message.starting_method_type_code);
    if (message.vehicle_trim_colors) {
      obj.vehicle_trim_colors = message.vehicle_trim_colors.map((e) =>
        e ? ListProductsResponse_Data_VehicleTrim_VehicleTrimColor.toJSON(e) : undefined
      );
    } else {
      obj.vehicle_trim_colors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsResponse_Data_VehicleTrim>, I>>(
    object: I,
  ): ListProductsResponse_Data_VehicleTrim {
    const message = createBaseListProductsResponse_Data_VehicleTrim();
    message.vehicle_teim_id = object.vehicle_teim_id ?? 0;
    message.vehicle_trim_name = object.vehicle_trim_name ?? "";
    message.vehicle_trim_display_option_name = object.vehicle_trim_display_option_name ?? "";
    message.vehicle_capacity_person_count = object.vehicle_capacity_person_count ?? 0;
    message.fuel_type_code = object.fuel_type_code ?? "";
    message.car_type_code = object.car_type_code ?? "";
    message.car_appearance_type_code = object.car_appearance_type_code ?? "";
    message.vehicle_year = object.vehicle_year ?? "";
    message.authorized_fuel_efficiency = object.authorized_fuel_efficiency ?? 0;
    message.capacity = object.capacity ?? 0;
    message.fuel_tank_volume = object.fuel_tank_volume ?? 0;
    message.starting_method_type_code = object.starting_method_type_code ?? "";
    message.vehicle_trim_colors =
      object.vehicle_trim_colors?.map((e) => ListProductsResponse_Data_VehicleTrim_VehicleTrimColor.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseListProductsResponse_Data_VehicleTrim_VehicleTrimColor(): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor {
  return {
    vehicle_trim_color_id: 0,
    vehicle_color_name: "",
    vehicle_image_file_id: "",
    color_image_file_id: "",
    stock_yn: "",
    vehicle_stocks: [],
  };
}

export const ListProductsResponse_Data_VehicleTrim_VehicleTrimColor = {
  encode(
    message: ListProductsResponse_Data_VehicleTrim_VehicleTrimColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.vehicle_trim_color_id !== 0) {
      writer.uint32(8).int32(message.vehicle_trim_color_id);
    }
    if (message.vehicle_color_name !== "") {
      writer.uint32(18).string(message.vehicle_color_name);
    }
    if (message.vehicle_image_file_id !== "") {
      writer.uint32(26).string(message.vehicle_image_file_id);
    }
    if (message.color_image_file_id !== "") {
      writer.uint32(34).string(message.color_image_file_id);
    }
    if (message.stock_yn !== "") {
      writer.uint32(42).string(message.stock_yn);
    }
    for (const v of message.vehicle_stocks) {
      ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsResponse_Data_VehicleTrim_VehicleTrimColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vehicle_trim_color_id = reader.int32();
          break;
        case 2:
          message.vehicle_color_name = reader.string();
          break;
        case 3:
          message.vehicle_image_file_id = reader.string();
          break;
        case 4:
          message.color_image_file_id = reader.string();
          break;
        case 5:
          message.stock_yn = reader.string();
          break;
        case 6:
          message.vehicle_stocks.push(
            ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor {
    return {
      vehicle_trim_color_id: isSet(object.vehicle_trim_color_id) ? Number(object.vehicle_trim_color_id) : 0,
      vehicle_color_name: isSet(object.vehicle_color_name) ? String(object.vehicle_color_name) : "",
      vehicle_image_file_id: isSet(object.vehicle_image_file_id) ? String(object.vehicle_image_file_id) : "",
      color_image_file_id: isSet(object.color_image_file_id) ? String(object.color_image_file_id) : "",
      stock_yn: isSet(object.stock_yn) ? String(object.stock_yn) : "",
      vehicle_stocks: Array.isArray(object?.vehicle_stocks)
        ? object.vehicle_stocks.map((e: any) =>
          ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: ListProductsResponse_Data_VehicleTrim_VehicleTrimColor): unknown {
    const obj: any = {};
    message.vehicle_trim_color_id !== undefined &&
      (obj.vehicle_trim_color_id = Math.round(message.vehicle_trim_color_id));
    message.vehicle_color_name !== undefined && (obj.vehicle_color_name = message.vehicle_color_name);
    message.vehicle_image_file_id !== undefined && (obj.vehicle_image_file_id = message.vehicle_image_file_id);
    message.color_image_file_id !== undefined && (obj.color_image_file_id = message.color_image_file_id);
    message.stock_yn !== undefined && (obj.stock_yn = message.stock_yn);
    if (message.vehicle_stocks) {
      obj.vehicle_stocks = message.vehicle_stocks.map((e) =>
        e ? ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock.toJSON(e) : undefined
      );
    } else {
      obj.vehicle_stocks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsResponse_Data_VehicleTrim_VehicleTrimColor>, I>>(
    object: I,
  ): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor {
    const message = createBaseListProductsResponse_Data_VehicleTrim_VehicleTrimColor();
    message.vehicle_trim_color_id = object.vehicle_trim_color_id ?? 0;
    message.vehicle_color_name = object.vehicle_color_name ?? "";
    message.vehicle_image_file_id = object.vehicle_image_file_id ?? "";
    message.color_image_file_id = object.color_image_file_id ?? "";
    message.stock_yn = object.stock_yn ?? "";
    message.vehicle_stocks =
      object.vehicle_stocks?.map((e) =>
        ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock(): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock {
  return { transportation_method_code: "", transportation_method_code_name: "", stock_yn: "" };
}

export const ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock = {
  encode(
    message: ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.transportation_method_code !== "") {
      writer.uint32(10).string(message.transportation_method_code);
    }
    if (message.transportation_method_code_name !== "") {
      writer.uint32(18).string(message.transportation_method_code_name);
    }
    if (message.stock_yn !== "") {
      writer.uint32(26).string(message.stock_yn);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transportation_method_code = reader.string();
          break;
        case 2:
          message.transportation_method_code_name = reader.string();
          break;
        case 3:
          message.stock_yn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock {
    return {
      transportation_method_code: isSet(object.transportation_method_code)
        ? String(object.transportation_method_code)
        : "",
      transportation_method_code_name: isSet(object.transportation_method_code_name)
        ? String(object.transportation_method_code_name)
        : "",
      stock_yn: isSet(object.stock_yn) ? String(object.stock_yn) : "",
    };
  },

  toJSON(message: ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock): unknown {
    const obj: any = {};
    message.transportation_method_code !== undefined &&
      (obj.transportation_method_code = message.transportation_method_code);
    message.transportation_method_code_name !== undefined &&
      (obj.transportation_method_code_name = message.transportation_method_code_name);
    message.stock_yn !== undefined && (obj.stock_yn = message.stock_yn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock>, I>>(
    object: I,
  ): ListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock {
    const message = createBaseListProductsResponse_Data_VehicleTrim_VehicleTrimColor_VehicleStock();
    message.transportation_method_code = object.transportation_method_code ?? "";
    message.transportation_method_code_name = object.transportation_method_code_name ?? "";
    message.stock_yn = object.stock_yn ?? "";
    return message;
  },
};

export type KiaflexServiceService = typeof KiaflexServiceService;
export const KiaflexServiceService = {
  listProductGroups: {
    path: "/taehoio.idl.services.car.v1.client.kiaflex.v2.KiaflexService/ListProductGroups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProductGroupsRequest) => Buffer.from(ListProductGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProductGroupsRequest.decode(value),
    responseSerialize: (value: ListProductGroupsResponse) =>
      Buffer.from(ListProductGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProductGroupsResponse.decode(value),
  },
  listCategoryProducts: {
    path: "/taehoio.idl.services.car.v1.client.kiaflex.v2.KiaflexService/ListCategoryProducts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCategoryProductsRequest) =>
      Buffer.from(ListCategoryProductsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCategoryProductsRequest.decode(value),
    responseSerialize: (value: ListCategoryProductsResponse) =>
      Buffer.from(ListCategoryProductsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCategoryProductsResponse.decode(value),
  },
  listProducts: {
    path: "/taehoio.idl.services.car.v1.client.kiaflex.v2.KiaflexService/ListProducts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProductsRequest) => Buffer.from(ListProductsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProductsRequest.decode(value),
    responseSerialize: (value: ListProductsResponse) => Buffer.from(ListProductsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProductsResponse.decode(value),
  },
} as const;

export interface KiaflexServiceServer extends UntypedServiceImplementation {
  listProductGroups: handleUnaryCall<ListProductGroupsRequest, ListProductGroupsResponse>;
  listCategoryProducts: handleUnaryCall<ListCategoryProductsRequest, ListCategoryProductsResponse>;
  listProducts: handleUnaryCall<ListProductsRequest, ListProductsResponse>;
}

export interface KiaflexServiceClient extends Client {
  listProductGroups(
    request: ListProductGroupsRequest,
    callback: (error: ServiceError | null, response: ListProductGroupsResponse) => void,
  ): ClientUnaryCall;
  listProductGroups(
    request: ListProductGroupsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListProductGroupsResponse) => void,
  ): ClientUnaryCall;
  listProductGroups(
    request: ListProductGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListProductGroupsResponse) => void,
  ): ClientUnaryCall;
  listCategoryProducts(
    request: ListCategoryProductsRequest,
    callback: (error: ServiceError | null, response: ListCategoryProductsResponse) => void,
  ): ClientUnaryCall;
  listCategoryProducts(
    request: ListCategoryProductsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListCategoryProductsResponse) => void,
  ): ClientUnaryCall;
  listCategoryProducts(
    request: ListCategoryProductsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListCategoryProductsResponse) => void,
  ): ClientUnaryCall;
  listProducts(
    request: ListProductsRequest,
    callback: (error: ServiceError | null, response: ListProductsResponse) => void,
  ): ClientUnaryCall;
  listProducts(
    request: ListProductsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListProductsResponse) => void,
  ): ClientUnaryCall;
  listProducts(
    request: ListProductsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListProductsResponse) => void,
  ): ClientUnaryCall;
}

export const KiaflexServiceClient = makeGenericClientConstructor(
  KiaflexServiceService,
  "taehoio.idl.services.car.v1.client.kiaflex.v2.KiaflexService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): KiaflexServiceClient;
  service: typeof KiaflexServiceService;
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
