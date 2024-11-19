import { FC } from "react";
import { Table as TableAntd } from "antd";

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
  ];


const Table: FC = (props: any) => {
    return (
        <TableAntd dataSource={props.items.map((item: any) => ({...item, key: item.id}))} columns={columns} />
    )
}

export default Table;