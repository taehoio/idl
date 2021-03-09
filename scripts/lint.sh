#!/bin/bash

IDL_PATH=/go/src/github.com/taehoio/idl
PROTOBUF_COMMIT_SHA=4d23684d195e64eb49925a8aeb2f2c6e319c6109

docker run --rm -i --name protobuf -v "$(pwd)":$IDL_PATH -w $IDL_PATH --entrypoint /bin/sh taehoio/protobuf:$PROTOBUF_COMMIT_SHA -c '\
  buf lint --path services \
'
