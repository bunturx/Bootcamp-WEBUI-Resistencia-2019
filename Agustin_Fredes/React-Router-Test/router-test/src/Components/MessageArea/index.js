import React from "react"

class MessageArea extends React.PureComponent {
    render(){
        return(
            <div className="MessageArea">
                <p>{this.props.desc}</p>
                <textarea type="text" maxLength={this.props.maxCharLength} className="MessageAreaInput" ref="textarea"/>
            </div>
        )
    }
}

export default MessageArea;