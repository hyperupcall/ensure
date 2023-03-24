# ensure

![github ci](https://github.com/hyperupcall/ensure/workflows/Test%20CI/badge.svg?branch=master)
![github badge](https://img.shields.io/github/license/hyperupcall/ensure)
![github issues](https://img.shields.io/github/issues/hyperupcall/ensure)

Ensure you are running a minimum version of Deno, Typescript, or V8

> ⚠️ _Warning_ The examples in this README pull from `main`. you may want to "pin"
> to a particular version by using git tags in the URL to direct you at a particular
> version. For example, to use version 1.1.0 of `hyperupcall/ensure`, you would want
> to import `https://deno.land/x/ensure@v1.1.0/mod.ts`.

## Usage

Note that it hasn't been tested with `rc-1` type release versions _yet_

```ts
import { ensure } from 'https://deno.land/x/ensure/mod.ts'

ensure({
  denoVersion: "1.0.0",
  typeScriptVersion: "3.8"
})
```

### Versions

You can pin to a specific version. Here are some examples:

```sh
# deno 1.0.3 and std v0.53.0
https://deno.land/x/ensure/v1.0.3/mod.ts
```
