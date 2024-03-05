// components/ScrollLink.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollLinkComponent = ({ to, spy, smooth, offset, duration, children }) => {
  return (
    <ScrollLink to={to} spy={spy} smooth={smooth} offset={offset} duration={duration}>
      {children}
    </ScrollLink>
  );
};

export default ScrollLinkComponent;
