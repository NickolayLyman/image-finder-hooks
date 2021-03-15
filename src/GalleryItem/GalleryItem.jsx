import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import st from './GalleryItem.module.css';
import Button from '../Button';

const GalleryItem = ({ src, alt, largeImageURL, id, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
    console.log(hover);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteImage = () => onClick(id);
  return (
    <li className={st.item} onClick={handleHover}>
      {hover && (
        <Button
          onClick={handleDeleteImage}
          className={st.btn}
          type="button"
          value="X"
        />
      )}
      <img
        className={st.image}
        src={src}
        alt={alt}
        onDoubleClick={toggleModal}
      />
      {showModal && (
        <>
          <Modal onClose={toggleModal} src={largeImageURL} alt={alt} />
        </>
      )}
    </li>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default GalleryItem;
