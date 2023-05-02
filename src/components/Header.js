import React, { useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab] = useState("Items");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/") {
            setActiveTab("Items");
        }   else if (location.pathname === "/add") {
            setActiveTab("AddItem");
        }   else if (location.pathname === "/about") {
            setActiveTab("About");
        }
    }, [location]);
    return (
        <div className="header">
            <p className="logo">Shopping List</p>
            <div className="header-right">
                <Link to="/">
                    <p
                    className={`${activeTab === "Items"}? "active" : ""`}
                    onClick={() => setActiveTab("Items")}
                    >
                        Items
                    </p>
                </Link>
                <Link to="/add">
                    <p
                    className={`${activeTab === "AddItem"}? "active" : ""`}
                    onClick={() => setActiveTab("AddItem")}
                    >
                        Add Items
                    </p>
                </Link>
                <Link to="/about">
                    <p
                    className={`${activeTab === "About"}? "active" : ""`}
                    onClick={() => setActiveTab("About")}
                    >
                        About
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Header;