import {
  faEnvelope,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {
  return (
    <div className="text-one mx-auto mt-2 flex h-9 w-32 justify-between ">
      <a
        href="https://api.whatsapp.com/send?phone=34664196715"
        rel="noreferrer"
        target="_blank"
        aria-label="link to whatsapp">
        {' '}
        asdassdaasd
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="hover:border-five  hover:text-five h-full duration-100"
        />
      </a>

      <a
        href="https://www.instagram.com/latrucco_ok/"
        rel="noreferrer"
        target={'_blank'}
        aria-label="link a instagram">
        <FontAwesomeIcon
          icon={faInstagram}
          className="hover:border-five  hover:text-five h-full duration-100"
        />
      </a>
      <a>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-two h-[40px] justify-items-end text-end"
        />

        <p
          href="mailto:info@milvus.travel"
          className="text-two hover:text-one text-xl duration-100">
          info@milvus.travel
        </p>
      </a>
    </div>
  );
};

export default SocialLinks;
