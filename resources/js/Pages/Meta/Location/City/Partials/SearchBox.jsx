import DistrictDropdown from "@/Components/Dropdowns/DistrictDropdown";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

function SearchBox({ onSearch, onDistrictSearch }) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState({
        district_id: null,
    });

    const handleLocationChange = (field, value) => {
        setLocation((prevLocation) => ({
            ...prevLocation,
            [field]: value,
        }));
        switch (field) {
            case "district_id":
                onDistrictSearch(value);
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
                                href={route("citie_webs.create")}
                            >
                                <i data-feather="plus-square"></i>Create New
                                District
                            </Link>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <label>District Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by City name..."
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label>District</label>
                                <DistrictDropdown
                                    districtId={location.district_id}
                                    setDistrictId={(value) =>
                                        handleLocationChange(
                                            "district_id",
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
