import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Table from "../../core/components/table";

const ProductsTable = ({ products, onSort, selectedSort }) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (products) => (
                <Link to={`/admin/product/${products._id}`}>
                    {products.name}
                </Link>
            )
        },
        price: {
            name: "Цена"
        },
        delete: {
            name: "Удалить"
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={products}
        />
    );
};
ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default ProductsTable;
