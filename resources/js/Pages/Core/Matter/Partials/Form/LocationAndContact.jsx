import React, { useRef, useEffect, useState } from "react";

function LocationAndContact({ formData, handleChange }) {
    const mapRef = useRef(null);
    const [latitude, setLatitude] = useState(6.9209692563737235);
    const [longitude, setLongitude] = useState(79.87755895317827);

    useEffect(() => {

        const initMap = () => {
            if (mapRef.current && window.google) {
                const center = { lat: latitude, lng: longitude };
                const map = new window.google.maps.Map(mapRef.current, {
                    zoom: 9,
                    center: center,
                });


                map.addListener("click", (mapsMouseEvent) => {
                    const latLng = mapsMouseEvent.latLng;
                    setLatitude(latLng.lat());
                    setLongitude(latLng.lng());
                });
            }
        };


        const loadScript = (url, callback) => {
            if (!window.google) {
                const script = document.createElement("script");
                script.src = url;
                script.async = true;
                script.defer = true;
                script.onload = callback;
                document.body.appendChild(script);
            } else {
                callback();
            }
        };

        loadScript(
            `http://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap`,
            initMap
        );
    }, [latitude, longitude]);

    return (
        <div>
            <h5 className="f-w-600">Matter Type</h5>
            <div className="row shipping-method g-3">

                <div className="col-sm-4">
                    <label className="form-label" htmlFor="customerName">Name<span className="text-danger">*</span></label>
                    <input
                        className="form-control"
                        id="customerName"
                        type="text"
                        placeholder="Enter customer name"
                        name="customerName"
                        defaultValue={formData.customerName}
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
                        defaultValue={formData.customerNIC}
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
                        defaultValue={formData.customerPhone}
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
                        defaultValue={formData.country}
                        onChange={handleChange}
                        required
                    >
                        <option defaultValue="">Select Country</option>
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
                        defaultValue={formData.province}
                        onChange={handleChange}
                        required
                    >
                        <option defaultValue="">Select Province</option>
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
                        defaultValue={formData.district}
                        onChange={handleChange}
                        required
                    >
                        <option defaultValue="">Select District</option>
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
                        defaultValue={formData.city}
                        onChange={handleChange}
                        required
                    >
                        <option defaultValue="">Select City</option>
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
                        defaultValue={formData.address}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Map section */}
                <div className="col-8">
                    <div ref={mapRef} style={{ height: '500px', width: '100%', borderRadius: '10px' }}></div>
                </div>

                <div className="col-4">
                    <label className="form-label" htmlFor="latitude">Latitude</label>
                    <input
                        type="text"
                        className="form-control"
                        id="latitude"
                        name="latitude"
                        value={latitude}
                        readOnly
                    />
                    <br />
                    <label className="form-label" htmlFor="longitude">Longitude</label>
                    <input
                        type="text"
                        className="form-control"
                        id="longitude"
                        name="longitude"
                        value={longitude}
                        readOnly
                    />
                    <br />
                    <label className="form-label" htmlFor="areaRadius">Area Radius</label>
                    <input
                        type="number"
                        className="form-control"
                        id="areaRadius"
                        name="areaRadius"
                        defaultValue={formData.areaRadius}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12 text-end">
                    <button className="btn btn-primary">
                        Proceed to Next<i className="fa-solid fa-truck proceed-next pe-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LocationAndContact;
