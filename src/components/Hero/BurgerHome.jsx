import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Burger = ({ mobileNavFn }) => {
  return (
    <button
      onClick={mobileNavFn}
      id="burger menu"
      aria-label="burger menu"
      className="xl:hidden">
      <FontAwesomeIcon
        icon={faBars}
        className=" h-[35px] w-[35px] rounded-full  p-2 text-white"
      />
    </button>
  );
};

export default Burger;
