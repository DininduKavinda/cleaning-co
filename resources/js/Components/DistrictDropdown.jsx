// components/DistrictDropdown.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const DistrictDropdown = ({ provinceId, setDistrictId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDistricts = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/location/districts?name_en[like]=${inputValue}&province_id[eq]=${provinceId}`);
            const districts = response.data.data.map((district) => ({
                value: district.id,
                label: district.name_en,
            }));
            setOptions(districts);
        } catch (error) {
            console.error('Error fetching districts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (inputValue) => {
        if (inputValue) {
            fetchDistricts(inputValue);
        } else {
            setOptions([]);
        }
    };

    const handleChange = (selectedOption) => {
        setDistrictId(selectedOption ? selectedOption.value : null);
    };

    return (
        <Select
            placeholder="Select District"
            isLoading={isLoading}
            onInputChange={handleInputChange}
            options={options}
            onChange={handleChange}
            isClearable
            cacheOptions
            isDisabled={!provinceId}
        />
    );
};

export default DistrictDropdown;
