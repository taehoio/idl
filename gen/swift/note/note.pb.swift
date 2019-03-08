// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: note/note.proto
//
// For information on using the generated types, please see the documenation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

enum Note_BodyType: SwiftProtobuf.Enum {
  typealias RawValue = Int
  case text // = 0
  case html // = 1
  case markdown // = 2
  case UNRECOGNIZED(Int)

  init() {
    self = .text
  }

  init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .text
    case 1: self = .html
    case 2: self = .markdown
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  var rawValue: Int {
    switch self {
    case .text: return 0
    case .html: return 1
    case .markdown: return 2
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Note_BodyType: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  static var allCases: [Note_BodyType] = [
    .text,
    .html,
    .markdown,
  ]
}

#endif  // swift(>=4.2)

struct Note_CreateRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var createdBy: Int64 = 0

  var bodyType: Note_BodyType = .text

  var title: String = String()

  var body: String = String()

  var createdAt: Int64 = 0

  var updatedAt: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_CreateResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var noteID: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_GetRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var noteID: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_GetResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var noteID: Int64 = 0

  var bodyType: Note_BodyType = .text

  var createdBy: Int64 = 0

  var title: String = String()

  var body: String = String()

  var createdAt: Int64 = 0

  var updatedAt: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_NoteMessage {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var noteID: Int64 = 0

  var bodyType: Note_BodyType = .text

  var createdBy: Int64 = 0

  var title: String = String()

  var body: String = String()

  var createdAt: Int64 = 0

  var updatedAt: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_ListRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var offset: Int64 = 0

  var limit: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_ListResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var notes: [Note_NoteMessage] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_UpdateRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var noteID: Int64 = 0

  var bodyType: Note_BodyType = .text

  var title: String = String()

  var body: String = String()

  var updatedAt: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_UpdateResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_DeleteRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var noteID: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct Note_DeleteResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "note"

extension Note_BodyType: SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "TEXT"),
    1: .same(proto: "HTML"),
    2: .same(proto: "MARKDOWN"),
  ]
}

