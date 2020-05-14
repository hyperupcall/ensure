export function isOutdated(
  minimumVersion: string,
  actualVersion: string,
): boolean {
  const minimumVersionArr = minimumVersion.split(".");
  const actualVersionArr = actualVersion.split(".");

  // versionCategory includes 'major', 'minor', 'patch', if we are
  // talking about semvar
  versionCategoryEnumeration: for (let i = 0; i < minimumVersionArr.length; ++i) {
    const minimumVersionCategoryNum = parseInt(minimumVersionArr[i])
    const actualVersionCategoryNum = parseInt(actualVersionArr[i])

    // if true, for any versionCategory, then whole version is out of date
    // console.log(minimumVersion, `is ${minimumVersionCategoryNum} greater than ${actualVersionCategoryNum}?`, minimumVersionCategoryNum > actualVersionCategoryNum)
    if (minimumVersionCategoryNum > actualVersionCategoryNum) {
      return true
    } else if (minimumVersionCategoryNum === actualVersionCategoryNum) {
      continue versionCategoryEnumeration
    }
    else {
      break versionCategoryEnumeration
    }
  }

  return false;
}
