import React from "react";

import ItemList from "./ItemList";

const RestaurantCategory = ({ categories }) => {
  const { title, itemCards } = categories.card.card;

  return (
    <>
      <div className="p-5 shadow-md">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none mb-2">
            <h2 className="font-semibold">
              {title} ({itemCards.length}){" "}
            </h2>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <ItemList itemCards={itemCards} />
        </details>
      </div>
    </>
  );
};

export default RestaurantCategory;
