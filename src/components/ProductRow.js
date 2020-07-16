import React from 'react';

function ProductRow(props) {
  const productData = props.productData;
  const name = productData.stocked ?
    productData.name :
    <span style={{color: 'red'}}>
      {productData.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{productData.price}</td>
    </tr>
  )
}

export default ProductRow;