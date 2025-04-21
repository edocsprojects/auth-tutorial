'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';

export default function SignOutButton() {
  const router = useRouter();
  const supabase = createClient(); // ✅ instantiating client inside component

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/login');
    } else {
      console.error('Sign out failed:', error.message);
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
