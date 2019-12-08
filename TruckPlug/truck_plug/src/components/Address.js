import React from 'react';
import {Row, Col, Table } from 'reactstrap';

const Address = (props) => {
    const { data } = props;

    if(!data)
        return <div></div>;

    return (
        <Row className="address">
            <Col sm="12" md={{ size: 4, offset: 4 }}>
                <h2>{data.name}</h2>
                <img />
                <span></span>
                <span></span>
                <Table>
                    <tbody></tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default Address;