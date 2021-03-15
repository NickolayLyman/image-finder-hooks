import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem';
import st from './Gallery.module.css';

const Gallery = ({ images, onClick }) => {
  return (
    <ul className={st.list}>
      {images.map(({ webformatURL, tags, largeImageURL, id }) => (
        <GalleryItem
          id={id}
          onClick={onClick}
          key={id}
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  imgList: PropTypes.array,
};

export default Gallery;
