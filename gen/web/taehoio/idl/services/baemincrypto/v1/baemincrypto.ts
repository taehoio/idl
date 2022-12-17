/* eslint-disable */

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
