import "../styles/site.css";
import "../styles/mobile.css";
import { site } from "../lib/site";
export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/assets/personel-sunum.png",
        width: 1536,
        height: 1024,
        alt: "Demir Catering üç gözlü kapta personel yemeği örnek sunumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/assets/personel-sunum.png"],
  },
  icons: { icon: "/assets/logo.jpg", apple: "/assets/logo.jpg" },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131313",
  viewportFit: "cover",
};
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
