// AppointmentItem.js
import React from 'react';
import { Button } from 'react-bootstrap';

const AppointmentItem = ({ item, onConfirm, onCancel }) => (
  <div className='d-flex border-bottom' key={item.id}>
    <img alt='person' src={`/${item.img}`} className='img-avatar' />
    <div className='m-2 d-flex justify-content-between w-100'>
      <div>
        <p className='name d-inline fs-5'>{item.name}</p>
        <p className='time fs-6'>{item.time}</p>
      </div>
      <div className='m-2'>
        <Button variant='outline-primary' className='h-50 m-4' onClick={() => onConfirm(item.id)}>تأكيد الموعد</Button>
        <Button variant='outline-danger' className='h-50 m-4' onClick={() => onCancel(item.id)}>الغاء الموعد</Button>
      </div>
    </div>
  </div>
);

export default AppointmentItem;
