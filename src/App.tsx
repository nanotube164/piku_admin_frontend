import React from 'react';
import './App.css';

import MainRoutes from './Routes'
import Sidebar from "./components/Sidebar";
// import Nav from "./components/Nav";
// import Menu from "./components/Menu";
// import Products from "./admin/Products";

// import {BrowserRouter, Route} from "react-router-dom";
// import Main from "./main/Main";

function App() {
    return (
        <div className="App">
            {/*Main app*/}
            {/*Sidebar*/}
            {/*<Sidebar/>*/}
            {/*InnerContainer*/}


            <MainRoutes/>
            {/*<Products/>*/}
            {/*<BrowserRouter>*/}
            {/*    <Route path="/" element={<Main/>}></Route>*/}
            {/*    <Route path="/admin/products" element={<Products/>}></Route>*/}
            {/*</BrowserRouter>*/}

        </div>
    );
}

export default App;
