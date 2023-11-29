export declare const syncResolve: (what: string, importer: string, stack: string[]) => string;
declare const asyncResolve: (what: string, importer: string, stack: string[]) => Promise<string>;
export default asyncResolve;
