export function isOutdated(
  minimumVersion: string,
  actualVersion: string,
): boolean {
  const minimumVersionArr = minimumVersion.split(".");
  const actualVersionArr = actualVersion.split(".");

  // versionCategory includes 'major', 'minor', 'patch', ex. if semvar
  versionCategoryEnumeration:
  for (let i = 0; i < minimumVersionArr.length; ++i) {
    const minimumVersionCategoryNum = parseInt(minimumVersionArr[i]);
    const actualVersionCategoryNum = parseInt(actualVersionArr[i]);

    // if this is true for any versionCategory, then whole version is out of date
    if (minimumVersionCategoryNum > actualVersionCategoryNum) {
      return true;
    } else if (minimumVersionCategoryNum === actualVersionCategoryNum) {
      continue versionCategoryEnumeration;
    } else {
      break versionCategoryEnumeration;
    }
  }

  return false;
}
