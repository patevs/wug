#!/bin/bash

# ------- #
# main.sh #
# ------- #

printf "\nChecking Environment...\n\n"

# source prettytable.sh

# {
#    printf 'PID\tUSER\tAPPNAME\n';
#    printf '%s\t%s\t%s\n' "1" "john" "foo bar";
#    printf '%s\t%s\t%s\n' "12345678" "someone_with_a_long_name" "blub blib blab bam boom";
# } | prettytable 3

{
    printf 'PID\tUSER\tAPPNAME\n';
    printf '%s\t%s\t%s\n' "1" "john" "foo bar";
    printf '%s\t%s\t%s\n' "12345678" "someone_with_a_long_name" "blub blib blab bam boom";
} | bash prettytable.sh 3

# NodeJS
command -v node >/dev/null 2>&1 || { 
    echo >&2 "I require nodejs but it's not installed.  Aborting."; exit 1; 
}
printf " * NodeJS: "
node -v

printf "\nDone"

# EOF #
