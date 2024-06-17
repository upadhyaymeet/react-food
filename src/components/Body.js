import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";
import useRestaurantCard from "../utils/useRestaurantCard";

const Body = () => {
  //use State hook call
  const {
    listOfRestaurants,
    setFilteredRestaurant,
    setListOfRestaurants,
    filteredRestaurant,
  } = useRestaurantCard();
  const [searchText, setSearchText] = useState("");
  // console.log(listOfRestaurants);

  return listOfRestaurants.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="p-5">
      <div className="flex justify-center items-center mb-5 gap-10">
        <button
          className="px-6 py-2 font-bold text-xl text-orange-500 border-solid border-2 border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(filteredRestaurant)
            setListOfRestaurants(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="flex gap-5">
          <input
          className="border-solid border-2 pr-10 py-2 border-orange-500 text-orange-500"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="What You are looking for?"
          />
          <button
          className="bg-orange-500 px-5 text-white rounded-lg text-lg"
            onClick={() => {
              // console.log(searchText);
              const filterRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {filteredRestaurant.map((res) => (
          <Link key={res?.info?.id} to={`/restaurant/${res?.info?.id}`}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
