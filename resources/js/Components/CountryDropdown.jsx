// components/CountryDropdown.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const CountryDropdown = ({ setCountryId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCountries = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/location/countries?country_name[like]=${inputValue}`);
            const countries = response.data.data.map((country) => ({
                value: country.id,
                label: country.country_name,
            }));
            setOptions(countries);
        } catch (error) {
            console.error('Error fetching countries:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (inputValue) => {
        if (inputValue) {
            fetchCountries(inputValue);
        } else {
            setOptions([]);
        }
    };

    const handleChange = (selectedOption) => {
        setCountryId(selectedOption ? selectedOption.value : null);
    };

    return (
        <Select
            placeholder="Select Country"
            isLoading={isLoading}
            onInputChange={handleInputChange}
            options={options}
            onChange={handleChange}
            isClearable
            cacheOptions
        />
    );
};

export default CountryDropdown;
