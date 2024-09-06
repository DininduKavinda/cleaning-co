import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getStaffs } from "@/Helpers/Api/StaffApi";

function Index({ auth }) {
    const [staffs, setStaffs] = useState([]);
    const [searchFields, setSearchFields] = useState({
        level_id: "",
        country_id: "",
        province_id: "",
        city_id: "",
        district_id: "",
        department_id: "",
        nic: "",
        initial: "",
        full_name: "",
        dob: "",
        address: "",
        mobile: "",
        civil_status: "",
        active: "",
    });

    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });

    // Mapping of fields to their operators
    const fieldOperators = {
        level_id: "eq",
        country_id: "eq",
        province_id: "eq",
        district_id: "eq",
        city_id: "eq",
        department_id: "eq",
        nic: "eq",
        initial: "like",
        full_name: "like",
        dob: "eq",
        address: "eq",
        mobile: "eq",
        civil_status: "eq",
        active: "eq",
    };

    const fetchStaffs = async (page = 1) => {
        try {
            const params = Object.entries(searchFields)
                .filter(([key, value]) => value !== "")
                .map(([key, value]) => {
                    const operator = fieldOperators[key] || "eq";
                    return `${key}[${operator}]=${encodeURIComponent(value)}`;
                })
                .join("&");

            const queryString = params ? `&${params}` : "";
            const response = await getStaffs(page, queryString);

            setStaffs(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error("There was an error fetching the staff data!", error);
        }
    };

    useEffect(() => {
        fetchStaffs();
    }, [searchFields]);

    const handleFieldChange = (field, value) => {
        setSearchFields((prevFields) => ({
            ...prevFields,
            [field]: value,
        }));
    };

    const handlePageChange = (page) => fetchStaffs(page);

    return (
        <AuthenticatedLayout
            staff={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Staffs
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Staffs</h2>
                            <p className="mb-0 text-title-gray">
                                Welcome back! Let’s start from where you left.
                            </p>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="index.html">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12">
                <SearchBox
                    onLevelSearch={(value) => handleFieldChange("level_id", value)}
                    onCountrySearch={(value) => handleFieldChange("country_id", value)}
                    onProvinceSearch={(value) => handleFieldChange("province_id", value)}
                    onCitySearch={(value) => handleFieldChange("city_id", value)}
                    onDistrictSearch={(value) => handleFieldChange("district_id", value)}
                    onDepartmentSearch={(value) =>
                        handleFieldChange("department_id", value)
                    }
                    onNicSearch={(value) => handleFieldChange("nic", value)}
                    onInitialSearch={(value) => handleFieldChange("initial", value)}
                    onFullNameSearch={(value) => handleFieldChange("full_name", value)}
                    onDobSearch={(value) => handleFieldChange("dob", value)}
                    onMobileSearch={(value) => handleFieldChange("mobile", value)}
                    onCivilStatusSearch={(value) =>
                        handleFieldChange("civil_status", value)
                    }
                    onActiveSearch={(value) => handleFieldChange("active", value)}
                />
                <Table
                    staffs={staffs}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
