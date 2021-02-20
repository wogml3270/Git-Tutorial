import React from 'react'

export default class ValueInput extends React.Component {
   
    handleChange = e => {
        const unit = this.props.unit
        const value = e.target.value
        if(this.props.onChange) {
            this.props.onChange({
                value
            })
        }
    }

    render () {
        const value = this.props.value
        const unit = this.props.unit

        const handleChange = this.handleChange
        return (
            <div>
                <input type='number' value={value} onChange={handleChange}/>{unit}
            </div>
        )
    }
}