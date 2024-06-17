# Food APP

## Overview of Food Project App.

A basic React food app is built from scratch using parcel as a bundler.
It's from scratch to create a react and learning about react in detail how the react works under hood.
We use swiggy api to learn.

## Features

- Food app has a good UI.
- top rated Restaturant list shown and menu items.
- config driven ui, data changed accordingly api.
- Dynamic website data comes from api.
- add to cart food item.
- search functionality.

## Setup React Project From Scratch

**Basic Of React**

- index.html file created.
- use react cdn to use react
- Extract script tag into App.js file and clean up html file

**Project Intialization**

- Project setup using npm.
- setup node project 
`npm init`
- install parcel using 
`npm install -D parcel`
- run parcel project using 
`npx parcel index.html`
- added browser list to package.json 
- install react and react-dom
`npm install react`
`npm install react-dom`

**Laying Foundation**

- configure package.json to start our app `npm start`
- use jsx to create react element
- use React Component
- use Functional Component.

**Plannig of UI**

- Header with logo & nav list.
- Body with RestaurantContainer, Restaurant Card, search functionality.
- footer with links
- Restaurant card with map function.

**Let's Get Hooked**

- Clean code & folder structure created
- src folder & components & utils all files.
- useState hook is used to change in UI.
- onClick method used on top rated restaurant Button

**External World**

- swiggy live api use to fetch data.
- download extension of cros to bypass security.
- use useEffect to load a fetchData function for fetching data.
- update the list with update data with complex api.
- shimmer ui load using conditional rendering.
- ternary operator
- Login and logout button added
- search functionality added and onChange event and value binding with value and created another useState.
- copy of filtered Restaurant and get data into it.

**Finding The Path**

- install react-router-dom for spa `npm install react-router-dom`.
- import createBrowserRouter and RouterProvider other functions from react-router-dom.
- Created nested router using children.
- Outlet function used.
- other component created contact and about.
- ErrorPage created using useError Method.
- RestaurantMenu page created and fetch dynamic data menu items.
- useParams, Link component and fetch data

**Let's Get Classy**

- About and userClass class based component.
- class lifeCycle component created.
- props passing state.

**Optimizing App**

- Custom Hook created to fetch data.
- useRestaurantMenu & useRestaurantCard, UseOnlineStatus.
- Online & Offline internet feature added.
- LazyLoading and supesene.

## What i learn?

**Basic of React**

- Created html file and hello world program written using html
- Created Hello world Program using Javscript.
- Create hello world program using react cdn link.
- React.createElement uses to create React element
- Render react element using ReactDOM.
- Nested React Element Created.
- React element is normal javascript object.
- Library vs Framework.
- Emmet and cross origin.

**Project Intilization**

- setup project using npm command.
- Install parcel as a dev dependency.
- Learn about parcel.
- Learn about bundler, HMR, tree shaking, transitive dependency, minify code, compression.
- Browser list which browser support our app.
- diff between package.json vs package.lock.json
- node_modules
- npm is used to install dependeceis.
- npx is ignit those dependencies.
- diff between devDependency vs dependency.
- react and reactDOM.
- Learn about virtualDOM.

**Laying Foundation**

- configure package.json file to start project and build project using npm command.
- Learn about jsx.
- Learn about babel, babel is transpiler and compiler.
- Browser understands only es6 + or ecmmascripts.
- jsx => (transpiled by babel) => React.createElement => ReactElement => JsOBJECT => htML RENDER
- Jsx is html look like syntax.
- jsx
```js 
const container = (
    <div id="container">
        <h1 className="heading">using jsx</h1>
        <h2>Using jsx multine {name}</h2>
    </div>
)
```
- React.createElement
```js 
const parent = React.createElement("div", { id: "title" }, [
  React.createElement("div", { id: "childone" }, [
    React.createElement("h1", {}, "HeadingOne"),
    React.createElement("h2", {}, "HeadingTwo"),
  ]),
  React.createElement("div", { id: "childtwo" }, [
    React.createElement("h1", {}, "HeadingOne"),
    React.createElement("h2", {}, "HeadingTwo"),
  ]),
]);
```
- React functional component
- React functional component using composition of component.
```js 
//component composition in functional component
const number = 1000
//javascipt with jsx
const MainComponent = () => {
  return (
    <div id="container">
        {number}
      <HeadingComponent />
      <TitleComponent />
    </div>
  );
};
```

