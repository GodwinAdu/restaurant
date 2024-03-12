
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import SidebarMenu from "./SidebarMenu";

const SideBar = () => {

    return (
        <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-300 shadow-xl max-lg:hidden">
            <Image src="/logo.png" alt="logo" width={150} height={70} />
            <SidebarMenu navLinks={navLinks} />
            <div className="flex gap-4 text-body-medium items-center">
                <SignedIn>
                    <UserButton afterSignOutUrl="/"  />
                    <p>Profile</p>
                </SignedIn>
                <SignedOut>
                    <Link href="/sign-in" className={cn(buttonVariants(), "w-full")}>
                        Sign In
                    </Link>
                </SignedOut>
            </div>
        </div>
    );
};

export default SideBar;
