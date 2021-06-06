import React from 'react';

export function CheckBoxIcon({ className }) {
  return (
    <svg width='24' height='24' className={className}>
      <path
        fill='currentColor'
        d='M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'></path>
    </svg>
  );
}

export function UnCheckBoxIcon({ className }) {
  return (
    <svg
      width='24'
      height='24'
      aria-hidden='true'
      focusable='false'
      data-prefix='far'
      data-icon='circle'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      style={{ background: 'transparent', color: 'grey' }}
      className={className}>
      <path
        fill='currentColor'
        d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z'></path>
    </svg>
  );
}
