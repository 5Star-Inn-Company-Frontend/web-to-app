import { BsImageAlt } from "react-icons/bs";

export default function ImagePlaceholder({
    size = 40,
    color = "black",
}: {
    size?: number;
    color?: string;
}) {
    return <BsImageAlt size={size} color={color} />;
}
