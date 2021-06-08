import React from 'react';

function SortSizeUp({ className }) {
  return (
    <svg
      width='16'
      height='16'
      aria-hidden='true'
      focusable='false'
      data-prefix='fal'
      data-icon='sort-size-up-alt'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className={className}>
      <path
        fill='currentColor'
        d='M25.07 140.44a11.93 11.93 0 0 0 16.91.09L96 87.86V472a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V88.08l53.94 52.35a12 12 0 0 0 16.92 0l5.64-5.66a12 12 0 0 0 0-17l-84.06-82.3a11.94 11.94 0 0 0-16.87 0l-84 82.32a12 12 0 0 0-.09 17zM276 192h152a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20H276a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20zm12-128h128v96H288zm196 192H284a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h200a28 28 0 0 0 28-28V284a28 28 0 0 0-28-28zm-4 192H288V288h192z'></path>
    </svg>
  );
}

export default SortSizeUp;
