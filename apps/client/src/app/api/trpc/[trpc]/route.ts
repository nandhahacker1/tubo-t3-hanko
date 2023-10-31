import { appRouter, createContext } from "@repo/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { NextApiHandler } from "next";

interface Handler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (req: any, res: any): Promise<void | Response>;
}

// export API handler
const handler: Handler = async (req, res) => {
  const nextApiHandler: NextApiHandler = createNextApiHandler({
    router: appRouter,
    createContext,
  });

  await nextApiHandler(req, res);
};

export { handler as GET, handler as POST };