#!/bin/bash

docker run --rm --name prototool \
    -v "$(pwd)/protos":/protos \
    -w /protos uber/prototool:1.8.1 \
    sh -c "prototool format ./apis -w && prototool format ./events -w"
