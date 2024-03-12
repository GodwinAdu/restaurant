
"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";


import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";


const HomeNav = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const pathname = usePathname();

    return (
        <div className="sticky top-0 z-[999999999999] w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl">
            <Image src="/logo.png" alt="logo" width={150} height={70} />

            <div className="flex gap-8 max-md:hidden">
                <ul className="flex justify-between items-center">

                    <li>
                        <Link href="/about" className="text-black hover:text-gray-300 ml-6">
                            About
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </div>

            <div className="relative flex gap-4 items-center">
                {dropdownMenu ? (<X
                    className="cursor-pointer md:hidden"
                    onClick={() => setDropdownMenu(!dropdownMenu)}
                />) : (
                    <Menu
                        className="cursor-pointer md:hidden"
                        onClick={() => setDropdownMenu(!dropdownMenu)}
                    />
                )}
                {dropdownMenu && (
                    <div className="absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg">
                        <ul className="flex justify-between items-center">

                            <li>
                                <Link href="/about" className="text-black hover:text-gray-300 ml-6">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <Link href="/sign-in" className={cn(buttonVariants())}>
                        Sign In
                    </Link>
                </SignedOut>
            </div>
        </div>
    );
};

export default HomeNav;

