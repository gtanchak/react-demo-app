const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "1" }, [
    React.createElement("h1", { key: "1" }, "H1 tag"),
    React.createElement("h2", { key: "2" }, "H2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "2" }, [
    React.createElement("h1", { key: "1" }, "child2 H1 tag"),
    React.createElement("h2", { key: "2" }, "child2 H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
