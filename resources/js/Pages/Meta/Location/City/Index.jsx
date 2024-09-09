import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getCities } from "@/Helpers/Api/CityApi"; // Update API call to fetch cities

function Index({ auth }) {
    const [cities, setCities] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [districtQuery, setDistrictQuery] = useState("");
    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });
    // console.log(districtQuery);
    const fetchCities = async (page = 1) => {
        try {
            const params = [];
            if (searchQuery || districtQuery) {
                params.push(`name_en[like]=${searchQuery}`);
                if (districtQuery != "") {
                    params.push(`district_id[eq]=${districtQuery}`);
                }
            }

            const queryString = params.length > 0 ? `&${params.join("&")}` : "";

            const response = await getCities(page, queryString); // Fetch cities data from API
            setCities(response.data.data);
            // console.log(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error(
                "There was an error fetching the city data!",
                error
            );
        }
    };

    useEffect(() => {
        fetchCities();
    }, [ districtQuery,searchQuery,]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleDistrictSearch = (district) => setDistrictQuery(district);

    const handlePageChange = (page) => {
        fetchCities(page);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Cities
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Cities</h2>
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
                    onDistrictSearch={handleDistrictSearch}
                />
                <Table
                    cities={cities}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
