/* eslint-disable */

export const protobufPackage = "taehoio.idl.services.user.v1";

export enum Provider {
  PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED",
  PROVIDER_EMAIL = "PROVIDER_EMAIL",
}

export enum Role {
  ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED",
  ROLE_USER = "ROLE_USER",
  ROLE_ADMIN = "ROLE_ADMIN",
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
