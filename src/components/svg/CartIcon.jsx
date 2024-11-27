import React from 'react'

export default function CartIcon({ className }) {
  return (
    <>
      <svg
        className={className}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
      </svg>
    </>
  );
}
