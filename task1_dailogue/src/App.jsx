import "./App.css";
import { Alert, Button, Card, Col, Modal, Row } from "antd";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        footer={null}
        open={isModalOpen}
        style={{ padding: 0, width: 940 }}
      >
        <Row>
          <p className="modal-title">Applicant Bureau Summary</p>
        </Row>

        <Row>
          <Col span={12}>
            <Card>
              <h2>Chart will come here ....</h2>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Alert message="# of Overdue accounts" type="info" />
              <Alert message="Error Text" type="error" />
              <Alert message="Info Text" type="info" />
              <Alert message="Success Text" type="success" />
              <Alert message="Overdue amount" type="warning" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={12}>
                <Card></Card>
              </Col>
              <Col span={12}>
                <Card></Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default App;
