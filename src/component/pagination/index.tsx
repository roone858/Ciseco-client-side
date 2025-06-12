import { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductList from "../Others/ProductList/ProductList";
import "./pagination.css";
// Example items, to simulate fetching from another resources.

function PaginatedItems({ itemsPerPage, items }: any) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-12">
        <ProductList products={currentItems} />
      </div>
      <div>
        <ReactPaginate
          className=" pagination-nav flex justify-center items-center"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default PaginatedItems;
