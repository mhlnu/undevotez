import Main from "@/components/Main";
import { headers } from "next/headers";

export default async function Home() {
    const headersList = await headers();

    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip");
    const country = headersList.get("cf-ipcountry");

    console.log(ip, country);

    return (
        <>
            <Main />
            {ip && country && (
                <p>
                    {ip}, {country}
                </p>
            )}
        </>
    );
}
