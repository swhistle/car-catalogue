import { useEffect, useState, useRef } from 'react'
import { Button } from 'antd';

import { fetchGetCarsList } from './api/requests';

import Modal from './components/Modal';
import Table from './components/Table';

import './App.css'

function App() {
  const renderAfterCalled = useRef(false);
  const [cars, setCarsState] = useState([]);
  const [openModalCreate, setOpenModalCreate] = useState(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchGetCarsList(setCarsState);
    }

    renderAfterCalled.current = true;
  }, [renderAfterCalled, setCarsState]);

  return (
    <div className='page-wrapper'>
      <h2>Cars catalogue</h2>

      <Button type="primary" onClick={() => setOpenModalCreate(true)}>
        Add a Car record
      </Button>

      <Modal open={openModalCreate} setOpen={setOpenModalCreate} />
      <div className='table-wrapper'>
        <Table items={cars} />
      </div>
    </div>
  )
}

export default App
