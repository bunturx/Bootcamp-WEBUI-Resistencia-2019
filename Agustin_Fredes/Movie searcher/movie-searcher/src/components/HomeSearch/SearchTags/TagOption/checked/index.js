import React from "react";
import "./../index.css"

class TagOptionChecked extends React.PureComponent {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.props.check(this.props.selector)
    }

    render(){
        return(
            <div className="tagOption">
                <label  className="tagOptionText"><input onChange={this.handleChange} checked className="tagOptionRadio" type="radio" name="Tag" id=""/>
                <span>
                {this.props.children}
                </span>
                </label>
                
            </div>
        )
    }
}

export default moduleName;