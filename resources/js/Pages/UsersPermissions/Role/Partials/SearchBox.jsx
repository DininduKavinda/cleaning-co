import { Link } from "@inertiajs/react";
import React, { useState } from "react";

function SearchBox() {

    return (
        <>
            <div className="col-md-12 project-list">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6 d-md-block d-none">
                            <div className="form-group mb-0 me-0"></div>
                            <Link className="btn btn-primary d-flex align-items-center" href={route('roles.create')}>
                                {" "}
                                <i data-feather="plus-square"></i>Create New{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBox;
