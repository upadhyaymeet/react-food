import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {

  // console.log(resData)
  const { name, avgRating, areaName, cloudinaryImageId, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  // console.log(name, avgRating, areaName, cloudinaryImageId, cuisines, costForTwo);
  // console.log(deliveryTime);
  
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          src={
            {CDN_URL} +
            cloudinaryImageId
          }
        />
      </div>
      <div className="res-info">
        <div>{name}</div>
        <div>{cuisines.join(",")}</div>
        <div>
          <span>{costForTwo}</span>
          <span>{deliveryTime}</span>
        </div>
        <p>{avgRating}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
