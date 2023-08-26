import React from "react";
import { FOOD_URL } from "../constants/common";

const RestaurantCategory = ({ categories }) => {
  console.log("🚀 ~ category:", categories);
  const { title, itemCards } = categories.card.card;
  console.log("🚀 ~ itemCards:", itemCards);

  return (
    <>
      <div class="p-5 shadow-md">
        <details class="group">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none mb-2">
            <h2 className="font-semibold">
              {title} ({itemCards.length}){" "}
            </h2>
            <span class="transition group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          {itemCards.map((item) => (
            <>
              <div className="py-2 my-4 flex justify-between gap-5">
                <div>
                  <h3 className="text-gray-700">{item?.card.info?.name}</h3>
                  <span>
                    ₹
                    {item?.card.info?.price / 100 ||
                      item?.card.info?.defaultPrice / 100}
                  </span>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.card.info.description}
                  </p>
                </div>
                <img
                  className="w-28 h-28 rounded-md object-cover"
                  src={FOOD_URL + item?.card.info?.imageId}
                />
              </div>
              <hr className="mt-3" />
            </>
          ))}
        </details>
      </div>
    </>
  );
};

export default RestaurantCategory;
