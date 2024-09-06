import React, { useEffect, useState } from "react";
import axios from "axios";

const TOKEN = localStorage.getItem("authToken");
const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

function LevelDropdown({ value, onChange }) {
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLevels = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/common/levels`,
                    HEADER
                );
                setLevels(response.data.data); // Assuming the API returns a list of levels
                setLoading(false);
            } catch (error) {
                console.error("Error fetching levels:", error);
                setLoading(false);
            }
        };

        fetchLevels();
    }, []);

    return (
        <select
            className="form-control"
            name="level_id"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={loading}
        >
            <option value="">Select Level</option>
            {levels.map((level) => (
                <option key={level.id} value={level.id}>
                    {level.name}
                </option>
            ))}
        </select>
    );
}

export default LevelDropdown;
