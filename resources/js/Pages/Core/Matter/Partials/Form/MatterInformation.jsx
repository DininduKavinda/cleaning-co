// src/Components/Forms/MatterInformation.js

import React from "react";

function MatterInformation({ formData, handleChange }) {
    return (
        <>
            <h5 className="f-w-600">Matter Information</h5>
            <p>Fill up the following information</p>
            <form className="row g-3 needs-validation basic-form" noValidate>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="matterName">Matter<span className="text-danger">*</span></label>
                    <input
                        className="form-control"
                        id="matterName"
                        type="text"
                        placeholder="Enter matter name"
                        name="matterName"
                        value={formData.matterName}
                        onChange={handleChange}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="matterCode">Code<span className="text-danger">*</span></label>
                    <input
                        className="form-control"
                        id="matterCode"
                        type="text"
                        placeholder="Enter code"
                        name="matterCode"
                        value={formData.matterCode}
                        onChange={handleChange}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="startDate">Start Date</label>
                    <input
                        className="form-control"
                        id="startDate"
                        type="date"
                        placeholder="Enter start date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="task">Task</label>
                    <select
                        className="form-select"
                        id="task"
                        name="task"
                        value={formData.task}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Task</option>
                        <option value="Africa">Africa</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="UK">U.K</option>
                        <option value="US">U.S</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid task.</div>
                </div>
                <div className="col-sm-4">
                    <label className="form-label" htmlFor="department">Department</label>
                    <select
                        className="form-select"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid department.</div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="chooseClient">Choose Client</label>
                    <select
                        className="form-select"
                        id="chooseClient"
                        name="chooseClient"
                        value={formData.chooseClient}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Client</option>
                        <option value="Client1">Client1</option>
                        <option value="Client2">Client2</option>
                        <option value="Client3">Client3</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid client.</div>
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="otherNotes">Other Notes</label>
                    <textarea
                        className="form-control"
                        id="otherNotes"
                        rows="3"
                        placeholder="Enter your description..."
                        name="otherNotes"
                        value={formData.otherNotes}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-12 text-end">
                    <a className="btn btn-primary" data-bs-toggle="pill" href="#ship-wizard" role="tab"
                    aria-controls="ship-wizard">Proceed to Next<i className="fa-solid fa-truck proceed-next pe-2"> </i></a>
                </div>
            </form>
        </>
    );
}

export default MatterInformation;
