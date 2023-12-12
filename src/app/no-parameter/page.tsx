import { fetchPublicData } from "@/api";
import { notFound } from "next/navigation";

export default async function TestPage() {
  const data = await fetchPublicData('1');
  if (!data.id) {
    notFound();
  }
  return (
    <main>
      <h1>Test Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
