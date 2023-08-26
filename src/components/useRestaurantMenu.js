import { useState, useEffect } from "react";
import { MENU_API_URL } from "../constants/common";

const useRestaurantMenu = (id) => {
  console.log("🚀 ~ id:", id);

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("log1");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("🚀 data:");
    const data = await fetch(MENU_API_URL + id);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
