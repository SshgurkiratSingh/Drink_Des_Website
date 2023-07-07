import { PurchaseHistory } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";

interface HistoryPageProps {
  data?: PurchaseHistory;
}
const HistoryPageById: React.FC<HistoryPageProps> = ({ data }) => {
  //   console.log(data);

  if (data == null) {
    return <div>You Havent Purchased It</div>;
  }
  const formattedDate = formatDistanceToNow(data.purchaseDate, {
    addSuffix: true,
  });
  return <div>{formattedDate}</div>;
};

export default HistoryPageById;
