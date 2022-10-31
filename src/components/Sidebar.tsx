import React from 'react';
import {Link, useLocation} from 'react-router-dom'

const Sidebar = () => {
    return (
            <div className='sidebar'>
                Side bar
                <div className="sidebar__items">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/tabs">tabs</Link>
                    <Link to="/settings">settings</Link>
                </div>

            </div>
    );
};

export default Sidebar;