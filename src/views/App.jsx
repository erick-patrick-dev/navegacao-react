import React from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css'

import Menu from "../components/layout/Menu.jsx";
import Content from "../components/layout/Content.jsx";

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)

export default App;