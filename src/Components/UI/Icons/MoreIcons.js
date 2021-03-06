import React from 'react';

function MoreIcons({ className }) {
  return (
    <svg width='24' height='24' className={className}>
      <g fill='none' stroke='currentColor' stroke-linecap='round' transform='translate(3 10)'>
        <circle cx='2' cy='2' r='2'></circle>
        <circle cx='9' cy='2' r='2'></circle>
        <circle cx='16' cy='2' r='2'></circle>
      </g>
    </svg>
  );
}

export default MoreIcons;
