import VulnerabilityForm from "@/src/component/VulnerabilityForm";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Vulnerability Reporter</title>
      </Head>
      <main className="min-h-screen bg-gray-950 text-white py-10">
        <VulnerabilityForm />
      </main>
    </main>
  );
}
