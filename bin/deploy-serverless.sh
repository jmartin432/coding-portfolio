#!/bin/bash
set -eu

read -p "Environment? " STAGE
echo "Deploying serverless to ${STAGE}..."

"sls deploy --stage ${STAGE}"
