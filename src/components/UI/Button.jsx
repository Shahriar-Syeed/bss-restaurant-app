import PropTypes from "prop-types";

export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
// Add PropTypes validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  textOnly: PropTypes.string.isRequired,
  className: PropTypes.string,
};