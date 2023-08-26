import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0].card.card.info;

  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("🚀 ~ categories:", categories);

  return (
    <div className="container mx-auto">
      <h1 className="text-lg font-semibold text-teal-900">{name}</h1>

      <p className="text-gray-600">
        {cuisines && cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="grid divide-y divide-neutral-200 max-w-3xl mx-auto mt-8">
        {categories.map((categories) => (
          <RestaurantCategory categories={categories} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
