import React from "react";
import InputWDesc from "../../Components/InputWDesc"
import MessageArea from "./../../Components/MessageArea"

class Contact extends React.PureComponent{
    submit(event){
        event.preventDefault();
        this.nombre = this.refs.nombre.refs.input.value
        this.correo = this.refs.correo.refs.input.value
        this.mensaje = this.refs.mensaje.refs.textarea.value
        if  (this.correo && this.nombre && this.mensaje) { 
            if (this.mensaje.length >= 10) {
                if ((this.correo.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i))){
                    console.log((`${this.nombre}, ${this.correo}, ${this.mensaje}`))
                }
                else {
                    alert("Correo electronico incorrecto")
                }
            }
            else {
                alert("El mensaje debe tener como nimimo 10 caracteres")
            }

        } 
        else {
            alert("Debes completar todos los campos")
        }
    }

    render(){
      return(
        <form className="contact">
            <div className="contactBox">
                <InputWDesc desc="Nombre" maxCharLength={20} ref="nombre"></InputWDesc>
                <InputWDesc desc="Correo" maxCharLength={30} ref="correo"></InputWDesc>
                <MessageArea desc="Mensaje" maxCharLength={700} ref="mensaje"></MessageArea>
                <button type="button" className="ButtonSubmit" onClick={this.submit.bind(this)}>Enviar</button>
            </div>
        </form>
      )
    }
  }

export default Contact;