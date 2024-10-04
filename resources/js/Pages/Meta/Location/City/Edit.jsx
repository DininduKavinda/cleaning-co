import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import {
    createCity,
    getCityById,
    updateCity,
} from "@/Helpers/Api/CityApi";
import BootstrapToaster from "@/Components/BootstrapToaster";
import DistrictDropdown from "@/Components/DistrictDropdown";

function CityForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.city?.id;
    const [toastData, setToastData] = useState({ type: "", message: "", title: "" });
    const {
        data: city,
        setData: setCity,
        put,
        post,
        reset,
    } = useForm({
        name_en: "",
        district_id: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchCity();
        }
    }, [id]);

    const handleLocationChange = (field, value) => {
        setCity((prevClient) => ({
            ...prevClient,
            [field]: value,
        }));
    };

    const fetchCity = async () => {
        try {
            const response = await getCityById(id);
            const cityData = response.data.data;
            setCity({
                name_en: cityData.name_en,
                district_id: cityData.district_id,
            });
        } catch (error) {
            console.error("Error fetching city data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCity({ ...city, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isEditing) {
              response =   await updateCity(id, city);
            } else {
               response = await createCity(city);
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
            console.error("Error saving city data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit City" : "Create City"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing
                                    ? "Edit City"
                                    : "Create City"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Cities</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit City"
                                        : "Create City"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-city">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? city.city_name
                                            : "New City"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                City Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name_en"
                                                value={city.name_en}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Select District
                                            </label>
                                            <DistrictDropdown
                                                districtId={city.district_id}
                                                setDistrictId={(value) =>
                                                    handleLocationChange(
                                                        "district_id",
                                                        value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="form-footer">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                {isEditing
                                                    ? "Update City"
                                                    : "Create City"}
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

export default CityForm;
