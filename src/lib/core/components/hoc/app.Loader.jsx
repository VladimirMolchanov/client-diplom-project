import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductsLoadingStatus,
    loadProductsList
} from "../../store/products";
import { getColorsLoadingStatus, loadColorsList } from "../../store/color";
import {
    getCategoryLoadingStatus,
    loadCategoryList
} from "../../store/category";
import { loadBasketList } from "../../store/basket";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const productsIsLoading = useSelector(getProductsLoadingStatus());
    const colorIsLoading = useSelector(getColorsLoadingStatus());
    const categoryIsLoading = useSelector(getCategoryLoadingStatus());

    useEffect(() => {
        dispatch(loadProductsList());
        dispatch(loadColorsList());
        dispatch(loadCategoryList());
        dispatch(loadBasketList());
    }, []);
    if (productsIsLoading || colorIsLoading || categoryIsLoading) {
        return "Loading...";
    }
    return children;
};
AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
