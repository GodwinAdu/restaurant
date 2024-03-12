import Leftbar from "@/components/user/commons/Leftbar";
import Topnav from "@/components/user/commons/Topnav";
import { Metadata } from "next";




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
                <Leftbar />
                <Topnav />
                <div className="flex-1">{children}</div>
            </div>
        </main>

    );
}
