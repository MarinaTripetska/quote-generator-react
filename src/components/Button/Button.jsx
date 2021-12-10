import PropTypes from "prop-types";
import s from "./Button.module.css";

export default function Button({ name, onClick, children, ...args }) {
  return (
    <button className={s.btn} name={name} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
