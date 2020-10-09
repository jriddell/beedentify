#!/usr/bin/bash

set -ex

git checkout hogweed
git pull
mkdir -p ../plantdentify.edinburghlinux.co.uk/hogweed
ng build --prod --outputPath=../plantdentify.edinburghlinux.co.uk/hogweed

git checkout foo
git pull
mkdir -p ../plantdentify.edinburghlinux.co.uk/foo
ng build --prod --outputPath=../plantdentify.edinburghlinux.co.uk/foo

git checkout bar
git pull
mkdir -p ../plantdentify.edinburghlinux.co.uk/bar
ng build --prod --outputPath=../plantdentify.edinburghlinux.co.uk/bar
