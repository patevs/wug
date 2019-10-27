# WUG

---

## Links & Resources

* [`has`](https://github.com/kdabir/has)

### Dependencies

* [`cli-table3`](https://github.com/cli-table/cli-table3)
* [`execa`](https://github.com/sindresorhus/execa)
* [`node-cross-spawn`](https://github.com/moxystudio/node-cross-spawn)
* [`platform.js`](https://github.com/bestiejs/platform.js)
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
```

---
