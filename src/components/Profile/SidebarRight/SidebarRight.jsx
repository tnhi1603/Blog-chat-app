import React from 'react';
import './SidebarRight.css';

function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div className="suggested">
        <h3>You might know</h3>
        <ul>
          <li>Eddie Lobanovsky</li>
          <li>Alexey Stave</li>
          <li>Anton Tkachev</li>
        </ul>
      </div>
      <div className="active">
        <h3>Active</h3>
        <ul>
          <li>Shelby Goode (Online)</li>
          <li>Robert Bacins (Busy)</li>
          <li>John Carilo (Online)</li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarRight;
