import React from 'react'

export default class Line extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <hr
                style={{
                    color: this.props.color,
                    backgroundColor: this.props.color,
                    height: this.props.height,
                    borderColor: this.props.color
                }}>
            </hr>
        )
    }
}