"use client"
import api, { movieTrending } from "@/services/axiosConfig";
import { useEffect } from "react";

export const Main = () => {
    

    useEffect(() => {
        movieTrending();
    }, []);
    return (
        <main>
            <section className="container mx-auto">
                <div>
                    Filmes em alta
                </div>
                <div>

                </div>
            </section>
        </main>
    );
}