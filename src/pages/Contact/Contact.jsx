import React from "react";
import "./Contact.css";
import Form from "../../components/ContactForm/Form";

export default function Contact() {
  return (
    <div className="container">
      <div className="contacto">
      <h1>Contacto</h1>
        <p>
        Whatsapp para consultas y pedidos <br /> +546542132467
        </p>
        <p>
        Horario de atención <br />
        lunes a viernes de 10:00am a 17:00pm       
        </p>
        <p>
        Perfil de Instagram <br />
        instagram.com/handmade.uruguay        
        </p>
      </div>
      <div className="form">

      <Form/>
      </div>
    </div>
  )
}
