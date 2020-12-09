/* eslint-disable import/no-anonymous-default-export */
import { Avatar, Row, Col } from "antd";
import React from "react";

/**
 * @author Ankush Chavan
 * @description Avatar is used to show the image in list view
 */
export default ({ text, src }) => {
  return (
    <Row>
      <Avatar shape="square" size={40} src={src || null} />
      <Col xl={18} lg={18} md={18} sm={18} xs={18}>
        <strong style={{ padding: "0px 5px" }}>{text}</strong>
      </Col>
    </Row>
  );
};
