import React from 'react';
// import logo from '';

const MobileNavPages = ({ mobileNav }) => {
  return (
    <div
      className={`absolute top-0 z-10  mt-[55px] flex h-[calc(100vh-55px)] w-screen flex-col items-center  justify-center gap-9 bg-black text-center font-title text-lg font-bold uppercase text-white  duration-300  ${
        !mobileNav
          ? 'invisible opacity-0'
          : 'visible opacity-100'
      }  `}>
      <img
        src={'/logo.png'}
        alt="Logo"
        loading="lazy"
        className=""
      />
      <nav>
        <ul className=" flex flex-col gap-4">
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
    </div>
  );
};

export default MobileNavPages;
