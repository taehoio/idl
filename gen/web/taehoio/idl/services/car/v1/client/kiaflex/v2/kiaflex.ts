/* eslint-disable */

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
