/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import { Select, Spin } from "antd";
import { FILTER_SEARCH } from "constants/const";
import * as Const from "constants/const";

const { Option } = Select;

/**
 * @author Ankush Chavan
 * @description Select is a common component used for single or multiselect in whole application
 */
export default ({
  selectedItems,
  setSelectedItems,
  endpoint,
  label,
  disabled,
  type,
  required,
  component,
}) => {
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(false);
  const fetchItems = (value) => {
    setItems([]);
    setFetching(true);
    fetch(`${process.env.REACT_APP_URL}${endpoint}${FILTER_SEARCH}${value}`)
      .then((response) => response.json())
      .then((body) => {
        if (component) {
          setItems(body.data.data);
        } else {
          setItems(body.data);
        }

        setFetching(false);
      });
  };
  return (
    <>
      <label htmlFor="select">
        {label}
        <span className="_required">{required ? "*" : ""}</span>
      </label>
      <Select
        id="select"
        style={{ width: "100%" }}
        placeholder="Select"
        onChange={(value) => {
          setSelectedItems(
            type === "multiple" ? value && value.map((item) => item) : value
          );
        }}
        showArrow
        showSearch
        labelInValue
        value={
          Object.keys(
            selectedItems === undefined || selectedItems === null
              ? {}
              : selectedItems
          ).length === 0
            ? []
            : selectedItems
        }
        notFoundContent={
          fetching ? <Spin size="small" /> : <span>{Const.NO_DATA_FOUND}</span>
        }
        filterOption={false}
        onSearch={fetchItems}
        onFocus={fetchItems}
        disabled={disabled}
        mode={type}
        getPopupContainer={(trigger) => trigger.parentNode}
      >
        {items &&
          items.map((item) => (
            <Option
              key={item.type || item.id || item.name}
              id={type}
              className="_capitalize_text"
            >
              {item.name}
            </Option>
          ))}
      </Select>
    </>
  );
};
