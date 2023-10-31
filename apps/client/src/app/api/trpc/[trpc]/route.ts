import { appRouter, createContext } from "@repo/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";

// export API handler
const handler = () => createNextApiHandler({
  router: appRouter,
  createContext,
});

export { handler as GET, handler as POST };