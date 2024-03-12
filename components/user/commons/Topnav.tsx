"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { menuLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";

const Topnav = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const pathname = usePathname();

    return (
        <div className="sticky top-0 z-[999999999999] w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden">
            <Image src="/logo.png" alt="logo" width={150} height={70} />

            <div className="flex gap-8 max-md:hidden">
                {menuLinks.map((link) => (
                    <Link
                        href={link.url}
                        key={link.label}
                        className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1" : "text-grey-1"}`}
                    >
                        <p>{link.label}</p>
                    </Link>
                ))}
            </div>

            <div className="relative flex gap-4 items-center">
               {dropdownMenu ? (<X
                    className="cursor-pointer md:hidden"
                    onClick={() => setDropdownMenu(!dropdownMenu)}
                />):(
                    <Menu
                    className="cursor-pointer md:hidden"
                    onClick={() => setDropdownMenu(!dropdownMenu)}
                />
                )}
                {dropdownMenu && (
                    <div className="absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg">
                        {menuLinks.map((link) => (
                            <Link
                                href={link.url}
                                key={link.label}
                                className="flex gap-4 text-body-medium"
                            >
                                {link.icon} <p>{link.label}</p>
                            </Link>
                        ))}
                    </div>
                )}
                <SignedIn>
                    <UserButton afterSignOutUrl="/"  />
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

export default Topnav;
