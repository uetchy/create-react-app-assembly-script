import {instantiateStreaming} from 'assemblyscript/lib/loader';

interface API {
  add(a: number, b: number): number;
}

const imports: any = {};

export default instantiateStreaming<API>(fetch('./as-api.wasm'), imports);
