#!/bin/bash

IDL_PATH=/go/src/github.com/taehoio/idl

docker run --rm -i --name protoc -v "$(pwd)":$IDL_PATH -w $IDL_PATH --entrypoint /bin/sh thethingsindustries/protoc:3.1.26 -c '\
  PROTOS=`find ./protos -name "*.proto"`; \
  IDL_PATH=/go/src/github.com/taehoio/idl; \
  \
  for FILE in ${PROTOS}; do \
    protoc \
      -I$IDL_PATH/protos \
      -I/go/src \
      --lint_out=/go/src \
      $IDL_PATH${FILE#.}; \
  done \
'
