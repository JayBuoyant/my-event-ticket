import React from 'react';
import './TicketComponent.css';

const TicketComponent = ({ attendee }) => {
  return (
    <div className="ticket-container">
      <div className="event-header">
        <h1>Techember Fest '25</h1>
        <p>📍 04 Rumens road, Ikoyi, Lagos</p>
        <p>📅 March 15, 2025 | 7:00 PM</p>
      </div>
      <div className="ticket-details">
        <div className="user-info">
          <div className="info-item">
            <span className="label">Name</span>
            <span className="value">{attendee.name || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="label">Email</span>
            <span className="value">{attendee.email || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="label">Ticket Type</span>
            <span className="value">VIP</span>
          </div>
          <div className="info-item">
            <span className="label">Ticket Count</span>
            <span className="value">1</span>
          </div>
          <div className="info-item">
            <span className="label">Special Request</span>
            <span className="value">{attendee.specialRequest || 'Nil'}</span>
          </div>
        </div>
        <button className="rsvp-button">RSVP</button>
      </div>
    </div>
  );
};

export default TicketComponent;
