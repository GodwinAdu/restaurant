"use server"
import { currentProfile } from '@/lib/helpers/current-profile'
import { initialProfile } from '@/lib/helpers/initial-profile';
import { redirect } from 'next/navigation';

const page = async () => {
  const profile = await currentProfile();

  if (!profile) {
    await initialProfile();
  }
  return redirect('/barrier');
}

export default page
