/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Table from "./common/Table";
import Avatar from "./common/Avatar";
import { Divider, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../redux/Action/Student";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EditStudent from "./EditStudent";

export const ViewStudent = () => {
  const { sutdList } = useSelector(({ Student }) => Student);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [editId, setEditId] = useState("");

  /**
   * @author Ankush Chavan
   * @description Here we have called api to get students
   */
  useEffect(() => {
    dispatch(getStudents());
  }, []);

  /**
   * @author Ankush Chavan
   * @description handleEditOnChange is used to open edit modal
   */
  const handleEditOnChange = (id) => {
    setVisible(true);
    setEditId(id);
  };

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
          src={
            (item.images && item.images.length > 0 && item.images[0].url) ||
            null
          }
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
          <a onClick={() => handleEditOnChange(item.id)}>
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
      <EditStudent visible={visible} setVisible={setVisible} editId={editId} />
      <h2>View Student</h2>
      <Table columns={columns} data={sutdList} />
    </>
  );
};
