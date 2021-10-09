import "./Input.css";

const Input = ({ label, field, placeholder, value, onChange }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        name={field}
        field={field}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
