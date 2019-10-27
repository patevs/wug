@ECHO OFF

:: -------------------- ::
:: scripts/gen-docs.cmd ::
:: -------------------- ::

:: Batch script which downloads project dependencies documentation.
:: Requires curl to be installed.

:: TODO: Verify curl is installed.

CLS
ECHO. && ECHO [4mRunning Documentation Download Script[0m

:: To download a file from GitHub run:
:: CALL curl https://raw.githubusercontent.com/user/repository/branch/filename

:: Remove old docs directory if exists
IF EXIST ..\docs (
    ECHO. && ECHO [96m Deleting old [4mdocs[0m [96mdirectory... [0m
    RMDIR /S /Q ..\docs
    ECHO [92m  Done! [0m
)

:: Create docs\dependencies directory
ECHO. && ECHO [96m Creating [4mdocs\dependencies[0m [96mdirectory... [0m
CALL mkdir ..\docs\dependencies
ECHO [92m  Done! [0m

:: Create docs\dev-dependencies directory
ECHO. && ECHO [96m Creating [4mdocs\dev-dependencies[0m [96mdirectory... [0m
CALL mkdir ..\docs\dev-dependencies
ECHO [92m  Done! [0m

:: ECHO. && ECHO [92mDownloading Documentation for Project Dependencies... [0m

:: Move into docs\dependencies directory
:: CALL cd ..\docs\dependencies

:: ECHO. && ECHO [96m - boxen - [0m
:: CALL curl https://raw.githubusercontent.com/sindresorhus/boxen/master/readme.md -o boxen.md -#

:: ECHO. && ECHO [96m - chalk - [0m
:: CALL curl https://raw.githubusercontent.com/chalk/chalk/master/readme.md -o chalk.md -#

:: ECHO. && ECHO [96m - cli-table3 - [0m
:: CALL curl https://raw.githubusercontent.com/cli-table/cli-table3/master/README.md -o cli-table3.md -#

:: ECHO. && ECHO [92mDownloading Documentation for Project Development Dependencies... [0m

:: Move into docs\dev-dependencies directory
:: CALL cd ..\dev-dependencies

:: ECHO. && ECHO [96m - eslint - [0m
:: CALL curl https://raw.githubusercontent.com/eslint/eslint/master/README.md -o eslint.md -#

:: ECHO. && ECHO [96m - eslint-config-prettier - [0m
:: CALL curl https://raw.githubusercontent.com/prettier/eslint-config-prettier/master/README.md -o eslint-config-prettier.md -#

:: ECHO. && ECHO [96m - eslint-plugin-node - [0m
:: CALL curl https://raw.githubusercontent.com/mysticatea/eslint-plugin-node/master/README.md -o eslint-plugin-node.md -#

:: ECHO. && ECHO [96m - eslint-plugin-prettier - [0m
:: CALL curl https://raw.githubusercontent.com/prettier/eslint-plugin-prettier/master/README.md -o eslint-plugin-prettier.md -#

:: ECHO. && ECHO [96m - prettier - [0m
:: CALL curl https://raw.githubusercontent.com/prettier/prettier/master/README.md -o prettier.md -#

ECHO. && ECHO [92mDone! [0m

GOTO :EOF
