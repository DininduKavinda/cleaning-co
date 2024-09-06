import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import LevelDropdown from "@/Components/LevelDropdown";
import CountryDropdown from "@/Components/CountryDropdown";
import ProvinceDropdown from "@/Components/ProvinceDropdown";
import DistrictDropdown from "@/Components/DistrictDropdown";
import CityDropdown from "@/Components/CityDropdown";
import DepartmentDropdown from "@/Components/DepartmentDropdown"; // Assuming you have this component

function SearchBox({
    onLevelSearch,
    onCountrySearch,
    onProvinceSearch,
    onDistrictSearch,
    onCitySearch,
    onDepartmentSearch,
    onNicSearch,
    onInitialSearch,
    onFullNameSearch,
    onDobSearch,
    onMobileSearch,
    onCivilStatusSearch,
    onActiveSearch,
}) {
    const [searchFields, setSearchFields] = useState({
        level_id: "",
        country_id: "",
        province_id: "",
        district_id: "",
        city_id: "",
        department_id: "",
        nic: "",
        initial: "",
        full_name: "",
        dob: "",
        mobile: "",
        civil_status: "",
        active: "",
    });

    const handleFieldChange = (field, value) => {
        setSearchFields((prevFields) => ({
            ...prevFields,
            [field]: value,
        }));

        switch (field) {
            case "level_id":
                onLevelSearch(value);
                break;
            case "country_id":
                onCountrySearch(value);
                break;
            case "province_id":
                onProvinceSearch(value);
                break;
            case "district_id":
                onDistrictSearch(value);
                break;
            case "city_id":
                onCitySearch(value);
                break;
            case "department_id":
                onDepartmentSearch(value);
                break;
            case "nic":
                onNicSearch(value);
                break;
            case "initial":
                onInitialSearch(value);
                break;
            case "full_name":
                onFullNameSearch(value);
                break;
            case "dob":
                onDobSearch(value);
                break;
            case "mobile":
                onMobileSearch(value);
                break;
            case "civil_status":
                onCivilStatusSearch(value);
                break;
            case "active":
                onActiveSearch(value);
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
                                            searchFields.active === ""
                                                ? "active"
                                                : ""
                                        }`}
                                        id="top-home-tab"
                                        data-bs-toggle="tab"
                                        href="#top-home"
                                        role="tab"
                                        aria-controls="top-home"
                                        aria-selected={
                                            searchFields.active === ""
                                        }
                                        onClick={() =>
                                            handleFieldChange("active", "")
                                        }
                                    >
                                        <i data-feather="target"></i>All
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            searchFields.active === "1"
                                                ? "active"
                                                : ""
                                        }`}
                                        id="profile-top-tab"
                                        data-bs-toggle="tab"
                                        href="#top-profile"
                                        role="tab"
                                        aria-controls="top-profile"
                                        aria-selected={
                                            searchFields.active === "1"
                                        }
                                        onClick={() =>
                                            handleFieldChange("active", "1")
                                        }
                                    >
                                        <i data-feather="info"></i>Active
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            searchFields.active === "0"
                                                ? "active"
                                                : ""
                                        }`}
                                        id="contact-top-tab"
                                        data-bs-toggle="tab"
                                        href="#top-contact"
                                        role="tab"
                                        aria-controls="top-contact"
                                        aria-selected={
                                            searchFields.active === "0"
                                        }
                                        onClick={() =>
                                            handleFieldChange("active", "0")
                                        }
                                    >
                                        <i data-feather="check-circle"></i>
                                        Inactive
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 d-md-block d-none">
                            <Link
                                className="btn btn-primary d-flex align-items-center"
                                href={route("staff.create")}
                            >
                                {" "}
                                <i data-feather="plus-square"></i>Create New{" "}
                            </Link>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-md-3">
                                <label>Level</label>
                                <LevelDropdown
                                    value={searchFields.level_id}
                                    onChange={(value) =>
                                        handleFieldChange("level_id", value)
                                    }
                                />
                            </div>

                            <div className="col-md-3">
                                <label>NIC</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by NIC..."
                                    value={searchFields.nic}
                                    onChange={(e) =>
                                        handleFieldChange("nic", e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Initial</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by initial..."
                                    value={searchFields.initial}
                                    onChange={(e) =>
                                        handleFieldChange(
                                            "initial",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by full name..."
                                    value={searchFields.full_name}
                                    onChange={(e) =>
                                        handleFieldChange(
                                            "full_name",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>DOB</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={searchFields.dob}
                                    onChange={(e) =>
                                        handleFieldChange("dob", e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Mobile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by mobile..."
                                    value={searchFields.mobile}
                                    onChange={(e) =>
                                        handleFieldChange(
                                            "mobile",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <label>Civil Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by civil status..."
                                    value={searchFields.civil_status}
                                    onChange={(e) =>
                                        handleFieldChange(
                                            "civil_status",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Country</label>
                                <CountryDropdown
                                    value={searchFields.country_id}
                                    onChange={(value) =>
                                        handleFieldChange("country_id", value)
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Province</label>
                                <ProvinceDropdown
                                    country_id={searchFields.country_id}
                                    value={searchFields.province_id}
                                    onChange={(value) =>
                                        handleFieldChange("province_id", value)
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>District</label>
                                <DistrictDropdown
                                    province_id={searchFields.province_id}
                                    value={searchFields.district_id}
                                    onChange={(value) =>
                                        handleFieldChange("district_id", value)
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>City</label>
                                <CityDropdown
                                    district_id={searchFields.district_id}
                                    value={searchFields.city_id}
                                    onChange={(value) =>
                                        handleFieldChange("city_id", value)
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Department</label>
                                <DepartmentDropdown
                                    value={searchFields.department_id}
                                    onChange={(value) =>
                                        handleFieldChange(
                                            "department_id",
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
