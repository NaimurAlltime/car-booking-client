import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "antd";

export default function Home() {
  return (
    <PublicLayout>
      <h1 className="mt-10">Home</h1>
      <Button type="primary">Button</Button>
    </PublicLayout>
  );
}
