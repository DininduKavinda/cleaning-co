
import React from "react";

function LocationAndContact({ formData, handleChange, latitude, longitude }) {
    return (
        <div>
            <h5 className="f-w-600">Matter Type</h5>
            <div className="row shipping-method g-3">
                <div className="col-sm-6">
                    <div className="card-wrapper border rounded-3 h-100">
                        <div className="form-check radio radio-primary">
                            <input
                                className="form-check-input"
                                id="selfCreate"
                                type="radio"
                                name="matterType"
                                value="selfCreate"
                                checked={formData.matterType === "selfCreate"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label mb-0" htmlFor="selfCreate">Self Create</label>
                        </div>
                        <p>Use this by customers</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card-wrapper border rounded-3 h-100">
                        <div className="form-check radio radio-primary">
                            <input
                                className="form-check-input"
                                id="createForCustomer"
                                type="radio"
                                name="matterType"
                                value="createForCustomer"
                                checked={formData.matterType === "createForCustomer"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label mb-0" htmlFor="createForCustomer">Create for Customer</label>
                        </div>
                        <p>Use this by staff</p>
                    </div>
                </div>

                {/* Conditional Form for Create for Customer */}
                {formData.matterType === "createForCustomer" && (
                    <>
                        <div className="col-sm-4">
                            <label className="form-label" htmlFor="customerName">Name<span className="text-danger">*</span></label>
                            <input
                                className="form-control"
                                id="customerName"
                                type="text"
                                placeholder="Enter customer name"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label" htmlFor="customerNIC">NIC<span className="text-danger">*</span></label>
                            <input
                                className="form-control"
                                id="customerNIC"
                                type="text"
                                placeholder="Enter NIC"
                                name="customerNIC"
                                value={formData.customerNIC}
                                onChange={handleChange}
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label" htmlFor="customerPhone">Phone</label>
                            <input
                                className="form-control"
                                id="customerPhone"
                                type="tel"
                                placeholder="Enter phone number"
                                name="customerPhone"
                                value={formData.customerPhone}
                                onChange={handleChange}
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label" htmlFor="country">Country</label>
                            <select
                                className="form-select"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Country</option>
                                <option value="Africa">Africa</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="UK">U.K</option>
                                <option value="US">U.S</option>
                            </select>
                            <div className="invalid-feedback">Please select a valid country.</div>
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label" htmlFor="province">Province</label>
                            <select
                                className="form-select"
                                id="province"
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Province</option>
                                <option value="Province1">Province1</option>
                                <option value="Province2">Province2</option>
                                <option value="Province3">Province3</option>
                            </select>
                            <div className="invalid-feedback">Please select a valid province.</div>
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label" htmlFor="district">District</label>
                            <select
                                className="form-select"
                                id="district"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select District</option>
                                <option value="District1">District1</option>
                                <option value="District2">District2</option>
                                <option value="District3">District3</option>
                            </select>
                            <div className="invalid-feedback">Please select a valid district.</div>
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label" htmlFor="city">City</label>
                            <select
                                className="form-select"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select City</option>
                                <option value="City1">City1</option>
                                <option value="City2">City2</option>
                                <option value="City3">City3</option>
                            </select>
                            <div className="invalid-feedback">Please select a valid city.</div>
                        </div>
                        <div className="col-12">
                            <label className="form-label" htmlFor="address">Address</label>
                            <textarea
                                className="form-control"
                                id="address"
                                rows="3"
                                placeholder="Enter your address..."
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="col-8">
                            <div ref={mapRef} style={{ height: '500px', width: '100%', borderRadius: '10px' }}></div>
                        </div>
                        <div className="col-4">
                            <label className="form-label" htmlFor="latitude">Latitude</label>
                            <input type="text" className="form-control" id="latitude" name="latitude" value={latitude} readOnly />
                            <br/>
                            <label className="form-label" htmlFor="longitude">Longitude</label>
                            <input type="text" className="form-control" id="longitude" name="longitude" value={longitude} readOnly />
                            <br/>
                            <label className="form-label" htmlFor="areaRadius">Area Radius</label>
                            <input type="number" className="form-control" id="areaRadius" name="areaRadius" value={formData.areaRadius} onChange={handleChange} />
                        </div>
                        <div className="col-12 text-end">
                            <button className="btn btn-primary">Proceed to Next<i className="fa-solid fa-truck proceed-next pe-2"></i></button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LocationAndContact;
