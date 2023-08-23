import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const { resInfo } = useRestaurantMenu(id);

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>

      <p>
        {cuisines && cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <ul className="menu-list">
        {itemCards?.map((item) => (
          <li>
            {item.card.info.name} -{" "}
            <strong>
              Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
