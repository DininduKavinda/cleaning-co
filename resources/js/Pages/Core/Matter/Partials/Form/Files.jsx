
import React from "react";

function Files({ formData, handleChange }) {
    return (
        <div>
            <h5 className="f-w-600">Files</h5>
            <div className="payment-info-wrapper">
                <div className="row shipping-method g-3">
                    <div className="col-12">
                        <div className="card-wrapper pay-info">
                            <form className="row g-3 needs-validation basic-form" noValidate>
                                <div className="col-md-12">
                                    <label className="form-label" htmlFor="fileName">File Name</label>
                                    <input
                                        className="form-control"
                                        id="fileName"
                                        type="text"
                                        required
                                        placeholder="Enter file name"
                                        name="fileName"
                                        defaultValue={formData.fileName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="fileNotes">Notes</label>
                                    <textarea
                                        className="form-control"
                                        id="fileNotes"
                                        rows="3"
                                        placeholder="Enter your notes..."
                                        name="fileNotes"
                                        defaultValue={formData.fileNotes}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="col-sm-3">
                                    <label className="form-label" htmlFor="fileStatus">Status</label>
                                    <select
                                        className="form-select"
                                        id="fileStatus"
                                        name="fileStatus"
                                        defaultValue={formData.fileStatus}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option defaultValue="">Select Status</option>
                                        <option defaultValue="active">Active</option>
                                        <option defaultValue="inactive">Inactive</option>
                                        <option defaultValue="pending">Pending</option>
                                    </select>
                                    <div className="invalid-feedback">Please select a valid status.</div>
                                </div>
                                <div className="col-sm-9">
                                    <label className="form-label" htmlFor="fileUpload">Upload Documentation</label>
                                    <input
                                        className="form-control"
                                        id="fileUpload"
                                        type="file"
                                        aria-label="file example"
                                        required
                                        name="fileUpload"
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">Invalid file selected.</div>
                                </div>
                                <div className="col-12 text-end">
                                    <button className="btn btn-primary">Proceed to Next<i className="fa-solid fa-truck proceed-next pe-2"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Files;
