import Link from "next/link";
import { ThemeProvider } from "../theme-provider";

type Props = {
    href: string;
    value: string;
    onClick: (value: string | null) => void;
    navState: any;
    title: string;
}

export const LiNav = ({ href, value, onClick, navState, title }: Props) => {
    return (
        <div
            className={`transition-all border-b-2 ${navState === value
                    ? "border-white text-white"
                    : "border-transparent text-gray-400"
                } hover:text-white`}
        >
            <Link href={`${href}`} passHref legacyBehavior>
                <li value={`${value}`} className={`list-none text-xl cursor-pointer`} onClick={(value) => onClick(value.currentTarget.getAttribute('value'))}>{title}</li>
            </Link>
        </div>
    );
}