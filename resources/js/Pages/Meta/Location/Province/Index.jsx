import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getProvinces } from "@/Helpers/Api/ProvinceApi"; // Update API call to fetch provinces

function Index({ auth }) {
    const [provinces, setProvinces] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [countryQuery, setCountryQuery] = useState("");
    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });
    // console.log(countryQuery);
    const fetchProvinces = async (page = 1) => {
        try {
            const params = [];
            if (searchQuery || countryQuery) {
                params.push(`name_en[like]=${searchQuery}`);
                if (countryQuery != "") {
                    params.push(`country_id[eq]=${countryQuery}`);
                }
            }

            const queryString = params.length > 0 ? `&${params.join("&")}` : "";

            const response = await getProvinces(page, queryString); // Fetch provinces data from API
            setProvinces(response.data.data);
            // console.log(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error(
                "There was an error fetching the province data!",
                error
            );
        }
    };

    useEffect(() => {
        fetchProvinces();
    }, [ countryQuery,searchQuery,]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleCountrySearch = (country) => setCountryQuery(country);

    const handlePageChange = (page) => {
        fetchProvinces(page);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Provinces
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Provinces</h2>
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
                    onCountrySearch={handleCountrySearch}
                />
                <Table
                    provinces={provinces}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
