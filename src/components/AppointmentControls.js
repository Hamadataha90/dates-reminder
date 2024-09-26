import React from 'react';
import { Row, Col } from 'react-bootstrap';


const AppointmentControls = ({ onClearAll, onResetData,}) => (
  <Row className='justify-content-center my-2'>
    <Col sm="8" className='d-flex justify-content-between'>
      <button className='btn-style' onClick={onClearAll}>إمسح الكل</button>
      <button className='btn-style' onClick={onResetData}>استعادة البيانات</button>
    </Col>
  </Row>
);

export default AppointmentControls;
