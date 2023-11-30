import { Button } from "reactstrap";
import { useState, useEffect } from "react";
import Dice from "../Component/Dice";
import RollBox from "../Component/RollBox";

export default function GameBoardPage() {
    const oPositions = ["lt", "lg", "c", "rg", "rt"];
    const dPositions = ["ledge", "lde", "dt", "rde", "redge"];
    const [dLineResult, setDLineResult] = useState({
        ledge: null,
        lde: null,
        dt: null,
        rde: null,
        redge: null,
    });
    const [oLineResult, setOLineResult] = useState({
        lt: null,
        lg: null,
        c: null,
        rg: null,
        rt: null,
    });
    const handleSnap = () => {
        console.log("hut hut");
        const newOLineResult = { ...oLineResult };
        const newDLineResult = { ...dLineResult };
        oPositions.forEach((pos) => {
            newOLineResult[pos] = Math.floor(Math.random() * 6) + 1;
        });
        setOLineResult(newOLineResult);
        dPositions.forEach((pos) => {
            newDLineResult[pos] = Math.floor(Math.random() * 4) + 1;
        })
        setDLineResult(newDLineResult);
    };
    useEffect(() => {
        console.log("oLineResult changed: ", oLineResult);
    }, [oLineResult]);
    useEffect(() => {
        console.log("dLineResult changed: ", dLineResult);
    }, [dLineResult]);
    return (
        <div className="container">
            <div className="row" id="opponent-board">
                <div className="container">
                    <div className="row">
                        <div className="col" id="lt">
                            {dLineResult != null && (
                                <RollBox result={dLineResult.ledge} />
                            )}
                            <h3>EDGE</h3>
                        </div>
                        <div className="col" id="lg">
                        {dLineResult != null && <RollBox result={dLineResult.lde} />}
                            <h3>DE</h3>
                        </div>
                        <div className="col" id="c">
                        {dLineResult != null && <RollBox result={dLineResult.dt} />}
                            <h3>DT</h3>
                        </div>
                        <div className="col" id="rg">
                        {dLineResult != null && <RollBox result={dLineResult.rde} />}
                            <h3>DE</h3>
                        </div>
                        <div className="col" id="rt">
                        {dLineResult != null && <RollBox result={dLineResult.redge} />}
                            <h3>EDGE</h3>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row" id="player-board">
                <div className="container">
                    <div className="row">
                        <div className="col" id="lt">
                            <h3>LT</h3>
                            {oLineResult != null && (
                                <RollBox result={oLineResult.lt} />
                            )}
                        </div>
                        <div className="col" id="lg">
                            <h3>LG</h3>
                            {oLineResult != null && (
                                <RollBox result={oLineResult.lg} />
                            )}
                        </div>
                        <div className="col" id="c">
                            <h3>C</h3>
                            {oLineResult != null && (
                                <RollBox result={oLineResult.lg} />
                            )}
                        </div>
                        <div className="col" id="rg">
                            <h3>RG</h3>
                            {oLineResult != null && (
                                <RollBox result={oLineResult.lg} />
                            )}
                        </div>
                        <div className="col" id="rt">
                            <h3>RT</h3>
                            {oLineResult != null && (
                                <RollBox result={oLineResult.lg} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Button variant="primary" onClick={handleSnap} className="m-1">
                Snap
            </Button>
        </div>
    );
}
