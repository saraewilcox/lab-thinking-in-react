import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {

  state = {
    products: this.props.products,
    filteredProducts: this.props.products
  }

  searchAction = (state) => {
    let { searchQuery, stocked }  = state
    let visibleProducts = [...this.state.products].filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
        && (stocked ? product.stocked === stocked : product)
      )
    })
  
        this.setState({
            filteredProducts: visibleProducts
        })
  }

      render() {
        return(
          
          <div>
            <SearchBar onFilter={this.searchAction} />
            <ProductTable filteredProducts={this.state.filteredProducts}/>
          </div>  
        )
    }
}

export default FilterableProductTable;
