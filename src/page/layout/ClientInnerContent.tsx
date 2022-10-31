import React from 'react';
import {Outlet} from "react-router-dom";

const ClientInnerContent = () => {
    return (
        <div className='client-inner-content'>
            {/*Inner Content*/}
            {/*client content*/}
            {/*123*/}
            <Outlet/>
        </div>
    );
};

export default ClientInnerContent;