import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CreateAnimal } from './pages/createAnimal';
import { AllAnimals } from './pages/allAnimals';

function App() {
  return (
      <div>
        <CreateAnimal/>
        <AllAnimals/>
      </div>
    );
}

export default App;
