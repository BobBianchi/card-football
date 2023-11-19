import React from "react";
import {
    Card,
    Button,
    CardTitle,
    CardText,
    CardSubtitle,
    Container,
    Col,
    Row,
    CardBody,
} from "reactstrap";

export default function PlayerCard({ card }) {
    return (
        <Card
            color="light"
            style={{
                width: "16rem",
                border: "2px solid black"
            }}
            className="player-card"
            id={card.id}
        >
            <div className="container pt-2">
                <div className="row">
                    <div className="col-10">
                        <CardTitle tag="h5">{card.name}</CardTitle>
                    </div>
                    <div className="col">
                        <CardTitle style={{color: "#b38f00"}} tag="h5">{card.cost}</CardTitle>
                    </div>
                </div>
                <div className="row">
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {card.position}
                    </CardSubtitle>
                </div>
                <div className="row">
                    <img 
                        alt={card.name} 
                        src={card.imgUrl} width="100%" 
                    />
                    <CardBody>
                        <CardText>
                            <div className="row">
                                <div style={{color: "#b30000"}} className="col-6">{`STG ${card.strength}`}</div>
                                <div style={{color: "#006600"}} className="col-6">{`SPD ${card.speed}`}</div>
                            </div>
                            <div className="row">
                                <div style={{color: "#6600cc"}} className="col-6">{`SKL ${card.skill}`}</div>
                                <div style={{color: "#0000cc"}} className="col-6">{`INT ${card.intelligence}`}</div>
                            </div>
                            <div className="row">
                                
                            </div>
                        </CardText>
                    </CardBody>
                </div>
            </div>
        </Card>
    );
}
