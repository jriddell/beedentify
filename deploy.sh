#!/usr/bin/bash

set -ex

$plant = "giant-hogweed"
git checkout ${plant}
git pull
mkdir -p ../plantdentify.edinburghlinux.co.uk/${plant}
ng build --prod --output-path=../plantdentify.edinburghlinux.co.uk/${plant} --base-href https://plantdentify.edinburghlinux.co.uk/${plant}/

$plant = "japanese-knotweed"
git checkout ${plant}
git pull
mkdir -p ../plantdentify.edinburghlinux.co.uk/${plant}
ng build --prod --output-path=../plantdentify.edinburghlinux.co.uk/${plant} --base-href https://plantdentify.edinburghlinux.co.uk/${plant}/

$plant = "himalayan-balsam"
git checkout ${plant}
git pull
mkdir -p ../plantdentify.edinburghlinux.co.uk/${plant}
ng build --prod --output-path=../plantdentify.edinburghlinux.co.uk/${plant} --base-href https://plantdentify.edinburghlinux.co.uk/${plant}/
