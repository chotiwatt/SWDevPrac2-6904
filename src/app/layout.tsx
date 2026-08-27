import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Find a venue for your event",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
