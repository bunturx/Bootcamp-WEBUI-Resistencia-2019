import React, {Component} from 'react';
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
class Form extends Component {

    render() {
        const { options } = this.props;
        return(
            <form>
                <Select 
                    name="Movie"
                    label="Movie:"
                    id="Movie"
                    className="textfield"
                    options={options}
                    onChange={e=>{console.log(e.target.value)}}
                />
            </form>
        )
    }
}

export default Form;