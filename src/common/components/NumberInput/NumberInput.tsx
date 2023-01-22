import classNames from "classnames";
import "./NumberInput.css";

interface NumberInputProps {
  value: number;
  onChange: (number: number) => void;
  name?: string;
  placeholder?: string;
  className?: string;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { onChange, value, name, placeholder, className } = props;
  const onChangeNumber = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(parseInt(e.currentTarget.value));
  };

  const inputClassname = classNames("num-input", className);

  return (
    <input
      className={inputClassname}
      type="number"
      name={name}
      value={value}
      onChange={onChangeNumber}
      placeholder={placeholder}
    />
  );
};

export default NumberInput;
