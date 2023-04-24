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
  // Preven scrolling when mobile nav activated
  if (typeof window !== 'undefined') {
    mobileNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }

  return (
    <div className="absolute top-5  z-40 flex w-full  justify-center  xl:hidden">
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
