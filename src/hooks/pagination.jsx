import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const paginationContext = React.createContext();

export const usePagination = () => {
    return useContext(paginationContext);
};

const PaginationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);

    const onPageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    return (
        <paginationContext.Provider
            value={{ currentPage, onPageChange, pageSize, setPageSize }}
        >
            {children}
        </paginationContext.Provider>
    );
};
PaginationProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PaginationProvider;
