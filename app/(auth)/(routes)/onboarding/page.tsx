"use client"
import { useEffect, useState } from 'react';
import { currentProfile } from '@/lib/helpers/current-profile';
import { initialProfile } from '@/lib/helpers/initial-profile';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const Page = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await currentProfile();
        if (!profile) {
          await initialProfile();
        }
        setLoading(false);
        router.push('/barrier');
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return loading ? (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">preparing your account ...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  ) : null;
};

export default Page;
