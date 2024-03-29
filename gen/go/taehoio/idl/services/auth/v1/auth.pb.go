// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: taehoio/idl/services/auth/v1/auth.proto

package authv1

import (
	v1 "github.com/taehoio/idl/gen/go/taehoio/idl/services/user/v1"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type TokenType int32

const (
	TokenType_TOKEN_TYPE_UNSPECIFIED TokenType = 0
	TokenType_TOKEN_TYPE_ACCESS      TokenType = 1
	TokenType_TOKEN_TYPE_REFRESH     TokenType = 2
)

// Enum value maps for TokenType.
var (
	TokenType_name = map[int32]string{
		0: "TOKEN_TYPE_UNSPECIFIED",
		1: "TOKEN_TYPE_ACCESS",
		2: "TOKEN_TYPE_REFRESH",
	}
	TokenType_value = map[string]int32{
		"TOKEN_TYPE_UNSPECIFIED": 0,
		"TOKEN_TYPE_ACCESS":      1,
		"TOKEN_TYPE_REFRESH":     2,
	}
)

func (x TokenType) Enum() *TokenType {
	p := new(TokenType)
	*p = x
	return p
}

func (x TokenType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TokenType) Descriptor() protoreflect.EnumDescriptor {
	return file_taehoio_idl_services_auth_v1_auth_proto_enumTypes[0].Descriptor()
}

func (TokenType) Type() protoreflect.EnumType {
	return &file_taehoio_idl_services_auth_v1_auth_proto_enumTypes[0]
}

func (x TokenType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TokenType.Descriptor instead.
func (TokenType) EnumDescriptor() ([]byte, []int) {
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{0}
}

type HealthCheckRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HealthCheckRequest) Reset() {
	*x = HealthCheckRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthCheckRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthCheckRequest) ProtoMessage() {}

func (x *HealthCheckRequest) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[0]
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
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{0}
}

type HealthCheckResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HealthCheckResponse) Reset() {
	*x = HealthCheckResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthCheckResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthCheckResponse) ProtoMessage() {}

func (x *HealthCheckResponse) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[1]
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
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{1}
}

type AuthByRefreshTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RefreshToken string `protobuf:"bytes,1,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
}

func (x *AuthByRefreshTokenRequest) Reset() {
	*x = AuthByRefreshTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthByRefreshTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthByRefreshTokenRequest) ProtoMessage() {}

func (x *AuthByRefreshTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthByRefreshTokenRequest.ProtoReflect.Descriptor instead.
func (*AuthByRefreshTokenRequest) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{2}
}

func (x *AuthByRefreshTokenRequest) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

type AuthByRefreshTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccessToken           string               `protobuf:"bytes,1,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	AccessTokenExpiresIn  *durationpb.Duration `protobuf:"bytes,2,opt,name=access_token_expires_in,json=accessTokenExpiresIn,proto3" json:"access_token_expires_in,omitempty"`
	RefreshToken          string               `protobuf:"bytes,3,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
	RefreshTokenExpiresIn *durationpb.Duration `protobuf:"bytes,4,opt,name=refresh_token_expires_in,json=refreshTokenExpiresIn,proto3" json:"refresh_token_expires_in,omitempty"`
}

func (x *AuthByRefreshTokenResponse) Reset() {
	*x = AuthByRefreshTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthByRefreshTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthByRefreshTokenResponse) ProtoMessage() {}

func (x *AuthByRefreshTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthByRefreshTokenResponse.ProtoReflect.Descriptor instead.
func (*AuthByRefreshTokenResponse) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{3}
}

func (x *AuthByRefreshTokenResponse) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *AuthByRefreshTokenResponse) GetAccessTokenExpiresIn() *durationpb.Duration {
	if x != nil {
		return x.AccessTokenExpiresIn
	}
	return nil
}

func (x *AuthByRefreshTokenResponse) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

func (x *AuthByRefreshTokenResponse) GetRefreshTokenExpiresIn() *durationpb.Duration {
	if x != nil {
		return x.RefreshTokenExpiresIn
	}
	return nil
}

type AuthRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Provider   v1.Provider `protobuf:"varint,1,opt,name=provider,proto3,enum=taehoio.idl.services.user.v1.Provider" json:"provider,omitempty"`
	Identifier string      `protobuf:"bytes,2,opt,name=identifier,proto3" json:"identifier,omitempty"`
}

func (x *AuthRequest) Reset() {
	*x = AuthRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthRequest) ProtoMessage() {}

func (x *AuthRequest) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthRequest.ProtoReflect.Descriptor instead.
func (*AuthRequest) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{4}
}

func (x *AuthRequest) GetProvider() v1.Provider {
	if x != nil {
		return x.Provider
	}
	return v1.Provider(0)
}

func (x *AuthRequest) GetIdentifier() string {
	if x != nil {
		return x.Identifier
	}
	return ""
}

type AuthResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccessToken           string               `protobuf:"bytes,1,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	AccessTokenExpiresIn  *durationpb.Duration `protobuf:"bytes,2,opt,name=access_token_expires_in,json=accessTokenExpiresIn,proto3" json:"access_token_expires_in,omitempty"`
	RefreshToken          string               `protobuf:"bytes,3,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
	RefreshTokenExpiresIn *durationpb.Duration `protobuf:"bytes,4,opt,name=refresh_token_expires_in,json=refreshTokenExpiresIn,proto3" json:"refresh_token_expires_in,omitempty"`
}

func (x *AuthResponse) Reset() {
	*x = AuthResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthResponse) ProtoMessage() {}

func (x *AuthResponse) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthResponse.ProtoReflect.Descriptor instead.
func (*AuthResponse) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{5}
}

func (x *AuthResponse) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *AuthResponse) GetAccessTokenExpiresIn() *durationpb.Duration {
	if x != nil {
		return x.AccessTokenExpiresIn
	}
	return nil
}

func (x *AuthResponse) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

func (x *AuthResponse) GetRefreshTokenExpiresIn() *durationpb.Duration {
	if x != nil {
		return x.RefreshTokenExpiresIn
	}
	return nil
}

type ParseTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *ParseTokenRequest) Reset() {
	*x = ParseTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ParseTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ParseTokenRequest) ProtoMessage() {}

func (x *ParseTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ParseTokenRequest.ProtoReflect.Descriptor instead.
func (*ParseTokenRequest) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{6}
}

func (x *ParseTokenRequest) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

type ParseTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Provider   v1.Provider `protobuf:"varint,1,opt,name=provider,proto3,enum=taehoio.idl.services.user.v1.Provider" json:"provider,omitempty"`
	Identifier string      `protobuf:"bytes,2,opt,name=identifier,proto3" json:"identifier,omitempty"`
	TokenType  TokenType   `protobuf:"varint,3,opt,name=token_type,json=tokenType,proto3,enum=taehoio.idl.services.auth.v1.TokenType" json:"token_type,omitempty"`
}

func (x *ParseTokenResponse) Reset() {
	*x = ParseTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ParseTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ParseTokenResponse) ProtoMessage() {}

func (x *ParseTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ParseTokenResponse.ProtoReflect.Descriptor instead.
func (*ParseTokenResponse) Descriptor() ([]byte, []int) {
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP(), []int{7}
}

func (x *ParseTokenResponse) GetProvider() v1.Provider {
	if x != nil {
		return x.Provider
	}
	return v1.Provider(0)
}

func (x *ParseTokenResponse) GetIdentifier() string {
	if x != nil {
		return x.Identifier
	}
	return ""
}

func (x *ParseTokenResponse) GetTokenType() TokenType {
	if x != nil {
		return x.TokenType
	}
	return TokenType_TOKEN_TYPE_UNSPECIFIED
}

var File_taehoio_idl_services_auth_v1_auth_proto protoreflect.FileDescriptor

var file_taehoio_idl_services_auth_v1_auth_proto_rawDesc = []byte{
	0x0a, 0x27, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2f, 0x69, 0x64, 0x6c, 0x2f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2f, 0x76, 0x31, 0x2f, 0x61,
	0x75, 0x74, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x74, 0x61, 0x65, 0x68, 0x6f,
	0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x27, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2f, 0x69,
	0x64, 0x6c, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x75, 0x73, 0x65, 0x72,
	0x2f, 0x76, 0x31, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x14,
	0x0a, 0x12, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x22, 0x15, 0x0a, 0x13, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68,
	0x65, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x40, 0x0a, 0x19, 0x41,
	0x75, 0x74, 0x68, 0x42, 0x79, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x66, 0x72,
	0x65, 0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x8a, 0x02,
	0x0a, 0x1a, 0x41, 0x75, 0x74, 0x68, 0x42, 0x79, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x21, 0x0a, 0x0c,
	0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12,
	0x50, 0x0a, 0x17, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x5f,
	0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x5f, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x14, 0x61, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x49,
	0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73,
	0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x52, 0x0a, 0x18, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73,
	0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x5f, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x5f,
	0x69, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x15, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x49, 0x6e, 0x22, 0x71, 0x0a, 0x0b, 0x41, 0x75,
	0x74, 0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x42, 0x0a, 0x08, 0x70, 0x72, 0x6f,
	0x76, 0x69, 0x64, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26, 0x2e, 0x74, 0x61,
	0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x76, 0x69,
	0x64, 0x65, 0x72, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x12, 0x1e, 0x0a,
	0x0a, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x22, 0xfc, 0x01,
	0x0a, 0x0c, 0x41, 0x75, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x21,
	0x0a, 0x0c, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x12, 0x50, 0x0a, 0x17, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x5f, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x5f, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x14, 0x61,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65,
	0x73, 0x49, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x5f, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x66, 0x72,
	0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x52, 0x0a, 0x18, 0x72, 0x65, 0x66, 0x72,
	0x65, 0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x5f, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65,
	0x73, 0x5f, 0x69, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x15, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x49, 0x6e, 0x22, 0x29, 0x0a, 0x11,
	0x50, 0x61, 0x72, 0x73, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0xc0, 0x01, 0x0a, 0x12, 0x50, 0x61, 0x72, 0x73,
	0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x42,
	0x0a, 0x08, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x26, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64,
	0x65, 0x72, 0x12, 0x1e, 0x0a, 0x0a, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69,
	0x65, 0x72, 0x12, 0x46, 0x0a, 0x0a, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f,
	0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75,
	0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x09, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x2a, 0x56, 0x0a, 0x09, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1a, 0x0a, 0x16, 0x54, 0x4f, 0x4b, 0x45, 0x4e,
	0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45,
	0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x54, 0x4f, 0x4b, 0x45, 0x4e, 0x5f, 0x54, 0x59, 0x50,
	0x45, 0x5f, 0x41, 0x43, 0x43, 0x45, 0x53, 0x53, 0x10, 0x01, 0x12, 0x16, 0x0a, 0x12, 0x54, 0x4f,
	0x4b, 0x45, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x52, 0x45, 0x46, 0x52, 0x45, 0x53, 0x48,
	0x10, 0x02, 0x32, 0xa4, 0x04, 0x0a, 0x0b, 0x41, 0x75, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x8b, 0x01, 0x0a, 0x0b, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65,
	0x63, 0x6b, 0x12, 0x30, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76,
	0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x31, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69,
	0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68,
	0x2e, 0x76, 0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x17, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x12,
	0x0f, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2f, 0x76, 0x31, 0x2f, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68,
	0x12, 0xb2, 0x01, 0x0a, 0x12, 0x41, 0x75, 0x74, 0x68, 0x42, 0x79, 0x52, 0x65, 0x66, 0x72, 0x65,
	0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x37, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69,
	0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61,
	0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x42, 0x79, 0x52, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x38, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e,
	0x41, 0x75, 0x74, 0x68, 0x42, 0x79, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x29, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x23, 0x3a, 0x01, 0x2a, 0x22, 0x1e, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2f, 0x76, 0x31, 0x2f,
	0x61, 0x75, 0x74, 0x68, 0x2d, 0x62, 0x79, 0x2d, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x2d,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x5f, 0x0a, 0x04, 0x41, 0x75, 0x74, 0x68, 0x12, 0x29, 0x2e,
	0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x74,
	0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f,
	0x69, 0x6f, 0x2e, 0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x71, 0x0a, 0x0a, 0x50, 0x61, 0x72, 0x73, 0x65, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x2f, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e, 0x69,
	0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75, 0x74, 0x68,
	0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x72, 0x73, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x30, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e,
	0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75, 0x74,
	0x68, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x72, 0x73, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x79, 0x0a, 0x27, 0x63, 0x6f, 0x6d,
	0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2e,
	0x69, 0x64, 0x6c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x61, 0x75, 0x74,
	0x68, 0x2e, 0x76, 0x31, 0x42, 0x09, 0x41, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x41, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x61,
	0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2f, 0x69, 0x64, 0x6c, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f,
	0x2f, 0x74, 0x61, 0x65, 0x68, 0x6f, 0x69, 0x6f, 0x2f, 0x69, 0x64, 0x6c, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x75,
	0x74, 0x68, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_taehoio_idl_services_auth_v1_auth_proto_rawDescOnce sync.Once
	file_taehoio_idl_services_auth_v1_auth_proto_rawDescData = file_taehoio_idl_services_auth_v1_auth_proto_rawDesc
)

func file_taehoio_idl_services_auth_v1_auth_proto_rawDescGZIP() []byte {
	file_taehoio_idl_services_auth_v1_auth_proto_rawDescOnce.Do(func() {
		file_taehoio_idl_services_auth_v1_auth_proto_rawDescData = protoimpl.X.CompressGZIP(file_taehoio_idl_services_auth_v1_auth_proto_rawDescData)
	})
	return file_taehoio_idl_services_auth_v1_auth_proto_rawDescData
}

var file_taehoio_idl_services_auth_v1_auth_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_taehoio_idl_services_auth_v1_auth_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_taehoio_idl_services_auth_v1_auth_proto_goTypes = []interface{}{
	(TokenType)(0),                     // 0: taehoio.idl.services.auth.v1.TokenType
	(*HealthCheckRequest)(nil),         // 1: taehoio.idl.services.auth.v1.HealthCheckRequest
	(*HealthCheckResponse)(nil),        // 2: taehoio.idl.services.auth.v1.HealthCheckResponse
	(*AuthByRefreshTokenRequest)(nil),  // 3: taehoio.idl.services.auth.v1.AuthByRefreshTokenRequest
	(*AuthByRefreshTokenResponse)(nil), // 4: taehoio.idl.services.auth.v1.AuthByRefreshTokenResponse
	(*AuthRequest)(nil),                // 5: taehoio.idl.services.auth.v1.AuthRequest
	(*AuthResponse)(nil),               // 6: taehoio.idl.services.auth.v1.AuthResponse
	(*ParseTokenRequest)(nil),          // 7: taehoio.idl.services.auth.v1.ParseTokenRequest
	(*ParseTokenResponse)(nil),         // 8: taehoio.idl.services.auth.v1.ParseTokenResponse
	(*durationpb.Duration)(nil),        // 9: google.protobuf.Duration
	(v1.Provider)(0),                   // 10: taehoio.idl.services.user.v1.Provider
}
var file_taehoio_idl_services_auth_v1_auth_proto_depIdxs = []int32{
	9,  // 0: taehoio.idl.services.auth.v1.AuthByRefreshTokenResponse.access_token_expires_in:type_name -> google.protobuf.Duration
	9,  // 1: taehoio.idl.services.auth.v1.AuthByRefreshTokenResponse.refresh_token_expires_in:type_name -> google.protobuf.Duration
	10, // 2: taehoio.idl.services.auth.v1.AuthRequest.provider:type_name -> taehoio.idl.services.user.v1.Provider
	9,  // 3: taehoio.idl.services.auth.v1.AuthResponse.access_token_expires_in:type_name -> google.protobuf.Duration
	9,  // 4: taehoio.idl.services.auth.v1.AuthResponse.refresh_token_expires_in:type_name -> google.protobuf.Duration
	10, // 5: taehoio.idl.services.auth.v1.ParseTokenResponse.provider:type_name -> taehoio.idl.services.user.v1.Provider
	0,  // 6: taehoio.idl.services.auth.v1.ParseTokenResponse.token_type:type_name -> taehoio.idl.services.auth.v1.TokenType
	1,  // 7: taehoio.idl.services.auth.v1.AuthService.HealthCheck:input_type -> taehoio.idl.services.auth.v1.HealthCheckRequest
	3,  // 8: taehoio.idl.services.auth.v1.AuthService.AuthByRefreshToken:input_type -> taehoio.idl.services.auth.v1.AuthByRefreshTokenRequest
	5,  // 9: taehoio.idl.services.auth.v1.AuthService.Auth:input_type -> taehoio.idl.services.auth.v1.AuthRequest
	7,  // 10: taehoio.idl.services.auth.v1.AuthService.ParseToken:input_type -> taehoio.idl.services.auth.v1.ParseTokenRequest
	2,  // 11: taehoio.idl.services.auth.v1.AuthService.HealthCheck:output_type -> taehoio.idl.services.auth.v1.HealthCheckResponse
	4,  // 12: taehoio.idl.services.auth.v1.AuthService.AuthByRefreshToken:output_type -> taehoio.idl.services.auth.v1.AuthByRefreshTokenResponse
	6,  // 13: taehoio.idl.services.auth.v1.AuthService.Auth:output_type -> taehoio.idl.services.auth.v1.AuthResponse
	8,  // 14: taehoio.idl.services.auth.v1.AuthService.ParseToken:output_type -> taehoio.idl.services.auth.v1.ParseTokenResponse
	11, // [11:15] is the sub-list for method output_type
	7,  // [7:11] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_taehoio_idl_services_auth_v1_auth_proto_init() }
func file_taehoio_idl_services_auth_v1_auth_proto_init() {
	if File_taehoio_idl_services_auth_v1_auth_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
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
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthByRefreshTokenRequest); i {
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
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthByRefreshTokenResponse); i {
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
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthRequest); i {
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
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthResponse); i {
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
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ParseTokenRequest); i {
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
		file_taehoio_idl_services_auth_v1_auth_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ParseTokenResponse); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_taehoio_idl_services_auth_v1_auth_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_taehoio_idl_services_auth_v1_auth_proto_goTypes,
		DependencyIndexes: file_taehoio_idl_services_auth_v1_auth_proto_depIdxs,
		EnumInfos:         file_taehoio_idl_services_auth_v1_auth_proto_enumTypes,
		MessageInfos:      file_taehoio_idl_services_auth_v1_auth_proto_msgTypes,
	}.Build()
	File_taehoio_idl_services_auth_v1_auth_proto = out.File
	file_taehoio_idl_services_auth_v1_auth_proto_rawDesc = nil
	file_taehoio_idl_services_auth_v1_auth_proto_goTypes = nil
	file_taehoio_idl_services_auth_v1_auth_proto_depIdxs = nil
}
