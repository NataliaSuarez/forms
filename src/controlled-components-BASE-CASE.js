import { useState } from "react";

/// CONTROLLED COMPONENTS

/// Un componente controlado NECESARIAMENTE tenemos que pasarle el VALOR que va a tener
/// y este VALUE se va a actualizar mediante la funcion onChange

const App = () => {
  const [value, setValue] = useState("");
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <div>
      {/* validacion */}
      {value.length < 10 ? <span>warning: longitud minima de 10</span> : null}
      {/* form */}
      <input type="text" name="campo-1" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