extension Note_CreateRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".CreateRequest"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "created_by"),
    2: .standard(proto: "body_type"),
    3: .same(proto: "title"),
    4: .same(proto: "body"),
    5: .standard(proto: "created_at"),
    6: .standard(proto: "updated_at"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.createdBy)
      case 2: try decoder.decodeSingularEnumField(value: &self.bodyType)
      case 3: try decoder.decodeSingularStringField(value: &self.title)
      case 4: try decoder.decodeSingularStringField(value: &self.body)
      case 5: try decoder.decodeSingularInt64Field(value: &self.createdAt)
      case 6: try decoder.decodeSingularInt64Field(value: &self.updatedAt)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.createdBy != 0 {
      try visitor.visitSingularInt64Field(value: self.createdBy, fieldNumber: 1)
    }
    if self.bodyType != .text {
      try visitor.visitSingularEnumField(value: self.bodyType, fieldNumber: 2)
    }
    if !self.title.isEmpty {
      try visitor.visitSingularStringField(value: self.title, fieldNumber: 3)
    }
    if !self.body.isEmpty {
      try visitor.visitSingularStringField(value: self.body, fieldNumber: 4)
    }
    if self.createdAt != 0 {
      try visitor.visitSingularInt64Field(value: self.createdAt, fieldNumber: 5)
    }
    if self.updatedAt != 0 {
      try visitor.visitSingularInt64Field(value: self.updatedAt, fieldNumber: 6)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_CreateRequest, rhs: Note_CreateRequest) -> Bool {
    if lhs.createdBy != rhs.createdBy {return false}
    if lhs.bodyType != rhs.bodyType {return false}
    if lhs.title != rhs.title {return false}
    if lhs.body != rhs.body {return false}
    if lhs.createdAt != rhs.createdAt {return false}
    if lhs.updatedAt != rhs.updatedAt {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_CreateResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".CreateResponse"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "note_id"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.noteID)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.noteID != 0 {
      try visitor.visitSingularInt64Field(value: self.noteID, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_CreateResponse, rhs: Note_CreateResponse) -> Bool {
    if lhs.noteID != rhs.noteID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_GetRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".GetRequest"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "note_id"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.noteID)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.noteID != 0 {
      try visitor.visitSingularInt64Field(value: self.noteID, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_GetRequest, rhs: Note_GetRequest) -> Bool {
    if lhs.noteID != rhs.noteID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_GetResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".GetResponse"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "note_id"),
    2: .standard(proto: "body_type"),
    3: .standard(proto: "created_by"),
    4: .same(proto: "title"),
    5: .same(proto: "body"),
    6: .standard(proto: "created_at"),
    7: .standard(proto: "updated_at"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.noteID)
      case 2: try decoder.decodeSingularEnumField(value: &self.bodyType)
      case 3: try decoder.decodeSingularInt64Field(value: &self.createdBy)
      case 4: try decoder.decodeSingularStringField(value: &self.title)
      case 5: try decoder.decodeSingularStringField(value: &self.body)
      case 6: try decoder.decodeSingularInt64Field(value: &self.createdAt)
      case 7: try decoder.decodeSingularInt64Field(value: &self.updatedAt)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.noteID != 0 {
      try visitor.visitSingularInt64Field(value: self.noteID, fieldNumber: 1)
    }
    if self.bodyType != .text {
      try visitor.visitSingularEnumField(value: self.bodyType, fieldNumber: 2)
    }
    if self.createdBy != 0 {
      try visitor.visitSingularInt64Field(value: self.createdBy, fieldNumber: 3)
    }
    if !self.title.isEmpty {
      try visitor.visitSingularStringField(value: self.title, fieldNumber: 4)
    }
    if !self.body.isEmpty {
      try visitor.visitSingularStringField(value: self.body, fieldNumber: 5)
    }
    if self.createdAt != 0 {
      try visitor.visitSingularInt64Field(value: self.createdAt, fieldNumber: 6)
    }
    if self.updatedAt != 0 {
      try visitor.visitSingularInt64Field(value: self.updatedAt, fieldNumber: 7)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_GetResponse, rhs: Note_GetResponse) -> Bool {
    if lhs.noteID != rhs.noteID {return false}
    if lhs.bodyType != rhs.bodyType {return false}
    if lhs.createdBy != rhs.createdBy {return false}
    if lhs.title != rhs.title {return false}
    if lhs.body != rhs.body {return false}
    if lhs.createdAt != rhs.createdAt {return false}
    if lhs.updatedAt != rhs.updatedAt {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_NoteMessage: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".NoteMessage"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "note_id"),
    2: .standard(proto: "body_type"),
    3: .standard(proto: "created_by"),
    4: .same(proto: "title"),
    5: .same(proto: "body"),
    6: .standard(proto: "created_at"),
    7: .standard(proto: "updated_at"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.noteID)
      case 2: try decoder.decodeSingularEnumField(value: &self.bodyType)
      case 3: try decoder.decodeSingularInt64Field(value: &self.createdBy)
      case 4: try decoder.decodeSingularStringField(value: &self.title)
      case 5: try decoder.decodeSingularStringField(value: &self.body)
      case 6: try decoder.decodeSingularInt64Field(value: &self.createdAt)
      case 7: try decoder.decodeSingularInt64Field(value: &self.updatedAt)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.noteID != 0 {
      try visitor.visitSingularInt64Field(value: self.noteID, fieldNumber: 1)
    }
    if self.bodyType != .text {
      try visitor.visitSingularEnumField(value: self.bodyType, fieldNumber: 2)
    }
    if self.createdBy != 0 {
      try visitor.visitSingularInt64Field(value: self.createdBy, fieldNumber: 3)
    }
    if !self.title.isEmpty {
      try visitor.visitSingularStringField(value: self.title, fieldNumber: 4)
    }
    if !self.body.isEmpty {
      try visitor.visitSingularStringField(value: self.body, fieldNumber: 5)
    }
    if self.createdAt != 0 {
      try visitor.visitSingularInt64Field(value: self.createdAt, fieldNumber: 6)
    }
    if self.updatedAt != 0 {
      try visitor.visitSingularInt64Field(value: self.updatedAt, fieldNumber: 7)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_NoteMessage, rhs: Note_NoteMessage) -> Bool {
    if lhs.noteID != rhs.noteID {return false}
    if lhs.bodyType != rhs.bodyType {return false}
    if lhs.createdBy != rhs.createdBy {return false}
    if lhs.title != rhs.title {return false}
    if lhs.body != rhs.body {return false}
    if lhs.createdAt != rhs.createdAt {return false}
    if lhs.updatedAt != rhs.updatedAt {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_ListRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".ListRequest"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "offset"),
    2: .same(proto: "limit"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.offset)
      case 2: try decoder.decodeSingularInt64Field(value: &self.limit)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.offset != 0 {
      try visitor.visitSingularInt64Field(value: self.offset, fieldNumber: 1)
    }
    if self.limit != 0 {
      try visitor.visitSingularInt64Field(value: self.limit, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_ListRequest, rhs: Note_ListRequest) -> Bool {
    if lhs.offset != rhs.offset {return false}
    if lhs.limit != rhs.limit {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_ListResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".ListResponse"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "notes"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.notes)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.notes.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.notes, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_ListResponse, rhs: Note_ListResponse) -> Bool {
    if lhs.notes != rhs.notes {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_UpdateRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".UpdateRequest"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "note_id"),
    2: .standard(proto: "body_type"),
    3: .same(proto: "title"),
    4: .same(proto: "body"),
    5: .standard(proto: "updated_at"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.noteID)
      case 2: try decoder.decodeSingularEnumField(value: &self.bodyType)
      case 3: try decoder.decodeSingularStringField(value: &self.title)
      case 4: try decoder.decodeSingularStringField(value: &self.body)
      case 5: try decoder.decodeSingularInt64Field(value: &self.updatedAt)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.noteID != 0 {
      try visitor.visitSingularInt64Field(value: self.noteID, fieldNumber: 1)
    }
    if self.bodyType != .text {
      try visitor.visitSingularEnumField(value: self.bodyType, fieldNumber: 2)
    }
    if !self.title.isEmpty {
      try visitor.visitSingularStringField(value: self.title, fieldNumber: 3)
    }
    if !self.body.isEmpty {
      try visitor.visitSingularStringField(value: self.body, fieldNumber: 4)
    }
    if self.updatedAt != 0 {
      try visitor.visitSingularInt64Field(value: self.updatedAt, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_UpdateRequest, rhs: Note_UpdateRequest) -> Bool {
    if lhs.noteID != rhs.noteID {return false}
    if lhs.bodyType != rhs.bodyType {return false}
    if lhs.title != rhs.title {return false}
    if lhs.body != rhs.body {return false}
    if lhs.updatedAt != rhs.updatedAt {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_UpdateResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".UpdateResponse"
  static let _protobuf_nameMap = SwiftProtobuf._NameMap()

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let _ = try decoder.nextFieldNumber() {
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_UpdateResponse, rhs: Note_UpdateResponse) -> Bool {
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_DeleteRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".DeleteRequest"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "note_id"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularInt64Field(value: &self.noteID)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.noteID != 0 {
      try visitor.visitSingularInt64Field(value: self.noteID, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_DeleteRequest, rhs: Note_DeleteRequest) -> Bool {
    if lhs.noteID != rhs.noteID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Note_DeleteResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".DeleteResponse"
  static let _protobuf_nameMap = SwiftProtobuf._NameMap()

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let _ = try decoder.nextFieldNumber() {
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Note_DeleteResponse, rhs: Note_DeleteResponse) -> Bool {
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}