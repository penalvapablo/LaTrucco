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
        className=" absolute left-1/2 top-5 h-[35px] w-[35px] translate-x-[-50%] rounded-full  p-[8px] text-white"
      />
    </button>
  );
};

export default Burger;
