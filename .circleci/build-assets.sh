#!/usr/bin/env bash
##
# Build module front-end assets.
#
# shellcheck disable=SC2015,SC2094

set -e

echo "==> Installing node modules"
npm install

echo "==> Building library assets"
npm run build
