import React, { useState } from 'react';
import TextAndCta from './TextAndCta';
import Burger from './BurgerHome';
import MobileNav from './MobileNav';

const Bottom = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavFn = () => {
    setMobileNav(!mobileNav);
  };
  // Preven scrolling when mobile nav activated
  // if (typeof window !== 'undefined') {
  //   mobileNav
  //     ? (document.body.style.overflow = 'hidden')
  //     : (document.body.style.overflow = 'auto');
  // }
  return (
    <div className="">
      <Burger mobileNavFn={mobileNavFn} />
      <div className="absolute bottom-0  left-1/2 flex w-[90%] translate-x-[-50%] flex-col items-center">
        <TextAndCta mobileNav={mobileNav} />
        <MobileNav mobileNav={mobileNav} />
      </div>
    </div>
  );
};

export default Bottom;
