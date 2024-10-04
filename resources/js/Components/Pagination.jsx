import React from "react";

function Pagination({ currentPage, lastPage, onPageChange }) {
    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= lastPage; i++) {
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
