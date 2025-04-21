"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      await supabase.auth.signOut();
      router.push("/login"); 
    };

    run();
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Signing you out...</h1>
      <p className="text-gray-500">Redirecting shortly.</p>
    </div>
  );
}
