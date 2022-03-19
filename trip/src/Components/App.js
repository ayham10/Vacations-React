import React, { Component } from 'react';
import VacationList from './VacationList'
import Form from './Form';
import Data from '../Data/CardData.json'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTrip: '',
            trip: [],
            checkIfEdit: {
                ifUpdate: false, id: "", onSearch: "", cardTrip: {
                    tripName: '',
                    tripLocation: '',
                    tripPrice: '',
                    img: ''
                }
            }
        }
        this.delete = this.delete.bind(this);
        this.updatee = this.updatee.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        Data.map(item => this.add({
            id: item.id, tripName: item.tripName, tripLocation: item.tripLocation
            , tripPrice: item.tripPrice, img: item.img
        }));
    }
    add({ id = null, tripName = 'default tripName', tripLocation = 'default tripLocation', tripPrice = 'default tripPrice', img = 'default img' }) {
        this.setState(prevState => ({
            trip: [
                ...prevState.trip, {
                    id: id !== null ? id : this.nextId(prevState.trip),
                    tripName: tripName,
                    tripLocation: tripLocation,
                    tripPrice: tripPrice,
                    img: img
                }]
        }))
    }
    nextId(trip = []) {
        let max = trip.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }
    onSearch(value) {
        this.setState({
            searchTrip: value
        });
    }
    Cancel() {
        this.state.checkIfEdit.ifUpdate = false;
        this.state.checkIfEdit.onSearch = "";
        this.state.checkIfEdit.cardTrip.tripName = "";
        this.state.checkIfEdit.cardTrip.tripLocation = "";
        this.state.checkIfEdit.cardTrip.tripPrice = "";
        this.setState({
            editing: false
        });
    }
    delete(id) {
        this.setState(currState => ({
            trip: currState.trip.filter(trip => trip.id !== id)
        }));
    }
    updatee(id, tripName, tripLocation, tripPrice, img) {
        this.setState({
            checkIfEdit: {
                ifUpdate: true, id: id, cardTrip: {
                    tripName: tripName,
                    tripLocation: tripLocation,
                    tripPrice: tripPrice,
                    img: img
                }
            }
        });
    }
    save(trips) {
        this.setState(prevState => ({
            trip: prevState.trip.map(tri => tri.id === trips.id ? trips : tri)
        }));
    }
    render() {
        const trip = this.state.searchTrip ?
            this.state.trip.filter(
                trips => trips.tripName.includes(this.state.searchTrip) ||
                    trips.tripLocation.includes(this.state.searchTrip)
            )
            : this.state.trip;
        return (
            <div>
                <VacationList delete={this.delete} updatee={this.updatee}
                    trip={trip} checkIfEdit={this.state.checkIfEdit}
                    onSearch={this.onSearch} searchTrip={this.state.searchTrip} />
                <Form checkIfEdit={this.state.checkIfEdit} add={this.add} Cancel={this.Cancel} updatee={this.updatee} save={this.save} />
            </div>
        );
    }
}
export default App;