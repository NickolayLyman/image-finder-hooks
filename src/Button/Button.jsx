import PropTypes from 'prop-types';
import st from './Button.module.css';

const Button = ({ onClick }) => {
  const handleScroll = () => {
    onClick();
  };
  return (
    <button className={st.btn} type="button" onClick={handleScroll}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
