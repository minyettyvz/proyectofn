import React, { useState } from "react";
import { firestore } from "./config/firebase.js";
import "./AddPost.css";

function AddPost() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    firestore.collection("finalProyect").add({
      Nombre: nombre,
      Apellido: apellido,
      Comentario: comentario,
    });
    setNombre("");
    setApellido("");
    setComentario("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-input"
          id="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-input"
          id="apellido"
          placeholder="Ingrese su apellido"
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="comentario" className="form-label">
          Comentario
        </label>
        <textarea
          className="form-textarea"
          id="comentario"
          rows="3"
          placeholder="Ingrese su comentario"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="form-button">
        Publicar
      </button>
    </form>
  );
}

export default AddPost;
