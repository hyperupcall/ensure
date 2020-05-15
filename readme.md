# ensure

Ensure you are running a minimum version of Deno, Typescript, or V8

## Usage

Note that it hasn't been tested with `rc-1` type release versions _yet_

```ts
import { ensure } from 'https://raw.githubusercontent.com/eankeen/ensure/master/mod.ts'

ensure({
  denoVersion: "1.0.0",
  typeScriptVersion: "3.8"
})
```
