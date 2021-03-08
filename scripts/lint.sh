#!/bin/bash

IDL_PATH=/go/src/github.com/taehoio/idl

docker run --rm -i --name protobuf -v "$(pwd)":$IDL_PATH -w $IDL_PATH --entrypoint /bin/sh taehoio/protobuf:ff6526f768ccabbc821ac3fa52130dba40fcf513 -c '\
  buf lint --path services \
'
