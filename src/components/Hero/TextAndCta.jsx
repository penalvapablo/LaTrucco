import React from 'react';

const TextAndCta = ({ mobileNav }) => {
  return (
    <div
      className={`absolute bottom-20 flex flex-col items-center gap-7 duration-500 ${
        mobileNav
          ? 'invisible opacity-0'
          : 'visible opacity-100'
      } 
      }  xl:bottom-28`}>
      <p className=" max-w-2xl text-center font-text text-lg font-medium text-white">
        Únete a nuestra comunidad y comienza a desarrollar
        tus proyectos artísticos con nuestros cursos y
        talleres
      </p>

      <a
        href="/formacion"
        className=" animate-[wiggle_1s_ease-in-out_infinite] rounded-full bg-purple px-9 py-2 font-text text-lg text-white ">
        Sumate a La Trucco
      </a>
    </div>
  );
};

export default TextAndCta;
