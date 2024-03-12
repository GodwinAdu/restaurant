"use server"

import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { createUser, fetchUserByClerk } from "../actions/user.actions";




export const initialProfile = async () => {

    const user = await currentUser();

    if (!user) {
        return redirectToSignIn()
    }

   
    const userId = user.id
    const userData = {
        clerkId: user?.id,
        fullName: `${user?.firstName} ${user?.lastName}`,
        imageUrl: user?.imageUrl,
        email: user?.emailAddresses[0].emailAddress,

    }

   
    const profile = await fetchUserByClerk(userId);

    if (profile) {
        return profile
    }

    const newProfile = await createUser(userData)

    return newProfile;
};