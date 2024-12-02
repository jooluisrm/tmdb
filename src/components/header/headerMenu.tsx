"use client"

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const HeaderMenu = () => {

    const clickLink = (value: string | null) => {
        switch (value) {
            case "filmes":
                setNavInicio(false);
                setNavFilmes(true);
                setNavSeries(false);
                break;

            case "series":
                setNavInicio(false);
                setNavFilmes(false);
                setNavSeries(true);
                break;

            case "inicio":
                setNavInicio(true);
                setNavFilmes(false);
                setNavSeries(false);
                break;
        }
    }

    const [navInicio, setNavInicio] = useState(true);
    const [navFilmes, setNavFilmes] = useState(false);
    const [navSeries, setNavSeries] = useState(false);

    return (
        <div className="container mx-auto flex justify-between items-center h-16 text-gray-400">
            <div className="text-2xl font-bold text-white">TMDBFLIX</div>
            <div>
                <nav className="flex gap-8">
                    <div className={`transition-all border-b-2 border-transparent ${navInicio && `border-white text-white`} hover:text-white`}>
                        <Link href="/" passHref legacyBehavior>
                            <li value="inicio" className={`list-none text-xl cursor-pointer`} onClick={(value) => clickLink(value.currentTarget.getAttribute('value'))}>Início</li>
                        </Link>
                    </div>
                    <div className={`transition-all border-b-2 border-transparent ${navFilmes && `border-white text-white`} hover:text-white`}>
                        <Link href="/filmes" passHref legacyBehavior>
                            <li value="filmes" className={`list-none text-xl cursor-pointer`} onClick={(value) => clickLink(value.currentTarget.getAttribute('value'))}>Filmes</li>
                        </Link>
                    </div>
                    <div className={`transition-all border-b-2 border-transparent ${navSeries && `border-white text-white`} hover:text-white`}>
                        <Link href="/series" passHref legacyBehavior>
                            <li value="series" className={`list-none text-xl cursor-pointer`} onClick={(value) => clickLink(value.currentTarget.getAttribute('value'))}>Series</li>
                        </Link>
                    </div>

                </nav>
            </div>
            <div><Search /></div>
        </div>
    );
}