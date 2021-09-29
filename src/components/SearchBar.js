import { React, Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <div className="searchBar">
        <div className="search">
          <label htmlFor="search">Search Products</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
        </div>
        <div className="stockable">
          <input
            type="checkbox"
            name="stockable"
            id="stockable"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          Only show products in stock
        </div>
      </div>
    );
  }
}

export { SearchBar };
