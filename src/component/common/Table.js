import { Table } from "antd";
import React from "react";

/**
 * @author Ankush Chavan
 * @description Table is used in whole application to show data
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  columns,
  data,
  loading,
  selectedRowKeys,
  onSelectChange,
}) => {
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <Table
      loading={loading}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={false}
      tableLayout="fixed"
      rowKey="id"
    />
  );
};
