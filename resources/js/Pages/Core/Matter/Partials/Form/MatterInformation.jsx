import ClientDropdown from "@/Components/Dropdowns/ClientDropdown";
import DepartmentDropdown from "@/Components/Dropdowns/DepartmentDropdown";
import TaskDropdown from "@/Components/Dropdowns/TaskDropdown";
import React, { useState } from "react";
import { createMatter } from "@/Helpers/Api/MatterApi";
import { router } from "@inertiajs/react";

function MatterInformation({ formData, handleChange }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await createMatter(formData);
            if (response.status === 201) {
                router.get(`${response.data.data.id}`);
            } else {
                setError("Failed to create matter. Please try again.");
            }
        } catch (error) {
            setError("An error occurred while creating the matter.");
        } finally {
            setLoading(false);

        }
    };

    return (
        <>
            <h5 className="f-w-600">Matter Information</h5>
            <p>Fill up the following information</p>
            <form className="row g-3 needs-validation basic-form" noValidate onSubmit={handleSubmit}>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="name">
                        Matter<span className="text-danger">*</span>
                    </label>
                    <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter matter name"
                        name="name"
                        defaultValue={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="code">
                        Code<span className="text-danger">*</span>
                    </label>
                    <input
                        className="form-control"
                        id="code"
                        type="text"
                        placeholder="Enter code"
                        name="code"
                        defaultValue={formData.code}
                        onChange={handleChange}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="started_at">
                        Start Date
                    </label>
                    <input
                        className="form-control"
                        id="started_at"
                        type="date"
                        placeholder="Enter start date"
                        name="started_at"
                        defaultValue={formData.started_at}
                        onChange={handleChange}
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="task">
                        Task
                    </label>
                    <TaskDropdown
                        taskId={formData.task_id}
                        onChange={(value) => handleChange({ target: { name: "task_id", value } })}
                    />
                    <div className="invalid-feedback">Please select a valid task.</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="department">
                        Department
                    </label>
                    <DepartmentDropdown
                        selectedDepartment={formData.department_id}
                        onChange={(value) => handleChange({ target: { name: "department_id", value } })}
                    />
                    <div className="invalid-feedback">Please select a valid department.</div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="chooseClient">
                        Choose Client
                    </label>
                    <ClientDropdown
                        clientId={formData.client_id}
                        setClientId={(value) => handleChange({ target: { name: "client_id", value } })}
                    />
                    <div className="invalid-feedback">Please select a valid client.</div>
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="description">
                        Other Notes
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        placeholder="Enter your description..."
                        name="description"
                        defaultValue={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? "Saving..." : "Proceed to Next"}
                        <i className="fa-solid fa-truck proceed-next pe-2"> </i>
                    </button>
                </div>
            </form>
        </>
    );
}

export default MatterInformation;
