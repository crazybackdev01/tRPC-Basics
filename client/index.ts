import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
//     👆 **type-only** import
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      async headers() {
        return {
          Authorization: "Bearer 123",
        };
      },
    }),
  ],
});

// Just make a client.ts file in the React root folder or in some folder like "config" then export "trpc"
// Export this above trpc variable wherever in React code file when need to call the server

const main = async () => {
  // const response = await trpc.signUpProcedure.mutate({
  //   name: "Udit Nagar",
  //   email: "udit@gmail.com",
  //   password: "xyz",
  // });
  // console.log(response.token);
  const response = await trpc.createTodo.mutate({
    title: "Go to work",
    description: "Only work",
  });

  console.log(response);
};

main();
