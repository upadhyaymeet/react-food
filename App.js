import React from "react";
import ReactDOM from "react-dom/client";

//using pure react
// --> React.createElement => Object => HTMLElement(render)
// const heading = React.createElement("h1", {}, "Hello world From React");

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
console.log(parent);

const name = "john";
//using jsx
//Jsx => (transpiled by Babel) => React.createElement => React Element => Js object => HtMl Element(render)
const heading = <h1>Using jsx</h1>;
const container = (
  <div id="container">
    <h1 className="heading">using jsx</h1>
    <h2>Using jsx multine {name}</h2>
  </div>
);
console.log(heading);

// components
// 1.functional
// 2.Classbased components

const HeadingComponent = () => {
  return <h1>Heading component</h1>;
};
// console.log(HeadingComponent());
// console.log(HeadingComponent);

const TitleComponent = () => {
    return <h1>Hey I am title</h1>
}
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

//render react element or jsx using reactDOM method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
