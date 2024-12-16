import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const CityDropdown = ({ districtId, setCityId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (districtId) {
            fetchCities('');
        } else {
            setOptions([]);
        }
    }, [districtId]);

    const fetchCities = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://16.171.64.154/api/location/cities`, {
                params: {
                    'name_en[like]': inputValue,
                    'district_id[eq]': districtId,
                },
            });
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
        fetchCities(inputValue);
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
            // isDisabled={!districtId}
        />
    );
};

export default CityDropdown;
