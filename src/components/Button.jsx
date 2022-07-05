import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./button.module.css";

const Button = React.forwardRef((props, ref) => {
  const { children, color, round, fullwidth, size, block, ...rest } = props;
  const btnStyles = classNames({
    [styles.buttton]: true,
    [styles[size]]: size,
    [styles[color]]: color,
    [styles.round]: round,
    [styles.block]: block,
    [styles.fullwidth]: fullwidth,
  });
  return (
    <button {...rest} ref={ref} className={btnStyles}>
      {children}
    </button>
  );
});

export default Button;
Button.propTypes = {
  color: PropTypes.oneOf(["blue", "red", "purple"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
};
