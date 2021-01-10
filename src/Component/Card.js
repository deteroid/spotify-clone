import React from 'react';
import { Card } from 'react-bootstrap'
import '../App.scss';


const CardTile = (props) => {
    return (
        <Card className="Card">
            <Card.Img src={props.url} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className="CardTitle">{props.Name}</Card.Title>
                <Card.Text className="CardText">Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardTile;