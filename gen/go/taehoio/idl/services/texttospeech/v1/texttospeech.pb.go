// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: taehoio/idl/services/texttospeech/v1/texttospeech.proto

package texttospeechv1

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type VoiceGender int32

const (
	VoiceGender_VOICE_GENDER_UNSPECIFIED VoiceGender = 0
	VoiceGender_VOICE_GENDER_MALE        VoiceGender = 1
	VoiceGender_VOICE_GENDER_FEMALE      VoiceGender = 2
)

// Enum value maps for VoiceGender.
var (
	VoiceGender_name = map[int32]string{
		0: "VOICE_GENDER_UNSPECIFIED",
		1: "VOICE_GENDER_MALE",
		2: "VOICE_GENDER_FEMALE",
	}
	VoiceGender_value = map[string]int32{
		"VOICE_GENDER_UNSPECIFIED": 0,
		"VOICE_GENDER_MALE":        1,
		"VOICE_GENDER_FEMALE":      2,
	}
)

func (x VoiceGender) Enum() *VoiceGender {
	p := new(VoiceGender)
	*p = x
	return p
}

func (x VoiceGender) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (VoiceGender) Descriptor() protoreflect.EnumDescriptor {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_enumTypes[0].Descriptor()
}

func (VoiceGender) Type() protoreflect.EnumType {
	return &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_enumTypes[0]
}

func (x VoiceGender) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use VoiceGender.Descriptor instead.
func (VoiceGender) EnumDescriptor() ([]byte, []int) {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP(), []int{0}
}

type Language int32

const (
	Language_LANGUAGE_UNSPECIFIED Language = 0
	Language_LANGUAGE_EN_US       Language = 1
	Language_LANGUAGE_KO_KR       Language = 2
)

// Enum value maps for Language.
var (
	Language_name = map[int32]string{
		0: "LANGUAGE_UNSPECIFIED",
		1: "LANGUAGE_EN_US",
		2: "LANGUAGE_KO_KR",
	}
	Language_value = map[string]int32{
		"LANGUAGE_UNSPECIFIED": 0,
		"LANGUAGE_EN_US":       1,
		"LANGUAGE_KO_KR":       2,
	}
)

func (x Language) Enum() *Language {
	p := new(Language)
	*p = x
	return p
}

func (x Language) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Language) Descriptor() protoreflect.EnumDescriptor {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_enumTypes[1].Descriptor()
}

func (Language) Type() protoreflect.EnumType {
	return &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_enumTypes[1]
}

func (x Language) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Language.Descriptor instead.
func (Language) EnumDescriptor() ([]byte, []int) {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP(), []int{1}
}

type HealthCheckRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HealthCheckRequest) Reset() {
	*x = HealthCheckRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthCheckRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthCheckRequest) ProtoMessage() {}

func (x *HealthCheckRequest) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthCheckRequest.ProtoReflect.Descriptor instead.
func (*HealthCheckRequest) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP(), []int{0}
}

type HealthCheckResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HealthCheckResponse) Reset() {
	*x = HealthCheckResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthCheckResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthCheckResponse) ProtoMessage() {}

func (x *HealthCheckResponse) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthCheckResponse.ProtoReflect.Descriptor instead.
func (*HealthCheckResponse) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP(), []int{1}
}

type SynthesizeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Text     string    `protobuf:"bytes,1,opt,name=text,proto3" json:"text,omitempty"`
	Language *Language `protobuf:"varint,2,opt,name=language,proto3,enum=taehoio.idl.services.texttospeech.v1.Language,oneof" json:"language,omitempty"`
}

func (x *SynthesizeRequest) Reset() {
	*x = SynthesizeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SynthesizeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SynthesizeRequest) ProtoMessage() {}

func (x *SynthesizeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SynthesizeRequest.ProtoReflect.Descriptor instead.
func (*SynthesizeRequest) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP(), []int{2}
}

func (x *SynthesizeRequest) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

func (x *SynthesizeRequest) GetLanguage() Language {
	if x != nil && x.Language != nil {
		return *x.Language
	}
	return Language_LANGUAGE_UNSPECIFIED
}

type SpeechMark struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	WordIndex int32 `protobuf:"varint,1,opt,name=word_index,json=wordIndex,proto3" json:"word_index,omitempty"`
	TimeMs    int32 `protobuf:"varint,2,opt,name=time_ms,json=timeMs,proto3" json:"time_ms,omitempty"`
}

func (x *SpeechMark) Reset() {
	*x = SpeechMark{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SpeechMark) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SpeechMark) ProtoMessage() {}

func (x *SpeechMark) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SpeechMark.ProtoReflect.Descriptor instead.
func (*SpeechMark) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP(), []int{3}
}

func (x *SpeechMark) GetWordIndex() int32 {
	if x != nil {
		return x.WordIndex
	}
	return 0
}

func (x *SpeechMark) GetTimeMs() int32 {
	if x != nil {
		return x.TimeMs
	}
	return 0
}

type SynthesizeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AudioContent []byte        `protobuf:"bytes,1,opt,name=audio_content,json=audioContent,proto3" json:"audio_content,omitempty"`
	SpeechMarks  []*SpeechMark `protobuf:"bytes,2,rep,name=speech_marks,json=speechMarks,proto3" json:"speech_marks,omitempty"`
}

func (x *SynthesizeResponse) Reset() {
	*x = SynthesizeResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SynthesizeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SynthesizeResponse) ProtoMessage() {}

func (x *SynthesizeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SynthesizeResponse.ProtoReflect.Descriptor instead.
func (*SynthesizeResponse) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP(), []int{4}
}

func (x *SynthesizeResponse) GetAudioContent() []byte {
	if x != nil {
		return x.AudioContent
	}
	return nil
}

func (x *SynthesizeResponse) GetSpeechMarks() []*SpeechMark {
	if x != nil {
		return x.SpeechMarks
	}
	return nil
}

var File_taehoio_idl_services_texttospeech_v1_texttospeech_proto protoreflect.FileDescriptor

var file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDesc = []byte{
	0x0a, 0x37, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2f, 0x69, 0x64, 0x6c, 0x2f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65,
	0x65, 0x63, 0x68, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65,
	0x65, 0x63, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x24, 0x74, 0x61, 0x65, 0x68, 0x6f,
	0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2e, 0x76, 0x31, 0x1a,
	0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f,
	0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x14, 0x0a,
	0x12, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x22, 0x15, 0x0a, 0x13, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65,
	0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x85, 0x01, 0x0a, 0x11, 0x53,
	0x79, 0x6e, 0x74, 0x68, 0x65, 0x73, 0x69, 0x7a, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x74, 0x65, 0x78, 0x74, 0x12, 0x4f, 0x0a, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2e, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f,
	0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x65,
	0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x61,
	0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x48, 0x00, 0x52, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61,
	0x67, 0x65, 0x88, 0x01, 0x01, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61,
	0x67, 0x65, 0x22, 0x44, 0x0a, 0x0a, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68, 0x4d, 0x61, 0x72, 0x6b,
	0x12, 0x1d, 0x0a, 0x0a, 0x77, 0x6f, 0x72, 0x64, 0x5f, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x77, 0x6f, 0x72, 0x64, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x12,
	0x17, 0x0a, 0x07, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x6d, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x06, 0x74, 0x69, 0x6d, 0x65, 0x4d, 0x73, 0x22, 0x8e, 0x01, 0x0a, 0x12, 0x53, 0x79, 0x6e,
	0x74, 0x68, 0x65, 0x73, 0x69, 0x7a, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x23, 0x0a, 0x0d, 0x61, 0x75, 0x64, 0x69, 0x6f, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x0c, 0x61, 0x75, 0x64, 0x69, 0x6f, 0x43, 0x6f, 0x6e,
	0x74, 0x65, 0x6e, 0x74, 0x12, 0x53, 0x0a, 0x0c, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x5f, 0x6d,
	0x61, 0x72, 0x6b, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x74, 0x61, 0x65,
	0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2e, 0x76,
	0x31, 0x2e, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68, 0x4d, 0x61, 0x72, 0x6b, 0x52, 0x0b, 0x73, 0x70,
	0x65, 0x65, 0x63, 0x68, 0x4d, 0x61, 0x72, 0x6b, 0x73, 0x2a, 0x5b, 0x0a, 0x0b, 0x56, 0x6f, 0x69,
	0x63, 0x65, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x12, 0x1c, 0x0a, 0x18, 0x56, 0x4f, 0x49, 0x43,
	0x45, 0x5f, 0x47, 0x45, 0x4e, 0x44, 0x45, 0x52, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49,
	0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x56, 0x4f, 0x49, 0x43, 0x45, 0x5f,
	0x47, 0x45, 0x4e, 0x44, 0x45, 0x52, 0x5f, 0x4d, 0x41, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x17, 0x0a,
	0x13, 0x56, 0x4f, 0x49, 0x43, 0x45, 0x5f, 0x47, 0x45, 0x4e, 0x44, 0x45, 0x52, 0x5f, 0x46, 0x45,
	0x4d, 0x41, 0x4c, 0x45, 0x10, 0x02, 0x2a, 0x4c, 0x0a, 0x08, 0x4c, 0x61, 0x6e, 0x67, 0x75, 0x61,
	0x67, 0x65, 0x12, 0x18, 0x0a, 0x14, 0x4c, 0x41, 0x4e, 0x47, 0x55, 0x41, 0x47, 0x45, 0x5f, 0x55,
	0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x12, 0x0a, 0x0e,
	0x4c, 0x41, 0x4e, 0x47, 0x55, 0x41, 0x47, 0x45, 0x5f, 0x45, 0x4e, 0x5f, 0x55, 0x53, 0x10, 0x01,
	0x12, 0x12, 0x0a, 0x0e, 0x4c, 0x41, 0x4e, 0x47, 0x55, 0x41, 0x47, 0x45, 0x5f, 0x4b, 0x4f, 0x5f,
	0x4b, 0x52, 0x10, 0x02, 0x32, 0xe5, 0x02, 0x0a, 0x13, 0x54, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73,
	0x70, 0x65, 0x65, 0x63, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0xa3, 0x01, 0x0a,
	0x0b, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x12, 0x38, 0x2e, 0x74,
	0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68,
	0x2e, 0x76, 0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x39, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f,
	0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x65,
	0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x48, 0x65,
	0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x1f, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x19, 0x12, 0x17, 0x2f, 0x74, 0x65, 0x78, 0x74,
	0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2f, 0x76, 0x31, 0x2f, 0x68, 0x65, 0x61, 0x6c,
	0x74, 0x68, 0x12, 0xa7, 0x01, 0x0a, 0x0a, 0x53, 0x79, 0x6e, 0x74, 0x68, 0x65, 0x73, 0x69, 0x7a,
	0x65, 0x12, 0x37, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73,
	0x70, 0x65, 0x65, 0x63, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x79, 0x6e, 0x74, 0x68, 0x65, 0x73,
	0x69, 0x7a, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x38, 0x2e, 0x74, 0x61, 0x65,
	0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2e, 0x76,
	0x31, 0x2e, 0x53, 0x79, 0x6e, 0x74, 0x68, 0x65, 0x73, 0x69, 0x7a, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x26, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x20, 0x22, 0x1b, 0x2f, 0x74,
	0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2f, 0x76, 0x31, 0x2f, 0x73,
	0x79, 0x6e, 0x74, 0x68, 0x65, 0x73, 0x69, 0x7a, 0x65, 0x3a, 0x01, 0x2a, 0x42, 0x99, 0x01, 0x0a,
	0x2f, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x74, 0x61, 0x65, 0x68,
	0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2e, 0x76, 0x31,
	0x42, 0x11, 0x54, 0x65, 0x78, 0x74, 0x74, 0x6f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x51, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2f, 0x69, 0x64, 0x6c, 0x2f, 0x67, 0x65,
	0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2f, 0x69, 0x64, 0x6c,
	0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f,
	0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x2f, 0x76, 0x31, 0x3b, 0x74, 0x65, 0x78, 0x74, 0x74, 0x6f,
	0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescOnce sync.Once
	file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescData = file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDesc
)

