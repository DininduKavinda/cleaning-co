import { Link } from "@inertiajs/react";
import React, { useState } from "react";

function SearchBox({ onSearch, onEmailSearch, onActiveSearch, permissions }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [active, setActive] = useState("");

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        onSearch(value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        onEmailSearch(value);
    };

    const handleActiveChange = (e) => {
        const value = e.target.value;
        setActive(value);
        onActiveSearch(value);
    };

    return (
        <>
            <div className="col-md-12 project-list">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <ul
                                className="nav nav-tabs border-tab"
                                id="top-tab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            active === "" ? "active" : ""
                                        }`}
                                        id="top-home-tab"
                                        data-bs-toggle="tab"
                                        href="#top-home"
                                        role="tab"
                                        aria-controls="top-home"
                                        aria-selected={active === ""}
                                        onClick={() =>
                                            handleActiveChange({
                                                target: { value: "" },
                                            })
                                        }
                                    >
                                        <i data-feather="target"></i>All
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            active === "1" ? "active" : ""
                                        }`}
                                        id="profile-top-tab"
                                        data-bs-toggle="tab"
                                        href="#top-profile"
                                        role="tab"
                                        aria-controls="top-profile"
                                        aria-selected={active === "1"}
                                        onClick={() =>
                                            handleActiveChange({
                                                target: { value: "1" },
                                            })
                                        }
                                    >
                                        <i data-feather="info"></i>Active
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            active === "0" ? "active" : ""
                                        }`}
                                        id="contact-top-tab"
                                        data-bs-toggle="tab"
                                        href="#top-contact"
                                        role="tab"
                                        aria-controls="top-contact"
                                        aria-selected={active === "0"}
                                        onClick={() =>
                                            handleActiveChange({
                                                target: { value: "0" },
                                            })
                                        }
                                    >
                                        <i data-feather="check-circle"></i>
                                        Inactive
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 d-md-block d-none">
                            {permissions["create user"] ? (
                                <>
                                    <div className="form-group mb-0 me-0"></div>
                                    <Link
                                        className="btn btn-primary d-flex align-items-center"
                                        href={route("users.create")}
                                    >
                                        {" "}
                                        <i data-feather="plus-square"></i>Create
                                        New{" "}
                                    </Link>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name..."
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by email..."
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBox;
