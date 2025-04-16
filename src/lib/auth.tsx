import { db } from "@/db";
import { accounts, sessions, users, verifications } from "@/db/schema/auth";
import { MagicLinkEmail } from "@/emails/magic-link";
import { render } from "@react-email/components";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { initUser } from "./auth.init";
import { sendMail } from "./mail";

export const auth = betterAuth({
  plugins: [
    nextCookies(),
    magicLink({
      expiresIn: 10 * 60,
      sendMagicLink: async ({ email, url }) => {
        const emailHTML = await render(<MagicLinkEmail name="User" magicLinkUrl={url} />);
        await sendMail({
          name: "User",
          to: email,
          subject: `Notes App - Login link`,
          html: emailHTML,
        });
      },
    }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      users: users,
      sessions: sessions,
      accounts: accounts,
      verifications: verifications,
    },
    usePlural: true,
  }),
  advanced: {
    database: {
      generateId: false,
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          initUser(user);
        },
      },
    },
  },
});

export async function getSession() {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });
  return session;
}

export async function getSessionStrict() {
  const session = await getSession();
  if (!session?.user) {
    redirect("/login");
  }
  return session;
}
