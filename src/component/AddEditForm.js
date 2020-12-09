import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, Radio, DatePicker } from "antd";
import Upload from "../component/common/Upload";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../redux/Action/Student";

const { Option } = Select;

const countryList = [
  "India",
  "USA",
  "Canada",
  "Russia",
  "Japan",
  "Germany",
  "France",
  "Switzerland",
  "Australia",
];
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} initialeValue="91">
      <Option value="91">+91</Option>
      <Option value="87">+87</Option>
      <Option value="92">+92</Option>
    </Select>
  </Form.Item>
);
const AddEditForm = ({ heading }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(addStudent({ ...values.user, images }));
  };

  const [images, setImages] = useState([]);
  return (
    <>
      <h2>{heading}</h2>
      <Row>
        <Col xl={15} lg={15} md={12} sm={24} xs={24}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "fName"]}
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "mName"]} label="Middle Name">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "lName"]} label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "address"]} label="Address">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={["user", "mobNo"]} label="Mobile no">
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name={["user", "gender"]} label="Gender">
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Other">Other</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name={["user", "dob"]} label="DOB">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name={["user", "country"]} label="Country">
              <Select>
                {countryList.map((item) => (
                  <Option value={item} key={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xl={9} lg={9} md={12} sm={24} xs={24}>
          <div className="upload_container">
            <Upload handleImageUpload={(list) => setImages(list)} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AddEditForm;
