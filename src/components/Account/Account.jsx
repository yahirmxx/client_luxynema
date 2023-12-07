import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Account.css';

const Account = () => {
  const usuario = {
    correo: 'Yahir Morfin', 
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="background-image">
      <div className="w-1/4 p-8 h-3/4 relative"> 
        <div className="user-container rounded-2xl">
          <div className="w-60 h-60 bg-slate-900 rounded-full flex items-center justify-center">
            <FontAwesomeIcon 
              icon={faUser} 
              className="text-gray-300 text-9xl mb-2" 
            />
          </div>
          <button
            className="bg-transparent text-black text-md font-bold py-2"
            onClick={handleLogout}
          >
            LOG OUT
          </button>
          <p className="text-black font-bold text-5xl mb-8">{usuario.correo}</p>
        </div>
        <br />
        <p className="text-white text-center font-bold text-lg">BACK HOME</p>
      </div>
      <div className="w-1/2 p-4 mt-8 h-3/4">
        <div className="user-container2 rounded-xl">

        </div>
      </div>
    </div>
  );
};

export default Account;
