import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InnerContent from "./components/InnerContent";

import Tabs from "./components/Tabs";
import Settings from "./components/Settings";
import Tabs1 from "./components/Tabs1";
import Tabs2 from "./components/Tabs2";
import Tabs3 from "./components/Tabs3";
import Client from "./page/Client";
import ClientInnerContent from "./page/layout/ClientInnerContent";
import Error from "./page/Error";
import Home from "./page/Home";
import Products from "./admin/Products";
import ProductsCreate from "./admin/ProductsCreate";
import ProductsEdit from "./admin/ProductsEdit";
import Landing from "./page/layout/Landing";
// import Dashboard from "./components/Dashboard";


// mainroutes is used for those innercontainer
const MainRoutes = () => (
    // Managing all routes
    <Routes>
        {/*client routes list here*/}
        <Route>
            <Route path="/" element={<ClientInnerContent/>}>
                <Route path="/" element={<Navigate replace to={"client"}/>}></Route>
                <Route path="client" element={<Client/>}>
                    {/*<Route path="/client" element={<Navigate replace to={"error"}/>}>*/}
                    {/*</Route>*/}
                </Route>
                <Route path="error" element={<Error/>}/>
                <Route path="home" element={<Home/>}/>
            </Route>
        </Route>
        <Route>
            {/*<Route path="admin" element={<InnerContent/>}>*/}
            {/*    <Route path="dashboard" element={<Dashboard/>}></Route>*/}
            {/*    <Route path="products" element={<Products/>}/>*/}
            {/*    /!*<Route path="/dashboard" element={<Dashboard/>}></Route>*!/*/}
            {/*</Route>*/}
            <Route path="/admin/products" element={<Products/>}/>
            <Route path="/admin/products/create" element={<ProductsCreate/>}/>
            <Route path="/admin/products/:id/edit" element={<ProductsEdit/>}/>
        </Route>
        <Route>
            <Route path="/landing" element={<Landing/>}/>
        </Route>
        {/*admin route list here*/}
        {/*<Route>*/}
        {/*    /!*這邊就是把其他的路由包在 innercontent 內*!/*/}
        {/*    <Route path="/" element={<InnerContent/>}>*/}
        {/*        /!*這邊是把 innercontent的預設路由設為下面的*!/*/}
        {/*        <Route path="/" element={<Navigate replace to={"dashboard"}/>}></Route>*/}
        {/*        <Route path="dashboard" element={<Dashboard/>}></Route>*/}
        {/*        <Route path="tabs" element={<Tabs/>}>*/}
        {/*            <Route path="/tabs" element={<Navigate replace to={"tabs1"}/>}/>*/}
        {/*            <Route path="tabs1" element={<Tabs1/>}/>*/}
        {/*            <Route path="tabs2" element={<Tabs2/>}/>*/}
        {/*            <Route path="tabs3" element={<Tabs3/>}/>*/}
        {/*        </Route>*/}
        {/*        <Route path="settings" element={<Settings/>}></Route>*/}
        {/*    </Route>*/}
        {/*</Route>*/}

    </Routes>

);


export default MainRoutes;