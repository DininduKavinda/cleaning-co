import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

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
    const [countries, setCountries] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const [nic, setNic] = useState("");

    // Fetch countries data from API
    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/location/countries"
            );
            setCountries(response.data.data);
        };
        fetchCountries();
    }, []);

    // Fetch provinces data based on selected country
    useEffect(() => {
        if (selectedCountry) {
            const fetchProvinces = async () => {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/location/provinces?country_id[eq]=${selectedCountry.value}`
                );
                setProvinces(response.data.data);
            };
            fetchProvinces();
        }
    }, [selectedCountry]);

    // Fetch cities data based on selected province
    useEffect(() => {
        if (selectedProvince) {
            const fetchCities = async () => {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/location/cities?province_id[eq]=${selectedProvince.value}`
                );
                setCities(response.data.data);
            };
            fetchCities();
        }
    }, [selectedProvince]);

    // Fetch districts data based on selected city
    useEffect(() => {
        if (selectedCity) {
            const fetchDistricts = async () => {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/location/districts?city_id[eq]=${selectedCity.value}`
                );
                setDistricts(response.data.data);
            };
            fetchDistricts();
        }
    }, [selectedCity]);

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

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        onCountrySearch(selectedOption ? selectedOption.value : "");
    };

    const handleProvinceChange = (selectedOption) => {
        setSelectedProvince(selectedOption);
        onProvinceSearch(selectedOption ? selectedOption.value : "");
    };

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        onCitySearch(selectedOption ? selectedOption.value : "");
    };

    const handleDistrictChange = (selectedOption) => {
        setSelectedDistrict(selectedOption);
        onDistrictSearch(selectedOption ? selectedOption.value : "");
    };



    const handleNicChange = (e) => {
        const value = e.target.value;
        setNic(value);
        onNicSearch(value);
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
                                <Select
                                    options={countries.map((country) => ({
                                        value: country.id,
                                        label: country.country_name,
                                    }))}
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    placeholder="Select Country"
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <label>Province</label>
                                <Select
                                    options={provinces.map((province) => ({
                                        value: province.id,
                                        label: province.name_en,
                                    }))}
                                    value={selectedProvince}
                                    onChange={handleProvinceChange}
                                    placeholder="Select Province"
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <label>City</label>
                                <Select
                                    options={cities.map((city) => ({
                                        value: city.id,
                                        label: city.name_en,
                                    }))}
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    placeholder="Select City"
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <label>District</label>
                                <Select
                                    options={districts.map((district) => ({
                                        value: district.id,
                                        label: district.name_en,
                                    }))}
                                    value={selectedDistrict}
                                    onChange={handleDistrictChange}
                                    placeholder="Select District"
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
