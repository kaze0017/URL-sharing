// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
// export const { auth, handlers } = NextAuth({ providers: [GitHub] });
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});
