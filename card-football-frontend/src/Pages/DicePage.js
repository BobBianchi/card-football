import Dice from "../Component/Dice";
export default function DicePage() {
    return (
        <div className="row">
                <div className="col m-1">
                    <Dice dice={4}/>
                    <Dice dice={6}/>
                    <Dice dice={8}/>
                    <Dice dice={10}/>
                    <Dice dice={12}/>
                    <Dice dice={20}/>
                </div>
        </div>
    );
}