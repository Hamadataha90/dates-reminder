import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AppointmentHeader = ({ appointments }) => {  // Destructure the appointments prop
  return (
    <Row className='justify-content-center'>
      <Col sm="8">
        لديك {appointments.length} مواعيد
      </Col>
    </Row>
  );
};

export default AppointmentHeader;
