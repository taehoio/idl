#!/bin/bash

IDL_PATH=/go/src/github.com/taehoio/idl

docker run --rm -i --name protoc -v "$(pwd)":$IDL_PATH -w $IDL_PATH --entrypoint /bin/sh thethingsindustries/protoc:3.1.26 -c '\
  PROTOS=`find ./protos -name "*.proto"`; \
  IDL_PATH=/go/src/github.com/taehoio/idl; \
  \
  mkdir -p $IDL_PATH"/gen/python/"; \
  for FILE in ${PROTOS}; do \
    echo "[PYTHON] "$FILE; \
    protoc-wrapper \
      -I$IDL_PATH/protos \
      -I/go/src \
      --python_out=gen/python/ \
      --grpc-python_out=gen/python/ \
      $IDL_PATH${FILE#.}; \
  done; \
  \
  mkdir -p $IDL_PATH"/gen/java/"; \
  JAVA_BUILT_IN_PROTO_FILE_PATH="/protos/google/rpc"; \
  for FILE in ${PROTOS}; do \
    if echo "$FILE" | grep -q "$JAVA_BUILT_IN_PROTO_FILE_PATH"; then \
      echo "[JAVA EXCEPT FILE] "$FILE; \
      continue; \
    fi; \
    echo "[JAVA] "$FILE; \
    protoc \
      -I$IDL_PATH/protos \
      -I/go/src \
      --java_out=$IDL_PATH/gen/java \
      --plugin=protoc-gen-grpc-java=/usr/bin/protoc-gen-grpc-java \
      --grpc-java_out=$IDL_PATH/gen/java \
      $IDL_PATH${FILE#.}; \
  done; \
  \
  mkdir -p $IDL_PATH"/gen/javalite/"; \
  for FILE in ${PROTOS}; do \
    echo "[JAVALITE] "$FILE; \
    protoc \
      -I$IDL_PATH/protos \
      -I/go/src \
      --java_out=lite:$IDL_PATH/gen/javalite \
      --plugin=protoc-gen-grpc-java=/usr/bin/protoc-gen-grpc-java \
      --grpc-java_out=lite:$IDL_PATH/gen/javalite \
      $IDL_PATH${FILE#.}; \
  done; \
  \
  mkdir -p $IDL_PATH"/gen/swift/"; \
  SWIFT_BUILT_IN_PROTO_FILE_PATH="/protos/google/protobuf"; \
  for FILE in ${PROTOS}; do \
    if echo "$FILE" | grep -q "$SWIFT_BUILT_IN_PROTO_FILE_PATH"; then \
      echo "[SWIFT EXCEPT FILE] "$FILE; \
      continue; \
    fi; \
    echo "[SWIFT] "$FILE; \
    protoc \
      -I$IDL_PATH/protos \
      -I/go/src \
      --swift_opt=FileNaming=PathToUnderscores \
      --swift_opt=Visibility=Public \
      --swift_out=gen/swift/ \
      $IDL_PATH${FILE#.}; \
  done; \
  \
  mkdir -p $IDL_PATH"/gen/go/"; \
  for FILE in ${PROTOS}; do \
    echo "[GO] "$FILE; \
    protoc \
      -I$IDL_PATH/protos \
      -I/go/src \
      --go_out=plugins=grpc:/go/src/ \
      --grpc-gateway_out=logtostderr=true:/go/src/ \
      $IDL_PATH${FILE#.}; \
  done; \
  \
  mkdir -p $IDL_PATH"/gen/swagger/"; \
  for FILE in ${PROTOS}; do \
    echo "[SWAGGER] "$FILE; \
    protoc \
      -I$IDL_PATH/protos \
      -I/go/src \
      --swagger_out=logtostderr=true:gen/swagger/ \
      $IDL_PATH${FILE#.}; \
  done; \
'
