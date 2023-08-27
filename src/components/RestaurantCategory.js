import React, { Fragment } from "react";
import { FOOD_URL } from "../constants/common";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCategory = ({ categories }) => {
  const { title, itemCards } = categories.card.card;

  const dispatch = useDispatch();

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
          {itemCards.map((item) => (
            <Fragment key={item.card.info.id}>
              {console.log(item.card)}
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
                <div className="relative">
                  <img
                    className="w-28 h-28 rounded-md object-cover"
                    src={FOOD_URL + item?.card.info?.imageId}
                  />
                  <button
                    onClick={() => dispatch(addItem(item.card.info))}
                    className="bg-teal-900 text-white px-3 py-2 rounded-md text-sm ml-2 absolute top-3/4 left-1/2 -translate-x-1/2"
                  >
                    Add
                  </button>
                </div>
              </div>
              <hr className="mt-3" />
            </Fragment>
          ))}
        </details>
      </div>
    </>
  );
};

export default RestaurantCategory;
