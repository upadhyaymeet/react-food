import React from "react";
import ReactDOM from "react-dom/client";

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

//render react element or jsx using reactDOM method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
