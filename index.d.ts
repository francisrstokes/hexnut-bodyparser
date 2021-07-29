// Type definitions for Hexnut Bodyparser
// Project: https://github.com/francisrstokes/hexnut-bodyparser/
// Definitions by:
//  - Francis Stokes <https://github.com/francisrstokes/

export declare type MiddlewareFn<Ctx> = (ctx: Ctx, next: ()=>void) => void;
export declare type MessageCheckFn = (message: any) => boolean;

export declare type JsonOpts = { strictParsing?: boolean };

declare function json<Ctx>(opts?: JsonOpts): MiddlewareFn<Ctx>;

export default { json };
