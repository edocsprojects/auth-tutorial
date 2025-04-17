'use client'

import { login, signup } from './actions'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  return (
    <div className={cn('flex min-h-screen items-center justify-center px-4')}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Login to your Acme Inc account</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" action={login}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>

          <div className="py-4 text-center text-sm text-muted-foreground">
            Don’t have an account?{' '}
            <form action={signup} className="inline">
              <button type="submit" className="underline underline-offset-4 hover:text-primary">
                Sign up
              </button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
