import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ConfirmPage() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("fromSignup");

  if (cookie?.value !== "true") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Check your email 📬</h1>
      <p className="text-muted-foreground max-w-md mb-6">
        We've sent you a confirmation link. Please click it to verify your email
        and complete your registration.
      </p>

      <Link href="/login">
        <Button variant="outline">Go to Login</Button>
      </Link>
    </div>
  );
}
