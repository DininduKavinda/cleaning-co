import React from "react";
import Table from "@/Components/Table";
import { deleteItem } from "@/Helpers/Api/ItemApi";


function ItemTable({ items, pagination, onPageChange }) {
    const columns = ["Id", " Item Type", "Item","Status", "Action"];

    const columnData = ["id", "item_type.name", "name","active"];

    const actions = {
        show: "items.show",
        delete: deleteItem,
    };

    return (
        <Table
            data={items}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default ItemTable;

