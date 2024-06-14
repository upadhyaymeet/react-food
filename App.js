{/* <div id="parent">
    <div id="child1">
        <h1>Heading</h1>
        <h2>Heading</h2>
    </div>
    <div id="child2">
        <h1>Heading1</h1>
        <h2>Heading2</h2>
    </div>
</div> */}


// const heading = React.createElement("h1", {}, "Hello world From React");
const parent = React.createElement("div", {id:"title"},[
    React.createElement("div", {id:"childone"}, [
        React.createElement("h1", {}, "HeadingOne"),
        React.createElement("h2", {}, "HeadingTwo")
    ]),
    React.createElement("div", {id:"childtwo"}, [
        React.createElement("h1", {}, "HeadingOne"),
        React.createElement("h2", {}, "HeadingTwo")
    ])
])

//render react element or jsx using reactDOM method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);