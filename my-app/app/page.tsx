import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/container";
import getItems from "./actions/getItems";
import ItemCard from "./components/ListingCard";

export default async function Home() {
  const Items = await getItems();
  return (
    <div className="text-rose-500 text-2xl">
      <ClientOnly>
        <Container>
          <div
            className="
           
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
           
          "
          >
            {Items.map((item) => {
              return <ItemCard key={item.id} data={item} />;
            })}
          </div>
        </Container>
      </ClientOnly>
    </div>
  );
}
