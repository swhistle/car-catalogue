import React, { FC, useState } from "react";
import { Button, Table as TableAntd } from "antd";

import Modal from '../Modal';

const Table: FC = (props: any) => {
    const columns = [
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
             title: 'Color',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'Engine displacement',
            dataIndex: 'engine_displacement',
            key: 'engine_displacement',
        },
        {
            title: 'Mileage',
            dataIndex: 'mileage',
            key: 'mileage',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (index, record) => (
              <Button type="primary" onClick={() => showModal(record)}>
                Edit
              </Button>
            ),
          },
      ];

    const [modalRecord, setModalRecord] = useState(null);
    const [openModalEdit, setOpenModalEdit] = useState(false);

    const showModal = (record) => {
        setModalRecord(record);
        setOpenModalEdit(true);
    };
    
    return (
        <>
            <TableAntd dataSource={props.items.map((item: any) => ({...item, key: item.id}))} columns={columns} />
            <Modal open={openModalEdit} setOpen={setOpenModalEdit} isEditMode={true} record={modalRecord} />
        </>
        
    )
}

export default Table;