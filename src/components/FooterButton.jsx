import React from 'react';
import jsPDF from 'jspdf';

const FooterButtons = ({ onBookAnother = () => {} }) => {
  const buttonStyles = {
    base: {
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      lineHeight: '150%',
      fontFamily: 'JejuMyeongjo',
      fontWeight: 400,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      flex: 1,
      textAlign: 'center',
      minWidth: '145px',
    },
    secondary: {
      backgroundColor: 'transparent',
      border: '1px solid #24a0b5',
      color: '#24a0b5',
    },
    primary: {
      backgroundColor: '#24a0b5',
      border: 'none',
      color: '#fafafa',
    }
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px',
    width: '100%',
    height: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '24px',
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.text('Your Ticket for the Event', 10, 10);

    doc.save('Ticket-Event.pdf');
  };

  return (
    <div style={containerStyles}>
      <button 
        style={{
          ...buttonStyles.base,
          ...buttonStyles.secondary,
        }}
        onClick={onBookAnother}
      >
        Book Another Ticket
      </button>
      <button 
        style={{
          ...buttonStyles.base,
          ...buttonStyles.primary,
        }}
        onClick={handleDownload}
      >
        Download Ticket
      </button>
    </div>
  );
};

export default FooterButtons;
