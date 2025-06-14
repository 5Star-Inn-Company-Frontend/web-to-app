"use client";

import { useRef } from "react";

interface IColorPicker {
    background: string;
    setBackground: (color: string) => void;
}

export function ColorPicker({ background, setBackground }: IColorPicker) {
    const colorRef = useRef<HTMLInputElement>(null);

    return (
        <button onClick={() => colorRef?.current?.click()} className="flex items-center space-x-2">
            <input
                ref={colorRef}
                name="color"
                type="color"
                className="w-[0.8rem] h-[0.8rem] p-0 "
                value={background}
                onChange={(e) => setBackground(e.target.value.toUpperCase())}
            />
            <span className="text-xs uppercase">{background}</span>
        </button>
    );
}
