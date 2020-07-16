import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const output = [];
  let lastCategory = null;
  let productData = props.productData;

  productData = productData.filter((product) => {
    return product.name.toLowerCase().includes(props.filterText.toLowerCase()) ;
  });

  if(props.onlyInStock){
    productData = productData.filter((product) => product.stocked );
  }

  productData.forEach((product) => {
    if (product.category !== lastCategory) {
      output.push(
        <ProductCategoryRow category={product.category}
                            key={product.category} />
      )
    }
    output.push(
      <ProductRow productData={product}
                  key={product.name} />
    )
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th className="tableMeta">Name</th>
          <th className="tableMeta">Price</th>
        </tr>
      </thead>
      <tbody>
        {output}
      </tbody>
    </table>
  )
}

export default ProductTable;