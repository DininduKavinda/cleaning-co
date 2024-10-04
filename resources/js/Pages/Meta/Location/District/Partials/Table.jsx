import React from "react";
import Table from "@/Components/Table";
import { deleteCity } from "@/Helpers/Api/CityApi";
import { deleteDistrict } from "@/Helpers/Api/DistrictApi";


function DistrictTable({ districts, pagination, onPageChange }) {
    const columns = ["Id", "Province", "District", "Action"];

    const columnData = ["id", "province.name_en", "name_en"];

    const actions = {
        show: "districts.show",
        delete: deleteDistrict,   
    };

    return (
        <Table
            data={districts}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default DistrictTable;
