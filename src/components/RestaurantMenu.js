import React, { useEffect } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = awaitfetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.210826&lng=72.8580097&restaurantId=74471&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  return (
    <div className="menu">
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>

      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
