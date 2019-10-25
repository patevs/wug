#!/bin/bash

# ------------ #
# env-stats.sh #
# ------------ #

printf "\nChecking Environment...\n\n"

# NodeJS
command -v node >/dev/null 2>&1 || { 
    echo >&2 "I require nodejs but it's not installed.  Aborting."; exit 1; 
}
printf " * NodeJS: "
node -v

# NPM
command -v npm >/dev/null 2>&1 || { 
    echo >&2 "I require npm but it's not installed.  Aborting."; exit 1; 
}
printf " * NPM: "
npm -v

# Python
command -v python >/dev/null 2>&1 || { 
    echo >&2 "I require python but it's not installed.  Aborting."; exit 1; 
}
printf " * Python: "
python -V

# PIP
command -v pip >/dev/null 2>&1 || { 
    echo >&2 "I require pip but it's not installed.  Aborting."; exit 1; 
}
printf " * PIP: "
pip -V

printf "\nDone"

# EOF #
