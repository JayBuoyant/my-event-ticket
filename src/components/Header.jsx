import React from 'react';

const Header = ({ logoSrc = 'https://dashboard.codeparrot.ai/api/image/Z6-WbY9nxTWt8i3g/hugeicon.png', ticzSrc = 'https://dashboard.codeparrot.ai/api/image/Z6-WbY9nxTWt8i3g/ticz.png', arrowSrc = 'https://dashboard.codeparrot.ai/api/image/Z6-WbY9nxTWt8i3g/div.png' }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '12px 16px',
      background: 'rgba(5, 37, 44, 0.4)',
      borderRadius: '24px',
      border: '1px solid #197686',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }}>
      {/* Logo Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'center'
      }}>
        <div style={{
          padding: '6px 8px',
          background: '#052f35',
          borderRadius: '12px',
          border: '1px solid #0e464f'
        }}>
          <img 
            src={logoSrc} 
            alt="ticket"
            style={{
              width: '24px',
              height: '24px'
            }}
          />
        </div>
        <img 
          src={ticzSrc} 
          alt="ticz"
          style={{
            width: '43.79px',
            height: '22.62px'
          }}
        />
      </div>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        alignItems: 'center'
      }}>
        <div style={{
          padding: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            color: '#fff',
            fontFamily: 'JejuMyeongjo',
            fontSize: '18px',
            fontWeight: 400
          }}>Events</span>
        </div>
        <div style={{
          padding: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            color: '#b3b3b3',
            fontFamily: 'JejuMyeongjo',
            fontSize: '18px',
            fontWeight: 400
          }}>My Tickets</span>
        </div>
        <div style={{
          padding: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            color: '#b3b3b3',
            fontFamily: 'JejuMyeongjo',
            fontSize: '18px',
            fontWeight: 400
          }}>About Project</span>
        </div>
      </div>

      {/* My Tickets Button */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        padding: '16px 24px',
        background: '#fff',
        borderRadius: '12px',
        border: '1px solid rgba(213, 234, 0, 0.1)',
        cursor: 'pointer',
        alignItems: 'center'
      }}>
        <span style={{
          color: '#0a0c11',
          fontFamily: 'JejuMyeongjo',
          fontSize: '16px',
          fontWeight: 400,
          textTransform: 'uppercase',
          lineHeight: '20px'
        }}>My Tickets</span>
        <img 
          src={arrowSrc} 
          alt="arrow"
          style={{
            width: '16px',
            height: '16px'
          }}
        />
      </div>
    </div>
  );
};

export default Header;

