import { useState } from "react";

interface DropdownProps {
    options: string[];
    selected: string;
    onSelect: (options: string) => void;
    label: string;
}

const Dropdown = ({ options, selected, onSelect, label }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between gap-x-2 w-full rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
                    onClick={toggleDropdown}
                >
                    {selected || label}
                    <img src="/chevron-solid.svg" alt="" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 z-[1000] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
