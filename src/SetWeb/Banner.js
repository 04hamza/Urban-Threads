import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styles/Banner.css"

const Banner=()=>{
  const messages = [
    { Message: "Need help placing an order? CLICK HERE!", href: "#" },
    { Message: "Get Urban Threads delivered to you: Download the mobile app now!", href: "#" },
    { Message: "Stay updated with our latest offers: Download the app today!", href: "#" }
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 8000); // Change message every 8 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [messages.length]);

  return (
    <div className="Banner">
      <Link className="link" to={messages[currentMessageIndex].href}>
        {messages[currentMessageIndex].Message}
      </Link>
    </div>
  );
};
export default Banner;
