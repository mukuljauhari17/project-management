"use client";

import { FC, ChangeEvent, ReactNode } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  icon?: ReactNode; // optional leading icon
  width?: string; // new: allow custom width like "w-32", "w-40", "w-48"
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  icon,
  width = "w-full", // default full width
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${width}`}>
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full pl-10 pr-3 py-2 text-sm border rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#424794] focus:border-[#424794] ${className}`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
