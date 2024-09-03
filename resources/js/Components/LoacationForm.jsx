// components/LocationForm.jsx
import React, { useState, useEffect } from "react";
import CountryDropdown from "./CountryDropdown";
import ProvinceDropdown from "./ProvinceDropdown";
import DistrictDropdown from "./DistrictDropdown";
import CityDropdown from "./CityDropdown";

const LocationForm = () => {
    const [countryId, setCountryId] = useState(null);
    const [provinceId, setProvinceId] = useState(null);
    const [districtId, setDistrictId] = useState(null);
    const [cityId, setCityId] = useState(null);

    return (
        <>
            <div className="col-sm-6">
                <div className="mb-3">
                      <label className="form-label">Select Country</label>
                    <CountryDropdown setCountryId={setCountryId} />
                </div>
            </div>
            <div className="col-sm-6">
                {" "}
                <div className="mb-3">
                      <label className="form-label">Select Province</label>
                    <ProvinceDropdown
                        countryId={countryId}
                        setProvinceId={setProvinceId}
                    />
                </div>{" "}
            </div>
            <div className="col-sm-6">
                {" "}
                <div className="mb-3">
                      <label className="form-label">Select District</label>
                    <DistrictDropdown
                        provinceId={provinceId}
                        setDistrictId={setDistrictId}
                    />
                </div>{" "}
            </div>
            <div className="col-sm-6">
                {" "}
                <div className="mb-3">
                      <label className="form-label">Select City</label>
                    <CityDropdown
                        districtId={districtId}
                        setCityId={setCityId}
                    />
                </div>{" "}
            </div>
        </>
    );
};

export default LocationForm;
