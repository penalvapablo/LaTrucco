import React from 'react';
// import logo from '';

const MobileNavPages = ({ mobileNav }) => {
  return (
    <div
      className={`  absolute bottom-0 z-10  mb-[55px] flex h-[calc(100vh-55px)] w-screen flex-col items-center  justify-center gap-9 bg-black text-center font-title text-lg font-bold uppercase text-white opacity-0  transition-opacity duration-300 ease-out ${
        mobileNav && ' opacity-100'
      } xl:hidden `}>
      <img
        src={'/logo.png'}
        alt="Logo"
        loading="lazy"
        className=""
      />
      <nav>
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
    </div>
  );
};

export default MobileNavPages;
