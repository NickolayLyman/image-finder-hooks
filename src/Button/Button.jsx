import PropTypes from 'prop-types';

function Button({ onClick, value, className, type }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
