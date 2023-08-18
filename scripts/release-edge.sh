#!/bin/bash

set -xe

# Restore all git changes
git restore -s@ -SW  -- packages

# Bump versions to edge
pnpm jiti ./scripts/bump-edge

# Update token
if [[ ! -z ${NPM_TOKEN} ]] ; then
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc
  echo "registry=https://registry.npmjs.org/" >> ~/.npmrc
  echo "always-auth=true" >> ~/.npmrc
  npm whoami
fi

# Release packages
for p in packages/* ; do
  pushd $p
  echo "Publishing $p"
  cp ../../LICENSE .
  cp ../../README.md .
  pnpm publish --access public --no-git-checks
  popd
done
