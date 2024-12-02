type Props = {
    value: any;
    onClick: (value: any) => void;
}

export const ButtonBanner = ({ value, onClick }: Props) => {
    return (
        <li value={value} className="bg-white h-2 w-2 rounded-full cursor-pointer list-none" onClick={(value) => onClick(value.currentTarget.getAttribute('value'))}></li>
    );
}