"use client"

import { bannerFilme } from "@/services/axiosConfig";
import { useEffect, useState } from "react";

type Props = {
    idItem: number;
}

export const BannerInicial = ({idItem}: Props) => {

    const [linkBanner, setLinkBanner] = useState("");

    useEffect(() => {
        const carregarBanner = async () => {
            const banner = await bannerFilme(idItem);
            console.log(banner);
            if(banner) {
                setLinkBanner(banner);
            }
            
        }
        carregarBanner();
    }, [idItem])

    return (
        <div style={{
            backgroundImage: `
        linear-gradient(to right, black 0%, transparent 50%), 
        linear-gradient(to top,  black 0%, transparent 50%),
        url(https://image.tmdb.org/t/p/original${linkBanner})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className="h-screen w-full">
            
        </div>
    );
}