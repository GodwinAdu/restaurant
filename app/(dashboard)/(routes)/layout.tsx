import { Metadata } from "next";
import Navbar from "@/components/dashboard/commons/Navbar"
import SideBar from "@/components/dashboard/commons/Sidebar";



export const metadata: Metadata = {
    title: "Borcelle - Admin Dashboard",
    description: "Admin dashboard to manage Borcelle's data",
  };
  
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main className="">
            {/* <ToasterProvider /> */}
            <div className="flex max-lg:flex-col text-grey-1">
                <SideBar />
                <Navbar />
                <div className="flex-1">{children}</div>
            </div>
        </main>

    );
}
