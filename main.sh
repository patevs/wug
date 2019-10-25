#!/bin/bash

# ------- #
# main.sh #
# ------- #

printf "\nChecking Environment...\n\n"

# NodeJS
command -v node >/dev/null 2>&1 || { 
    echo >&2 "I require nodejs but it's not installed.  Aborting."; exit 1; 
}
printf " * NodeJS: "
node -v

printf "\nDone"

# EOF #
