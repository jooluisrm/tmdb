import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

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
            <body>
                <h1>Meu primeiro projeto</h1>
                <hr />
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}

export default Layout;