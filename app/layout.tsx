import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import ScrollToTop from "@/components/ScrollToTop";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "SQL Master",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="text-white">
          {/*header*/}
          <Header />
          <main> {children}</main>
          {/* footer*/}
          <Footer />
          <ScrollToTop />
          <Toast />
        </div>
      </body>
    </html>
  );
}
