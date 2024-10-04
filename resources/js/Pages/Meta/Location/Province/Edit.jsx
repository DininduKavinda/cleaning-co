import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import {
    createProvince,
    getProvinceById,
    updateProvince,
} from "@/Helpers/Api/ProvinceApi";
import BootstrapToaster from "@/Components/BootstrapToaster";
import CountryDropdown from "@/Components/CountryDropdown";

function ProvinceForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.province?.id;
    const [toastData, setToastData] = useState({
        type: "",
        message: "",
        title: "",
    });
    const {
        data: province,
        setData: setProvince,
        put,
        post,
        reset,
    } = useForm({
        name_en: "",
        country_id: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchProvince();
        }
    }, [id]);

    const handleLocationChange = (field, value) => {
        setProvince((prevClient) => ({
            ...prevClient,
            [field]: value,
        }));
    };

    const fetchProvince = async () => {
        try {
            const response = await getProvinceById(id);
            const provinceData = response.data.data;
            setProvince({
                name_en: provinceData.name_en,
                country_id: provinceData.country_id,
            });
        } catch (error) {
            console.error("Error fetching province data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProvince({ ...province, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isEditing) {
                response = await updateProvince(id, province);
            } else {
                response = await createProvince(province);
            }
            if (response.status === 201) {
                setToastData({
                    type: "success",
                    message: "success.",
                    title: "Success",
                });
            } else {
                setToastData({
                    type: "error",
                    message: response.data.message,
                    title: "error",
                });
            }
        } catch (error) {
            console.error("Error saving province data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Province" : "Create Province"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing
                                    ? "Edit Province"
                                    : "Create Province"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Provinces</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit Province"
                                        : "Create Province"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-province">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? province.province_name
                                            : "New Province"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Province Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name_en"
                                                value={province.name_en}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Select Country
                                            </label>
                                            <CountryDropdown
                                                countryId={province.country_id}
                                                setCountryId={(value) =>
                                                    handleLocationChange(
                                                        "country_id",
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
                                                    ? "Update Province"
                                                    : "Create Province"}
                                            </button>
                                        </div>
                                    </form>
                                    {toastData.message && (
                                        <BootstrapToaster
                                            type={toastData.type}
                                            message={toastData.message}
                                            title={toastData.title}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default ProvinceForm;
