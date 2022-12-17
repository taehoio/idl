/* eslint-disable */

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
