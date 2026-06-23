import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Devarturo - ZenSpace",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${quicksand.variable} antialiased`}
        >
            <body className="flex min-h-dvh font-sans bg-slate-50 text-slate-900 items-center justify-center p-4 md:p-8">{children}</body>
        </html>
    );
}
