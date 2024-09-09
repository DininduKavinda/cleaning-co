import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getDistricts } from "@/Helpers/Api/DistrictApi"; // Update API call to fetch districts

function Index({ auth }) {
    const [districts, setDistricts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [provinceQuery, setProvinceQuery] = useState("");
    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });
    // console.log(provinceQuery);
    const fetchDistricts = async (page = 1) => {
        try {
            const params = [];
            if (searchQuery || provinceQuery) {
                params.push(`name_en[like]=${searchQuery}`);
                if (provinceQuery != "") {
                    params.push(`province_id[eq]=${provinceQuery}`);
                }
            }

            const queryString = params.length > 0 ? `&${params.join("&")}` : "";

            const response = await getDistricts(page, queryString); // Fetch districts data from API
            setDistricts(response.data.data);
            // console.log(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error(
                "There was an error fetching the district data!",
                error
            );
        }
    };

    useEffect(() => {
        fetchDistricts();
    }, [ provinceQuery,searchQuery,]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleProvinceSearch = (province) => setProvinceQuery(province);

    const handlePageChange = (page) => {
        fetchDistricts(page);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Districts
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Districts</h2>
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
                    onSearch={handleSearch}
                    onProvinceSearch={handleProvinceSearch}
                />
                <Table
                    districts={districts}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
