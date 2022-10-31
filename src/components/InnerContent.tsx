import { Outlet } from "react-router-dom";

const InnerContent = () => {
    return (
        <div className='inner-content'>
            Inner Content
            <Outlet/>
        </div>
    );
};

export default InnerContent;