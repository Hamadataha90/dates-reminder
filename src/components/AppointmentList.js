import React from 'react';
import AppointmentItem from './AppointmentItem';
import { Row, Col } from 'react-bootstrap';

const AppointmentList = ({ appointments, onConfirm, onCancel }) => (
  <div className='rectangle container'>
    <Row className='d-flex justify-content-between m-3'>
      <Col sm="8">
        {appointments.length ? (
          appointments.map((item) => (
            <AppointmentItem 
              item={item} 
              key={item.id} 
              onConfirm={onConfirm} 
              onCancel={onCancel} 
            />
          ))
        ) : (
          <h2 className='text-center p-5'>لا يوجد مواعيد</h2>
        )}
      </Col>
    </Row>
  </div>
);

export default AppointmentList;
