import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getStaffs } from "@/Helpers/Api/StaffApi";

function Index({ auth }) {
    const [staffs, setStaffs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [activeQuery, setActiveQuery] = useState("");
    const [countryQuery, setCountryQuery] = useState("");
    const [provinceQuery, setProvinceQuery] = useState("");
    const [cityQuery, setCityQuery] = useState("");
    const [districtQuery, setDistrictQuery] = useState("");

    const [nicQuery, setNicQuery] = useState("");

    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });

    const fetchStaffs = async (page = 1) => {
        try {
            const params = [];

            if (
                searchQuery ||
                activeQuery ||
                countryQuery ||
                provinceQuery ||
                cityQuery ||
                districtQuery ||
                nicQuery
            ) {
                params.push(`full_name[like]=${searchQuery}`);
                if (activeQuery != "") {
                    params.push(`active[eq]=${activeQuery}`);
                }
                if (countryQuery != "") {
                    params.push(`country_id[eq]=${countryQuery}`);
                }
                if (provinceQuery != "") {
                    params.push(`province_id[eq]=${provinceQuery}`);
                }
                if (cityQuery != "") {
                    params.push(`city_id[eq]=${cityQuery}`);
                }
                if (districtQuery != "") {
                    params.push(`district_id[eq]=${districtQuery}`);
                }
                params.push(`nic[like]=${nicQuery}`);
            }
            const queryString = params.length > 0 ? `&${params.join("&")}` : "";

            const response = await getStaffs(page, queryString);

            setStaffs(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error(
                "There was an error fetching the staff data!",
                error
            );
        }
    };

    useEffect(() => {
        fetchStaffs();
    }, [
        searchQuery,

        activeQuery,
        countryQuery,
        provinceQuery,
        cityQuery,
        districtQuery,

        nicQuery,
    ]);

    const handleSearch = (query) => setSearchQuery(query);
    const handleActiveSearch = (active) => setActiveQuery(active);
    const handleCountrySearch = (country) => setCountryQuery(country);
    const handleProvinceSearch = (province) => setProvinceQuery(province);
    const handleCitySearch = (city) => setCityQuery(city);
    const handleDistrictSearch = (district) => setDistrictQuery(district);

    const handleNicSearch = (nic) => setNicQuery(nic);

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
                    onSearch={handleSearch}
                    onActiveSearch={handleActiveSearch}
                    onCountrySearch={handleCountrySearch}
                    onProvinceSearch={handleProvinceSearch}
                    onCitySearch={handleCitySearch}
                    onDistrictSearch={handleDistrictSearch}
                    onNicSearch={handleNicSearch}
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
