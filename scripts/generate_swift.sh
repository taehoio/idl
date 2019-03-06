#!/bin/bash

PROTOS=`find ./protos -name '*.proto'`
PROTO_DIRS=$(echo ${PROTOS} | xargs -n1 dirname | sort -u)
OUT="generated/swift/"

mkdir -p $OUT

IDL_PATH=/go/src/github.com/taeho-io/idl

for FILE in ${PROTOS}; do
  FILE=$IDL_PATH${FILE#.}

  # generate gRPC stub
  docker run --rm -it --name protoc -v $(pwd):$IDL_PATH -w $IDL_PATH xissy/protoc:v0.1.2 \
    -I/go/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    -I/go/src/github.com/grpc-ecosystem/grpc-gateway \
    -I$IDL_PATH/protos \
    --swift_out=./generated/swift/ \
    --swiftgrpc_out=Client=true,Server=false:./generated/swift/ \
    --swiftgrpcrx_out=./generated/swift/ \
    $FILE
done

