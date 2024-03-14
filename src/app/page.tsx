import PublicLayout from "@/components/layout/PublicLayout";
import Header from "@/components/sections/Layout/Header";
import { Button } from "antd";

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className="mt-10">Home</h1>
      <Button type="primary">Button</Button>
    </main>
  );
}
