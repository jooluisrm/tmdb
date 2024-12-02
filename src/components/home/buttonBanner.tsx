type Props = {
    value: any;
    onClick: (value: any) => void;
    active: boolean;
}

export const ButtonBanner = ({ value, onClick, active }: Props) => {
    return (
        <li value={value} className={`bg-gray-400 h-[10px] w-[10px] rounded-full cursor-pointer list-none hover:bg-white ${active && `bg-white`}`} onClick={(value) => onClick(value.currentTarget.getAttribute('value'))}></li>
    );
}