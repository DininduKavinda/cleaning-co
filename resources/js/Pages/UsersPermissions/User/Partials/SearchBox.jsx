
import React, { useState } from "react";

function SearchBox({ onSearch, onEmailSearch }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        onSearch(value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        onEmailSearch(value);
    };

    return (
        <div className=" mb-4">
            <div className="row">
                <div className="col-md-6">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name..."
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="col-md-6">
                <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by email..."
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
