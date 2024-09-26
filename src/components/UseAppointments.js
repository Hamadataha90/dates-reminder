// src/components/UseAppointments.js
import { useEffect, useState } from 'react';
import initialAppointments from './data';  // Adjust the path if necessary

const UseAppointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleConfirm = (id) => {
    setAppointments(appointments.map(item => item.id === id ? { ...item, confirmed: true } : item));
    alert('Appointment confirmed!');
  };

  const handleCancel = (id) => {
    setAppointments(appointments.filter(item => item.id !== id));
    alert('Appointment canceled!');
  };

  const handleClearAll = () => {
    setAppointments([]);
  };

  const handleResetData = () => {
    setAppointments(initialAppointments);
  };

  useEffect(() => {
    setAppointments([])
  }, [])

  return {
    appointments,
    handleConfirm,
    handleCancel,
    handleClearAll,
    handleResetData
  };
};

export default UseAppointments;
