import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"

const AppLayout = () => {
  return(
    <div>
        <Header />
        <Body />  
    </div>
  )
}

//render react element or jsx using reactDOM method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
