import React from 'react';
import {Outlet} from "react-router-dom";

import TabNav from "./TabNav";

const Tabs = () => {
    return (
        <div className='tabs'>
            <h2>Tabs Demo page</h2>

            {/*Tab navigation*/}
            <TabNav/>
            
            {/*Tab inner content*/}
            <Outlet/>
        </div>
    );
};

export default Tabs;