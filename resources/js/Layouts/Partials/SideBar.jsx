import React, { useState } from "react";
import { Link } from "@inertiajs/react";

function SideBar() {
    const [activeItem, setActiveItem] = useState(null);

    // Toggle active state of the sidebar item
    const handleSidebarClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };

    return (
        <aside className="page-sidebar">
            <div className="left-arrow" id="left-arrow">
                <i data-feather="arrow-left"></i>
            </div>
            <div className="main-sidebar" id="main-sidebar">
                <ul className="sidebar-menu" id="simple-bar">
                    <li className="pin-title sidebar-main-title">
                        <div>
                            <h5 className="sidebar-title f-w-700">Pinned</h5>
                        </div>
                    </li>
                    <li className="sidebar-main-title">
                        <div>
                            <h5 className="lan-1 f-w-700 sidebar-title">
                                General
                            </h5>
                        </div>
                    </li>

                    {/* Sidebar Item 1 */}
                    <li
                        className={`sidebar-list ${
                            activeItem === 0 ? "active" : ""
                        }`}
                    >
                        <i className="fa-solid fa-thumbtack"></i>
                        <button
                            className="sidebar-link btn btn-outline-none w-100"
                            onClick={() => handleSidebarClick(0)}
                        >
                            <svg className="stroke-icon">
                                <use href={'theme/assets/svg/iconly-sprite.svg#Home-dashboard'}></use>
                            </svg>
                            <h6>Dashboards</h6>
                            <span className="badge">3</span>
                            <i className="iconly-Arrow-Right-2 icli"></i>
                        </button>
                        <ul
                            className="sidebar-submenu"
                            style={{
                                display: activeItem === 0 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link to="index.html">Default</Link>
                            </li>
                            <li>
                                <Link to="dashboard-02.html">Ecommerce</Link>
                            </li>
                            <li>
                                <Link to="dashboard-03.html">Education</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-main-title">
                        <div>
                            <h5 className="lan-1 f-w-700 sidebar-title">
                                User Management
                            </h5>
                        </div>
                    </li>
                    {/* Sidebar Item 2 */}
                    <li
                        className={`sidebar-list ${
                            activeItem === 1 ? "active" : ""
                        }`}
                    >
                        <i className="fa-solid fa-thumbtack"></i>
                        <button
                            className="sidebar-link btn btn-outline-none w-100 "
                            onClick={() => handleSidebarClick(1)}
                        >
                            <svg className="stroke-icon stroke-none">
                                <use href={'theme/assets/svg/iconly-sprite.svg#Profile'}></use>
                            </svg>
                            <h6>Users</h6>
                            <span className="badge">3</span>
                            <i className="iconly-Arrow-Right-2 icli"></i>
                        </button>
                        <ul
                            className="sidebar-submenu"
                            style={{
                                display: activeItem === 1 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link href={route("user.users")}>User</Link>
                            </li>
                            <li>
                                <Link to="dashboard-02.html">New User</Link>
                            </li>
                            <li>
                                <Link to="dashboard-03.html">Assign Users</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="right-arrow" id="right-arrow">
                <i data-feather="arrow-right"></i>
            </div>
        </aside>
    );
}

export default SideBar;
