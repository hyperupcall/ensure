import * as path from "./vendor/https/deno.land/std/fs/path.ts";
import { isOutOfDateVersion } from "./src/compare.ts";

console.log(path.join(Deno.cwd(), "example"));

interface pleaseUpgradeDenoOptions {
  denoVersion: string;
  v8Version: string;
  typescriptVersion: string;
}

export function pleaseUpgradeDeno(
  pleaseUpgradeDenoOptions: pleaseUpgradeDenoOptions,
) {
  const { deno, v8, typescript } = Deno.version;
}
