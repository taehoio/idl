#!/bin/bash

PROTOS=`find ./protos -name '*.proto'`
PROTO_DIRS=$(echo ${PROTOS} | xargs -n1 dirname | sort -u)
OUT="gen/go/"

mkdir -p $OUT

IDL_PATH=/go/src/github.com/taeho-io/idl

for FILE in ${PROTOS}; do
  FILE=$IDL_PATH${FILE#.}

  # generate gRPC stub
  docker run --rm -it --name protoc -v $(pwd):$IDL_PATH -w $IDL_PATH xissy/protoc:v0.1.3 \
    -I/go/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    -I/go/src/github.com/grpc-ecosystem/grpc-gateway \
    -I$IDL_PATH/protos \
    -I/go/src \
    --go_out=plugins=grpc:/go/src/ \
    --grpc-gateway_out=logtostderr=true:/go/src/ \
    --validate_out="lang=go:/go/src/" \
    $FILE
done

