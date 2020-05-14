import { isOutdated } from "./src/compare.ts";

const warn = (type: string, current: string, expected: string) =>
  `Your ${type} version is ${current}, but at least version ${expected} is required. Please update to a later version of Deno. Thankies!`;

interface ensureOptions {
  denoVersion?: string;
  v8Version?: string;
  typescriptVersion?: string;
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


  let atLeastOneOutdated = false;
  const ensureCategories = [
    ["Deno", currentDeno, expectedDeno],
    ["V8", currentV8, expectedV8],
    ["Typescript", currentTypescript, expectedTypescript],
  ];
  for (
    const [categoryName, currentVersion, expectedVersion] of ensureCategories
  ) {
    if (!categoryName || !currentVersion || !expectedVersion) return

    const isCategoryOutdated = isOutdated(currentVersion, expectedVersion);

    if (isCategoryOutdated) {
      console.info(warn(categoryName, currentVersion, expectedVersion));
    }

    atLeastOneOutdated = true;
  }

  if (atLeastOneOutdated) {
    Deno.exit(1);
  }
}
