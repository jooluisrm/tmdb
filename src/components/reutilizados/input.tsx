import { Search } from "lucide-react";

export const Input = () => {
    return (
        <div className="w-full flex items-center relative">
            <Search className="absolute transform translate-x-5"/>
            <input
                type="search"
                placeholder="Encontre filmes, séries e muito mais"
                className="w-full py-5 px-16 text-xl bg-gray-900 rounded-md"
                autoFocus
            />
        </div>

    );
}