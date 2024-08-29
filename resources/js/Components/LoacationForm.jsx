// components/LocationForm.jsx
import React, { useState, useEffect } from 'react';
import CountryDropdown from './CountryDropdown';
import ProvinceDropdown from './ProvinceDropdown';
import DistrictDropdown from './DistrictDropdown';
import CityDropdown from './CityDropdown';


const LocationForm = () => {
    const [countryId, setCountryId] = useState(null);
    const [provinceId, setProvinceId] = useState(null);
    const [districtId, setDistrictId] = useState(null);

    return (
        <form>
            <CountryDropdown setCountryId={setCountryId} />
            <ProvinceDropdown countryId={countryId} setProvinceId={setProvinceId} />
            <DistrictDropdown provinceId={provinceId} setDistrictId={setDistrictId} />
            <CityDropdown districtId={districtId} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LocationForm;
