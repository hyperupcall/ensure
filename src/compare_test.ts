// import { assertEquals } from "./vendor/https/deno.land/std/testing/asserts.ts"
import { assertEquals } from "https://deno.land/std@v0.50.0/testing/asserts.ts";
import { isOutdated } from "./compare.ts";

Deno.test({
  name: "compare major versions",
  fn: (): void => {
    const minimumVersion = "2.0.0";
    const actualVersion = "1.0.0";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, true);
  },
});

Deno.test({
  name: "compare major versions",
  fn: (): void => {
    const minimumVersion = "0.0.0";
    const actualVersion = "0.0.0";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare minor versions",
  fn: (): void => {
    const minimumVersion = "1.4.0";
    const actualVersion = "1.0.0";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, true);
  },
});

Deno.test({
  name: "compare patch versions",
  fn: (): void => {
    const minimumVersion = "0.0.3";
    const actualVersion = "0.0.1";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, true);
  },
});

Deno.test({
  name: "compare versions general",
  fn: (): void => {
    const minimumVersion = "1.5.3";
    const actualVersion = "2.9.1";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare non sevmar",
  fn: (): void => {
    const minimumVersion = "0.5.0.0";
    const actualVersion = "0.5.0.2";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare ascending",
  fn: (): void => {
    const minimumVersion = "1.2.3.4";
    const actualVersion = "1.0.0.0";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, true);
  },
});

Deno.test({
  name: "compare ascending 2",
  fn: (): void => {
    const minimumVersion = "1.0.0.0";
    const actualVersion = "1.2.3.4";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare descending",
  fn: (): void => {
    const minimumVersion = "4.3.2.1";
    const actualVersion = "1.0.0.0";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, true);
  },
});

Deno.test({
  name: "compare descending",
  fn: (): void => {
    const minimumVersion = "1.0.0.0";
    const actualVersion = "4.3.2.1";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare v8",
  fn: (): void => {
    const minimumVersion = "8.4.300";
    const actualVersion = "8.4.376";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare different lengths",
  fn: (): void => {
    const minimumVersion = "8.4";
    const actualVersion = "4.7.0";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, true);
  },
});

Deno.test({
  name: "compare different lengths",
  fn: (): void => {
    const minimumVersion = "8.4";
    const actualVersion = "14.7.0";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare different lengths reverse",
  fn: (): void => {
    const minimumVersion = "3.7.0";
    const actualVersion = "9.2";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, false);
  },
});

Deno.test({
  name: "compare different lengths reverse",
  fn: (): void => {
    const minimumVersion = "11.7.0";
    const actualVersion = "9.2";
    const isOutOfDate = isOutdated(minimumVersion, actualVersion);

    assertEquals(isOutOfDate, true);
  },
});
