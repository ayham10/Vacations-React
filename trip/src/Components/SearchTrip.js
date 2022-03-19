import React, { Component } from 'react';
import { FiSearch } from "react-icons/fi"
import '../trip.css'

class SearchTrip extends Component {
    constructor(props,) {
        super(props);
        this.state = {
            searchTripValue: ""
        }
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch() {
        this.props.onSearch(this.state.searchTripValue);
    }
    render() {
        return (
            <div className="header-Search">
                <input type="text" placeholder="  🔍  Search by name or location " className="Search-label"
                    value={this.state.searchTripValue}
                    onChange={event => this.setState({ searchTripValue: event.target.value })} />
                <button className="Search-button">
                    <FiSearch className='FiSearch' onClick={this.onSearch} />
                </button>
            </div>
        )
    }
}
export default SearchTrip;


