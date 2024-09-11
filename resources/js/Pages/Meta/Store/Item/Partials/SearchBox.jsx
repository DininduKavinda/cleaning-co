import ItemTypeDropdown from "@/Components/ItemTypeDropdown";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

function SearchBox({ onSearch, onItemTypeSearch }) {
    const [name, setName] = useState("");
    const [searchFields, setSearchFields] = useState({
        item_type_id: "",
    });
    const handleFieldChange = (field, value) => {
        setSearchFields((prevFields) => ({
            ...prevFields,
            [field]: value,
        }));
        switch (field) {
            case "item_type_id":
                onItemTypeSearch(value);
                break;
            default:
                break;
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        onSearch(value);
    };

    return (
        <>
            <div className="col-md-12 project-list">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 d-md-block d-none">
                            <Link
                                className="btn btn-primary d-flex align-items-center"
                                href={route("items.create")}
                            >
                                <i data-feather="plus-square"></i>Create New
                                
                            </Link>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <label>Item Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by Item name..."
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label>ItemType</label>
                                <ItemTypeDropdown
                                    value={searchFields.item_type_id}
                                    onChange={(value) =>
                                        handleFieldChange(
                                            "item_type_id",
                                            value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBox;
