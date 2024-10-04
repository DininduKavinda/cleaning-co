import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { searchDistricts } from "@/Helpers/Api/DistrictApi";

const DistrictDropdown = ({ provinceId, setDistrictId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (provinceId) {
            fetchDistricts("");
        } else {
            setOptions([]);
        }
    }, [provinceId]);

    const fetchDistricts = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await searchDistricts({
                "name_en[like]": inputValue,
                "province_id[eq]": provinceId,
            });
            const districts = response.data.data.map((district) => ({
                value: district.id,
                label: district.name_en,
            }));
            setOptions(districts);
        } catch (error) {
            console.error("Error fetching districts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (inputValue) => {
        fetchDistricts(inputValue);
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
            // isDisabled={!provinceId}
        />
    );
};

export default DistrictDropdown;
