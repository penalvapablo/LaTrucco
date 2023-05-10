import React, { useEffect, useState } from 'react';
import Image from './Image';
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(undefined);

  const modalFn = (e) => {
    //Por algun motivo, esto alcanza para abrir el modal focuseado con enter.... sin esto, no se abre con Enter y si se abre con Tab..
    if (e.type === 'keydown') {
      return;
    }

    setModal(!modal);
    setModalId(e.target.id);
    if (typeof window !== 'undefined') {
      !modal
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    }
  };
  const rightFn = () => {
    if (modalId === 9) return;
    setModalId(Number(modalId) + 1);
  };

  const leftFn = () => {
    if (modalId === 1) return;
    setModalId(Number(modalId) - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modal === true) {
        if (e.key === 'Escape') {
          setModal(false);
        }
        if (e.key === 'ArrowRight') {
          rightFn();
        }
        if (e.key === 'ArrowLeft') {
          leftFn();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [modal, modalId]);

  return (
    <div className="mx-auto grid max-w-[1299px] grid-cols-1 justify-items-center gap-3  md:grid-cols-3">
      {images.map((id) => {
        return (
          <div key={id}>
            <Image
              id={id}
              modal={modal}
              modalFn={modalFn}
              rightFn={rightFn}
              leftFn={leftFn}
              modalId={modalId}
            />
          </div>
        );
      })}
      {/* <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img1.webp`}
          />
          <img
            src={`/galeria/img1.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img2.webp`}
          />
          <img
            src={`/galeria/img2.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>{' '}
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img3.webp`}
          />
          <img
            src={`/galeria/img3.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>{' '}
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img4.webp`}
          />
          <img
            src={`/galeria/img4.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>{' '}
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img5.webp`}
          />
          <img
            src={`/galeria/img5.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>{' '}
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img6.webp`}
          />
          <img
            src={`/galeria/img6.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>{' '}
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img7.webp`}
          />
          <img
            src={`/galeria/img7.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>{' '}
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img8.webp`}
          />
          <img
            src={`/galeria/img8.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture>{' '}
        <picture>
          <source
            type="image/webp"
            srcSet={`/galeria/img9.webp`}
          />
          <img
            src={`/galeria/img9.png`}
            alt=" "
            loading="lazy"
            className=""
          />
        </picture> */}
    </div>
  );
};

export default Gallery;
