import React, { FC, useState } from "react";
import { Button, Input, Form, Modal as ModalAntd, InputNumber } from "antd";
import { fetchCreateNewCar } from "../../api/requests";

interface Values {
    brand: string;
    model: string;
    color: string;
    engine_displacement: string;
    mileage: number;
    year: number;
  }

const Modal: FC = (props: any) => {
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState<Values>();
    const [open, setOpen] = useState(false);

    const onCreate = (values: Values) => {
        fetchCreateNewCar(values, () => {
            setFormValues(values);
            setOpen(false);
        })
    };

    return (
        <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Add a Car
        </Button>
        <ModalAntd
          open={open}
          title="Create a Car"
          okText="Create"
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
              onFinish={(values) => onCreate(values)}
            >
              {dom}
            </Form>
          )}
        >
          <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true, message: 'Please input the brand of your car' }]}
          >
            <Input placeholder="Brand" />
          </Form.Item>
          <Form.Item
            name="model"
            label="Model"
            rules={[{ required: true, message: 'Please input the model of your car' }]}
          >
            <Input placeholder="Model" />
          </Form.Item>
          <Form.Item
            name="color"
            label="Color"
            rules={[{ required: true, message: 'Please input the color of your car' }]}
          >
            <Input placeholder="Color" />
          </Form.Item>
          <Form.Item
            name="engine_displacement"
            label="Engine displacement"
            rules={[{ required: true, message: 'Please input the engine displacement of your car' }]}
          >
            <Input placeholder="2.0" defaultValue='2.0' />
          </Form.Item>
          <Form.Item
            name="mileage"
            label="Mileage"
            rules={[{ required: true, type: 'number', message: 'Please input the mileage of your car' }]}
          >
            <InputNumber placeholder="0" defaultValue={0} />
          </Form.Item>
          <Form.Item
            name="year"
            label="Year"
            rules={[{ required: true, type: 'number', message: 'Please input the production year of your car' }]}
          >
            <InputNumber placeholder="2020" defaultValue={2020} />
          </Form.Item>
        </ModalAntd>
      </>
    )
}

export default Modal;