import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const ProvinceDropdown = ({ countryId, setProvinceId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (countryId) {
            fetchProvinces('');
        } else {
            setOptions([]);
        }
    }, [countryId]);

    const fetchProvinces = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://cleaning-co.test/api/location/provinces`, {
                params: {
                    'name_en[like]': inputValue,
                    'country_id[eq]': countryId,
                },
            });
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
        fetchProvinces(inputValue);
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
            // isDisabled={!countryId}
        />
    );
};

export default ProvinceDropdown;
