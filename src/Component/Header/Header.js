import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container bg-dark text-white rounded p-3 ">
            <h1 className="d-flex justify-content-center"><span className="color py-2 px-5 rounded shadow-lg">Plants Shop</span></h1>
            <h3 className="d-flex justify-content-center">A  living organism of the kind exemplified by trees, shrubs, herbs, grasses, ferns, and mosses, typically growing in a permanent site, absorbing water and inorganic substances through its roots.</h3>
            <h4 className="d-flex justify-content-center">Budget 5000 BDT</h4>
        </div>
    );
};

export default Header;