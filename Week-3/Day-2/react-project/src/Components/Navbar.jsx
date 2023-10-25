import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Search from '../Pages/Search.jsx';

const Navbar = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearchClick = () => {
        const searchDataItem = Search.searchData.find((item) => item.keyword === searchKeyword.toLowerCase());

        if (searchDataItem) {
            navigate(searchDataItem.route);
        } else {
            // Display an alert popup when no matching result is found
            alert('No matching result found');
        }
    };

    return (
        <>
           <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                            <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                Explore.in/Gokarna
                            </Link>
                            <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    >
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                    Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                    Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                    About
                                    </Link>
                                </li>
                                </ul>
                                <form className="d-flex">
                                    <input
                                        className="form-control  me-2 "
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={searchKeyword}
                                        onChange={(e) => setSearchKeyword(e.target.value)}
                                    />
                                    <button
                                        className="btn btn-outline-success"
                                        type="button"
                                        onClick={handleSearchClick}
                                    >
                                        Search
                                    </button>
                                </form>
                        <Link className="btn btn-primary m-1" to="/login">
                            Login
                        </Link>
                        <Link className="btn btn-primary m-1" to="/signup">
                            Signup
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
