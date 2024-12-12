import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import { HeaderMenu } from "@/components/header/headerMenu";


export const metadata: Metadata = {
    title: {
        template: '%s | TMDBFLIX',
        default: "TMDBFLIX"
    }
}

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <html>
            <body className="overflow-x-hidden">
                <header className="bg-black bg-opacity-0 fixed top-0 right-0 left-0 z-50 transition-all duration-700 hover:bg-opacity-90">
                    <HeaderMenu />
                </header>
                <div className="">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default Layout;