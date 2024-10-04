import React from "react";
import Table from "@/Components/Table";
import { deleteCity } from "@/Helpers/Api/CityApi";
import { deleteCountry } from "@/Helpers/Api/CountryApi";


function CountryTable({ countries, pagination, onPageChange }) {
    const columns = ["Id", "Country", "Country Code","Phone Code", "Action"];

    const columnData = ["id",  "country_name", "iso_code","phone_code"];

    const actions = {
        show: "countries.show",
        delete: deleteCountry,   
    };

    return (
        <Table
            data={countries}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default CountryTable;
