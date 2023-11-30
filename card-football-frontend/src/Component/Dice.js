import { Button } from "reactstrap";

export default function Dice({dice}) {
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * dice) + 1;
        if (randomNumber == dice) {
            console.log("Critical Roll");
            console.log(randomNumber);
        } else {
        console.log(randomNumber);
        }
    }
    return (
        <div className="container">
            <div>
                <Button 
                    variant="primary"
                    onClick={generateRandomNumber}
                    className="m-1"
                >
                    {`D${dice}`}
                </Button>
            </div>
        </div>
    );
}
