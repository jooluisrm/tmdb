import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlayIcon } from "lucide-react";


export const MostrarTrailer = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger><div className="flex gap-2 bg-white text-black py-3 px-10 rounded-md font-bold w-full justify-center min-w-80 max-w-80"><PlayIcon className=""/> Ver trailer</div></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            <video>
                                
                            </video>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    );
}