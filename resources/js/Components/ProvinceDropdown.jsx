// components/ProvinceDropdown.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const ProvinceDropdown = ({ countryId, setProvinceId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProvinces = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/location/provinces?name_en[like]=${inputValue}&country_id[eq]=${countryId}`);
            const provinces = response.data.data.map((province) => ({
                value: province.id,
                label: province.name_en,
            }));
            setOptions(provinces);
        } catch (error) {
            console.error('Error fetching provinces:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (inputValue) => {
        if (inputValue) {
            fetchProvinces(inputValue);
        } else {
            setOptions([]);
        }
    };

    const handleChange = (selectedOption) => {
        setProvinceId(selectedOption ? selectedOption.value : null);
    };

    return (
        <Select
            placeholder="Select Province"
            isLoading={isLoading}
            onInputChange={handleInputChange}
            options={options}
            onChange={handleChange}
            isClearable
            cacheOptions
            isDisabled={!countryId}
        />
    );
};

export default ProvinceDropdown;
