import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import TaskDropdown from "@/Components/TaskDropdown";
import ClientDropdown from "@/Components/ClientDropdown";
import StaffDropdown from "@/Components/StaffDropdown";
import Approved_byDropdown from "@/Components/StaffDropdown";

function SearchBox({
    onSearch,
    onActiveSearch,
    onTaskSearch,
    onClientSearch,
    onApproved_bySearch,
    onStaffSearch,
    onDepartmentSearch,
    onCodeSearch,
    onStartedAtSearch,
    onEndedAtSearch,
    onStatusSearch,
}) {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [started_at, setStartedAt] = useState("");
    const [ended_at, setEndedAt] = useState("");
    const [status, setStatus] = useState("");
    const [active, setActive] = useState("");
    const [location, setLocation] = useState({
        task_id: null,
        client_id: null,
        staff_id: null,
        approved_by_id: null,
        department_id: null,
    });

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        onSearch(value);
    };

    const handleCodeChange = (e) => {
        const value = e.target.value;
        setCode(value);
        onCodeSearch(value);
    };



    const handleStartedAtChange = (e) => {
        const value = e.target.value;
        setStartedAt(value);
        onStartedAtSearch(value);
    };

    const handleEndedAtChange = (e) => {
        const value = e.target.value;
        setEndedAt(value);
        onEndedAtSearch(value);
    };

    const handleStatusChange = (e) => {
        const value = e.target.value;
        setStatus(value);
        onStatusSearch(value);
    };

    const handleActiveChange = (e) => {
        const value = e.target.value;
        setActive(value);
        onActiveSearch(value);
    };

    const handleLocationChange = (field, value) => {
        setLocation((prevLocation) => ({
            ...prevLocation,
            [field]: value,
        }));
        switch (field) {
            case "task_id":
                onTaskSearch(value);
                break;
            case "client_id":
                onClientSearch(value);
                break;
            case "staff_id":
                onStaffSearch(value);
                break;
            case "approved_by":
                onApproved_bySearch(value);
                break;
            case "department_id":
                onDepartmentSearch(value);
                break;
            default:
                break;
        }
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
                            <div className="form-group mb-0 me-0"></div>
                            <Link
                                className="btn btn-primary d-flex align-items-center"
                                href={route("matters.create")}
                            >
                                {" "}
                                <i data-feather="plus-square"></i>Create New{" "}
                            </Link>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-md-6  mt-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name..."
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>

                            <div className="col-md-6  mt-3">
                                <label>Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by code..."
                                    value={code}
                                    onChange={handleCodeChange}
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={started_at}
                                    onChange={handleStartedAtChange}
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={ended_at}
                                    onChange={handleEndedAtChange}
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <label>Task</label>
                                <TaskDropdown
                                    taskId={location.task_id}
                                    setTaskId={(value) =>
                                        handleLocationChange("task_id", value)
                                    }
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <label>Status</label>
                                <select
                                    className="form-control"
                                    value={status}
                                    onChange={handleStatusChange}
                                >
                                    <option value="">Select status</option>
                                    <option value="1">Approved</option>
                                    <option value="2">Declined</option>
                                    <option value="2">Pending</option>
                                    <option value="2">New</option>
                                </select>
                            </div>

                            <div className="col-md-4 mt-3">
                                <label>Client</label>
                                <ClientDropdown
                                    taskId={location.task_id}
                                    clientId={location.client_id}
                                    setClientId={(value) =>
                                        handleLocationChange("client_id", value)
                                    }
                                />
                            </div>

                            <div className="col-md-4 mt-3">
                                <label>Staff</label>
                                <StaffDropdown
                                    clientId={location.client_id}
                                    staffId={location.staff_id}
                                    setStaffId={(value) =>
                                        handleLocationChange("staff_id", value)
                                    }
                                />
                            </div>

                            <div className="col-md-4 mt-3">
                                <label>Approved_by</label>
                                <Approved_byDropdown
                                    staffId={location.staff_id}
                                    approved_byId={location.approved_by_id}
                                    setApproved_byId={(value) =>
                                        handleLocationChange(
                                            "approved_by_id",
                                            value
                                        )
                                    }
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
