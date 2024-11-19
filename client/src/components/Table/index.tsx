import React, { FC, useState } from "react";
import { Button, Modal as ModalAntd, Table as TableAntd } from "antd";

import { fetchDeleteCar, fetchGetCarsList } from "../../api/requests";

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
                <div>
                    <Button type="primary" onClick={() => showModal(record)}>
                        Edit
                    </Button>

                    <Button
                        type="primary"
                        onClick={() => {
                            ModalAntd.confirm({
                            title: 'Delete',
                            content: 'Are you sure you want to delete this Car record?',
                            onOk: () => confirmDelete(record),
                            });
                        }}
                        >
                        Delete
                    </Button>
                </div>
             
            ),
          },
    ];

    const {items, updateTableState} = props;

    const [modalRecord, setModalRecord] = useState(null);
    const [openModalEdit, setOpenModalEdit] = useState(false);

    const showModal = (record) => {
        setModalRecord(record);
        setOpenModalEdit(true);
    };

    const confirmDelete = (record) => {
        const {id} = record;

        fetchDeleteCar(String(id), () => {
            fetchGetCarsList(updateTableState); // refetch updated list after delete
        })
    };
    
    return (
        <>
            <TableAntd dataSource={items.map((item: any) => ({...item, key: item.id}))} columns={columns} className="table-wrapper" />
            <Modal open={openModalEdit} setOpen={setOpenModalEdit} isEditMode={true} record={modalRecord} updateTableState={updateTableState} />
        </>
        
    )
}

export default Table;