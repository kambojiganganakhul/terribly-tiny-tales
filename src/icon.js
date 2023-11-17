import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, size, color, text}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginRight: '12px' }}>
      <FontAwesomeIcon
        icon={icon}
        size={size}
        color={color}
       
      />
      <span style={{ marginLeft: '4px' }}>{text}</span>
    </div>
  );
};

export default Icon;
