export function publicFunction(publicArg: number): number;

export const publicConst: number;

export interface PublicInterface {
  publicMember: number;
}

export module submodule {
  export function publicFunction(arg: number): number;
}
