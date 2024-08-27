import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Default Dashboard</h2>
                            <p className="mb-0 text-title-gray">
                                Welcome back! Let’s start from where you left.
                            </p>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="index.html">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">Dashboard</li>
                                <li className="breadcrumb-item active">
                                    Default
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid default-dashboard">
                <div className="row">
                    <div className="col-xl-4 proorder-xxl-1 col-sm-6 box-col-6">
                        <div className="card welcome-banner">
                            <div className="card-header p-0 card-no-border">
                                <div className="welcome-card">
                                    <img
                                        className="w-100 img-fluid"
                                        src="theme/assets/images/dashboard-1/welcome-bg.png"
                                        alt=""
                                    />
                                    <img
                                        className="position-absolute img-1 img-fluid"
                                        src="theme/assets/images/dashboard-1/img-1.png"
                                        alt=""
                                    />
                                    <img
                                        className="position-absolute img-2 img-fluid"
                                        src="theme/assets/images/dashboard-1/img-2.png"
                                        alt=""
                                    />
                                    <img
                                        className="position-absolute img-3 img-fluid"
                                        src="theme/assets/images/dashboard-1/img-3.png"
                                        alt=""
                                    />
                                    <img
                                        className="position-absolute img-4 img-fluid"
                                        src="theme/assets/images/dashboard-1/img-4.png"
                                        alt=""
                                    />
                                    <img
                                        className="position-absolute img-5 img-fluid"
                                        src="theme/assets/images/dashboard-1/img-5.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-center">
                                    <h1>
                                        Hello, Amirreza{" "}
                                        <img
                                            src="theme/assets/images/dashboard-1/hand.png"
                                            alt=""
                                        />
                                    </h1>
                                </div>
                                <p>
                                    {" "}
                                    Welcome back! Let’s start from where you
                                    left.
                                </p>
                                <div className="d-flex align-center justify-content-between">
                                    <Link
                                        className="btn btn-pill btn-primary"
                                        href=""
                                    >
                                        Whats New!
                                    </Link>
                                    <span>
                                        <svg className="stroke-icon">
                                            <use href="theme/assets/svg/icon-sprite.svg#watch"></use>
                                        </svg>{" "}
                                        11:14 AM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xxl-3 col-xl-4 proorder-xxl-2 col-sm-6 box-col-6">
                        <div className="card earning-card">
                            <div className="card-header pb-0 card-no-border">
                                <div className="header-top">
                                    <h3>Earnings Trend </h3>
                                    <div className="dropdown">
                                        <button
                                            className="btn dropdown-toggle"
                                            id="userdropdown3"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Monthly
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userdropdown3"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Weekly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Monthly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Yearly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pb-0">
                                <div className="d-flex align-center gap-3">
                                    <h2>$4,875</h2>
                                    <span className="text-primary">
                                        36.28%
                                        <svg className="stroke-icon stroke-primary">
                                            <use href="theme/assets/svg/icon-sprite.svg#arrow-down"></use>
                                        </svg>
                                    </span>
                                </div>
                                <div id="earnings-chart"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 proorder-xxl-7 col-lg-12 box-col-12">
                        <div className="card job-card">
                            <div className="card-header pb-0 card-no-border">
                                <div className="header-top">
                                    <h3>Job Today</h3>
                                    <div>
                                        <p>
                                            Wednesday 6, <span>Dec 2022</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-2">
                                <ul className="d-flex align-center justify-content-center gap-3">
                                    <li>
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 bg-light-primary">
                                                <svg className="stroke-icon">
                                                    <use href="theme/assets/svg/icon-sprite.svg#job-bag"></use>
                                                </svg>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3>40</h3>
                                                <p>Total Jobs </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 bg-light-secondary">
                                                <svg className="stroke-icon">
                                                    <use href="theme/assets/svg/icon-sprite.svg#employees"></use>
                                                </svg>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3>30</h3>
                                                <p>Employees</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 bg-light-warning">
                                                <svg className="stroke-icon">
                                                    <use href="theme/assets/svg/icon-sprite.svg#hours-work"></use>
                                                </svg>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3>40</h3>
                                                <p>Hours of work</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="table-responsive theme-scrollbar">
                                    <table
                                        className="table display"
                                        style="width:100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Time </th>
                                                <th>Job </th>
                                                <th>Company</th>
                                                <th className="text-center">
                                                    Employee{" "}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>10:AM</td>
                                                <td>Maintenace</td>
                                                <td>Apple Inc.</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/user/1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6>
                                                                Michele Ronaldo
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>07:AM</td>
                                                <td>General</td>
                                                <td>Hewlett packard</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/user/2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6>
                                                                Naomi watson
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03:AM</td>
                                                <td>Cleaning</td>
                                                <td>Microsoft</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/user/3.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6>Dann Petty</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8 proorder-xxl-8 col-lg-12 col-md-6 box-col-7">
                        <div className="card">
                            <div className="card-header card-no-border pb-0">
                                <h3>Transition History</h3>
                            </div>
                            <div className="card-body transaction-history pt-0">
                                <div className="table-responsive theme-scrollbar">
                                    <table
                                        className="table display table-bordernone"
                                        id="transaction"
                                        style="width:100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Invoice No.</th>
                                                <th>Credit/Debit</th>
                                                <th>Date/Time</th>
                                                <th className="text-center">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/icon/1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link href="product-page.html">
                                                                <h6>
                                                                    Samsung TV
                                                                </h6>
                                                            </Link>
                                                            <p>Item Sold</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> #px0101</td>
                                                <td className="text-success">
                                                    + $3460
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <h6>Jan 25</h6>
                                                            <p>08:35:65</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/icon/2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link href="product-page.html">
                                                                <h6>
                                                                    Spring Bed
                                                                </h6>
                                                            </Link>
                                                            <p>Bought item</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> #rf304f</td>
                                                <td className="text-danger">
                                                    - $910
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <h6>Feb 20</h6>
                                                            <p>12:35:00 </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/icon/3.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link href="product-page.html">
                                                                <h6>
                                                                    Long Dress
                                                                </h6>
                                                            </Link>
                                                            <p>Bought item</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> #dnj480</td>
                                                <td className="text-success">
                                                    + $4380
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <h6>Oct 25</h6>
                                                            <p>04:39:08</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-warning border-light-warning text-warning">
                                                        Pending
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/icon/4.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link href="product-page.html">
                                                                <h6>
                                                                    Phillip
                                                                    Lightbulb
                                                                </h6>
                                                            </Link>
                                                            <p>Item Sold</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> #g189d0</td>
                                                <td className="text-success">
                                                    + $246
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <h6>Dec 25</h6>
                                                            <p>08:35:65</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-danger border-light-danger text-danger">
                                                        Canceled
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/icon/5.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link href="product-page.html">
                                                                <h6>
                                                                    Sofa Hauga
                                                                </h6>
                                                            </Link>
                                                            <p>Item Sold</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> #31d8fs</td>
                                                <td className="text-danger">
                                                    - $220
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <h6>Jan 25</h6>
                                                            <p>10:20:87</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src="theme/assets/images/dashboard-1/icon/6.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link href="product-page.html">
                                                                <h6>
                                                                    Apple iMac
                                                                    19”
                                                                </h6>
                                                            </Link>
                                                            <p>Item Sold</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> #g5384h</td>
                                                <td className="text-success">
                                                    + $983
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <h6>Feb 05</h6>
                                                            <p>10:49:50</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 proorder-xxl-9 col-md-6 box-col-5">
                        <div className="card">
                            <div className="card-header card-no-border pb-0">
                                <div className="header-top">
                                    <h3>Audit log</h3>
                                    <div className="dropdown icon-dropdown">
                                        <button
                                            className="btn"
                                            id="userdropdown4"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userdropdown4"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Weekly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Monthly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Yearly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body audit-log">
                                <ul>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-success">
                                            <img
                                                src="theme/assets/images/dashboard-1/icon/checked.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>
                                                    Route P204_salesfores
                                                    created
                                                </h6>
                                            </Link>
                                            <p>Andre Sluczka</p>
                                        </div>
                                        <span>2 hours</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-warning">
                                            <img
                                                src="theme/assets/images/dashboard-1/icon/danger.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>
                                                    R304_salesforece undeployed
                                                </h6>
                                            </Link>
                                            <p>Fabian Beliza</p>
                                        </div>
                                        <span>4 hours </span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-danger">
                                            <img
                                                src="theme/assets/images/dashboard-1/icon/cancel.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>
                                                    R304_salesforece failed...
                                                </h6>
                                            </Link>
                                            <p>Michael Ganatra</p>
                                        </div>
                                        <span>10 Jun</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-success">
                                            <img
                                                src="theme/assets/images/dashboard-1/icon/checked.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>
                                                    New environment DEV created
                                                </h6>
                                            </Link>
                                            <p>Wade Warren</p>
                                        </div>
                                        <span>22 Jun </span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-success">
                                            <img
                                                src="theme/assets/images/dashboard-1/icon/checked.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>
                                                    Project salesforce created
                                                </h6>
                                            </Link>
                                            <p>Bessie Cooper</p>
                                        </div>
                                        <span>10 july </span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-warning">
                                            <img
                                                src="theme/assets/images/dashboard-1/icon/danger.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>
                                                    G202_Salesforce undeployed
                                                </h6>
                                            </Link>
                                            <p>Andre Sluczka</p>
                                        </div>
                                        <span>22 Jun </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 proorder-xxl-3 col-md-6 box-col-6">
                        <div className="card">
                            <div className="card-header card-no-border pb-0">
                                <div className="header-top">
                                    <h3>Total Investment</h3>
                                    <div className="dropdown icon-dropdown">
                                        <button
                                            className="btn"
                                            id="userdropdown5"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userdropdown5"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Weekly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Monthly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Yearly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body investment-card">
                                <div id="investment"></div>
                                <ul className="d-flex align-center justify-content-center">
                                    <li className="text-center">
                                        <p className="mb-0">Total</p>
                                        <h6>$45,9760</h6>
                                    </li>
                                    <li className="text-center">
                                        <p className="mb-0">Monthly</p>
                                        <h6>$12,263</h6>
                                    </li>
                                    <li className="text-center">
                                        <p className="mb-0">Daily</p>
                                        <h6>$32600</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 proorder-xxl-12 col-md-6 box-col-6">
                        <div className="card">
                            <div className="card-header card-no-border pb-0">
                                <div className="header-top">
                                    <h3>Latest Activity</h3>
                                    <div className="dropdown icon-dropdown">
                                        <button
                                            className="btn"
                                            id="userdropdown6"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userdropdown6"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Weekly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Monthly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Yearly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body latest-activity">
                                <ul>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-light-primary border-light-primary">
                                            <svg className="stroke-icon stroke-primary">
                                                <use href="theme/assets/svg/icon-sprite.svg#box"></use>
                                            </svg>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>Added new repository</h6>
                                            </Link>
                                            <p>Fabpot/symfony-docker</p>
                                        </div>
                                        <span>2 hours</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-light-warning border-light-warning">
                                            <svg className="stroke-icon stroke-warning">
                                                <use href="theme/assets/svg/icon-sprite.svg#dolar"></use>
                                            </svg>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>Added new work</h6>
                                            </Link>
                                            <p>Private Contributions</p>
                                        </div>
                                        <span>4 hours</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-light-danger border-light-danger">
                                            <svg className="stroke-icon stroke-danger">
                                                <use href="theme/assets/svg/icon-sprite.svg#round-right"></use>
                                            </svg>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>Review</h6>
                                            </Link>
                                            <p>Reviewed repositories</p>
                                        </div>
                                        <span>10 Jun </span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-light-primary border-light-primary">
                                            <svg className="stroke-icon stroke-primary">
                                                <use href="theme/assets/svg/icon-sprite.svg#pie-chart"></use>
                                            </svg>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>Upload documents</h6>
                                            </Link>
                                            <p>Development Startup</p>
                                        </div>
                                        <span>22 Jun </span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-light-warning border-light-warning">
                                            <svg className="stroke-icon stroke-warning">
                                                <use href="theme/assets/svg/icon-sprite.svg#globe"></use>
                                            </svg>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>Opened issue</h6>
                                            </Link>
                                            <p>Private Contributions</p>
                                        </div>
                                        <span>10 july </span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-light-danger border-light-danger">
                                            <svg className="stroke-icon stroke-none">
                                                <use href="theme/assets/svg/icon-sprite.svg#box-user"></use>
                                            </svg>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>Customer added by @jhon</h6>
                                            </Link>
                                            <p>Fabpot/symfony-docker</p>
                                        </div>
                                        <span>26 Jun</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <div className="flex-shrink-0 bg-light-primary border-light-primary">
                                            <svg className="stroke-icon stroke-primary">
                                                <use href="theme/assets/svg/icon-sprite.svg#work-bag"></use>
                                            </svg>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link href="product-page.html">
                                                <h6>Added new work</h6>
                                            </Link>
                                            <p>Contributions repositories</p>
                                        </div>
                                        <span>22 Jun</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 proorder-xxl-6 box-col-12">
                        <div className="card growthcard">
                            <div className="card-header card-no-border pb-0">
                                <div className="header-top">
                                    <h3>Monthly Revenue Growth</h3>
                                    <ul
                                        className="simple-wrapper nav nav-pills"
                                        id="myTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                href="#yearly"
                                                role="tab"
                                                aria-selected="true"
                                            >
                                                Yearly
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                id="profile-tabs"
                                                data-bs-toggle="tab"
                                                href="#monthly"
                                                role="tab"
                                                aria-selected="false"
                                            >
                                                Monthly
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                id="contact-tab"
                                                data-bs-toggle="tab"
                                                href="#weekly"
                                                role="tab"
                                                aria-selected="false"
                                            >
                                                Weekly
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body pb-0">
                                <div id="growth-chart"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-5 proorder-xxl-4 col-md-6 box-col-6">
                        <div className="card">
                            <div className="card-header card-no-border pb-0">
                                <div className="header-top">
                                    <h3>Top Users</h3>
                                    <div className="dropdown icon-dropdown">
                                        <button
                                            className="btn"
                                            id="userdropdown7"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userdropdown7"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Weekly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Monthly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Yearly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body top-user pt-2">
                                <ul>
                                    <li className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 comman-round">
                                                <img
                                                    src="theme/assets/images/dashboard-1/user/01.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <h6>Alice Goodwin</h6>
                                                </Link>
                                                <p>
                                                    <svg className="stroke-icon">
                                                        <use href="theme/assets/svg/icon-sprite.svg#map-icon"></use>
                                                    </svg>
                                                    Texas
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn bg-light-success border-light-success text-success">
                                            Completed
                                        </button>
                                        <span>$250.00</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 comman-round">
                                                <img
                                                    src="theme/assets/images/dashboard-1/user/02.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <h6>Smith Lovell</h6>
                                                </Link>
                                                <p>
                                                    <svg className="stroke-icon">
                                                        <use href="theme/assets/svg/icon-sprite.svg#map-icon"></use>
                                                    </svg>
                                                    Texas
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn bg-light-success border-light-success text-success">
                                            Completed
                                        </button>
                                        <span>$682.00</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 comman-round">
                                                <img
                                                    src="theme/assets/images/dashboard-1/user/03.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <h6>Jones Brooks</h6>
                                                </Link>
                                                <p>
                                                    <svg className="stroke-icon">
                                                        <use href="theme/assets/svg/icon-sprite.svg#map-icon"></use>
                                                    </svg>
                                                    Texas
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn bg-light-warning border-light-warning text-warning">
                                            Pending
                                        </button>
                                        <span>$387.00</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 comman-round">
                                                <img
                                                    src="theme/assets/images/dashboard-1/user/04.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <h6>Brown Acum</h6>
                                                </Link>
                                                <p>
                                                    <svg className="stroke-icon">
                                                        <use href="theme/assets/svg/icon-sprite.svg#map-icon"></use>
                                                    </svg>
                                                    Texas
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn bg-light-danger border-light-danger text-danger">
                                            Canceled
                                        </button>
                                        <span>$355.00</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 comman-round">
                                                <img
                                                    src="theme/assets/images/dashboard-1/user/05.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <h6>Evans Mayo</h6>
                                                </Link>
                                                <p>
                                                    <svg className="stroke-icon">
                                                        <use href="theme/assets/svg/icon-sprite.svg#map-icon"></use>
                                                    </svg>
                                                    Texas
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn bg-light-success border-light-success text-success">
                                            Completed
                                        </button>
                                        <span>$584.00</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 comman-round">
                                                <img
                                                    src="theme/assets/images/dashboard-1/user/06.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <h6>Wilson Pipes</h6>
                                                </Link>
                                                <p>
                                                    <svg className="stroke-icon">
                                                        <use href="theme/assets/svg/icon-sprite.svg#map-icon"></use>
                                                    </svg>
                                                    Texas
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn bg-light-success border-light-success text-success">
                                            Completed
                                        </button>
                                        <span>$954.00</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <div className="flex-shrink-0 comman-round">
                                                <img
                                                    src="theme/assets/images/dashboard-1/user/07.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Link href="#">
                                                    <h6>Alice Pindar</h6>
                                                </Link>
                                                <p>
                                                    <svg className="stroke-icon">
                                                        <use href="theme/assets/svg/icon-sprite.svg#map-icon"></use>
                                                    </svg>
                                                    Texas
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn bg-light-danger border-light-danger text-danger">
                                            Canceled
                                        </button>
                                        <span>$756.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 proorder-xxl-10 col-md-6 box-col-6">
                        <div className="card height-equal">
                            <div className="card-header card-no-border pb-0">
                                <div className="header-top">
                                    <h3>News & Update</h3>
                                    <div className="dropdown icon-dropdown">
                                        <button
                                            className="btn"
                                            id="userdropdown8"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userdropdown8"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Weekly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Monthly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Yearly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body news-update">
                                <ul>
                                    <li className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="img-fluid"
                                                src="theme/assets/images/dashboard-1/news-update/1.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            {" "}
                                            <Link href="private-chat.html">
                                                <h6>
                                                    Google project apply reviwe
                                                </h6>
                                            </Link>
                                            <p className="text-truncate">
                                                Today’s news
                                                headlines,Breaking...
                                            </p>
                                        </div>
                                        <span>2 hours</span>
                                    </li>
                                    <li className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="img-fluid"
                                                src="theme/assets/images/dashboard-1/news-update/2.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            {" "}
                                            <Link href="private-chat.html">
                                                <h6>Business logo create</h6>
                                            </Link>
                                            <p className="text-truncate">
                                                check out the latest news
                                                from...
                                            </p>
                                        </div>
                                        <span>4 hours</span>
                                    </li>
                                    <li className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="img-fluid"
                                                src="theme/assets/images/dashboard-1/news-update/3.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            {" "}
                                            <Link href="private-chat.html">
                                                <h6>
                                                    Business project research
                                                </h6>
                                            </Link>
                                            <p className="text-truncate">
                                                News in english: get all
                                                Breaking...
                                            </p>
                                        </div>
                                        <span>6 hours</span>
                                    </li>
                                    <li className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="img-fluid"
                                                src="theme/assets/images/dashboard-1/news-update/4.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            {" "}
                                            <Link href="private-chat.html">
                                                <h6>
                                                    Recruitment in it Department
                                                </h6>
                                            </Link>
                                            <p className="text-truncate">
                                                Technology and indian business
                                            </p>
                                        </div>
                                        <span>8 hours</span>
                                    </li>
                                    <li className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="img-fluid"
                                                src="theme/assets/images/dashboard-1/news-update/5.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            {" "}
                                            <Link href="private-chat.html">
                                                <h6>
                                                    Business project research
                                                </h6>
                                            </Link>
                                            <p className="text-truncate">
                                                Contributions private
                                                repositories
                                            </p>
                                        </div>
                                        <span>1 hours</span>
                                    </li>
                                    <li className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="img-fluid"
                                                src="theme/assets/images/dashboard-1/news-update/6.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            {" "}
                                            <Link href="private-chat.html">
                                                <h6>
                                                    Submit riverfront project
                                                </h6>
                                            </Link>
                                            <p className="text-truncate">
                                                check out the latest news
                                                from...
                                            </p>
                                        </div>
                                        <span>3 hours</span>
                                    </li>
                                    <li className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="img-fluid"
                                                src="theme/assets/images/dashboard-1/news-update/7.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            {" "}
                                            <Link href="private-chat.html">
                                                <h6>Added new work</h6>
                                            </Link>
                                            <p className="text-truncate">
                                                Today’s news
                                                headlines,Breaking...
                                            </p>
                                        </div>
                                        <span>5 hours</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 proorder-xxl-11 col-md-6 box-col-6">
                        <div className="card height-equal">
                            <div className="card-header card-no-border pb-0">
                                <div className="header-top">
                                    <h3>Total Invest</h3>
                                    <div className="dropdown icon-dropdown">
                                        <button
                                            className="btn"
                                            id="userdropdown1"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userdropdown1"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Weekly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Monthly
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Yearly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body total-invest">
                                <div className="row">
                                    <div className="col-6 col-md-12 income-chart">
                                        <div
                                            className="Incomechrt"
                                            id="Incomechrt"
                                        ></div>
                                    </div>
                                    <div className="col-6 col-md-12 invest-content text-center">
                                        <svg className="stroke-icon">
                                            <use href="theme/assets/svg/icon-sprite.svg#chart-invest"></use>
                                        </svg>
                                        <div className="btn btn-pill btn-primary">
                                            {" "}
                                            <span> </span>Live
                                        </div>
                                        <p className="mb-0 des-title">
                                            This Invest Cycle
                                        </p>
                                        <h3>7,48,000</h3>
                                        <p className="description-title">
                                            Current Balance this invest cycle
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-7 proorder-xxl-5 col-md-6 box-col-6">
                        <div className="card height-equal">
                            <div className="card-header card-no-border pb-0">
                                <h3>Manage Invoice</h3>
                            </div>
                            <div className="card-body pt-0 manage-invoice filled-checkbox">
                                <div className="table-responsive theme-scrollbar">
                                    <table
                                        className="table display table-bordernone mt-0"
                                        id="manage-invoice"
                                        style="width:100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check checkbox checkbox-solid-primary">
                                                        <input
                                                            className="form-check-input"
                                                            id="solid"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="solid"
                                                        >
                                                            {" "}
                                                        </label>
                                                    </div>
                                                </th>
                                                <th>Client</th>
                                                <th>Date</th>
                                                <th>Payment</th>
                                                <th>Id No</th>
                                                <th>Amount</th>
                                                <th className="text-center">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check checkbox checkbox-solid-primary">
                                                        <input
                                                            className="form-check-input"
                                                            id="solid1"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="solid1"
                                                        >
                                                            {" "}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="list-products.html">
                                                        <h6 className="f-w-600">
                                                            Comelune
                                                        </h6>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        27 Nov
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        Private
                                                    </h6>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        9605
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        $2,500
                                                    </h6>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check checkbox checkbox-solid-primary">
                                                        <input
                                                            className="form-check-input"
                                                            id="solid2"
                                                            type="checkbox"
                                                            checked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="solid2"
                                                        >
                                                            {" "}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="list-products.html">
                                                        <h6 className="f-w-600">
                                                            Diagnos
                                                        </h6>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        30 Nov
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        Bill Payment
                                                    </h6>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        9548
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        $4,560
                                                    </h6>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check checkbox checkbox-solid-primary">
                                                        <input
                                                            className="form-check-input"
                                                            id="solid3"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="solid3"
                                                        >
                                                            {" "}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="list-products.html">
                                                        <h6 className="f-w-600">
                                                            Saturan
                                                        </h6>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        27 Jun
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        Bill Payment
                                                    </h6>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        2950
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        $4,876
                                                    </h6>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-warning border-light-warning text-warning">
                                                        Pending
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check checkbox checkbox-solid-primary">
                                                        <input
                                                            className="form-check-input"
                                                            id="solid4"
                                                            type="checkbox"
                                                            checked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="solid4"
                                                        >
                                                            {" "}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="list-products.html">
                                                        <h6 className="f-w-600">
                                                            Williams
                                                        </h6>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        16 Dec
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        Private
                                                    </h6>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        1552
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        $3,876
                                                    </h6>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-danger border-light-danger text-danger">
                                                        Canceled
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check checkbox checkbox-solid-primary">
                                                        <input
                                                            className="form-check-input"
                                                            id="solid5"
                                                            type="checkbox"
                                                            checked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="solid5"
                                                        >
                                                            {" "}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="list-products.html">
                                                        <h6 className="f-w-600">
                                                            Davies
                                                        </h6>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        10 Nov
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        Bill Payment
                                                    </h6>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        9567
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        $2,986
                                                    </h6>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check checkbox checkbox-solid-primary">
                                                        <input
                                                            className="form-check-input"
                                                            id="solid6"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="solid6"
                                                        >
                                                            {" "}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="list-products.html">
                                                        <h6 className="f-w-600">
                                                            Smith
                                                        </h6>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        30 Nov
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        Private
                                                    </h6>
                                                </td>
                                                <td>
                                                    <p className="f-w-600">
                                                        8992
                                                    </p>
                                                </td>
                                                <td>
                                                    <h6 className="f-w-600">
                                                        $6,789
                                                    </h6>
                                                </td>
                                                <td className="text-end">
                                                    <div className="btn bg-light-success border-light-success text-success">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
