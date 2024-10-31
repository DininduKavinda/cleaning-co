import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavigationTabs from "./Partials/Form/NavigationTabs";
import MatterInformation from "./Partials/Form/MatterInformation";
import LocationAndContact from "./Partials/Form/LocationAndContact";
import Files from "./Partials/Form/Files";
import Access from "./Partials/Form/Access";
import MatterDetails from "./Partials/Form/MatterDetails";

function Edit({ auth }) {

    const [formData, setFormData] = useState({
        name: "",
        getComputedStyle: "",
        started_at: "",
        task: "",
        department: "",
        chooseClient: "",
        description : "",
        otherNotes: "",
        matterType: "",
        customerName: "",
        customerNIC: "",
        customerPhone: "",
        country: "",
        province: "",
        district: "",
        city: "",
        address: "",
        areaRadius: "",
        fileName: "",
        fileNotes: "",
        fileStatus: "",
        fileUpload: null,
        permittedTo: "",
        permittedOn: "",
        accessNotes: "",
    });



    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log("Form Data:", formData);
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
    };

    return (
        <AuthenticatedLayout
            client={auth.client}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Client
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Edit Profile</h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Users</li>
                                <li className="breadcrumb-item active">
                                    Edit Profile
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-no-border pb-0">
                        <h3>Shipping form</h3>
                        <p className="mt-1 mb-0">Fill up your true details and next proceed.</p>
                    </div>
                    <div className="card-body">
                        <div className="row shopping-wizard">
                            <div className="col-12">
                                <div className="row shipping-form g-3">
                                    <div className="col-xl-8 shipping-border">
                                        <div className="row">
                                            <div className="col-12">
                                                <NavigationTabs />
                                            </div>
                                            <div className="col-12">
                                                <div className="tab-content dark-field shipping-content" id="cart-options-tabContent">
                                                    <div className="tab-pane fade show active" id="bill-wizard" role="tabpanel" aria-labelledby="bill-wizard-tab">
                                                        <MatterInformation
                                                            formData={formData}
                                                            handleChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="tab-pane fade shipping-wizard" id="ship-wizard" role="tabpanel" aria-labelledby="ship-wizard-tab">
                                                        <LocationAndContact
                                                            formData={formData}
                                                            handleChange={handleChange}

                                                        />
                                                    </div>
                                                    <div className="tab-pane fade shipping-wizard" id="payment-wizard" role="tabpanel" aria-labelledby="payment-wizard-tab">
                                                        <Files
                                                            formData={formData}
                                                            handleChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="tab-pane fade shipping-wizard finish-wizard1" id="finish-wizard" role="tabpanel" aria-labelledby="finish-wizard-tab">
                                                        <Access
                                                            formData={formData}
                                                            handleChange={handleChange}
                                                            handleSubmit={handleSubmit}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <MatterDetails formData={formData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Edit;
