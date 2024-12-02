import Image from "next/image";
import img from "../../../public/img/clube-da-luta.png";

export const Welcome = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="h-80"
        >
            <div className="bg-black h-full opacity-80 flex items-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold">Bem-vindo(a).</h1>
                    <h2 className="text-2xl">
                        Milhões de filmes, séries e pessoas para descobrires. Explora já.
                    </h2>
                </div>
            </div>
        </section>
    );
};
