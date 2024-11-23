import { MapPin } from "lucide-react";

type PollingStation = {
    id: number;
    country: string;
    city: string;
    town?: string;
    station: string;
    type: string;
    address: string;
};

type GroupedStations = {
    [country: string]: {
        [city: string]: {
            [town: string]: PollingStation[];
        };
    };
};

type SearchResultsProps = {
    stations: PollingStation[];
};

export default function SearchResults({ stations }: SearchResultsProps) {
    const groupedStations: GroupedStations = stations.reduce((acc, station) => {
        if (!acc[station.country]) {
            acc[station.country] = {};
        }
        if (!acc[station.country][station.city]) {
            acc[station.country][station.city] = {};
        }

        // Use 'default' as key if no town exists
        const townKey = station.town || "default";
        if (!acc[station.country][station.city][townKey]) {
            acc[station.country][station.city][townKey] = [];
        }

        acc[station.country][station.city][townKey].push(station);
        return acc;
    }, {} as GroupedStations);

    return (
        <div className="w-full">
            {Object.entries(groupedStations).map(([country, cities]) => (
                <div key={country} className="mb-8">
                    <h2 className="text-3xl font-light pb-3 mb-8 border-b-[1px] border-gray-300">
                        {country}
                    </h2>

                    {Object.entries(cities).map(([city, towns]) => (
                        <div key={city} className="mb-4">
                            <h3 className="text-xl font-semibold mb-6">{city}</h3>
                            {Object.entries(towns).map(([town, stations]) => (
                                <div key={`${city}-${town}`} className="mb-6">
                                    {town !== "default" && (
                                        <h4 className="text-lg font-medium text-black mb-2 dark:text-gray-300">
                                            {town}
                                        </h4>
                                    )}
                                    {stations.map(station => (
                                        <div key={station.id} className="pl-2 mb-4">
                                            <div className="flex items-start text-sm">
                                                <MapPin className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                                <div>
                                                    <div>
                                                        <span className="font-semibold mr-2">
                                                            {town === "default" &&
                                                            stations.length === 1
                                                                ? "Secție unică"
                                                                : town === "default" &&
                                                                    stations.length > 1
                                                                  ? ""
                                                                  : town}
                                                            {station.station ? (
                                                                <>
                                                                    {" "}
                                                                    Secția{" "}
                                                                    {station.station}
                                                                </>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </span>
                                                        <span className="text-sky-600">
                                                            (
                                                            <a
                                                                href={`https://maps.google.com/maps?output=search&q=${station.address}`}
                                                            >
                                                                Google Maps
                                                            </a>
                                                            )
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        {station.address}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
