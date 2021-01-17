import React, { useState } from 'react';
import { Col, Input, Row, Form, Button, notification, Checkbox } from 'antd';
import axios from '../../config/axios';
import { useHistory } from "react-router-dom";

function UserRegister(props) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const onRedirect = (path) => {
    history.push(path);
    setShow(!show);
  };

  const onFinish = async (values) => {
    try {
      console.log(values);
      const res = await axios.post('/auth/register', {
        ...values
      });
      if (res)
        notification.success({
          description: "register success"
        });
      props.history.push('/complete');
    } catch (error) {
      notification.error({
        description: "wrong"
      });
    }
  };
  return (
    <Row>

      <Col style={{ marginLeft: "11rem" }}>
        <Row justify="center">
          <img
            style={{ marginTop: "5.5rem", height: "7rem", width: "12rem" }}
            src="https://res.cloudinary.com/da8hlqolk/image/upload/v1610727677/doosoft/Screenshot_17-removebg-preview_gfzy2w.png">
          </img>
        </Row>
        <br></br>
        <Row>

          <Col >
            <Form
              layout="horizontal"
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}

            >
              <Row justify="center"
                style={{ color: "white", fontSize: "1.2rem" }}>
                <Col span={14} >
                  JOIN US
                  </Col>
              </Row>
              <br></br>
              <Row justify="center">
                <Col span={14}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: false,
                        message: "Please input your Name!",
                      },
                    ]} >

                    <Input
                      placeholder="Name"
                      style={{ height: "2.5rem", borderRadius: "0.6rem" }}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="center">
                <Col span={14}>
                  <Form.Item
                    name="surname"
                    rules={[
                      {
                        required: false,
                        message: "Please input your surname!",
                      },
                    ]} >

                    <Input
                      placeholder="Surname"
                      style={{ height: "2.5rem", borderRadius: "0.6rem" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={14}>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: false,
                        message: "Please input your Address",
                      },
                    ]} >

                    <Input placeholder="Address"
                      style={{ height: "7rem", borderRadius: "0.6rem" }}

                    />
                  </Form.Item>
                </Col>
              </Row>


              <Row justify="center">
                <Col span={14}>
                  <Form.Item
                    name="phone_Number"
                    rules={[
                      {
                        required: false,
                        message: "Please input your Tel.",
                      },
                    ]}
                  >
                    <Input placeholder="Tel."
                      style={{ height: "2.5rem", borderRadius: "0.6rem" }} />
                  </Form.Item>
                </Col>
              </Row>


              <Row justify="center">
                <Col span={14}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: false,
                        message: "Please input your E-mail!!",
                      },
                    ]}
                  >
                    <Input placeholder="E-mail"
                      style={{ height: "2.5rem", borderRadius: "0.6rem" }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={14}>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject("Should accept agreement"),
                      },
                    ]}
                  >
                    <Checkbox style={{ color: "white" }}>
                      I accept <span style={{ color: "green" }}>Doosoft</span> terms of service, community guidelines and privacy policy.
                    </Checkbox>
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="space-around">
                <Button style={{ backgroundColor: 'white', borderRadius: "0.6rem", width: "7rem", height: "3rem" }}
                  onClick={() => onRedirect("/")}>
                  BACK
              </Button>
                <Button type="primary" htmlType="submit"
                  style={{ backgroundColor: "#66BD52", borderRadius: "0.6rem", width: "7rem", height: "3rem" }}>
                  CONTINUE
              </Button>
              </Row>

            </Form>
          </Col>
        </Row>
      </Col>
      <Col style={{ marginLeft: "5rem", marginTop: "5rem" }}>
        <img src="https://res.cloudinary.com/da8hlqolk/image/upload/v1610734941/doosoft/coding_w4ox0y.png" style={{ width: "35rem" }}></img>
      </Col>
    </Row>
  );
}

export default UserRegister;
