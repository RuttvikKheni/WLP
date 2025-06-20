import React, { useEffect, useState } from 'react';
import Select from "react-select";

const ReactSelect = ({
    options,
    selectedOption,
    onChange,
    placeholder,
    noOptionsMessage
}: {
    options: { value: number; label: string }[];
    selectedOption: number | null;
    onChange: (option: number | null) => void;
    placeholder?: string;
    noOptionsMessage?: string;
}) => {
    const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);
    useEffect(() => setMenuPortalTarget(document.body), []);

    return (
        <Select
            options={options}
            value={options.find(opt => opt.value === selectedOption) || null}
            onChange={(option) => onChange(option?.value ?? null)}
            placeholder={placeholder}
            defaultValue={options.find(opt => opt.value === selectedOption) || null}
            isSearchable
            isClearable
            noOptionsMessage={() => noOptionsMessage}
            className="text-gray-900 cursor-pointer"
            menuPortalTarget={menuPortalTarget ?? undefined}
            styles={{
                control: (base, state) => ({
                    ...base,
                    cursor: "pointer",
                    borderWidth: 2,
                    borderRadius: 7,
                    fontSize: "14px",
                    borderColor: state.isFocused ? "#22c55e" : "black",
                    boxShadow: "none",
                    "&:hover": {
                        borderColor: "black",
                    },
                }),
                option: (base, state) => ({
                    ...base,
                    fontSize: "14px",
                    cursor: "pointer",
                    backgroundColor: state.isSelected ? "#22c55e" : "white",
                    color: state.isSelected ? "white" : "black",
                    "&:hover": {
                        backgroundColor: state.isSelected ? "#22c55e" : "#dcfce7",
                        color: state.isSelected ? "white" : "black",
                    },
                }),
                menuPortal: (base) => ({
                    ...base,
                    zIndex: 9999,
                }),
            }}
        />
    );
};

export default ReactSelect;
