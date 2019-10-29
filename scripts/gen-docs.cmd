@ECHO OFF

:: -------------------- ::
:: scripts/gen-docs.cmd ::
:: -------------------- ::

:: Batch script which downloads project dependencies readme documentation.
:: Requires Curl to be installed.

CLS
ECHO. && ECHO [4mRunning Documentation Readme Download Script[0m

:: To download a file from GitHub run:
:: CALL curl https://raw.githubusercontent.com/user/repository/branch/filename

:: Verify Curl is installed & can be found
ECHO. & ECHO [92m Verifying Curl Installation... [0m

ECHO. & ECHO  [45m Curl Installation: [0m & ECHO.
WHERE curl
IF %ERRORLEVEL% NEQ 0 ECHO. & ECHO [91m Curl installation could not be found... exiting! [0m & GOTO :EOF

:: Check if 'docs' directory exists; if not, create one.
:: IF EXISTS ..\docs\NUL
IF EXIST ..\docs\ (
	:: docs directory already exists; nothing to do.
    ECHO. & ECHO [96m [4mdocs[0m [96mdirectory already exists. [0m
) ELSE (
	:: docs directory does not exist; create docs directory
	ECHO. & ECHO [96m [4mdocs[0m [96mdirectory does not exist. Creating [4mdocs[0m [96mdirectory... [0m
	CALL mkdir ..\docs
	ECHO [92m  Done! [0m
)

:: Remove old docs directory if exists
:: IF EXIST ..\docs (
::    ECHO. && ECHO [96m Deleting old [4mdocs[0m [96mdirectory... [0m
::    RMDIR /S /Q ..\docs
::    ECHO [92m  Done! [0m
::)

:: Create docs\dependencies directory
ECHO. && ECHO [96m Creating [4mdocs\dependencies[0m [96mdirectory... [0m
CALL mkdir ..\docs\dependencies
ECHO [92m  Done! [0m

:: Create docs\dev-dependencies directory
ECHO. && ECHO [96m Creating [4mdocs\dev-dependencies[0m [96mdirectory... [0m
CALL mkdir ..\docs\dev-dependencies
ECHO [92m  Done! [0m

ECHO. && ECHO [92mDownloading Documentation for Project Dependencies... [0m

:: Move into docs\dependencies directory
CALL cd ..\docs\dependencies

:: ECHO. && ECHO [96m - boxen - [0m
:: CALL curl https://raw.githubusercontent.com/sindresorhus/boxen/master/readme.md -o boxen.md -#

:: ECHO. && ECHO [96m - chalk - [0m
:: CALL curl https://raw.githubusercontent.com/chalk/chalk/master/readme.md -o chalk.md -#

:: ECHO. && ECHO [96m - cli-table3 - [0m
:: CALL curl https://raw.githubusercontent.com/cli-table/cli-table3/master/README.md -o cli-table3.md -#

ECHO. && ECHO [96m - execa - [0m
CALL curl https://raw.githubusercontent.com/sindresorhus/execa/master/readme.md -o execa.md -#

:: ECHO. && ECHO [96m - has - [0m
:: CALL curl https://raw.githubusercontent.com/kdabir/has/master/README.md -o has.md -#

:: https://github.com/moxystudio/node-cross-spawn
:: ECHO. && ECHO [96m - node-cross-spawn - [0m
:: CALL curl https://raw.githubusercontent.com/moxystudio/node-cross-spawn/master/README.md -o node-cross-spawn.md -#

:: ECHO. && ECHO [96m - platform.js - [0m
:: CALL curl https://raw.githubusercontent.com/bestiejs/platform.js/master/README.md -o platformjs.md -#

:: https://github.com/sebhildebrandt/systeminformation
:: ECHO. && ECHO [96m - systeminformation - [0m
:: CALL curl https://raw.githubusercontent.com/sebhildebrandt/systeminformation/master/README.md -o systeminformation.md -#

:: ECHO. && ECHO [96m - term-size - [0m
:: CALL curl https://raw.githubusercontent.com/sindresorhus/term-size/master/readme.md -o term-size.md -#

ECHO. && ECHO [92mDownloading Documentation for Project Development Dependencies... [0m

:: Move into docs\dev-dependencies directory
CALL cd ..\dev-dependencies

:: ECHO. && ECHO [96m - clean-webpack-plugin - [0m
:: CALL curl https://raw.githubusercontent.com/johnagan/clean-webpack-plugin/master/README.md -o clean-webpack-plugin.md -#

:: ECHO. && ECHO [96m - cross-env - [0m
:: CALL curl https://raw.githubusercontent.com/kentcdodds/cross-env/master/README.md -o cross-env.md -#

ECHO. && ECHO [96m - eslint - [0m
CALL curl https://raw.githubusercontent.com/eslint/eslint/master/README.md -o eslint.md -#

ECHO. && ECHO [96m - eslint-config-prettier - [0m
CALL curl https://raw.githubusercontent.com/prettier/eslint-config-prettier/master/README.md -o eslint-config-prettier.md -#

:: ECHO. && ECHO [96m - eslint-plugin-node - [0m
:: CALL curl https://raw.githubusercontent.com/mysticatea/eslint-plugin-node/master/README.md -o eslint-plugin-node.md -#

ECHO. && ECHO [96m - eslint-plugin-prettier - [0m
CALL curl https://raw.githubusercontent.com/prettier/eslint-plugin-prettier/master/README.md -o eslint-plugin-prettier.md -#

ECHO. && ECHO [96m - prettier - [0m
CALL curl https://raw.githubusercontent.com/prettier/prettier/master/README.md -o prettier.md -#

:: ECHO. && ECHO [96m - webpack - [0m
:: CALL curl https://raw.githubusercontent.com/webpack/webpack/master/README.md -o webpack.md -#

:: ECHO. && ECHO [96m - webpack-cli - [0m
:: CALL curl https://raw.githubusercontent.com/webpack/webpack-cli/master/README.md -o webpack-cli.md -#

:: ECHO. && ECHO [96m - webpack-merge - [0m
:: CALL curl https://raw.githubusercontent.com/survivejs/webpack-merge/master/README.md -o webpack-merge.md -#

ECHO. && ECHO [92mDone! [0m

GOTO :EOF
