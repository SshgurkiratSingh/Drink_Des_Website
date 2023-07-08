"use client";
import { Item, PurchaseHistory } from "@prisma/client";
import React from "react";
import { formatDistanceToNow } from "date-fns";

interface HistoryElementProps {
  history: PurchaseHistory & Item;
  sno: number;
}
const HistoryElement: React.FC<HistoryElementProps> = ({ history, sno }) => {
  const formattedDate = formatDistanceToNow(history.purchaseDate, {
    addSuffix: true,
  });

  return (
    <tr className="hover">
      <th>{sno}</th>
      <th>
        {" "}
        <a href={`/item/${history.item.id}`}>
          <img
            src={history.item.imageSrc2}
            style={{ maxHeight: "50px", maxWidth: "50px" }}
          />{" "}
        </a>
      </th>
      <td>{history.item.title}</td>
      <td>{formattedDate}</td>
      <td>{history.item.category}</td>
      <td>₹{history.totalPrice}</td>
    </tr>
  );
};

export default HistoryElement;
