import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const StaffDropdown = ({ staffId, setStaffId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const TOKEN = localStorage.getItem("authToken");
    const HEADER = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    };

    useEffect(() => {
        if (staffId) {
            fetchInitialStaff(staffId);
        }
    }, [staffId]);

    const fetchStaffs = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://cleaning-co.test/api/web/staff?full_name[like]=${inputValue}`,HEADER
            );
            const staffs = response.data.data.map((staff) => ({
                value: staff.id,
                label: staff.full_name,
            }));
            setOptions(staffs);
        } catch (error) {
            console.error("Error fetching staffs:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchInitialStaff = async (id) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://cleaning-co.test/api/web/staff/${id}`,HEADER
            );
            const staff = response.data.data;
            setOptions([{ value: staff.id, label: staff.full_name }]);
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
