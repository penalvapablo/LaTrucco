import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNavPages from './MobileNavPages';

const BurgerPages = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavFn = () => {
    setMobileNav(!mobileNav);
    console.log('asddas');
  };

  return (
    <div className="fixed bottom-0 flex w-full  justify-center bg-purple xl:hidden">
      {' '}
      {/* {mobileNav && ( */}
      <MobileNavPages mobileNav={mobileNav} />
      {/* )} */}
      <button
        onClick={mobileNavFn}
        id="burger menu"
        aria-label="burger menu"
        className="">
        <FontAwesomeIcon
          icon={faBars}
          className="z-30 h-[35px] w-[35px]  p-[8px] text-white"
        />
      </button>
    </div>
  );
};

export default BurgerPages;
