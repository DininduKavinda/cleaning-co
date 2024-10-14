import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { getStaffById, searchStaff } from "@/Helpers/Api/StaffApi";

const StaffDropdown = ({ staffId, setStaffId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (staffId) {
            fetchInitialStaff(staffId);
        }
    }, [staffId]);

    const fetchStaffs = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await searchStaff({
                "full_name[like]": inputValue,
            });
            const staffs = response.data.data.map((staff) => ({
                value: staff.id,
                label: staff.full_name,
            }));

            setOptions((prevOptions) => {

                const updatedOptions = [
                    ...prevOptions,
                    ...staffs.filter((staff) =>
                        prevOptions.every((option) => option.value !== staff.value)
                    ),
                ];
                return updatedOptions;
            });
        } catch (error) {
            console.error("Error fetching staffs:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchInitialStaff = async (id) => {
        setIsLoading(true);
        try {
            const response = await getStaffById(id);
            const staff = response.data.data;
            const initialStaffOption = { value: staff.id, label: staff.full_name };

            setOptions((prevOptions) => {
                // Ensure the selected staff is in the options
                if (!prevOptions.some((option) => option.value === staff.id)) {
                    return [...prevOptions, initialStaffOption];
                }
                return prevOptions;
            });
        } catch (error) {
            console.error("Error fetching initial staff:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (inputValue) => {
        if (inputValue) {
            fetchStaffs(inputValue);
        } else {
            setOptions([]);
        }
    };

    const handleChange = (selectedOption) => {
        setStaffId(selectedOption ? selectedOption.value : null);
    };

    return (
        <Select
            placeholder="Select Staff"
            value={options.find((option) => option.value === staffId) || null}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            options={options}
            onChange={handleChange}
            isClearable
            cacheOptions
        />
    );
};

export default StaffDropdown;
