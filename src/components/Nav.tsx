import React from "react";

const Nav =() => {
    return (
        // 放 html
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
            <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search"
                   aria-label="Search"/>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
