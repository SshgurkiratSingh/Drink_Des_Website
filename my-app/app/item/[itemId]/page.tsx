import getItemById from "@/app/actions/getIembyId";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
  itemId: string;
}
const ItemPage = async ({ params }: { params: IParams }) => {
  const itemDetail = await getItemById(params);
  if (!params)
    return (
      <EmptyState
        showReset
        title="There is no item such that"
        subtitle="You can still go home if you want "
      />
    );
  return (
    <ClientOnly>
      <div>{itemDetail?.title}</div>
    </ClientOnly>
  );
};
export default ItemPage;
