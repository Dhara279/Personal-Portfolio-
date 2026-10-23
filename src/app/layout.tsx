import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhara Patadia — AI Product Ownership & Operations",
  description:
    "AI product lead in Cambridge, UK, turning complex AI ideas into products people can use: MLense launch, AI operations at Amazon, MSc Big Data Science (Distinction).",
  metadataBase: new URL("https://dharapatadia.com"),
  openGraph: {
    title: "Dhara Patadia — AI Product Ownership & Operations",
    description:
      "AI product lead in Cambridge, UK, turning complex AI ideas into products people can use: MLense launch, AI operations at Amazon, MSc Big Data Science (Distinction).",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhara Patadia — AI Product Ownership & Operations",
    description:
      "AI product lead in Cambridge, UK, turning complex AI ideas into products people can use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${bricolage.variable} ${dmSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                  document.documentElement.classList.add('js-motion');
                  setTimeout(function() {
                    document.documentElement.classList.remove('js-motion');
                  }, 2500);
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dhara Patadia",
              jobTitle: "AI Product Ownership & Operations",
              description:
                "AI product lead in Cambridge, UK, turning complex AI ideas into products people can use: MLense launch, AI operations at Amazon, MSc Big Data Science (Distinction).",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cambridge",
                addressCountry: "UK",
              },
              email: "patadiadhara79@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/dhara-patadia-617947188",
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Queen Mary University of London",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Atmiya University",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased selection:bg-[#B8766A]/25">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--terracotta-strong)] focus:text-white focus:rounded-md focus:shadow-md"
        >
          Skip to content
        </a>
        <div id="page-root" className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
