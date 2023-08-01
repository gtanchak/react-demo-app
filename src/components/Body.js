import restList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.210826&lng=72.8580097&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleFilter = () => {
    const filteredList = restaurantList.filter(
      (item) => item.info.avgRating > 4
    );
    setRestaurantList(filteredList);
  };

  return (
    <div className="body">
      <div className="filter-container">
        <button onClick={handleFilter}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCard key={res.info.id} restaurantList={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
