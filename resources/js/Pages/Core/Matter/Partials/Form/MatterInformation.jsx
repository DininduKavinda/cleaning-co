import React from "react";

function MatterInformation({ formData, handleChange }) {
    return (
        <>
            <h5 className="f-w-600">Matter Information</h5>
            <p>Fill up the following information</p>
            <form className="row g-3 needs-validation basic-form" noValidate>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="matterName">
                        Matter<span className="text-danger">*</span>
                    </label>
                    <input
                        className="form-control"
                        id="matterName"
                        type="text"
                        placeholder="Enter matter name"
                        name="matterName"
                        defaultValue={formData.matterName}
                        onChange={handleChange}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="matterCode">
                        Code<span className="text-danger">*</span>
                    </label>
                    <input
                        className="form-control"
                        id="matterCode"
                        type="text"
                        placeholder="Enter code"
                        name="matterCode"
                        defaultValue={formData.matterCode}
                        onChange={handleChange}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="startDate">
                        Start Date
                    </label>
                    <input
                        className="form-control"
                        id="startDate"
                        type="date"
                        placeholder="Enter start date"
                        name="startDate"
                        defaultValue={formData.startDate}
                        onChange={handleChange}
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="task">
                        Task
                    </label>
                    <select
                        className="form-select"
                        id="task"
                        name="task"
                        defaultValue={formData.task}
                        onChange={handleChange}
                        required
                    >
                        <option defaultValue="">Select Task</option>
                        <option defaultValue="Africa">Africa</option>
                        <option defaultValue="India">India</option>
                        <option defaultValue="Indonesia">Indonesia</option>
                        <option defaultValue="Netherlands">Netherlands</option>
                        <option defaultValue="UK">U.K</option>
                        <option defaultValue="US">U.S</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid task.
                    </div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="department">
                        Department
                    </label>
                    <DepartmentDropdown
                        selectedDepartment={formData.department_id}
                        onChange={(value) =>
                            setDepartment({
                                ...formData,
                                department_id: value,
                            })
                        }
                    />
                    <div className="invalid-feedback">
                        Please select a valid department.
                    </div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="chooseClient">
                        Choose Client
                    </label>
                    <select
                        className="form-select"
                        id="chooseClient"
                        name="chooseClient"
                        defaultValue={formData.chooseClient}
                        onChange={handleChange}
                        required
                    >
                        <option defaultValue="">Select Client</option>
                        <option defaultValue="Client1">Client1</option>
                        <option defaultValue="Client2">Client2</option>
                        <option defaultValue="Client3">Client3</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid client.
                    </div>
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="otherNotes">
                        Other Notes
                    </label>
                    <textarea
                        className="form-control"
                        id="otherNotes"
                        rows="3"
                        placeholder="Enter your description..."
                        name="otherNotes"
                        defaultValue={formData.otherNotes}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-12 text-end">
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="pill"
                        href="#ship-wizard"
                        role="tab"
                        aria-controls="ship-wizard"
                    >
                        Proceed to Next
                        <i className="fa-solid fa-truck proceed-next pe-2"> </i>
                    </a>
                </div>
            </form>
        </>
    );
}

export default MatterInformation;
