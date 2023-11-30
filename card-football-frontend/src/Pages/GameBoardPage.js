import { Button } from "reactstrap";
import { useState, useEffect } from "react";
import Dice from "../Component/Dice";
import RollBox from "../Component/RollBox";

export default function GameBoardPage() {
    const [ltResult, setLtResult] = useState([null, null, null, null, null]);
    const handleSnap = () => {
        console.log("hut hut");
        setLtResult(Math.floor(Math.random() * 6) + 1);
    };
    useEffect(() => {
        console.log("ltResult chaged: ", ltResult);
    }, [ltResult]);
    return (
        <div className="container">
            <div className="row" id="opponent-board">
                <div className="container">
                    <div className="row">
                        <div className="col" id="lt">
                            <h3>EDGE</h3>
                        </div>
                        <div className="col" id="lg">
                            <h3>DE</h3>
                            <p></p>
                        </div>
                        <div className="col" id="c">
                            <h3>DT</h3>
                            <p></p>
                        </div>
                        <div className="col" id="rg">
                            <h3>DE</h3>
                            <p></p>
                        </div>
                        <div className="col" id="rt">
                            <h3>EDGE</h3>
                            <p></p>
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
                            {ltResult != null && <RollBox result={ltResult} />}
                        </div>
                        <div className="col" id="lg">
                            <h3>LG</h3>
                            {ltResult != null && <RollBox result={ltResult} />}
                        </div>
                        <div className="col" id="c">
                            <h3>C</h3>
                        </div>
                        <div className="col" id="rg">
                            <h3>RG</h3>
                        </div>
                        <div className="col" id="rt">
                            <h3>RT</h3>
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
