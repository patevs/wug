@ECHO OFF
REM Script to download project dependencies documentation

CLS
ECHO. && ECHO [4mRunning Documentation Download Script[0m

:: To download a file from GitHub run:
:: CALL curl https://raw.githubusercontent.com/user/repository/branch/filename

REM :: Remove old docs directory if exists
IF EXIST ..\docs (
    ECHO. && ECHO [96m Deleting old [4mdocs[0m [96mdirectory... [0m
    RMDIR /S /Q ..\docs
    ECHO [92m  Done! [0m
)

REM :: Create docs\dependencies directory
ECHO. && ECHO [96m Creating [4mdocs\dependencies[0m [96mdirectory... [0m
CALL mkdir ..\docs\dependencies
ECHO [92m  Done! [0m

REM :: Create docs\dev-dependencies directory
ECHO. && ECHO [96m Creating [4mdocs\dev-dependencies[0m [96mdirectory... [0m
CALL mkdir ..\docs\dev-dependencies
ECHO [92m  Done! [0m

ECHO. && ECHO [92mDownloading Documentation for Project Dependencies... [0m

REM :: Move into docs\dependencies directory
CALL cd ..\docs\dependencies

ECHO. && ECHO [96m - axios - [0m
CALL curl https://raw.githubusercontent.com/axios/axios/master/README.md -o axios.md -#

ECHO. && ECHO [96m - boxen - [0m
CALL curl https://raw.githubusercontent.com/sindresorhus/boxen/master/readme.md -o boxen.md -#

ECHO. && ECHO [96m - chalk - [0m
CALL curl https://raw.githubusercontent.com/chalk/chalk/master/readme.md -o chalk.md -#

ECHO. && ECHO [96m - cheerio - [0m
CALL curl https://raw.githubusercontent.com/cheeriojs/cheerio/master/Readme.md -o cheerio.md -#

ECHO. && ECHO [96m - clear - [0m
CALL curl https://raw.githubusercontent.com/bahamas10/node-clear/master/README.md -o clear.md -#

ECHO. && ECHO [96m - cli-table3 - [0m
CALL curl https://raw.githubusercontent.com/cli-table/cli-table3/master/README.md -o cli-table3.md -#

ECHO. && ECHO [96m - enquirer - [0m
CALL curl https://raw.githubusercontent.com/enquirer/enquirer/master/README.md -o enquirer.md -#

REM :: ECHO. && ECHO [96mDotenv: [0m
REM :: CALL curl https://raw.githubusercontent.com/motdotla/dotenv/master/README.md -o dotenv.md -#

REM :: ECHO. && ECHO [96mInquirer.js: [0m
REM :: CALL curl https://raw.githubusercontent.com/SBoudrias/Inquirer.js/master/README.md -o inquirer.md -#

ECHO. && ECHO [96m - listr - [0m
CALL curl https://raw.githubusercontent.com/SamVerschueren/listr/master/readme.md -o listr.md -#

ECHO. && ECHO [96m - log-symbols - [0m
CALL curl https://raw.githubusercontent.com/sindresorhus/log-symbols/master/readme.md -o log-symbols.md -#

REM :: ECHO. && ECHO [96m - multispinner - [0m
REM :: CALL curl https://raw.githubusercontent.com/codekirei/node-multispinner/master/readme.md -o multispinner.md -#

REM :: ECHO. && ECHO [96mSignale: [0m
REM :: CALL curl https://raw.githubusercontent.com/klaussinani/signale/master/readme.md -o signale.md -#

REM :: ECHO. && ECHO [96mWrite-Json-File: [0m
REM :: CALL curl https://raw.githubusercontent.com/sindresorhus/write-json-file/master/readme.md -o write-json-file.md -#

ECHO. && ECHO [96m - strapi - [0m
CALL curl https://raw.githubusercontent.com/strapi/strapi/master/README.md -o strapi.md -#

ECHO. && ECHO [92mDownloading Documentation for Project Development Dependencies... [0m

REM :: Move into docs\dev-dependencies directory
CALL cd ..\dev-dependencies

ECHO. && ECHO [96m - eslint - [0m
CALL curl https://raw.githubusercontent.com/eslint/eslint/master/README.md -o eslint.md -#

ECHO. && ECHO [96m - eslint-config-prettier - [0m
CALL curl https://raw.githubusercontent.com/prettier/eslint-config-prettier/master/README.md -o eslint-config-prettier.md -#

REM :: ECHO. && ECHO [96m - eslint-plugin-filenames - [0m
REM :: CALL curl https://raw.githubusercontent.com/selaux/eslint-plugin-filenames/master/README.md -o eslint-plugin-filenames.md -#

ECHO. && ECHO [96m - eslint-plugin-jest - [0m
CALL curl https://raw.githubusercontent.com/jest-community/eslint-plugin-jest/master/README.md -o eslint-plugin-jest.md -#

ECHO. && ECHO [96m - eslint-plugin-node - [0m
CALL curl https://raw.githubusercontent.com/mysticatea/eslint-plugin-node/master/README.md -o eslint-plugin-node.md -#

ECHO. && ECHO [96m - eslint-plugin-prettier - [0m
CALL curl https://raw.githubusercontent.com/prettier/eslint-plugin-prettier/master/README.md -o eslint-plugin-prettier.md -#

ECHO. && ECHO [96m - jest - [0m
CALL curl https://raw.githubusercontent.com/facebook/jest/master/README.md -o jest.md -#

ECHO. && ECHO [96m - prettier - [0m
CALL curl https://raw.githubusercontent.com/prettier/prettier/master/README.md -o prettier.md -#

ECHO. && ECHO [92mDone! [0m

GOTO :EOF
