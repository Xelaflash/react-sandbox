import React from 'react';
export default function ProductRow({ product }) {
  return (
    <div className="productRow">
      {product.stocked ? (
        <p>
          {product.name} {product.price}
        </p>
      ) : (
        <p style={{color: 'red'}}>
          {product.name} {product.price}
        </p>
      )}
    </div>
  );
}
