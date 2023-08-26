import { useNavigate } from "react-router-dom";
import { FOOD_URL } from "../constants/common";

const RestaurantCard = ({ restaurantList }) => {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      onClick={() => navigate(`restaurant/${restaurantList.info.id}`)}
    >
      <div className="w-full">
        <img
          className="w-full h-24 object-cover"
          src={FOOD_URL + restaurantList.info.cloudinaryImageId}
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{restaurantList.info.name}</div>
        <p class="text-gray-700 text-base">
          {restaurantList.info.costForTwo} /{" "}
          {restaurantList.info.avgRatingString} Stars
        </p>
      </div>
      <div class="px-6 pt-2 pb-2">
        {restaurantList.info.cuisines.map((item) => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
