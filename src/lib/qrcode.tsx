import { QRCodeSVG } from "qrcode.react";

interface IQRcode {
    value: string;
}

export default function QRcode({ value }: IQRcode) {
    return <QRCodeSVG value={value} size={128} />;
}
