import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Afacad } from "next/font/google";
import Provider from "@/components/NextUIProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const afacad = Afacad({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.className} text-lg`}>
        <Provider>
          <main className="grid grid-cols-1 grid-rows-[100px_1fr_100px] min-h-screen bg-black text-white">
            <NavBar />
            {children}
            <Toaster position="top-center" />
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}