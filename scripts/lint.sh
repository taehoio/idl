#!/bin/bash

PROTOS=`find ./protos/pb -name '*.proto'`

IDL_PATH=/go/src/github.com/taeho-io/idl

for FILE in ${PROTOS}; do
    FILE=$IDL_PATH${FILE#.}

    # lint
    docker run --rm -it --name protoc -v $(pwd):$IDL_PATH -w $IDL_PATH xissy/protoc:v0.1.3 \
        -I/go/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
        -I$IDL_PATH/protos \
        --lint_out=/go/src \
        $FILE
done
