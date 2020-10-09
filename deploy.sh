#!/usr/bin/bash

set -ex

git checkout hogweed
git pull
ng build --prod --outputPath=../plantdentify.edinburghlinux.co.uk/hogweed

git checkout foo
git pull
ng build --prod --outputPath=../plantdentify.edinburghlinux.co.uk/foo

git checkout bar
git pull
ng build --prod --outputPath=../plantdentify.edinburghlinux.co.uk/bar
