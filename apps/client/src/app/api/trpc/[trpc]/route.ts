import { appRouter } from "@repo/server/src/router";
import { createContext } from "@repo/server/src/context";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { NextApiHandler } from "next";
import { env } from "@/env";

interface Handler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (req: any, res: any): Promise<void | Response>;
}

// export API handler
const handler: Handler = async (req, res) => {
  const nextApiHandler: NextApiHandler = createNextApiHandler({
    router: appRouter,
    createContext,
    endpoint: `${env.SERVER_URL}/api/trpc`,
  });

  await nextApiHandler(req, res);
};

export { handler as GET, handler as POST };