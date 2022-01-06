#!/bin/bash

IDL_PATH=/go/src/github.com/taehoio/idl
PROTOBUF_COMMIT_SHA=1ddffd5a6465f0de4e97bb20040022e75127c465

docker run --rm -i --name protobuf -v "$(pwd)":$IDL_PATH -w $IDL_PATH --entrypoint /bin/sh taehoio/protobuf:$PROTOBUF_COMMIT_SHA -c '\
  buf generate \
'
