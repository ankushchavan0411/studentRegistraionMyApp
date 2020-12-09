import { Table } from "antd";
import React from "react";

/**
 * @author Ankush Chavan
 * @description Table is used in whole application to show data
 */

export default ({
  columns,
  data,
  loading,
}) => {
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={false}
      tableLayout="fixed"
      rowKey="id"
    />
  );
};
