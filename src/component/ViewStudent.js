/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Table from "./common/Table";
import Avatar from "./common/Avatar";
import { Divider, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../redux/Action/Student";
import * as Routes from "../lib/constants/routes";
import { useHistory } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const ViewStudent = () => {
  const { sutdList } = useSelector(({ Student }) => Student);
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * @author Ankush Chavan
   * @description Here we have called api to get students
   */
  useEffect(() => {
    dispatch(getStudents());
  }, []);

  const columns = [
    {
      title: "ID",
      width: 50,
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "fName",
      width: 200,
      render: (text, item) => (
        <Avatar
          src={(item.media && item.media.url) || null}
          text={text}
          id={item.id}
        />
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "DOB",
      dataIndex: "dob",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Action",
      key: "action",
      render: (text, item) => (
        <span>
          <a
            href="javascript:;"
            // onClick={() => save(item.id)}
          >
            <EditOutlined />
          </a>
          <Divider type="vertical" />
          <Popconfirm
            title="Sure to delete?"
            // onConfirm={cancel}
          >
            <a style={{ color: "red" }}>
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <>
      <h2>View Student</h2>
      <Table
        columns={columns}
        data={sutdList}
        // onSelectChange={setSelectedRowKeys}
        // selectedRowKeys={selectedRowKeys}
      />
    </>
  );
};
