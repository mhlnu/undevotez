import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = "http://www.undevotez.ro";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "UndeVotez.ro",
    description: "Aici găsești secțiile de votare în diaspora.",
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        type: "website",
        title: "UndeVotez.ro",
        description: "Aici găsești secțiile de votare în diaspora.",
        url: defaultUrl,
        siteName: "UndeVotez.ro",
        images: [
            {
                url: new URL("/undevotez-fb-share.jpg", defaultUrl).toString(),
                width: 1200,
                height: 630,
                alt: "UndeVotez.ro - Secții de votare în diaspora",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UndeVotez.ro",
        description: "Aici găsești secțiile de votare în diaspora.",
        images: [new URL("/undevotez-twitter-share.jpg", defaultUrl).toString()],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className} suppressHydrationWarning>
            <body className="bg-background text-foreground">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="min-h-screen flex flex-col items-center">
                        <div className="flex-1 w-full flex flex-col gap-20 items-center">
                            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                                    <div className="flex gap-5 items-center font-semibold">
                                        <Link href={"/"}>UndeVotez.ro</Link>
                                    </div>
                                </div>
                            </nav>
                            {children}

                            <footer className="w-full mt-auto flex items-center justify-center border-t mx-auto text-center text-sm gap-4 py-16">
                                <p>🇬🇧 Made in England</p>
                                <ThemeSwitcher />
                            </footer>
                        </div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
