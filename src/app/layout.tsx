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
                <header className="bg-black opacity-80 absolute top-0 right-0 left-0">
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