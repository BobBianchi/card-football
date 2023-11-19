import { Route, Router, Routes } from 'react-router-dom';
import CardsPage from './Pages/CardsPage';

function App() {
  return (
    <CardsPage/>
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<CardsPage />}/>
    //   </Routes>
    // </Router>
  );
}

export default App;
