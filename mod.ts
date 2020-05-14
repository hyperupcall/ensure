import { isOutdated } from "./src/compare.ts";

interface ensureOptions {
  denoVersion: string;
  v8Version: string;
  typescriptVersion: string;
}

export function ensure(
  ensureOptions: ensureOptions,
) {
  const { deno: currentDeno, v8: currentV8, typescript: currentTypescript } =
    Deno.version;

  const {
    denoVersion: expectedDeno,
    v8Version: expectedV8,
    typescriptVersion: expectedTypescript,
  } = ensureOptions;

  const isDenoOutdated = isOutdated(currentDeno, expectedDeno);
  const isV8Outdated = isOutdated(currentV8, expectedV8);
  const isTypescriptOutdated = isOutdated(
    currentTypescript,
    expectedTypescript,
  );

  const msg = (type: string, current: string, expected: string) =>
    `Your ${type} version is ${current}, but at least version ${expected} is required. Please update to a later version of Deno. Thankies!`

  if (isDenoOutdated) {
    console.info(msg('Deno', currentDeno, expectedDeno));
  }
  if (isV8Outdated) {
    console.info(msg('V8', currentV8, expectedV8))
  }
  if (isTypescriptOutdated) {
    console.info(msg('Typescript', currentTypescript, expectedTypescript))
  }

  if (isDenoOutdated || isV8Outdated || isTypescriptOutdated) {
    Deno.exit(1)
  }
}
