import { prisma } from "@repo/db";
import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type AuthContextProps = {
  auth: "";
};

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
export const createContextInner = async ({ auth }: AuthContextProps) => {
  return {
    auth,
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createContext = async (opts: CreateNextContextOptions) => {
  return await createContextInner({ auth: "" }); // Remove getAuth
};

export type Context = inferAsyncReturnType<typeof createContext>;
