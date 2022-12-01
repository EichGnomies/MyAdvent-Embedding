#!/bin/bash

PACKAGE_VERSION=$(cat package.json \
	| grep version \
	| head -1 \
	| awk -F: '{ print $2 }' \
	| sed 's/[",]//g' \
	| tr -d '[[:space:]]')

# build
DIR_BUILD=build
FILE_OUT="autoResize_$PACKAGE_VERSION.min.js"
rm -rf $DIR_BUILD
mkdir -p $DIR_BUILD
./node_modules/.bin/uglifyjs --output $DIR_BUILD/$FILE_OUT -- src/iFrameResizer.min.js src/main.js
