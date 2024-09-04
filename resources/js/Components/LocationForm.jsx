import React, { useEffect } from "react";
import CountryDropdown from "./CountryDropdown";
import ProvinceDropdown from "./ProvinceDropdown";
import DistrictDropdown from "./DistrictDropdown";
import CityDropdown from "./CityDropdown";

const LocationForm = ({ client, setClient }) => {
    const { country_id, province_id, district_id, city_id } = client;

    const handleLocationChange = (field, value) => {
        setClient((prevClient) => ({
            ...prevClient,
            [field]: value,
        }));
    };

    return (
        <>
            <div className="col-sm-6">
                <div className="mb-3">
                    <label className="form-label">Select Country</label>
                    <CountryDropdown
                        countryId={country_id}
                        setCountryId={(value) => handleLocationChange('country_id', value)}
                    />
                </div>
            </div>
            <div className="col-sm-6">
                <div className="mb-3">
                    <label className="form-label">Select Province</label>
                    <ProvinceDropdown
                        countryId={country_id}
                        provinceId={province_id}
                        setProvinceId={(value) => handleLocationChange('province_id', value)}
                    />
                </div>
            </div>
            <div className="col-sm-6">
                <div className="mb-3">
                    <label className="form-label">Select District</label>
                    <DistrictDropdown
                        provinceId={province_id}
                        districtId={district_id}
                        setDistrictId={(value) => handleLocationChange('district_id', value)}
                    />
                </div>
            </div>
            <div className="col-sm-6">
                <div className="mb-3">
                    <label className="form-label">Select City</label>
                    <CityDropdown
                        districtId={district_id}
                        cityId={city_id}
                        setCityId={(value) => handleLocationChange('city_id', value)}
                    />
                </div>
            </div>
        </>
    );
};

export default LocationForm;
