import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getUsers } from "@/Helpers/Api/UserApi";

function Index({ auth, permissions }) {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [emailQuery, setEmailQuery] = useState("");
    const [activeQuery, setActiveQuery] = useState("");
    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });

    const fetchUsers = async (page = 1) => {
        try {
            const params = [];
            let url = "";
            if (searchQuery || activeQuery || emailQuery) {
                params.push(`name[like]=${searchQuery}`);
                params.push(`email[like]=${emailQuery}`);
                if (activeQuery.valueOf() !== "") {
                    params.push(`active[eq]=${activeQuery}`);
                }
            }

            if (params.length > 0) {
                url += `&${params.join("&")}`;
            }

            const response = await getUsers(page, url);
            setUsers(response.data.data);
            // console.log(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error("There was an error fetching the user data!", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [searchQuery, emailQuery, activeQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleEmailSearch = (email) => {
        setEmailQuery(email);
    };

    const handleActiveSearch = (active) => {
        setActiveQuery(active);
    };

    const handlePageChange = (page) => {
        fetchUsers(page);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Users
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Users</h2>
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
                    onActiveSearch={handleActiveSearch}
                    onSearch={handleSearch}
                    onEmailSearch={handleEmailSearch}
                    permissions={permissions}
                />
               {permissions['view user'] ? (
                    <Table
                        users={users}
                        pagination={pagination}
                        onPageChange={handlePageChange}
                        permissions={permissions}
                    />
                ) : (
                    <p>You do not have permission to update users.</p>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
