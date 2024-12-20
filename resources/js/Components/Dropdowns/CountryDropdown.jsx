import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { searchCountries } from "@/Helpers/Api/CountryApi";

const CountryDropdown = ({ countryId, setCountryId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (countryId) {
            fetchInitialCountry(countryId);
        }
    }, [countryId]);

    const fetchCountries = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await searchCountries({
                "country_name[like]" : inputValue,
            });
            const countries = response.data.data.map((country) => ({
                value: country.id,
                label: country.country_name,
            }));
            setOptions(countries);
        } catch (error) {
            console.error("Error fetching countries:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchInitialCountry = async (id) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `http://16.171.64.154/api/location/countries/${id}`
            );
            const country = response.data.data;
            setOptions([{ value: country.id, label: country.country_name }]);
        } catch (error) {
            console.error("Error fetching initial country:", error);
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
            value={options.find((option) => option.value === countryId) || null}
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