**Planning UI**

- config driven UI
- Array.map method to render all the cards with Dynamic data
- props and props passing as argument and destructuring
- working with dummy data
- Read about key- key is important dom identifed the which unique id new component render
- Virtual dom & Reconciliation and React fiber.
- Map to render restaurant card.
```js 
 <div className="res-container">
          {resList.map((res)=>(
            <RestaurantCard key={res?.info?.id} resData={res} />
          ))}
        </div>
```

**Let's Get Hooked**

- import & export.
- named export and default export.
- folder structure, components & constants.
- hooks - is javascript pre written functions
- useState hook
```js
  const [first, second] = useState() //intial value
   //use State hook call
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
```
- whenever use state variable update it re-render the components using diffing alogorithm, reconciliation

- onClick function in Top rated button, function takes callback function.
```js 
 <button
          className="top-res"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredRestaurant)
            setListOfRestaurants(filteredRestaurant)
          }}
        >
          Top Rated Restaurant
        </button>
```

**External World**

- Monolith and Microservices
- Communication Channels & Ports & Domain Mapping
- Load and Render & Render First Fetch Later
- useEffect hook
```js
  useEffect(()=>{
    //Callback function calls after whole the component got render
  },[])

    // to fetch the data from api

    const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(listOfRestaurants);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
```
- fetch() function to fetch the data from api and alternate of fetch is axios.
- then & catch method, async & await.
- CORS & CORS policy.
- update the fetch data.
- Shimmer UI and loader to see animate the data is load.
- ternary operator .
- detailed about useState. 
- Learn about login and logout button text changed using useState.
- search functionality with includes and toLowerCase Method..
- learn about onChange and get text from input box.
- includes method & binding value with text box.
- Copy for filtered restaurants data.
- OnChange Example.
```js
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
```

**Finding The Path**

- Detailed about useState and useEffect
- Dependency array in useEffect.
- Single Page Application.
- Client Side Routing & Server Side Routing.
- react router dom install learn about dom in detail.
- createbrowser router and router provide in detail.
- Nested router learn in detail and learning about outlet component.
- learn about other component, useRouteError to display unmatched route error.
- learn more about Error Element in router.
- Learn more about router useParams , Link Component.
- Dynamic restaurant menu page learning.

```js

const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

//app router using react-router-dom
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"",
        element:<Body />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement:<ErrorPage />,
  },
]);

//render react element or jsx using reactDOM method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);

```

**Let's Get Classy**

- Classbased components.
- ComponentDidMount, componentWillAnmout.
- LifeCylce of Classbased component.
- props, super, constructor.

**Optimizing App**

- Lazy Loading, app chunking.
- learning about Suspensen.
- Custom Hooks for more readability of code.
```js 
import { useEffect, useState } from "react"

const useRestaurantCard = () =>{
    
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(listOfRestaurants);
    }

    return {listOfRestaurants, setFilteredRestaurant, setListOfRestaurants, filteredRestaurant}
}
export default useRestaurantCard;
```

## Refrences

- Virtual DOM: https://reactjs.org/docs/faq-internals.html
- Reconciliation: https://reactjs.org/docs/reconciliation.html
- React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
- React Without ES6: https://reactjs.org/docs/react-without-es6.html
- Index Keys as Anti-Pattern:
    https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
- React Router DOM - https://reactrouter.com/en/main
- Client Side Routing - https://reactrouter.com/en/main/start/overview
- Formik - https://formik.org
- React Life Cycle Method Diagram -
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- https://reactjs.org/docs/hooks-custom.html
- https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting
