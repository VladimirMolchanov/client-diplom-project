import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { getProducts } from "../../store/products";
import Product from "../ui/product";
import "./products.css";
import { getCategory } from "../../store/category";
import CheckBoxField from "../common/form/checkBoxField";
import { getColors } from "../../store/color";
import { usePagination } from "../../hooks/pagination";
import Pagination from "../common/pagination";
import paginate from "../../utils/paginate";
import TextField from "../common/form/textField";

const Products = () => {
    const initialFilter = {
        category: [],
        colors: []
    };
    const { currentPage, onPageChange, pageSize, setPagesSize } =
        usePagination();

    useEffect(() => {
        setPagesSize(4);
    }, []);

    const [filter, setFilter] = useState(initialFilter);
    const clearFilter = () => {
        setFilter(initialFilter);
    };

    const [search, setSearch] = useState("");
    const handleSearch = (text) => {
        clearFilter();
        setSearch(text.value);
    };
    const [sortBy, setSortBy] = useState({ path: "price", order: "asc" });
    const handleSort = (item) => {
        if (sortBy.path === item) {
            setSortBy({
                ...sortBy,
                order: sortBy.order === "asc" ? "desc" : "asc"
            });
        } else {
            setSortBy({ path: item, order: "asc" });
        }
    };

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

        if (search) {
            return data.filter((user) => {
                const s = user.name.toLowerCase().match(search.toLowerCase());
                return s && s.length !== 0;
            });
        }

        return data || [];
    };

    const filteredProducts = fnFilter(products);
    const count = filteredProducts.length;
    const sortedUsers = _.orderBy(
        filteredProducts,
        [sortBy.path],
        [sortBy.order]
    );
    const productsCrop = paginate(sortedUsers, currentPage, pageSize);

    return (
        <section className="products section">
            <div className="products__container container">
                <h2 className="section__title section__title-gradient text-left">
                    Beats by Dr. Dre
                </h2>

                <div className="products__header">
                    <TextField
                        label="Поиск"
                        name="name"
                        value={search}
                        onChange={handleSearch}
                    />
                    <div className="search">
                        Сортировка
                        <span
                            onClick={() => {
                                handleSort("price");
                            }}
                        >
                            {sortBy.order === "asc"
                                ? `Сначала не дорогие`
                                : `сначало дорогие`}
                        </span>
                    </div>
                </div>
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
