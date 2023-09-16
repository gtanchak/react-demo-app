import React, { Fragment } from "react";
import { FOOD_URL } from "../constants/common";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();

  return (
    <>
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
                onClick={() => dispatch(addItem(item))}
                className="bg-teal-900 text-white px-3 py-2 rounded-md text-sm ml-2 absolute top-3/4 left-1/2 -translate-x-1/2"
              >
                Add
              </button>
            </div>
          </div>
          <hr className="mt-3" />
        </Fragment>
      ))}
    </>
  );
};

export default ItemList;
