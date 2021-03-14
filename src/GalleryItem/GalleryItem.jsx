import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import st from './GalleryItem.module.css';
import CloseBtn from '../CloseBtn';

const GalleryItem = ({ src, alt, largeImageURL, id, onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteImage = () => onClick(id);
  return (
    <li className={st.item}>
      <CloseBtn onClick={handleDeleteImage} />
      <img className={st.image} src={src} alt={alt} onClick={toggleModal} />
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
