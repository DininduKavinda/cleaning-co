import React, { useEffect, useState } from "react";
import axios from "axios";

const TOKEN = localStorage.getItem("authToken");
const HEADER = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

function ItemTypeDropdown({ value, onChange }) {
    const [item_types, setItemTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItemTypes = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/common/itemTypes`,HEADER);
                setItemTypes(response.data.data); // Assuming the API returns a list of item_types
                setLoading(false);
            } catch (error) {
                console.error("Error fetching item_types:", error);
                setLoading(false);
            }
        };

        fetchItemTypes();
    }, []);

    return (
        <select
            className="form-control"
            value={value}
            name="item_type_id"
            onChange={(e) => onChange(e.target.value)}
            disabled={loading}
        >
            <option value="">Select ItemType</option>
            {item_types.map((item_type) => (
                <option key={item_type.id} value={item_type.id}>
                    {item_type.name}
                </option>
            ))}
        </select>
    );
}

export default ItemTypeDropdown;