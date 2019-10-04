#!/bin/bash
set -eu

read -p "Environment?" STAGE
echo "Deploying static assets to ${STAGE}..."

BUCKET_NAME=$(aws \
    cloudformation describe-stacks \
    --stack-name "portfolio-${STAGE}" \
    --query "Stacks[0].Outputs[?OutputKey=='WebsiteBucket'] | [0].OutputValue" \
    --output text)

echo $BUCKET_NAME

WEBSITE_URL=$(aws \
    cloudformation describe-stacks \
    --stack-name "portfolio-${STAGE}" \
    --query "Stacks[0].Outputs[?OutputKey=='WebsiteUrl'] | [0].OutputValue" \
    --output text)

echo $WEBSITE_URL

aws s3 sync --acl 'public-read' --delete ./src/ "s3://${BUCKET_NAME}/"

echo "Bucket URL: ${WEBSITE_URL}"
