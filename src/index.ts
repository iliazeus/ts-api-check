export function publicFunction(
  publicArg: number,
  internalArg: number = 0
): number {
  return publicArg + internalArg;
}

export function internalFunction(): void {}

export const publicConst: string = "42"; // incompatible with types/index.d.ts!
export const internalConst: string = "foobar";

export * as submodule from "./submodule";
