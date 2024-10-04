import React, { useEffect, useState } from "react";
import axios from "axios";
import { getDepartments } from "@/Helpers/Api/DepartmentApi";

const TOKEN = localStorage.getItem("authToken");
const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

function DepartmentDropdown({ value, onChange }) {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await getDepartments();
                setDepartments(response.data.data); // Assuming the API returns a list of departments
                setLoading(false);
            } catch (error) {
                console.error("Error fetching departments:", error);
                setLoading(false);
            }
        };

        fetchDepartments();
    }, []);

    return (
        <select
            className="form-control"
            value={value}
            name="department_id"
            onChange={(e) => onChange(e.target.value)}
            disabled={loading}
        >
            <option value="">Select Department</option>
            {departments.map((department) => (
                <option key={department.id} value={department.id}>
                    {department.name}
                </option>
            ))}
        </select>
    );
}

export default DepartmentDropdown;
