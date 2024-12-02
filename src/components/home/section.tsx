import { Item } from "./item";

type Props = {
    title: string;
    list: any;
}

export const Section = ({ title, list }: Props) => {
    return (
        <div className="mt-8">
            <div className="text-xl font-bold mb-3">
                {title}
            </div>
            <div className="">
                <Item data={list} />
            </div>
        </div>
    );
}