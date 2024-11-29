import Main from "@/components/Main";
import { headers } from "next/headers";

export default async function Home() {
    const headersList = await headers();

    const userGeo = headersList.get("x-user-geo");
    const geoData = userGeo ? JSON.parse(userGeo) : null;

    return (
        <>
            <Main geoData={geoData} />
        </>
    );
}
