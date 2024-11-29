import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

interface GeoProps {
    country?: string;
    city?: string;
    region?: string;
    latitude?: string;
    longitude?: string;
}

export async function middleware(request: NextRequest & { geo?: GeoProps }) {
    const geo = request.geo;
    return await updateSession(request, geo);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
