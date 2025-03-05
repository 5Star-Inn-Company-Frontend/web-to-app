"use client";

interface IColorPicker {
    background: string;
    setBackground: (color: string) => void;
}

export function ColorPicker({ background, setBackground }: IColorPicker) {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="color"
                className="w-[0.7rem] h-[0.7rem] p-0 "
                value={background}
                onChange={(e) => setBackground(e.target.value.toUpperCase())}
            />
            <span className="text-xs uppercase">{background}</span>
        </div>
    );
}
