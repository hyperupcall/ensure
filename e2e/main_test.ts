import { assertEquals, path } from "../deps.ts";

let _dirname = path.dirname(new URL(import.meta.url).pathname);
if (Deno.build.os == "windows") _dirname = _dirname.slice(1)

Deno.test({
  name: 'exit code of 0 when running shouldPass',
  fn: async (): Promise<void> => {
    const scriptName = path.join(_dirname, 'shouldPass.ts')
    const proc = Deno.run({
      stdout: "piped",
      stderr: "inherit",
      stdin: "inherit",
      cmd: ["deno", "run", scriptName],
    });

    await proc.output()
    const status = await proc.status()
    proc.close()

    assertEquals(status.code, 0)
  }
})


Deno.test({
  name: 'exit code of 1 when running shouldFail.ts',
  fn: async (): Promise<void> => {
    const scriptName = path.join(_dirname, 'shouldFail.ts')
    const proc = Deno.run({
      stdout: "piped",
      stderr: "inherit",
      stdin: "inherit",
      cmd: ["deno", "run", scriptName],
    });

    await proc.output()
    const status = await proc.status()
    proc.close()

    assertEquals(status.code, 1)
  }
})
