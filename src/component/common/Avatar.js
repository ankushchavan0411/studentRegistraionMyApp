/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom";
import * as Routes from "../../lib/constants/routes";
import { Avatar, Row, Col } from "antd";
import React from "react";

/**
 * @author Ankush Chavan
 * @description Avatar is used to show the image in list view
 */
export default ({ text, src, id }) => {
  const history = useHistory();
  return (
    <div
      tabIndex={0}
      role="button"
      className="_cursor_pointer"
      onKeyDown={() =>
        history.push({ pathname: `${Routes.VIEW_STUDENT}/${id}` })
      }
      onClick={() => history.push({ pathname: `${Routes.VIEW_STUDENT}/${id}` })}
    >
      <Row>
        <Avatar shape="square" size={40} src={src || null} />

        <Col xl={18} lg={18} md={18} sm={18} xs={18}>
          <strong>
            <span className=" _capitalize_text" title={text}>
              {text}
            </span>
          </strong>
        </Col>
      </Row>
    </div>
  );
};
