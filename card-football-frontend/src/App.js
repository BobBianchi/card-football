import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PlayerCardsPage from "./Pages/PlayerCardsPage";
import GameBoardPage from "./Pages/GameBoardPage";
import PlaybookPage from "./Pages/PlaybookPage";
import Navbar from "./Component/Navbar";
import DicePage from "./Pages/DicePage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<PlayerCardsPage />} />
                <Route path="/playbook" element={<PlaybookPage />} />
                <Route path="/dice" element={<DicePage />} />
                <Route path="/gameboard" element={<GameBoardPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
