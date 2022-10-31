import React from 'react';
import {Link, useLocation} from "react-router-dom";



const TabNav = () => {

    const location = useLocation()

    return (
        <div className='tab-nav'>
            <h2>Tav navigation</h2>

                <Link to="/tabs/tabs1" className={location.pathname==='/tabs/tabs1'?'':'tab_active'}>Tab 1</Link>
                <Link to="/tabs/tabs2" className={location.pathname==='/tabs/tabs2'?'':'tab_active'}>Tab 2</Link>
                <Link to="/tabs/tabs3" className={location.pathname==='/tabs/tabs3'?'':'tab_active'}>Tab 3</Link>

        </div>
    );
};

export default TabNav;