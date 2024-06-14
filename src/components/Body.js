import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"

const Body = () => {
  return (
    <div className="container">
      <div className="search-container">
        <button>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
