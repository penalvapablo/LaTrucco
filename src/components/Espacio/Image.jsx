import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Image = ({
  id,
  modalFn,
  rightFn,
  leftFn,
  modal,
  modalId,
}) => {
  return (
    <>
      {/* MOBILE */}
      <picture className="sm:hidden">
        <source
          type="image/webp"
          srcSet={`/galeria/img${id}.webp`}
        />
        <img
          src={`/galeria/img${id}.png`}
          alt=" "
          loading="lazy"
          className="h-auto w-full max-w-[425px] rounded-xl"
        />
      </picture>

      {/* DESKTOP */}
      <div className="hidden sm:block">
        {/* MODAL IMAGEN */}
        {modal && (
          <>
            <div
              className="fixed left-1/2 top-1/2 z-40 h-screen w-screen translate-x-[-50%] translate-y-[-50%]  bg-black/10"
              onClick={modalFn}></div>
            <div className="fixed left-1/2 top-1/2  z-50 w-[90%] max-w-[1000px] translate-x-[-50%] translate-y-[-50%]">
              <button
                onClick={rightFn}
                id="close-modal"
                aria-label="close-modal">
                {modalId != 9 && (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`absolute right-5  top-1/2 h-12 translate-y-[-50%] rounded-full text-white`}
                  />
                )}
              </button>
              <button
                onClick={leftFn}
                id="close-modal"
                aria-label="close-modal">
                {modalId != 1 && (
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={`absolute left-5  top-1/2 z-30 h-12 translate-y-[-50%] rounded-full text-white `}
                  />
                )}
              </button>
              <img
                src={`/galeria/img${modalId}-big.png`}
                alt=" "
                loading="lazy"
                className="  rounded-xl"
              />
            </div>
          </>
        )}

        {/* IMAGEN EN GALERIA */}
        <button
          className="overflow-hidden  rounded-xl"
          onClick={modalFn}
          onKeyDown={modalFn}
          id={id}>
          <picture>
            <source
              type="image/webp"
              srcSet={`/galeria/img${id}.webp`}
            />
            <img
              src={`/galeria/img${id}.png`}
              alt=" "
              loading="lazy"
              className="h-auto w-full max-w-[425px] rounded-xl duration-300 hover:scale-105"
              id={id}
            />
          </picture>
        </button>
      </div>
    </>
  );
};

export default Image;
