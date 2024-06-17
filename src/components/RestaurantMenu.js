import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
  const { resId } = useParams();
  // console.log(useParams());

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId=" + resId)
    const json = await data.json()
    // console.log(json);
    setResInfo(json.data)
}


  return(
    <div>
        <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        <h4>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h4>
        <p>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>

        <ul>
            {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(item=>(
                <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
            ))}
        </ul>
    </div>
  );
};

export default RestaurantMenu;
