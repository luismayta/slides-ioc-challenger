import React from 'react';

export const Small = ({ children }) => (
  <div
    style={{
      width: '60vw',
      height: '60vw',
      justifyContent: 'center',
      textAlign: 'center'
    }}
  >
    {children}
  </div>
);

export const Left = ({ children }) => (
  <div
    style={{
      textAlign: 'left'
    }}
  >
    {children}
  </div>
);


export const Tomato = ({ children }) => (
  <strong
    style={{
      color: 'tomato',
    }}
  >
    {children}
  </strong>
);
