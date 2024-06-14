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

const name = "john"
//using jsx
//Jsx => (transpiled by Babel) => React.createElement => React Element => Js object => HtMl Element(render)
const heading = <h1>Using jsx</h1>;
const container = (
    <div id="container">
        <h1 className="heading">using jsx</h1>
        <h2>Using jsx multine {name}</h2>
    </div>
)
console.log(heading);

//render react element or jsx using reactDOM method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
