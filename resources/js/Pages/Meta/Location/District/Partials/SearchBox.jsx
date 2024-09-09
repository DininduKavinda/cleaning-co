import ProvinceDropdown from "@/Components/ProvinceDropdown";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

function SearchBox({ onSearch, onProvinceSearch }) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState({
        province_id: null,
    });

    const handleLocationChange = (field, value) => {
        setLocation((prevLocation) => ({
            ...prevLocation,
            [field]: value,
        }));
        switch (field) {
            case "province_id":
                onProvinceSearch(value);
                break;
            default:
                break;
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        onSearch(value);
    };

    return (
        <>
            <div className="col-md-12 project-list">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 d-md-block d-none">
                            <Link
                                className="btn btn-primary d-flex align-items-center"
                                href={route("districts.create")}
                            >
                                <i data-feather="plus-square"></i>Create New
                                Province
                            </Link>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <label>Province Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by District name..."
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label>Province</label>
                                <ProvinceDropdown
                                    provinceId={location.province_id}
                                    setProvinceId={(value) =>
                                        handleLocationChange(
                                            "province_id",
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
