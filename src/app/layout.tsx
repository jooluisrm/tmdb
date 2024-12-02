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
            <body className="">
                <header className="bg-black fixed top-0 right-0 left-0 z-10">
                    <HeaderMenu />
                </header>
                <div className="mt-16">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default Layout;