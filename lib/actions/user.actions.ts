import User from "../models/user.models";
import { connectToDB } from "../mongoose";

interface CreateUserProps{
    clerkId: string | undefined;
    fullName: string | undefined;
    imageUrl: string | undefined;
    email: string | undefined;
}
export async function createUser(userData:CreateUserProps) {

    await connectToDB();
    try {
        const{clerkId,fullName,email,imageUrl} = userData
        const user = new User({
            clerkId,
            fullName,
            email,
            imageUrl
        });

        const existingUser = await User.findOne({
            clerkId,
            fullName,
            email
        });

        if(existingUser) throw new Error("User already exist");

        await user.save();
        
    } catch (error) {
        console.log("unable to create new user",error);
        throw error;
    }
    
}


export async function fetchUserByClerk(userId:string) {
    await connectToDB();
    try {

        const user = await User.findOne({ clerkId:userId});

        if (!user) return null;

        return JSON.parse(JSON.stringify(user));

    } catch (error) {
        console.log("unable to fetch user with clerkId",error);
        throw error;
    }
}