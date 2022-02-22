import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "src/utils/LoadingContext";

const Link = ({ path, replace = false, children }) => {
  const linkRef = useRef(null);
  const navigate = useNavigate();
  const load = useContext(LoadingContext);

  useEffect(() => {
    console.log(load);
  
    return () => {
      console.log('destroyed');
    }
  }, [load])
  

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('html').classList.remove('is-loaded');
    setTimeout(() => {
      document.querySelector('html').classList.add('is-loaded');
      navigate(path, { replace: replace });
    }, 1300);
  };

  return (
    <a href={path} onClick={handleClick} ref={linkRef}>
      {children}
    </a>
  );
};

export default Link;
