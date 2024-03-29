# WUG

---

## Links & Resources

* [`has`](https://github.com/kdabir/has)
* [`hasbin`](https://github.com/springernature/hasbin)
* [`command-exists`](https://github.com/mathisonian/command-exists)
* [`node-which`](https://github.com/npm/node-which)

### Dependencies

* [`cli-table3`](https://github.com/cli-table/cli-table3)
* [`execa`](https://github.com/sindresorhus/execa)
* [`node-cross-spawn`](https://github.com/moxystudio/node-cross-spawn)
* [`platform.js`](https://github.com/bestiejs/platform.js)
* [`systeminformation`](https://github.com/sebhildebrandt/systeminformation)
* [`term-size`](https://github.com/sindresorhus/term-size)

### Development Dependencies

* [`babel`](https://github.com/babel/babel)
* [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)
* [`cross-env`](https://github.com/kentcdodds/cross-env)
* [`webpack`](https://github.com/webpack/webpack)
* [`webpack-cli`](https://github.com/webpack/webpack-cli)
* [`webpack-merge`](https://github.com/survivejs/webpack-merge)

---

```json
    "scripts": {
        "start": "node index.js",
        "build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.js",
        "watch": "cross-env NODE_ENV=development webpack --config build/webpack.dev.js",
        "test": "echo \"Error: no test specified\" && exit 0",
        "docs": "cd scripts && gen-docs.cmd"
    },
    "devDependencies": {
        "@babel/cli": "^7.6.4",
        "@babel/core": "^7.6.4",
        "@babel/preset-env": "^7.6.3"
    }
```

---
