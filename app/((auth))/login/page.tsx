"use client";

import Link from "next/link";
import { login } from "./actions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

async function signInWithGoogle() {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    console.error("Google sign-in failed:", error.message);
  }
}

export default function LoginPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return (
    <div className={cn("flex min-h-screen items-center justify-center px-4")}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Login to your Auth Setup account</CardDescription>
        </CardHeader>

        <CardContent>
          {message === "reset-success" && (
            <p className="text-green-600 mb-2">Password updated!</p>
          )}

          <form className="space-y-4" action={login}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <Button type="submit" className="w-full cursor-pointer">
              Log in
            </Button>
          </form>

          <div className="my-4 text-center text-sm text-muted-foreground">
            OR
          </div>

          <Button
            onClick={signInWithGoogle}
            className="w-full cursor-pointer"
            variant="outline"
          >
            Continue with Google
          </Button>

          <div className="py-4 text-center text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <Link
              href="/reset-request"
              className="underline underline-offset-4 hover:text-primary"
            >
              Forgot your password?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
