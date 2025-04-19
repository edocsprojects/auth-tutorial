import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function WorkspacePage() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  if (!data?.user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to your workspace, {data.user.email}</h1>
    </div>
  )
}
