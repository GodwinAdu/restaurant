"use server"
import { currentProfile } from '@/lib/helpers/current-profile'
import { initialProfile } from '@/lib/helpers/initial-profile';
import { delay } from '@/lib/utils';
import { redirect } from 'next/navigation';

const page = async () => {
   // Adding a delay of 5 seconds
   await delay(5000);
   
  const profile = await currentProfile();

  if (!profile) {
    await initialProfile();
  }
  return redirect('/barrier');
}

export default page
