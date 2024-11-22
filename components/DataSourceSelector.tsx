import { Globe, MapPin } from "lucide-react";

type DataSourceSelectorProps = {
    selectedSource: "diaspora" | "local" | null;
    onSelect: (source: "diaspora" | "local") => void;
};

export default function DataSourceSelector({
    selectedSource,
    onSelect,
}: DataSourceSelectorProps) {
    return (
        <div className="grid grid-cols-2 gap-4 mb-12 w-full">
            <button
                onClick={() => onSelect("diaspora")}
                className={`flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md transition-colors ${
                    selectedSource === "diaspora"
                        ? "ring-[1px] ring-zinc-500 bg-gray-50"
                        : "hover:bg-gray-50"
                }`}
            >
                <Globe
                    strokeWidth={1}
                    className={`w-12 h-12 mb-2 ${
                        selectedSource === "diaspora" ? "text-zinc-600" : "text-zinc-500"
                    }`}
                />
                <span
                    className={`text-lg font-semibold ${
                        selectedSource === "diaspora" ? "text-zinc-600" : "text-gray-800"
                    }`}
                >
                    Diaspora
                </span>
            </button>
            <button
                onClick={() => onSelect("local")}
                className={`flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md transition-colors ${
                    selectedSource === "local"
                        ? "ring-[1px] ring-zinc-500 bg-zinc-50"
                        : "hover:bg-zinc-50"
                }`}
            >
                <MapPin
                    strokeWidth={1}
                    className={`w-12 h-12 mb-2 ${
                        selectedSource === "local" ? "text-zinc-600" : "text-zinc-500"
                    }`}
                />
                <span
                    className={`text-lg font-light ${
                        selectedSource === "local" ? "text-zinc-600" : "text-zinc-800"
                    }`}
                >
                    Romania
                </span>
            </button>
        </div>
    );
}
