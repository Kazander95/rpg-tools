import "./TextInput.css";

interface TextInputProps {
  value: string;
  onChange: (s: string) => void;
  name?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { onChange, value, name, placeholder } = props;
  const onChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.currentTarget.value);
  };

  return (
    <input
      className={"txt-input"}
      type="text"
      name={name}
      value={value}
      onChange={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
