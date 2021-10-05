/// FORMS
/// CONTROLLED & UNCONTROLLED COMPONENTS

/// CARACTERISTICAS DE LOS UNCONTROLLED COMPONENTS

/// 1. los componentes CONTROLADOS no se encuentran SINCRONIZADOS con la UI
/// ya que tenemos que ir a buscar los valores de los campos al enviar el form
/// >>>>
/// 2. cada vez que queremos obtener los datos de los inputs
/// vamos a necesitar acceder mediante una funcion en un evento (ej handleSubmit)
/// >>>>
/// 3. no tenemos forma de hacer una validacion en tiempo real

/// USO de UNCONTROLLED components

//// NECESIDAD 1: input type="file"
/// este tipo de inputs son de tipo LECTURA
/// no podemos escribir, no se pueden CONTROLAR
/// siempre se va a utilizar REF

/// NECESIDAD 2: migraciones
/// ya que se pueden copiar y pegar los formularios
/// *sin necesidad de refactors* porque funcionan
/// y hacerlo de manera posterior
/// agilizando o acelerando el proceso de migracion

/// OPTIONAL 3: formularios basicos, sin complejidad
/// puede ser una alternativa

//// CARACTERISTICAS DE LOS CONTROLLED COMPONENTS

/// 1. Siempre tenemos los datos ingresados en el formulario
/// >>> validaciones en tiempo real
/// >>> mejor experiencia de usuario

const App = () => {
  // INTERCEPCIóN los envios del FORM => onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault(); /// para interceptar/prevenir el comportamiento default
    const data = Array.from(new FormData(e.target)); /// returns [['campo-1', 'asd'], ['campo-2', 'asd']]
    const payload = Object.fromEntries(data); /// returns { campo-1: 'asd', campo-2: 'asd'}
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>form</span>
        <input name="campo-1" />
        <input type="file" name="campo-2" />
        {/* this form can set input-files */}
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default App;
