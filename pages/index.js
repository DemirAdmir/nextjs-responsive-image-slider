import Image from "next/image";
import { Inter } from "next/font/google";
import Herosection from "./herosection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Herosection />
      <Footer />
    </div>
  );
}
