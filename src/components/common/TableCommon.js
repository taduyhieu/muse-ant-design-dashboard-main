import { Table } from "antd";

function TableCommon({ columns, data }) {
  return (
    <>
      <div className="table-responsive">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="ant-border-space"
        />
      </div>
    </>
  );
}
export default TableCommon;
