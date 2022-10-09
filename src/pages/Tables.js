import { useEffect, useState } from "react";

import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Typography,
  Pagination,
  Modal,
} from "antd";
import axios from "axios";
import { ContactsOutlined } from "@ant-design/icons";

const { Title } = Typography;
// table code start
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
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
  },
];
// const data = [...Array(6).keys()].map((item) => {
//   return {
//     id: item + 1,
//     title: `Product ${item + 1}`,
//     action: (
//       <>
//         <div className="ant-employed">
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   };
// });

// const data = [
//   {
//     key: "1",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face2}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Michael John</Title>
//             <p>michael@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Manager</Title>
//           <p>Organization</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button type="primary" className="tag-primary">
//           ONLINE
//         </Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>23/04/18</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "2",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face3}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Alexa Liras</Title>
//             <p>alexa@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Programator</Title>
//           <p>Developer</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button className="tag-badge">ONLINE</Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>23/12/20</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "3",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Laure Perrier</Title>
//             <p>laure@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Executive</Title>
//           <p>Projects</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button type="primary" className="tag-primary">
//           ONLINE
//         </Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>03/04/21</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },
//   {
//     key: "4",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face4}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Miriam Eric</Title>
//             <p>miriam@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Marketing</Title>
//           <p>Organization</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button type="primary" className="tag-primary">
//           ONLINE
//         </Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>03/04/21</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },
//   {
//     key: "5",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face5}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Richard Gran</Title>
//             <p>richard@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Manager</Title>
//           <p>Organization</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button className="tag-badge">ONLINE</Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>23/03/20</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "6",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face6}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>John Levi</Title>
//             <p>john@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Tester</Title>
//           <p>Developer</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button className="tag-badge">ONLINE</Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>14/04/17</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },
// ];

function Tables() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    console.log("handing");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("ready");
    const result = axios
      .get("http://localhost:8000/api/products")
      .then(function (response) {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
          <Pagination defaultCurrent={1} total={data.length} />
        </Row>
      </div>
    </>
  );
}

export default Tables;
