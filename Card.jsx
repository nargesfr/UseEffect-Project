import React, { children } from 'react'

const Card= ({children}) => {
  return (
    <div className="bg-white/66 backdrop-blur-md min-h-36 rounded-lg p-4 flex flex-col items-start ">
      {children}
    </div>
  );
};

export default Card;
