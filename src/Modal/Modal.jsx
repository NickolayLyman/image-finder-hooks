import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import st from './Modal.module.scss';
import Button from '../Button';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ src, alt, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={st.Overlay} onClick={handleBackdropClick}>
      <div className={st.modal}>
        <Button onClick={onClose} className={st.btn} type="button" value="X" />
        <img src={src} alt={alt} className={st.image} />
      </div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
