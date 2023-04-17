import {
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialLinks2 = () => {
  return (
    <div className="mx-auto flex w-[90%] max-w-[800px] flex-col items-center gap-8 text-white xsm:items-start">
      <a
        href="https://api.whatsapp.com/send?phone=34664196715"
        rel="noreferrer"
        target="_blank"
        aria-label="link to whatsapp"
        className=" flex w-fit  flex-col  items-center gap-3 duration-300 hover:text-red xsm:flex-row xsm:gap-12  ">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="h-12"
        />
        <p className="font-text text-xl">
          +34 664 19 67 15
        </p>
      </a>
      <a
        href="https://www.instagram.com/latrucco_ok/"
        rel="noreferrer"
        target={'_blank'}
        aria-label="link a instagram"
        className=" hover:text- flex w-fit flex-col items-center gap-3 duration-300 hover:text-red  xsm:flex-row xsm:gap-12 ">
        <FontAwesomeIcon
          icon={faInstagram}
          className="h-12"
        />
        <p className="font-text text-xl">latrucco_ok</p>
      </a>
      <a
        href="mailto:info.latrucco@gmail.com"
        className=" hover:text- items-cente gap-3r flex w-fit flex-col duration-300 hover:text-red  xsm:flex-row xsm:gap-12 ">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-11"
        />
        <p className="font-text text-xl">
          info.latrucco@gmail.com
        </p>
      </a>
    </div>
  );
};

export default SocialLinks2;
