import React from 'react';

const MobileNav = ({ mobileNav }) => {
  return (
    <nav
      className={`absolute bottom-20 flex w-screen justify-center  text-center font-title text-lg font-bold uppercase text-white duration-500 sm:bottom-52 ${
        !mobileNav && 'opacity-0'
      } `}>
      <ul className="gap flex flex-col gap-4">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/nosotros">nosotros</a>
        </li>
        <li>
          <a href="/formacion">formacion</a>
        </li>
        <li>
          <a href="/produccion">producción de ficción</a>
        </li>
        <li>
          <a href="/espacio">nuestro espacio</a>
        </li>
        <li>
          <a href="/contacto">contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
