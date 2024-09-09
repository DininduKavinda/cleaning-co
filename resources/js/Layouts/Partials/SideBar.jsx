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
                    <li className="sidebar-list">
                        <i className="fa-solid fa-thumbtack"></i>
                        <Link
                            className="sidebar-link btn btn-outline-none w-100"
                            href={route("dashboard")}
                        >
                            <svg className="stroke-icon">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#Home-dashboard"
                                    }
                                ></use>
                            </svg>
                            <h6>Dashboards</h6>
                        </Link>
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
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#Profile"
                                    }
                                ></use>
                            </svg>
                            <h6>Users</h6>

                            <i className="iconly-Arrow-Right-2 icli"></i>
                        </button>
                        <ul
                            className="sidebar-submenu"
                            style={{
                                display: activeItem === 1 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link href={route("users.index")}>Users</Link>
                            </li>
                            <li>
                                <Link href={route("users.create")}>
                                    New User
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={`sidebar-list ${
                            activeItem === 2 ? "active" : ""
                        }`}
                    >
                        <i className="fa-solid fa-thumbtack"></i>
                        <button
                            className="sidebar-link btn btn-outline-none w-100 "
                            onClick={() => handleSidebarClick(2)}
                        >
                            <svg className="stroke-icon stroke-none">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#Profile"
                                    }
                                ></use>
                            </svg>
                            <h6>Permissions</h6>

                            <i className="iconly-Arrow-Right-2 icli"></i>
                        </button>
                        <ul
                            className="sidebar-submenu"
                            style={{
                                display: activeItem === 2 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link href={route("permissions.index")}>
                                    Permissions
                                </Link>
                            </li>
                            <li>
                                <Link href={route("permissions.create")}>
                                    New Permission
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={`sidebar-list ${
                            activeItem === 3 ? "active" : ""
                        }`}
                    >
                        <i className="fa-solid fa-thumbtack"></i>
                        <button
                            className="sidebar-link btn btn-outline-none w-100 "
                            onClick={() => handleSidebarClick(3)}
                        >
                            <svg className="stroke-icon stroke-none">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#Profile"
                                    }
                                ></use>
                            </svg>
                            <h6>Roles</h6>

                            <i className="iconly-Arrow-Right-2 icli"></i>
                        </button>
                        <ul
                            className="sidebar-submenu"
                            style={{
                                display: activeItem === 3 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link href={route("roles.index")}>Roles</Link>
                            </li>
                            <li>
                                <Link href={route("roles.create")}>
                                    New Role
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-main-title">
                        <div>
                            <h5 className="lan-1 f-w-700 sidebar-title">
                                Employee Management
                            </h5>
                        </div>
                    </li>
                    <li className="sidebar-list">
                        <i className="fa-solid fa-thumbtack"></i>
                        <Link
                            className="sidebar-link btn btn-outline-none w-100"
                            href={route("clients.index")}
                        >
                            <svg className="stroke-icon">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#More-box"
                                    }
                                ></use>
                            </svg>
                            <h6>Clients</h6>
                        </Link>
                    </li>
                    <li className="sidebar-list">
                        <Link
                            className="sidebar-link btn btn-outline-none w-100"
                            href={route("staff.index")}
                        >
                            <svg className="stroke-icon">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#Activity"
                                    }
                                ></use>
                            </svg>
                            <h6>Employee</h6>
                        </Link>
                    </li>

                    <li className="sidebar-main-title">
                        <div>
                            <h5 className="lan-1 f-w-700 sidebar-title">
                                Meta Data
                            </h5>
                        </div>
                    </li>
                    <li
                        className={`sidebar-list ${
                            activeItem === 4 ? "active" : ""
                        }`}
                    >
                        <i className="fa-solid fa-thumbtack"></i>
                        <button
                            className="sidebar-link btn btn-outline-none w-100 "
                            onClick={() => handleSidebarClick(4)}
                        >
                            <svg className="stroke-icon stroke-none">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#web"
                                    }
                                ></use>
                            </svg>
                            <h6>Location</h6>

                            <i className="iconly-Arrow-Right-2 icli"></i>
                        </button>
                        <ul
                            className="sidebar-submenu"
                            style={{
                                display: activeItem === 4 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link href={route("countries.index")}>
                                    Country
                                </Link>
                            </li>
                            <li>
                                <Link href={route("provinces.index")}>
                                    Province
                                </Link>
                            </li>
                            <li>
                                <Link href={route("districts.index")}>
                                    District
                                </Link>
                            </li>
                            <li>
                                <Link href={route("cities.index")}>City</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-list">
                        <i className="fa-solid fa-thumbtack"></i>
                        <Link
                            className="sidebar-link btn btn-outline-none w-100"
                            href={route("departments.index")}
                        >
                            <svg className="stroke-icon">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#More-box"
                                    }
                                ></use>
                            </svg>
                            <h6>Department</h6>
                        </Link>
                    </li>
                    <li className="sidebar-list">
                        <i className="fa-solid fa-thumbtack"></i>
                        <Link
                            className="sidebar-link btn btn-outline-none w-100"
                            href={route("levels.index")}
                        >
                            <svg className="stroke-icon">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#More-box"
                                    }
                                ></use>
                            </svg>
                            <h6>Level</h6>
                        </Link>
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
