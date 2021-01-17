import React, { useState } from 'react';
import axios from '../../config/axios';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import LocalStorageService from '../../services/LocalStorageService';
import { useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';



function Login(props) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const onRedirect = (path) => {
    history.push(path);
    setShow(!show);
  };
  const onFinish = async (values) => {
    try {
      const res = await axios.post('/auth/admin/login', {
        ...values
      });
      if (res)
        notification.success({
          description: "login success"
        });
      props.history.push('/admin/dashboard');
      LocalStorageService.setToken(res.data.token);
    } catch (error) {
      notification.error({
        description: "error login"
      });
    }
  };
  return (
    <Row justify="center" style={{ marginTop: "10rem" }}>
      <Col span={8}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row style={{ color: "white", fontSize: "1.2rem" }}>
            ADMIN LOGIN
          </Row>
          <br></br>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              style={{ height: "2.5rem", borderRadius: "0.6rem" }} />


          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              style={{ height: "2.5rem", borderRadius: "0.6rem" }} />

          </Form.Item>


          <Form.Item>
            <Row justify="space-around">
              <Button style={{ backgroundColor: 'white', borderRadius: "0.6rem", width: "7rem", height: "3rem" }}
                onClick={() => onRedirect("/")}>
                BACK
              </Button>
              <Button type="primary" htmlType="submit" className="login-form-button"
                style={{ backgroundColor: "#66BD52", borderRadius: "0.6rem", width: "7rem", height: "3rem" }}>
                Log in
        </Button>
            </Row>
            <Row justify="center">
              Or   </Row>
            <Row justify="center"><a href="/admin/register">register admin now!</a></Row>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
