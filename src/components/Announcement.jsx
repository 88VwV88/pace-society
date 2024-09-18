import React from 'react';
import './Announcements.css';

const Announcements = () => {
  return (
    <div className="announcements">
      <h2>Announcements</h2>
      <div className="announcement-container">
        <div className="announcement">
          <p>➔ Launch of Logo Making  Competition. Register NOW!</p>
          <p>➔ Pace Society 2024 </p>
        </div>
        <div className="announcement">
          <p>➔ NITJ 2024</p>
          <p>➔ Orientation Session for the junior of NIT Jalandhar. </p>
        </div>
        <div className="announcement">
          <p>➔ Engineer Day  2024</p>
          <p>➔ Nurturing Future Engineers. Stay tuned for  r the fun activities</p>
        </div>
      </div>
      <button className="more-button">More</button>
    </div>
  );
};

export default Announcements;
