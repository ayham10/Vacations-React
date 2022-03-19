import React, { Component } from 'react';
import { BiPlus } from "react-icons/bi"
import { FaCheckCircle } from "react-icons/fa"
import { MdOutlineCancel } from "react-icons/md"
import { ImCheckmark2 } from "react-icons/im"

import '../trip.css'
class SearchTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tripName: '',
            tripLocation: '',
            tripPrice: '',
            img: ''
        }
        this.insertInformation = this.insertInformation.bind(this);
        this.add = this.add.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.save = this.save.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (this.props.checkIfEdit.cardTrip.tripName !== prevProps.checkIfEdit.cardTrip.tripName || this.props.checkIfEdit.cardTrip.tripLocation !== prevProps.checkIfEdit.cardTrip.tripLocation || this.props.checkIfEdit.cardTrip.tripPrice !== prevProps.checkIfEdit.cardTrip.tripPrice || this.props.checkIfEdit.cardTrip.img !== prevProps.checkIfEdit.cardTrip.img) {
            this.setState({
                id: this.props.checkIfEdit.id,
                tripName: this.props.checkIfEdit.cardTrip.tripName,
                tripLocation: this.props.checkIfEdit.cardTrip.tripLocation,
                tripPrice: this.props.checkIfEdit.cardTrip.tripPrice,
                img: this.props.checkIfEdit.cardTrip.img
            })
        }
    }
    add(e) {
        e.preventDefault();
        this.props.add({ tripName: this.state.tripName, tripLocation: this.state.tripLocation, tripPrice: this.state.tripPrice, img: this.state.img });
        this.setState({
            id: '',
            tripName: '',
            tripLocation: '',
            tripPrice: '',
            img: '',
        });
    }
    Cancel(e) {
        e.preventDefault();
        this.setState({
            id: '',
            tripName: '',
            tripLocation: '',
            tripPrice: '',
            img: '',
        });
        this.props.Cancel();
    }

    insertInformation() {
        return { id: this.state.id, tripName: this.state.tripName, tripLocation: this.state.tripLocation, tripPrice: this.state.tripPrice, img: this.state.img };
    }
    save(e) {
        e.preventDefault();
        const trriiip = this.insertInformation();
        this.props.save(trriiip);
    }
    renderForm() {
        return (
            <div className="Add-form" >
                <p className="Add-vacation" >  Edit a  vacation   </p>
                <button className="Approval-icon">
                    <ImCheckmark2 className='Plus-icon' onClick={this.save} />
                </button>
                <button className="Cancel-icon">
                    <MdOutlineCancel className='Plus-icon' onClick={this.Cancel} />
                </button>
                <div className="form-vacation">
                    <section className="input-label-from">
                        <p>Name</p>
                        <input type="text" id="fname" name="fname" placeholder="Name" value={this.state.tripName} onChange={event => this.setState({ tripName: event.target.value })} /><br></br>
                    </section>
                    <section className="input-label-from">
                        <p>Location</p>
                        <input type="text" id="fname" name="fname" placeholder="Location" value={this.state.tripLocation} onChange={event => this.setState({ tripLocation: event.target.value })} /><br></br>
                    </section>
                    <section className="input-label-from">
                        <p>Price</p>
                        <input type="text" id="fname" name="fname" placeholder="Price" value={this.state.tripPrice} onChange={event => this.setState({ tripPrice: event.target.value })} /><br></br>
                    </section>
                    <section className="input-label-from">
                        <p>Image</p>
                        <input type="text" id="fname" name="fname" placeholder="Image url" value={this.state.img} onChange={event => this.setState({ img: event.target.value })} /><br></br>
                    </section>
                </div>
            </div>
        )
    }

    renderUI() {
        return (
            <div className="Add-form">
                <p className="Add-vacation">  Add a new vacation</p>
                <div className="image"></div>
                <button className="plus-header-icon">
                    <BiPlus className='Plus-icon' onClick={this.add} />
                </button>
                <div className="form-vacation">
                    <section className="input-label-from">
                        <p> Name</p>
                        <input type="text" id="fname" name="fname" placeholder="Name" value={this.state.tripName} onChange={event => this.setState({ tripName: event.target.value })} /><br></br>
                    </section>
                    <section className="input-label-from">
                        <p>Location</p>
                        <input type="text" id="fname" name="fname" placeholder="Location" value={this.state.tripLocation} onChange={event => this.setState({ tripLocation: event.target.value })} /><br></br>
                    </section>
                    <section className="input-label-from">
                        <p>Price</p>
                        <input type="text" id="fname" name="fname" placeholder="Price" value={this.state.tripPrice} onChange={event => this.setState({ tripPrice: event.target.value })} /><br></br>
                    </section>
                    <section className="input-label-from">
                        <p>Image</p>
                        <input type="text" id="fname" name="fname" placeholder="Image url" value={this.state.img} onChange={event => this.setState({ img: event.target.value })} /><br></br>
                    </section>
                </div>
            </div>
        )
    }
    render() {
        return this.props.checkIfEdit.cardTrip.tripName ? this.renderForm() : this.renderUI();
    }
}
export default SearchTrip;


