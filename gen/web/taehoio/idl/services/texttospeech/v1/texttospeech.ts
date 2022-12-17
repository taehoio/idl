/* eslint-disable */

export const protobufPackage = "taehoio.idl.services.texttospeech.v1";

export enum VoiceGender {
  VOICE_GENDER_UNSPECIFIED = "VOICE_GENDER_UNSPECIFIED",
  VOICE_GENDER_MALE = "VOICE_GENDER_MALE",
  VOICE_GENDER_FEMALE = "VOICE_GENDER_FEMALE",
}

export enum Language {
  LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED",
  LANGUAGE_EN_US = "LANGUAGE_EN_US",
  LANGUAGE_KO_KR = "LANGUAGE_KO_KR",
}

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
}

export interface SynthesizeRequest {
  text: string;
  language?: Language | undefined;
}

export interface SpeechMark {
  word_index: number;
  time_ms: number;
}

export interface SynthesizeResponse {
  audio_content: Uint8Array;
  speech_marks: SpeechMark[];
}
