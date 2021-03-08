#!/bin/bash

IDL_PATH=/go/src/github.com/taehoio/idl
PROTOBUF_COMMIT_SHA=e5baa4cc342f2e90f7ed531de4a59607e80d8e6d

docker run --rm -i --name protobuf -v "$(pwd)":$IDL_PATH -w $IDL_PATH --entrypoint /bin/sh taehoio/protobuf:$PROTOBUF_COMMIT_SHA -c '\
  buf generate \
'
