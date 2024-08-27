import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Header() {
    return (
        <header className="page-header row">
            <div className="logo-wrapper d-flex align-items-center col-auto">
                <a href="index.html">
                    <img
                        className="light-logo img-fluid"
                        src="theme/assets/images/logo/logo1.png"
                        alt="logo"
                    />
                    <img
                        className="dark-logo img-fluid"
                        src="theme/assets/images/logo/logo-dark.png"
                        alt="logo"
                    />
                </a>
                <a
                    className="close-btn toggle-sidebar"
                    href="javascript:void(0)"
                >
                    <svg className="svg-color">
                        <use href="theme/assets/svg/iconly-sprite.svg#Category"></use>
                    </svg>
                </a>
            </div>
            <div className="page-main-header col">
                <div className="header-left">
                    <form
                        className="form-inline search-full col"
                        action="#"
                        method="get"
                    >
                        <div className="form-group w-100">
                            <div className="Typeahead Typeahead--twitterUsers">
                                <div className="u-posRelative">
                                    <input
                                        className="demo-input Typeahead-input form-control-plaintext w-100"
                                        type="text"
                                        placeholder="Search Admiro .."
                                        name="q"
                                        title=""
                                        autoFocus="autofocus"
                                    />
                                    <div
                                        className="spinner-border Typeahead-spinner"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                    <i
                                        className="close-search"
                                        data-feather="x"
                                    ></i>
                                </div>
                                <div className="Typeahead-menu"></div>
                            </div>
                        </div>
                    </form>
                    <div className="form-group-header d-lg-block d-none">
                        <div className="Typeahead Typeahead--twitterUsers">
                            <div className="u-posRelative d-flex align-items-center">
                                <input
                                    className="demo-input py-0 Typeahead-input form-control-plaintext w-100"
                                    type="text"
                                    placeholder="Type to Search..."
                                    name="q"
                                    title=""
                                />
                                <i className="search-bg iconly-Search icli"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-right">
                    <ul className="header-right">
                        <li className="custom-dropdown">
                            <div className="translate_wrapper">
                                <div className="current_lang">
                                    <a
                                        className="lang"
                                        href="javascript:void(0)"
                                    >
                                        <i className="flag-icon flag-icon-us"></i>
                                        <h6 className="lang-txt f-w-700">
                                            ENG
                                        </h6>
                                    </a>
                                </div>
                                <ul className="custom-menu profile-menu language-menu py-0 more_lang">
                                    <li className="d-block">
                                        <a
                                            className="lang"
                                            href="#"
                                            data-value="English"
                                        >
                                            <i className="flag-icon flag-icon-us"></i>
                                            <div className="lang-txt">
                                                English
                                            </div>
                                        </a>
                                    </li>
                                    <li className="d-block">
                                        <a
                                            className="lang"
                                            href="#"
                                            data-value="fr"
                                        >
                                            <i className="flag-icon flag-icon-fr"></i>
                                            <div className="lang-txt">
                                                Français
                                            </div>
                                        </a>
                                    </li>
                                    <li className="d-block">
                                        <a
                                            className="lang"
                                            href="#"
                                            data-value="es"
                                        >
                                            <i className="flag-icon flag-icon-es"></i>
                                            <div className="lang-txt">
                                                Español
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="search d-lg-none d-flex">
                            {" "}
                            <a href="javascript:void(0)">
                                <svg>
                                    <use href="theme/assets/svg/iconly-sprite.svg#Search"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="dark-mode" href="javascript:void(0)">
                                <svg>
                                    <use href="theme/assets/svg/iconly-sprite.svg#moondark"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="custom-dropdown">
                            <a href="javascript:void(0)">
                                <svg>
                                    <use href="theme/assets/svg/iconly-sprite.svg#cart-icon"></use>
                                </svg>
                            </a>
                            <span className="badge rounded-pill badge-primary">
                                2
                            </span>
                            <div className="custom-menu cart-dropdown py-0 overflow-hidden">
                                <h3 className="title dropdown-title">Cart</h3>
                                <ul className="pb-0">
                                    <li>
                                        <div className="d-flex">
                                            <img
                                                className="img-fluid b-r-5 me-3 img-60"
                                                src="theme/assets/images/dashboard-2/1.png"
                                                alt=""
                                            />
                                            <div className="flex-grow-1">
                                                <span className="f-w-600">
                                                    Watch multicolor
                                                </span>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                            <button
                                                                className="btn quantity-left-minus"
                                                                type="button"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                -
                                                            </button>
                                                        </span>
                                                        <input
                                                            className="form-control input-number"
                                                            type="text"
                                                            name="quantity"
                                                            defaultValue="1"
                                                        />
                                                        <span className="input-group-prepend">
                                                            <button
                                                                className="btn quantity-right-plus"
                                                                type="button"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                +
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6 className="font-primary">
                                                    $500
                                                </h6>
                                            </div>
                                            <div className="close-circle">
                                                <a
                                                    className="bg-danger"
                                                    href="#"
                                                >
                                                    <i data-feather="x"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <img
                                                className="img-fluid b-r-5 me-3 img-60"
                                                src="theme/assets/images/dashboard-2/2.png"
                                                alt=""
                                            />
                                            <div className="flex-grow-1">
                                                <span className="f-w-600">
                                                    Airpods
                                                </span>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                            <button
                                                                className="btn quantity-left-minus"
                                                                type="button"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                -
                                                            </button>
                                                        </span>
                                                        <input
                                                            className="form-control input-number"
                                                            type="text"
                                                            name="quantity"
                                                            defaultValue="1"
                                                        />
                                                        <span className="input-group-prepend">
                                                            <button
                                                                className="btn quantity-right-plus"
                                                                type="button"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                +
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <h6 className="font-primary">
                                                    $500.00
                                                </h6>
                                            </div>
                                            <div className="close-circle">
                                                <a
                                                    className="bg-danger"
                                                    href="#"
                                                >
                                                    <i data-feather="x"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="total">
                                        <h6 className="mb-0">
                                            Order Total :{" "}
                                            <span className="f-w-600">
                                                $1000.00
                                            </span>
                                        </h6>
                                    </li>
                                    <li className="text-center">
                                        <a
                                            className="d-block mb-3 view-cart f-w-700 text-primary"
                                            href="cart.html"
                                        >
                                            Go to your cart
                                        </a>
                                        <a
                                            className="btn btn-primary view-checkout text-white"
                                            href="checkout.html"
                                        >
                                            Checkout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="custom-dropdown">
                            <a href="javascript:void(0)">
                                <svg>
                                    <use href="theme/assets/svg/iconly-sprite.svg#notification"></use>
                                </svg>
                            </a>
                            <span className="badge rounded-pill badge-primary">
                                4
                            </span>
                            <div className="custom-menu notification-dropdown py-0 overflow-hidden">
                                <h3 className="title bg-primary-light dropdown-title">
                                    Notification{" "}
                                    <span className="font-primary">
                                        View all
                                    </span>
                                </h3>
                                <ul className="activity-timeline">
                                    <li className="d-flex align-items-start">
                                        <div className="activity-line"></div>
                                        <div className="activity-dot-primary"></div>
                                        <div className="flex-grow-1">
                                            <h6 className="f-w-600 font-primary">
                                                30-04-2024<span>Today</span>
                                                <span className="circle-dot-primary float-end">
                                                    <svg className="circle-color">
                                                        <use href="theme/assets/svg/iconly-sprite.svg#circle"></use>
                                                    </svg>
                                                </span>
                                            </h6>
                                            <h5>Alice Goodwin</h5>
                                            <p className="mb-0">
                                                Fashion should be fun. It
                                                shouldn't be labelled
                                                intellectual.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <div className="activity-dot-secondary"></div>
                                        <div className="flex-grow-1">
                                            <h6 className="f-w-600 font-secondary">
                                                28-06-2024
                                                <span>1 hour ago</span>
                                                <span className="float-end circle-dot-secondary">
                                                    <svg className="circle-color">
                                                        <use href="theme/assets/svg/iconly-sprite.svg#circle"></use>
                                                    </svg>
                                                </span>
                                            </h6>
                                            <h5>Herry Venter</h5>
                                            <p>
                                                I am convinced that there can be
                                                luxury in simplicity.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <div className="activity-dot-primary"></div>
                                        <div className="flex-grow-1">
                                            <h6 className="f-w-600 font-primary">
                                                04-08-2024<span>Today</span>
                                                <span className="float-end circle-dot-primary">
                                                    <svg className="circle-color">
                                                        <use href="theme/assets/svg/iconly-sprite.svg#circle"></use>
                                                    </svg>
                                                </span>
                                            </h6>
                                            <h5>Loain Deo</h5>
                                            <p>
                                                I feel that things happen for
                                                open new opportunities.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <div className="activity-dot-secondary"></div>
                                        <div className="flex-grow-1">
                                            <h6 className="f-w-600 font-secondary">
                                                12-11-2024<span>Yesterday</span>
                                                <span className="float-end circle-dot-secondary">
                                                    <svg className="circle-color">
                                                        <use href="theme/assets/svg/iconly-sprite.svg#circle"></use>
                                                    </svg>
                                                </span>
                                            </h6>
                                            <h5>Fenter Jessy</h5>
                                            <p>
                                                Sometimes the simplest things
                                                are the most profound.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a
                                className="full-screen"
                                href="javascript:void(0)"
                            >
                                <svg>
                                    <use href="theme/assets/svg/iconly-sprite.svg#scanfull"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="custom-dropdown">
                            <a href="javascript:void(0)">
                                <svg>
                                    <use href="theme/assets/svg/iconly-sprite.svg#bookmark"></use>
                                </svg>
                            </a>
                            <div className="custom-menu bookmark-dropdown py-0 overflow-hidden">
                                <h3 className="title bg-primary-light dropdown-title">
                                    Bookmark
                                </h3>
                                <ul>
                                    <li>
                                        <form className="mb-0">
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Search Bookmark..."
                                                />
                                                <span className="input-group-text">
                                                    <svg className="svg-color">
                                                        <use href="theme/assets/svg/iconly-sprite.svg#Search"></use>
                                                    </svg>
                                                </span>
                                            </div>
                                        </form>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2 btn-activity-primary">
                                            <a href="index.html">
                                                <svg className="svg-color">
                                                    <use href="theme/assets/svg/iconly-sprite.svg#cube"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                            <a href="index.html">Dashboard</a>
                                            <svg className="svg-color icon-star">
                                                <use href="theme/assets/svg/iconly-sprite.svg#star"></use>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2 btn-activity-secondary">
                                            <a href="to-do.html">
                                                <svg className="svg-color">
                                                    <use href="theme/assets/svg/iconly-sprite.svg#check"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                            <a href="to-do.html">To-do</a>
                                            <svg className="svg-color icon-star">
                                                <use href="theme/assets/svg/iconly-sprite.svg#star"></use>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2 btn-activity-danger">
                                            <a href="apex_chart.html">
                                                <svg className="svg-color">
                                                    <use href="theme/assets/svg/iconly-sprite.svg#pie"></use>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                            <a href="apex_chart.html">Chart</a>
                                            <svg className="svg-color icon-star">
                                                <use href="theme/assets/svg/iconly-sprite.svg#star"></use>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="cloud-design">
                            <a className="cloud-mode">
                                <svg
                                    className="climacon climacon_cloudDrizzle"
                                    id="cloudDrizzle"
                                    version="1.1"
                                    viewBox="15 15 70 70"
                                >
                                    <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzle">
                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                                            <path
                                                className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
                                                d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"
                                            ></path>
                                            <path
                                                className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
                                                d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"
                                            ></path>
                                            <path
                                                className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
                                                d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"
                                            ></path>
                                        </g>
                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                            <path
                                                className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                                d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                                <h3>15</h3>
                            </a>
                        </li>
                        <li className="profile-nav custom-dropdown">
                            <div className="user-wrap">
                                <div className="user-img">
                                    <img
                                        src={'theme/assets/images/profile.png'}
                                        alt="user"
                                    />
                                </div>
                                <div className="user-content">
                                    <h6>Ava Davis</h6>
                                    <p className="mb-0">
                                        Admin
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </p>
                                </div>
                            </div>
                            <div className="custom-menu overflow-hidden">
                                <ul className="profile-body">
                                    <li className="d-flex">
                                        <svg className="svg-color">
                                            <use href="theme/assets/svg/iconly-sprite.svg#Profile"></use>
                                        </svg>
                                        <a
                                            className="ms-2"
                                            href="user-profile.html"
                                        >
                                            Account
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <svg className="svg-color">
                                            <use href="theme/assets/svg/iconly-sprite.svg#Message"></use>
                                        </svg>
                                        <a
                                            className="ms-2"
                                            href="letter-box.html"
                                        >
                                            Inbox
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <svg className="svg-color">
                                            <use href="theme/assets/svg/iconly-sprite.svg#Document"></use>
                                        </svg>
                                        <a className="ms-2" href="to-do.html">
                                            Task
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <svg className="svg-color">
                                            <use href="theme/assets/svg/iconly-sprite.svg#Login"></use>
                                        </svg>
                                        <ResponsiveNavLink

                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
