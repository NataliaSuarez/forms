import { useState } from "react";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
import useForm from "./hooks/useForm";

const App = () => {
  const [form, handleChange, reset] = useForm({
    name: "",
    lastname: "",
    email: "",
  });
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    reset();
  };
  // console.log(form, users);
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={handleSubmit}>
              <Input
                label="Nombre"
                field="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                label="Apellido"
                field="lastname"
                placeholder="Apellido"
                value={form.lastname}
                onChange={handleChange}
              />
              <Input
                label="Correo"
                field="email"
                placeholder="example@mail.com"
                value={form.email}
                onChange={handleChange}
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((user) => (
              <li>{`${user.name} ${user.lastname}: ${user.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
};

export default App;
