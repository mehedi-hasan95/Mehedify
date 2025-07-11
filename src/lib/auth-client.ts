import { createAuthClient } from "better-auth/react";
import {
  usernameClient,
  adminClient,
  emailOTPClient,
} from "better-auth/client/plugins";
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  plugins: [usernameClient(), adminClient(), emailOTPClient()],
});
export const { signIn, signUp, useSession, getSession } = createAuthClient();
