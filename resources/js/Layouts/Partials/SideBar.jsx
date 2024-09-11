import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

function SideBar() {
    const [activeItem, setActiveItem] = useState(null);

    // Toggle active state of the sidebar item
    const handleSidebarClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };
    useEffect(() => {
        const body = document.querySelector("body");
        const wrapper = document.querySelector(".page-wrapper");

        const slideUp = (target, duration = 500) => {
            if (target) {
                target.style.transitionProperty = "height, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.boxSizing = "border-box";
                target.style.height = target.offsetHeight + "px";
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = 0;
                target.style.paddingTop = 0;
                window.setTimeout(() => {
                    target.style.display = "none";
                    target.style.removeProperty("height");
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                }, duration);
            }
        };

        const slideDown = (target, duration = 500) => {
            if (target) {
                target.style.removeProperty("display");
                let display = window.getComputedStyle(target).display;
                if (display === "none") display = "flex";
                target.style.display = display;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = 0;
                target.style.paddingTop = 0;
                target.offsetHeight;
                target.style.boxSizing = "border-box";
                target.style.transitionProperty = "height, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                }, duration);
            }
        };

        const sidebarListItems = document.querySelectorAll(".sidebar-link");
        sidebarListItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.classList.toggle("active");
                const submenu = item
                    .closest(".sidebar-list")
                    .querySelector(".sidebar-submenu");
                if (submenu) {
                    submenu.style.display = item.classList.contains("active")
                        ? "block"
                        : "none";
                }
                sidebarListItems.forEach((otherList) => {
                    if (otherList !== item) {
                        otherList.classList.remove("active");
                        const otherSubmenu = otherList
                            .closest(".sidebar-list")
                            .querySelector(".sidebar-submenu");
                        if (otherSubmenu) {
                            otherSubmenu.style.display = "none";
                        }
                    }
                });
            });
        });

        const sidebarToggle = document.querySelector(".toggle-sidebar");
        if (sidebarToggle) {
            sidebarToggle.addEventListener("click", () => {
                wrapper.classList.toggle("sidebar-open");
            });
        }

        const pinTitle = document.querySelector(".pin-title");
        const pinIcon = document.querySelectorAll(
            ".sidebar-list .fa-thumbtack"
        );

        const togglePinnedName = () => {
            if (document.getElementsByClassName("pined").length) {
                if (!pinTitle.classList.contains("show"))
                    pinTitle.classList.add("show");
            } else {
                pinTitle.classList.remove("show");
            }
        };

        pinIcon.forEach((item) => {
            const linkName = item.parentNode.querySelector("h6").innerHTML;
            let InitialLocalStorage = JSON.parse(
                localStorage.getItem("pins") || "[]"
            );

            if (InitialLocalStorage.includes(linkName)) {
                item.parentNode.classList.add("pined");
            }

            item.addEventListener("click", () => {
                let localStoragePins = JSON.parse(
                    localStorage.getItem("pins") || "[]"
                );

                item.parentNode.classList.toggle("pined");

                if (item.parentNode.classList.contains("pined")) {
                    if (!localStoragePins.includes(linkName)) {
                        localStoragePins.push(linkName);
                    }
                } else {
                    localStoragePins = localStoragePins.filter(
                        (name) => name !== linkName
                    );
                }

                localStorage.setItem("pins", JSON.stringify(localStoragePins));
                togglePinnedName();
            });
        });

        const submenuTitles = document.querySelectorAll(".submenu-title");
        submenuTitles.forEach((title) => {
            title.addEventListener("click", () => {
                const parentLi = title.closest("li");
                parentLi.classList.toggle("active");
                const submenu = parentLi.querySelector(".according-submenu");
                if (submenu) {
                    submenu.style.display =
                        submenu.style.display === "block" ? "none" : "block";
                }
            });
        });

        const submenuLinks = document.querySelectorAll(".sidebar-menu li a");
        const urlLink = window.location.href.split("#")[0];
        submenuLinks.forEach((el) => {
            if (el.href === urlLink) {
                el.classList.add("active");
                const submenu = el.closest(".sidebar-submenu");
                if (submenu) {
                    submenu.style.display = "block";
                }
            }
        });

        const checkWindowSize = () => {
            const widthWindow = window.innerWidth;
            if (widthWindow <= 1199) {
                wrapper.classList.add("sidebar-open");
            } else {
                wrapper.classList.remove("sidebar-open");
            }
        };

        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);

        return () => {
            // Cleanup event listeners
            sidebarListItems.forEach((item) =>
                item.removeEventListener("click", () => {})
            );
            if (sidebarToggle)
                sidebarToggle.removeEventListener("click", () => {});
            submenuTitles.forEach((title) =>
                title.removeEventListener("click", () => {})
            );
        };
    }, []);

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
                                Settings
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
                                        "/theme/assets/svg/iconly-sprite.svg#Edit"
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
                                        "/theme/assets/svg/iconly-sprite.svg#Setting"
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
                    <li className="sidebar-list">
                        <i className="fa-solid fa-thumbtack"></i>
                        <Link
                            className="sidebar-link btn btn-outline-none w-100"
                            href={route("tasks.index")}
                        >
                            <svg className="stroke-icon">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#More-box"
                                    }
                                ></use>
                            </svg>
                            <h6>Task</h6>
                        </Link>
                    </li>
                    <li className="sidebar-list">
                        <i className="fa-solid fa-thumbtack"></i>
                        <Link
                            className="sidebar-link btn btn-outline-none w-100"
                            href={route("timecardTasks.index")}
                        >
                            <svg className="stroke-icon">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#More-box"
                                    }
                                ></use>
                            </svg>
                            <h6>Timecard Task</h6>
                        </Link>
                    </li>
                    <li
                        className={`sidebar-list ${
                            activeItem === 5 ? "active" : ""
                        }`}
                    >
                        <i className="fa-solid fa-thumbtack"></i>
                        <button
                            className="sidebar-link btn btn-outline-none w-100 "
                            onClick={() => handleSidebarClick(5)}
                        >
                            <svg className="stroke-icon stroke-none">
                                <use
                                    href={
                                        "/theme/assets/svg/iconly-sprite.svg#web"
                                    }
                                ></use>
                            </svg>
                            <h6>Item</h6>

                            <i className="iconly-Arrow-Right-2 icli"></i>
                        </button>
                        <ul
                            className="sidebar-submenu"
                            style={{
                                display: activeItem === 5 ? "block" : "none",
                            }}
                        >
                            <li>
                                <Link href={route("itemTypes.index")}>
                                    Item Type
                                </Link>
                            </li>
                            <li>
                                <Link href={route("items.index")}>
                                    Item
                                </Link>
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
