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

export default function PlayCard({ card }) {
    return (
        <Card
            color="light"
            style={{
                width: "16rem",
                border: "2px solid black",
            }}
            className="player-card"
            id={card.id}
        >
            <div className="container pt-2">
                <div className="row">
                    <div className="col-8">
                        <CardTitle tag="h5">{card.name}</CardTitle>
                    </div>
                    <div className="col">
                        <CardTitle style={{ color: "#b38f00" }} tag="h5">
                            {card.yardageBaseMin}/{card.yardageBaseMax}
                        </CardTitle>
                    </div>
                    <div className="row">
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {card.type}
                        </CardSubtitle>
                    </div>
                </div>
                <div className="row">
                    <img alt={card.name} src={card.imgUrl} width="100%" />
                    <CardBody>
                        <div className="row">
                            <div
                                style={{ color: "#ff8c00" }}
                                className="col-4"
                            >{`TE ${card.tightEnds}`}</div>
                            <div
                                style={{ color: "#00b300" }}
                                className="col-4"
                            >{`RB ${card.runningBacks}`}</div>
                            <div
                                style={{ color: "#0000ff" }}
                                className="col-4"
                            >{`WR ${card.wideReceivers}`}</div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <CardText>{card.cardText}</CardText>
                            </div>
                        </div>
                    </CardBody>
                </div>
            </div>
        </Card>
    );
}
