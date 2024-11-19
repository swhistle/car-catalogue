import { useEffect, useState, useRef } from 'react'

import './App.css'
import Table from './components/Table';

const cars = [
  {
      "id": 1,
      "brand": "Lada",
      "model": "Vesta",
      "color": "White",
      "engine_displacement": 1.8,
      "mileage": 25222,
      "year": 2020
  },
  {
      "id": 3,
      "brand": "Mercedez",
      "model": "S 63",
      "color": "Blue",
      "engine_displacement": 4,
      "mileage": 35100,
      "year": 2021
  },
  {
      "id": 4,
      "brand": "BMW",
      "model": "5",
      "color": "Brown",
      "engine_displacement": 2,
      "mileage": 50150,
      "year": 2019
  },
  {
      "id": 2,
      "brand": "Lada",
      "model": "Granta",
      "color": "White",
      "engine_displacement": 1.6,
      "mileage": 122009,
      "year": 2014
  }
];


function App() {
  return (
    <>
     <h1>Car catalogue</h1>
     <Table items={cars} />
    </>
  )
}

export default App
