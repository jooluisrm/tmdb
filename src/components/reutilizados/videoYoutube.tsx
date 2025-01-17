import { ResultItem } from "@/types/movieType";
import YouTube from "react-youtube";

type Props = {
    trailer: ResultItem | null;
}


const VideoYoutube = ({ trailer }: Props) => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1, // Reproduz automaticamente ao carregar
            controls: 1, // Mostra os controles do player (1: habilitado, 0: desabilitado)
            modestbranding: 1, // Remove o logo do YouTube do player
        },
    };

    return (
        <div className="border-2 border-white rounded-lg overflow-hidden max-w-full bg-gray-900 dark:bg-black">
            <YouTube videoId={trailer?.key} opts={opts} />
        </div>
    );
};

export default VideoYoutube;
