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
