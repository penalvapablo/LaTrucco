import {
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialLinks2 = () => {
  return (
    <div className="mx-auto flex w-[90%] max-w-[800px] flex-col items-center gap-8 text-white xsm:items-start">
      <a
        href="mailto:info.latrucco@gmail.com"
        className=" hover:text- flex w-fit flex-col items-center gap-3 duration-300 hover:text-red  xsm:flex-row xsm:gap-12 ">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-11"
        />
        <p className="font-text text-xl">
          info.latrucco@gmail.com
        </p>
      </a>
      <a
        href="tel:+34946081947"
        rel="noreferrer"
        aria-label="link to whatsapp"
        className=" flex w-fit  flex-col  items-center gap-3 duration-300 hover:text-red xsm:flex-row xsm:gap-12  ">
        <FontAwesomeIcon
          icon={faPhone}
          className="h-11"
        />
        <p className="font-text text-xl">
          +34 946 08 19 47
        </p>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=34747488165"
        rel="noreferrer"
        target="_blank"
        aria-label="link to whatsapp"
        className=" flex w-fit  flex-col  items-center gap-3 duration-300 hover:text-red xsm:flex-row xsm:gap-12  ">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="h-12"
        />
        <p className="font-text text-xl">+34 747 488 165</p>
      </a>

      <a
        href="https://www.google.com/maps/place/C.+Costa,+3,+48010+Bilbao,+Vizcaya,+Espa%C3%B1a/@43.2585329,-2.9352508,16.25z/data=!4m6!3m5!1s0xd4e4fd6822b2e89:0x2cdcacc81247f21d!8m2!3d43.2582761!4d-2.9347524!16s%2Fg%2F11csffd3md"
        rel="noreferrer"
        target="_blank"
        aria-label="link to googlemaps"
        className=" hover:text- flex w-fit flex-col items-center gap-3 duration-300 hover:text-red  xsm:flex-row xsm:gap-12 ">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="h-11 px-1"
        />
        <p className="pl-1 font-text text-xl">
          Costa Kalea 12 - Piso 6
        </p>
      </a>
    </div>
  );
};

export default SocialLinks2;
