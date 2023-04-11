import React from 'react';

const Nav = ({ path }) => {
  return (
    <nav
      className={`hidden h-32 w-screen justify-center  xl:flex `}>
      <ul className="flex items-center gap-8">
        <li>
          <a
            href="/"
            className={`font-title text-xl font-bold uppercase text-white `}>
            home
          </a>
        </li>
        <li>
          <a
            href="/nosotros"
            className={`font-title text-xl font-bold uppercase text-white ${
              path === 'nosotros' ? 'text-red' : ' '
            }`}>
            nosotros
          </a>
        </li>
        <li>
          <a
            href="/formacion"
            className={`font-title text-xl font-bold uppercase text-white ${
              path === 'formacion' ? 'text-red' : ' '
            }`}>
            formacion
          </a>
        </li>
        <li>
          <a
            href="/produccion"
            className={`font-title text-xl font-bold uppercase text-white ${
              path === 'produccion' ? 'text-red' : ' '
            }`}>
            producción de ficción
          </a>
        </li>
        <li>
          <a
            href="/espacio"
            className={`font-title text-xl font-bold uppercase text-white ${
              path === 'espacio' ? 'text-red' : ' '
            }`}>
            nuestro espacio
          </a>
        </li>
        <li>
          <a
            href="/contacto"
            className={`font-title text-xl font-bold uppercase text-white ${
              path === 'contacto' ? 'text-red' : ' '
            }`}>
            contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
