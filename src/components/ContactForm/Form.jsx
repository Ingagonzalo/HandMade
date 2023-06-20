import React from "react";
import "./Form.css"

export default function Form() {
  const [values, setValues] = React.useState({
    nme: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {

    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }
  console.log(values);
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="nme">Nombre</label> */}
      <input
        id="nme"
        name="nme"
        type="text"
        placeholder="Nombre"
        value={values.nme}
        onChange={handleChange}
      />
      {/* <label htmlFor="email">Email</label> */}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {/* <label htmlFor="phone">Teléfono</label> */}
      <input
        id="phone"
        name="phone"
        type="number"
        placeholder="Teléfono"
        value={values.phone}
        onChange={handleChange}
      />
      {/* <label htmlFor="subject">Asunto</label> */}
      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="Asunto"
        value={values.subject}
        onChange={handleChange}
      />
      {/* <label htmlFor="message">Mensaje</label> */}
      <textarea
        id="message"
        name="message"
        placeholder="Mensaje"
        value={values.message}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}