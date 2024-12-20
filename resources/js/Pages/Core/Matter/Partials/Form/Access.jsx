
import React from "react";

function Access({ formData, handleChange, handleSubmit }) {
    return (
        <div>
            <h5 className="f-w-600">Access</h5>
            <form className="row g-3 needs-validation basic-form" noValidate onSubmit={handleSubmit}>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="permittedTo">Permitted to<span className="text-danger">*</span></label>
                    <select
                        className="form-select"
                        id="permittedTo"
                        name="permittedTo"
                        defaultValue={formData.permittedTo}
                        onChange={handleChange}
                        required
                    >
                        <option defaultValue="">Select Permission</option>
                        <option defaultValue="admin">Admin</option>
                        <option defaultValue="editor">Editor</option>
                        <option defaultValue="viewer">Viewer</option>
                    </select>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-sm-6">
                    <label className="form-label" htmlFor="permittedOn">Permitted on<span className="text-danger">*</span></label>
                    <input
                        className="form-control"
                        id="permittedOn"
                        type="date"
                        name="permittedOn"
                        defaultValue={formData.permittedOn}
                        onChange={handleChange}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="accessNotes">Other Notes</label>
                    <textarea
                        className="form-control"
                        id="accessNotes"
                        rows="3"
                        placeholder="Enter your notes..."
                        name="accessNotes"
                        defaultValue={formData.accessNotes}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary">Submit<i className="fa-solid fa-truck proceed-next pe-2"></i></button>
                </div>
            </form>
        </div>
    );
}

export default Access;
