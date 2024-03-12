"use server"
import { currentProfile } from "@/lib/helpers/current-profile"
import { delay } from "@/lib/utils";
import { redirect } from "next/navigation";

const page = async () => {

     // Adding a delay of 5 seconds
     await delay(5000);

    const user = await currentProfile();
    if (!user) redirect('/onboarding');

    if (user?.role === "user") {
        redirect(`/user/${user?._id}`);
    } else {
        redirect(`/admin/${user?._id}`);
    };

    return null
}

export default page;
