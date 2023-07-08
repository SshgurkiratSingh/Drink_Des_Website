import getCurrentUser from "../actions/getCurrentUser";
import getFavById from "../actions/getFavByUserid";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import Heading from "../components/Heading";
import ItemCardByFav from "../components/ListingCardForFav";

const FavPage = async () => {
  const currentUser = await getCurrentUser();
  const fav = await getFavById("b");
  if (fav.length === 0) {
    return (
      <ClientOnly>
        <EmptyState title="No favorite yet" subtitle="Try adding some" />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <div>
        <div className="mt-4 flex flex-col items-center align-middle justify-center content-center center">
          <Heading
            center
            title="Favourite Page"
            subtitle="Find Your Favourite all in one place"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">
            {fav.map((item) => (
              <ItemCardByFav
                key={item.id}
                data={item}
                currentUser={currentUser}
              />
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};
export default FavPage;
