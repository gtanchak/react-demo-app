import restList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restList);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCard restaurantList={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
