import { auth } from "@clerk/nextjs";
import { fetchUserByClerk } from "../actions/user.actions";


export const currentProfile = async () => {
    const { userId } = auth();

    console.log(userId);

    if (!userId) return null;

    const profile = await fetchUserByClerk(userId);

    return JSON.parse(JSON.stringify(profile));
}