import React from "react";
import Table from "@/Components/Table";
import { deleteCity } from "@/Helpers/Api/CityApi";


function CityTable({ cities, pagination, onPageChange }) {
    const columns = ["Id", "District", "City", "Action"];

    const columnData = ["id", "district.name_en", "name_en"];

    const actions = {
        show: "cities.show",
        delete: deleteCity,   
    };

    return (
        <Table
            data={cities}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default CityTable;
