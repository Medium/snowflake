#!/usr/bin/env bash
yarn export
aws s3 sync out/ s3://com-gu-snowflake/ --profile developerPlayground
