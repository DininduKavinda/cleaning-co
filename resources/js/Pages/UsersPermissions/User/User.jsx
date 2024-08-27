import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function User({ auth }) {
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
                <div className="card overflow-hidden">
                  <div className="card-header card-no-border">
                    <h3>Hoverable Rows With Horizontal Border</h3>
                    <p className="desc mb-0 mt-1"><span>Hoverable row use a className</span><code>table-hover-*.table-border-horizontal-*.border-solid-*</code><span>className.</span></p>
                  </div>
                  <div className="table-responsive signal-table">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Status</th>
                          <th scope="col">Signal Name&#x9;</th>
                          <th scope="col">Security</th>
                          <th scope="col">Stage</th>
                          <th scope="col">Schedule</th>
                          <th scope="col">Team Lead</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td className="d-flex align-items-center">
                            <div className="bg-light-success text-success me-3"><i data-feather="alert-triangle"></i></div><span className="text-success">No Signal</span>
                          </td>
                          <td>Astrid: NE Shared managed</td>
                          <td>Medium</td>
                          <td>Triaged</td>
                          <td>0.33&#x9;</td>
                          <td>Chase Nguyen&#x9;</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td className="d-flex align-items-center">
                            <div className="bg-light-danger text-danger me-3"><i data-feather="alert-triangle"></i></div><span className="text-danger">Offline</span>
                          </td>
                          <td>Cosmo: prod shared ares&#x9;</td>
                          <td>Huge</td>
                          <td>Triaged</td>
                          <td>0.39</td>
                          <td>Brie Furman</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="d-flex align-items-center">
                            <div className="bg-light-primary text-primary me-3"><i data-feather="alert-circle"></i></div><span className="text-primary">Online</span>
                          </td>
                          <td>Phoenix: prod shared lyra-lists&#x9;</td>
                          <td>Minor</td>
                          <td>No Triaged</td>
                          <td>3.12&#x9;</td>
                          <td>Jeremy Lake</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td className="d-flex align-items-center">
                            <div className="bg-light-success text-success me-3"><i data-feather="alert-circle"></i></div><span className="text-success">No Signal</span>
                          </td>
                          <td>Astrid: NE Shared managed</td>
                          <td>Negligible</td>
                          <td>Triaged</td>
                          <td>13.18</td>
                          <td>Angelica Howards</td>
                        </tr>
                        <tr>
                          <th className="border-bottom-0" scope="row">5</th>
                          <td className="border-bottom-0 d-flex align-items-center"><i className="bg-light-danger text-danger me-3"><i data-feather="check-circle"></i></i><span className="text-danger">Online</span></td>
                          <td className="border-bottom-0">Astrid: NE Shared managed</td>
                          <td className="border-bottom-0">Medium</td>
                          <td className="border-bottom-0">No Triaged</td>
                          <td className="border-bottom-0">5.33&#x9;&#x9;</td>
                          <td className="border-bottom-0">Diane Okuma</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
        </AuthenticatedLayout>
    );
}

export default User;
