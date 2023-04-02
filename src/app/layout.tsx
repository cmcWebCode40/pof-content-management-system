import { Providers } from "@/libs/providers";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { classMerge } from "@/libs";
import { Navbar } from "@/components/organisms";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classMerge(
        "bg-white text-slate-900 antialiased",
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main>{children}</main>
        </Providers>
        {/* Allow extra heig  ht for mobile menu */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
