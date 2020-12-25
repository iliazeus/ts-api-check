type IsCompatible<S, T extends S> = [S, T];

type _Api = typeof import("../types/index");
interface Api extends _Api {}

type _Impl = typeof import("./index");
interface Impl extends _Impl {}

declare const index: IsCompatible<Api, Impl>;
