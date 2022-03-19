import React, { Component } from 'react';
import SearchTrip from './SearchTrip'
import CardTripList from './CardTripList';

class VacationList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="SearchTrip">
                    <SearchTrip onSearch={this.props.onSearch} checkIfEdit={this.props.checkIfEdit} searchTrip={this.props.searchTrip}/>
                </div>
                <div className="CardTripList">
                    <CardTripList trip={this.props.trip} onSearch={this.props.onSearch} delete={this.props.delete} updatee={this.props.updatee} checkIfEdit={this.props.checkIfEdit} />
                </div>
            </div>
        );

    }
}
export default VacationList;