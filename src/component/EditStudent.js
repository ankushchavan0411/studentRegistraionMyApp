import React from "react";
import AddEditForm from "./AddEditForm";
import { Modal } from "antd";

const EditStudnet = ({ visible, setVisible, editId }) => (
  <Modal
    width={900}
    visible={visible}
    title="Edit Student"
    footer={null}
    onCancel={() => setVisible(false)}
  >
    <AddEditForm heading={"Edit Student"} editId={editId} />
  </Modal>
);

export default EditStudnet;
