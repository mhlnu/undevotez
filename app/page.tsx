"use client";

import { useState, useEffect } from "react";
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import Image from "next/image";
import logo from "./favicon.svg";

type PollingStation = {
    id: number;
    country: string;
    city: string;
    town: string;
    station: string;
    type: string;
    address: string;
};

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [pollingStations, setPollingStations] = useState<PollingStation[]>([]);
    const [filteredStations, setFilteredStations] = useState<PollingStation[]>([]);

    // Load diaspora data on component mount
    useEffect(() => {
        fetch("/diaspora.json")
            .then(response => response.json())
            .then(data => setPollingStations(data));
    }, []); // Empty dependency array means this runs once on mount

    useEffect(() => {
        if (searchTerm) {
            const filtered = pollingStations.filter(
                station =>
                    station.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    station.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (station.town?.toLowerCase() || "").includes(
                        searchTerm.toLowerCase()
                    ) ||
                    station.address.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredStations(filtered);
        } else {
            setFilteredStations([]);
        }
    }, [searchTerm, pollingStations]);

    return (
        <div className="w-full max-w-[650px]">
            <h2 className="text-4xl text-center font-light mb-14 flex justify-center items-end gap-4">
                <Image src={logo} alt="Logo" className="h-14 w-auto pb-1" />
                <span>Secții de votare în diaspora</span>
            </h2>

            <div className="mb-6 rounded-lg border border-gray-300 w-full py-4 px-6 bg-stone-50">
                <p className="text-gray-600 text-sm">
                    <strong>Ajutor:</strong>
                    <br /> Scrie numele localității, codul poștal etc. și o listă de
                    secții de votare va fi generată instant.
                    <br />
                    În cazul în care cauți după țară, folosește numele oficial (ex:.
                    "Regatul Arabiei Saudite" în loc de "Arabia Saudită").
                </p>
            </div>
            <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                disabled={pollingStations.length === 0} // Disabled until data loads
            />
            <SearchResults stations={filteredStations} />
        </div>
    );
}
