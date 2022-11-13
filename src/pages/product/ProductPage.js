import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Pagination, Modal, Form, Input } from "antd";

import TableCommon from "./../../components/common/TableCommon";
import { productColumns, initParams } from "./utils/productsUtils";
import { ProductService } from "./redux/services";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [params, setParams] = useState(initParams);
  const showModal = () => {
    console.log("handing");
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [data, setData] = useState([]);
  const getProducts = (params = null) => {
    ProductService.apiGetProducts(params).then((res) => {
      if (res.status === 200) {
        setData(res.data.data);
      }
    });
  };
  useEffect(() => {
    getProducts(params);
  }, []);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    ProductService.apiCreateProduct(values).then((res) => {
      if (res.status === 201) {
        handleCancel();
        getProducts(params);
      }
      console.log(res.status);
    });
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Authors Table"
              extra={
                <>
                  <Button type="primary" onClick={showModal}>
                    Create
                  </Button>
                </>
              }
            >
              <TableCommon columns={productColumns()} data={data} />
            </Card>
          </Col>
          <Pagination defaultCurrent={1} total={data.length} />
        </Row>
      </div>
    </>
  );
}

export default ProductPage;
