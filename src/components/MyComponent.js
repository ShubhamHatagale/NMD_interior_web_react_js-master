import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../css/Icon.css';

function AnimatedIcon({ icon: Icon, ...rest }) {
  return (
    <span >
      <Icon {...rest} />
    </span>
  );
}

function MyComponent() {
  return (
    <div>
      <h1 className="fa-spin">      <AnimatedIcon icon={FaUser} />
</h1>
    </div>
  );
}

export default MyComponent;
