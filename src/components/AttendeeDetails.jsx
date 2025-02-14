import React, { useState } from 'react';

const AttendeeDetails = ({ setAttendee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = () => {
    if (validate()) {
      setAttendee({ name, email, specialRequest });
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '32px',
      padding: '24px',
      backgroundColor: '#08252b',
      borderRadius: '32px',
      border: '1px solid #07373f'
    }}>
      {/* Form Fields */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <span style={{
          color: '#fafafa',
          fontFamily: 'Roboto',
          fontSize: '16px'
        }}>Enter your name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); handleInputChange(); }}
          style={{
            width: '100%',
            height: '48px',
            padding: '12px',
            backgroundColor: 'transparent',
            border: '1px solid #07373f',
            borderRadius: '12px',
            color: '#fff',
            fontFamily: 'Roboto',
            fontSize: '16px'
          }}
        />
        {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <span style={{
          color: '#fafafa',
          fontFamily: 'Roboto',
          fontSize: '16px'
        }}>Enter your email *</span>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); handleInputChange(); }}
          style={{
            width: '100%',
            height: '48px',
            padding: '12px',
            backgroundColor: 'transparent',
            border: '1px solid #07373f',
            borderRadius: '12px',
            color: '#fff',
            fontFamily: 'Roboto',
            fontSize: '16px'
          }}
        />
        {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <span style={{
          color: '#fafafa',
          fontFamily: 'Roboto',
          fontSize: '16px'
        }}>Special request?</span>
        <textarea
          value={specialRequest}
          onChange={(e) => { setSpecialRequest(e.target.value); handleInputChange(); }}
          style={{
            width: '100%',
            height: '103px',
            padding: '12px',
            backgroundColor: 'transparent',
            border: '1px solid #07373f',
            borderRadius: '12px',
            color: '#fff',
            fontFamily: 'Roboto',
            fontSize: '16px'
          }}
        />
      </div>
    </div>
  );
};

export default AttendeeDetails;
