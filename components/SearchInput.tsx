import { Search } from "lucide-react";

type SearchInputProps = {
    disabled: boolean;
    value: string;
    onChange: (value: string) => void;
};

export default function SearchInput({ disabled, value, onChange }: SearchInputProps) {
    return (
        <div className="relative mb-12 w-full">
            <input
                type="text"
                placeholder="Caută secție de votare în diaspora"
                value={value}
                onChange={e => onChange(e.target.value)}
                disabled={disabled}
                className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-black disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
    );
}
