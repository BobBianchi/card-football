import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="d-flex align-items-center bg-secondary">
            <div className="nav">
                <NavLink
                    id="cardsPageLink"
                    className="nav-link text-white"
                    to="/" 
                >
                    PlayerCards
                </NavLink>
                <NavLink
                    id="playbookPage"
                    className="nav-link text-white"
                    to="/playbook" 
                >
                    Playbook
                </NavLink>
                <NavLink
                    id="dicePage"
                    className="nav-link text-white"
                    to="/dice" 
                >
                    Dice
                </NavLink>
                <NavLink
                    id="gameBoardPage"
                    className="nav-link text-white"
                    to="/gameboard" 
                >
                    Game Board
                </NavLink>
            </div>
        </div>
    );
}

