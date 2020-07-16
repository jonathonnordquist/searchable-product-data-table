import React from 'react';

function ProductCategoryRow(props) {
  return (
    <tr>
      <td colSpan="2" className="tableMeta">{props.category}</td>
    </tr>
  )
}

export default ProductCategoryRow;