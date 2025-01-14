"use client"

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LiNav } from "./liNav";
import { ThemeToggle } from "../reutilizados/ThemeToggle";

export const HeaderMenu = () => {

    const [activeSection, setActiveSection] = useState<string>("inicio");

    const clickLink = (value: string | null) => {
        if (value) {
            setActiveSection(value);
        }
    };

    return (
        <div className="container mx-auto flex justify-between items-center h-16 text-gray-400">
            <Link href="/">
                <li
                    value="inicio"
                    className="list-none text-2xl font-bold text-gray-400 cursor-pointer transition-all hover:text-white group"
                    onClick={(value) => clickLink(value.currentTarget.getAttribute('value'))}
                >
                    TMDB
                    <span className="text-red-900 transition-all group-hover:text-red-600">FLIX</span>
                </li>
            </Link>

            <div>
                <nav className="flex gap-8">
                    <LiNav href="/" navState={activeSection} onClick={clickLink} title="Início" value="inicio"/>
                    <LiNav href="/filmes" navState={activeSection} onClick={clickLink} title="Filmes" value="filmes"/>
                    <LiNav href="/series" navState={activeSection} onClick={clickLink} title="Séries" value="series"/>
                </nav>
            </div>
            
            <div>
                <Link href="/search" passHref legacyBehavior>
                    <Search className={`transition-all cursor-pointer ${activeSection === 'search' && `text-white`} hover:text-white`} values="search" onClick={(value) => clickLink(value.currentTarget.getAttribute('values'))} />
                </Link>
            </div>
        </div>
    );
}