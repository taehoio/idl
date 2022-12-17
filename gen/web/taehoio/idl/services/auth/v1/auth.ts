/* eslint-disable */
import type { Duration } from "../../../../../google/protobuf/duration";
import type { Provider } from "../../user/v1/user";

export const protobufPackage = "taehoio.idl.services.auth.v1";

export enum TokenType {
  TOKEN_TYPE_UNSPECIFIED = "TOKEN_TYPE_UNSPECIFIED",
  TOKEN_TYPE_ACCESS = "TOKEN_TYPE_ACCESS",
  TOKEN_TYPE_REFRESH = "TOKEN_TYPE_REFRESH",
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
