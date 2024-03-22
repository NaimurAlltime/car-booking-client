import PublicLayout from "@/components/layout/PublicLayout";
import Car from "@/components/sections/Home/Car";
import Footer from "@/components/sections/Layout/Footer";
import Header from "@/components/sections/Layout/Header";
import { Button } from "antd";

export default function Home() {
  return (
    <main>
      <Header />
      <Car />
      <Footer />
    </main>
  );
}
