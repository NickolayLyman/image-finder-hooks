import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import fetchImg from './services/imgApi';
import { animateScroll as scroll } from 'react-scroll';
import 'react-toastify/dist/ReactToastify.css';

import Gallery from './Gallery';
import Button from './Button';
import AppBar from './AppBar';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const App = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [queryKey, setQueryKey] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const handleDelete = imageId => {
    const filteredImages = images.filter(({ id }) => id !== imageId);
    setImages(filteredImages);
  };

  const handleFormSubmit = newQueryKey => {
    if (newQueryKey === queryKey) {
      return;
    }
    setQueryKey(newQueryKey);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!queryKey) {
      return;
    }

    const renderimages = () => {
      setStatus(Status.PENDING);
      fetchImg(queryKey, page)
        .then(images => setImages(prevState => [...prevState, ...images]))
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        })
        .finally(() => setStatus(Status.RESOLVED));
    };
    renderimages();
    scroll.scrollToBottom();
  }, [queryKey, page, error]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  return (
    <div className="container">
      <AppBar onSubmit={handleFormSubmit} />
      <ToastContainer position="top-center" autoClose={3000} />
      {status === Status.REJECTED && toast.warn('Error')}
      {images.length > 0 && <Gallery images={images} onClick={handleDelete} />}
      {status === Status.RESOLVED && (
        <Button
          onClick={handleLoadMore}
          value="Load more"
          className="load-more"
        />
      )}
      {status === Status.PENDING && (
        <Loader type="ThreeDots" color="blue" height={80} width={80} />
      )}
    </div>
  );
};

App.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
  images: PropTypes.array,
};

export default App;
