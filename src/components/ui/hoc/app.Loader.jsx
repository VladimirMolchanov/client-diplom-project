import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadProductsList } from "../../../store/products";
import { loadColorsList } from "../../../store/color";
import { loadCategoryList } from "../../../store/category";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProductsList());
        dispatch(loadColorsList());
        dispatch(loadCategoryList());
    }, []);
    return children;
};
AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
