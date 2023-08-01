import restList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchRes, setSearchRes] = useState("");

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
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleFilter = () => {
    const filteredList = restaurantList.filter(
      (item) => item.info.avgRating > 4
    );
    setFilteredList(filteredList);
  };

  const handleSerarch = (e) => {
    setSearchRes(e.target.value);
  };

  const searchHandler = () => {
    const filteredList = restaurantList.filter((item) =>
      item.info.name.toLowerCase().includes(searchRes.toLowerCase())
    );
    setFilteredList(filteredList);
  };

  return (
    <div className="body">
      <div className="filter-container">
        <div>
          <input value={searchRes} onChange={handleSerarch} />
          <button onClick={searchHandler}>Search</button>
        </div>
        <button onClick={handleFilter}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredList.length ? (
          filteredList.map((res) => (
            <RestaurantCard key={res.info.id} restaurantList={res} />
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
