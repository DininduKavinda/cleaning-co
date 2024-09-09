import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getDepartments } from "@/Helpers/Api/DepartmentApi"; // Update API call to fetch departments

function Index({ auth }) {
    const [departments, setDepartments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });

    const fetchDepartments = async (page = 1) => {
        try {
            let url = "";
            if (searchQuery) {
                url += `&name[like]=${searchQuery}`;
            }

            const response = await getDepartments(page, url); // Fetch departments data from API
            setDepartments(response.data.data);
            // console.log(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error("There was an error fetching the department data!", error);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handlePageChange = (page) => {
        fetchDepartments(page);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Departments
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Departments</h2>
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
                <SearchBox onSearch={handleSearch} />
                <Table
                    departments={departments}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
