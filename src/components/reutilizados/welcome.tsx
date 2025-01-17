"use client"

import Image from "next/image";
import img1 from "../../../public/img/clube-da-luta.png";
import img4 from "../../../public/img/arcane2.jpg";
import img5 from "../../../public/img/braking.jpg";
import { useState } from "react";
import { ButtonBanner } from "./buttonBanner";

type Props = {
    type: "filmes" | "inicio" | "series";
}

export const Welcome = ({ type }: Props) => {

    const clickBanner = (value: string | null) => {
        switch (value) {
            case "1":
                setNavImg1(true);
                setNavImg2(false);
                setNavImg3(false);
                setImgBanner(`url(${img1.src})`);
                break;

            case "2":
                setNavImg1(false);
                setNavImg2(true);
                setNavImg3(false);
                setImgBanner(`url(${img5.src})`);
                break;
            case "3":
                setNavImg1(false);
                setNavImg2(false);
                setNavImg3(true);
                setImgBanner(`url(${img4.src})`);
                break;
        }
    }

    const [imgBanner, setImgBanner] = useState(`url(${img1.src})`);
    const [navImg1, setNavImg1] = useState(true);
    const [navImg2, setNavImg2] = useState(false);
    const [navImg3, setNavImg3] = useState(false);


    return (
        <section
            style={{
                backgroundImage: `
            linear-gradient(to right, black , transparent), 
            linear-gradient(to top, black , transparent),
            ${imgBanner}
        `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="h-[450px] transition-all"
        >
            <div className="bg-black h-full bg-opacity-0">
                <div className="h-full flex flex-col justify-center">
                    <div className="container mx-auto">
                        <div className="text-4xl font-bold">
                            {type === "inicio" && <h1>Bem-vindo(a).</h1>}
                            {type === "filmes" && <h1>Filmes</h1>}
                            {type === "series" && <h1>Séries</h1>}
                        </div>
                        <div className="text-2xl">
                            {type === "inicio" && <h2>Milhões de filmes, séries e pessoas para descobrires. Explora já.</h2>}
                            {type === "filmes" && <h2>Milhões de filmes incríveis para descobrir. Mergulha nas histórias agora.</h2>}
                            {type === "series" && <h2>Milhares de séries emocionantes para explorar. Comece a maratonar agora.</h2>}
                        </div>
                    </div>

                    <div className="w-full flex justify-center gap-3 translate-y-28 transition-all">
                        <ButtonBanner value="1" onClick={clickBanner} active={navImg1} />
                        <ButtonBanner value="2" onClick={clickBanner} active={navImg2} />
                        <ButtonBanner value="3" onClick={clickBanner} active={navImg3} />
                    </div>
                </div>
            </div>

        </section>
    );
};
