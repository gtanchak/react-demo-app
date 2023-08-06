import { FOOD_URL } from "../utils/constants";

import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurantList }) => {
  const navigate = useNavigate();

  return (
    <div
      className="res-card"
      onClick={() => navigate(`restaurant/${restaurantList.info.id}`)}
    >
      <div className="res-img">
        <img src={FOOD_URL + restaurantList.info.cloudinaryImageId} />
      </div>
      <h3>{restaurantList.info.name}</h3>
      <h4>{restaurantList.info.avgRatingString} Stars</h4>
      <h4>{restaurantList.info.costForTwo}</h4>
      <h4>{restaurantList.info.cuisines.join(",")}</h4>
    </div>
  );
};

export default RestaurantCard;
