import PropTypes from 'prop-types';
import Wrap from './Button.styled';

const Button = ({ children, onClick, padding = '5px', bgColor = true }) => (
  <Wrap type="button" onClick={onClick} padding={padding} bgColor={bgColor}>
    {children}
  </Wrap>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  padding: PropTypes.string,
  bgColor: PropTypes.bool,
};

export default Button;
