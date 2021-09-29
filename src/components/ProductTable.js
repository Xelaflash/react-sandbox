import React from 'react';
import ProductCatRow from "./ProductCatRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  let rows = []; // empty rows array to push products in it
  let lastCategory = null;

  products.forEach((product) => {
    // iterate over the products array and evaluate if current cat is equal to last one (var initialized above and assigned below) if diff then render the component ProductCatRow

    if (product.name.indexOf(filterText) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCatRow category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  return (
    <div className="productTable">
      <div className="products">{rows}</div>
    </div>
  );
}
