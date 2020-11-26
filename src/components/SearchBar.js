import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchQuery: '',
        stocked: false
    }

    handleSearchInput = (event) => { 
        let { value } = event.target
      
        this.setState({
                searchQuery: value,
            },
            () => {
                this.props.onFilter(this.state);
            })
    }  

    handleChecked = () => { 
        this.setState({
                stocked: !this.state.stocked,
            },
            () => {
                this.props.onFilter(this.state);
            })
    }  

    render() {
        return(
          <div>
            <form >Search <br/>
            <input type="text" name="searchQuery" 
                onChange={this.handleSearchInput} 
                value={this.state.searchQuery} 
                placeholder="Search..." required></input> <br/>
            <input type="checkbox" 
                onChange={this.handleChecked} 
                name="stocked"/>
            <label>Only show prdoducts in stock </label>
            </form> 
          </div>  
        )
    }
}

export default SearchBar;