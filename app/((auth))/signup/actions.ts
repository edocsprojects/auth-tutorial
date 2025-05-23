"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
// import { cookies } from "next/headers";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  // const cookieStore = await cookies();
  // cookieStore.set("fromSignup", "true", {
  //   maxAge: 60,
  //   httpOnly: true,
  // });

  redirect("/confirm");
}
