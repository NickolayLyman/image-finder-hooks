import PropTypes from 'prop-types';

function Button({ value, ...btnProps }) {
  return <button {...btnProps}>{value}</button>;
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
