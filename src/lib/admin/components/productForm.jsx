import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";
import PropTypes from "prop-types";
import validator from "../../core/utils/validator";
import TextField from "../../core/components/form/textField";
import SelectFiled from "../../core/components/form/selectField";
import { getColors } from "../../core/store/color";
import { getCategory } from "../../core/store/category";
import { createProduct, updateProduct } from "../../core/store/products";
import productsService from "../../core/service/products.service";
import FileField from "../../core/components/form/fileField";
import config from "../../../config.json";

const ProductForm = ({ product, create }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        category: product?.category || "",
        color: product?.color || "",
        img: product?.img || "",
        name: product?.name || "",
        price: product?.price.toString() || ""
    });
    useEffect(() => {
        setData({
            category: product?.category || "",
            color: product?.color || "",
            img: product?.img || "",
            name: product?.name || "",
            price: product?.price.toString() || ""
        });
    }, [product]);
    const [error, setError] = useState({});
    const [touched, setTouched] = useState(false);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Поле имя обязательна для заполнения"
            }
        },
        price: {
            isRequired: {
                message: "Цена обязателен для заполнения"
            }
        }
    };

    const colors = useSelector(getColors());
    const category = useSelector(getCategory());
    const colorList = colors.map((q) => ({
        label: q.name,
        value: q._id
    }));
    const categoryList = category.map((p) => ({
        label: p.name,
        value: p._id
    }));

    const validate = () => {
        const error = validator(data, validatorConfig);
        setError(error);
        return Object.keys(error).length === 0;
    };

    const handleChange = (target) => {
        if (target) {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };

    const _handleImageChange = async (file) => {
        const dataFile = new FormData();
        dataFile.append("file", file);

        try {
            const { content } = await productsService.uploadImg(dataFile);
            setData((prevState) => ({
                ...prevState,
                img: content.file
            }));
        } catch (e) {
            const { message } = e.response.data.error;
            NotificationManager.error(message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            setTouched(true);
            return;
        }

        if (create) {
            dispatch(createProduct(data));
        } else {
            dispatch(updateProduct(product._id, data));
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    return (
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <TextField
                    className="form-control"
                    label="Наименование"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={error.name}
                    touch={touched}
                />

                <div className="mb-4">
                    <div className="productForm__img">
                        <img src={config.assetsEndpoint + data.img} alt="" />
                    </div>
                    <FileField
                        name="img"
                        label="Картинка"
                        onChange={_handleImageChange}
                    />
                </div>

                <TextField
                    className="form-control"
                    label="price"
                    name="price"
                    value={data.price}
                    onChange={handleChange}
                    error={error.price}
                    touch={touched}
                />
                <div className="mb-4">
                    <SelectFiled
                        onChange={handleChange}
                        options={colorList}
                        defaultOption="Choose..."
                        label="Выбери цвет"
                        name="color"
                        value={data.color}
                    />
                </div>
                <div className="mb-4">
                    <SelectFiled
                        onChange={handleChange}
                        options={categoryList}
                        defaultOption="Choose..."
                        label="Выбери категорию"
                        name="category"
                        value={data.category}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 mx-auto">
                    <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                    />
                    Сохранить
                </button>
            </form>
        </div>
    );
};
ProductForm.propTypes = {
    product: PropTypes.object,
    create: PropTypes.bool
};
export default ProductForm;
