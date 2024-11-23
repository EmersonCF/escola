import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    class: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({ name: "", age: "", class: "" });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Escola Municipal de Indianópolis</h1>
      <h3 className="mt-4">Cadastro de Alunos</h3>

      {/* Formulário de Cadastro */}
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Label>Nome do Aluno</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite o nome do aluno"
            required
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Idade</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Digite a idade do aluno"
            required
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Turma</Form.Label>
          <Form.Control
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            placeholder="Digite a turma do aluno"
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-4" variant="primary">
          Cadastrar
        </Button>
      </Form>

      {/* Lista de Alunos */}
      <h3 className="mt-5">Alunos Cadastrados</h3>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Turma</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;