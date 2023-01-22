import _ from "lodash";
import "./Button.css";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick = _.noop, disabled = false, children } = props;
  return (
    <button className={"btn"} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
