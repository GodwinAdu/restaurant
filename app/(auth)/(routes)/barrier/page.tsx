"use client"
import { useEffect, useState } from 'react';
import { currentProfile } from '@/lib/helpers/current-profile';
import {  useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const Page = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await currentProfile();
        if (!user) {
          router.push('/onboarding');
        } else if (user?.role === 'user') {
          router.push(`/user/${user._id}`);
        } else {
          router.push(`/admin/${user._id}`);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); 

  return loading ? (
    <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2 px-4">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="font-semibold text-xl">Welcome back to [Restaurant Name]! 🍽️</h3>
                <p className='text-center'>Delighted to see you again! Get ready to enjoy our delicious dishes and friendly service. Sit tight and let the feast begin! 🎉.</p>
                <p>Youre almost done.</p>
            </div>
        </div>
  ) : null;
};

export default Page;
