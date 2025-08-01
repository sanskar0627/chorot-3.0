import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return {
          uername: "Sanskar",
          id: "1",
          email: "Sanskar0627@gmail.com",
        };
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;
