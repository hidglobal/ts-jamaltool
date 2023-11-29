export declare const debug: (namespaces: string, template: unknown, ...restArgs: unknown[]) => void;
export declare const info: (namespaces: string, template: unknown, ...restArgs: unknown[]) => void;
export declare const warn: (namespaces: string, template: unknown, ...restArgs: unknown[]) => void;
export declare const error: (namespaces: string, template: unknown, ...restArgs: unknown[]) => void;
export declare const notify: (message: string) => void;
export declare type CustomDebug = (namespace: string, template: string, ...args: unknown[]) => void;
export declare function createCustomDebug(name: string, id: number): CustomDebug;
