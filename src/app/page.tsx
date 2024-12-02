import { Main } from "@/components/home/main";
import { Welcome } from "@/components/home/welcome";

const Page = () => {
    return (
        <div className="bg-black h-screen text-white">
            <Welcome />
            <Main />
        </div>
    )
}

export default Page;