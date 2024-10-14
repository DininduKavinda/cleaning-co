import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import CountryDropdown from "@/Components/Dropdowns/CountryDropdown";
import ProvinceDropdown from "@/Components/Dropdowns/ProvinceDropdown";
import DistrictDropdown from "@/Components/Dropdowns/DistrictDropdown";
import CityDropdown from "@/Components/Dropdowns/CityDropdown";


function SearchBox({
    onSearch,   
    onActiveSearch,
    onCountrySearch,
    onProvinceSearch,
    onCitySearch,
    onDistrictSearch,
    onNicSearch,
}) {
    const [name, setName] = useState("");
    const [active, setActive] = useState("");
    const [nic, setNic] = useState("");
    const [location, setLocation] = useState({
        country_id: null,
        province_id: null,
        district_id: null,
        city_id: null,
    });

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        onSearch(value);
    };

    const handleActiveChange = (e) => {
        const value = e.target.value;
        setActive(value);
        onActiveSearch(value);
    };

    const handleNicChange = (e) => {
        const value = e.target.value;
        setNic(value);
        onNicSearch(value);
    };

    const handleLocationChange = (field, value) => {
        setLocation((prevLocation) => ({
            ...prevLocation,
            [field]: value,
        }));
        switch (field) {
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
            default:
                break;
        }
    };

    const resetSearch = () => {
        setName("");
        setActive("");
        setNic("");
        setLocation({
            country_id: null,
            province_id: null,
            district_id: null,
            city_id: null,
        });
        onSearch("");
        onActiveSearch("");
        onNicSearch("");
        onCountrySearch("");
        onProvinceSearch("");
        onDistrictSearch("");
        onCitySearch("");
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
                            <div className="col-md-12">
                                <button
                                    className="btn btn-secondary"
                                    onClick={resetSearch}
                                >
                                    Reset
                                </button>
                            </div>
                            <div className="form-group mb-0 me-0"></div>
                            <Link
                                className="btn btn-primary d-flex align-items-center"
                                href={route("clients.create")}
                               
                            >
                                {" "}
                                <i data-feather="plus-square"></i>Create New{" "}
                            </Link>
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
                                <label>NIC</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by NIC..."
                                    value={nic}
                                    onChange={handleNicChange}
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Country</label>
                                <CountryDropdown
                                    countryId={location.country_id}
                                    setCountryId={(value) =>
                                        handleLocationChange(
                                            "country_id",
                                            value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>Province</label>
                                <ProvinceDropdown
                                    countryId={location.country_id}
                                    provinceId={location.province_id}
                                    setProvinceId={(value) =>
                                        handleLocationChange(
                                            "province_id",
                                            value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>District</label>
                                <DistrictDropdown
                                    provinceId={location.province_id}
                                    districtId={location.district_id}
                                    setDistrictId={(value) =>
                                        handleLocationChange(
                                            "district_id",
                                            value
                                        )
                                    }
                                />
                            </div>

                            <div className="col-md-3 mt-3">
                                <label>City</label>
                                <CityDropdown
                                    districtId={location.district_id}
                                    cityId={location.city_id}
                                    setCityId={(value) =>
                                        handleLocationChange("city_id", value)
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
