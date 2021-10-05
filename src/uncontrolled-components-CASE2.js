import { useRef } from "react";

/// FORMS
/// CONTROLLED & UNCONTROLLED

// Cómo funcionan los formularios en HTML?

const App = () => {
  // (3) Podemos acceder a los datos del formulario mediante referencias
  const inputRef = useRef();
  // CONTRA => se va a tener que utilizar UNA REF POR CADA INPUT

  /// CASO FILE
  const fileRef = useRef();

  /// Intercepcion de datos del form accediendo mediante refs
  const handleSubmit = () => {
    // console.log(inputRef.current.value);
    // console.log(fileRef.current.files[0]);
    const form = new FormData();
    form.append("file", fileRef.current.files[0]);
    form.append("campo", inputRef.current.value);
    fetch("/lala", {
      method: "POST",
      body: form,
    });
  };

  return (
    <div>
      <div>
        <span>form</span>
        <input type="text" name="campo-1" ref={inputRef} />
        <input type="file" name="campo-file" ref={fileRef} />
        <input type="submit" value="submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default App;
