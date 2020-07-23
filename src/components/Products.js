import React, { Component } from 'react'
import {
    Card, CardImg, CardBody, CardTitle,
    CardSubtitle, CardText, CardGroup, Button, Col, Row,
} from 'reactstrap';
import datas from '../data';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h2>สินค้าทั้งหมด</h2>
                <Row>
                    {datas.products.map(pd =>
                        <Col sm="3">
                            <Card>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle>{pd.name}</CardTitle>
                                    <CardSubtitle>ราคา {pd.price} บาท</CardSubtitle>
                                    <CardSubtitle>จำนวน {pd.numStock}</CardSubtitle>
                                    <CardText>รายละเอียด</CardText>
                                    <Button color="warning" > ++เพิ่มลงตะกร้าสินค้า </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                    }
                </Row>
            </div>
        )
    }
}
