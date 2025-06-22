import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

function extractNameFromEmail(email: string): string {
  if (!email || typeof email !== "string") return "";

  // Extract part before '@'
  const username: string = email.split("@")[0];

  // Remove non-letter characters and replace with space
  const cleaned: string = username.replace(/[^a-zA-Z]/g, " ");

  // Capitalize each word
  const name: string = cleaned
    .split(" ")
    .filter(Boolean)
    .map(
      (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

  return name.trim();
}


export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {extractNameFromEmail(user.email ? user.email : "")}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
