import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();

      const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', 
        hour12: true, 
      };

      const formattedDate = currentDate.toLocaleDateString('en-US', options);
      setCurrentDateTime(formattedDate);
    };

    updateDateTime(); 
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{currentDateTime}</p>
    </div>
  );
};

export default CurrentDateTime;
