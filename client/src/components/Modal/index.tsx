import React, { FC, useState } from "react";
import { Input, Form, Modal as ModalAntd, InputNumber } from "antd";
import { fetchCreateNewCar } from "../../api/requests";

interface IValues {
    brand: string;
    model: string;
    color: string;
    engine_displacement: number;
    mileage: number;
    year: number;
}

interface IModalProps {
  open: boolean;
  setOpen: any;
  isEditMode?: boolean;
  record?: IValues | null;
}

const Modal: FC<IModalProps> = (props: IModalProps) => {
    const {open, setOpen, isEditMode, record} = props;

    const [form] = Form.useForm();
    const [_formValues, setFormValues] = useState<IValues>();

    const onCreate = (values: IValues) => {
        fetchCreateNewCar(values, () => {
            setFormValues(values);
            setOpen(false);
        })
    };

    const onEdit = (values: IValues) => {
      setFormValues(values);
      setOpen(false);
    };

    return (
        <ModalAntd
          open={open}
          title={isEditMode ? "Edit a Car record" : "Create a Car record"}
          okText={isEditMode ? "Edit" : "Create"}
          cancelText="Cancel"
          okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
          onCancel={() => setOpen(false)}
          destroyOnClose
          modalRender={(dom) => (
            <Form
              layout="vertical"
              form={form}
              name="form_in_modal"
              initialValues={{ modifier: 'public' }}
              clearOnDestroy
              onFinish={(values) => isEditMode ? onEdit(values) : onCreate(values)}
            >
              {dom}
            </Form>
          )}
        >
          <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true, message: 'Please input the brand of your car' }]}
            initialValue={record?.brand || ''}
          >
            <Input placeholder="Brand" />
          </Form.Item>
          <Form.Item
            name="model"
            label="Model"
            initialValue={record?.model || ''}
            rules={[{ required: true, message: 'Please input the model of your car' }]}
          >
            <Input placeholder="Model" />
          </Form.Item>
          <Form.Item
            name="color"
            label="Color"
            initialValue={record?.color || ''}
            rules={[{ required: true, message: 'Please input the color of your car' }]}
          >
            <Input placeholder="Color" />
          </Form.Item>
          <Form.Item
            name="engine_displacement"
            label="Engine displacement"
            initialValue={record?.engine_displacement || 1.0}
            rules={[{ required: true, message: 'Please input the engine displacement of your car' }]}
          >
            <InputNumber 
            style={{ width: "100%" }}
            min={1.0}
            max={9.9}
            step="0.1" 
            placeholder="1.0"
            />
          </Form.Item>
          <Form.Item
            name="mileage"
            label="Mileage"
            initialValue={record?.mileage || 0}
            rules={[{ required: true, type: 'number', message: 'Please input the mileage of your car' }]}
          >
            <InputNumber placeholder="0" />
          </Form.Item>
          <Form.Item
            name="year"
            label="Year"
            initialValue={record?.year || 2020}
            rules={[{ required: true, type: 'number', message: 'Please input the production year of your car' }]}
          >
            <InputNumber placeholder="2020" />
          </Form.Item>
        </ModalAntd>
    )
}

export default Modal;