import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'antd';
import axios from '../../config/axios';
import styled from "styled-components";
import './DashBoard.css';

const Background = styled.div`
  width: 100vw;
  position: relative;
  height:100vh;
  background-color:white;
  color:black;
`;




const columns = [
    {
        title: <span style={{ color: "white" }}>ชื่อ</span>,
        dataIndex: 'name',
        align: 'center',
        width: "5rem",
    },
    {
        title: <span style={{ color: "white" }}>นามสกุล</span>,
        dataIndex: 'surname',
        align: 'center',
        width: "10rem"
    },
    {
        title: <span style={{ color: "white" }}>ที่อยู่</span>,
        dataIndex: 'address',
        align: 'center',
        width: "10rem",
    },
    {
        title: <span style={{ color: "white" }}>เบอร์โทร</span>,
        dataIndex: 'phone_Number',
        align: 'center',
        width: "10rem",
        render: (text, record) => {
            let first, second, third;
            first = record.phone_Number?.slice(0, 3);
            second = record.phone_Number?.slice(3, 6);
            third = record.phone_Number?.slice(6, 10);
            return `${first}-${second}-${third}`;
        }
    },
    {
        title: <span style={{ color: "white" }}>อีเมล</span>,
        dataIndex: 'email',
        align: 'center',
        width: "10rem"
    },
    {
        title: <span style={{ color: "white" }}>เช็คอินล่าสุด</span>,
        dataIndex: 'updatedAt',
        align: 'center',
        width: "15rem",
        render: (text, record) => {
            let date = new Date(record.updatedAt).getDate();
            let month = new Date(record.updatedAt).getMonth();
            let m;
            switch (month) {
                case 0:
                    m = 'มกราคม';
                    break;
                case 1:
                    m = 'กุมภาพันธ์';
                    break;
                case 2:
                    m = 'มีนาคม';
                    break;
                case 3:
                    m = 'เมษายน';
                    break;
                case 4:
                    m = 'พฤษภาคม';
                    break;
                case 5:
                    m = 'มิถุนายน';
                    break;
                case 6:
                    m = 'กรกฎาคม';
                    break;
                case 7:
                    m = 'สิงหาคม';
                    break;
                case 8:
                    m = 'กันยายน';
                    break;
                case 9:
                    m = 'ตุลาคม';
                    break;
                case 10:
                    m = 'พฤศจิกายน';
                    break;
                default:
                    m = 'ธันวาคม';
                    break;
            }
            return `${date} ${m} ${new Date(record.updatedAt).getFullYear()}, ${new Date(record.updatedAt).getHours()}:${new Date(record.updatedAt).getMinutes()} น.`;
        }
    },
];

function DashBoard() {
    const [users, setUsers] = useState();
    const newMonth = new Date().getMonth();
    let setMonth;
    switch (newMonth) {
        case 0:
            setMonth = 'มกราคม';
            break;
        case 1:
            setMonth = 'กุมภาพันธ์';
            break;
        case 2:
            setMonth = 'มีนาคม';
            break;
        case 3:
            setMonth = 'เมษายน';
            break;
        case 4:
            setMonth = 'พฤษภาคม';
            break;
        case 5:
            setMonth = 'มิถุนายน';
            break;
        case 6:
            setMonth = 'กรกฎาคม';
            break;
        case 7:
            setMonth = 'สิงหาคม';
            break;
        case 8:
            setMonth = 'กันยายน';
            break;
        case 9:
            setMonth = 'ตุลาคม';
            break;
        case 10:
            setMonth = 'พฤศจิกายน';
            break;
        default:
            setMonth = 'ธันวาคม';
            break;
    }
    const fetchData = async () => {
        const res = await axios.get("/auth/getUsers");
        setUsers(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Background>
            <Row justify="center">
                <Col span={16} style={{ paddingTop: "7rem" }}>
                    <h1 style={{ fontWeight: "bold" }}>ข้อมูลผู้ใช้</h1>
                    <div style={{ opacity: "40%" }}>อัพเดทล่าสุด วันที่ {new Date().getDate()} {setMonth} {new Date().getFullYear()} เวลา {new Date().getHours()}:{new Date().getUTCMinutes()} น.</div>
                    <br />
                    <Table columns={columns} dataSource={users} />
                    <br />
                    <div style={{ textAlign: 'center', color: "#66BD52" }}>Doosoft copyright &copy; 2020</div>
                </Col>
            </Row>
        </Background>
    );
}

export default DashBoard;
