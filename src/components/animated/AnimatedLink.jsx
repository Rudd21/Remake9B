import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const AnimatedLink = ({ to, children, className }) => {
  const navigate = useNavigate();
  const { navigateTo } = useOutletContext();

  const handleClick = (e) => {
    e.preventDefault();
    
    navigateTo(() => {
      navigate(to); 
    });
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AnimatedLink;