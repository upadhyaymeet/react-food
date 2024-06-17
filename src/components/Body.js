import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";
import useRestaurantCard from "../utils/useRestaurantCard";

const Body = () => {
  //use State hook call
  const {listOfRestaurants, setFilteredRestaurant, setListOfRestaurants, filteredRestaurant} = useRestaurantCard()
  const [searchText, setSearchText] = useState("");
// console.log(listOfRestaurants);

  return listOfRestaurants.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <div className="search-container">
        <button
          className="top-res"
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
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="What You are looking for?"
          />
          <button
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
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <Link key={res?.info?.id} to={`/restaurant/${res?.info?.id}`}>
            <RestaurantCard  resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
