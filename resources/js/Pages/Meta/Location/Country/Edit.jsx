import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import { createCountry, getCountryById, updateCountry } from "@/Helpers/Api/CountryApi";
import BootstrapToaster from "@/Components/BootstrapToaster";

function CountryForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.country?.id;
    const [toastData, setToastData] = useState({ type: "", message: "", title: "" });
    const {
        data: country,
        setData: setCountry,
        put,
        post,
        reset,
    } = useForm({
        country_name: "",
        iso_code: "",
        phone_code: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchCountry();
        }
    }, [id]);

    const fetchCountry = async () => {
        try {
            const response = await getCountryById(id);
            const countryData = response.data.data;
            setCountry({
                country_name: countryData.country_name,
                iso_code: countryData.iso_code,
                phone_code: countryData.phone_code,
                user_id: countryData.user_id,
            });
        } catch (error) {
            console.error("Error fetching country data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCountry({ ...country, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isEditing) {
               response = await updateCountry(id, country);
            } else {
              response =  await createCountry(country);
            }
            if (response.status === 201) {
                setToastData({
                    type: "success",
                    message: "success.",
                    title: "Success",
                });
            }
            else{
                setToastData({
                    type: "error",
                    message: response.data.message,
                    title: "error",
                });
            }
        } catch (error) {
            console.error("Error saving country data:", error);
        }
    };



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Country" : "Create Country"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing ? "Edit Country" : "Create Country"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Countries</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit Country"
                                        : "Create Country"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-country">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? country.country_name
                                            : "New Country"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Country Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="country_name"
                                                value={country.country_name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                ISO Code
                                            </label>
                                            <input
                                                className="form-control"
                                                name="iso_code"
                                                value={country.iso_code}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Phone Code
                                            </label>
                                            <input
                                                className="form-control"
                                                name="phone_code"
                                                value={country.phone_code}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-footer">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                {isEditing
                                                    ? "Update Country"
                                                    : "Create Country"}
                                            </button>
                                        </div>
                                    </form>
                                    {toastData.message && <BootstrapToaster type={toastData.type} message={toastData.message} title={toastData.title} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default CountryForm;
