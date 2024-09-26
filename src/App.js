import React from 'react';
import { Container } from 'react-bootstrap';
import AppointmentList from './components/AppointmentList';
import AppointmentControls from './components/AppointmentControls';
import AppointmentData from './components/AppointmentData';
import AppointmentHeader from './components/AppointmentHeader';
import UseAppointments from './components/UseAppointments';

const App = () => {
  const {
    appointments,
    handleConfirm,
    handleCancel,
    handleClearAll,
    handleResetData,
  } = UseAppointments();

  return (
    <div className='app'>
      <Container className='app-container'>
        <AppointmentHeader appointments={appointments} />

        <div className="appointment-section">
          <AppointmentList 
            appointments={appointments}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
          
          <AppointmentControls 
            onClearAll={handleClearAll}
            onResetData={handleResetData}
          />
        </div>

        <AppointmentData appointments={appointments} />
      </Container>
    </div>
  );
};

export default App;
