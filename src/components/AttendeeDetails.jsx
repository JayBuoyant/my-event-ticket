import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import FooterButtons from './FooterButton';

const AttendeeDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default'); 
    formData.append('cloud_name', 'drapm9rnp');

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/drapm9rnp/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setImage(data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <>
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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '32px'
        }}>
          {/* Upload Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            padding: '24px',
            backgroundColor: '#052228',
            borderRadius: '24px',
            border: '1px solid #07373f'
          }}>
            <span style={{
              color: '#fafafa',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontWeight: 400
            }}>Upload Profile Photo</span>
            
            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
                backgroundColor: '#00000033',
                position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '192px',
                height: '192px',
                padding: '24px',
                backgroundColor: '#0e464f',
                borderRadius: '32px',
                border: '4px solid #24a0b580'
              }}>
                {image ? (
                  <img 
                    src={image} 
                    alt="Uploaded"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '32px'
                    }}
                  />
                ) : (
                  <>
                    <img 
                      src="https://dashboard.codeparrot.ai/api/image/Z6-ST-epongUSRkX/icon-c.png" 
                      alt="Upload"
                      style={{
                        width: '32px',
                        height: '32px',
                        marginTop: '48px'
                      }}
                    />
                    <span style={{
                      color: '#fafafa',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      textAlign: 'center',
                      marginTop: '40px'
                    }}>Drag & drop or click to upload</span>
                  </>
                )}
              </div>
            </div>
          </div>

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
              onChange={(e) => setName(e.target.value)}
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
            <div style={{
              position: 'relative',
              width: '100%'
            }}>
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z6-ST-epongUSRkX/icon-e.png"
                alt="Email"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '12px',
                  width: '24px',
                  height: '24px'
                }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '12px 12px 12px 44px',
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
              onChange={(e) => setSpecialRequest(e.target.value)}
              placeholder="Textarea"
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
      </div>
      <FooterButtons/>
    </>
  );
};

export default AttendeeDetails;
