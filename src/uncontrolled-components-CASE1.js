/// FORMS
/// CONTROLLED & UNCONTROLLED

// Cómo funcionan los formularios en HTML?

// (1) tienen una propiedad de action `action="/to-endpoint" method="POST"`
// pero eso genera un RENDERIZADO

const App = () => {
  // (2) INTERCEPCIóN los envios del FORM => onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault(); /// para interceptar/prevenir el comportamiento default
    const data = Array.from(new FormData(e.target)); /// returns [['campo-1', 'asd'], ['campo-2', 'asd']]
    const payload = Object.fromEntries(data); /// returns { campo-1: 'asd', campo-2: 'asd'}
    // console.log("payload", payload);
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
