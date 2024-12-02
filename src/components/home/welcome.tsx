"use client"

import Image from "next/image";
import img1 from "../../../public/img/clube-da-luta.png";
import img4 from "../../../public/img/arcane2.jpg";
import img5 from "../../../public/img/braking.jpg";
import { useState } from "react";
import { ButtonBanner } from "./buttonBanner";

export const Welcome = () => {

    const clickBanner = (value: string | null) => {
        switch (value) {
            case "1":
                setImgBanner(`url(${img1.src})`);
                break;

            case "2":
                setImgBanner(`url(${img5.src})`);
                break;
            case "3":
                setImgBanner(`url(${img4.src})`);
                break;
        }
    }

    const [imgBanner, setImgBanner] = useState(`url(${img1.src})`);


    return (
        <section
            style={{
                backgroundImage: imgBanner,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="h-96 transition-all"
        >
            <div className="bg-black h-full opacity-80">
                <div className="h-full flex flex-col justify-center">
                    <div className="container mx-auto">
                        <h1 className="text-4xl font-bold">Bem-vindo(a).</h1>
                        <h2 className="text-2xl">
                            Milhões de filmes, séries e pessoas para descobrires. Explora já.
                        </h2>
                    </div>

                    <div className="w-full flex justify-center gap-3 translate-y-24 transition-all">
                        <ButtonBanner value="1" onClick={clickBanner}/>
                        <ButtonBanner value="2" onClick={clickBanner}/>
                        <ButtonBanner value="3" onClick={clickBanner}/>
                    </div>
                </div>
            </div>

        </section>
    );
};
