import PropTypes from "prop-types";

export default function Button({ name, onClick, children, ...args }) {
  return (
    <button name={name} onClick={onClick}>
      {children}
    </button>
  );
}

Button.prototypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
