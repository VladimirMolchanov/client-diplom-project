import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { usePagination } from "../../core/hooks/pagination";
import { getProducts } from "../../core/store/products";
import { getCategory } from "../../core/store/category";
import { getColors } from "../../core/store/color";
import { addBasketProduct } from "../../core/store/basket";
import paginate from "../../core/utils/paginate";
import TextField from "../../core/components/form/textField";
import CheckBoxField from "../../core/components/form/checkBoxField";
import Product from "../components/product";
import Pagination from "../../core/components/pagination";
import Color from "../../core/components/color";
import SelectFiled from "../../core/components/form/selectField";

const Products = () => {
    const initialFilter = {
        category: [],
        colors: []
    };
    const countItemsPage = [
        {
            label: "4",
            value: "4"
        },
        {
            label: "10",
            value: "10"
        },
        {
            label: "Все",
            value: "all"
        }
    ];
    const dispatch = useDispatch();
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
    const handleChangeCounts = (target) => {
        if (target) {
            if (target.value === "all") {
                setPagesSize(-1);
            } else {
                setPagesSize(+target.value);
            }
            onPageChange(1);
        }
    };

    const products = useSelector(getProducts());
    const category = useSelector(getCategory());
    const colors = useSelector(getColors());

    const handleAddProduct = (id) => {
        dispatch(addBasketProduct(products.find((i) => i._id === id)));
    };

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
    let productsCrop = sortedUsers;
    if (pageSize !== -1) {
        productsCrop = paginate(sortedUsers, currentPage, pageSize);
    }

    return (
        <section className="products section">
            <div className="products__container container">
                <h2 className="section__title section__title-gradient text-left">
                    Beats by Dr. Dre
                </h2>

                <div className="products__header">
                    <div className="search">
                        <TextField
                            label="Поиск"
                            name="name"
                            value={search}
                            onChange={handleSearch}
                            placeholder="Введите наименование"
                        />
                    </div>
                    <div className="products__header-body">
                        <div className="sorted">
                            Сортировка:
                            <span
                                className="sort__variant"
                                onClick={() => {
                                    handleSort("price");
                                }}
                            >
                                {sortBy.order === "asc"
                                    ? `Сначала не дорогие`
                                    : `Сначало дорогие`}
                            </span>
                        </div>
                        <div className="count__pages">
                            <SelectFiled
                                onChange={handleChangeCounts}
                                options={countItemsPage}
                                label="Показывать: "
                                name="count"
                                value={pageSize.toString()}
                            />
                        </div>
                    </div>
                </div>
                <div className="products__body grid">
                    <div className="products__filter">
                        <h2 className="mb-4">Фильтер</h2>
                        <div className="filter__item">
                            <div className="filter__title">
                                <span>Connection</span>
                            </div>
                            <div className="filter__group">
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
                            {colors && colors.length !== 0 && (
                                <>
                                    <div className="filter__title">
                                        <span>Colors</span>
                                    </div>
                                    <div className="filter__colors">
                                        {colors &&
                                            colors.map((i, index) => (
                                                <CheckBoxField
                                                    key={i._id}
                                                    index={index}
                                                    value={i._id}
                                                    onChange={handleChange}
                                                    name="colors"
                                                >
                                                    <div>
                                                        <Color id={i._id} />
                                                    </div>
                                                </CheckBoxField>
                                            ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="products__content grid">
                        {productsCrop &&
                            productsCrop.map((i) => (
                                <Product
                                    key={i._id}
                                    {...i}
                                    onShopping={handleAddProduct}
                                />
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
