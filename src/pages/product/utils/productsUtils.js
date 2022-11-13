import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const initParams = {
  limit: 10,
  page: 1,
  keyword: "",
};

export const productColumns = () => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      width: "32%",
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "ACTION",
      key: "action",
      dataIndex: "action",
      render: (action, item) => (
        <>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            size="small"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            size="small"
          />
        </>
      ),
    },
  ];
};
