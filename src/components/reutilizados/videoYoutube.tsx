import { ResultItem } from "@/types/movieType";
import YouTube from "react-youtube";

type Props = {
    trailer: ResultItem | null;
    type: "trailer" | "trailerEp";
}


const VideoYoutube = ({ trailer, type }: Props) => {
    const opts = {
        height: type != "trailer" ? "290" : "390",
        width: type != "trailer" ? "540" : "640",
        playerVars: {
            autoplay: 1, // Reproduz automaticamente ao carregar
            controls: 1, // Mostra os controles do player (1: habilitado, 0: desabilitado)
            modestbranding: 1, // Remove o logo do YouTube do player
        },
    };

    return (
        <div className="border-2 border-white rounded-lg overflow-hidden max-w-full">
            <YouTube videoId={trailer?.key} opts={opts} />
        </div>
    );
};

export default VideoYoutube;
