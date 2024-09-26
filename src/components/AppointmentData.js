import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AppointmentData = ({ appointments }) => (
  <Row className='justify-content-center '>
    <Col sm="8">
      <div className='p-1 bg-light border'>
        <h4>بيانات المواعيد</h4>
        {appointments.length ? (
          appointments.map(item => (
            <div key={item.id}>
              <p>اسم: {item.name}</p>
              <p>الوقت: {item.time}</p>
              <p>تم تأكيد الموعد: {item.confirmed ? 'نعم' : 'لا'}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>لا توجد بيانات لعرضها</p>
        )}
      </div>
    </Col>
  </Row>
);

export default AppointmentData;
