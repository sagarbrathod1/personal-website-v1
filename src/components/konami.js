import React, { useState, useEffect } from "react";

const Konami = ({ children, sequence }) => {
  const [konamiCodeIndex, setKonamiCodeIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === sequence[konamiCodeIndex]) {
        setKonamiCodeIndex((index) => index + 1);
        if (konamiCodeIndex === sequence.length - 1) {
          window.location.href = "https://github.com/byteved";
        }
      } else {
        setKonamiCodeIndex(0);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [konamiCodeIndex, sequence]);

  return <>{children}</>;
};

export default Konami;
