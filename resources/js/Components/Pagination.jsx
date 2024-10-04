import React from "react";

function Pagination({ currentPage, lastPage, onPageChange }) {
    const renderPagination = () => {
        const pages = [];
        const visiblePages = 5; 

        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(lastPage - 1, startPage + visiblePages - 1); 

        if (endPage - startPage < visiblePages - 1) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li
                    key={i}
                    className={`page-item ${
                        currentPage === i ? "active" : ""
                    }`}
                >
                    <a
                        href="javascript:void(0)"
                        className="page-link rounded-circle"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

     
        if (endPage < lastPage - 1) {
            pages.push(
                <li key="ellipsis" className="page-item disabled">
                    <span className="page-link">...</span>
                </li>
            );
            pages.push(
                <li
                    key={lastPage}
                    className={`page-item ${
                        currentPage === lastPage ? "active" : ""
                    }`}
                >
                    <a
                        href="javascript:void(0)"
                        className="page-link rounded-circle"
                        onClick={() => onPageChange(lastPage)}
                    >
                        {lastPage}
                    </a>
                </li>
            );
        }

        return pages;
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-secondary gap-2 justify-content-center">
                <li className="page-item">
                    <a
                        className="page-link rounded-circle"
                        href="javascript:void(0)"
                        aria-label="Previous"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {renderPagination()}
                <li className="page-item">
                    <a
                        className="page-link rounded-circle"
                        href="javascript:void(0)"
                        aria-label="Next"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === lastPage}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
