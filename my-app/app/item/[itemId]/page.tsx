import getCurrentUser from "@/app/actions/getCurrentUser";
import getItemById from "@/app/actions/getIembyId";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import HeartButton from "@/app/components/HeartButton";

interface IParams {
  itemId: string;
}
const ItemPage = async ({ params }: { params: IParams }) => {
  if (!params)
    return (
      <EmptyState
        showReset
        title="There is no item such that"
        subtitle="You can still go home if you want "
      />
    );
  const currentUser = await getCurrentUser();
  const itemDetail = await getItemById(params);
  return (
    <ClientOnly>
      <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{itemDetail?.title}</h1>
            <div className="flex justify-center items-center  ">
              <div className=" carousel carousel-center overflow-x-hidden items-center  p-4 space-x-4 bg-neutral rounded-box">
                <div
                  className="carousel-item "
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                >
                  <img
                    src={itemDetail?.imageSrc1}
                    className="rounded-box rounded-lg"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={itemDetail?.imageSrc2}
                    className="rounded-box"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="py-6">{itemDetail?.description}</p>
            <div className="absolute bottom-0 right-50">
              <HeartButton
                listingId={itemDetail?.id}
                currentUser={currentUser}
              />
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};
export default ItemPage;
