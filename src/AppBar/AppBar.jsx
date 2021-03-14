import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import st from './AppBar.module.css';

const AppBar = ({ onSubmit }) => {
  const [queryKey, setQueryKey] = useState('');

  const handleChangeRequest = event => {
    setQueryKey(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (queryKey.trim() === '') {
      return toast.warn('Please enter your query');
    }
    onSubmit(queryKey);
    setQueryKey('');
  };
  return (
    <header className={st.header}>
      <form onSubmit={handleSubmit} className={st.form}>
        <input
          className={st.input}
          type="text"
          autoComplete="off"
          placeholder="Search images and photo"
          value={queryKey}
          onChange={handleChangeRequest}
        />
        <button type="submit" className={st.button}>
          Search
        </button>
      </form>
    </header>
  );
};

AppBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AppBar;
