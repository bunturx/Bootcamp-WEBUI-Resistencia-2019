import React from "react"

class InputWDesc extends React.PureComponent{
    render(){
        return(
            <div className="InputWDesc">
                <p>{this.props.desc}</p>
                <input ref="input" type="text" maxLength={this.props.maxCharLength} className="InputWDescInput"/>
            </div>
        )
    }
}

export default InputWDesc;