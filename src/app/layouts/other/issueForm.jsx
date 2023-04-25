import React from "react";
import { Button, Form } from "react-bootstrap";

const IssueForm = () => {
  const handleSubmit = () => {
    // do something...
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            id="email"
            type="text"
            name="email"
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="link">Ссылка на страницу с ошибкой:</Form.Label>
          <Form.Control id="link" type="text" name="link" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="description">Описание:</Form.Label>
          <Form.Control id="description" type="text" name="description" />
        </Form.Group>
        <Button type="submit">Отправить</Button>
      </Form>
    </div>
  );
};

export default IssueForm;
