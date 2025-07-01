#!/bin/sh
set -e

bunx drizzle-kit migrate

exec "$@"