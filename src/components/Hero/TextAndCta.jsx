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
        Únete a nuestra comunidad de intérpretes y empieza a
        desarrollar tus habilidades artísticas con nuestros
        cursos y talleres
      </p>

      <a
        href="/formacion"
        className="rounded-full bg-purple px-9 py-2 font-text text-lg text-white ">
        Empieza tu formación
      </a>
    </div>
  );
};

export default TextAndCta;
