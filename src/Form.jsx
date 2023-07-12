import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/styles.css";
import "./css/stylesR.css";
import InputMask from 'react-input-mask';

export default function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({ nome: false, email: false, msg: false });
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  function validar() {
    let hasErrors = false;

    const newErrors = {
      nome: !/^[a-zA-Z]+$/.test(nome),
    email: !/^\(\d{2}\) \d{5}-\d{4}$/.test(email),
    msg: msg === "",
    };

    setErrors(newErrors);

    for (const key in newErrors) {
      if (newErrors[key]) {
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setMostrarAlerta(false);
      return;
    }

    const templateParams = {
      from_name: nome,
      email: email,
      message: msg,
    };

    emailjs
      .send("service_leo3s3c", "template_t53alur", templateParams, "VvZtuDi-pFK69_csI")
      .then(
        (response) => {
          setMostrarAlerta(true);
          setNome("");
          setEmail("");
          setMsg("");
        },
        (err) => {
          console.log("Erro: ", err);
          setMostrarAlerta(true);
        }
      );
  }

  return (
    <section className="sectionForm" id="contatos">
      {mostrarAlerta && (
        <div className="panelInfo">
          <div className="contentPanel">
            <p>{mostrarAlerta}</p>
            <p>Mensagem enviada com sucesso!</p>
            <button onClick={() => setMostrarAlerta(false)}>Fechar</button>
          </div>
        </div>
      )}

      <form action="" className="formulario">
        <h2 className="tituloForm">Contate-nos</h2>
      
        <input
          type="text"
          value={nome}
          className={`nomeForm ${errors.nome ? "error" : ""}`}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
          {errors.nome && <span style={{ color: "rgb(35, 162, 247)" }}>O campo 'Nome' é obrigatório.</span>}

          <InputMask
  mask="(99) 99999-9999"
  value={email}
  className={`telefoneForm ${errors.email ? "error" : ""}`}
  placeholder="Telefone"
  onChange={(e) => setEmail(e.target.value)}
/>
        {errors.email && <span style={{ color: "rgb(35, 162, 247)" }}>O campo 'Telefone' é obrigatório.</span>}


        <textarea
          name=""
          value={msg}
          cols="30"
          rows="10"
          className={`textForm ${errors.msg ? "error" : ""}`}
          placeholder="Digite sua mensagem aqui"
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
                {errors.msg && <span style={{ color: "rgb(35, 162, 247)" }}>O campo 'Mensagem' é obrigatório.</span>}

        <input className="botaoForm" type="button" value="Enviar" onClick={() => validar()} />
      </form>
    </section>
  );
}