func file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescGZIP() []byte {
	file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescOnce.Do(func() {
		file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescData = protoimpl.X.CompressGZIP(file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescData)
	})
	return file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDescData
}

var file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_goTypes = []interface{}{
	(VoiceGender)(0),            // 0: taehoio.idl.services.texttospeech.v1.VoiceGender
	(Language)(0),               // 1: taehoio.idl.services.texttospeech.v1.Language
	(*HealthCheckRequest)(nil),  // 2: taehoio.idl.services.texttospeech.v1.HealthCheckRequest
	(*HealthCheckResponse)(nil), // 3: taehoio.idl.services.texttospeech.v1.HealthCheckResponse
	(*SynthesizeRequest)(nil),   // 4: taehoio.idl.services.texttospeech.v1.SynthesizeRequest
	(*SpeechMark)(nil),          // 5: taehoio.idl.services.texttospeech.v1.SpeechMark
	(*SynthesizeResponse)(nil),  // 6: taehoio.idl.services.texttospeech.v1.SynthesizeResponse
}
var file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_depIdxs = []int32{
	1, // 0: taehoio.idl.services.texttospeech.v1.SynthesizeRequest.language:type_name -> taehoio.idl.services.texttospeech.v1.Language
	5, // 1: taehoio.idl.services.texttospeech.v1.SynthesizeResponse.speech_marks:type_name -> taehoio.idl.services.texttospeech.v1.SpeechMark
	2, // 2: taehoio.idl.services.texttospeech.v1.TexttospeechService.HealthCheck:input_type -> taehoio.idl.services.texttospeech.v1.HealthCheckRequest
	4, // 3: taehoio.idl.services.texttospeech.v1.TexttospeechService.Synthesize:input_type -> taehoio.idl.services.texttospeech.v1.SynthesizeRequest
	3, // 4: taehoio.idl.services.texttospeech.v1.TexttospeechService.HealthCheck:output_type -> taehoio.idl.services.texttospeech.v1.HealthCheckResponse
	6, // 5: taehoio.idl.services.texttospeech.v1.TexttospeechService.Synthesize:output_type -> taehoio.idl.services.texttospeech.v1.SynthesizeResponse
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_init() }
func file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_init() {
	if File_taehoio_idl_services_texttospeech_v1_texttospeech_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthCheckRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthCheckResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SynthesizeRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SpeechMark); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SynthesizeResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes[2].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_goTypes,
		DependencyIndexes: file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_depIdxs,
		EnumInfos:         file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_enumTypes,
		MessageInfos:      file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_msgTypes,
	}.Build()
	File_taehoio_idl_services_texttospeech_v1_texttospeech_proto = out.File
	file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_rawDesc = nil
	file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_goTypes = nil
	file_taehoio_idl_services_texttospeech_v1_texttospeech_proto_depIdxs = nil
}
