import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getPermissions } from "@/Helpers/Api/PermissionApi";

function Index({ auth }) {
    const [permissions, setPermissions] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });

    const fetchPermissions = async (page = 1) => {
        try {
            let url = "";
            const params = [];

            if (searchQuery) {
                params.push(`name[like]=${searchQuery}`);
            }

            if (params.length > 0) {
                url += `&${params.join("&")}`;
            }

            const response = await getPermissions(page, url);
            setPermissions(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error(
                "There was an error fetching the permission data!",
                error
            );
        }
    };
    useEffect(() => {
        fetchPermissions();
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const handlePageChange = (page) => {
        fetchPermissions(page);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Permissions
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Permissions</h2>
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
                    permissions={permissions}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
