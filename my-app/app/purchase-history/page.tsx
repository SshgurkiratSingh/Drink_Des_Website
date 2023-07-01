import Image from "next/image";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/container";
import EmptyState from "../components/EmptyState";

export default async function Home() {
  return (
    <div className="text-rose-500 text-2xl">
      <ClientOnly>
        <Container>
          <EmptyState
            title="Nothing Found😔"
            subtitle="Try Purchasing Something"
          />
        </Container>
      </ClientOnly>
    </div>
  );
}
