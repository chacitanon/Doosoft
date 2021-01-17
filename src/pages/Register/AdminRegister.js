import React, { useState } from 'react';
import axios from '../../config/axios';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col, notification } from 'antd';
function AdminRegister(props) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const onRedirect = (path) => {
    history.push(path);
    setShow(!show);
  };
  const onFinish = async (values) => {
    try {
      console.log(values);
      const res = await axios.post('/auth/admin/register', {
        ...values
      });
      if (res)
        notification.success({
          description: "admin register success"
        });
      props.history.push('/admin/dashboard');
    } catch (error) {
      notification.error({
        description: "wrong"
      });
    }
  };
  return (
    <Row justify="center" style={{ marginTop: "15rem" }}>
      <Col span={10}>
        <Form
          layout="horizontal"
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}

        >
          <Row justify="center" style={{ color: "white", fontSize: "1.2rem" }}>
            <Col span={20} >
              ADMIN REGISTER
                  </Col>
          </Row>
          <br></br>
          <Row justify="center">
            <Col span={20}>
              <Form.Item
                name="username"

                rules={[
                  {
                    required: false,
                    message: "Please input your Username!",
                  },
                ]} >

                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  style={{ height: "2.5rem", borderRadius: "0.6rem" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={20}>
              <Form.Item
                name="password"

                rules={[
                  {
                    required: false,
                    message: "Please input your Password",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                  style={{ height: "2.5rem", borderRadius: "0.6rem" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={20}>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: false,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Confirm Password"
                  style={{ height: "2.5rem", borderRadius: "0.6rem" }} />
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
              Register
              </Button>
          </Row>

        </Form>
      </Col>
    </Row>
  );
}

export default AdminRegister;
