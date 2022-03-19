import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { MdLocationOn } from "react-icons/md"
import { MdModeEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md"
// import '../Data/CardData.json';
import '../trip.css'

class CardTrip extends Component {
    constructor(props,) {
        super(props);
        this.state = {
            editing: false
        }
        this.delete = this.delete.bind(this);
        this.updatee = this.updatee.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (this.props.editing_ != prevProps.editing_) {
            this.setState({
                editing: false
            })
        }
    }
    delete() {
        this.props.delete(this.props.id);
    }
    updatee() {
        this.props.updatee(this.props.id, this.props.tripName, this.props.tripLocation, this.props.tripPrice, this.props.img);
    }
    render() {
        return (
            <Card sx={{ width: 293, height: 261, Color: "red", border: this.props.editing_ ? "2px solid #F86549" : "" }} className="card">
                <CardActionArea>
                    <CardMedia sx={{ width: 268, height: 170 }} className="cardimage"
                        component="img"
                        image={this.props.img}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h6" component="div" sx={{ blfontSize: "15.7759px", width: 211, height: 20 }}>
                            {this.props.tripName}
                        </Typography>
                        <MdLocationOn className="location" />
                        <Typography variant="body2" className="tripNameLocation">
                            {this.props.tripLocation}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <span className="price">
                        {this.props.tripPrice}
                    </span>
                    <button className="edit" onClick={this.updatee}>
                        <MdModeEdit className='iconEdit' />
                    </button>
                    <button className="delte" onClick={this.delete} >
                        <MdDelete className='iconDelete' />
                    </button>
                </CardActions>
            </Card>
        )
    }
}
export default CardTrip;