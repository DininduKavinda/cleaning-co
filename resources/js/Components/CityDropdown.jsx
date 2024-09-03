// components/CityDropdown.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const CityDropdown = ({ districtId, setCityId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCities = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/location/cities?name_en[like]=${inputValue}&district_id[eq]=${districtId}`);
            const cities = response.data.data.map((city) => ({
                value: city.id,
                label: city.name_en,
            }));
            setOptions(cities);
        } catch (error) {
            console.error('Error fetching cities:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (inputValue) => {
        if (inputValue) {
            fetchCities(inputValue);
        } else {
            setOptions([]);
        }
    };

    const handleChange = (selectedOption) => {
        setCityId(selectedOption ? selectedOption.value : null);
    };

    return (
        <Select
            placeholder="Select City"
            isLoading={isLoading}
            onInputChange={handleInputChange}
            options={options}
            onChange={handleChange}
            isClearable
            cacheOptions
            isDisabled={!districtId}
        />
    );
};

export default CityDropdown;
