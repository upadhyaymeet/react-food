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

## Refrences

- Virtual DOM: https://reactjs.org/docs/faq-internals.html
- Reconciliation: https://reactjs.org/docs/reconciliation.html
- React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
- React Without ES6: https://reactjs.org/docs/react-without-es6.html
- Index Keys as Anti-Pattern:
    https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/