import { router } from "./trpc";
import { publicProcedure } from "./trpc";
import z from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string().min(4).max(50),
  description: z.string().max(200).min(4),
});

const userInputType = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    console.log("Money");
    const { input } = opts;
    const title = input.title;
    const description = input.description;

    //DB logic

    return {
      id: "1",
    };
  }),
  signUpProcedure: publicProcedure
    .input(userInputType)
    .mutation(async (opts) => {
      const { input } = opts;
      const { name, email, password } = input;
    }),
});
// Export type router type signature,
// NOT the router itself

const server = createHTTPServer({ router: appRouter });
server.listen(3000);

export type AppRouter = typeof appRouter;
