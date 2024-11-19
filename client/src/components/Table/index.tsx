import React, { FC, useState } from "react";
import { Button, Modal as ModalAntd, Space, Table as TableAntd } from "antd";

import { fetchDeleteCar, fetchGetCarsList } from "../../api/requests";

import Modal from '../Modal';

const Table: FC = (props: any) => {
    const columns = [
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            sorter: (a, b) => a.brand.localeCompare(b.brand),
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            sorter: (a, b) => a.model.localeCompare(b.model),
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
            sorter: (a, b) => a.color.localeCompare(b.color),
        },
        {
            title: 'Engine displacement',
            dataIndex: 'engine_displacement',
            key: 'engine_displacement',
            sorter: (a, b) => a.engine_displacement - b.engine_displacement,
        },
        {
            title: 'Mileage',
            dataIndex: 'mileage',
            key: 'mileage',
            sorter: (a, b) => a.mileage - b.mileage,
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            sorter: (a, b) => a.year - b.year,
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (index, record) => (
                <Space>
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
                </Space>
             
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
            <TableAntd
                className="table-wrapper"
                dataSource={items.map((item: any) => ({...item, key: item.id}))}
                columns={columns}
            />
            <Modal
                open={openModalEdit}
                setOpen={setOpenModalEdit}
                isEditMode={true} record={modalRecord}
                updateTableState={updateTableState} 
            />
        </>
        
    )
}

export default Table;