import { fetchPublicData } from "@/api";
import { notFound } from "next/navigation";

//export const revalidate = 60; // cache for 60 seconds
export const dynamic = 'auto';

export default async function TestPage({ params }: { params: { id: string }}) {
  const data = await fetchPublicData(params.id);
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
