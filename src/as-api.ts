import { instantiateStreaming } from "@assemblyscript/loader";

interface API {
  add(a: number, b: number): number;
  [index: string]: unknown;
}

const imports: any = {};

export default instantiateStreaming<API>(fetch("./as-api.wasm"), imports);
