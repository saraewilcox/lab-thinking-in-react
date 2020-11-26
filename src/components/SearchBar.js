import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchQuery: ''
    }

    handleOnChange = (event) => {
        this.props.onFilter(event.target.value);

        this.setState ({
            searchQuery: event.target.value
        })
    }

    render() {
        return (
            
            <form>
                <input type="text" 
                placeholder = "Search..."
                name="searchQuery" 
                value={this.state.searchQuery}
                onChange={this.handleOnChange}    
                />
            </form>
        )
    }
}

export default SearchBar;