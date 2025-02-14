import React from 'react';
import FooterButtons from './FooterButton';
import { useNavigate } from 'react-router';

const TicketDetails = ({
  name = "Avi Chukwu",
  email = "User@email.com",
  ticketType = "VIP",
  ticketCount = "1",
  specialRequest = "Nil ? Or the users sad story they write in there gets this whole space, Max of three rows",
  eventTitle = "Techember Fest '25",
  eventLocation = "📍 04 Rumens road, Ikoyi, Lagos",
  eventDateTime = "📅 March 15, 2025 | 7:00 PM"
}) => {
  return (
    <> 
    <div style={{
      width: '300px',
      height: '600px',
      position: 'relative',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#02191d',
      borderRadius: '16px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '260px',
        height: '446px',
        margin: '20px',
        padding: '14px',
        background: 'rgba(3, 30, 33, 0.1)',
        borderRadius: '16px',
        border: '1px solid #24a0b5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '175px',
            alignItems: 'center'
          }}>
            <h1 style={{
              fontFamily: 'Road Rage',
              fontSize: '34px',
              color: '#ffffff',
              textAlign: 'center',
              margin: 0
            }}>{eventTitle}</h1>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: '4px',
              marginTop: '34px',
              alignItems: 'center'
            }}>
              <span style={{
                fontFamily: 'Roboto',
                fontSize: '10px',
                color: '#ffffff',
                lineHeight: '150%'
              }}>{eventLocation}</span>
              <span style={{
                fontFamily: 'Roboto',
                fontSize: '10px',
                color: '#ffffff',
                lineHeight: '150%'
              }}>{eventDateTime}</span>
            </div>
          </div>

          <div style={{
            width: '140px',
            height: '140px',
            margin: '0 auto',
            borderRadius: '12px',
            border: '4px solid rgba(36, 160, 181, 0.5)',
            backgroundImage: `url(https://dashboard.codeparrot.ai/api/image/Z6-YDo9nxTWt8i3h/user-img.png)`,
            backgroundSize: 'cover'
          }} />

          <div style={{
            background: '#08343c',
            borderRadius: '8px',
            border: '1px solid #133d44',
            padding: '4px',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              borderBottom: '1px solid #12464e',
              padding: '4px'
            }}>
              <div style={{
                flex: 1,
                borderRight: '1px solid #12464e',
                padding: '4px'
              }}>
                <span style={{
                  fontFamily: 'Roboto',
                  fontSize: '10px',
                  color: '#ffffff',
                  opacity: 0.33
                }}>Enter your name</span>
                <div style={{
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginTop: '4px'
                }}>{name}</div>
              </div>
              <div style={{
                flex: 1,
                padding: '4px'
              }}>
                <span style={{
                  fontFamily: 'Roboto',
                  fontSize: '10px',
                  color: '#ffffff',
                  opacity: 0.33
                }}>Enter your email *</span>
                <div style={{
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginTop: '4px'
                }}>{email}</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              borderBottom: '1px solid #12464e',
              padding: '4px'
            }}>
              <div style={{
                flex: 1,
                borderRight: '1px solid #12464e',
                padding: '4px'
              }}>
                <span style={{
                  fontFamily: 'Roboto',
                  fontSize: '10px',
                  color: '#ffffff',
                  opacity: 0.33
                }}>Ticket Type:</span>
                <div style={{
                  fontFamily: 'Roboto',
                  fontSize: '10px',
                  color: '#ffffff',
                  marginTop: '4px'
                }}>{ticketType}</div>
              </div>
              <div style={{
                flex: 1,
                padding: '4px'
              }}>
                <span style={{
                  fontFamily: 'Roboto',
                  fontSize: '10px',
                  color: '#ffffff',
                  opacity: 0.33
                }}>Ticket for :</span>
                <div style={{
                  fontFamily: 'Roboto',
                  fontSize: '10px',
                  color: '#ffffff',
                  marginTop: '4px'
                }}>{ticketCount}</div>
              </div>
            </div>

            <div style={{
              padding: '8px'
            }}>
              <span style={{
                fontFamily: 'Roboto',
                fontSize: '10px',
                color: '#ffffff',
                opacity: 0.33
              }}>Special request?</span>
              <div style={{
                fontFamily: 'Roboto',
                fontSize: '10px',
                color: '#ffffff',
                marginTop: '4px'
              }}>{specialRequest}</div>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z6-YDo9nxTWt8i3h/subtract.png"
        alt="Ticket border"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
        <FooterButtons/>
    </>
  );
};

export default TicketDetails;

