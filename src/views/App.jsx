import React from "react";
import './App.css'
import Menu from "../components/layout/Menu.jsx";
import Content from "../components/layout/Content.jsx";

const App = props => (
    <div className="App">
        <Menu />
        <Content />
    </div>
)

export default App;