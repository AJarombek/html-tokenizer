#!/usr/bin/env bash

# Equivalent to npm init
yarn init

# Install globally to link the script in the package.json to a location on the path
npm install -g

# Now you can call the script directly!
tokenize

# Commander simplifies building complex command line interfaces
yarn add commander

yarn add parse5