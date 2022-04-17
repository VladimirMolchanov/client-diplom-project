import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Table from "../../core/components/table";
import Color from "../../core/components/color";
import config from "../../../config.json";

const ProductsTable = ({ products, onSort, selectedSort, onDelete }) => {
    const columns = {
        image: {
            path: "image",
            name: "image",
            component: (products) => (
                <img
                    src={config.assetsEndpoint + products.img}
                    alt={products.name}
                    className="table-image"
                />
            )
        },
        name: {
            path: "name",
            name: "Имя",
            component: (products) => (
                <Link to={`/admin/product/${products._id}`}>
                    {products.name}
                </Link>
            )
        },
        color: {
            name: "Цвет",
            component: (products) => <Color id={products.color} />
        },
        price: {
            name: "Цена",
            component: (products) => <div>{products.price}</div>
        },
        delete: {
            name: "Удалить",
            component: (products) => (
                <div className="text-center">
                    <button
                        className="btn btn-delete"
                        type="button"
                        onClick={() => onDelete(products._id)}
                    >
                        <span className="material-icons-sharp">delete</span>
                    </button>
                </div>
            )
        }
    };
    return (
        <div className="products-table">
            <Table
                onSort={onSort}
                selectedSort={selectedSort}
                columns={columns}
                data={products}
            />
        </div>
    );
};
ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ProductsTable;
