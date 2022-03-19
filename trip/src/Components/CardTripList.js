import React, { Component } from 'react';
import CardTrip from './CardTrip';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.eachCard = this.eachCard.bind(this);

    }
    eachCard(item, i) {
        let editing_ = false;
        if (item.id == this.props.checkIfEdit.id) {
            editing_ = true;
        }
        if(item.tripName.length > 21){
            item.tripName = "its too long";
        } 
        if(item.tripPrice.length > 8){
            item.tripPrice = "...";
        } 
        if(item.tripLocation.length > 9){
            item.tripLocation = "...";
        } 
        return <CardTrip 
            key={i}
            id={item.id}
            tripName={item.tripName}
            tripLocation={item.tripLocation}
            tripPrice={item.tripPrice}
            img={item.img}
            checkIfEdit={this.props.checkIfEdit}
            delete={this.props.delete}
            updatee={this.props.updatee}
            editing_={editing_}
        >
        </CardTrip>
    }
    render() {
        return (
            <div className="All-Card-list">
                {this.props.trip.map(this.eachCard)}
            </div>
        )
    }
}

export default CardList;