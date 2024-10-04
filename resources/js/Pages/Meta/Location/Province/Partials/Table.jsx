import React from "react";
import Table from "@/Components/Table";
import { deleteProvince } from "@/Helpers/Api/ProvinceApi";


function ProvinceTable({ provinces, pagination, onPageChange }) {
    const columns = ["Id", "Country", "Province", "Action"];

    const columnData = ["id", "country.country_name", "name_en"];

    const actions = {
        show: "provinces.show",
        delete: deleteProvince,   
    };

    return (
        <Table
            data={provinces}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default ProvinceTable;
