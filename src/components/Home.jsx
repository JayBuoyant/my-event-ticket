import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const [selectedTicket, setSelectedTicket] = useState('free');
  const [ticketCount, setTicketCount] = useState('1');
  const navigate = useNavigate()

  return (
    <div style={{ width: '100%', minWidth: '604px', padding: '24px', boxSizing: 'border-box' }}>
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px', 
        width: '100%', 
        marginBottom: '32px'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ 
            fontFamily: 'JejuMyeongjo', 
            fontSize: '32px', 
            color: '#ffffff' 
          }}>
            Ticket Selection
          </div>
          <div style={{ 
            fontFamily: 'Roboto', 
            fontSize: '16px', 
            color: '#fafafa' 
          }}>
            Step 1/3
          </div>
        </div>
        
        <div style={{ 
          width: '100%', 
          height: '4px', 
          backgroundColor: '#0e464f', 
          borderRadius: '5px', 
          position: 'relative' 
        }}>
          <div style={{ 
            width: '38%', 
            height: '100%', 
            borderRadius: '5px',
            backgroundImage: `url('https://dashboard.codeparrot.ai/api/image/Z6-I7uepongUSRkM/progress.png')`,
            backgroundSize: 'cover'
          }} />
        </div>
      </div>

      {/* Event Details Section */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px', 
        width: '100%' 
      }}>
        <div style={{ 
          padding: '24px', 
          backgroundColor: '#0a0c111a', 
          borderRadius: '24px', 
          border: '2px solid #07373f' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '8px', 
            alignItems: 'center' 
          }}>
            <h1 style={{ 
              fontFamily: 'Road Rage', 
              fontSize: '62px', 
              color: '#fafafa', 
              margin: 0 
            }}>
              Techember Fest '25
            </h1>
            <p style={{ 
              fontFamily: 'Roboto', 
              fontSize: '16px', 
              color: '#fafafa', 
              textAlign: 'center', 
              maxWidth: '340px', 
              margin: '0' 
            }}>
              Join us for an unforgettable experience at [Event Name]! Secure your spot now.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              marginTop: '16px' 
            }}>
              <span style={{ color: '#fafafa' }}>📍 [Event Location]</span>
              <span style={{ color: '#fafafa' }}>||</span>
              <span style={{ color: '#fafafa' }}>March 15, 2025 | 7:00 PM</span>
            </div>
          </div>
        </div>

        <div style={{ 
          width: '100%', 
          height: '4px',
          backgroundImage: `url('https://dashboard.codeparrot.ai/api/image/Z6-I7uepongUSRkM/progress-2.png')`,
          backgroundSize: 'cover'
        }} />

        {/* Ticket Selection Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ 
            fontFamily: 'Roboto', 
            fontSize: '16px', 
            color: '#fafafa' 
          }}>
            Select Ticket Type:
          </label>
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#052228', 
            borderRadius: '24px', 
            border: '1px solid #07373f' 
          }}>
            <div style={{ 
              display: 'flex', 
              gap: '24px', 
              justifyContent: 'space-between' 
            }}>
              {[
                { type: 'free', label: 'Regular Access', price: 'Free' },
                { type: 'vip', label: 'VIP Access', price: '$150' },
                { type: 'vvip', label: 'VVIP Access', price: '$150' }
              ].map((ticket) => (
                <div
                  key={ticket.type}
                  onClick={() => setSelectedTicket(ticket.type)}
                  style={{ 
                    width: '134px',
                    padding: '12px',
                    borderRadius: '12px',
                    border: `2px solid #197686`,
                    backgroundColor: selectedTicket === ticket.type ? '#12464e' : 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: '600', 
                    color: '#fff', 
                    marginBottom: '26px' 
                  }}>
                    {ticket.price}
                  </div>
                  <div style={{ 
                    fontSize: '16px', 
                    color: '#fafafa', 
                    textTransform: 'uppercase' 
                  }}>
                    {ticket.label}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#d9d9d9' 
                  }}>
                    20/52
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ticket Count Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ 
            fontFamily: 'Roboto', 
            fontSize: '16px', 
            color: '#fafafa' 
          }}>
            Number of Tickets
          </label>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '12px', 
            borderRadius: '12px', 
            border: '1px solid #07373f',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}>
            <select
              value={ticketCount}
              onChange={(e) => setTicketCount(e.target.value)}
              style={{ 
                width: '100%',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '16px',
                outline: 'none'
              }}
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z6-I7uepongUSRkM/icon-c.png" 
              alt="dropdown" 
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          marginTop: '32px' 
        }}>
          <button style={{ 
            flex: 1,
            padding: '12px 24px',
            borderRadius: '8px',
            border: '1px solid #24a0b5',
            backgroundColor: 'transparent',
            color: '#24a0b5',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Cancel
          </button>
          <button onClick={()=>{navigate("/AttendeeDetails")}} style={{ 
            flex: 1,
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#24a0b5',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

