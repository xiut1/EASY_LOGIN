import { signIn, useSession, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
}
