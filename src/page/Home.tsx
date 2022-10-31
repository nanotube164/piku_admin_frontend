import React from 'react';
import Nav from "../admin/layout/Nav";
import Menu from "../components/Menu";
// import Products from "../admin/Products";

// import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='Home'>
            <Nav/>

            <div className="container-fluid">
                <div className="row">
                    <Menu/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                        {/*<Products/>*/}
                    </main>
                </div>
            </div>

        </div>
    );
};

export default Home;