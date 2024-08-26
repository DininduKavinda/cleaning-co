import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
        <div>
        <div className="tap-top"><i className="iconly-Arrow-Up icli"></i></div>
        {/* <div className="loader-wrapper">
          <div className="loader"><span></span><span></span><span></span><span></span><span></span></div>
        </div> */}
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
          <div className="page-header row">
            {/* <div className="logo-wrapper d-flex align-items-center col-auto"><a href="index.html"><img className="light-logo img-fluid" src="../assets/images/logo/logo1.png" alt="logo"><img className="dark-logo img-fluid" src="../assets/images/logo/logo-dark.png" alt="logo"></a><Link className="close-btn toggle-sidebar" href="javascript:void(0)">
                <svg className="svg-color">
                  <use href="../assets/svg/iconly-sprite.svg#Category"></use>
                </svg></a></div> */}
            <div className="page-main-header col">
              <div className="header-left">
                <form className="form-inline search-full col" action="#" method="get">
                  <div className="form-group w-100">
                    <div className="Typeahead Typeahead--twitterUsers">
                      <div className="u-posRelative">
                        <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Admiro .." name="q" title="" autofocus="autofocus"/>
                        <div className="spinner-border Typeahead-spinner" role="status"><span className="sr-only">Loading...</span></div><i className="close-search" data-feather="x"></i>
                      </div>
                      <div className="Typeahead-menu"></div>
                    </div>
                  </div>
                </form>
                <div className="form-group-header d-lg-block d-none">
                  <div className="Typeahead Typeahead--twitterUsers">
                    <div className="u-posRelative d-flex align-items-center">
                      <input className="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text" placeholder="Type to Search..." name="q" title=""/><i className="search-bg iconly-Search icli"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-right">
                <ul className="header-right">
                  <li className="custom-dropdown">
                    <div className="translate_wrapper">
                      <div className="current_lang"><a className="lang" href="javascript:void(0)"><i className="flag-icon flag-icon-us"></i>
                          <h6 className="lang-txt f-w-700">ENG</h6></a></div>
                      <ul className="custom-menu profile-menu language-menu py-0 more_lang">
                                      <li className="d-block"><a className="lang" href="#" data-value="English"><i className="flag-icon flag-icon-us"></i>
                                          <div className="lang-txt">English</div></a></li>
                                      <li className="d-block"><a className="lang" href="#" data-value="fr"><i className="flag-icon flag-icon-fr"></i>
                                          <div className="lang-txt">Français</div></a></li>
                                      <li className="d-block"><a className="lang" href="#" data-value="es"><i className="flag-icon flag-icon-es"></i>
                                          <div className="lang-txt">Español</div></a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="search d-lg-none d-flex"> <a href="javascript:void(0)">
                      <svg>
                        <use href="../assets/svg/iconly-sprite.svg#Search"></use>
                      </svg></a></li>
                  <li>  <a className="dark-mode" href="javascript:void(0)">
                      <svg>
                        <use href="../assets/svg/iconly-sprite.svg#moondark"></use>
                      </svg></a></li>
                  <li className="custom-dropdown"><a href="javascript:void(0)">
                      <svg>
                        <use href="../assets/svg/iconly-sprite.svg#cart-icon"></use>
                      </svg></a><span className="badge rounded-pill badge-primary">2</span>
                    <div className="custom-menu cart-dropdown py-0 overflow-hidden">
                      <h3 className="title dropdown-title">Cart</h3>
                      <ul className="pb-0">
                        <li>
                          <div className="d-flex"><img className="img-fluid b-r-5 me-3 img-60" src="../assets/images/dashboard-2/1.png" alt=""/>
                            <div className="flex-grow-1"><span className="f-w-600">Watch multicolor</span>
                              <div className="qty-box">
                                <div className="input-group"><span className="input-group-prepend">
                                    <button className="btn quantity-left-minus" type="button" data-type="minus" data-field="">-</button></span>
                                  <input className="form-control input-number" type="text" name="quantity" value="1"/><span className="input-group-prepend">
                                    <button className="btn quantity-right-plus" type="button" data-type="plus" data-field="">+</button></span>
                                </div>
                              </div>
                              <h6 className="font-primary">$500</h6>
                            </div>
                            <div className="close-circle"><a className="bg-danger" href="#"><i data-feather="x"></i></a></div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex"><img className="img-fluid b-r-5 me-3 img-60" src="../assets/images/dashboard-2/2.png" alt=""/>
                            <div className="flex-grow-1"><span className="f-w-600">Airpods</span>
                              <div className="qty-box">
                                <div className="input-group"><span className="input-group-prepend">
                                    <button className="btn quantity-left-minus" type="button" data-type="minus" data-field="">-</button></span>
                                  <input className="form-control input-number" type="text" name="quantity" value="1"/><span className="input-group-prepend">
                                    <button className="btn quantity-right-plus" type="button" data-type="plus" data-field="">+</button></span>
                                </div>
                              </div>
                              <h6 className="font-primary">$500.00</h6>
                            </div>
                            <div className="close-circle"><a className="bg-danger" href="#"><i data-feather="x"></i></a></div>
                          </div>
                        </li>
                        <li className="total">
                          <h6 className="mb-0">Order Total : <span className="f-w-600">$1000.00</span></h6>
                        </li>
                        <li className="text-center"><a className="d-block mb-3 view-cart f-w-700 text-primary" href="cart.html">Go to your cart</a><a className="btn btn-primary view-checkout text-white" href="checkout.html">Checkout</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="custom-dropdown"><a href="javascript:void(0)">
                      <svg>
                        <use href="../assets/svg/iconly-sprite.svg#notification"></use>
                      </svg></a><span className="badge rounded-pill badge-primary">4</span>
                    <div className="custom-menu notification-dropdown py-0 overflow-hidden">
                      <h3 className="title bg-primary-light dropdown-title">Notification <span className="font-primary">View all</span></h3>
                      <ul className="activity-timeline">
                        <li className="d-flex align-items-start">
                          <div className="activity-line"></div>
                          <div className="activity-dot-primary"></div>
                          <div className="flex-grow-1">
                            <h6 className="f-w-600 font-primary">30-04-2024<span>Today</span><span className="circle-dot-primary float-end">
                                <svg className="circle-color">
                                  <use href="../assets/svg/iconly-sprite.svg#circle"></use>
                                </svg></span></h6>
                            <h5>Alice Goodwin</h5>
                            <p className="mb-0">Fashion should be fun. It shouldn't be labelled intellectual.</p>
                          </div>
                        </li>
                                      <li className="d-flex align-items-start">
                                        <div className="activity-dot-secondary"></div>
                                        <div className="flex-grow-1">
                                          <h6 className="f-w-600 font-secondary">28-06-2024<span>1 hour ago</span><span className="float-end circle-dot-secondary">
                                              <svg className="circle-color">
                                                <use href="../assets/svg/iconly-sprite.svg#circle"></use>
                                              </svg></span></h6>
                                          <h5>Herry Venter</h5>
                                          <p>I am convinced that there can be luxury in simplicity.</p>
                                        </div>
                                      </li>
                                      <li className="d-flex align-items-start">
                                        <div className="activity-dot-primary"></div>
                                        <div className="flex-grow-1">
                                          <h6 className="f-w-600 font-primary">04-08-2024<span>Today</span><span className="float-end circle-dot-primary">
                                              <svg className="circle-color">
                                                <use href="../assets/svg/iconly-sprite.svg#circle"></use>
                                              </svg></span></h6>
                                          <h5>Loain Deo</h5>
                                          <p>I feel that things happen for open new opportunities.</p>
                                        </div>
                                      </li>
                                      <li className="d-flex align-items-start">
                                        <div className="activity-dot-secondary"></div>
                                        <div className="flex-grow-1">
                                          <h6 className="f-w-600 font-secondary">12-11-2024<span>Yesterday</span><span className="float-end circle-dot-secondary">
                                              <svg className="circle-color">
                                                <use href="../assets/svg/iconly-sprite.svg#circle"></use>
                                              </svg></span></h6>
                                          <h5>Fenter Jessy</h5>
                                          <p>Sometimes the simplest things are the most profound.</p>
                                        </div>
                                      </li>
                      </ul>
                    </div>
                  </li>
                  <li><a className="full-screen" href="javascript:void(0)">
                      <svg>
                        <use href="../assets/svg/iconly-sprite.svg#scanfull"></use>
                      </svg></a></li>
                  <li className="custom-dropdown"><a href="javascript:void(0)">
                      <svg>
                        <use href="../assets/svg/iconly-sprite.svg#bookmark"></use>
                      </svg></a>
                    <div className="custom-menu bookmark-dropdown py-0 overflow-hidden">
                      <h3 className="title bg-primary-light dropdown-title">Bookmark</h3>
                      <ul>
                        <li>
                          <form className="mb-0">
                            <div className="input-group">
                              <input className="form-control" type="text" placeholder="Search Bookmark..."/><span className="input-group-text">
                                <svg className="svg-color">
                                  <use href="../assets/svg/iconly-sprite.svg#Search"></use>
                                </svg></span>
                            </div>
                          </form>
                        </li>
                                      <li className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2 btn-activity-primary"><a href="index.html">
                                            <svg className="svg-color">
                                              <use href="../assets/svg/iconly-sprite.svg#cube"></use>
                                            </svg></a></div>
                                        <div className="d-flex justify-content-between align-items-center w-100"><a href="index.html">Dashboard</a>
                                          <svg className="svg-color icon-star">
                                            <use href="../assets/svg/iconly-sprite.svg#star"></use>
                                          </svg>
                                        </div>
                                      </li>
                                      <li className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2 btn-activity-secondary"><a href="to-do.html">
                                            <svg className="svg-color">
                                              <use href="../assets/svg/iconly-sprite.svg#check"></use>
                                            </svg></a></div>
                                        <div className="d-flex justify-content-between align-items-center w-100"><a href="to-do.html">To-do</a>
                                          <svg className="svg-color icon-star">
                                            <use href="../assets/svg/iconly-sprite.svg#star"></use>
                                          </svg>
                                        </div>
                                      </li>
                                      <li className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2 btn-activity-danger"><a href="apex_chart.html">
                                            <svg className="svg-color">
                                              <use href="../assets/svg/iconly-sprite.svg#pie"></use>
                                            </svg></a></div>
                                        <div className="d-flex justify-content-between align-items-center w-100"><a href="apex_chart.html">Chart</a>
                                          <svg className="svg-color icon-star">
                                            <use href="../assets/svg/iconly-sprite.svg#star"></use>
                                          </svg>
                                        </div>
                                      </li>
                      </ul>
                    </div>
                  </li>
                  <li className="cloud-design"><a className="cloud-mode">
                      <svg className="climacon climacon_cloudDrizzle" id="cloudDrizzle" version="1.1" viewbox="15 15 70 70">
                        <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzle">
                          <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"></path>
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"></path>
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"></path>
                          </g>
                          <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"></path>
                          </g>
                        </g>
                      </svg>
                      <h3>15</h3></a></li>
                  <li className="profile-nav custom-dropdown">
                    <div className="user-wrap">
                      <div className="user-img"><img src="../assets/images/profile.png" alt="user"/></div>
                      <div className="user-content">
                        <h6>Ava Davis</h6>
                        <p className="mb-0">Admin<i className="fa-solid fa-chevron-down"></i></p>
                      </div>
                    </div>
                    <div className="custom-menu overflow-hidden">
                      <ul className="profile-body">
                        <li className="d-flex">
                          <svg className="svg-color">
                            <use href="../assets/svg/iconly-sprite.svg#Profile"></use>
                          </svg><a className="ms-2" href="user-profile.html">Account</a>
                        </li>
                        <li className="d-flex">
                          <svg className="svg-color">
                            <use href="../assets/svg/iconly-sprite.svg#Message"></use>
                          </svg><a className="ms-2" href="letter-box.html">Inbox</a>
                        </li>
                        <li className="d-flex">
                          <svg className="svg-color">
                            <use href="../assets/svg/iconly-sprite.svg#Document"></use>
                          </svg><a className="ms-2" href="to-do.html">Task</a>
                        </li>
                        <li className="d-flex">
                          <svg className="svg-color">
                            <use href="../assets/svg/iconly-sprite.svg#Login"></use>
                          </svg><a className="ms-2" href="login.html">Log Out</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="page-body-wrapper">

            <aside className="page-sidebar">
              <div className="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
              <div className="main-sidebar" id="main-sidebar">
                <ul className="sidebar-menu" id="simple-bar">
                  <li className="pin-title sidebar-main-title">
                    <div>
                      <h5 className="sidebar-title f-w-700">Pinned</h5>
                    </div>
                  </li>
                  <li className="sidebar-main-title">
                    <div>
                      <h5 className="lan-1 f-w-700 sidebar-title">General</h5>
                    </div>
                  </li>
                  <li className="sidebar-list"><i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Home-dashboard"></use>
                      </svg>
                      <h6>Dashboards</h6><span className="badge">3</span><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="index.html">Default</a></li>
                      <li><a href="dashboard-02.html">Ecommerce </a></li>
                      <li> <a href="dashboard-03.html">Education</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Pie"></use>
                      </svg>
                      <h6 className="lan-2">Widgets </h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="general-widget.html">General</a></li>
                      <li><a href="chart-widget.html">Chart</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"><i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Document"></use>
                      </svg>
                      <h6 className="lan-3">Page layout</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="box-layout.html">Box Layout</a></li>
                      <li><a href="layout-rtl.html">RTL</a></li>
                      <li> <a href="layout-dark.html">Dark</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-main-title">
                    <div>
                      <h5 className="f-w-700 sidebar-title pt-3">Application</h5>
                    </div>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Info-circle"></use>
                      </svg>
                      <h6 className="f-w-600">Project</h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="project-list.html">Project list </a></li>
                      <li> <a href="projectcreate.html">Project create </a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="file-manager.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Paper"></use>
                      </svg>
                      <h6 className="f-w-600">File Manager </h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="kanban-board.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Wallet"></use>
                      </svg>
                      <h6 className="f-w-600">Kanban board</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Bag"></use>
                      </svg>
                      <h6 className="f-w-600">Ecommerce</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="add-products.html">Add Products</a></li>
                      <li> <a href="product.html">Product</a></li>
                      <li> <a href="product-page.html">Product Page</a></li>
                      <li> <a href="category.html">Category page</a></li>
                      <li> <a href="list-products.html">Product list</a></li>
                      <li> <a href="payment-details.html">Payment Details</a></li>
                      <li> <a href="order-history.html">Order History</a></li>
                      <li><a className="submenu-title" href="javascript:void(0)">Invoices<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="invoices-1.html">Invoices 1</a></li>
                          <li> <a href="invoices-2.html">Invoices 2</a></li>
                          <li> <a href="invoices-3.html">Invoices 3</a></li>
                          <li> <a href="invoices-4.html">Invoices 4</a></li>
                          <li> <a href="invoices-5.html">Invoices 5</a></li>
                          <li> <a href="invoices-6.html">Invoices 6</a></li>
                        </ul>
                      </li>
                      <li> <a href="cart.html">Cart</a></li>
                      <li> <a href="list-wish.html">Wishlist</a></li>
                      <li> <a href="checkout.html">Checkout</a></li>
                      <li> <a href="pricing.html">Pricing </a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="letter-box.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Message"></use>
                      </svg>
                      <h6 className="f-w-600">Letter Box</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Chat"></use>
                      </svg>
                      <h6 className="f-w-600">Chat</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="private-chat.html">Private Chat</a></li>
                      <li> <a href="group-chat.html">Group Chat</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Profile"></use>
                      </svg>
                      <h6 className="f-w-600">Users</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="user-profile.html">Users Profile</a></li>
                      <li> <a href="edit-profile.html">Users Edit</a></li>
                      <li> <a href="user-cards.html">Users Cards      </a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="bookmark.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Bookmark"></use>
                      </svg>
                      <h6 className="f-w-600">Bookmarks</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="contacts.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Contacts"></use>
                      </svg>
                      <h6 className="f-w-600">Contacts   </h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="task.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Tick-square"></use>
                      </svg>
                      <h6 className="f-w-600">Tasks</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="calendar-basic.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Calendar"></use>
                      </svg>
                      <h6 className="f-w-600">Calendar  </h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="social-app.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Camera"></use>
                      </svg>
                      <h6 className="f-w-600">Social App</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="to-do.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Edit"></use>
                      </svg>
                      <h6 className="f-w-600">To-Do </h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="search.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Search-sidebar"></use>
                      </svg>
                      <h6 className="f-w-600">Search Result                                                </h6></a></li>
                  <li className="sidebar-main-title">
                    <div>
                      <h5 className="f-w-700 sidebar-title pt-3">Components</h5>
                    </div>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="buttons.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#More-box"></use>
                      </svg>
                      <h6 className="f-w-600">buttons </h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Folder"></use>
                      </svg>
                      <h6 className="f-w-600">Ui Kits</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="typography.html">Typography</a></li>
                      <li><a href="avatars.html">Avatars</a></li>
                      <li> <a href="alert.html">Alert</a></li>
                      <li> <a href="helper-classNamees.html">Helper classNamees</a></li>
                      <li> <a href="grid.html">Grid</a></li>
                      <li> <a href="accordion.html">Accordion</a></li>
                      <li> <a href="tag-pills.html">Tag pills</a></li>
                      <li> <a href="modal.html">Modal </a></li>
                      <li> <a href="popover.html">Popover </a></li>
                      <li> <a href="progress-bar.html">Progress bar</a></li>
                      <li> <a href="tab-bootstrap.html">Tab bootstrap</a></li>
                      <li> <a href="tooltip.html">Tooltip</a></li>
                      <li> <a href="dropdown.html"> Dropdown</a></li>
                      <li> <a href="list.html">List</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"><i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Ticket-star"></use>
                      </svg>
                      <h6 className="f-w-600">Bonus Ui</h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li><a href="scrollable.html">Scrollable</a></li>
                      <li> <a href="tree.html">Tree view </a></li>
                      <li><a href="toasts.html">Toasts </a></li>
                      <li> <a href="rating.html">Rating</a></li>
                      <li> <a href="dropzone.html">Dropzone</a></li>
                      <li> <a href="tour.html">Tour</a></li>
                      <li> <a href="sweetalert2.html">Sweetalert2 </a></li>
                      <li> <a href="modal-animated.html">Animated Modal</a></li>
                      <li> <a href="slider.html">Slider</a></li>
                      <li> <a href="ribbons.html">Ribbons</a></li>
                      <li><a href="pagination.html">Pagination</a></li>
                      <li> <a href="breadcrumb.html">Breadcrumb</a></li>
                      <li> <a href="range-slider.html">Range slider</a></li>
                      <li> <a href="image-cropper.html">Image cropper</a></li>
                      <li> <a href="basic-card.html">Basic Card</a></li>
                      <li> <a href="creative-card.html">Creative Card</a></li>
                      <li> <a href="dragable-card.html">Dragable Card </a></li>
                      <li> <a href="timeline.html">Timeline</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Category"></use>
                      </svg>
                      <h6 className="f-w-600">Animation </h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li>  <a href="AOS.html">aos</a></li>
                      <li>  <a href="WOW.html">wow</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Activity"></use>
                      </svg>
                      <h6 className="f-w-600">Icon</h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li><a href="font-awesome.html">Fontawesome icon</a></li>
                      <li><a href="feather_icon.html">Feather icon</a></li>
                      <li> <a href="iconly-icon.html">Iconly icon </a></li>
                      <li> <a href="themify-icon.html">Themify Icon</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Chart"></use>
                      </svg>
                      <h6 className="f-w-600">Charts</h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li><a href="echarts.html">Echarts</a></li>
                      <li> <a href="apex_chart.html">Apex Chart</a></li>
                      <li> <a href="chart-google.html">Google Chart</a></li>
                      <li> <a href="chart-sparkline.html">Sparkline chart</a></li>
                      <li> <a href="chart-flot.html">Flot Chart</a></li>
                      <li> <a href="chart-knob.html">Knob Chart</a></li>
                      <li> <a href="chart-morris.html">Morris Chart</a></li>
                      <li> <a href="chartjs.html">Chatjs Chart</a></li>
                      <li> <a href="chartist_chart.html">Chartist Chart</a></li>
                      <li><a href="chart-peity.html">Peity Chart</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-main-title">
                    <div>
                      <h5 className="sidebar-title pt-3 f-w-700">Tables & Forms</h5>
                    </div>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Filter"></use>
                      </svg>
                      <h6 className="f-w-600">Forms</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li><a className="submenu-title" href="javascript:void(0)">form-control<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="base-input.html">Base input</a></li>
                          <li> <a href="form-validation.html">Form validation</a></li>
                          <li> <a href="radio-checkbox-control.html">Checkbox & Radio </a></li>
                          <li> <a href="input-group.html">Input group</a></li>
                          <li> <a href="input-mask.html">Input mask</a></li>
                          <li> <a href="megaoptions.html">Mega Options                                                    </a></li>
                        </ul>
                      </li>
                      <li><a className="submenu-title" href="javascript:void(0)">Form Widgets<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="datepicker.html">Datepicker</a></li>
                          <li> <a href="touchspin.html">Touchspin</a></li>
                          <li> <a href="select2.html">Select2 </a></li>
                          <li> <a href="switch.html">Switch </a></li>
                          <li> <a href="typehead.html">Typehead </a></li>
                          <li> <a href="clipboard.html">Clipboard</a></li>
                        </ul>
                      </li>
                      <li><a className="submenu-title" href="javascript:void(0)">Form Layout<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="form-wizard.html">Form wizard 1</a></li>
                          <li> <a href="form-wizard-two.html">Form wizard 2</a></li>
                          <li> <a href="form-wizard-three.html">Two factor</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Edit-line"></use>
                      </svg>
                      <h6 className="f-w-600">Tables</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li><a className="submenu-title" href="javascript:void(0)">Bootstrap Tables<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="basic-table.html">Basic Tables</a></li>
                          <li> <a href="table-components.html">Table components</a></li>
                        </ul>
                      </li>
                      <li><a className="submenu-title" href="javascript:void(0)">Data Tables<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="datatable-basic-init.html">Basic Init</a></li>
                          <li> <a href="datatable-advance.html">Advance Init</a></li>
                          <li> <a href="datatable-API.html">API</a></li>
                          <li><a href="datatable-data-source.html">Data Sources</a></li>
                        </ul>
                      </li>
                      <li> <a href="datatable-ext-autofill.html">Ex. Data Tables</a></li>
                      <li> <a href="jsgrid-table.html">Js Grid Table         </a></li>
                    </ul>
                  </li>
                  <li className="sidebar-main-title">
                    <div>
                      <h5 className="sidebar-title pt-3 f-w-700">Pages</h5>
                    </div>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="landing-page.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Wallet"></use>
                      </svg>
                      <h6 className="f-w-600">Landing page</h6></a></li>
                  <li className="sidebar-list"><i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="sample-page.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Paper-plus"></use>
                      </svg>
                      <h6 className="f-w-600">Sample page</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="internationalization.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Play"></use>
                      </svg>
                      <h6 className="f-w-600">Internationalization</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="../starter-kit/index.html" target="_blank">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Star-kit"></use>
                      </svg>
                      <h6 className="f-w-600">Starter kit</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Password"></use>
                      </svg>
                      <h6 className="f-w-600">Others</h6><i className="iconly-Arrow-Right-2 icli"> </i></a>
                    <ul className="sidebar-submenu">
                      <li><a className="submenu-title" href="javascript:void(0)">Error Page<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="error-page1.html">Error page 1</a></li>
                          <li> <a href="error-page2.html">Error page 2</a></li>
                          <li> <a href="error-page3.html">Error page 3</a></li>
                          <li> <a href="error-page4.html">Error page 4</a></li>
                          <li> <a href="error-page5.html">Error page 5</a></li>
                          <li> <a href="error-page6.html">Error page 6</a></li>
                        </ul>
                      </li>
                      <li><a className="submenu-title" href="javascript:void(0)"> Authentication<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="login.html" target="_blank">Login Simple</a></li>
                          <li> <a href="login_one.html" target="_blank">Login with bg image</a></li>
                          <li> <a href="login_two.html" target="_blank">Login with image two</a></li>
                          <li> <a href="login-bs-validation.html" target="_blank">Login With validation</a></li>
                          <li> <a href="login-bs-tt-validation.html" target="_blank">Login with tooltip</a></li>
                          <li> <a href="login-sa-validation.html" target="_blank">Login with sweetalert</a></li>
                          <li> <a href="sign-up.html" target="_blank">Register Simple</a></li>
                          <li> <a href="sign-up-one.html" target="_blank">Register with Bg Image</a></li>
                          <li> <a href="sign-up-two.html" target="_blank">Register with image two</a></li>
                          <li> <a href="sign-up-wizard.html" target="_blank">Register wizard</a></li>
                          <li> <a href="unlock.html">Unlock User</a></li>
                          <li> <a href="forget-password.html">Forget Password</a></li>
                          <li> <a href="reset-password.html">Reset Password</a></li>
                          <li> <a href="maintenance.html">Maintenance</a></li>
                        </ul>
                      </li>
                      <li><a className="submenu-title" href="javascript:void(0)">Coming Soon<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="comingsoon.html">Coming Simple</a></li>
                          <li> <a href="comingsoon-bg-video.html">Coming with Bg video</a></li>
                          <li> <a href="comingsoon-bg-img.html">Coming with Bg Image</a></li>
                        </ul>
                      </li>
                      <li><a className="submenu-title" href="javascript:void(0)">Email templates<i className="iconly-Arrow-Right-2 icli"> </i></a>
                        <ul className="according-submenu">
                          <li> <a href="basic-template.html">Basic Email</a></li>
                          <li> <a href="email-header.html">Basic With Header</a></li>
                          <li> <a href="template-email.html">Ecomerce Template</a></li>
                          <li> <a href="template-email-2.html">Email Template 2</a></li>
                          <li> <a href="ecommerce-templates.html">Ecommerce Email</a></li>
                          <li> <a href="email-order-success.html">Order Success</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-main-title">
                    <div>
                      <h5 className="sidebar-title pt-3 f-w-700">Miscellaneous</h5>
                    </div>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Gallery"></use>
                      </svg>
                      <h6 className="f-w-600">Gallery  </h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="gallery.html">Gallery Grid</a></li>
                      <li> <a href="gallery-with-description.html">Gallery Grid Desc</a></li>
                      <li> <a href="masonary.html">Masonary Gallery</a></li>
                      <li> <a href="masonary_with_disc.html">Masonary With Desc</a></li>
                      <li> <a href="gallery-hover.html">Hover Effects</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Game"></use>
                      </svg>
                      <h6 className="f-w-600">Blog  </h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="blog.html">Blog Details</a></li>
                      <li> <a href="blog-single.html">Blog Single</a></li>
                      <li><a href="add_post.html">Add Post</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"><a className="sidebar-link" href="faq.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Danger"></use>
                      </svg>
                      <h6 className="f-w-600">FAQ</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Filter-2"></use>
                      </svg>
                      <h6 className="f-w-600">Job Search  </h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="job-cards-view.html">Card view</a></li>
                      <li> <a href="job-list-view.html">List view</a></li>
                      <li><a href="job-details.html">Job details   </a></li>
                      <li><a href="job-apply.html">Apply</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Work"></use>
                      </svg>
                      <h6 className="f-w-600">Learning</h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="learning_list_visit.html">Learning List</a></li>
                      <li> <a href="learning_detailed.html">Learning Detailed</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Discovery"></use>
                      </svg>
                      <h6 className="f-w-600">Maps</h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="data-map.html">Data Map</a></li>
                      <li> <a href="vector-map.html">Vector Maps</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="javascript:void(0)">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Shield"></use>
                      </svg>
                      <h6 className="f-w-600">Editors</h6><i className="iconly-Arrow-Right-2 icli"></i></a>
                    <ul className="sidebar-submenu">
                      <li> <a href="quilleditor.html">Quill editor</a></li>
                      <li> <a href="ace-code-editor.html">ACE Code Editor</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="knowledgebase.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Setting"></use>
                      </svg>
                      <h6 className="f-w-600">Knowledgebase</h6></a></li>
                  <li className="sidebar-list"> <i className="fa-solid fa-thumbtack"></i><a className="sidebar-link" href="support-ticket.html">
                      <svg className="stroke-icon">
                        <use href="../assets/svg/iconly-sprite.svg#Ticket"></use>
                      </svg>
                      <h6 className="f-w-600">Support Ticket</h6></a></li>
                </ul>
              </div>
              <div className="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
            </aside>

            <main>{children}</main>
            <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 footer-copyright">
                <p className="mb-0">Copyright 2024 © Admiro theme by pixelstrap.</p>
              </div>
              <div className="col-md-6">
                <p className="float-end mb-0">Hand crafted &amp; made with
                  <svg className="svg-color footer-icon">
                    <use href="../assets/svg/iconly-sprite.svg#heart"></use>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
    </>
    );
}
