/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
  },
};

const InputText = ({
  name,
  placeholder,
  error,
  defaultValue,
  handleOnChange,
  type,
  rows,
  disabled,
  required,
  label,
  addonBefore,
  addonAfter,
}) => {
  return (
    <>
      <label htmlFor="_required">
        {label || name}
        <span id="_required" className="_required">
          {required ? "*" : ""}
        </span>
      </label>
      <Form.Item
        {...formItemLayout}
        hasFeedback
        validateStatus={error ? "error" : ""}
        help={error || ""}
      >
        {type === "textArea" ? (
          <TextArea
            placeholder={placeholder}
            onChange={(e) => handleOnChange(name, e)}
            id={name}
            value={defaultValue}
            rows={rows}
            disabled={disabled || false}
          />
        ) : type === "password" ? (
          <Input.Password
            placeholder={placeholder}
            onChange={(e) => handleOnChange(name, e)}
            allowClear
            id={name}
            value={defaultValue}
            disabled={disabled || false}
          />
        ) : (
          <Input
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            placeholder={placeholder}
            onChange={(e) => handleOnChange(name, e)}
            allowClear
            id={name}
            value={defaultValue}
            disabled={disabled || false}
          />
        )}
      </Form.Item>
    </>
  );
};
export default InputText;
