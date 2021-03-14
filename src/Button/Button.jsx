import PropTypes from 'prop-types';
import st from './Button.module.css';

function Button({ onClick, value }) {
  const handleScroll = () => {
    onClick();
  };
  return (
    <button className={st.btn} type="button" onClick={handleScroll}>
      {value}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
