import './App.css';
import { CreateAnimal } from './pages/createAnimal';
import { AllAnimals } from './pages/allAnimals';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllAnimals/>}/>
          <Route path='/createAnimalWithoutParents' element={<CreateAnimal/>}/>
          <Route path='/getAnimalInfo' element={<AllAnimals/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
