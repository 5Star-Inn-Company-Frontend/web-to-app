import React, { useState, useEffect, useRef } from 'react';

type SelectDropdownProps = {
    options: { label: string; value: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
    placeholder: string;
};


const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, selectedValue, placeholder, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle dropdown open/close
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Handle option selection
    const handleOptionSelect = (value: string) => {
        onChange(value);        
        setIsOpen(false);      
    };

    return (
        <div className="relative w-64">

            {/* Select Box */}
            <div
                ref={dropdownRef}
                className="bg-white border border-primary20 rounded-md px-3 min-w-[162px] h-[3.125rem] cursor-pointer flex justify-between items-center"
                onClick={toggleDropdown}
            >

                <span>{selectedValue ? selectedValue : placeholder}</span>
                <div>
                    <img src="/chevron-down.svg" alt="" />
                </div>
            </div>

            {/* Options List */}
            {isOpen && (
                <ul className="absolute right-0 mt-2 bg-white border border-primary100 rounded-md shadow-md min-w-[126px] py-6 overflow-y-auto z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectDropdown;
