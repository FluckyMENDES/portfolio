import React from 'react';

function SocialItem({ name, icon, href }) {
  return (
    <li>
      <a href={href} title={name}>
        {icon}
      </a>
    </li>
  );
}

export default SocialItem;
