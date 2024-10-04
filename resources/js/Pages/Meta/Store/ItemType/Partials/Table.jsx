import React from "react";
import Table from "@/Components/Table";
import { deleteItemType } from "@/Helpers/Api/ItemTypeApi";


function ItemTypeTable({ itemTypes, pagination, onPageChange }) {
    const columns = ["Id", " Item Type", "Status", "Action"];

    const columnData = ["id", "name", "active"];

    const actions = {
        show: "itemTypes.show",
        delete: deleteItemType,   
    };

    return (
        <Table
            data={itemTypes}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default ItemTypeTable;

