import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/products";
import Product from "../ui/product";
import "./products.css";
import { getCategory } from "../../store/category";
import CheckBoxField from "../common/form/checkBoxField";
import { getColors } from "../../store/color";
import { usePagination } from "../../hooks/pagination";
import Pagination from "../common/pagination";
import paginate from "../../utils/paginate";

const Products = () => {
    const { currentPage, onPageChange, pageSize, setPageSize } =
        usePagination();
    setPageSize(4);

    const [filter, setFilter] = useState({
        category: [],
        colors: []
    });

    const handleChange = (target) => {
        if (target) {
            if (target.checked) {
                setFilter((prevState) => ({
                    ...prevState,
                    [target.name]: [...prevState[target.name], target.value]
                }));
            } else {
                const index = filter[target.name].indexOf(target.value);
                filter[target.name].splice(index, 1);
                setFilter((prevState) => ({
                    ...prevState,
                    ...filter
                }));
            }
        }
    };

    const products = useSelector(getProducts());
    const category = useSelector(getCategory());
    const colors = useSelector(getColors());

    const fnFilter = (data) => {
        if (filter.colors.length > 0 || filter.category.length > 0) {
            return (
                data &&
                data.filter((item) => {
                    if (
                        filter.colors.findIndex(
                            (color) => color === item.color
                        ) !== -1
                    ) {
                        return true;
                    }
                    if (
                        filter.category.findIndex(
                            (c) => c === item.category
                        ) !== -1
                    ) {
                        return true;
                    }
                    return false;
                })
            );
        }

        return data || [];
    };

    const filteredProducts = fnFilter(products);
    const count = filteredProducts.length;

    const productsCrop = paginate(filteredProducts, currentPage, pageSize);

    return (
        <section className="products section">
            <div className="products__container container">
                <h2 className="section__title section__title-gradient text-left">
                    Beats by Dr. Dre
                </h2>

                <div className="products__header"></div>
                <div className="products__body grid">
                    <div className="products__filter">
                        <div className="filter__item">
                            <div className="filter__title">
                                <span>Connection</span>
                            </div>
                            <div>
                                {category &&
                                    category.map((i, index) => (
                                        <CheckBoxField
                                            key={i._id}
                                            index={index}
                                            value={i._id}
                                            onChange={handleChange}
                                            name="category"
                                        >
                                            {i.name}
                                        </CheckBoxField>
                                    ))}
                            </div>
                        </div>
                        <div className="filter__item">
                            <div className="filter__title">
                                <span>Colors</span>
                            </div>
                            <div>
                                {colors &&
                                    colors.map((i, index) => (
                                        <CheckBoxField
                                            key={i._id}
                                            index={index}
                                            value={i._id}
                                            onChange={handleChange}
                                            name="colors"
                                        >
                                            {i.name}
                                        </CheckBoxField>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="products__content grid">
                        {productsCrop &&
                            productsCrop.map((i) => (
                                <Product key={i._id} {...i} />
                            ))}
                    </div>
                </div>
                <div className="products__footer">
                    <Pagination
                        onPageChange={onPageChange}
                        itemsCount={count}
                        currentPage={currentPage}
                        pageSize={pageSize}
                    />
                </div>
            </div>
        </section>
    );
};

export default Products;
