import { useState } from "react";
import Header from "./Partials/Header";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Header user={user} header={header} />

            <div className="page-body-wrapper">
                <aside className="page-sidebar">
                <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
        <div class="main-sidebar" id="main-sidebar">
          <ul class="sidebar-menu" id="simple-bar">
                            <li className="pin-title sidebar-main-title">
                                <div>
                                    <h5 className="sidebar-title f-w-700">
                                        Pinned
                                    </h5>
                                </div>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h5 className="lan-1 f-w-700 sidebar-title">
                                        General
                                    </h5>
                                </div>
                            </li>
                            <li className="sidebar-list">
                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Home-dashboard"></use>
                                    </svg>
                                    <h6>Dashboards</h6>
                                    <span className="badge">3</span>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="index.html">Default</Link>
                                    </li>
                                    <li>
                                        <Link href="dashboard-02.html">
                                            Ecommerce
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="dashboard-03.html">
                                            Education
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Pie"></use>
                                    </svg>
                                    <h6 className="lan-2">Widgets </h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="general-widget.html">
                                            General
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="chart-widget.html">Chart</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">
                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Document"></use>
                                    </svg>
                                    <h6 className="lan-3">Page layout</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="box-layout.html">Box Layout</Link>
                                    </li>
                                    <li>
                                        <Link href="layout-rtl.html">RTL</Link>
                                    </li>
                                    <li>

                                        <Link href="layout-dark.html">Dark</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h5 className="f-w-700 sidebar-title pt-3">
                                        Application
                                    </h5>
                                </div>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Info-circle"></use>
                                    </svg>
                                    <h6 className="f-w-600">Project</h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="project-list.html">
                                            Project list
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="projectcreate.html">
                                            Project create
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="file-manager.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Paper"></use>
                                    </svg>
                                    <h6 className="f-w-600">File Manager </h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="kanban-board.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Wallet"></use>
                                    </svg>
                                    <h6 className="f-w-600">Kanban board</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Bag"></use>
                                    </svg>
                                    <h6 className="f-w-600">Ecommerce</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="add-products.html">
                                            Add Products
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="product.html">Product</Link>
                                    </li>
                                    <li>

                                        <Link href="product-page.html">
                                            Product Page
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="category.html">
                                            Category page
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="list-products.html">
                                            Product list
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="payment-details.html">
                                            Payment Details
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="order-history.html">
                                            Order History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Invoices
                                            <i className="iconly-Arrow-Right-2 icli"></i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="invoices-1.html">
                                                    Invoices 1
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="invoices-2.html">
                                                    Invoices 2
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="invoices-3.html">
                                                    Invoices 3
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="invoices-4.html">
                                                    Invoices 4
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="invoices-5.html">
                                                    Invoices 5
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="invoices-6.html">
                                                    Invoices 6
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <Link href="cart.html">Cart</Link>
                                    </li>
                                    <li>

                                        <Link href="list-wish.html">Wishlist</Link>
                                    </li>
                                    <li>

                                        <Link href="checkout.html">Checkout</Link>
                                    </li>
                                    <li>

                                        <Link href="pricing.html">Pricing </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="letter-box.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Message"></use>
                                    </svg>
                                    <h6 className="f-w-600">Letter Box</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Chat"></use>
                                    </svg>
                                    <h6 className="f-w-600">Chat</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="private-chat.html">
                                            Private Chat
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="group-chat.html">Group Chat</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Profile"></use>
                                    </svg>
                                    <h6 className="f-w-600">Users</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="user-profile.html">
                                            Users Profile
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="edit-profile.html">
                                            Users Edit
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="user-cards.html">
                                            Users Cards
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="bookmark.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Bookmark"></use>
                                    </svg>
                                    <h6 className="f-w-600">Bookmarks</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="contacts.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Contacts"></use>
                                    </svg>
                                    <h6 className="f-w-600">Contacts </h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link className="sidebar-link" href="task.html">
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Tick-square"></use>
                                    </svg>
                                    <h6 className="f-w-600">Tasks</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="calendar-basic.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Calendar"></use>
                                    </svg>
                                    <h6 className="f-w-600">Calendar </h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="social-app.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Camera"></use>
                                    </svg>
                                    <h6 className="f-w-600">Social App</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link className="sidebar-link" href="to-do.html">
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Edit"></use>
                                    </svg>
                                    <h6 className="f-w-600">To-Do </h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link className="sidebar-link" href="search.html">
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Search-sidebar"></use>
                                    </svg>
                                    <h6 className="f-w-600">Search Result </h6>
                                </Link>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h5 className="f-w-700 sidebar-title pt-3">
                                        Components
                                    </h5>
                                </div>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link className="sidebar-link" href="buttons.html">
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#More-box"></use>
                                    </svg>
                                    <h6 className="f-w-600">buttons </h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Folder"></use>
                                    </svg>
                                    <h6 className="f-w-600">Ui Kits</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="typography.html">Typography</Link>
                                    </li>
                                    <li>
                                        <Link href="avatars.html">Avatars</Link>
                                    </li>
                                    <li>

                                        <Link href="alert.html">Alert</Link>
                                    </li>
                                    <li>

                                        <Link href="helper-classNamees.html">
                                            Helper classNamees
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="grid.html">Grid</Link>
                                    </li>
                                    <li>

                                        <Link href="accordion.html">Accordion</Link>
                                    </li>
                                    <li>

                                        <Link href="tag-pills.html">Tag pills</Link>
                                    </li>
                                    <li>

                                        <Link href="modal.html">Modal </Link>
                                    </li>
                                    <li>

                                        <Link href="popover.html">Popover </Link>
                                    </li>
                                    <li>

                                        <Link href="progress-bar.html">
                                            Progress bar
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="tab-bootstrap.html">
                                            Tab bootstrap
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="tooltip.html">Tooltip</Link>
                                    </li>
                                    <li>

                                        <Link href="dropdown.html"> Dropdown</Link>
                                    </li>
                                    <li>

                                        <Link href="list.html">List</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">
                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Ticket-star"></use>
                                    </svg>
                                    <h6 className="f-w-600">Bonus Ui</h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link href="scrollable.html">Scrollable</Link>
                                    </li>
                                    <li>

                                        <Link href="tree.html">Tree view </Link>
                                    </li>
                                    <li>
                                        <Link href="toasts.html">Toasts </Link>
                                    </li>
                                    <li>

                                        <Link href="rating.html">Rating</Link>
                                    </li>
                                    <li>

                                        <Link href="dropzone.html">Dropzone</Link>
                                    </li>
                                    <li>

                                        <Link href="tour.html">Tour</Link>
                                    </li>
                                    <li>

                                        <Link href="sweetalert2.html">
                                            Sweetalert2
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="modal-animated.html">
                                            Animated Modal
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="slider.html">Slider</Link>
                                    </li>
                                    <li>

                                        <Link href="ribbons.html">Ribbons</Link>
                                    </li>
                                    <li>
                                        <Link href="pagination.html">Pagination</Link>
                                    </li>
                                    <li>

                                        <Link href="breadcrumb.html">Breadcrumb</Link>
                                    </li>
                                    <li>

                                        <Link href="range-slider.html">
                                            Range slider
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="image-cropper.html">
                                            Image cropper
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="basic-card.html">Basic Card</Link>
                                    </li>
                                    <li>

                                        <Link href="creative-card.html">
                                            Creative Card
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="dragable-card.html">
                                            Dragable Card
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="timeline.html">Timeline</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Category"></use>
                                    </svg>
                                    <h6 className="f-w-600">Animation </h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="AOS.html">aos</Link>
                                    </li>
                                    <li>

                                        <Link href="WOW.html">wow</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Activity"></use>
                                    </svg>
                                    <h6 className="f-w-600">Icon</h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link href="font-awesome.html">
                                            Fontawesome icon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="feather_icon.html">
                                            Feather icon
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="iconly-icon.html">
                                            Iconly icon
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="themify-icon.html">
                                            Themify Icon
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Chart"></use>
                                    </svg>
                                    <h6 className="f-w-600">Charts</h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link href="echarts.html">Echarts</Link>
                                    </li>
                                    <li>

                                        <Link href="apex_chart.html">Apex Chart</Link>
                                    </li>
                                    <li>

                                        <Link href="chart-google.html">
                                            Google Chart
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="chart-sparkline.html">
                                            Sparkline chart
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="chart-flot.html">Flot Chart</Link>
                                    </li>
                                    <li>

                                        <Link href="chart-knob.html">Knob Chart</Link>
                                    </li>
                                    <li>

                                        <Link href="chart-morris.html">
                                            Morris Chart
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="chartjs.html">Chatjs Chart</Link>
                                    </li>
                                    <li>

                                        <Link href="chartist_chart.html">
                                            Chartist Chart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="chart-peity.html">
                                            Peity Chart
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h5 className="sidebar-title pt-3 f-w-700">
                                        Tables & Forms
                                    </h5>
                                </div>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Filter"></use>
                                    </svg>
                                    <h6 className="f-w-600">Forms</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            form-control
                                            <i className="iconly-Arrow-Right-2 icli"></i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="base-input.html">
                                                    Base input
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="form-validation.html">
                                                    Form validation
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="radio-checkbox-control.html">
                                                    Checkbox & Radio
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="input-group.html">
                                                    Input group
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="input-mask.html">
                                                    Input mask
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="megaoptions.html">
                                                    Mega Options
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Form Widgets
                                            <i className="iconly-Arrow-Right-2 icli"></i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="datepicker.html">
                                                    Datepicker
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="touchspin.html">
                                                    Touchspin
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="select2.html">
                                                    Select2
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="switch.html">
                                                    Switch
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="typehead.html">
                                                    Typehead
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="clipboard.html">
                                                    Clipboard
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Form Layout
                                            <i className="iconly-Arrow-Right-2 icli"></i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="form-wizard.html">
                                                    Form wizard 1
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="form-wizard-two.html">
                                                    Form wizard 2
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="form-wizard-three.html">
                                                    Two factor
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Edit-line"></use>
                                    </svg>
                                    <h6 className="f-w-600">Tables</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Bootstrap Tables
                                            <i className="iconly-Arrow-Right-2 icli">

                                            </i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="basic-table.html">
                                                    Basic Tables
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="table-components.html">
                                                    Table components
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Data Tables
                                            <i className="iconly-Arrow-Right-2 icli"></i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="datatable-basic-init.html">
                                                    Basic Init
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="datatable-advance.html">
                                                    Advance Init
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="datatable-API.html">
                                                    API
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="datatable-data-source.html">
                                                    Data Sources
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>

                                        <Link href="datatable-ext-autofill.html">
                                            Ex. Data Tables
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="jsgrid-table.html">
                                            Js Grid Table
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h5 className="sidebar-title pt-3 f-w-700">
                                        Pages
                                    </h5>
                                </div>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="landing-page.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Wallet"></use>
                                    </svg>
                                    <h6 className="f-w-600">Landing page</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="sample-page.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Paper-plus"></use>
                                    </svg>
                                    <h6 className="f-w-600">Sample page</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="internationalization.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Play"></use>
                                    </svg>
                                    <h6 className="f-w-600">
                                        Internationalization
                                    </h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="theme/starter-kit/index.html"
                                    target="_blank"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Star-kit"></use>
                                    </svg>
                                    <h6 className="f-w-600">Starter kit</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Password"></use>
                                    </svg>
                                    <h6 className="f-w-600">Others</h6>
                                    <i className="iconly-Arrow-Right-2 icli">

                                    </i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Error Page
                                            <i className="iconly-Arrow-Right-2 icli"></i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="error-page1.html">
                                                    Error page 1
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="error-page2.html">
                                                    Error page 2
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="error-page3.html">
                                                    Error page 3
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="error-page4.html">
                                                    Error page 4
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="error-page5.html">
                                                    Error page 5
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="error-page6.html">
                                                    Error page 6
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >

                                            Authentication
                                            <i className="iconly-Arrow-Right-2 icli">

                                            </i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link
                                                    href="login.html"
                                                    target="_blank"
                                                >
                                                    Login Simple
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="login_one.html"
                                                    target="_blank"
                                                >
                                                    Login with bg image
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="login_two.html"
                                                    target="_blank"
                                                >
                                                    Login with image two
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="login-bs-validation.html"
                                                    target="_blank"
                                                >
                                                    Login With validation
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="login-bs-tt-validation.html"
                                                    target="_blank"
                                                >
                                                    Login with tooltip
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="login-sa-validation.html"
                                                    target="_blank"
                                                >
                                                    Login with sweetalert
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="sign-up.html"
                                                    target="_blank"
                                                >
                                                    Register Simple
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="sign-up-one.html"
                                                    target="_blank"
                                                >
                                                    Register with Bg Image
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="sign-up-two.html"
                                                    target="_blank"
                                                >
                                                    Register with image two
                                                </Link>
                                            </li>
                                            <li>

                                                <Link
                                                    href="sign-up-wizard.html"
                                                    target="_blank"
                                                >
                                                    Register wizard
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="unlock.html">
                                                    Unlock User
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="forget-password.html">
                                                    Forget Password
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="reset-password.html">
                                                    Reset Password
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="maintenance.html">
                                                    Maintenance
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Coming Soon
                                            <i className="iconly-Arrow-Right-2 icli"></i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="comingsoon.html">
                                                    Coming Simple
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="comingsoon-bg-video.html">
                                                    Coming with Bg video
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="comingsoon-bg-img.html">
                                                    Coming with Bg Image
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            className="submenu-title"
                                            href="javascript:void(0)"
                                        >
                                            Email templates
                                            <i className="iconly-Arrow-Right-2 icli">

                                            </i>
                                        </Link>
                                        <ul className="according-submenu">
                                            <li>

                                                <Link href="basic-template.html">
                                                    Basic Email
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="email-header.html">
                                                    Basic With Header
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="template-email.html">
                                                    Ecomerce Template
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="template-email-2.html">
                                                    Email Template 2
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="ecommerce-templates.html">
                                                    Ecommerce Email
                                                </Link>
                                            </li>
                                            <li>

                                                <Link href="email-order-success.html">
                                                    Order Success
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-main-title">
                                <div>
                                    <h5 className="sidebar-title pt-3 f-w-700">
                                        Miscellaneous
                                    </h5>
                                </div>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Gallery"></use>
                                    </svg>
                                    <h6 className="f-w-600">Gallery </h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="gallery.html">Gallery Grid</Link>
                                    </li>
                                    <li>

                                        <Link href="gallery-with-description.html">
                                            Gallery Grid Desc
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="masonary.html">
                                            Masonary Gallery
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="masonary_with_disc.html">
                                            Masonary With Desc
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="gallery-hover.html">
                                            Hover Effects
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Game"></use>
                                    </svg>
                                    <h6 className="f-w-600">Blog </h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="blog.html">Blog Details</Link>
                                    </li>
                                    <li>

                                        <Link href="blog-single.html">
                                            Blog Single
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="add_post.html">Add Post</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">
                                <Link className="sidebar-link" href="faq.html">
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Danger"></use>
                                    </svg>
                                    <h6 className="f-w-600">FAQ</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Filter-2"></use>
                                    </svg>
                                    <h6 className="f-w-600">Job Search </h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="job-cards-view.html">
                                            Card view
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="job-list-view.html">
                                            List view
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="job-details.html">
                                            Job details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="job-apply.html">Apply</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Work"></use>
                                    </svg>
                                    <h6 className="f-w-600">Learning</h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="learning_list_visit.html">
                                            Learning List
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="learning_detailed.html">
                                            Learning Detailed
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Discovery"></use>
                                    </svg>
                                    <h6 className="f-w-600">Maps</h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="data-map.html">Data Map</Link>
                                    </li>
                                    <li>

                                        <Link href="vector-map.html">
                                            Vector Maps
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="javascript:void(0)"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Shield"></use>
                                    </svg>
                                    <h6 className="f-w-600">Editors</h6>
                                    <i className="iconly-Arrow-Right-2 icli"></i>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li>

                                        <Link href="quilleditor.html">
                                            Quill editor
                                        </Link>
                                    </li>
                                    <li>

                                        <Link href="ace-code-editor.html">
                                            ACE Code Editor
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="knowledgebase.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Setting"></use>
                                    </svg>
                                    <h6 className="f-w-600">Knowledgebase</h6>
                                </Link>
                            </li>
                            <li className="sidebar-list">

                                <i className="fa-solid fa-thumbtack"></i>
                                <Link
                                    className="sidebar-link"
                                    href="support-ticket.html"
                                >
                                    <svg className="stroke-icon">
                                        <use href="theme/assets/svg/iconly-sprite.svg#Ticket"></use>
                                    </svg>
                                    <h6 className="f-w-600">Support Ticket</h6>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-arrow" id="right-arrow">
                        <i data-feather="arrow-right"></i>
                    </div>
                </aside>
                <div className="page-body">{children}</div>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 footer-copyright">
                                <p className="mb-0">
                                    Copyright 2024 © Admiro theme by pixelstrap.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="float-end mb-0">
                                    Hand crafted &amp; made with
                                    <svg className="svg-color footer-icon">
                                        <use href="../assets/svg/iconly-sprite.svg#heart"></use>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
