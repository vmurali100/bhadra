import "./App.css";
import { Alert, Button, Card, Col, Modal, Row } from "antd";
import { useState } from "react";
import Arc from './Score'
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
            <Card className="score-details">
              <Arc />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Alert
                message="Success Text"
                type="success"
                className="first-alert"
                action={
                  <Button
                    size="small"
                    type="ghost"
                    className="overdue-accounts"
                  >
                    2
                  </Button>
                }
              />
              <Alert message="Info Text" type="info" 
              action={
                <Button
                  size="small"
                  type="ghost"
                  className="overdue-amount"
                >
                  50k
                </Button>
              }/>
              <Alert message="Warning Text" type="warning" />
              <Alert message="Error Text" type="error" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Card>
              <Row>
                <Col span={24}>
                  <p className="max-days">Max Days Unpaid</p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Row>
                    <Col span={12} className="left-content">
                      <Alert
                        message="Tags"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />

                      <Alert
                        message="Argi Loan"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                      <Alert
                        message="Gold Loan"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                      <Alert
                        message="Personal Loan"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                      <Alert
                        message="Credit Card"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                    </Col>
                    <Col span={12} className="rigt-content">
                      <Alert
                        message="Others"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                      <Alert
                        message="Two Wheeler Loan"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                      <Alert
                        message="Auto Loan/Commercial Vehicle"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                      <Alert
                        message="Housing/Home Loan"
                        type="error"
                        className="default-alert"
                        action={
                          <Button size="small" className="details">
                            50
                          </Button>
                        }
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            {/* <Row>
              <Col span={12}>
                <Card></Card>
              </Col>
              <Col span={12}>
                <Card></Card>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default App;
