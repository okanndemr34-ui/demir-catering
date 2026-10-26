import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import "@/styles/fonts.css";
import "@/styles/base.css";
import "@/styles/header-hero.css";
import "@/styles/services-approach.css";
import "@/styles/menus.css";
import "@/styles/contact-footer.css";
export const viewport: Viewport = { themeColor: "#791f2b" };
export const metadata: Metadata = {
  title: "Demir Catering — Her sofrada aynı özen.",
  description: site.description,
  applicationName: site.name,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body id="top">
        <a href="#main-content" className="skip-link">
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
