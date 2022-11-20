import './App.css';
import { CreateAnimal } from './pages/createAnimal';
import { SearchAnimal } from './pages/searchAnimal';
import { AllAnimals } from './pages/allAnimals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UnknownUrl } from './pages/unknownUrl';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='animals/' element={<AllAnimals/>}/>
          <Route path='animals/createAnimalNoParents' element={<CreateAnimal/>}/>
          <Route path='animals/name/:name' element={<SearchAnimal/>}/>
          <Route path='*' element={<UnknownUrl/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
