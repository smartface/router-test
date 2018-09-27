#!/usr/bin/env bash

(
    cd ~/workspace
    git clone https://github.com/smartface/router.git
    cd scripts
    npm i -S path-to-regexp@2.4.0 resolve-pathname@2.2.0
    cd node_modules
    rm -R sf-core
    git clone git clone git@bitbucket.org:smartface-team/sf-core.git
    cd sf-core
    git checkout controllers-analysis
    npm i
    node encrypt/encrypt.js
    cd ~/workspace/router
    npm run dev:link
)