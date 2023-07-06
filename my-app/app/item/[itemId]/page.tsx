import getCurrentUser from "@/app/actions/getCurrentUser";
import getItemById from "@/app/actions/getIembyId";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import HeartButton from "@/app/components/HeartButton";
import ImageMenu from "@/app/components/ImageMenu";
import TitleForList from "@/app/components/TitleForItem";

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
      <div className="flex flex-col justify-center items-center  ">
        <TitleForList title={itemDetail?.title} listingId={itemDetail?.id} currentUser={currentUser}/>
        <div style={{ maxWidth: "400px", maxHeight: "400px" }}>
          <ImageMenu
            image1={itemDetail?.imageSrc1}
            image2={itemDetail?.imageSrc2}
          />
        </div>
      </div>
      <p className="py-6">{itemDetail?.description}</p>
    </ClientOnly>
  );
};
export default ItemPage;
