import { createClient } from "@/utils/supabase/server";
// fix or smth 
export default async function HomePage() {
return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end p-4">
        <a href="/login">
          <button className="border rounded px-4 py-2">Log In</button>
        </a>
      </header>

      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome to the Auth Setup</h1>
          <p className="text-muted-foreground text-lg">
            This is a public page. Log in above to enter your workspace.
          </p>
        </div>
      </main>
    </div>
  );
}