import { useEffect, useState, useRef } from 'react'

import { fetchGetCarsList } from './api/requests';

import './App.css'
import Table from './components/Table';


function App() {
  const renderAfterCalled = useRef(false);
  const [cars, setCarsState] = useState([]);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchGetCarsList(setCarsState);
    }

    renderAfterCalled.current = true;
  }, [renderAfterCalled, setCarsState]);

  return (
    <>
     <h1>Car catalogue</h1>
     <Table items={cars} />
    </>
  )
}

export default App
