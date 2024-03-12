"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"


const SidebarMenu = ({menuLinks}) => {
    const pathname = usePathname();
  return (
    <div className="flex flex-col gap-12">
        {menuLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1" : "text-grey-1"
              }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
  )
}

export default SidebarMenu
