import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchRes, setSearchRes] = useState("");

  const onlineStatus = useOnlineStatus();

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
    if (Boolean(/^\S*$/.test(searchRes))) {
      const filteredList = restaurantList.filter((item) =>
        item.info.name.toLowerCase().includes(searchRes.toLowerCase())
      );
      setFilteredList(filteredList);
    }
  };

  if (!onlineStatus) {
    return <h1>You're ofline please check your internet connection</h1>;
  }

  return (
    <div>
      <div className="filter-container">
        <div>
          <input
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={searchRes}
            onChange={handleSerarch}
          />
          <button
            className="bg-teal-900 text-white px-3 py-2 rounded-md text-sm ml-2"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <button onClick={handleFilter}>Top Rated Restaurants</button>
      </div>
      <div className="grid grid-cols-4 gap-8">
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
