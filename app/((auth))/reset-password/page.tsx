"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient, confirmClient } from "@/utils/supabase/client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [password, setPassword] = useState("");
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(true);

  const code = searchParams.get("code");

  useEffect(() => {
    if (!confirmClient(code)) {
      router.push("/error");
    } else {
      setLoading(false);
    }
  }, [code, router]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (!error) {
      setUpdated(true);
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-gray-600 dark:text-gray-300 text-lg animate-pulse">
          Verifying reset link...
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Set a new password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter your new password below.
          </p>
        </div>

        {updated ? (
          <p className="text-center text-green-600 dark:text-green-400">
            ✅ Password updated! Redirecting to login...
          </p>
        ) : (
          <form className="space-y-6" onSubmit={handleUpdate}>
            <div>
              <Label htmlFor="password" className="sr-only">
                New Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Update password
            </Button>
          </form>
        )}

        <div className="flex justify-center">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
