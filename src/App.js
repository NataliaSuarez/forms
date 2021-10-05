import { useState } from "react";

/// CONTROLLED COMPONENTS - multiples valores

const App = () => {
  const [value, setValue] = useState({
    nombre: "default name", /// initial state
    descripcion: "",
    select: "", // can be an option by default -> `firstoption`
    check: false,
    radio: "option1", //default radio button value
  });
  const handleChange = ({ target }) => {
    /// handle multiple values with `[target.name]`
    /// and setted value
    /// or checked in checkbox case
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <div>
      <input
        type="text"
        name="nombre"
        value={value.nombre}
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        value={value.descripcion}
        onChange={handleChange}
      />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- seleccione --</option>
        <option value="firstoption">First option</option>
        <option value="secondoption">Second option</option>
        <option value="thirdoption">Third option</option>
      </select>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
      <div>
        <label>something</label>
        <input
          type="radio"
          value="option1"
          name="radio"
          onChange={handleChange}
          checked={value.radio === "option1"}
        />
        option 1
        <input
          type="radio"
          value="option2"
          name="radio"
          onChange={handleChange}
          checked={value.radio === "option2"}
        />
        option 2
        <input
          type="radio"
          value="option3"
          name="radio"
          onChange={handleChange}
          checked={value.radio === "option3"}
        />
        option 3
      </div>
    </div>
  );
};

export default App;
