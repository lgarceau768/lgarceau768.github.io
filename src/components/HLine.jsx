import React from 'react'

export default class HLine extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <hr
                style={{
                    color: this.props.color,
                    backgroundColor: this.props.color,
                    width: this.props.width,
                    borderColor: this.props.color
                }}>
            </hr>
        )
    }
}