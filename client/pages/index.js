import React, { useState, useEffect } from 'react'
import Home from "./Home.js"
import LandingPage from './LandingPage.js'
const  HomePage = () => {
  const [pageNr, setPageNr] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('pageNr');
      return storedValue ? JSON.parse(storedValue) : false;
    }
  });
  useEffect(() => {
    sessionStorage.setItem('pageNr', JSON.stringify(pageNr));
  }, [pageNr]);

  const handleClick = () => {
    setPageNr(!pageNr);
  };
  return (
    <>
      <Home status={pageNr}/>
      
      <LandingPage status={pageNr} handleClick={handleClick} />

    </>
  )
}
export default HomePage
