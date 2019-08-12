import React, {Component} from 'react';
import TextField from '../../components/TextField/TextField';

class Form extends Component {

    render () {
        return
            <form>
                <TextField
                name="Nombre"
                label="Nombre"
                id="nombre"
                />
            </form>
    }
}
export default Form;