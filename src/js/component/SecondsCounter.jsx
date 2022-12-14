import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

//include images into your bundle


//create your first component
const SecondsCounter = (prop) => {
    const [seconds, setSeconds] = useState(prop.segundos);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
  
    return (
        <>
         <style></style>
        <div className="app d-flex justify-content-center">
        <div className="icon box"><i className="far fa-clock"></i></div>
        <div className="counter box">{Math.floor(seconds/100000%10)}</div>
        <div className="counter box">{Math.floor(seconds/10000%10)}</div>
        <div className="counter box">{Math.floor(seconds/1000%10)}</div>
        <div className="counter box">{Math.floor(seconds/100%10)}</div>
        <div className="counter box">{Math.floor(seconds/10%10)}</div>
        <div className="counter box">{Math.floor(seconds/1%10)}</div>
    </div>
    </>
    );
  };
  SecondsCounter.propTypes = {
    //proptypes here
    segundos: PropTypes.number,
};


export default SecondsCounter;
