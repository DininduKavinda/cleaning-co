import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import {
    createDistrict,
    getDistrictById,
    updateDistrict,
} from "@/Helpers/Api/DistrictApi";
import { showToast } from "@/Components/Toastr";
import ProvinceDropdown from "@/Components/ProvinceDropdown";

function DistrictForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.district?.id;

    const {
        data: district,
        setData: setDistrict,
        put,
        post,
        reset,
    } = useForm({
        name_en: "",
        province_id: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchDistrict();
        }
    }, [id]);

    const handleLocationChange = (field, value) => {
        setDistrict((prevClient) => ({
            ...prevClient,
            [field]: value,
        }));
    };

    const fetchDistrict = async () => {
        try {
            const response = await getDistrictById(id);
            const districtData = response.data.data;
            setDistrict({
                name_en: districtData.name_en,
                province_id: districtData.province_id,
            });
        } catch (error) {
            console.error("Error fetching district data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDistrict({ ...district, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateDistrict(id, district);
            } else {
                await createDistrict(district);
            }
        } catch (error) {
            console.error("Error saving district data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit District" : "Create District"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing
                                    ? "Edit District"
                                    : "Create District"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Districts</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit District"
                                        : "Create District"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-district">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? district.district_name
                                            : "New District"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                District Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name_en"
                                                value={district.name_en}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Select Province
                                            </label>
                                            <ProvinceDropdown
                                                provinceId={district.province_id}
                                                setProvinceId={(value) =>
                                                    handleLocationChange(
                                                        "province_id",
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
                                                    ? "Update District"
                                                    : "Create District"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default DistrictForm;
