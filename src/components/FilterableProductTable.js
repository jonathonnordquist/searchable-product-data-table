import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const storedData = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      onlyInStock: false
    }
  }

  toggleInStock = (checked) => {
    this.setState({ onlyInStock: checked });
  }

  updateFilterText = (text) => {
    this.setState({ filterText: text })
  }

  getProductData = () => storedData;

  render() {
    const productData = this.getProductData();
    const {filterText, onlyInStock} = this.state;
  
    return (
      <div className='filterableProductTable'>
        <SearchBar filterText={filterText}
                   onlyInStock={onlyInStock}
                   toggleInStock={this.toggleInStock}
                   updateFilterText={this.updateFilterText} />
        <ProductTable productData={productData}
                      filterText={filterText}
                      onlyInStock={onlyInStock} />
      </div>
    )
  }
}