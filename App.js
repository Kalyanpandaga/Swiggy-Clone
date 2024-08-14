const heading = React.createElement(
    "div", 
    {id:"parent"},
    [
        React.createElement(
            "div", 
            {id:"child2"}, 
            [
                React.createElement("h1", {}, "i am h1 tag"),
                React.createElement("h2", {}, "i am h2 tag")
            ]
        ),
        React.createElement(
                "div", 
                {id:"child1"}, 
                [
                    React.createElement("h1", {}, "i am h1 tag"),
                    React.createElement("h2", {}, "i am h2 tag")
                ]
        )
    ] 
    
)

const container = ReactDOM.createRoot(document.getElementById("container"));

container.render(heading);

