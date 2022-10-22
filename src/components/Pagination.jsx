import React, { useState } from "react";
import "./style/pagination.css";

const Pagination = ({ page, pagesLength, setPage }) => {
  const pagePerBlock = 8;
  const currentBlock = Math.ceil(page / pagePerBlock);
  const blockLength = Math.ceil(pagesLength / pagePerBlock);

  const arrPages = [];
  const initialPage = (currentBlock - 1) * pagePerBlock + 1;
  // inititalPage + pagePerBlock - 1
  const limitPage =
    blockLength === pagePerBlock ? pagesLength : currentBlock * pagePerBlock;

  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i);
  }

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePage = (currentPage) => {
    setPage(currentPage);
  };

  const handleBlockPrev = () => {
    setPage(page - 8);
  };

  const handleBlockNext = () => {
    setPage(page + 8);
  };

  return (
    <section className="pagination">
      {page > 1 && (
        <div
          onClick={handlePrev}
          className="pagination__prev pagination__active"
        >
          &#60;
        </div>
      )}
      {page > 1 && (
        <div onClick={handleBlockPrev} className="pagination-block">
          ...
        </div>
      )}

      <ul className="pagination__block">
        {arrPages.map((e) => (
          <li
            onClick={() => handlePage(e)}
            className={`pagination__page ${page === e && "pagination__active"}`}
            key={e}
          >
            {e}
          </li>
        ))}
      </ul>

      {page < pagesLength && (
        <div onClick={handleBlockNext} className="pagination-block">
          ...
        </div>
      )}
      {
        <div
          onClick={handleNext}
          className="pagination__next pagination__active"
        >
          &#62;
        </div>
      }
    </section>
  );
};

export default Pagination;
